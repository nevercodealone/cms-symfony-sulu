<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Logger\McpActivityLogger;
use App\Sulu\Service\PageService;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\TestCase;

class PageServiceCreateTest extends TestCase
{
    use DocumentCommandStubsTrait;

    private const PARENT_PROPS = '<?xml version="1.0"?><sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0"><sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0"><sv:value length="9">/glossare</sv:value></sv:property></sv:node>';

    /**
     * Connection where the parent exists and the target path is free.
     */
    private function connectionWithParent(): Connection
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')
            ->willReturnCallback(function ($sql, $params) {
                if (str_contains($sql, 'SELECT id, path, props')) {
                    return ['id' => 123, 'path' => '/cmf/example/contents/glossare', 'props' => self::PARENT_PROPS];
                }

                return false;
            });
        $connection->expects($this->never())->method('executeStatement');

        return $connection;
    }

    /**
     * @param array<string, mixed> $extra
     *
     * @return array<string, mixed>
     */
    private function createWith(array $extra, ?callable $health = null): array
    {
        $pageService = new PageService(
            $this->connectionWithParent(),
            $this->createMock(McpActivityLogger::class),
            commandRunner: $this->stubRunner(fn (array $args) => [
                'success' => true,
                'path' => '/cmf/example/contents/glossare/test-page',
                'uuid' => '11111111-2222-3333-4444-555555555555',
                'url' => '/glossare/test-page',
            ]),
            routeHealth: $this->stubRouteHealth($health),
        );

        return $pageService->createPage($extra + [
            'parentPath' => '/cmf/example/contents/glossare',
            'title' => 'Test Page',
            'resourceSegment' => '/test-page',
            'publish' => false,
        ], 'de');
    }

    public function testCreatePageRunsTheDocumentManagerCommand(): void
    {
        $result = $this->createWith(
            ['seoTitle' => 'SEO', 'excerptTitle' => 'Teaser', 'excerptImage' => 7],
            fn (string $path) => str_ends_with($path, 'test-page')
                ? $this->healthReport($path, '/glossare/test-page', null, false, 'none', 'none')
                : null
        );

        $this->assertTrue($result['success']);
        $this->assertSame('11111111-2222-3333-4444-555555555555', $result['uuid']);
        $this->assertSame('/cmf/example/contents/glossare/test-page', $result['path']);
        $this->assertSame('/de/glossare/test-page', $result['url']);
        $this->assertSame('https://nevercodealone.de/de/glossare/test-page', $result['full_url']);
        $this->assertFalse($result['published']);
        $this->assertSame('none', $result['routeHealth']['draft']);

        $args = $this->spawnedArgs('app:page:create');
        $this->assertSame(['app:page:create', '/cmf/example/contents/glossare', 'Test Page', '/test-page'], array_slice($args, 0, 4));
        $this->assertContains('--seo-title=SEO', $args);
        $this->assertContains('--excerpt-title=Teaser', $args);
        $this->assertContains('--excerpt-image=7', $args);
        $this->assertNotContains('--publish', $args);
    }

    public function testCreateAndPublishFailsWhenRoutesAreNotHealthyAfterwards(): void
    {
        $result = $this->createWith(
            ['publish' => true],
            fn (string $path) => str_ends_with($path, 'test-page')
                ? $this->healthReport($path, '/glossare/test-page', '/glossare/test-page', true, 'missing', 'ok')
                : null
        );

        $this->assertFalse($result['success']);
        $this->assertSame('route_check_failed', $result['errorCode']);
        $this->assertStringContainsString('draft=missing', $result['reason']);
        $this->assertContains('--publish', $this->spawnedArgs('app:page:create'));
    }

    public function testCreateRefusesUnderAPublishedParentWithoutDraftRoute(): void
    {
        $result = $this->createWith([], fn (string $path) => $path === '/cmf/example/contents/glossare'
            ? $this->healthReport($path, '/glossare', '/glossare', true, 'missing', 'ok')
            : null);

        $this->assertFalse($result['success']);
        $this->assertSame('parent_missing_draft_route', $result['errorCode']);
        $this->assertSame([], $this->spawnedCommands);
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

    public function testCreatePageDefaultsToTailwindWhenNoTemplateGiven(): void
    {
        // Regression guard: every existing caller omits `template`.
        $result = $this->createWith([]);

        $this->assertTrue($result['success']);
        $this->assertContains('--template=tailwind', $this->spawnedArgs('app:page:create'));
    }

    public function testCreatePageHonoursAnExplicitTemplate(): void
    {
        $result = $this->createWith(['template' => 'training-detail']);

        $this->assertTrue($result['success']);
        $this->assertContains('--template=training-detail', $this->spawnedArgs('app:page:create'));
    }

    public function testCreatePageRejectsAnUnknownTemplate(): void
    {
        $result = $this->createWith(['template' => 'does-not-exist']);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Unknown template 'does-not-exist'", $result['message']);
        $this->assertStringContainsString('training-detail', $result['message']);
        $this->assertSame([], $this->spawnedCommands, 'Nothing may be spawned for an unknown template');
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
