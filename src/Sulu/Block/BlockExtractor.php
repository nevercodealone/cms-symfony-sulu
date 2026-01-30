<?php

declare(strict_types=1);

namespace App\Sulu\Block;

use DOMDocument;
use DOMXPath;

/**
 * Extracts content blocks from PHPCR XML using BlockTypeRegistry schemas.
 *
 * Supports all 32 block types including those with custom nested block names
 * (e.g., FAQ uses 'faqs', table uses 'rows', image-with-flags uses 'flags').
 *
 * ARCHITECTURE NOTE - DIRECT XML PARSING BY DESIGN:
 * =================================================
 * This class reads blocks by parsing PHPCR XML directly, NOT through
 * Sulu's DocumentManager or ContentTypeManager. This is intentional.
 *
 * The MCP server runs as a long-lived process where DocumentManager causes
 * connection timeouts and state issues. Direct XML parsing is fast, reliable,
 * and doesn't require Sulu's complex hydration pipeline.
 *
 * DO NOT attempt to refactor this to use:
 * - DocumentManager->find() with block property access
 * - Sulu\Component\Content\Compat\StructureManagerInterface
 * - PageDocument->getStructure()->getProperty('blocks')
 *
 * @see PageService For why direct database access is used
 * @see BlockTypeRegistry For block type definitions and schemas
 */
final class BlockExtractor
{
    public function __construct(
        private readonly BlockTypeRegistry $registry,
    ) {
    }

    /**
     * Extract all blocks from PHPCR XML.
     *
     * @return array<int, array<string, mixed>>
     */
    public function extractBlocks(string $xmlString, string $locale): array
    {
        if (empty($xmlString)) {
            return [];
        }

        try {
            $xml = new DOMDocument();
            $xml->loadXML($xmlString);

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            $prefix = "i18n:{$locale}-blocks";

            // Get blocks length
            $blocksLength = $this->getIntProperty($xpath, "{$prefix}-length");
            if ($blocksLength === 0) {
                return [];
            }

            $blocks = [];

            for ($i = 0; $i < $blocksLength; $i++) {
                $block = $this->extractBlock($xpath, $prefix, $i);
                if ($block !== null) {
                    $blocks[] = $block;
                }
            }

            return $blocks;
        } catch (\Exception) {
            return [];
        }
    }

    /**
     * Extract a single block at a given position.
     *
     * @return array<string, mixed>|null
     */
    private function extractBlock(DOMXPath $xpath, string $prefix, int $position): ?array
    {
        $block = ['position' => $position];

        // Get block type
        $type = $this->getProperty($xpath, "{$prefix}-type#{$position}");
        if ($type === null) {
            return null;
        }
        $block['type'] = $type;

        // Get schema for this block type
        $schema = $this->registry->getSchema($type);

        if ($schema !== null) {
            // Properties that may be stored as multi-valued PHPCR properties
            // (Sulu admin creates these with separate <sv:value> per UUID)
            $multiValueProps = ['snippets', 'organisation'];

            // Extract all properties defined in schema
            foreach ($schema['properties'] as $propName) {
                if (in_array($propName, $multiValueProps, true)) {
                    $allValues = $this->getPropertyValues($xpath, "{$prefix}-{$propName}#{$position}");
                    if (!empty($allValues)) {
                        $block[$propName] = $this->decodeMultiValueProperty($propName, $allValues);
                    }
                } else {
                    $value = $this->getProperty($xpath, "{$prefix}-{$propName}#{$position}");
                    if ($value !== null) {
                        // Handle JSON-encoded properties (image, etc.)
                        $block[$propName] = $this->decodePropertyValue($propName, $value);
                    }
                }
            }

            // Extract nested items if block type has them
            if ($this->registry->hasNested($type)) {
                $nestedName = $this->registry->getNestedName($type);
                $nestedProps = $this->registry->getNestedProperties($type);

                if ($nestedName !== null) {
                    $nestedItems = $this->extractNestedItems($xpath, $prefix, $position, $nestedName, $nestedProps);
                    if (!empty($nestedItems)) {
                        $block[$nestedName] = $nestedItems;
                    }
                }
            }
        } else {
            // Fallback for unknown block types: extract common properties
            $this->extractCommonProperties($xpath, $prefix, $position, $block);
        }

        return $block;
    }

