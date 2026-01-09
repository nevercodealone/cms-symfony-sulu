<?php

declare(strict_types=1);

namespace App\MCP\Tools;

use App\Sulu\Service\PageService;
use KLP\KlpMcpServer\Services\ToolService\Annotation\ToolAnnotation;
use KLP\KlpMcpServer\Services\ToolService\ToolInterface;
use KLP\KlpMcpServer\Services\ToolService\Result\TextToolResult;
use KLP\KlpMcpServer\Services\ToolService\Result\ToolResultInterface;
use KLP\KlpMcpServer\Services\ToolService\Schema\PropertyType;
use KLP\KlpMcpServer\Services\ToolService\Schema\SchemaProperty;
use KLP\KlpMcpServer\Services\ToolService\Schema\StructuredSchema;

class SuluPagesTool implements ToolInterface
{
    public function __construct(
        private readonly PageService $pageService
    ) {
    }

    public function getName(): string
    {
        return 'sulu_pages';
    }

    public function getDescription(): string
    {
        return 'Manage Sulu CMS pages: list, get, add/update/move/remove blocks, publish/unpublish, list block types';
    }

    public function getInputSchema(): StructuredSchema
    {
        return new StructuredSchema(
            new SchemaProperty(
                name: 'action',
                type: PropertyType::STRING,
                description: 'Action: list, get, add_block, update_block, move_block, remove_block, publish, unpublish, list_block_types',
                required: true
            ),
            new SchemaProperty(
                name: 'path',
                type: PropertyType::STRING,
                description: 'Page path (e.g., /cmf/example/contents/page-name)',
                required: false
            ),
            new SchemaProperty(
                name: 'pathPrefix',
                type: PropertyType::STRING,
                description: 'Path prefix for listing pages',
                required: false
            ),
            new SchemaProperty(
                name: 'locale',
                type: PropertyType::STRING,
                description: 'Language code (de, en)',
                required: false
            ),
            new SchemaProperty(
                name: 'blockType',
                type: PropertyType::STRING,
                description: 'Block type: headline-paragraphs, hl-des, text, image, code, quote, video',
                required: false
            ),
            new SchemaProperty(
                name: 'headline',
                type: PropertyType::STRING,
                description: 'Block headline',
                required: false
            ),
            new SchemaProperty(
                name: 'content',
                type: PropertyType::STRING,
                description: 'Block content (HTML)',
                required: false
            ),
            new SchemaProperty(
                name: 'position',
                type: PropertyType::INTEGER,
                description: 'Block position (0-based)',
                required: false
            ),
            new SchemaProperty(
                name: 'from_position',
                type: PropertyType::INTEGER,
                description: 'Source position for move_block action',
                required: false
            ),
            new SchemaProperty(
                name: 'to_position',
                type: PropertyType::INTEGER,
                description: 'Target position for move_block action',
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
    private function addBlock(array $arguments, string $locale): ToolResultInterface
    {
        $path = $arguments['path'] ?? '';
        $blockType = $arguments['blockType'] ?? 'headline-paragraphs';
        $headline = $arguments['headline'] ?? '';
        $content = $arguments['content'] ?? '';
        $position = (int) ($arguments['position'] ?? 0);

        if (empty($path)) {
            return new TextToolResult('Error: path is required');
        }

        $block = $this->buildBlock($blockType, $headline, $content);
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

        if (empty($blockData)) {
            return new TextToolResult('Error: at least one of headline or content is required');
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
