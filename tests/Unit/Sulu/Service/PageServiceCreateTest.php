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
        $this->assertEquals('https://nevercodealone.de/de/glossare/test-page', $result['full_url']);
        $this->assertFalse($result['published']);
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

    // ==========================================================================
    // Template selection
    // ==========================================================================

    /**
     * @param array<string, mixed> $extra
     * @return array{result: array<string, mixed>, written: array<int, string>}
     */
    private function createWith(array $extra): array
    {
        $parentProps = '<?xml version="1.0"?><sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">'
            . '<sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0">'
            . '<sv:value length="9">/glossare</sv:value></sv:property></sv:node>';

        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')
            ->willReturnCallback(function ($sql, $params) use ($parentProps) {
                if (str_contains($sql, 'SELECT id, path, props')) {
                    return ['id' => 123, 'path' => '/cmf/example/contents/glossare', 'props' => $parentProps];
                }
                if (str_contains($sql, 'SELECT id FROM phpcr_nodes WHERE path = ?')) {
                    return str_contains($params[0] ?? '', 'test-page') ? null : ['id' => 123];
                }

                return null;
            });
        $connection->method('fetchOne')->willReturn(10);

        $written = [];
        $connection->method('executeStatement')
            ->willReturnCallback(function (string $sql, array $params) use (&$written): int {
                foreach ($params as $param) {
                    if (is_string($param) && str_contains($param, 'sv:node')) {
                        $written[] = $param;
                    }
                }

                return 1;
            });

        $pageService = new PageService($connection, $this->createMock(McpActivityLogger::class));

        $result = $pageService->createPage($extra + [
            'parentPath' => '/cmf/example/contents/glossare',
            'title' => 'Test Page',
            'resourceSegment' => '/test-page',
            'publish' => false,
        ], 'de');

        return ['result' => $result, 'written' => $written];
    }

    public function testCreatePageDefaultsToTailwindWhenNoTemplateGiven(): void
    {
        // Regression guard: every existing caller omits `template`.
        ['result' => $result, 'written' => $written] = $this->createWith([]);

        $this->assertTrue($result['success']);
        $this->assertNotEmpty($written);
        $this->assertStringContainsString(
            '<sv:value length="8">tailwind</sv:value>',
            $written[0],
        );
    }

    public function testCreatePageHonoursAnExplicitTemplate(): void
    {
        ['result' => $result, 'written' => $written] = $this->createWith(['template' => 'training-detail']);

        $this->assertTrue($result['success']);
        // The length attribute must match the value - it used to be hardcoded to 8, which
        // is only correct for the literal 'tailwind'.
        $this->assertStringContainsString(
            '<sv:value length="15">training-detail</sv:value>',
            $written[0],
        );
    }

    public function testCreatePageRejectsAnUnknownTemplate(): void
    {
        ['result' => $result, 'written' => $written] = $this->createWith(['template' => 'does-not-exist']);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Unknown template 'does-not-exist'", $result['message']);
        $this->assertStringContainsString('training-detail', $result['message']);
        $this->assertSame([], $written, 'Nothing may be written for an unknown template');
    }

    public function testAvailableTemplatesComeFromTheTemplateXmlKeys(): void
    {
        $pageService = new PageService(
            $this->createMock(Connection::class),
            $this->createMock(McpActivityLogger::class),
        );

        $templates = $pageService->getAvailableTemplates();

        $this->assertContains('tailwind', $templates);
        $this->assertContains('training-detail', $templates);
        // <key> is read from the file, not the filename.
        $this->assertNotContains('blocks', $templates);
    }
}
