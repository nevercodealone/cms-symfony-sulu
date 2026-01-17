<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Logger\McpActivityLogger;
use App\Sulu\Service\PageService;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\TestCase;

class PageServiceCreateTest extends TestCase
{
    public function testCreatePageViaDirectSql(): void
    {
        // Mock Connection
        $connection = $this->createMock(Connection::class);

        // Parent lookup returns valid parent with props
        $parentProps = '<?xml version="1.0"?><sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0"><sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0"><sv:value length="9">/glossare</sv:value></sv:property></sv:node>';

        $connection->method('fetchAssociative')
            ->willReturnCallback(function ($sql, $params) use ($parentProps) {
                if (str_contains($sql, 'SELECT id, path, props')) {
                    // Parent lookup
                    return ['id' => 123, 'path' => '/cmf/example/contents/glossare', 'props' => $parentProps];
                }
                if (str_contains($sql, 'SELECT id FROM phpcr_nodes WHERE path = ?') && str_contains($sql, 'workspace_name')) {
                    // Check if page exists - return null (doesn't exist)
                    if (str_contains($params[0] ?? '', 'test-page')) {
                        return null;
                    }
                    // Parent in workspace lookup
                    return ['id' => 123];
                }
                return null;
            });

        $connection->method('fetchOne')
            ->willReturn(10); // Max sort order

        // Expect INSERT statements for both workspaces
        $connection->expects($this->exactly(2))
            ->method('executeStatement')
            ->with(
                $this->stringContains('INSERT INTO phpcr_nodes'),
                $this->anything()
            );

        $activityLogger = $this->createMock(McpActivityLogger::class);
        $activityLogger->expects($this->once())->method('logMcpAction');

        $pageService = new PageService(
            $connection,
            $activityLogger,
            null,
            null
        );

        $result = $pageService->createPage([
            'parentPath' => '/cmf/example/contents/glossare',
            'title' => 'Test Page',
            'resourceSegment' => '/test-page',
            'publish' => false,
        ], 'de');

        $this->assertTrue($result['success']);
        $this->assertNotEmpty($result['uuid']);
        $this->assertEquals('/cmf/example/contents/glossare/test-page', $result['path']);
        $this->assertEquals('/de/glossare/test-page', $result['url']);
    }

    public function testCreatePageValidatesResourceSegment(): void
    {
        $connection = $this->createMock(Connection::class);
        $activityLogger = $this->createMock(McpActivityLogger::class);

        $pageService = new PageService(
            $connection,
            $activityLogger,
            null,
            null
        );

        // Invalid: missing leading slash
        $result = $pageService->createPage([
            'parentPath' => '/cmf/example/contents',
            'title' => 'Test',
            'resourceSegment' => 'test-page',
        ], 'de');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('resourceSegment must start with /', $result['message']);
    }

    public function testCreatePageRequiresParentPath(): void
    {
        $connection = $this->createMock(Connection::class);
        $activityLogger = $this->createMock(McpActivityLogger::class);

        $pageService = new PageService(
            $connection,
            $activityLogger,
            null,
            null
        );

        $result = $pageService->createPage([
            'title' => 'Test',
            'resourceSegment' => '/test-page',
        ], 'de');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('parentPath is required', $result['message']);
    }
}
