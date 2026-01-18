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
            // Extract all properties defined in schema
            foreach ($schema['properties'] as $propName) {
                $value = $this->getProperty($xpath, "{$prefix}-{$propName}#{$position}");
                if ($value !== null) {
                    // Handle JSON-encoded properties (image, snippets, etc.)
                    $block[$propName] = $this->decodePropertyValue($propName, $value);
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
}
