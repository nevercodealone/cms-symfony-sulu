<?php

declare(strict_types=1);

namespace App\Sulu\Block;

use DOMDocument;
use DOMNode;
use DOMXPath;

/**
 * Writes content blocks to PHPCR XML using BlockTypeRegistry schemas.
 *
 * Supports all 32 block types including those with custom nested block names
 * (e.g., FAQ uses 'faqs', table uses 'rows', image-with-flags uses 'flags').
 *
 * ARCHITECTURE NOTE - DIRECT XML MANIPULATION BY DESIGN:
 * ======================================================
 * This class writes blocks by manipulating PHPCR XML directly, NOT through
 * Sulu's DocumentManager or BlockPropertyType. This is intentional.
 *
 * The MCP server runs as a long-lived process where DocumentManager's
 * connection management and entity state cause problems. Direct XML gives
 * us reliable, predictable writes without Sulu's abstraction overhead.
 *
 * DO NOT attempt to refactor this to use:
 * - Sulu\Component\Content\Compat\Block\BlockPropertyType
 * - DocumentManager->persist() / flush()
 * - StructureBridge or PageDocument
 *
 * @see PageService For why direct database access is used
 * @see BlockTypeRegistry For block type definitions and schemas
 */
final class BlockWriter
{
    private const REFERENCE_PROPERTIES = ['snippets', 'organisation'];

    public function __construct(
        private readonly BlockTypeRegistry $registry,
    ) {
    }

    /**
     * Add a block to PHPCR XML document.
     *
     * @param array<string, mixed> $block Block data including 'type' and properties
     * @return int The position where the block was added
     */
    public function addBlock(
        DOMDocument $xml,
        DOMNode $rootNode,
        string $locale,
        int $position,
        array $block,
    ): int {
        $type = $block['type'] ?? '';
        if (empty($type)) {
            throw new \InvalidArgumentException('Block must have a "type" property');
        }

        $prefix = "i18n:{$locale}-blocks";

        // Add block type and settings
        $this->addProperty($xml, $rootNode, "{$prefix}-type#{$position}", $type);
        $this->addProperty($xml, $rootNode, "{$prefix}-settings#{$position}", '[]');

        // Get schema for this block type
        $schema = $this->registry->getSchema($type);

        if ($schema !== null) {
            // Write all top-level properties from schema
            $jsonProps = ['image', 'images', 'settings'];
            foreach ($schema['properties'] as $propName) {
                if (isset($block[$propName])) {
                    // Reference properties: snippets, organisation → sv:type="Reference"
                    if (in_array($propName, self::REFERENCE_PROPERTIES, true) && is_array($block[$propName])) {
                        if (!empty($block[$propName])) {
                            $this->addReferenceProperty($xml, $rootNode, "{$prefix}-{$propName}#{$position}", $block[$propName]);
                        }
                    } elseif (in_array($propName, $jsonProps, true) && is_array($block[$propName])) {
                        // JSON properties must ALWAYS be encoded as JSON strings, never as nested items
                        $value = $this->encodePropertyValue($propName, $block[$propName]);
                        $this->addProperty($xml, $rootNode, "{$prefix}-{$propName}#{$position}", $value);
                    } elseif (is_array($block[$propName]) && $this->isNestedArray($block[$propName])) {
                        // Handle nested arrays (e.g., card1Tags, card2Tags, card3Tags)
                        $nestedProps = $this->registry->getNestedProperties($type);
                        $this->writeNestedItems(
                            $xml,
                            $rootNode,
                            $prefix,
                            $position,
                            $propName,
                            $block[$propName],
                            $nestedProps,
                        );
                    } else {
                        $value = $this->encodePropertyValue($propName, $block[$propName]);
                        $this->addProperty($xml, $rootNode, "{$prefix}-{$propName}#{$position}", $value);
                    }
                }
            }

            // Write nested items if block type has them (for blocks with single nested array)
            if ($this->registry->hasNested($type)) {
                $nestedName = $this->registry->getNestedName($type);
                $nestedProps = $this->registry->getNestedProperties($type);

                if ($nestedName !== null && isset($block[$nestedName]) && is_array($block[$nestedName])) {
                    $this->writeNestedItems(
                        $xml,
                        $rootNode,
                        $prefix,
                        $position,
                        $nestedName,
                        $block[$nestedName],
                        $nestedProps,
                        null,
                        $type,  // Pass block type for registry lookup
                    );
                }
            }
        } else {
            // Fallback for unknown block types: write common properties
            $this->writeCommonProperties($xml, $rootNode, $prefix, $position, $block);
        }

        return $position;
    }

