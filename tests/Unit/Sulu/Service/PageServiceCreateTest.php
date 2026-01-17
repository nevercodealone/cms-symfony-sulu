<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Logger\McpActivityLogger;
use App\Sulu\Service\PageService;
use Doctrine\DBAL\Connection;
use PHPCR\SessionInterface;
use PHPUnit\Framework\TestCase;
use Sulu\Component\DocumentManager\DocumentManagerInterface;

class PageServiceCreateTest extends TestCase
{
    public function testCreatePagePersistsViaDocumentManager(): void
    {
        // Mock Connection - parent path check
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')
            ->willReturn(['identifier' => 'parent-uuid']);

        $activityLogger = $this->createMock(McpActivityLogger::class);
        $activityLogger->method('logMcpAction');

        // Mock parent document
        $parentDocument = new \stdClass();

        // Mock page document with all required methods
        $document = $this->getMockBuilder(\stdClass::class)
            ->addMethods([
                'setParent', 'setTitle', 'setStructureType', 'setResourceSegment',
                'setLocale', 'setWorkflowStage', 'setExtensionsData',
                'getUuid', 'getPath', 'getResourceSegment'
            ])
            ->getMock();

        $document->method('getUuid')->willReturn('test-uuid-123');
        $document->method('getPath')->willReturn('/cmf/example/contents/test-page');
        $document->method('getResourceSegment')->willReturn('/test-page');

        // Mock DocumentManager
        $documentManager = $this->createMock(DocumentManagerInterface::class);
        $documentManager->method('find')->willReturn($parentDocument);
        $documentManager->method('create')->with('page')->willReturn($document);

        $documentManager->expects($this->once())->method('persist');
        $documentManager->expects($this->once())->method('flush');
        $documentManager->expects($this->once())->method('clear');

        // Mock PHPCR Session for explicit save after flush
        $phpcrSession = $this->createMock(SessionInterface::class);
        $phpcrSession->expects($this->once())->method('save');

        $pageService = new PageService(
            $connection,
            $activityLogger,
            null,
            null,
            $documentManager,
            $phpcrSession
        );

        $result = $pageService->createPage([
            'parentPath' => '/cmf/example/contents',
            'title' => 'Test Page',
            'resourceSegment' => '/test-page',
            'publish' => false,
        ], 'de');

        $this->assertTrue($result['success']);
        $this->assertEquals('test-uuid-123', $result['uuid']);
        $this->assertEquals('/cmf/example/contents/test-page', $result['path']);
    }
}
