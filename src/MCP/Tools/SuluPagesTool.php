<?php

declare(strict_types=1);

namespace App\MCP\Tools;

use App\Sulu\Block\BlockTypeRegistry;
use App\Sulu\Service\MediaService;
use App\Sulu\Service\PageService;
use App\Sulu\Service\SnippetService;
use KLP\KlpMcpServer\Services\ProgressService\ProgressNotifierInterface;
use KLP\KlpMcpServer\Services\ToolService\Annotation\ToolAnnotation;
use KLP\KlpMcpServer\Services\ToolService\StreamableToolInterface;
use KLP\KlpMcpServer\Services\ToolService\Result\TextToolResult;
use KLP\KlpMcpServer\Services\ToolService\Result\ToolResultInterface;
use KLP\KlpMcpServer\Services\ToolService\Schema\PropertyType;
use KLP\KlpMcpServer\Services\ToolService\Schema\SchemaProperty;
use KLP\KlpMcpServer\Services\ToolService\Schema\StructuredSchema;

/**
 * MCP Tool for Sulu CMS page and block operations.
 *
 * ARCHITECTURE NOTE - DIRECT DATABASE BY DESIGN:
 * ==============================================
 * This tool uses PageService which operates via direct DBAL queries to the
 * phpcr_nodes table, NOT via Sulu's DocumentManager.
 *
 * This is intentional - MCP runs as a long-lived process where DocumentManager
 * causes connection timeouts, entity state corruption, and "MySQL server has
 * gone away" errors. DO NOT refactor to use DocumentManager.
 *
 * @see PageService For the actual database operations
 * @see llms.txt For full architecture documentation
 */
class SuluPagesTool implements StreamableToolInterface
{
    public function __construct(
        private readonly PageService $pageService,
        private readonly BlockTypeRegistry $blockTypeRegistry,
        private readonly SnippetService $snippetService,
        private readonly MediaService $mediaService,
    ) {
    }

    public function isStreaming(): bool
    {
        return false;
    }

    public function setProgressNotifier(ProgressNotifierInterface $progressNotifier): void
    {
        // Not used for non-streaming tool
    }

    public function getName(): string
    {
        return 'sulu_pages';
    }

    public function getDescription(): string
    {
        return 'Sulu CMS pages. Actions: list, get, create_page, copy_page, update_excerpt, add_block, update_block, append_to_block, move_block, remove_block, remove_blocks, publish, unpublish, list_block_types, get_block_schema, list_snippets, list_media, upload_media, list_collections. ' .
            'CREATE PAGE: parentPath, title, resourceSegment required. Optional: seoTitle, seoDescription, excerptTitle, excerptDescription, excerptImage (media ID), publish. ' .
            'COPY PAGE: sourcePath + title + resourceSegment. Copies all blocks and inherits excerpt from source. ' .
            'UPDATE EXCERPT: path + excerptTitle/excerptDescription/excerptImage. Excerpts are teaser metadata shown in listing pages, subpages-overview blocks, and social sharing previews. ' .
            'DEFAULT BLOCK: headline-paragraphs for ALL content: {"type":"headline-paragraphs","headline":"Title","items":[{"type":"description","description":"<p>Text</p>"}]}. ' .
            'For code: {"type":"headline-paragraphs","headline":"Code Example","items":[{"type":"description","description":"<p>Intro</p>"},{"type":"code","code":"echo 1;","language":"php"}]}. ' .
            'OTHER BLOCKS: faq (faqs array), table (rows array), feature, hero, contact, cta-button, image-gallery. ' .
            'FAQ: {"type":"faq","faqs":[{"headline":"Question?","subline":"Answer"}]}. ' .
            'SUBPAGES-OVERVIEW: requires dataSource (UUID of source page). Optional: includeSubFolders (default true). ' .
            'FIELD TYPES: Only description/descriptiontwo/code/html accept HTML. All other fields (headline, subline, buttonText, title, etc.) are plain text — never use HTML tags in them. ' .
            'Languages: php, bash, javascript, html, css, xml, yaml, json. AVOID: <pre><code> in HTML, <?php tags. ' .
            'UPLOAD MEDIA: upload_media + title + sourceUrl (URL to download) or filePath (server path). Optional: collectionId (default: 1), filename (custom SEO filename with extension). Returns media ID for use in blocks/excerpts. ' .
            'LIST COLLECTIONS: list_collections returns all media collections with IDs for upload_media collectionId parameter.';
    }