    /**
     * Update an existing block in PHPCR XML.
     *
     * @param array<string, mixed> $blockData Properties to update
     */
    public function updateBlock(
        DOMDocument $xml,
        DOMXPath $xpath,
        string $locale,
        int $position,
        string $type,
        array $blockData,
    ): void {
        $prefix = "i18n:{$locale}-blocks";
        $rootNode = $xpath->query('/sv:node')->item(0);

        if (!$rootNode) {
            throw new \RuntimeException('Invalid XML structure: root node not found');
        }

        // Get schema for this block type
        $schema = $this->registry->getSchema($type);

        foreach ($blockData as $key => $value) {
            // Skip type - it shouldn't be changed
            if ($key === 'type') {
                continue;
            }

            // Check if this is the nested items key
            if ($schema !== null && $this->registry->hasNested($type)) {
                $nestedName = $this->registry->getNestedName($type);
                if ($key === $nestedName && is_array($value)) {
                    $nestedProps = $this->registry->getNestedProperties($type);
                    $this->removeNestedItems($xpath, $prefix, $position, $nestedName);
                    $this->writeNestedItems($xml, $rootNode, $prefix, $position, $nestedName, $value, $nestedProps, null, $type);
                    continue;
                }
            }

            // Handle 'items' for backwards compatibility
            if ($key === 'items' && is_array($value)) {
                $this->removeNestedItems($xpath, $prefix, $position, 'items');
                $this->writeNestedItems($xml, $rootNode, $prefix, $position, 'items', $value, ['type', 'description', 'code', 'language']);
                continue;
            }

            // Reference properties: snippets, organisation → sv:type="Reference"
            if (in_array($key, self::REFERENCE_PROPERTIES, true) && is_array($value)) {
                $propName = $this->mapPropertyName($key, $locale, $position);
                if ($propName !== null) {
                    $this->updateOrAddReferenceProperty($xml, $xpath, $rootNode, $propName, $value);
                }
                continue;
            }

            // Regular property update
            $propName = $this->mapPropertyName($key, $locale, $position);
            if ($propName === null) {
                continue;
            }

            $encodedValue = $this->encodePropertyValue($key, $value);
            $this->updateOrAddProperty($xml, $xpath, $rootNode, $propName, $encodedValue);
        }
    }

    /**
     * Remove all properties for a block at given position.
     */
    public function removeBlockProperties(DOMXPath $xpath, string $locale, int $position): void
    {
        $prefix = "i18n:{$locale}-blocks";
        $pattern = "#{$position}";

        // Find all properties that contain this position marker
        $allProperties = $xpath->query('//sv:property[contains(@sv:name, "' . $prefix . '") and contains(@sv:name, "' . $pattern . '")]');

        if ($allProperties !== false) {
            foreach ($allProperties as $prop) {
                if ($prop instanceof \DOMElement) {
                    $name = $prop->getAttribute('sv:name');
                    // Only remove if this is the main position (not nested item position)
                    if (preg_match('/^' . preg_quote($prefix, '/') . '-[^#]+#' . $position . '(?:-|$)/', $name)) {
                        if ($prop->parentNode) {
                            $prop->parentNode->removeChild($prop);
                        }
                    }
                }
            }
        }
    }

