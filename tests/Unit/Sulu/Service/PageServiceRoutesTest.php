<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Logger\McpActivityLogger;
use App\Sulu\Service\PageService;
use App\Sulu\Service\RouteHealthService;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * update_resource_locator and move_page: precondition checks, the spawned
 * DocumentManager command and the post-write verification.
 */
class PageServiceRoutesTest extends TestCase
{
    use DocumentCommandStubsTrait;

    private const KI = '/cmf/example/contents/glossare/ki';
    private const TS = '/cmf/example/contents/glossare/ts';
    private const PAGE = self::KI . '/krea';

    private Connection&MockObject $connection;

    /** @var array<string, string|null> draft url per page path */
    private array $urls = [
        '/cmf/example/contents/glossare' => '/glossare',
        self::KI => '/glossare/ki',
        self::TS => '/glossare/ts',
        self::PAGE => '/glossare/ki/krea',
    ];

    protected function setUp(): void
    {
        $this->connection = $this->createMock(Connection::class);
        $this->connection->method('fetchOne')->willReturnCallback(function (string $sql, array $params) {
            $path = $params[0];
            if (str_starts_with($sql, 'SELECT props')) {
                return isset($this->urls[$path])
                    ? '<?xml version="1.0"?><sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0"><sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0"><sv:value length="1">' . $this->urls[$path] . '</sv:value></sv:property></sv:node>'
                    : false;
            }

            return array_key_exists($path, $this->urls) ? 1 : false;
        });
    }

    /**
     * @param array<string, mixed> $commandResult
     * @param callable(string): (array<string, mixed>|null)|null $health
     * @param array{uuid: string, path: string|null}|null $owner
     */
    private function service(array $commandResult = ['success' => true], ?callable $health = null, ?array $owner = null): PageService
    {
        $routeHealth = $this->createMock(RouteHealthService::class);
        $routeHealth->method('getRouteHealth')->willReturnCallback($health ?? fn (string $p) => isset($this->urls[$p])
            ? $this->healthReport($p, $this->urls[$p], $this->urls[$p], true)
            : null);
        $routeHealth->method('findActiveRouteOwner')->willReturn($owner);

        return new PageService(
            $this->connection,
            $this->createMock(McpActivityLogger::class),
            commandRunner: $this->stubRunner($commandResult),
            routeHealth: $routeHealth,
        );
    }

    public function testUpdateResourceLocatorRejectsInvalidSegment(): void
    {
        $result = $this->service()->updateResourceLocator(self::PAGE, '/a/b', true);

        $this->assertSame('invalid_resource_segment', $result['errorCode']);
        $this->assertSame([], $this->spawnedCommands);
    }

    public function testUpdateResourceLocatorRefusesTakenUrl(): void
    {
        $result = $this->service(owner: ['uuid' => 'other-uuid', 'path' => self::KI . '/other'])
            ->updateResourceLocator(self::PAGE, '/krea-2', true);

        $this->assertFalse($result['success']);
        $this->assertSame('resource_locator_taken', $result['errorCode']);
        $this->assertSame(self::KI . '/other', $result['conflictingPage']);
        $this->assertSame([], $this->spawnedCommands);
    }

    public function testUpdateResourceLocatorSpawnsSetUrlAndVerifies(): void
    {
        $calls = 0;
        $service = $this->service(['success' => true, 'path' => self::PAGE], function (string $p) use (&$calls) {
            $calls++;

            return $calls === 1
                ? $this->healthReport($p, '/glossare/ki/krea', '/glossare/ki/krea', true)
                : $this->healthReport($p, '/glossare/ki/krea-2', '/glossare/ki/krea-2', true, routes: [
                    ['url' => '/glossare/ki/krea-2', 'workspace' => 'default', 'history' => false],
                    ['url' => '/glossare/ki/krea', 'workspace' => 'default', 'history' => true],
                ]);
        });

        $result = $service->updateResourceLocator(self::PAGE, '/krea-2', true);

        $this->assertTrue($result['success'], json_encode($result) ?: '');
        $this->assertSame('/glossare/ki/krea', $result['oldUrl']);
        $this->assertSame('/glossare/ki/krea-2', $result['newUrl']);
        $this->assertSame([['url' => '/glossare/ki/krea', 'workspace' => 'default']], $result['historyRoutes']);
        $this->assertSame(['app:page:set-url', self::PAGE, '/krea-2', '--locale=de', '--publish'], $this->spawnedArgs('app:page:set-url'));
    }

