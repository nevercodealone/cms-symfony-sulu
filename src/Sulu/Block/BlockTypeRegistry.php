<?php

declare(strict_types=1);

namespace App\Sulu\Block;

/**
 * Registry of block type schemas for Sulu content blocks.
 *
 * Hardcoded schemas matching XML configs in config/templates/includes/tailwind/blocks/*.xml
 * Using const array per Symfony best practices (constructor injection, no global state).
 *
 * WHY HARDCODED SCHEMAS (NOT AUTO-GENERATED):
 * ===========================================
 * These schemas are intentionally hardcoded, not parsed from XML files.
 *
 * 1. MCP server needs instant access without file I/O on every request
 * 2. Sulu's template XML format is complex with inheritance and includes
 * 3. Schema rarely changes - manual sync is acceptable tradeoff
 * 4. Allows adding MCP-specific metadata (e.g., nested key names)
 *
 * WHEN ADDING NEW BLOCK TYPES:
 * - Add entry to SCHEMAS constant below
 * - Match property names exactly from XML config
 * - Note custom nested names: FAQ uses 'faqs', table uses 'rows', etc.
 *
 * DO NOT attempt to:
 * - Auto-parse from config/templates/includes/tailwind/blocks/*.xml
 * - Use Sulu's StructureMetadataFactory or similar
 * - Generate at runtime from Sulu's ContentTypeManager
 *
 * @see https://symfony.com/doc/current/best_practices.html
 */
final class BlockTypeRegistry
{
    /**
     * Block type schemas with properties and nested blocks.
     *
     * Format:
     * 'type' => [
     *     'properties' => [...],           // Top-level property names
     *     'nested' => 'nestedBlockName',   // Name of nested block array (e.g., 'items', 'faqs', 'rows')
     *     'nestedProperties' => [...],     // Property names within nested items
     * ]
     */
    public const SCHEMAS = [
        // === CONTENT BLOCKS ===
        'headline-paragraphs' => [
            'properties' => ['headline'],
            'nested' => 'items',
            'nestedProperties' => ['type', 'description', 'code', 'language'],
        ],
        'faq' => [
            'properties' => [],
            'nested' => 'faqs',  // NOT "items"!
            'nestedProperties' => ['headline', 'subline'],  // NOT "description"!
        ],
        'code' => [
            'properties' => ['description'],
        ],
        'introduction' => [
            'properties' => ['headline', 'description', 'descriptiontwo'],
            'nested' => 'items',
            'nestedProperties' => ['description'],
        ],
        'table' => [
            'properties' => ['headline', 'description', 'columnheader1', 'columnheader2', 'columnheader3'],
            'nested' => 'rows',  // NOT "items"!
            'nestedProperties' => ['cell1', 'cell2', 'cell3'],
        ],

        // === HERO BLOCKS ===
        'hero' => [
            'properties' => ['image', 'headline', 'description', 'buttonText', 'url'],
        ],
        'hero-startpage' => [
            'properties' => ['image', 'textone', 'texttwo', 'description', 'buttonText', 'buttonLink', 'buttonTextTwo', 'url'],
        ],
        'hero-image-right' => [
            'properties' => ['image', 'headline', 'description'],
            'nested' => 'items',
            'nestedProperties' => ['headline', 'text', 'buttonText', 'buttonLink', 'url'],
        ],
        'heroslider' => [
            'properties' => ['headline', 'description', 'pageurl1', 'pageurl2', 'images'],
        ],

        // === CTA BLOCKS ===
        'cta-button' => [
            'properties' => ['headline', 'description', 'text', 'url', 'texttwo', 'urltwo'],
        ],
        'button' => [
            'properties' => ['buttonText', 'url'],
        ],

        // === FEATURE BLOCKS ===
        'feature' => [
            'properties' => ['subline', 'headline', 'description'],
            'nested' => 'items',
            'nestedProperties' => ['headline', 'description'],
        ],
        'feature-default' => [
            'properties' => ['headline', 'description'],
            'nested' => 'items',
            'nestedProperties' => ['headline', 'description'],
        ],
        'feature-with-icons' => [
            'properties' => ['headline', 'description'],
            'nested' => 'items',
            'nestedProperties' => ['headline', 'text'],
        ],
        'formats' => [
            'properties' => ['headline', 'description'],
            'nested' => 'items',
            'nestedProperties' => ['icon', 'headline', 'description'],
        ],

        // === IMAGE BLOCKS ===
        'image' => [
            'properties' => ['image'],
        ],
        'image-gallery' => [
            'properties' => ['headline', 'description', 'image'],
        ],
        'images-with-heading-and-description' => [
            'properties' => ['image', 'headline', 'description'],
        ],
        'image-with-flags' => [
            'properties' => ['headline', 'image'],
            'nested' => 'flags',  // NOT "items"!
            'nestedProperties' => ['language', 'url'],
        ],
        'logo-gallary' => [
            'properties' => ['headline'],
            'nested' => 'items',
            'nestedProperties' => ['headline', 'url', 'image'],
        ],
        'excerpt-image' => [
            'properties' => ['headline'],
        ],

        // === CONTACT BLOCKS ===
        'team' => [
            'properties' => ['headline', 'description', 'organisation'],
        ],
        'consultant' => [
            'properties' => ['organisation', 'description'],
        ],
        'contact' => [
            'properties' => ['snippets', 'description'],
        ],
        'chat' => [
            'properties' => ['headline', 'description'],
        ],

        // === NAVIGATION BLOCKS ===
        'highlights' => [
            'properties' => ['snippets'],
        ],
        'related-content-by-page-tag' => [
            'properties' => ['snippets'],
        ],
        'subpages-overview' => [
            'properties' => ['items'],
        ],
        'table-of-contents' => [
            'properties' => ['headline'],
        ],

        // === EXTERNAL BLOCKS ===
        'youtube-from-channel' => [
            'properties' => ['headline', 'subline', 'playlistid'],
        ],
        'wordpressposts' => [
            'properties' => ['headline'],
        ],

        // === LEGACY ===
        'hl-des' => [
            'properties' => ['headline', 'description'],
        ],
    ];

    /**
     * Get full schema for a block type.
     *
     * @return array{properties: array<string>, nested?: string, nestedProperties?: array<string>}|null
     */
    public function getSchema(string $type): ?array
    {
        return self::SCHEMAS[$type] ?? null;
    }

    /**
     * Check if block type has nested items.
     */
    public function hasNested(string $type): bool
    {
        return isset(self::SCHEMAS[$type]['nested']);
    }

    /**
     * Get the name of the nested block array (e.g., 'items', 'faqs', 'rows').
     */
    public function getNestedName(string $type): ?string
    {
        return self::SCHEMAS[$type]['nested'] ?? null;
    }

    /**
     * Get top-level property names for a block type.
     *
     * @return array<string>
     */
    public function getProperties(string $type): array
    {
        return self::SCHEMAS[$type]['properties'] ?? [];
    }

    /**
     * Get nested item property names for a block type.
     *
     * @return array<string>
     */
    public function getNestedProperties(string $type): array
    {
        return self::SCHEMAS[$type]['nestedProperties'] ?? [];
    }

    /**
     * Get all registered block type names.
     *
     * @return array<string>
     */
    public function getAllTypes(): array
    {
        return array_keys(self::SCHEMAS);
    }

    /**
     * Check if a block type is registered.
     */
    public function hasType(string $type): bool
    {
        return isset(self::SCHEMAS[$type]);
    }

    /**
     * Get count of registered block types.
     */
    public function count(): int
    {
        return count(self::SCHEMAS);
    }
}