    /**
     * Write nested items for a block.
     *
     * @param array<int, array<string, mixed>> $items
     * @param array<string> $nestedProps
     */
    private function writeNestedItems(
        DOMDocument $xml,
        DOMNode $rootNode,
        string $prefix,
        int $blockPosition,
        string $nestedName,
        array $items,
        array $nestedProps,
        ?string $defaultType = null,
        ?string $blockType = null,
    ): void {
        // Write length
        $this->addProperty($xml, $rootNode, "{$prefix}-{$nestedName}#{$blockPosition}-length", (string) count($items), 'Long');

        // Get nested type from registry first, then fall back to naming convention
        $typeDefault = $defaultType
            ?? ($blockType !== null ? $this->registry->getNestedType($blockType) : null)
            ?? match ($nestedName) {
                'cards' => 'card',
                'tags' => 'tag',
                'rows' => 'row',
                'flags' => 'flag',
                default => 'items',
            };

        foreach ($items as $itemIndex => $item) {
            // Write type
            $itemType = $item['type'] ?? $typeDefault;
            $this->addProperty($xml, $rootNode, "{$prefix}-{$nestedName}#{$blockPosition}-type#{$itemIndex}", $itemType);

            // Write settings
            $this->addProperty($xml, $rootNode, "{$prefix}-{$nestedName}#{$blockPosition}-settings#{$itemIndex}", '[]');

            // Write all nested properties from schema
            foreach ($nestedProps as $propName) {
                // Skip 'tags' - handled separately as nested block
                if ($propName === 'tags') {
                    continue;
                }

                // Map 'content' back to the original property name
                $sourceKey = $this->mapContentToProperty($propName, $item);
                if ($sourceKey !== null && isset($item[$sourceKey])) {
                    $value = $this->encodePropertyValue($propName, $item[$sourceKey]);
                    $this->addProperty($xml, $rootNode, "{$prefix}-{$nestedName}#{$blockPosition}-{$propName}#{$itemIndex}", $value);
                }
            }

            // Handle nested tags within cards (second-level nesting)
            if (isset($item['tags']) && is_array($item['tags'])) {
                $this->writeSecondLevelNestedItems(
                    $xml,
                    $rootNode,
                    $prefix,
                    $blockPosition,
                    $nestedName,
                    $itemIndex,
                    'tags',
                    $item['tags'],
                    ['text'],
                    'tag',
                );
            }
        }
    }

    /**
     * Write second-level nested items (e.g., tags within cards).
     *
     * @param array<int, array<string, mixed>> $items
     * @param array<string> $nestedProps
     */
    private function writeSecondLevelNestedItems(
        DOMDocument $xml,
        DOMNode $rootNode,
        string $prefix,
        int $blockPosition,
        string $parentNestedName,
        int $parentItemIndex,
        string $nestedName,
        array $items,
        array $nestedProps,
        string $defaultType,
    ): void {
        // Property name format: i18n:de-blocks-cards#0-tags#0-length
        $basePrefix = "{$prefix}-{$parentNestedName}#{$blockPosition}-{$nestedName}#{$parentItemIndex}";

        // Write length
        $this->addProperty($xml, $rootNode, "{$basePrefix}-length", (string) count($items), 'Long');

        foreach ($items as $itemIndex => $item) {
            // Write type
            $itemType = $item['type'] ?? $defaultType;
            $this->addProperty($xml, $rootNode, "{$basePrefix}-type#{$itemIndex}", $itemType);

            // Write settings
            $this->addProperty($xml, $rootNode, "{$basePrefix}-settings#{$itemIndex}", '[]');

            // Write all nested properties
            foreach ($nestedProps as $propName) {
                if (isset($item[$propName])) {
                    $value = $this->encodePropertyValue($propName, $item[$propName]);
                    $this->addProperty($xml, $rootNode, "{$basePrefix}-{$propName}#{$itemIndex}", $value);
                }
            }
        }
    }