    public function testUpdateResourceLocatorReportsWhenTheDraftUrlDidNotChange(): void
    {
        $service = $this->service(['success' => true, 'path' => self::PAGE], fn (string $p) => $this->healthReport($p, '/glossare/ki/krea', '/glossare/ki/krea', true));

        $result = $service->updateResourceLocator(self::PAGE, '/krea-2', false);

        $this->assertFalse($result['success']);
        $this->assertSame('route_check_failed', $result['errorCode']);
        $this->assertStringContainsString('expected /glossare/ki/krea-2', $result['reason']);
    }

    public function testMovePageRefusesOwnSubtree(): void
    {
        $result = $this->service()->movePage(self::KI, self::PAGE);

        $this->assertSame('invalid_move', $result['errorCode']);
    }

    public function testMovePageRefusesParentWithoutDraftRoute(): void
    {
        $service = $this->service(health: fn (string $p) => $p === self::TS
            ? $this->healthReport($p, '/glossare/ts', '/glossare/ts', true, 'missing', 'ok')
            : $this->healthReport($p, $this->urls[$p] ?? null, $this->urls[$p] ?? null, true));

        $result = $service->movePage(self::PAGE, self::TS, null, true);

        $this->assertFalse($result['success']);
        $this->assertSame('parent_missing_draft_route', $result['reason']);
        $this->assertSame([], $this->spawnedCommands);
    }

    public function testMovePageRefusesTakenNodeName(): void
    {
        $this->urls[self::TS . '/krea'] = '/glossare/ts/krea';

        $result = $this->service()->movePage(self::PAGE, self::TS);

        $this->assertSame('node_name_taken', $result['errorCode']);
    }

    public function testMovePageSpawnsMoveAndReportsNewUrlUnderTheNewParent(): void
    {
        $newPath = self::TS . '/krea';
        $service = $this->service(['success' => true, 'path' => $newPath], function (string $p) use ($newPath) {
            if ($p === $newPath) {
                return $this->healthReport($p, '/glossare/ts/krea', '/glossare/ts/krea', true);
            }

            return isset($this->urls[$p]) ? $this->healthReport($p, $this->urls[$p], $this->urls[$p], true) : null;
        });

        $result = $service->movePage(self::PAGE, self::TS, null, true);

        $this->assertTrue($result['success'], json_encode($result) ?: '');
        $this->assertSame($newPath, $result['path']);
        $this->assertSame(['/glossare/ki/krea'], $result['oldUrls']);
        $this->assertSame('/glossare/ts/krea', $result['newUrl']);
        $this->assertSame(['app:page:move', self::PAGE, self::TS, '--locale=de', '--publish'], $this->spawnedArgs('app:page:move'));
    }

    public function testMovePageFailsWhenUrlEndsUpUnderTheWrongPrefix(): void
    {
        $newPath = self::TS . '/krea';
        $service = $this->service(['success' => true, 'path' => $newPath], function (string $p) use ($newPath) {
            if ($p === $newPath) {
                // The original bug: URL one level too high.
                return $this->healthReport($p, '/glossare/krea', '/glossare/krea', true);
            }

            return isset($this->urls[$p]) ? $this->healthReport($p, $this->urls[$p], $this->urls[$p], true) : null;
        });

        $result = $service->movePage(self::PAGE, self::TS, null, true);

        $this->assertFalse($result['success']);
        $this->assertSame('route_check_failed', $result['errorCode']);
        $this->assertStringContainsString('expected /glossare/ts/krea', $result['reason']);
    }
}