    public function getInputSchema(): StructuredSchema
    {
        return new StructuredSchema(
            new SchemaProperty(
                name: 'action',
                type: PropertyType::STRING,
                description: 'Action to perform. Values: list, get, create_page, copy_page, update_excerpt, add_block, update_block, append_to_block, move_block, remove_block, remove_blocks, publish, unpublish, list_block_types, get_block_schema, list_snippets, list_media, upload_media, list_collections',
                required: true
            ),
            new SchemaProperty(
                name: 'path',
                type: PropertyType::STRING,
                description: 'Page path, e.g. /cmf/example/contents/glossare/nca-php-glossar/phpunit',
                required: false
            ),
            new SchemaProperty(
                name: 'pathPrefix',
                type: PropertyType::STRING,
                description: 'For "list" action: filter pages by path prefix, e.g. /cmf/example/contents/glossare',
                required: false
            ),
            new SchemaProperty(
                name: 'sourcePath',
                type: PropertyType::STRING,
                description: 'For copy_page: PHPCR path of source page to copy from',
                required: false
            ),
            new SchemaProperty(
                name: 'locale',
                type: PropertyType::STRING,
                description: 'Language code: de or en (default: de)',
                required: false
            ),
            new SchemaProperty(
                name: 'blockType',
                type: PropertyType::STRING,
                description: 'Block type for add_block. Values: headline-paragraphs (with items), hl-des, text, image, code, quote, video',
                required: false
            ),
            new SchemaProperty(
                name: 'headline',
                type: PropertyType::STRING,
                description: 'Block headline text',
                required: false
            ),
            new SchemaProperty(
                name: 'content',
                type: PropertyType::STRING,
                description: 'Simple block content (HTML). Use "items" instead for blocks with mixed text and code',
                required: false
            ),
            new SchemaProperty(
                name: 'items',
                type: PropertyType::STRING,
                description: 'JSON array of items. For headline-paragraphs: [{"type":"description","content":"<p>HTML</p>"},{"type":"code","code":"...","language":"php"}]. For FAQ append_to_block: [{"headline":"Question?","subline":"Answer"}]. For table: [{"col1":"...","col2":"..."}]',
                required: false
            ),
            new SchemaProperty(
                name: 'position',
                type: PropertyType::INTEGER,
                description: 'Block position (0-based index). For add_block: where to insert. For update_block/remove_block/append_to_block: which block to modify',
                required: false
            ),
            new SchemaProperty(
                name: 'from_position',
                type: PropertyType::INTEGER,
                description: 'For move_block: source position (0-based)',
                required: false
            ),
            new SchemaProperty(
                name: 'to_position',
                type: PropertyType::INTEGER,
                description: 'For move_block: target position (0-based)',
                required: false
            ),
            new SchemaProperty(
                name: 'parentPath',
                type: PropertyType::STRING,
                description: 'For create_page: Parent page PHPCR path, e.g. /cmf/example/contents/glossare',
                required: false
            ),
            new SchemaProperty(
                name: 'title',
                type: PropertyType::STRING,
                description: 'For create_page: Page title',
                required: false
            ),
            new SchemaProperty(
                name: 'resourceSegment',
                type: PropertyType::STRING,
                description: 'For create_page: URL slug starting with /, e.g. /my-page (only lowercase letters, numbers, hyphens)',
                required: false
            ),
            new SchemaProperty(
                name: 'seoTitle',
                type: PropertyType::STRING,
                description: 'For create_page: SEO meta title (defaults to page title if not set)',
                required: false
            ),
            new SchemaProperty(
                name: 'seoDescription',
                type: PropertyType::STRING,
                description: 'For create_page: SEO meta description',
                required: false
            ),
            new SchemaProperty(
                name: 'publish',
                type: PropertyType::STRING,
                description: 'For create_page: Publish immediately after creation - "true" or "false" (default: "false")',
                required: false
            ),
            new SchemaProperty(
                name: 'excerptTitle',
                type: PropertyType::STRING,
                description: 'For create_page/copy_page/update_excerpt: Excerpt title for preview cards and listing pages',
                required: false
            ),
            new SchemaProperty(
                name: 'excerptDescription',
                type: PropertyType::STRING,
                description: 'For create_page/copy_page/update_excerpt: Excerpt description for preview cards and listing pages',
                required: false
            ),
            new SchemaProperty(
                name: 'excerptImage',
                type: PropertyType::INTEGER,
                description: 'For create_page/copy_page/update_excerpt: Media ID for excerpt image, e.g. 993 (use list_media to find IDs)',
                required: false
            ),
            new SchemaProperty(
                name: 'snippets',
                type: PropertyType::STRING,
                description: 'For contact block: JSON array of snippet UUIDs to reference, e.g. ["uuid1", "uuid2"]',
                required: false
            ),
            new SchemaProperty(
                name: 'text',
                type: PropertyType::STRING,
                description: 'For cta-button block: Primary button text',
                required: false
            ),
            new SchemaProperty(
                name: 'url',
                type: PropertyType::STRING,
                description: 'For cta-button/quote block: Primary button URL or quote source URL',
                required: false
            ),
            new SchemaProperty(
                name: 'role',
                type: PropertyType::STRING,
                description: 'For quote block: Author role/title, e.g. "CEO Anthropic"',
                required: false
            ),
            new SchemaProperty(
                name: 'source',
                type: PropertyType::STRING,
                description: 'For quote block: Publication source, e.g. "via Business Punk"',
                required: false
            ),
            new SchemaProperty(
                name: 'date',
                type: PropertyType::STRING,
                description: 'For quote block: Publication date, e.g. "28. Januar 2026"',
                required: false
            ),
            new SchemaProperty(
                name: 'texttwo',
                type: PropertyType::STRING,
                description: 'For cta-button block: Secondary button text',
                required: false
            ),
            new SchemaProperty(
                name: 'urltwo',
                type: PropertyType::STRING,
                description: 'For cta-button block: Secondary button URL',
                required: false
            ),
            new SchemaProperty(
                name: 'snippetType',
                type: PropertyType::STRING,
                description: 'For list_snippets action: filter by snippet type (e.g. "contact", "team")',
                required: false
            ),
            new SchemaProperty(
                name: 'blockTypeName',
                type: PropertyType::STRING,
                description: 'For get_block_schema action: name of the block type to get schema for (e.g. "faq", "headline-paragraphs")',
                required: false
            ),
            new SchemaProperty(
                name: 'search',
                type: PropertyType::STRING,
                description: 'For list_media action: search term to filter media by title or filename',
                required: false
            ),
            new SchemaProperty(
                name: 'collectionId',
                type: PropertyType::INTEGER,
                description: 'For list_media action: filter media by collection ID',
                required: false
            ),
            new SchemaProperty(
                name: 'limit',
                type: PropertyType::INTEGER,
                description: 'For list_media action: maximum number of results (default: 50)',
                required: false
            ),
            new SchemaProperty(
                name: 'offset',
                type: PropertyType::INTEGER,
                description: 'For list_media action: pagination offset (default: 0)',
                required: false
            ),
            new SchemaProperty(
                name: 'image',
                type: PropertyType::STRING,
                description: 'For hero/image blocks: media ID or JSON, e.g. "42" or "{\"ids\":[42]}"',
                required: false
            ),
            new SchemaProperty(
                name: 'images',
                type: PropertyType::STRING,
                description: 'For heroslider block: JSON array of media IDs, e.g. "[100, 101, 102]"',
                required: false
            ),
            new SchemaProperty(
                name: 'sourceUrl',
                type: PropertyType::STRING,
                description: 'For upload_media action: URL to download image from (http/https only)',
                required: false
            ),
            new SchemaProperty(
                name: 'filePath',
                type: PropertyType::STRING,
                description: 'For upload_media action: local server path to image file',
                required: false
            ),
            new SchemaProperty(
                name: 'filename',
                type: PropertyType::STRING,
                description: 'For upload_media action: custom filename for SEO, e.g. "php-glossar-phpunit-2026.png". Include extension. If omitted, derived from URL or file path',
                required: false
            ),
            new SchemaProperty(
                name: 'dataSource',
                type: PropertyType::STRING,
                description: 'For subpages-overview block: UUID of the source page whose subpages to display',
                required: false
            ),
            new SchemaProperty(
                name: 'includeSubFolders',
                type: PropertyType::STRING,
                description: 'For subpages-overview block: include nested subfolders - "true" (default) or "false"',
                required: false
            ),
            new SchemaProperty(
                name: 'columnheader1',
                type: PropertyType::STRING,
                description: 'For table block: First column header text',
                required: false
            ),
            new SchemaProperty(
                name: 'columnheader2',
                type: PropertyType::STRING,
                description: 'For table block: Second column header text',
                required: false
            ),
            new SchemaProperty(
                name: 'columnheader3',
                type: PropertyType::STRING,
                description: 'For table block: Third column header text',
                required: false
            ),
            new SchemaProperty(
                name: 'author',
                type: PropertyType::STRING,
                description: 'For quote block: Author name, e.g. "Dario Amodei"',
                required: false
            ),
            new SchemaProperty(
                name: 'positions',
                type: PropertyType::STRING,
                description: 'For remove_blocks: JSON array of positions to remove, e.g. [7, 5, 3]. Auto-sorted highest-first.',
                required: false
            ),
        );
    }