    /**
     * Extract nested items for a block.
     *
     * @param array<string> $nestedProps
     * @return array<int, array<string, mixed>>
     */
    private function extractNestedItems(
        DOMXPath $xpath,
        string $prefix,
        int $blockPosition,
        string $nestedName,
        array $nestedProps,
    ): array {
        $items = [];

        // Get nested items length
        $itemsLength = $this->getIntProperty($xpath, "{$prefix}-{$nestedName}#{$blockPosition}-length");

        for ($j = 0; $j < $itemsLength; $j++) {
            $item = [];

            foreach ($nestedProps as $propName) {
                $value = $this->getProperty($xpath, "{$prefix}-{$nestedName}#{$blockPosition}-{$propName}#{$j}");
                if ($value !== null) {
                    // Keep original property names (Twig templates expect them)
                    $item[$propName] = $this->decodePropertyValue($propName, $value);
                }
            }

            // Also try to get settings property
            $settings = $this->getProperty($xpath, "{$prefix}-{$nestedName}#{$blockPosition}-settings#{$j}");
            if ($settings !== null && $settings !== '[]') {
                $item['settings'] = json_decode($settings, true) ?? [];
            }

            // Extract second-level nested items (e.g., tags within cards)
            $tagsLength = $this->getIntProperty($xpath, "{$prefix}-{$nestedName}#{$blockPosition}-tags#{$j}-length");
            if ($tagsLength > 0) {
                $tags = [];
                for ($k = 0; $k < $tagsLength; $k++) {
                    $tag = [];
                    $tagType = $this->getProperty($xpath, "{$prefix}-{$nestedName}#{$blockPosition}-tags#{$j}-type#{$k}");
                    if ($tagType !== null) {
                        $tag['type'] = $tagType;
                    }
                    $tagText = $this->getProperty($xpath, "{$prefix}-{$nestedName}#{$blockPosition}-tags#{$j}-text#{$k}");
                    if ($tagText !== null) {
                        $tag['text'] = $tagText;
                    }
                    if (!empty($tag)) {
                        $tags[] = $tag;
                    }
                }
                if (!empty($tags)) {
                    $item['tags'] = $tags;
                }
            }

            if (!empty($item)) {
                $items[] = $item;
            }
        }

        return $items;
    }

    /**
     * Extract common properties for unknown block types (fallback).
     *
     * @param array<string, mixed> $block
     */
    private function extractCommonProperties(DOMXPath $xpath, string $prefix, int $position, array &$block): void
    {
        // Common properties that many blocks have
        $commonProps = ['headline', 'description', 'image', 'code', 'language', 'url', 'buttonText'];

        foreach ($commonProps as $propName) {
            $value = $this->getProperty($xpath, "{$prefix}-{$propName}#{$position}");
            if ($value !== null) {
                $block[$propName] = $this->decodePropertyValue($propName, $value);
            }
        }

        // Try to extract 'items' as default nested name
        $itemsLength = $this->getIntProperty($xpath, "{$prefix}-items#{$position}-length");
        if ($itemsLength > 0) {
            $items = [];
            for ($j = 0; $j < $itemsLength; $j++) {
                $item = [];
                foreach (['type', 'description', 'headline', 'code', 'language'] as $propName) {
                    $value = $this->getProperty($xpath, "{$prefix}-items#{$position}-{$propName}#{$j}");
                    if ($value !== null) {
                        // Keep original property names (Twig templates expect them)
                        $item[$propName] = $value;
                    }
                }
                if (!empty($item)) {
                    $items[] = $item;
                }
            }
            if (!empty($items)) {
                $block['items'] = $items;
            }
        }
    }

    /**
     * Get a property value from XPath.
     */
    private function getProperty(DOMXPath $xpath, string $name): ?string
    {
        $nodes = $xpath->query('//sv:property[@sv:name="' . $name . '"]/sv:value');
        if ($nodes !== false && $nodes->length > 0 && $nodes->item(0)) {
            return $nodes->item(0)->nodeValue;
        }
        return null;
    }

    /**
     * Get ALL values from a multi-valued PHPCR property.
     *
     * Sulu's snippet_selection and contact_account_selection store data as
     * multi-valued properties with separate <sv:value> elements per UUID.
     * MCP stores them as a single JSON array string in one <sv:value>.
     *
     * @return array<string>
     */
    private function getPropertyValues(DOMXPath $xpath, string $name): array
    {
        $nodes = $xpath->query('//sv:property[@sv:name="' . $name . '"]/sv:value');
        $values = [];
        if ($nodes !== false) {
            for ($i = 0; $i < $nodes->length; $i++) {
                $values[] = $nodes->item($i)->nodeValue;
            }
        }
        return $values;
    }

    /**
     * Get an integer property value from XPath.
     */
    private function getIntProperty(DOMXPath $xpath, string $name): int
    {
        $value = $this->getProperty($xpath, $name);
        return $value !== null ? (int) $value : 0;
    }

    /**
     * Decode property value (handles JSON-encoded properties).
     */
    private function decodePropertyValue(string $propName, string $value): mixed
    {
        // Properties that are JSON-encoded
        $jsonProps = ['image', 'images', 'snippets', 'organisation', 'settings'];

        if (in_array($propName, $jsonProps, true)) {
            $decoded = json_decode($value, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                return $decoded;
            }
        }

        return $value;
    }

    /**
     * Decode a multi-valued PHPCR property into an array.
     *
     * Handles two storage formats:
     * 1. MCP format: single <sv:value> containing JSON array '["uuid-1","uuid-2"]'
     * 2. Sulu native: multiple <sv:value> elements, one UUID per element
     *
     * Always returns an array for consistent downstream processing.
     *
     * @param array<string> $values All <sv:value> contents
     * @return array<mixed>
     */
    private function decodeMultiValueProperty(string $propName, array $values): array
    {
        // Single value: try JSON decode first (MCP format)
        if (count($values) === 1) {
            $decoded = json_decode($values[0], true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                return $decoded;
            }
            // Single non-JSON value: wrap in array for consistent return type
            return [$values[0]];
        }

        // Multiple values: Sulu multi-valued property (one UUID per <sv:value>)
        return $values;
    }
}