    /**
     * Remove nested items for a block.
     */
    private function removeNestedItems(DOMXPath $xpath, string $prefix, int $blockPosition, string $nestedName): void
    {
        $pattern = "{$prefix}-{$nestedName}#{$blockPosition}-";
        $allProperties = $xpath->query('//sv:property[contains(@sv:name, "' . $pattern . '")]');

        if ($allProperties !== false) {
            foreach ($allProperties as $prop) {
                if ($prop->parentNode) {
                    $prop->parentNode->removeChild($prop);
                }
            }
        }
    }

    /**
     * Write common properties for unknown block types (fallback).
     *
     * @param array<string, mixed> $block
     */
    private function writeCommonProperties(
        DOMDocument $xml,
        DOMNode $rootNode,
        string $prefix,
        int $position,
        array $block,
    ): void {
        $commonProps = ['headline', 'description', 'image', 'code', 'language', 'url', 'buttonText'];

        foreach ($commonProps as $propName) {
            if (isset($block[$propName])) {
                $value = $this->encodePropertyValue($propName, $block[$propName]);
                $this->addProperty($xml, $rootNode, "{$prefix}-{$propName}#{$position}", $value);
            }
        }

        // Handle items for backwards compatibility
        if (isset($block['items']) && is_array($block['items'])) {
            $this->writeNestedItems(
                $xml,
                $rootNode,
                $prefix,
                $position,
                'items',
                $block['items'],
                ['type', 'description', 'code', 'language'],
            );
        }
    }

    /**
     * Add a PHPCR property to the XML document.
     */
    public function addProperty(
        DOMDocument $xml,
        DOMNode $rootNode,
        string $name,
        string $value,
        string $type = 'String',
    ): void {
        $property = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:property');
        $property->setAttribute('sv:name', $name);
        $property->setAttribute('sv:type', $type);
        $property->setAttribute('sv:multi-valued', '0');

        $valueNode = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:value');
        $valueNode->setAttribute('length', (string) strlen($value));
        $valueNode->appendChild($xml->createTextNode($value));
        $property->appendChild($valueNode);

        $rootNode->appendChild($property);
    }

    /**
     * Add a PHPCR Reference property with multi-valued UUIDs.
     *
     * Used for snippet_selection and contact_account_selection fields
     * which Sulu expects as sv:type="Reference" with sv:multi-valued="1".
     *
     * @param array<string> $uuids
     */
    public function addReferenceProperty(
        DOMDocument $xml,
        DOMNode $rootNode,
        string $name,
        array $uuids,
    ): void {
        $property = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:property');
        $property->setAttribute('sv:name', $name);
        $property->setAttribute('sv:type', 'Reference');
        $property->setAttribute('sv:multi-valued', '1');

        foreach ($uuids as $uuid) {
            $valueNode = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:value');
            $valueNode->setAttribute('length', (string) strlen((string) $uuid));
            $valueNode->appendChild($xml->createTextNode((string) $uuid));
            $property->appendChild($valueNode);
        }

        $rootNode->appendChild($property);
    }

    /**
     * Update existing Reference property or add new one.
     *
     * Removes any existing property (regardless of old type) and writes
     * a fresh Reference property. Handles migration from old String format.
     *
     * @param array<string> $uuids
     */
    private function updateOrAddReferenceProperty(
        DOMDocument $xml,
        DOMXPath $xpath,
        DOMNode $rootNode,
        string $name,
        array $uuids,
    ): void {
        // Remove existing property node (regardless of old type: String or Reference)
        $existingProps = $xpath->query('//sv:property[@sv:name="' . $name . '"]');
        if ($existingProps !== false) {
            foreach ($existingProps as $prop) {
                if ($prop->parentNode) {
                    $prop->parentNode->removeChild($prop);
                }
            }
        }

        // Write fresh Reference property (skip if empty)
        if (!empty($uuids)) {
            $this->addReferenceProperty($xml, $rootNode, $name, $uuids);
        }
    }

