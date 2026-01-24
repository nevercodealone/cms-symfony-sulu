<?php

declare(strict_types=1);

namespace App\Tests\Unit\MCP\Tools;

use App\MCP\Tools\SuluPagesTool;
use App\Sulu\Block\BlockTypeRegistry;
use App\Sulu\Service\MediaService;
use App\Sulu\Service\PageService;
use App\Sulu\Service\SnippetService;
use KLP\KlpMcpServer\Services\ToolService\Schema\PropertyType;
use KLP\KlpMcpServer\Services\ToolService\Schema\SchemaProperty;
use KLP\KlpMcpServer\Services\ToolService\Schema\StructuredSchema;
use KLP\KlpMcpServer\Services\ToolService\StreamableToolInterface;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class SuluPagesToolTest extends TestCase
{
    private PageService&MockObject $pageService;
    private BlockTypeRegistry $blockTypeRegistry;
    private SnippetService&MockObject $snippetService;
    private MediaService&MockObject $mediaService;
    private SuluPagesTool $tool;

    protected function setUp(): void
    {
        $this->pageService = $this->createMock(PageService::class);
        $this->blockTypeRegistry = new BlockTypeRegistry();
        $this->snippetService = $this->createMock(SnippetService::class);
        $this->mediaService = $this->createMock(MediaService::class);
        $this->tool = new SuluPagesTool(
            $this->pageService,
            $this->blockTypeRegistry,
            $this->snippetService,
            $this->mediaService
        );
    }

    public function testImplementsStreamableToolInterface(): void
    {
        $this->assertInstanceOf(StreamableToolInterface::class, $this->tool);
    }

    public function testIsStreamingReturnsFalse(): void
    {
        $this->assertFalse($this->tool->isStreaming());
    }

    public function testGetNameReturnsCorrectName(): void
    {
        $this->assertEquals('sulu_pages', $this->tool->getName());
    }

    public function testGetDescriptionReturnsNonEmptyString(): void
    {
        $description = $this->tool->getDescription();

        $this->assertIsString($description);
        $this->assertNotEmpty($description);
    }

    /**
     * This test ensures all PropertyTypes in the schema are valid.
     * It would have caught the BOOLEAN issue before deployment.
     */
    public function testGetInputSchemaReturnsValidSchema(): void
    {
        $schema = $this->tool->getInputSchema();

        $this->assertInstanceOf(StructuredSchema::class, $schema);
    }

    /**
     * Verify all PropertyTypes used are from the valid enum values.
     * This test dynamically checks against the actual PropertyType enum.
     */
    public function testSchemaUsesOnlyValidPropertyTypes(): void
    {
        // Get all valid PropertyType cases from the enum
        $validTypes = PropertyType::cases();
        $this->assertNotEmpty($validTypes, 'PropertyType enum should have at least one case');

        // The schema should be instantiable without errors - this is the key test
        // If any SchemaProperty uses an invalid PropertyType, this will throw an error
        $schema = $this->tool->getInputSchema();
        $this->assertInstanceOf(StructuredSchema::class, $schema);

        // Log available types for documentation purposes
        $typeNames = array_map(fn($case) => $case->name, $validTypes);
        $this->assertContains('STRING', $typeNames, 'PropertyType should support STRING');
        $this->assertContains('INTEGER', $typeNames, 'PropertyType should support INTEGER');
    }

    /**
     * Test that schema can be converted to array (used by MCP protocol).
     * This catches serialization issues early.
     */
    public function testSchemaCanBeConvertedToArray(): void
    {
        $schema = $this->tool->getInputSchema();

        // The toArray method is used when sending schema to MCP clients
        if (method_exists($schema, 'toArray')) {
            $array = $schema->toArray();
            $this->assertIsArray($array);
        } elseif ($schema instanceof \JsonSerializable) {
            // If jsonSerialize exists, test that too
            $json = json_encode($schema);
            $this->assertIsString($json);
            $this->assertNotFalse($json, 'Schema should be JSON serializable');
        } else {
            // At minimum, the schema should be instantiable
            $this->assertInstanceOf(StructuredSchema::class, $schema);
        }
    }

    public function testGetAnnotationsReturnsAnnotation(): void
    {
        $annotations = $this->tool->getAnnotations();

        $this->assertNotNull($annotations);
    }

    /**
     * Test create_page action returns proper error for missing parentPath.
     */
    public function testCreatePageRequiresParentPath(): void
    {
        $this->pageService->method('createPage')
            ->willReturn(['success' => false, 'message' => 'parentPath is required']);

        $result = $this->tool->execute([
            'action' => 'create_page',
            'title' => 'Test',
            'resourceSegment' => '/test',
        ]);

        $sanitized = $result->getSanitizedResult();
        $this->assertStringContainsString('parentPath is required', $sanitized['text']);
    }

    /**
     * Test create_page action returns proper error for missing title.
     */
    public function testCreatePageRequiresTitle(): void
    {
        $this->pageService->method('createPage')
            ->willReturn(['success' => false, 'message' => 'title is required']);

        $result = $this->tool->execute([
            'action' => 'create_page',
            'parentPath' => '/cmf/example/contents',
            'resourceSegment' => '/test',
        ]);

        $sanitized = $result->getSanitizedResult();
        $this->assertStringContainsString('title is required', $sanitized['text']);
    }

    /**
     * Test create_page action with all parameters.
     */
    public function testCreatePageSuccess(): void
    {
        $this->pageService->method('createPage')
            ->willReturn([
                'success' => true,
                'message' => 'Page created successfully',
                'path' => '/cmf/example/contents/test-page',
                'uuid' => 'test-uuid',
                'url' => '/de/test-page',
            ]);

        $result = $this->tool->execute([
            'action' => 'create_page',
            'parentPath' => '/cmf/example/contents',
            'title' => 'Test Page',
            'resourceSegment' => '/test-page',
            'seoTitle' => 'SEO Title',
            'seoDescription' => 'SEO Description',
            'publish' => 'true',
            'locale' => 'de',
        ]);

        $sanitized = $result->getSanitizedResult();
        $this->assertStringContainsString('success', $sanitized['text']);
    }

    /**
     * Test publish parameter accepts string "true".
     */
    public function testCreatePagePublishParameterAcceptsStringTrue(): void
    {
        $capturedData = null;
        $this->pageService->method('createPage')
            ->willReturnCallback(function ($data) use (&$capturedData) {
                $capturedData = $data;
                return ['success' => true, 'message' => 'OK'];
            });

        $this->tool->execute([
            'action' => 'create_page',
            'parentPath' => '/cmf/example/contents',
            'title' => 'Test',
            'resourceSegment' => '/test',
            'publish' => 'true',
        ]);

        $this->assertTrue($capturedData['publish'], 'publish should be true when string "true" is passed');
    }

    /**
     * Test publish parameter accepts string "false".
     */
    public function testCreatePagePublishParameterAcceptsStringFalse(): void
    {
        $capturedData = null;
        $this->pageService->method('createPage')
            ->willReturnCallback(function ($data) use (&$capturedData) {
                $capturedData = $data;
                return ['success' => true, 'message' => 'OK'];
            });

        $this->tool->execute([
            'action' => 'create_page',
            'parentPath' => '/cmf/example/contents',
            'title' => 'Test',
            'resourceSegment' => '/test',
            'publish' => 'false',
        ]);

        $this->assertFalse($capturedData['publish'], 'publish should be false when string "false" is passed');
    }

    /**
     * Test publish parameter defaults to false.
     */
    public function testCreatePagePublishParameterDefaultsToFalse(): void
    {
        $capturedData = null;
        $this->pageService->method('createPage')
            ->willReturnCallback(function ($data) use (&$capturedData) {
                $capturedData = $data;
                return ['success' => true, 'message' => 'OK'];
            });

        $this->tool->execute([
            'action' => 'create_page',
            'parentPath' => '/cmf/example/contents',
            'title' => 'Test',
            'resourceSegment' => '/test',
        ]);

        $this->assertFalse($capturedData['publish'], 'publish should default to false');
    }

    /**
     * Test list_block_types returns descriptions and examples.
     */
    public function testListBlockTypesIncludesDescriptionsAndExamples(): void
    {
        $result = $this->tool->execute(['action' => 'list_block_types']);

        $sanitized = $result->getSanitizedResult();
        $data = json_decode($sanitized['text'], true);

        $this->assertArrayHasKey('types', $data);
        $this->assertArrayHasKey('total', $data);
        $this->assertEquals(33, $data['total']);

        // Check that each type has description and example
        foreach ($data['types'] as $type) {
            $this->assertArrayHasKey('name', $type);
            $this->assertArrayHasKey('description', $type);
            $this->assertArrayHasKey('example', $type);
            $this->assertNotNull($type['description'], "Type '{$type['name']}' missing description");
            $this->assertNotNull($type['example'], "Type '{$type['name']}' missing example");
        }
    }

    /**
     * Test get_block_schema returns description and example.
     */
    public function testGetBlockSchemaIncludesDescriptionAndExample(): void
    {
        $result = $this->tool->execute([
            'action' => 'get_block_schema',
            'blockTypeName' => 'faq',
        ]);

        $sanitized = $result->getSanitizedResult();
        $data = json_decode($sanitized['text'], true);

        $this->assertEquals('faq', $data['name']);
        $this->assertArrayHasKey('description', $data);
        $this->assertArrayHasKey('example', $data);
        $this->assertStringContainsString('FAQ', $data['description']);
        $this->assertEquals('faq', $data['example']['type']);
        $this->assertArrayHasKey('faqs', $data['example']);
    }

    /**
     * Test get_block_schema returns error for unknown type.
     */
    public function testGetBlockSchemaErrorForUnknownType(): void
    {
        $result = $this->tool->execute([
            'action' => 'get_block_schema',
            'blockTypeName' => 'unknown-type',
        ]);

        $sanitized = $result->getSanitizedResult();
        $data = json_decode($sanitized['text'], true);

        $this->assertArrayHasKey('error', $data);
        $this->assertArrayHasKey('available_types', $data);
        $this->assertStringContainsString('not found', $data['error']);
    }

    /**
     * Test list_media action.
     */
    public function testListMediaAction(): void
    {
        $this->mediaService->method('listMedia')
            ->willReturn([
                'media' => [
                    ['id' => 1, 'title' => 'Test', 'filename' => 'test.jpg', 'mimeType' => 'image/jpeg', 'collectionId' => 1],
                ],
                'total' => 1,
                'limit' => 50,
                'offset' => 0,
            ]);

        $result = $this->tool->execute([
            'action' => 'list_media',
            'search' => 'test',
            'locale' => 'de',
        ]);

        $sanitized = $result->getSanitizedResult();
        $data = json_decode($sanitized['text'], true);

        $this->assertArrayHasKey('media', $data);
        $this->assertArrayHasKey('total', $data);
        $this->assertEquals(1, $data['total']);
    }

    /**
     * Test list_snippets action.
     */
    public function testListSnippetsAction(): void
    {
        $this->snippetService->method('listSnippets')
            ->willReturn([
                'snippets' => [
                    ['uuid' => 'abc-123', 'title' => 'Contact', 'type' => 'contact', 'path' => '/cmf/example/snippets/contact/main'],
                ],
            ]);

        $result = $this->tool->execute([
            'action' => 'list_snippets',
            'snippetType' => 'contact',
            'locale' => 'de',
        ]);

        $sanitized = $result->getSanitizedResult();
        $data = json_decode($sanitized['text'], true);

        $this->assertArrayHasKey('snippets', $data);
        $this->assertCount(1, $data['snippets']);
    }
}
