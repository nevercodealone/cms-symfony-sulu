<?php

declare(strict_types=1);

namespace App\MCP\Tools;

use App\Sulu\Service\PageService;
use KLP\KlpMcpServer\Services\ProgressService\ProgressNotifierInterface;
use KLP\KlpMcpServer\Services\ToolService\Annotation\ToolAnnotation;
use KLP\KlpMcpServer\Services\ToolService\StreamableToolInterface;
use KLP\KlpMcpServer\Services\ToolService\Result\TextToolResult;
use KLP\KlpMcpServer\Services\ToolService\Result\ToolResultInterface;
use KLP\KlpMcpServer\Services\ToolService\Schema\PropertyType;
use KLP\KlpMcpServer\Services\ToolService\Schema\SchemaProperty;
use KLP\KlpMcpServer\Services\ToolService\Schema\StructuredSchema;

class SuluPagesTool implements StreamableToolInterface
{
    public function __construct(
        private readonly PageService $pageService
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
        return 'Sulu CMS pages. Actions: list, get, create_page, add_block, update_block, move_block, remove_block, publish, unpublish, list_block_types. ' .
            'BLOCKS: headline-paragraphs (content+code), hl-des (headline+text), hero, hero-startpage, faq, consultant, contact, ' .
            'cta-button, feature, table, image, image-gallery, code, quote, video, team, logo-gallery, highlights, introduction. ' .
            'headline-paragraphs items JSON: "[{\"type\":\"description\",\"content\":\"<p>Text</p>\"},{\"type\":\"code\",\"code\":\"echo 1;\",\"language\":\"php\"}]". ' .
            'Languages: php, bash, javascript, html, css, xml, yaml, json. AVOID: <pre><code> in HTML, <?php tags.';
    }

    public function getInputSchema(): StructuredSchema
    {
        return new StructuredSchema(
            new SchemaProperty(
                name: 'action',
                type: PropertyType::STRING,
                description: 'Action to perform. Values: list, get, create_page, add_block, update_block, move_block, remove_block, publish, unpublish, list_block_types',
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
                description: 'JSON array for headline-paragraphs blocks. Item types: {"type":"description","content":"<p>HTML</p>"} or {"type":"code","code":"code here","language":"php|bash|xml|yaml|json"}. Example: [{"type":"description","content":"<p>Install:</p>"},{"type":"code","code":"composer require x","language":"bash"}]',
                required: false
            ),
            new SchemaProperty(
                name: 'position',
                type: PropertyType::INTEGER,
                description: 'Block position (0-based index). For add_block: where to insert. For update_block/remove_block: which block to modify',
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
            'create_page' => $this->createPage($arguments, $locale),
            'add_block' => $this->addBlock($arguments, $locale),
            'update_block' => $this->updateBlock($arguments, $locale),
            'move_block' => $this->moveBlock($arguments, $locale),
            'remove_block' => $this->removeBlock($arguments, $locale),
            'publish' => $this->publishPage($arguments['path'] ?? '', $locale),
            'unpublish' => $this->unpublishPage($arguments['path'] ?? '', $locale),
            'list_block_types' => $this->listBlockTypes(),
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
        ];

        $result = $this->pageService->createPage($data, $locale);

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

        // Check if items parameter is provided (for structured blocks)
        if (isset($arguments['items'])) {
            $items = json_decode($arguments['items'], true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                return new TextToolResult('Error: items must be valid JSON array');
            }
            // Normalize items: content -> description for Sulu storage
            $normalizedItems = array_map(function ($item) {
                if (isset($item['content']) && !isset($item['description'])) {
                    $item['description'] = $item['content'];
                    unset($item['content']);
                }
                return $item;
            }, $items);

            $block = [
                'type' => $blockType,
                'headline' => $headline,
                'items' => $normalizedItems,
            ];
        } else {
            // Fallback: use simple content parameter
            $content = $arguments['content'] ?? '';
            $block = $this->buildBlock($blockType, $headline, $content);
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

        $blockData = [];
        if (isset($arguments['headline'])) {
            $blockData['headline'] = $arguments['headline'];
        }
        if (isset($arguments['content'])) {
            $blockData['content'] = $arguments['content'];
        }

        // Handle items parameter for complete items replacement
        if (isset($arguments['items'])) {
            $items = json_decode($arguments['items'], true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                return new TextToolResult('Error: items must be valid JSON array');
            }
            // Normalize items: content -> description for Sulu storage
            $normalizedItems = array_map(function ($item) {
                if (isset($item['content']) && !isset($item['description'])) {
                    $item['description'] = $item['content'];
                    unset($item['content']);
                }
                return $item;
            }, $items);
            $blockData['items'] = $normalizedItems;
        }

        if (empty($blockData)) {
            return new TextToolResult('Error: at least one of headline, content or items is required');
        }

        $result = $this->pageService->updateBlock($path, $position, $blockData, $locale);

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

    private function listBlockTypes(): ToolResultInterface
    {
        $types = $this->pageService->listBlockTypes();

        return new TextToolResult(json_encode(['types' => $types], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) ?: '{}');
    }

    /**
     * @return array{type: string, headline?: string, description?: string, items?: array<mixed>}
     */
    private function buildBlock(string $type, string $headline, string $content): array
    {
        return match ($type) {
            'hl-des' => [
                'type' => 'hl-des',
                'headline' => $headline,
                'description' => $content,
            ],
            'headline-paragraphs' => [
                'type' => 'headline-paragraphs',
                'headline' => $headline,
                'items' => [
                    ['type' => 'description', 'description' => $content],
                ],
            ],
            default => [
                'type' => 'headline-paragraphs',
                'headline' => $headline,
                'items' => [
                    ['type' => 'description', 'description' => $content],
                ],
            ],
        };
    }
}
