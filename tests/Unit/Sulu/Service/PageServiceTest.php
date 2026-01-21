<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Logger\McpActivityLogger;
use App\Sulu\Service\PageService;
use Doctrine\DBAL\Connection;
use FOS\HttpCacheBundle\CacheManager as FOSCacheManager;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Sulu\Bundle\HttpCacheBundle\Cache\CacheManagerInterface;
use Sulu\Bundle\PageBundle\Document\PageDocument;
use Sulu\Component\DocumentManager\DocumentManagerInterface;

class PageServiceTest extends TestCase
{
    private Connection&MockObject $connection;
    private McpActivityLogger&MockObject $activityLogger;
    private PageService $pageService;
    private CacheManagerInterface&MockObject $cacheManager;
    private FOSCacheManager&MockObject $fosCacheManager;

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
        $this->assertEquals(0, $result['position']); // Should be inserted at position 0 as requested
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

    public function testRemoveBlockActuallyRemovesFromXml(): void
    {
        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => self::SAMPLE_PHPCR_XML]);

        // Capture the XML that gets written
        $capturedXml = null;
        $this->connection->expects($this->exactly(2))
            ->method('executeStatement')
            ->willReturnCallback(function ($sql, $params) use (&$capturedXml) {
                $capturedXml = $params[0]; // First param is the XML
                return 1;
            });

        $result = $this->pageService->removeBlock('/cmf/example/contents/test', 0, 'de');

        $this->assertTrue($result['success']);
        $this->assertNotNull($capturedXml, 'XML should have been captured');

        // Parse the captured XML and verify changes
        $xml = new \DOMDocument();
        $xml->loadXML($capturedXml);
        $xpath = new \DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

        // Verify blocks-length is now 1 (was 2)
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        $this->assertEquals(1, $lengthNodes->length);
        $this->assertEquals('1', $lengthNodes->item(0)->nodeValue, 'blocks-length should be 1');

        // Verify block #0 properties are removed (headline-paragraphs)
        $removedType = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-type#0"]');
        // After removal, block #1 should become #0
        $this->assertEquals(1, $removedType->length, 'There should be one block-type#0 (the old #1)');

        // Verify the remaining block is the old block #1 (hl-des with "Block Two")
        $typeNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-type#0"]/sv:value');
        $this->assertEquals('hl-des', $typeNodes->item(0)->nodeValue, 'Block #0 should now be hl-des (old #1)');

        $headlineNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-headline#0"]/sv:value');
        $this->assertEquals('Block Two', $headlineNodes->item(0)->nodeValue, 'Block #0 headline should be "Block Two"');

        // Verify no block #1 properties exist anymore
        $block1Type = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-type#1"]');
        $this->assertEquals(0, $block1Type->length, 'There should be no block-type#1');
    }

    public function testRemoveBlockRoundTrip(): void
    {
        // This test simulates: read -> remove -> read again
        // to verify the full round-trip works
        $capturedXml = null;

        $this->connection->method('fetchAssociative')
            ->willReturnCallback(function ($sql, $params) use (&$capturedXml) {
                // If we have captured XML, return it (simulates reading after write)
                if ($capturedXml !== null) {
                    return ['path' => '/test', 'props' => $capturedXml];
                }
                // First call returns original XML
                return ['path' => '/test', 'props' => self::SAMPLE_PHPCR_XML];
            });

        $this->connection->method('executeStatement')
            ->willReturnCallback(function ($sql, $params) use (&$capturedXml) {
                $capturedXml = $params[0]; // Capture what we write
                return 1;
            });

        // Step 1: Read original page
        $pageBefore = $this->pageService->getPage('/test', 'de');
        $this->assertCount(2, $pageBefore['blocks'], 'Should have 2 blocks before removal');

        // Reset captured XML to force re-read
        $originalXml = self::SAMPLE_PHPCR_XML;

        // Step 2: Remove block at position 0
        $result = $this->pageService->removeBlock('/test', 0, 'de');
        $this->assertTrue($result['success']);

        // Step 3: Read page again (should now use captured/modified XML)
        $pageAfter = $this->pageService->getPage('/test', 'de');

        // This is the key assertion - after removal, we should have 1 block
        $this->assertCount(1, $pageAfter['blocks'], 'Should have 1 block after removal');
        $this->assertEquals('hl-des', $pageAfter['blocks'][0]['type'], 'Remaining block should be hl-des');
        $this->assertEquals('Block Two', $pageAfter['blocks'][0]['headline'], 'Remaining block headline should be Block Two');
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

        $this->connection->expects($this->exactly(2))
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

        $this->connection->expects($this->exactly(2))
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
        $this->assertEquals('<p>Hello</p>', $result['blocks'][0]['items'][0]['description']);
        $this->assertEquals('code', $result['blocks'][0]['items'][1]['type']);
        $this->assertEquals('echo "hi";', $result['blocks'][0]['items'][1]['code']);
        $this->assertEquals('php', $result['blocks'][0]['items'][1]['language']);
    }

    /**
     * Create PageService with cache managers for cache invalidation tests.
     */
    private function createPageServiceWithCache(): PageService
    {
        $this->cacheManager = $this->createMock(CacheManagerInterface::class);
        $this->fosCacheManager = $this->createMock(FOSCacheManager::class);

        return new PageService(
            $this->connection,
            $this->activityLogger,
            $this->cacheManager,
            $this->fosCacheManager
        );
    }

    public function testAddBlockFlushesCache(): void
    {
        $pageService = $this->createPageServiceWithCache();

        $this->connection->method('fetchAssociative')
            ->willReturn([
                'props' => self::SAMPLE_PHPCR_XML,
                'identifier' => 'test-uuid-123',
            ]);

        $this->connection->method('executeStatement')->willReturn(1);

        // Expect cache invalidation calls
        $this->cacheManager->expects($this->once())
            ->method('invalidateTag')
            ->with('test-uuid-123');

        $this->cacheManager->expects($this->once())
            ->method('invalidatePath')
            ->with('/de/test');

        // CRITICAL: Verify flush() is called for long-running processes
        $this->fosCacheManager->expects($this->once())
            ->method('flush');

        $pageService->addBlock(
            '/cmf/example/contents/test',
            ['type' => 'headline-paragraphs', 'headline' => 'New Block'],
            0,
            'de'
        );
    }

    public function testUpdateBlockFlushesCache(): void
    {
        $pageService = $this->createPageServiceWithCache();

        $this->connection->method('fetchAssociative')
            ->willReturn([
                'props' => self::SAMPLE_PHPCR_XML,
                'identifier' => 'test-uuid-456',
            ]);

        $this->connection->method('executeStatement')->willReturn(1);

        // Expect cache invalidation and flush
        $this->cacheManager->expects($this->once())
            ->method('invalidateTag');

        $this->cacheManager->expects($this->once())
            ->method('invalidatePath');

        $this->fosCacheManager->expects($this->once())
            ->method('flush');

        $pageService->updateBlock(
            '/cmf/example/contents/test',
            0,
            ['headline' => 'Updated Headline'],
            'de'
        );
    }

    public function testRemoveBlockFlushesCache(): void
    {
        $pageService = $this->createPageServiceWithCache();

        $this->connection->method('fetchAssociative')
            ->willReturn([
                'props' => self::SAMPLE_PHPCR_XML,
                'identifier' => 'test-uuid-789',
            ]);

        $this->connection->method('executeStatement')->willReturn(1);

        // Expect flush to be called
        $this->fosCacheManager->expects($this->once())
            ->method('flush');

        $pageService->removeBlock('/cmf/example/contents/test', 0, 'de');
    }

    public function testPublishPageFlushesCache(): void
    {
        $pageService = $this->createPageServiceWithCache();

        $this->connection->method('fetchAssociative')
            ->willReturn([
                'props' => self::SAMPLE_PHPCR_XML,
                'identifier' => 'test-uuid-publish',
            ]);

        $this->connection->method('executeStatement')->willReturn(1);

        // Expect flush to be called
        $this->fosCacheManager->expects($this->once())
            ->method('flush');

        $pageService->publishPage('/cmf/example/contents/test', 'de');
    }

    public function testFlushExceptionDoesNotBreakOperation(): void
    {
        $pageService = $this->createPageServiceWithCache();

        $this->connection->method('fetchAssociative')
            ->willReturn([
                'props' => self::SAMPLE_PHPCR_XML,
                'identifier' => 'test-uuid-exception',
            ]);

        $this->connection->method('executeStatement')->willReturn(1);

        // Simulate flush() throwing an exception
        $this->fosCacheManager->expects($this->once())
            ->method('flush')
            ->willThrowException(new \Exception('Cache flush failed'));

        // Operation should still succeed despite flush exception
        $result = $pageService->addBlock(
            '/cmf/example/contents/test',
            ['type' => 'headline-paragraphs', 'headline' => 'Test'],
            0,
            'de'
        );

        $this->assertTrue($result['success']);
    }

    public function testMoveBlockFlushesCache(): void
    {
        $pageService = $this->createPageServiceWithCache();

        $this->connection->method('fetchAssociative')
            ->willReturn([
                'props' => self::SAMPLE_PHPCR_XML,
                'identifier' => 'test-uuid-move',
            ]);

        $this->connection->method('executeStatement')->willReturn(1);

        // Expect flush to be called
        $this->fosCacheManager->expects($this->once())
            ->method('flush');

        $pageService->moveBlock('/cmf/example/contents/test', 0, 1, 'de');
    }

    public function testUnpublishPageFlushesCache(): void
    {
        $pageService = $this->createPageServiceWithCache();

        $this->connection->method('fetchAssociative')
            ->willReturn([
                'props' => self::SAMPLE_PHPCR_XML,
                'identifier' => 'test-uuid-unpublish',
            ]);

        $this->connection->method('executeStatement')->willReturn(1);

        // Expect flush to be called
        $this->fosCacheManager->expects($this->once())
            ->method('flush');

        $pageService->unpublishPage('/cmf/example/contents/test', 'de');
    }
    // ==========================================================================
    // Page Discovery Tests (TDD)
    // ==========================================================================

    public function testSearchPagesFindsMatchingTitles(): void
    {
        $phpXml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">PHP Glossar</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">/php-glossar</sv:value>
    </sv:property>
</sv:node>
XML;

        $jsXml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="18">JavaScript Glossar</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0">
        <sv:value length="19">/javascript-glossar</sv:value>
    </sv:property>
</sv:node>
XML;

        $this->connection->method('fetchAllAssociative')
            ->willReturn([
                ['path' => '/cmf/example/contents/php-glossar', 'props' => $phpXml],
                ['path' => '/cmf/example/contents/javascript-glossar', 'props' => $jsXml],
            ]);

        $result = $this->pageService->searchPages('PHP', 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('PHP Glossar', $result[0]['title']);
        $this->assertEquals('/cmf/example/contents/php-glossar', $result[0]['path']);
    }

    public function testSearchPagesCaseInsensitive(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">PHP Glossar</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
</sv:node>
XML;

        $this->connection->method('fetchAllAssociative')
            ->willReturn([
                ['path' => '/cmf/example/contents/php-glossar', 'props' => $xml],
            ]);

        $result = $this->pageService->searchPages('php', 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('PHP Glossar', $result[0]['title']);
    }

    public function testSearchPagesReturnsEmptyWhenNoMatch(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">PHP Glossar</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
</sv:node>
XML;

        $this->connection->method('fetchAllAssociative')
            ->willReturn([
                ['path' => '/cmf/example/contents/php-glossar', 'props' => $xml],
            ]);

        $result = $this->pageService->searchPages('Python', 'de');

        $this->assertCount(0, $result);
    }

    public function testGetPageTreeReturnsHierarchy(): void
    {
        $parentXml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="7">Glossar</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">/glossar</sv:value>
    </sv:property>
</sv:node>
XML;

        $childXml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">PHP Glossar</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">/php-glossar</sv:value>
    </sv:property>
</sv:node>
XML;

        $this->connection->method('fetchAllAssociative')
            ->willReturn([
                ['path' => '/cmf/example/contents/glossar', 'props' => $parentXml],
                ['path' => '/cmf/example/contents/glossar/php-glossar', 'props' => $childXml],
            ]);

        $result = $this->pageService->getPageTree('/cmf/example/contents/glossar', 'de');

        $this->assertArrayHasKey('path', $result);
        $this->assertEquals('/cmf/example/contents/glossar', $result['path']);
        $this->assertEquals('Glossar', $result['title']);
        $this->assertArrayHasKey('children', $result);
        $this->assertCount(1, $result['children']);
        $this->assertEquals('PHP Glossar', $result['children'][0]['title']);
    }

    public function testGetPageTreeRespectsDepth(): void
    {
        $level1Xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">Level1</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
</sv:node>
XML;

        $level2Xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">Level2</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
</sv:node>
XML;

        $level3Xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">Level3</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
</sv:node>
XML;

        $this->connection->method('fetchAllAssociative')
            ->willReturn([
                ['path' => '/cmf/example/contents/level1', 'props' => $level1Xml],
                ['path' => '/cmf/example/contents/level1/level2', 'props' => $level2Xml],
                ['path' => '/cmf/example/contents/level1/level2/level3', 'props' => $level3Xml],
            ]);

        // Depth 1 should only include root + direct children
        $result = $this->pageService->getPageTree('/cmf/example/contents/level1', 'de', 1);

        $this->assertEquals('Level1', $result['title']);
        $this->assertCount(1, $result['children']);
        $this->assertEquals('Level2', $result['children'][0]['title']);
        // Level3 should not have children at depth 1
        $this->assertEmpty($result['children'][0]['children'] ?? []);
    }

    public function testGetPageTreeReturnsNullForNonexistentPath(): void
    {
        $this->connection->method('fetchAllAssociative')
            ->willReturn([]);

        $result = $this->pageService->getPageTree('/cmf/example/contents/nonexistent', 'de');

        $this->assertNull($result);
    }

    public function testFindPageByUrlReturnsPage(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">PHP Glossar</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">/php-glossar</sv:value>
    </sv:property>
</sv:node>
XML;

        $this->connection->method('fetchAllAssociative')
            ->willReturn([
                ['path' => '/cmf/example/contents/php-glossar', 'props' => $xml],
            ]);

        $result = $this->pageService->findPageByUrl('/php-glossar', 'de');

        $this->assertNotNull($result);
        $this->assertEquals('PHP Glossar', $result['title']);
        $this->assertEquals('/cmf/example/contents/php-glossar', $result['path']);
    }

    public function testFindPageByUrlHandlesFullUrl(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">PHP Glossar</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">/php-glossar</sv:value>
    </sv:property>
</sv:node>
XML;

        $this->connection->method('fetchAllAssociative')
            ->willReturn([
                ['path' => '/cmf/example/contents/php-glossar', 'props' => $xml],
            ]);

        // Should handle /de/php-glossar by stripping the locale prefix
        $result = $this->pageService->findPageByUrl('/de/php-glossar', 'de');

        $this->assertNotNull($result);
        $this->assertEquals('PHP Glossar', $result['title']);
    }

    public function testFindPageByUrlReturnsNullWhenNotFound(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">PHP Glossar</sv:value>
    </sv:property>
    <sv:property sv:name="template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">/php-glossar</sv:value>
    </sv:property>
</sv:node>
XML;

        $this->connection->method('fetchAllAssociative')
            ->willReturn([
                ['path' => '/cmf/example/contents/php-glossar', 'props' => $xml],
            ]);

        $result = $this->pageService->findPageByUrl('/nonexistent-page', 'de');

        $this->assertNull($result);
    }
}
