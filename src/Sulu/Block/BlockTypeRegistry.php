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
     * Human-readable descriptions of each block type for MCP documentation.
     */
    public const DESCRIPTIONS = [
        // === CONTENT BLOCKS ===
        'headline-paragraphs' => 'Primary block for tutorials with mixed text and code. Uses items[] array with type: description or code.',
        'faq' => 'FAQ section with expandable questions/answers. Uses faqs[] array (NOT items).',
        'code' => 'Standalone code snippet block with syntax highlighting.',
        'introduction' => 'Page introduction with headline, two description fields, and optional items.',
        'table' => 'Data table with 3 columns. Uses rows[] array (NOT items).',

        // === HERO BLOCKS ===
        'hero' => 'Full-width hero banner with image, headline, description, and CTA button.',
        'hero-startpage' => 'Homepage hero with image, two text areas, description, and dual CTAs.',
        'hero-image-right' => 'Hero with image on right side. Uses items[] for multiple CTAs.',
        'heroslider' => 'Image slider with headline, description, and page links.',

        // === CTA BLOCKS ===
        'cta-button' => 'Call-to-action section with headline, description, and up to 2 buttons.',
        'button' => 'Simple button with text and URL.',

        // === FEATURE BLOCKS ===
        'feature' => 'Feature showcase with subline, headline, description, and nested items.',
        'feature-default' => 'Standard feature grid with headline, description, and items.',
        'feature-with-icons' => 'Feature list with icons. Uses items[] with headline and text.',
        'formats' => 'Format showcase with icons, headlines, and descriptions.',

        // === IMAGE BLOCKS ===
        'image' => 'Single image block.',
        'image-gallery' => 'Image gallery with headline and description.',
        'images-with-heading-and-description' => 'Image with overlay text.',
        'image-with-flags' => 'Image with language flags. Uses flags[] array (NOT items).',
        'logo-gallary' => 'Logo carousel/gallery. Uses items[] with headline, url, image.',
        'excerpt-image' => 'Page excerpt with featured image.',

        // === CARD BLOCKS ===
        'card-trio' => '1-3 card section with icons, badges, tags, and links. Header: subline, headline, description. Cards[]: type:"card", icon (code|users|cog|rocket|shield|heart|star|check|universal-access|microchip|bar-chart|lightbulb-o), title, description, tags[] with type:"tag" and text, linkText, linkPage (UUID), badgeType (none|urgent|warning|success|info), badgeText. CTA: ctaText, ctaButtonText, ctaButtonPage (UUID).',

        // === CONTACT BLOCKS ===
        'team' => 'Team section with headline, description, and organisation.',
        'consultant' => 'Consultant profile with organisation and description.',
        'contact' => 'Contact block referencing snippets. Requires snippet UUIDs.',
        'chat' => 'Chat/messaging CTA block.',

        // === NAVIGATION BLOCKS ===
        'highlights' => 'Content highlights referencing snippets.',
        'related-content-by-page-tag' => 'Related content based on page tags.',
        'subpages-overview' => 'List of child pages.',
        'table-of-contents' => 'Auto-generated table of contents.',

        // === EXTERNAL BLOCKS ===
        'html-raw' => 'Raw HTML block for embedding iframes, videos, and custom HTML content.',
        'youtube-from-channel' => 'YouTube playlist embed from channel.',
        'wordpressposts' => 'WordPress posts feed.',

        // === LEGACY ===
        'hl-des' => 'Simple headline and description block (legacy, prefer headline-paragraphs).',
    ];

    /**
     * Example data structures for each block type.
     * These show the correct format for creating blocks via MCP.
     */
    public const EXAMPLES = [
        // === CONTENT BLOCKS ===
        'headline-paragraphs' => [
            'type' => 'headline-paragraphs',
            'headline' => 'Tutorial Section',
            'items' => [
                ['type' => 'description', 'description' => '<p>Introduction text goes here.</p>'],
                ['type' => 'code', 'code' => 'echo "Hello World";', 'language' => 'php'],
                ['type' => 'description', 'description' => '<p>Explanation of the code above.</p>'],
            ],
        ],
        'faq' => [
            'type' => 'faq',
            'faqs' => [
                ['type' => 'items', 'headline' => 'What is PHP?', 'subline' => 'PHP is a server-side scripting language.'],
                ['type' => 'items', 'headline' => 'How do I install it?', 'subline' => 'Use apt-get install php on Ubuntu.'],
            ],
        ],
        'code' => [
            'type' => 'code',
            'description' => '<?php echo "Hello"; ?>',
        ],
        'introduction' => [
            'type' => 'introduction',
            'headline' => 'Welcome',
            'description' => '<p>First paragraph.</p>',
            'descriptiontwo' => '<p>Second paragraph.</p>',
            'items' => [
                ['type' => 'items', 'description' => '<p>Item text.</p>'],
            ],
        ],
        'table' => [
            'type' => 'table',
            'headline' => 'Comparison Table',
            'description' => '<p>Overview of options.</p>',
            'columnheader1' => 'Feature',
            'columnheader2' => 'Option A',
            'columnheader3' => 'Option B',
            'rows' => [
                ['type' => 'row', 'cell1' => 'Price', 'cell2' => '$10', 'cell3' => '$20'],
                ['type' => 'row', 'cell1' => 'Support', 'cell2' => 'Email', 'cell3' => '24/7'],
            ],
        ],

        // === HERO BLOCKS ===
        'hero' => [
            'type' => 'hero',
            'image' => ['id' => 1],
            'headline' => 'Hero Title',
            'description' => '<p>Hero description text.</p>',
            'buttonText' => 'Learn More',
            'url' => '/page',
        ],
        'hero-startpage' => [
            'type' => 'hero-startpage',
            'image' => ['id' => 1],
            'textone' => 'Main Headline',
            'texttwo' => 'Subheadline',
            'description' => '<p>Description</p>',
            'buttonText' => 'Primary CTA',
            'buttonLink' => '/primary',
            'buttonTextTwo' => 'Secondary CTA',
            'url' => '/secondary',
        ],
        'hero-image-right' => [
            'type' => 'hero-image-right',
            'image' => ['id' => 1],
            'headline' => 'Feature Title',
            'description' => '<p>Feature description.</p>',
            'items' => [
                ['type' => 'items', 'headline' => 'CTA', 'text' => 'Description', 'buttonText' => 'Click', 'buttonLink' => '/link', 'url' => '/url'],
            ],
        ],
        'heroslider' => [
            'type' => 'heroslider',
            'headline' => 'Slider Title',
            'description' => '<p>Slider description.</p>',
            'pageurl1' => '/page1',
            'pageurl2' => '/page2',
            'images' => [['id' => 1], ['id' => 2]],
        ],

        // === CTA BLOCKS ===
        'cta-button' => [
            'type' => 'cta-button',
            'headline' => 'Ready to Start?',
            'description' => '<p>Join us today.</p>',
            'text' => 'Get Started',
            'url' => '/signup',
            'texttwo' => 'Learn More',
            'urltwo' => '/about',
        ],
        'button' => [
            'type' => 'button',
            'buttonText' => 'Click Here',
            'url' => '/destination',
        ],

        // === FEATURE BLOCKS ===
        'feature' => [
            'type' => 'feature',
            'subline' => 'Our Features',
            'headline' => 'Why Choose Us',
            'description' => '<p>Feature overview.</p>',
            'items' => [
                ['type' => 'items', 'headline' => 'Fast', 'description' => '<p>Lightning speed.</p>'],
                ['type' => 'items', 'headline' => 'Secure', 'description' => '<p>Bank-level security.</p>'],
            ],
        ],
        'feature-default' => [
            'type' => 'feature-default',
            'headline' => 'Features',
            'description' => '<p>What we offer.</p>',
            'items' => [
                ['type' => 'items', 'headline' => 'Feature 1', 'description' => '<p>Description 1.</p>'],
            ],
        ],
        'feature-with-icons' => [
            'type' => 'feature-with-icons',
            'headline' => 'Key Benefits',
            'description' => '<p>Overview.</p>',
            'items' => [
                ['type' => 'items', 'headline' => 'Benefit 1', 'text' => 'Description text'],
            ],
        ],
        'formats' => [
            'type' => 'formats',
            'headline' => 'Available Formats',
            'description' => '<p>Choose your format.</p>',
            'items' => [
                ['type' => 'items', 'icon' => 'pdf', 'headline' => 'PDF', 'description' => '<p>Download as PDF.</p>'],
            ],
        ],

        // === IMAGE BLOCKS ===
        'image' => [
            'type' => 'image',
            'image' => ['id' => 1],
        ],
        'image-gallery' => [
            'type' => 'image-gallery',
            'headline' => 'Gallery',
            'description' => '<p>Our work.</p>',
            'image' => [['id' => 1], ['id' => 2], ['id' => 3]],
        ],
        'images-with-heading-and-description' => [
            'type' => 'images-with-heading-and-description',
            'image' => ['id' => 1],
            'headline' => 'Image Title',
            'description' => '<p>Image caption.</p>',
        ],
        'image-with-flags' => [
            'type' => 'image-with-flags',
            'headline' => 'Available Languages',
            'image' => ['id' => 1],
            'flags' => [
                ['type' => 'flag', 'language' => 'en', 'url' => '/en'],
                ['type' => 'flag', 'language' => 'de', 'url' => '/de'],
            ],
        ],
        'logo-gallary' => [
            'type' => 'logo-gallary',
            'headline' => 'Our Partners',
            'items' => [
                ['type' => 'items', 'headline' => 'Partner 1', 'url' => 'https://partner1.com', 'image' => ['id' => 1]],
            ],
        ],
        'excerpt-image' => [
            'type' => 'excerpt-image',
            'headline' => 'Featured Content',
        ],

        // === CARD BLOCKS ===
        'card-trio' => [
            'type' => 'card-trio',
            'subline' => 'Our Services',
            'headline' => 'What We Offer',
            'description' => '<p>Choose from our specialized services.</p>',
            'cards' => [
                [
                    'type' => 'card',
                    'icon' => 'code',
                    'title' => 'Development',
                    'description' => '<p>Custom software development.</p>',
                    'tags' => [['type' => 'tag', 'text' => 'PHP'], ['type' => 'tag', 'text' => 'Symfony']],
                    'linkText' => 'Learn more',
                    'linkPage' => 'page-uuid-here',
                    'badgeType' => 'none',
                    'badgeText' => '',
                ],
                [
                    'type' => 'card',
                    'icon' => 'users',
                    'title' => 'Consulting',
                    'description' => '<p>Expert consulting services.</p>',
                    'tags' => [['type' => 'tag', 'text' => 'Strategy']],
                    'linkText' => 'Get started',
                    'linkPage' => 'page-uuid-here',
                    'badgeType' => 'success',
                    'badgeText' => 'Popular',
                ],
                [
                    'type' => 'card',
                    'icon' => 'rocket',
                    'title' => 'Training',
                    'description' => '<p>Professional training courses.</p>',
                    'tags' => [['type' => 'tag', 'text' => 'Workshop']],
                    'linkText' => 'Book now',
                    'linkPage' => 'page-uuid-here',
                    'badgeType' => 'urgent',
                    'badgeText' => 'New',
                ],
            ],
            'ctaText' => 'Need help choosing?',
            'ctaButtonText' => 'Contact Us',
            'ctaButtonPage' => 'page-uuid-here',
        ],

        // === CONTACT BLOCKS ===
        'team' => [
            'type' => 'team',
            'headline' => 'Our Team',
            'description' => '<p>Meet the experts.</p>',
            'organisation' => 'Example Company',
        ],
        'consultant' => [
            'type' => 'consultant',
            'organisation' => 'Consulting Firm',
            'description' => '<p>Expert consulting services.</p>',
        ],
        'contact' => [
            'type' => 'contact',
            'snippets' => ['uuid-of-contact-snippet'],
            'description' => '<p>Contact us.</p>',
        ],
        'chat' => [
            'type' => 'chat',
            'headline' => 'Need Help?',
            'description' => '<p>Start a conversation.</p>',
        ],

        // === NAVIGATION BLOCKS ===
        'highlights' => [
            'type' => 'highlights',
            'snippets' => ['uuid-of-highlight-snippet'],
        ],
        'related-content-by-page-tag' => [
            'type' => 'related-content-by-page-tag',
            'snippets' => ['uuid-of-tag-snippet'],
        ],
        'subpages-overview' => [
            'type' => 'subpages-overview',
            'items' => [],
        ],
        'table-of-contents' => [
            'type' => 'table-of-contents',
            'headline' => 'Contents',
        ],

        // === EXTERNAL BLOCKS ===
        'html-raw' => [
            'type' => 'html-raw',
            'html' => '<iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>',
        ],
        'youtube-from-channel' => [
            'type' => 'youtube-from-channel',
            'headline' => 'Our Videos',
            'subline' => 'Watch and learn',
            'playlistid' => 'PLxxxxxxxx',
        ],
        'wordpressposts' => [
            'type' => 'wordpressposts',
            'headline' => 'Latest Blog Posts',
        ],

        // === LEGACY ===
        'hl-des' => [
            'type' => 'hl-des',
            'headline' => 'Section Title',
            'description' => '<p>Section content.</p>',
        ],
    ];

    /**
     * Block type schemas with properties, nested blocks, and encoding metadata.
     *
     * Format:
     * 'type' => [
     *     'properties' => [...],           // Top-level property names
     *     'nested' => 'nestedBlockName',   // Name of nested block array (e.g., 'items', 'faqs', 'rows')
     *     'nestedProperties' => [...],     // Property names within nested items
     *     'encoding' => [...],             // Property encoding: 'json', 'reference', 'raw', 'code' (default: 'string')
     *     'nestedEncoding' => [...],       // Nested property encoding (same types)
     * ]
     *
     * Encoding types:
     * - 'string' (default): Plain string storage
     * - 'json': JSON-encoded array (image, images, settings)
     * - 'reference': PHPCR multi-valued Reference (snippets, organisation)
     * - 'code': HTML entity encoded for text_editor (code fields)
     * - 'raw': Store as-is without transformation (html)
     */
    public const SCHEMAS = [
        // === CONTENT BLOCKS ===
        'headline-paragraphs' => [
            'properties' => ['headline'],
            'nested' => 'items',
            'nestedType' => 'description',  // XML default-type, can also be 'code'
            'nestedProperties' => ['type', 'description', 'code', 'language'],
            'nestedEncoding' => ['code' => 'code'],
        ],
        'faq' => [
            'properties' => [],
            'nested' => 'faqs',  // NOT "items"!
            'nestedType' => 'items',  // XML default-type - NOT 'faq'!
            'nestedProperties' => ['headline', 'subline'],  // NOT "description"!
        ],
        'code' => [
            'properties' => ['description'],
        ],
        'introduction' => [
            'properties' => ['headline', 'description', 'descriptiontwo'],
            'nested' => 'items',
            'nestedType' => 'items',  // XML default-type
            'nestedProperties' => ['description'],
        ],
        'table' => [
            'properties' => ['headline', 'description', 'columnheader1', 'columnheader2', 'columnheader3'],
            'nested' => 'rows',  // NOT "items"!
            'nestedType' => 'row',  // XML default-type
            'nestedProperties' => ['cell1', 'cell2', 'cell3'],
        ],

        // === HERO BLOCKS ===
        'hero' => [
            'properties' => ['image', 'headline', 'description', 'buttonText', 'url'],
            'encoding' => ['image' => 'json'],
        ],
        'hero-startpage' => [
            'properties' => ['image', 'textone', 'texttwo', 'description', 'buttonText', 'buttonLink', 'buttonTextTwo', 'url'],
            'encoding' => ['image' => 'json'],
        ],
        'hero-image-right' => [
            'properties' => ['image', 'headline', 'description'],
            'encoding' => ['image' => 'json'],
            'nested' => 'items',
            'nestedType' => 'items',  // XML default-type
            'nestedProperties' => ['headline', 'text', 'buttonText', 'buttonLink', 'url'],
        ],
        'heroslider' => [
            'properties' => ['headline', 'description', 'pageurl1', 'pageurl2', 'images'],
            'encoding' => ['images' => 'json'],
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
            'nestedType' => 'items',  // XML default-type
            'nestedProperties' => ['headline', 'description'],
        ],
        'feature-default' => [
            'properties' => ['headline', 'description'],
            'nested' => 'items',
            'nestedType' => 'items',  // XML default-type
            'nestedProperties' => ['headline', 'description'],
        ],
        'feature-with-icons' => [
            'properties' => ['headline', 'description'],
            'nested' => 'items',
            'nestedType' => 'items',  // XML default-type
            'nestedProperties' => ['headline', 'text'],
        ],
        'formats' => [
            'properties' => ['headline', 'description'],
            'nested' => 'items',
            'nestedType' => 'items',  // XML default-type
            'nestedProperties' => ['icon', 'headline', 'description'],
        ],

        // === IMAGE BLOCKS ===
        'image' => [
            'properties' => ['image'],
            'encoding' => ['image' => 'json'],
        ],
        'image-gallery' => [
            'properties' => ['headline', 'description', 'image'],
            'encoding' => ['image' => 'json'],
        ],
        'images-with-heading-and-description' => [
            'properties' => ['image', 'headline', 'description'],
            'encoding' => ['image' => 'json'],
        ],
        'image-with-flags' => [
            'properties' => ['headline', 'image'],
            'encoding' => ['image' => 'json'],
            'nested' => 'flags',  // NOT "items"!
            'nestedType' => 'flag',  // XML default-type
            'nestedProperties' => ['language', 'url'],
        ],
        'logo-gallary' => [
            'properties' => ['headline'],
            'nested' => 'items',
            'nestedType' => 'items',  // XML default-type
            'nestedProperties' => ['headline', 'url', 'image'],
            'nestedEncoding' => ['image' => 'json'],
        ],
        'excerpt-image' => [
            'properties' => ['headline'],
        ],

        // === CARD BLOCKS ===
        'card-trio' => [
            'properties' => ['subline', 'headline', 'description', 'ctaText', 'ctaButtonText', 'ctaButtonPage'],
            'nested' => 'cards',
            'nestedType' => 'card',  // XML default-type
            'nestedProperties' => ['type', 'icon', 'title', 'description', 'tags', 'linkText', 'linkPage', 'badgeType', 'badgeText'],
        ],

        // === CONTACT BLOCKS ===
        'team' => [
            'properties' => ['headline', 'description', 'organisation'],
            'encoding' => ['organisation' => 'reference'],
        ],
        'consultant' => [
            'properties' => ['organisation', 'description'],
            'encoding' => ['organisation' => 'reference'],
        ],
        'contact' => [
            'properties' => ['snippets', 'description'],
            'encoding' => ['snippets' => 'reference'],
        ],
        'chat' => [
            'properties' => ['headline', 'description'],
        ],

        // === NAVIGATION BLOCKS ===
        'highlights' => [
            'properties' => ['snippets'],
            'encoding' => ['snippets' => 'reference'],
        ],
        'related-content-by-page-tag' => [
            'properties' => ['snippets'],
            'encoding' => ['snippets' => 'reference'],
        ],
        'subpages-overview' => [
            'properties' => ['items'],
        ],
        'table-of-contents' => [
            'properties' => ['headline'],
        ],

        // === EXTERNAL BLOCKS ===
        'html-raw' => [
            'properties' => ['html'],
            'encoding' => ['html' => 'raw'],
        ],
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
     * Get the type value for nested items (e.g., 'items', 'card', 'row').
     *
     * This matches the default-type in the XML config and is used by BlockWriter
     * to set the correct type value when writing nested block items.
     */
    public function getNestedType(string $type): ?string
    {
        return self::SCHEMAS[$type]['nestedType'] ?? null;
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

    /**
     * Get human-readable description of a block type.
     */
    public function getDescription(string $type): ?string
    {
        return self::DESCRIPTIONS[$type] ?? null;
    }

    /**
     * Get example data structure for a block type.
     *
     * @return array<string, mixed>|null
     */
    public function getExample(string $type): ?array
    {
        return self::EXAMPLES[$type] ?? null;
    }

    /**
     * Get all descriptions.
     *
     * @return array<string, string>
     */
    public function getAllDescriptions(): array
    {
        return self::DESCRIPTIONS;
    }

    /**
     * Get all examples.
     *
     * @return array<string, array<string, mixed>>
     */
    public function getAllExamples(): array
    {
        return self::EXAMPLES;
    }

    /**
     * Get encoding type for a top-level property.
     *
     * @return string One of: 'string' (default), 'json', 'reference', 'code', 'raw'
     */
    public function getPropertyEncoding(string $type, string $property): string
    {
        return self::SCHEMAS[$type]['encoding'][$property] ?? 'string';
    }

    /**
     * Get encoding type for a nested property.
     *
     * @return string One of: 'string' (default), 'json', 'reference', 'code', 'raw'
     */
    public function getNestedPropertyEncoding(string $type, string $property): string
    {
        return self::SCHEMAS[$type]['nestedEncoding'][$property] ?? 'string';
    }

    /**
     * Check if a top-level property uses PHPCR Reference type.
     */
    public function isReferenceProperty(string $type, string $property): bool
    {
        return $this->getPropertyEncoding($type, $property) === 'reference';
    }

    /**
     * Check if a top-level property should be JSON-encoded.
     */
    public function isJsonProperty(string $type, string $property): bool
    {
        return $this->getPropertyEncoding($type, $property) === 'json';
    }

    /**
     * Check if a top-level property should be stored raw (no transformation).
     */
    public function isRawProperty(string $type, string $property): bool
    {
        return $this->getPropertyEncoding($type, $property) === 'raw';
    }

    /**
     * Check if a top-level property is valid for a block type.
     * Returns true if the property is in the schema's properties list.
     */
    public function isValidProperty(string $type, string $property): bool
    {
        $schema = self::SCHEMAS[$type] ?? null;
        if ($schema === null) {
            return false;
        }
        return in_array($property, $schema['properties'], true);
    }
}