    public function getAnnotations(): ToolAnnotation
    {
        return new ToolAnnotation();
    }

    /**
     * @param array<string, mixed> $arguments
     */
    public function execute(array $arguments): ToolResultInterface
    {
        $action = $arguments['action'] ?? 'list';
        $locale = $arguments['locale'] ?? 'de';

        return match ($action) {
            'list' => $this->listPages($arguments['pathPrefix'] ?? '/cmf/example/contents', $locale),
            'get' => $this->getPage($arguments['path'] ?? '', $locale),
            'get_structure' => $this->getPageStructure($arguments['path'] ?? '', $locale),
            'get_block' => $this->getBlock($arguments, $locale),
            'create_page' => $this->createPage($arguments, $locale),
            'copy_page' => $this->copyPageAction($arguments, $locale),
            'update_excerpt' => $this->updateExcerptAction($arguments, $locale),
            'add_block' => $this->addBlock($arguments, $locale),
            'update_block' => $this->updateBlock($arguments, $locale),
            'append_to_block' => $this->appendToBlock($arguments, $locale),
            'move_block' => $this->moveBlock($arguments, $locale),
            'remove_block' => $this->removeBlock($arguments, $locale),
            'remove_blocks' => $this->removeBlocksBatch($arguments, $locale),
            'publish' => $this->publishPage($arguments['path'] ?? '', $locale),
            'unpublish' => $this->unpublishPage($arguments['path'] ?? '', $locale),
            'list_block_types' => $this->listBlockTypes(),
            'get_block_schema' => $this->getBlockSchema($arguments['blockTypeName'] ?? ''),
            'list_snippets' => $this->listSnippets($arguments['snippetType'] ?? null, $locale),
            'list_media' => $this->listMedia($arguments, $locale),
            'upload_media' => $this->uploadMedia($arguments, $locale),
            'list_collections' => $this->listCollections($locale),
            default => new TextToolResult("Unknown action: $action"),
        };
    }