    /**
     * Update existing property or add new one.
     */
    private function updateOrAddProperty(
        DOMDocument $xml,
        DOMXPath $xpath,
        DOMNode $rootNode,
        string $name,
        string $value,
    ): void {
        $propNodes = $xpath->query('//sv:property[@sv:name="' . $name . '"]/sv:value');
        if ($propNodes !== false && $propNodes->length > 0 && $propNodes->item(0)) {
            $propNodes->item(0)->nodeValue = $value;
        } else {
            $this->addProperty($xml, $rootNode, $name, $value);
        }
    }

    /**
     * Map property key to PHPCR property name.
     * Returns property name for any valid block property (schema-defined or common).
     */
    private function mapPropertyName(string $key, string $locale, int $position): ?string
    {
        $prefix = "i18n:{$locale}-blocks";

        // Common properties and known property patterns
        $knownProps = [
            'headline', 'description', 'subline', 'content', 'code', 'language',
            'image', 'url', 'buttonText', 'text', 'texttwo', 'urltwo',
            'buttonLink', 'buttonTextTwo', 'textone', 'texttwo',
            'columnheader1', 'columnheader2', 'columnheader3',
            'pageurl1', 'pageurl2', 'playlistid', 'organisation', 'snippets',
            'descriptiontwo',
        ];

        // Check known properties
        if (in_array($key, $knownProps, true)) {
            return "{$prefix}-{$key}#{$position}";
        }

        // card-trio footer properties
        if (preg_match('/^footer/', $key) || $key === 'showFooter') {
            return "{$prefix}-{$key}#{$position}";
        }

        return null;
    }

    /**
     * Map 'content' back to original property name (description, subline, etc.).
     *
     * @param array<string, mixed> $item
     */
    private function mapContentToProperty(string $propName, array $item): ?string
    {
        // Direct match
        if (isset($item[$propName])) {
            return $propName;
        }

        // Map 'content' to description/subline
        if (($propName === 'description' || $propName === 'subline') && isset($item['content'])) {
            return 'content';
        }

        return null;
    }

    /**
     * Check if value is a nested array of items (e.g., tags array).
     *
     * @param array<mixed> $value
     */
    private function isNestedArray(array $value): bool
    {
        if (empty($value)) {
            return false;
        }
        // Check if first element is an associative array (nested item)
        $first = reset($value);
        return is_array($first) && !array_is_list($first);
    }

    /**
     * Encode property value (handles JSON-encoded properties).
     */
    private function encodePropertyValue(string $propName, mixed $value): string
    {
        // Properties that should be JSON-encoded
        // Note: snippets and organisation use PHPCR Reference type, not JSON
        $jsonProps = ['image', 'images', 'settings'];

        if (in_array($propName, $jsonProps, true) && is_array($value)) {
            return json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?: '[]';
        }

        // Code fields need HTML entity encoding for text_editor rendering
        if ($propName === 'code' && is_string($value)) {
            return $this->encodeCodeValue($value);
        }

        return (string) $value;
    }

    /**
     * Encode code content for Sulu text_editor storage.
     *
     * Sulu admin stores code as HTML-escaped content wrapped in <p> tags:
     *   <p>echo &lt;strong&gt;&quot;hello&quot;&lt;/strong&gt;;<br>&nbsp;&nbsp;return true;</p>
     *
     * The MCP API accepts plain text, so we convert it to match Sulu's format.
     */
    private function encodeCodeValue(string $value): string
    {
        // Already encoded (from Sulu admin or previous MCP write)
        if (str_starts_with(trim($value), '<p>')) {
            return $value;
        }

        // 1. Escape HTML entities: < > & "
        $encoded = htmlspecialchars($value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        // 2. Convert newlines to <br>
        $encoded = str_replace("\n", '<br>', $encoded);
        // 3. Convert leading spaces per line to &nbsp;
        $encoded = preg_replace_callback('/(?<=<br>|^)( +)/', function ($m) {
            return str_repeat('&nbsp;', strlen($m[1]));
        }, $encoded);
        // 4. Wrap in <p>
        return '<p>' . $encoded . '</p>';
    }
}
