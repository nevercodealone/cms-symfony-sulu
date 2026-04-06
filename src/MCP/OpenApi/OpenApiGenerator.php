<?php

declare(strict_types=1);

namespace App\MCP\OpenApi;

use App\MCP\Tools\SuluPagesTool;
use App\Sulu\Block\BlockTypeRegistry;
use KLP\KlpMcpServer\Services\ToolService\Schema\PropertyType;
use KLP\KlpMcpServer\Services\ToolService\Schema\SchemaProperty;
use ReflectionClass;

class OpenApiGenerator
{
    private const OPENAPI_VERSION = '3.1.0';
    private const API_VERSION = '1.0.0';
    private const BASE_PATH = '/mcp';

    public function __construct(
        private readonly SuluPagesTool $suluPagesTool,
        private readonly BlockTypeRegistry $blockTypeRegistry,
    ) {
    }

    /**
     * @return array<string, mixed>
     */
    public function generate(): array
    {
        $actions = $this->extractActions();
        $inputSchema = $this->suluPagesTool->getInputSchema();
        $properties = $this->extractSchemaProperties($inputSchema);

        return [
            'openapi' => self::OPENAPI_VERSION,
            'info' => [
                'title' => 'NCA Sulu MCP API',
                'description' => 'Model Context Protocol Server for Sulu CMS - provides LLM tools for page and block operations',
                'version' => self::API_VERSION,
                'contact' => [
                    'name' => 'Never Code Alone',
                    'email' => 'roland@nevercodealone.de',
                ],
            ],
            'servers' => [
                [
                    'url' => '{baseUrl}',
                    'variables' => [
                        'baseUrl' => [
                            'default' => 'http://localhost',
                            'description' => 'Base URL of the Sulu CMS instance',
                        ],
                    ],
                ],
            ],
            'paths' => $this->generatePaths($actions, $properties),
            'components' => $this->generateComponents($actions, $properties),
        ];
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    private function extractActions(): array
    {
        $description = $this->suluPagesTool->getDescription();
        $actions = [];

        if (preg_match('/Actions:\s*([^\.]+)\./', $description, $matches)) {
            $actionList = $matches[1];
            foreach (array_map('trim', explode(',', $actionList)) as $action) {
                $actions[$action] = [
                    'name' => $action,
                    'description' => $this->extractActionDescription($action, $description),
                ];
            }
        }

        return $actions;
    }

    private function extractActionDescription(string $action, string $fullDescription): string
    {
        $patterns = [
            'create_page' => '/CREATE PAGE:\s*([^.]+\.)/',
            'copy_page' => '/COPY PAGE:\s*([^.]+\.)/',
            'update_excerpt' => '/UPDATE EXCERPT:\s*([^.]+\.)/',
            'default_block' => '/DEFAULT BLOCK:\s*([^.]+\.)/',
            'batch_operations' => '/BATCH OPERATIONS:\s*([^.]+\.)/',
            'page_teaser' => '/PAGE-TEASER:\s*([^.]+\.)/',
            'faq' => '/FAQ:\s*([^.]+\.)/',
            'subpages_overview' => '/SUBPAGES-OVERVIEW:\s*([^.]+\.)/',
            'field_types' => '/FIELD TYPES:\s*([^.]+\.)/',
            'languages' => '/Languages:\s*([^.]+\.)/',
            'upload_media' => '/UPLOAD MEDIA:\s*([^.]+\.)/',
            'list_collections' => '/LIST COLLECTIONS:\s*([^.]+\.)/',
            'other_blocks' => '/OTHER BLOCKS:\s*([^.]+\.)/',
            'response_control' => '/RESPONSE CONTROL:\s*([^.]+\.)/',
            'read_actions' => '/READ ACTIONS:\s*([^.]+\.)/',
            'efficiency' => '/EFFICIENCY:\s*([^.]+\.)/',
        ];

        $actionDescriptions = [
            'list' => 'List all pages under a given path prefix',
            'get' => 'Get full page content including all blocks',
            'get_structure' => 'Get lightweight page metadata and block overview without content',
            'get_block' => 'Get single block at given position with full content',
            'create_page' => 'Create a new page with optional SEO and excerpt data',
            'copy_page' => 'Copy an existing page with all blocks to a new location',
            'update_excerpt' => 'Update excerpt (teaser) metadata for a page',
            'update_seo' => 'Update SEO metadata for a page',
            'add_block' => 'Add a new block at specified position',
            'update_block' => 'Update an existing block',
            'update_blocks' => 'Update multiple blocks in a single call (max 10)',
            'append_to_block' => 'Append items to an existing block (FAQ, table, etc.)',
            'move_block' => 'Move a block from one position to another',
            'remove_block' => 'Remove a single block at specified position',
            'remove_blocks' => 'Remove multiple blocks by positions',
            'publish' => 'Publish a draft page',
            'unpublish' => 'Unpublish a published page',
            'list_block_types' => 'List all available block types with schemas',
            'get_block_schema' => 'Get detailed schema for a specific block type',
            'list_snippets' => 'List snippets, optionally filtered by type',
            'list_media' => 'List media files with optional search and filters',
            'upload_media' => 'Upload media from URL or file path',
            'list_collections' => 'List all media collections',
            'clear_cache' => 'Clear HTTP cache for pages',
        ];

        return $actionDescriptions[$action] ?? "Execute the {$action} action";
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    private function extractSchemaProperties(object $schema): array
    {
        $properties = [];
        $reflection = new ReflectionClass($schema);
        $prop = $reflection->getProperty('properties');
        $prop->setAccessible(true);
        $schemaProperties = $prop->getValue($schema);

        foreach ($schemaProperties as $property) {
            $properties[$property->getName()] = $this->propertyToArray($property);
        }

        return $properties;
    }

    /**
     * @return array<string, mixed>
     */
    private function propertyToArray(SchemaProperty $property): array
    {
        $result = [
            'name' => $property->getName(),
            'type' => $this->mapPropertyType($property->getType()),
            'description' => $property->getDescription(),
            'required' => $property->isRequired(),
        ];

        $enums = $this->extractEnumsFromDescription($property->getName(), $property->getDescription());
        if (!empty($enums)) {
            $result['enum'] = $enums;
        }

        return $result;
    }

    private function mapPropertyType(PropertyType $type): string
    {
        return match ($type) {
            PropertyType::STRING => 'string',
            PropertyType::INTEGER => 'integer',
        };
    }

    /**
     * @return array<int, string>
     */
    private function extractEnumsFromDescription(string $name, string $description): array
    {
        $enums = [];

        if ($name === 'action') {
            $enums = [
                'list', 'get', 'get_structure', 'get_block',
                'create_page', 'copy_page', 'update_excerpt', 'update_seo',
                'add_block', 'update_block', 'update_blocks', 'append_to_block',
                'move_block', 'remove_block', 'remove_blocks',
                'publish', 'unpublish',
                'list_block_types', 'get_block_schema',
                'list_snippets', 'list_media', 'upload_media', 'list_collections',
                'clear_cache',
            ];
        } elseif ($name === 'locale') {
            $enums = ['de', 'en'];
        } elseif ($name === 'blockType') {
            $enums = array_values($this->blockTypeRegistry->getAllTypes());
        } elseif ($name === 'language') {
            $enums = ['php', 'bash', 'javascript', 'html', 'css', 'xml', 'yaml', 'json'];
        } elseif ($name === 'publish' || $name === 'includeSubFolders') {
            $enums = ['true', 'false'];
        }

        return $enums;
    }

    /**
     * @param array<string, mixed> $actions
     * @param array<string, mixed> $properties
     * @return array<string, array<string, mixed>>
     */
    private function generatePaths(array $actions, array $properties): array
    {
        $paths = [];

        $paths[self::BASE_PATH] = [
            'post' => [
                'summary' => 'Execute MCP Tool',
                'description' => 'Execute a Sulu CMS MCP tool action',
                'operationId' => 'executeTool',
                'requestBody' => [
                    'required' => true,
                    'content' => [
                        'application/json' => [
                            'schema' => [
                                '$ref' => '#/components/schemas/ToolRequest',
                            ],
                        ],
                    ],
                ],
                'responses' => [
                    '200' => [
                        'description' => 'Successful response',
                        'content' => [
                            'application/json' => [
                                'schema' => [
                                    '$ref' => '#/components/schemas/ToolResponse',
                                ],
                            ],
                        ],
                    ],
                    '400' => [
                        'description' => 'Invalid request',
                        'content' => [
                            'application/json' => [
                                'schema' => [
                                    '$ref' => '#/components/schemas/ErrorResponse',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ];

        return $paths;
    }

    /**
     * @param array<string, mixed> $actions
     * @param array<string, mixed> $properties
     * @return array<string, mixed>
     */
    private function generateComponents(array $actions, array $properties): array
    {
        $schemas = [
            'ToolRequest' => $this->buildToolRequestSchema($properties),
            'ToolResponse' => $this->buildToolResponseSchema(),
            'ErrorResponse' => $this->buildErrorResponseSchema(),
            'Page' => $this->buildPageSchema(),
            'Block' => $this->buildBlockSchema(),
            'BlockType' => $this->buildBlockTypeSchema(),
        ];

        foreach ($this->buildActionSchemas() as $name => $schema) {
            $schemas[$name] = $schema;
        }

        return ['schemas' => $schemas];
    }

    /**
     * @param array<string, array<string, mixed>> $properties
     * @return array<string, mixed>
     */
    private function buildToolRequestSchema(array $properties): array
    {
        $required = [];
        $props = [];

        foreach ($properties as $name => $property) {
            $propSchema = [
                'type' => $property['type'],
                'description' => $property['description'],
            ];

            if (isset($property['enum'])) {
                $propSchema['enum'] = $property['enum'];
            }

            $props[$name] = $propSchema;

            if ($property['required']) {
                $required[] = $name;
            }
        }

        return [
            'type' => 'object',
            'required' => $required,
            'properties' => $props,
            'description' => 'MCP Tool request parameters',
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function buildToolResponseSchema(): array
    {
        return [
            'type' => 'object',
            'required' => ['content'],
            'properties' => [
                'content' => [
                    'type' => 'array',
                    'items' => [
                        'type' => 'object',
                        'properties' => [
                            'type' => [
                                'type' => 'string',
                                'enum' => ['text'],
                            ],
                            'text' => [
                                'type' => 'string',
                                'description' => 'JSON-encoded response data',
                            ],
                        ],
                    ],
                ],
            ],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function buildErrorResponseSchema(): array
    {
        return [
            'type' => 'object',
            'required' => ['error'],
            'properties' => [
                'error' => [
                    'type' => 'string',
                ],
                'message' => [
                    'type' => 'string',
                ],
            ],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function buildPageSchema(): array
    {
        return [
            'type' => 'object',
            'required' => ['path', 'uuid', 'title', 'locale'],
            'properties' => [
                'path' => ['type' => 'string', 'example' => '/cmf/example/contents/my-page'],
                'uuid' => ['type' => 'string', 'format' => 'uuid'],
                'title' => ['type' => 'string'],
                'locale' => ['type' => 'string', 'enum' => ['de', 'en']],
                'resourceSegment' => ['type' => 'string', 'description' => 'URL slug'],
                'seoTitle' => ['type' => 'string'],
                'seoDescription' => ['type' => 'string'],
                'seoKeywords' => ['type' => 'string'],
                'excerptTitle' => ['type' => 'string'],
                'excerptDescription' => ['type' => 'string'],
                'excerptImage' => ['type' => 'integer', 'description' => 'Media ID'],
                'blocks' => [
                    'type' => 'array',
                    'items' => ['$ref' => '#/components/schemas/Block'],
                ],
                'published' => ['type' => 'boolean'],
                'publishedState' => ['type' => 'boolean'],
            ],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function buildBlockSchema(): array
    {
        return [
            'type' => 'object',
            'required' => ['type'],
            'properties' => [
                'type' => ['type' => 'string', 'description' => 'Block type name'],
                'headline' => ['type' => 'string', 'description' => 'Block headline (plain text)'],
                'items' => [
                    'type' => 'array',
                    'description' => 'Nested items for blocks like headline-paragraphs',
                    'items' => ['type' => 'object'],
                ],
                'faqs' => [
                    'type' => 'array',
                    'description' => 'FAQ entries',
                    'items' => [
                        'type' => 'object',
                        'properties' => [
                            'headline' => ['type' => 'string', 'description' => 'Question'],
                            'subline' => ['type' => 'string', 'description' => 'Answer (plain text)'],
                        ],
                    ],
                ],
                'rows' => [
                    'type' => 'array',
                    'description' => 'Table rows',
                    'items' => ['type' => 'object'],
                ],
                'image' => [
                    'type' => 'object',
                    'description' => 'Media reference {"ids": [42]}',
                    'properties' => [
                        'ids' => ['type' => 'array', 'items' => ['type' => 'integer']],
                    ],
                ],
            ],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function buildBlockTypeSchema(): array
    {
        return [
            'type' => 'object',
            'required' => ['name'],
            'properties' => [
                'name' => ['type' => 'string'],
                'properties' => ['type' => 'array', 'items' => ['type' => 'string']],
                'nested' => ['type' => 'string', 'description' => 'Nested array property name'],
                'nestedType' => ['type' => 'string', 'description' => 'Type of nested items'],
                'nestedProperties' => ['type' => 'array', 'items' => ['type' => 'string']],
                'description' => ['type' => 'string'],
                'example' => ['type' => 'object'],
            ],
        ];
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    private function buildActionSchemas(): array
    {
        return [
            'CreatePageRequest' => [
                'type' => 'object',
                'required' => ['parentPath', 'title', 'resourceSegment'],
                'properties' => [
                    'parentPath' => ['type' => 'string', 'example' => '/cmf/example/contents/glossare'],
                    'title' => ['type' => 'string', 'description' => 'Page title'],
                    'resourceSegment' => ['type' => 'string', 'example' => '/my-new-page'],
                    'seoTitle' => ['type' => 'string', 'maxLength' => 60],
                    'seoDescription' => ['type' => 'string', 'maxLength' => 155],
                    'excerptTitle' => ['type' => 'string'],
                    'excerptDescription' => ['type' => 'string'],
                    'excerptImage' => ['type' => 'integer'],
                    'publish' => ['type' => 'boolean', 'default' => false],
                ],
            ],
            'AddBlockRequest' => [
                'type' => 'object',
                'required' => ['path', 'blockType'],
                'properties' => [
                    'path' => ['type' => 'string'],
                    'blockType' => ['type' => 'string', '$ref' => '#/components/schemas/BlockType'],
                    'position' => ['type' => 'integer', 'default' => 0],
                    'headline' => ['type' => 'string', 'description' => 'Block headline (plain text)'],
                    'items' => ['type' => 'string', 'description' => 'JSON array of items'],
                    'content' => ['type' => 'string', 'description' => 'HTML content or JSON object'],
                ],
            ],
            'UpdateBlockRequest' => [
                'type' => 'object',
                'required' => ['path', 'position'],
                'properties' => [
                    'path' => ['type' => 'string'],
                    'position' => ['type' => 'integer'],
                    'headline' => ['type' => 'string'],
                    'items' => ['type' => 'string', 'description' => 'JSON array of items'],
                    'content' => ['type' => 'string'],
                ],
            ],
            'ListPagesResponse' => [
                'type' => 'array',
                'items' => [
                    'type' => 'object',
                    'properties' => [
                        'path' => ['type' => 'string'],
                        'title' => ['type' => 'string'],
                        'uuid' => ['type' => 'string'],
                        'published' => ['type' => 'boolean'],
                    ],
                ],
            ],
        ];
    }
}