    private function listPages(string $pathPrefix, string $locale): ToolResultInterface
    {
        $pages = $this->pageService->listPages($locale, $pathPrefix);

        return new TextToolResult(json_encode($pages, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '[]');
    }

    private function getPage(string $path, string $locale): ToolResultInterface
    {
        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        $page = $this->pageService->getPage($path, $locale);

        if ($page === null) {
            return new TextToolResult('Page not found');
        }

        return new TextToolResult(json_encode($page, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    private function getPageStructure(string $path, string $locale): ToolResultInterface
    {
        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        $structure = $this->pageService->getPageStructure($path, $locale);
        if ($structure === null) {
            return new TextToolResult('Page not found');
        }

        return new TextToolResult(json_encode($structure, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * @param array<string, mixed> $arguments
     */
    private function getBlock(array $arguments, string $locale): ToolResultInterface
    {
        $path = $arguments['path'] ?? '';
        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        $position = (int) ($arguments['position'] ?? -1);
        if ($position < 0) {
            return new TextToolResult('Error: position is required');
        }

        $page = $this->pageService->getPage($path, $locale);
        if ($page === null) {
            return new TextToolResult('Page not found');
        }

        $blocks = $page['blocks'];
        if ($position >= count($blocks)) {
            return new TextToolResult("Error: Block position {$position} out of range (0-" . (count($blocks) - 1) . ")");
        }

        return new TextToolResult(json_encode([
            'success' => true,
            'block' => $blocks[$position],
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * @param array<string, mixed> $arguments
     */
    private function createPage(array $arguments, string $locale): ToolResultInterface
    {
        $data = [
            'parentPath' => $arguments['parentPath'] ?? '',
            'title' => $arguments['title'] ?? '',
            'resourceSegment' => $arguments['resourceSegment'] ?? '',
            'seoTitle' => $arguments['seoTitle'] ?? null,
            'seoDescription' => $arguments['seoDescription'] ?? null,
            'publish' => ($arguments['publish'] ?? 'false') === 'true' || ($arguments['publish'] ?? false) === true,
            'excerptTitle' => $arguments['excerptTitle'] ?? null,
            'excerptDescription' => $arguments['excerptDescription'] ?? null,
            'excerptImage' => isset($arguments['excerptImage']) ? (int) $arguments['excerptImage'] : null,
        ];

        $result = $this->pageService->createPage($data, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * Copy a page with all blocks to a new location.
     *
     * @param array<string, mixed> $arguments
     */
    private function copyPageAction(array $arguments, string $locale): ToolResultInterface
    {
        $data = [
            'sourcePath' => $arguments['sourcePath'] ?? $arguments['path'] ?? '',
            'parentPath' => $arguments['parentPath'] ?? null,
            'title' => $arguments['title'] ?? '',
            'resourceSegment' => $arguments['resourceSegment'] ?? '',
            'seoTitle' => $arguments['seoTitle'] ?? null,
            'seoDescription' => $arguments['seoDescription'] ?? null,
            'excerptTitle' => $arguments['excerptTitle'] ?? null,
            'excerptDescription' => $arguments['excerptDescription'] ?? null,
            'excerptImage' => isset($arguments['excerptImage']) ? (int) $arguments['excerptImage'] : null,
            'publish' => ($arguments['publish'] ?? 'false') === 'true' || ($arguments['publish'] ?? false) === true,
        ];

        $result = $this->pageService->copyPage($data, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * Update excerpt data on an existing page.
     *
     * @param array<string, mixed> $arguments
     */
    private function updateExcerptAction(array $arguments, string $locale): ToolResultInterface
    {
        $path = $arguments['path'] ?? '';
        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        $data = [];
        if (array_key_exists('excerptTitle', $arguments)) {
            $data['excerptTitle'] = $arguments['excerptTitle'];
        }
        if (array_key_exists('excerptDescription', $arguments)) {
            $data['excerptDescription'] = $arguments['excerptDescription'];
        }
        if (array_key_exists('excerptImage', $arguments)) {
            $data['excerptImage'] = $arguments['excerptImage'] !== null ? (int) $arguments['excerptImage'] : null;
        }

        if (empty($data)) {
            return new TextToolResult('Error: at least one of excerptTitle, excerptDescription, excerptImage is required');
        }

        $result = $this->pageService->updateExcerpt($path, $data, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * @param array<string, mixed> $arguments
     */
    private function addBlock(array $arguments, string $locale): ToolResultInterface
    {
        $path = $arguments['path'] ?? '';
        $blockType = $arguments['blockType'] ?? 'headline-paragraphs';
        $headline = $arguments['headline'] ?? '';
        $position = (int) ($arguments['position'] ?? 0);

        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        // Handle subpages-overview: build smart_content JSON config
        if ($blockType === 'subpages-overview') {
            $dataSource = $arguments['dataSource'] ?? null;
            if (empty($dataSource)) {
                return new TextToolResult('Error: subpages-overview block requires dataSource parameter (UUID of source page)');
            }

            $includeSubFolders = ($arguments['includeSubFolders'] ?? 'true') !== 'false';

            $smartContentConfig = json_encode([
                'audienceTargeting' => null,
                'categories' => null,
                'categoryOperator' => null,
                'dataSource' => $dataSource,
                'includeSubFolders' => $includeSubFolders,
                'limitResult' => null,
                'sortBy' => null,
                'sortMethod' => null,
                'tagOperator' => null,
                'tags' => null,
                'types' => null,
                'presentAs' => null,
            ]) ?: '{}';

            $block = [
                'type' => 'subpages-overview',
                'items' => $smartContentConfig,
            ];

            $result = $this->pageService->addBlock($path, $block, $position, $locale);

            return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT) ?: '{}');
        }

        // Check if items parameter is provided (for structured blocks)
        if (isset($arguments['items'])) {
            // Ensure valid UTF-8 before JSON parsing
            $itemsRaw = mb_convert_encoding($arguments['items'], 'UTF-8', 'UTF-8');
            $items = json_decode($itemsRaw, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                // Retry with invalid UTF-8 substitution
                $items = json_decode($itemsRaw, true, 512, JSON_INVALID_UTF8_SUBSTITUTE);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    return new TextToolResult('Error: items must be valid JSON array. JSON error: ' . json_last_error_msg() . '. First 200 chars: ' . mb_substr($arguments['items'], 0, 200));
                }
            }
            // Normalize items: content -> description for Sulu storage (except for code items)
            $normalizedItems = array_map(function ($item) {
                // Don't normalize code items - they use 'code' not 'description'
                $itemType = $item['type'] ?? '';
                if ($itemType === 'code') {
                    return $item;
                }
                if (isset($item['content']) && !isset($item['description'])) {
                    $item['description'] = $item['content'];
                    unset($item['content']);
                }
                return $item;
            }, $items);

            // Use correct nested property name based on block type
            $nestedKey = match ($blockType) {
                'faq' => 'faqs',
                'table' => 'rows',
                'image-with-flags' => 'flags',
                'card-trio' => 'cards',
                default => 'items',
            };

            $block = [
                'type' => $blockType,
                'headline' => $headline,
                $nestedKey => $normalizedItems,
            ];

            // Also merge flat properties from content parameter if provided
            $content = $arguments['content'] ?? '';
            if (!empty($content)) {
                $decoded = json_decode($content, true);
                if (is_array($decoded) && !isset($decoded[0])) {
                    foreach ($decoded as $key => $value) {
                        if (!isset($block[$key])) {
                            $block[$key] = $value;
                        }
                    }
                }
            }
        } else {
            // Fallback: use simple content parameter or JSON object with flat properties
            $content = $arguments['content'] ?? '';

            // Check if content is a JSON object with flat properties (like card-trio)
            if (!empty($content)) {
                $decoded = json_decode($content, true);
                // If it's an associative array (object), spread properties onto block
                if (is_array($decoded) && !isset($decoded[0])) {
                    $block = [
                        'type' => $blockType,
                        'headline' => $headline,
                    ];
                    foreach ($decoded as $key => $value) {
                        $block[$key] = $value;
                    }
                } else {
                    // Regular string content or indexed array - use buildBlock
                    $block = $this->buildBlock($blockType, $headline, $content);
                }
            } else {
                $block = $this->buildBlock($blockType, $headline, $content);
            }
        }

        // Handle snippets parameter for contact block
        if (isset($arguments['snippets'])) {
            $snippets = json_decode($arguments['snippets'], true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($snippets)) {
                $block['snippets'] = $snippets;
            }
        }

        // Handle CTA-button fields
        if (isset($arguments['text'])) {
            $block['text'] = $arguments['text'];
        }
        if (isset($arguments['url'])) {
            $block['url'] = $arguments['url'];
        }
        if (isset($arguments['texttwo'])) {
            $block['texttwo'] = $arguments['texttwo'];
        }
        if (isset($arguments['urltwo'])) {
            $block['urltwo'] = $arguments['urltwo'];
        }

        // Pass all schema-defined properties for the block type
        $schema = $this->blockTypeRegistry->getSchema($blockType);
        if ($schema !== null) {
            foreach ($schema['properties'] as $propName) {
                if (isset($arguments[$propName]) && !isset($block[$propName])) {
                    $value = $arguments[$propName];
                    // Decode JSON strings for nested arrays (e.g., card1Tags)
                    if (is_string($value) && str_starts_with($value, '[')) {
                        $decoded = json_decode($value, true);
                        if (json_last_error() === JSON_ERROR_NONE) {
                            $value = $decoded;
                        }
                    }
                    $block[$propName] = $value;
                }
            }
        }

        // Override quote author from explicit argument (takes priority over headline mapping)
        if ($blockType === 'quote' && isset($arguments['author'])) {
            $block['author'] = $arguments['author'];
        }

        // Normalize media fields to {"ids": [...]} format for BlockWriter
        foreach (['image', 'images'] as $mediaField) {
            if (isset($block[$mediaField])) {
                $block[$mediaField] = $this->normalizeMediaValue($block[$mediaField]);
            }
        }

        $result = $this->pageService->addBlock($path, $block, $position, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT) ?: '{}');
    }

    /**
     * @param array<string, mixed> $arguments
     */
    private function removeBlock(array $arguments, string $locale): ToolResultInterface
    {
        $path = $arguments['path'] ?? '';
        $position = (int) ($arguments['position'] ?? 0);

        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        $result = $this->pageService->removeBlock($path, $position, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT) ?: '{}');
    }

    /**
     * @param array<string, mixed> $arguments
     */
    private function removeBlocksBatch(array $arguments, string $locale): ToolResultInterface
    {
        $path = $arguments['path'] ?? '';
        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        $positionsRaw = $arguments['positions'] ?? '[]';
        $positions = json_decode($positionsRaw, true);
        if (!is_array($positions) || empty($positions)) {
            return new TextToolResult('Error: positions must be a non-empty JSON array of integers');
        }

        $positions = array_map('intval', $positions);
        $result = $this->pageService->removeBlocks($path, $positions, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT) ?: '{}');
    }

    private function publishPage(string $path, string $locale): ToolResultInterface
    {
        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        $result = $this->pageService->publishPage($path, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT) ?: '{}');
    }

    private function unpublishPage(string $path, string $locale): ToolResultInterface
    {
        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        $result = $this->pageService->unpublishPage($path, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT) ?: '{}');
    }

    /**
     * @param array<string, mixed> $arguments
     */
    private function updateBlock(array $arguments, string $locale): ToolResultInterface
    {
        $path = $arguments['path'] ?? '';
        $position = (int) ($arguments['position'] ?? 0);

        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        // Auto-detect blockType from existing block if not provided
        $blockType = $arguments['blockType'] ?? null;
        if ($blockType === null) {
            $page = $this->pageService->getPage($path, $locale);
            if ($page && isset($page['blocks'][$position])) {
                $blockType = $page['blocks'][$position]['type'] ?? null;
            }
        }

        $blockData = [];
        if (isset($arguments['headline'])) {
            $blockData['headline'] = $arguments['headline'];
        }
        if (isset($arguments['content'])) {
            $blockData['content'] = $arguments['content'];
        }

        // Handle items parameter for complete items replacement
        if (isset($arguments['items'])) {
            // Ensure valid UTF-8 before JSON parsing
            $itemsRaw = mb_convert_encoding($arguments['items'], 'UTF-8', 'UTF-8');
            $items = json_decode($itemsRaw, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                // Retry with invalid UTF-8 substitution
                $items = json_decode($itemsRaw, true, 512, JSON_INVALID_UTF8_SUBSTITUTE);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    return new TextToolResult('Error: items must be valid JSON array. JSON error: ' . json_last_error_msg() . '. First 200 chars: ' . mb_substr($arguments['items'], 0, 200));
                }
            }
            // Normalize items: content -> description for Sulu storage (except for code items)
            $normalizedItems = array_map(function ($item) {
                // Don't normalize code items - they use 'code' not 'description'
                $itemType = $item['type'] ?? '';
                if ($itemType === 'code') {
                    return $item;
                }
                if (isset($item['content']) && !isset($item['description'])) {
                    $item['description'] = $item['content'];
                    unset($item['content']);
                }
                return $item;
            }, $items);

            // Use correct nested property name based on auto-detected or provided blockType
            $nestedKey = match ($blockType) {
                'faq' => 'faqs',
                'table' => 'rows',
                'image-with-flags' => 'flags',
                'card-trio' => 'cards',
                default => 'items',
            };
            $blockData[$nestedKey] = $normalizedItems;
        }

        // Pass all schema-defined properties for the block type
        if ($blockType !== null) {
            $schema = $this->blockTypeRegistry->getSchema($blockType);
            if ($schema !== null) {
                foreach ($schema['properties'] as $propName) {
                    if (isset($arguments[$propName]) && !isset($blockData[$propName])) {
                        $value = $arguments[$propName];
                        // Decode JSON strings for nested arrays (e.g., card1Tags)
                        if (is_string($value) && str_starts_with($value, '[')) {
                            $decoded = json_decode($value, true);
                            if (json_last_error() === JSON_ERROR_NONE) {
                                $value = $decoded;
                            }
                        }
                        $blockData[$propName] = $value;
                    }
                }
            }
        }

        // Override quote author from explicit argument (takes priority over headline mapping)
        if ($blockType === 'quote' && isset($arguments['author'])) {
            $blockData['author'] = $arguments['author'];
        }

        // Pick up image/images from top-level arguments if not already in blockData
        foreach (['image', 'images'] as $mediaField) {
            if (isset($arguments[$mediaField]) && !isset($blockData[$mediaField])) {
                $blockData[$mediaField] = $arguments[$mediaField];
            }
        }

        // Normalize media fields to {"ids": [...]} format for BlockWriter
        foreach (['image', 'images'] as $mediaField) {
            if (isset($blockData[$mediaField])) {
                $blockData[$mediaField] = $this->normalizeMediaValue($blockData[$mediaField]);
            }
        }

        if (empty($blockData)) {
            return new TextToolResult('Error: at least one of headline, content, items, or block-specific properties is required');
        }

        $result = $this->pageService->updateBlock($path, $position, $blockData, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT) ?: '{}');
    }

    /**
     * Append items to an existing block without replacing existing items.
     * Useful for adding FAQ entries, table rows, etc. incrementally.
     *
     * @param array<string, mixed> $arguments
     */
    private function appendToBlock(array $arguments, string $locale): ToolResultInterface
    {
        $path = $arguments['path'] ?? '';
        $position = (int) ($arguments['position'] ?? 0);

        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        if (!isset($arguments['items'])) {
            return new TextToolResult('Error: items is required for append_to_block action');
        }

        // Ensure valid UTF-8 before JSON parsing
        $itemsRaw = mb_convert_encoding($arguments['items'], 'UTF-8', 'UTF-8');
        $items = json_decode($itemsRaw, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            // Retry with invalid UTF-8 substitution
            $items = json_decode($itemsRaw, true, 512, JSON_INVALID_UTF8_SUBSTITUTE);
            if (json_last_error() !== JSON_ERROR_NONE) {
                return new TextToolResult('Error: items must be valid JSON array. JSON error: ' . json_last_error_msg() . '. First 200 chars: ' . mb_substr($arguments['items'], 0, 200));
            }
        }

        // Normalize items: content -> description for Sulu storage (except for code items)
        $normalizedItems = array_map(function ($item) {
            // Don't normalize code items - they use 'code' not 'description'
            $itemType = $item['type'] ?? '';
            if ($itemType === 'code') {
                return $item;
            }
            if (isset($item['content']) && !isset($item['description'])) {
                $item['description'] = $item['content'];
                unset($item['content']);
            }
            return $item;
        }, $items);

        $result = $this->pageService->appendToBlock($path, $position, $normalizedItems, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT) ?: '{}');
    }

    /**
     * @param array<string, mixed> $arguments
     */
    private function moveBlock(array $arguments, string $locale): ToolResultInterface
    {
        $path = $arguments['path'] ?? '';
        $fromPosition = (int) ($arguments['from_position'] ?? -1);
        $toPosition = (int) ($arguments['to_position'] ?? -1);

        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }
        if ($fromPosition < 0) {
            return new TextToolResult('Error: from_position is required');
        }
        if ($toPosition < 0) {
            return new TextToolResult('Error: to_position is required');
        }

        $result = $this->pageService->moveBlock($path, $fromPosition, $toPosition, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT) ?: '{}');
    }

    /**
     * List all block types with full schema information from BlockTypeRegistry.
     */
    private function listBlockTypes(): ToolResultInterface
    {
        $types = [];
        foreach ($this->blockTypeRegistry->getAllTypes() as $name) {
            $schema = $this->blockTypeRegistry->getSchema($name);
            $types[] = [
                'name' => $name,
                'properties' => $schema['properties'] ?? [],
                'nested' => $this->blockTypeRegistry->getNestedName($name),
                'nestedType' => $this->blockTypeRegistry->getNestedType($name),
                'nestedProperties' => $this->blockTypeRegistry->getNestedProperties($name),
                'description' => $this->blockTypeRegistry->getDescription($name),
                'example' => $this->blockTypeRegistry->getExample($name),
            ];
        }

        return new TextToolResult(json_encode(['types' => $types, 'total' => count($types)], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * Get detailed schema for a specific block type.
     */
    private function getBlockSchema(string $blockType): ToolResultInterface
    {
        if (empty($blockType)) {
            return new TextToolResult(json_encode([
                'error' => 'blockTypeName is required',
                'available_types' => $this->blockTypeRegistry->getAllTypes(),
            ], JSON_PRETTY_PRINT));
        }

        if (!$this->blockTypeRegistry->hasType($blockType)) {
            return new TextToolResult(json_encode([
                'error' => "Block type '{$blockType}' not found",
                'available_types' => $this->blockTypeRegistry->getAllTypes(),
            ], JSON_PRETTY_PRINT));
        }

        $schema = $this->blockTypeRegistry->getSchema($blockType);
        return new TextToolResult(json_encode([
            'name' => $blockType,
            'properties' => $schema['properties'] ?? [],
            'nested' => $this->blockTypeRegistry->getNestedName($blockType),
            'nestedType' => $this->blockTypeRegistry->getNestedType($blockType),
            'nestedProperties' => $this->blockTypeRegistry->getNestedProperties($blockType),
            'description' => $this->blockTypeRegistry->getDescription($blockType),
            'example' => $this->blockTypeRegistry->getExample($blockType),
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }

    /**
     * List snippets using SnippetService.
     */
    private function listSnippets(?string $snippetType, string $locale): ToolResultInterface
    {
        $result = $this->snippetService->listSnippets($snippetType, $locale);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * List media using MediaService.
     *
     * @param array<string, mixed> $arguments
     */
    private function listMedia(array $arguments, string $locale): ToolResultInterface
    {
        $search = $arguments['search'] ?? null;
        $collectionId = isset($arguments['collectionId']) ? (int) $arguments['collectionId'] : null;
        $limit = (int) ($arguments['limit'] ?? 50);
        $offset = (int) ($arguments['offset'] ?? 0);

        $result = $this->mediaService->listMedia($search, $collectionId, $locale, $limit, $offset);

        return new TextToolResult(json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * Upload media to Sulu's media library from URL or local file path.
     *
     * @param array<string, mixed> $arguments
     */
    private function uploadMedia(array $arguments, string $locale): ToolResultInterface
    {
        $title = $arguments['title'] ?? '';
        $sourceUrl = $arguments['sourceUrl'] ?? null;
        $filePath = $arguments['filePath'] ?? null;
        $collectionId = isset($arguments['collectionId']) ? (int) $arguments['collectionId'] : 1;
        $filename = !empty($arguments['filename']) ? $arguments['filename'] : null;

        if (empty($title)) {
            return new TextToolResult('Error: title is required for upload_media');
        }

        if (empty($sourceUrl) && empty($filePath)) {
            return new TextToolResult('Error: either sourceUrl or filePath is required for upload_media');
        }

        try {
            if (!empty($sourceUrl)) {
                $result = $this->mediaService->uploadMediaFromUrl($sourceUrl, $title, $collectionId, $locale, $filename);
            } else {
                $result = $this->mediaService->uploadMediaFromPath($filePath, $title, $collectionId, $locale, $filename);
            }

            return new TextToolResult(json_encode([
                'success' => true,
                'message' => "Media uploaded successfully with ID {$result['id']}",
                'id' => $result['id'],
                'title' => $result['title'],
                'filename' => $result['filename'],
                'mimeType' => $result['mimeType'],
                'size' => $result['size'],
                'collectionId' => $result['collectionId'],
                'usage_hint' => "Use media ID {$result['id']} in add_block image/images parameter or excerptImage",
            ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
        } catch (\RuntimeException $e) {
            return new TextToolResult(json_encode([
                'success' => false,
                'error' => $e->getMessage(),
            ], JSON_PRETTY_PRINT) ?: '{}');
        } catch (\Exception $e) {
            return new TextToolResult(json_encode([
                'success' => false,
                'error' => 'Upload failed: ' . $e->getMessage(),
            ], JSON_PRETTY_PRINT) ?: '{}');
        }
    }

    /**
     * List all media collections.
     */
    private function listCollections(string $locale): ToolResultInterface
    {
        $collections = $this->mediaService->listCollections($locale);

        return new TextToolResult(json_encode([
            'collections' => $collections,
            'total' => count($collections),
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * Normalize media values from MCP input to BlockWriter-compatible format.
     *
     * Accepts various formats and converts to {"ids": [int, ...]}:
     * - "42" or 42 → {"ids": [42]}
     * - "[100, 101]" or [100, 101] → {"ids": [100, 101]}
     * - {"id": 42} or '{"id":42}' → {"ids": [42]}
     * - {"ids": [42]} → returned as-is
     *
     * @param mixed $value Raw media value from MCP arguments
     * @return array{ids: list<int>} Normalized format for BlockWriter
     */
    private function normalizeMediaValue(mixed $value): array
    {
        // Already in correct format
        if (is_array($value) && isset($value['ids'])) {
            return ['ids' => array_map('intval', $value['ids'])];
        }

        // {"id": 42} format (single media object)
        if (is_array($value) && isset($value['id'])) {
            return ['ids' => [(int) $value['id']]];
        }

        // Plain array of integers [100, 101]
        if (is_array($value) && isset($value[0])) {
            return ['ids' => array_map('intval', $value)];
        }

        // String input — try to decode
        if (is_string($value)) {
            $trimmed = trim($value);

            // Try JSON decode first
            $decoded = json_decode($trimmed, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                if (is_array($decoded)) {
                    // {"ids": [...]} already correct
                    if (isset($decoded['ids'])) {
                        return ['ids' => array_map('intval', $decoded['ids'])];
                    }
                    // {"id": 42} single media
                    if (isset($decoded['id'])) {
                        return ['ids' => [(int) $decoded['id']]];
                    }
                    // [100, 101] plain array
                    if (isset($decoded[0])) {
                        return ['ids' => array_map('intval', $decoded)];
                    }
                }
                // Single integer decoded from string
                if (is_int($decoded)) {
                    return ['ids' => [$decoded]];
                }
            }

            // Plain numeric string "42"
            if (is_numeric($trimmed)) {
                return ['ids' => [(int) $trimmed]];
            }
        }

        // Integer input
        if (is_int($value)) {
            return ['ids' => [$value]];
        }

        // Fallback: empty
        return ['ids' => []];
    }

    /**
     * Build block structure for simple content parameter.
     * For complex blocks with nested items, use the 'items' parameter instead.
     *
     * @return array<string, mixed>
     */
    private function buildBlock(string $type, string $headline, string $content): array
    {
        // Blocks that use 'description' field
        $descriptionBlocks = [
            'hl-des', 'hero', 'hero-startpage', 'hero-image-right', 'heroslider',
            'cta-button', 'feature', 'feature-default', 'feature-with-icons',
            'image-gallery', 'images-with-heading-and-description', 'team',
            'consultant', 'contact', 'chat', 'introduction', 'table',
        ];

        // Blocks that use nested 'items' array
        $itemsBlocks = ['headline-paragraphs', 'formats', 'logo-gallary'];

        // Blocks that use 'faqs' array
        $faqBlocks = ['faq'];

        if (in_array($type, $descriptionBlocks, true)) {
            return [
                'type' => $type,
                'headline' => $headline,
                'description' => $content,
            ];
        }

        if (in_array($type, $itemsBlocks, true)) {
            return [
                'type' => $type,
                'headline' => $headline,
                'items' => [
                    ['type' => 'description', 'description' => $content],
                ],
            ];
        }

        if (in_array($type, $faqBlocks, true)) {
            return [
                'type' => $type,
                'faqs' => [
                    ['headline' => $headline, 'subline' => $content],
                ],
            ];
        }

        // Quote block: content → text, headline → author
        if ($type === 'quote') {
            return [
                'type' => $type,
                'text' => $content,
                'author' => $headline,
            ];
        }

        // For all other block types, preserve the type and use common properties
        return [
            'type' => $type,
            'headline' => $headline,
            'description' => $content,
        ];
    }
}
