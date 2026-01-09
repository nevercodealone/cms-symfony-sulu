<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Logger\McpActivityLogger;
use App\Sulu\Service\PageService;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class PageServiceTest extends TestCase
{
    private Connection&MockObject $connection;
    private McpActivityLogger&MockObject $activityLogger;
    private PageService $pageService;

    private const SAMPLE_PHPCR_XML = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="9">Test Page</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="7">default</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="19">headline-paragraphs</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">Block One</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">hl-des</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="9">Block Two</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-description#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="16">Some description</sv:value>
    </sv:property>
</sv:node>
XML;

    protected function setUp(): void
    {
        $this->connection = $this->createMock(Connection::class);
        $this->activityLogger = $this->createMock(McpActivityLogger::class);
        $this->pageService = new PageService($this->connection, $this->activityLogger);
    }

    public function testListPagesReturnsPages(): void
    {
        $this->connection->method('fetchAllAssociative')
            ->willReturn([
                ['path' => '/cmf/example/contents/page1', 'props' => self::SAMPLE_PHPCR_XML],
                ['path' => '/cmf/example/contents/page2', 'props' => self::SAMPLE_PHPCR_XML],
            ]);

        $result = $this->pageService->listPages('de', '/cmf/example/contents');

        $this->assertCount(2, $result);
        $this->assertEquals('/cmf/example/contents/page1', $result[0]['path']);
        $this->assertEquals('Test Page', $result[0]['title']);
        $this->assertEquals('default', $result[0]['template']);
    }

    public function testListPagesReturnsEmptyArrayWhenNoPages(): void
    {
        $this->connection->method('fetchAllAssociative')
            ->willReturn([]);

        $result = $this->pageService->listPages('de', '/cmf/example/contents');

        $this->assertCount(0, $result);
    }

    public function testGetPageReturnsPageWithBlocks(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['path' => '/cmf/example/contents/test', 'props' => self::SAMPLE_PHPCR_XML]);

        $result = $this->pageService->getPage('/cmf/example/contents/test', 'de');

        $this->assertNotNull($result);
        $this->assertEquals('/cmf/example/contents/test', $result['path']);
        $this->assertEquals('Test Page', $result['title']);
        $this->assertEquals('default', $result['template']);
        $this->assertCount(2, $result['blocks']);
        $this->assertEquals('headline-paragraphs', $result['blocks'][0]['type']);
        $this->assertEquals('Block One', $result['blocks'][0]['headline']);
        $this->assertEquals('hl-des', $result['blocks'][1]['type']);
        $this->assertEquals('Block Two', $result['blocks'][1]['headline']);
        $this->assertEquals('Some description', $result['blocks'][1]['description']);
    }

    public function testGetPageReturnsNullForNonexistentPage(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(false);

        $result = $this->pageService->getPage('/nonexistent', 'de');

        $this->assertNull($result);
    }

    public function testAddBlockSuccess(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $this->connection->expects($this->exactly(2))
            ->method('executeStatement');

        $this->activityLogger->expects($this->once())
            ->method('logMcpAction')
            ->with('mcp_block_added', '/cmf/example/contents/test', 'de', $this->anything());

        $result = $this->pageService->addBlock(
            '/cmf/example/contents/test',
            ['type' => 'headline-paragraphs', 'headline' => 'New Block'],
            0,
            'de'
        );

        $this->assertTrue($result['success']);
        $this->assertEquals('Block added successfully', $result['message']);
        $this->assertEquals(2, $result['position']); // Should be appended at position 2
    }

    public function testAddBlockWithItemsSuccess(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $this->connection->expects($this->exactly(2))
            ->method('executeStatement');

        $result = $this->pageService->addBlock(
            '/cmf/example/contents/test',
            [
                'type' => 'headline-paragraphs',
                'headline' => 'Code Block',
                'items' => [
                    ['type' => 'description', 'description' => '<p>Some text</p>'],
                    ['type' => 'code', 'code' => 'echo "hello";', 'language' => 'php'],
                ],
            ],
            0,
            'de'
        );

        $this->assertTrue($result['success']);
    }

    public function testAddBlockFailsForNonexistentPage(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(false);

        $result = $this->pageService->addBlock(
            '/nonexistent',
            ['type' => 'headline-paragraphs', 'headline' => 'Test'],
            0,
            'de'
        );

        $this->assertFalse($result['success']);
        $this->assertEquals('Page not found', $result['message']);
    }

    public function testRemoveBlockSuccess(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $this->connection->expects($this->exactly(2))
            ->method('executeStatement');

        $this->activityLogger->expects($this->once())
            ->method('logMcpAction')
            ->with('mcp_block_removed', '/cmf/example/contents/test', 'de', ['position' => 0]);

        $result = $this->pageService->removeBlock('/cmf/example/contents/test', 0, 'de');

        $this->assertTrue($result['success']);
        $this->assertEquals('Block removed successfully', $result['message']);
    }

    public function testRemoveBlockFailsForInvalidPosition(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $result = $this->pageService->removeBlock('/cmf/example/contents/test', 99, 'de');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('out of range', $result['message']);
    }

    public function testRemoveBlockFailsForNonexistentPage(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(false);

        $result = $this->pageService->removeBlock('/nonexistent', 0, 'de');

        $this->assertFalse($result['success']);
        $this->assertEquals('Page not found', $result['message']);
    }

    public function testUpdateBlockSuccess(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $this->connection->expects($this->once())
            ->method('executeStatement');

        $this->activityLogger->expects($this->once())
            ->method('logMcpAction')
            ->with('mcp_block_updated', '/cmf/example/contents/test', 'de', $this->anything());

        $result = $this->pageService->updateBlock(
            '/cmf/example/contents/test',
            0,
            ['headline' => 'Updated Headline'],
            'de'
        );

        $this->assertTrue($result['success']);
        $this->assertEquals('Block updated successfully', $result['message']);
    }

    public function testUpdateBlockFailsForInvalidPosition(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $result = $this->pageService->updateBlock('/cmf/example/contents/test', 99, ['headline' => 'Test'], 'de');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('out of range', $result['message']);
    }

    public function testMoveBlockSuccess(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $this->connection->expects($this->once())
            ->method('executeStatement');

        $this->activityLogger->expects($this->once())
            ->method('logMcpAction')
            ->with('mcp_block_moved', '/cmf/example/contents/test', 'de', $this->anything());

        $result = $this->pageService->moveBlock('/cmf/example/contents/test', 0, 1, 'de');

        $this->assertTrue($result['success']);
        $this->assertStringContainsString('moved from position 0 to 1', $result['message']);
    }

    public function testMoveBlockSamePosition(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $result = $this->pageService->moveBlock('/cmf/example/contents/test', 1, 1, 'de');

        $this->assertTrue($result['success']);
        $this->assertEquals('Block already at target position', $result['message']);
    }

    public function testMoveBlockFailsForInvalidPosition(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $result = $this->pageService->moveBlock('/cmf/example/contents/test', 99, 0, 'de');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('out of range', $result['message']);
    }

    public function testPublishPageSuccess(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $this->connection->expects($this->once())
            ->method('executeStatement');

        $this->activityLogger->expects($this->once())
            ->method('logMcpAction')
            ->with('mcp_page_published', '/cmf/example/contents/test', 'de');

        $result = $this->pageService->publishPage('/cmf/example/contents/test', 'de');

        $this->assertTrue($result['success']);
        $this->assertEquals('Page published successfully', $result['message']);
    }

    public function testPublishPageFailsForNonexistentPage(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(false);

        $result = $this->pageService->publishPage('/nonexistent', 'de');

        $this->assertFalse($result['success']);
        $this->assertEquals('Page not found', $result['message']);
    }

    public function testUnpublishPageSuccess(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        $this->connection->expects($this->once())
            ->method('executeStatement');

        $this->activityLogger->expects($this->once())
            ->method('logMcpAction')
            ->with('mcp_page_unpublished', '/cmf/example/contents/test', 'de');

        $result = $this->pageService->unpublishPage('/cmf/example/contents/test', 'de');

        $this->assertTrue($result['success']);
        $this->assertEquals('Page unpublished successfully', $result['message']);
    }

    public function testUnpublishPageFailsForNonexistentPage(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(false);

        $result = $this->pageService->unpublishPage('/nonexistent', 'de');

        $this->assertFalse($result['success']);
        $this->assertEquals('Page not published or not found', $result['message']);
    }

    public function testListBlockTypesReturnsTypes(): void
    {
        $result = $this->pageService->listBlockTypes();

        $this->assertIsArray($result);
        $this->assertNotEmpty($result);

        $typeNames = array_column($result, 'name');
        $this->assertContains('headline-paragraphs', $typeNames);
        $this->assertContains('hl-des', $typeNames);
        $this->assertContains('code', $typeNames);
    }

    public function testExtractBlocksWithNestedItems(): void
    {
        $xmlWithItems = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="19">headline-paragraphs</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">Test</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#0-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#0-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">description</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#0-description#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="14">&lt;p&gt;Hello&lt;/p&gt;</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#0-type#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">code</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#0-code#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="10">echo "hi";</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#0-language#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="3">php</sv:value>
    </sv:property>
</sv:node>
XML;

        $this->connection->method('fetchAssociative')
            ->willReturn(['path' => '/test', 'props' => $xmlWithItems]);

        $result = $this->pageService->getPage('/test', 'de');

        $this->assertNotNull($result);
        $this->assertCount(1, $result['blocks']);
        $this->assertEquals('headline-paragraphs', $result['blocks'][0]['type']);
        $this->assertArrayHasKey('items', $result['blocks'][0]);
        $this->assertCount(2, $result['blocks'][0]['items']);
        $this->assertEquals('description', $result['blocks'][0]['items'][0]['type']);
        $this->assertEquals('<p>Hello</p>', $result['blocks'][0]['items'][0]['content']);
        $this->assertEquals('code', $result['blocks'][0]['items'][1]['type']);
        $this->assertEquals('echo "hi";', $result['blocks'][0]['items'][1]['code']);
        $this->assertEquals('php', $result['blocks'][0]['items'][1]['language']);
    }
}
