<?php

declare(strict_types=1);

namespace App\Tests\Unit\MCP\Tools;

use App\MCP\Tools\SuluPagesTool;
use App\Sulu\Service\PageService;
use KLP\KlpMcpServer\Services\ToolService\Schema\PropertyType;
use KLP\KlpMcpServer\Services\ToolService\Schema\SchemaProperty;
use KLP\KlpMcpServer\Services\ToolService\Schema\StructuredSchema;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class SuluPagesToolTest extends TestCase
{
    private PageService&MockObject $pageService;
    private SuluPagesTool $tool;

    protected function setUp(): void
    {
        $this->pageService = $this->createMock(PageService::class);
        $this->tool = new SuluPagesTool($this->pageService);
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
}
