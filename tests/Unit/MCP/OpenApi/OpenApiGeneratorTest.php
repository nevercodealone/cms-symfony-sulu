<?php

declare(strict_types=1);

namespace App\Tests\Unit\MCP\OpenApi;

use App\MCP\OpenApi\OpenApiGenerator;
use App\MCP\Tools\SuluPagesTool;
use App\Sulu\Block\BlockTypeRegistry;
use KLP\KlpMcpServer\Services\ToolService\Schema\StructuredSchema;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class OpenApiGeneratorTest extends TestCase
{
    private OpenApiGenerator $generator;
    private SuluPagesTool&MockObject $tool;
    private BlockTypeRegistry $registry;

    protected function setUp(): void
    {
        $this->tool = $this->createMock(SuluPagesTool::class);
        $this->registry = new BlockTypeRegistry();

        $this->tool->method('getInputSchema')->willReturn(new StructuredSchema());
        $this->tool->method('getDescription')->willReturn('Actions: list, get, create_page.');

        $this->generator = new OpenApiGenerator($this->tool, $this->registry);
    }

    public function testGenerateReturnsValidOpenApiSpec(): void
    {
        $spec = $this->generator->generate();

        $this->assertEquals('3.1.0', $spec['openapi']);
        $this->assertEquals('NCA Sulu MCP API', $spec['info']['title']);
        $this->assertEquals('1.0.0', $spec['info']['version']);
        $this->assertArrayHasKey('paths', $spec);
        $this->assertArrayHasKey('components', $spec);
    }

    public function testGenerateContainsRequiredSchemas(): void
    {
        $spec = $this->generator->generate();

        $schemas = array_keys($spec['components']['schemas']);
        $this->assertContains('ToolRequest', $schemas);
        $this->assertContains('ToolResponse', $schemas);
        $this->assertContains('Page', $schemas);
        $this->assertContains('Block', $schemas);
    }

    public function testGenerateContainsMcpPath(): void
    {
        $spec = $this->generator->generate();

        $this->assertArrayHasKey('/mcp', $spec['paths']);
        $this->assertArrayHasKey('post', $spec['paths']['/mcp']);
    }

    public function testPageSchemaHasRequiredFields(): void
    {
        $spec = $this->generator->generate();
        $page = $spec['components']['schemas']['Page'];

        $this->assertEquals(['path', 'uuid', 'title', 'locale'], $page['required']);
        $this->assertArrayHasKey('blocks', $page['properties']);
    }

    public function testBlockSchemaRequiresType(): void
    {
        $spec = $this->generator->generate();
        $block = $spec['components']['schemas']['Block'];

        $this->assertEquals(['type'], $block['required']);
    }
}
