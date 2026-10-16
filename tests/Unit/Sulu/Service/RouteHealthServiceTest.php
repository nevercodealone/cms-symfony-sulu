<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Service\RouteHealthService;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\TestCase;

/**
 * Drives RouteHealthService against an in-memory stand-in for phpcr_nodes,
 * phpcr_nodes_references and re_redirect_routes.
 */
class RouteHealthServiceTest extends TestCase
{
    private const PAGE = 'aaaaaaaa-0000-0000-0000-000000000001';
    private const ROUTE_DRAFT = 'bbbbbbbb-0000-0000-0000-000000000001';
    private const ROUTE_LIVE = 'bbbbbbbb-0000-0000-0000-000000000002';
    private const ROUTE_OLD_DRAFT = 'bbbbbbbb-0000-0000-0000-000000000003';
    private const ROUTE_OLD_LIVE = 'bbbbbbbb-0000-0000-0000-000000000004';

    /** @var list<array{id: int, path: string, workspace_name: string, identifier: string, props: string}> */
    private array $nodes = [];
    /** @var list<array{source_id: int, target_id: int}> */
    private array $references = [];
    /** @var list<array<string, mixed>> */
    private array $redirects = [];

    private function pageProps(string $uuid, string $url, string $title, int $state = 2): string
    {
        return '<?xml version="1.0" encoding="UTF-8"?><sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">'
            . '<sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0"><sv:value length="36">' . $uuid . '</sv:value></sv:property>'
            . '<sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0"><sv:value length="5">' . $title . '</sv:value></sv:property>'
            . '<sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0"><sv:value length="9">' . $url . '</sv:value></sv:property>'
            . '<sv:property sv:name="i18n:de-state" sv:type="Long" sv:multi-valued="0"><sv:value length="1">' . $state . '</sv:value></sv:property>'
            . '</sv:node>';
    }

    private function routeProps(string $uuid, string $target, bool $history): string
    {
        return '<?xml version="1.0" encoding="UTF-8"?><sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">'
            . '<sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0"><sv:value length="36">' . $uuid . '</sv:value></sv:property>'
            . '<sv:property sv:name="sulu:history" sv:type="Boolean" sv:multi-valued="0"><sv:value length="1">' . ($history ? '1' : '0') . '</sv:value></sv:property>'
            . '<sv:property sv:name="sulu:content" sv:type="Reference" sv:multi-valued="0"><sv:value length="36">' . $target . '</sv:value></sv:property>'
            . '</sv:node>';
    }

    private function addNode(string $path, string $workspace, string $identifier, string $props): int
    {
        $id = count($this->nodes) + 1;
        $this->nodes[] = ['id' => $id, 'path' => $path, 'workspace_name' => $workspace, 'identifier' => $identifier, 'props' => $props];

        return $id;
    }

    private function addReference(int $sourceId, int $targetId): void
    {
        $this->references[] = ['source_id' => $sourceId, 'target_id' => $targetId];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function query(string $sql, array $params): array
    {
        $rows = [];
        if (str_contains($sql, 'FROM re_redirect_routes')) {
            foreach ($this->redirects as $r) {
                if ($r['source'] === $params[0] && $r['enabled']) {
                    $rows[] = $r;
                }
            }

            return $rows;
        }
        if (str_contains($sql, 'FROM phpcr_nodes_references')) {
            foreach ($this->references as $ref) {
                if (in_array($ref['source_id'], $params, true)) {
                    $rows[] = ['source_id' => $ref['source_id']];
                }
            }

            return $rows;
        }
        if (str_contains($sql, 'WHERE path IN (')) {
            $workspaces = array_slice($params, -2);
            $paths = array_slice($params, 0, -2);
            foreach ($this->nodes as $n) {
                if (in_array($n['path'], $paths, true) && in_array($n['workspace_name'], $workspaces, true)) {
                    $rows[] = $n;
                }
            }

            return $rows;
        }
        if (str_contains($sql, 'WHERE identifier = ? AND workspace_name = ?')) {
            foreach ($this->nodes as $n) {
                if ($n['identifier'] === $params[0] && $n['workspace_name'] === $params[1]
                    && (!isset($params[2]) || str_starts_with($n['path'], rtrim($params[2], '%')))) {
                    $rows[] = $n;
                }
            }

            return $rows;
        }
        if (str_contains($sql, 'WHERE path LIKE ? AND workspace_name IN (?, ?)')) {
            $prefix = rtrim($params[0], '%');
            foreach ($this->nodes as $n) {
                if (str_starts_with($n['path'], $prefix) && in_array($n['workspace_name'], [$params[1], $params[2]], true)
                    && (!isset($params[3]) || str_contains($n['props'], trim($params[3], '%')))) {
                    $rows[] = $n;
                }
            }

            return $rows;
        }
        if (str_contains($sql, 'WHERE path = ? AND workspace_name = ?')) {
            foreach ($this->nodes as $n) {
                if ($n['path'] === $params[0] && $n['workspace_name'] === $params[1]) {
                    $rows[] = $n;
                }
            }

            return $rows;
        }

        $this->fail('Unexpected SQL: ' . $sql);
    }

    private function service(): RouteHealthService
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAllAssociative')->willReturnCallback(fn ($sql, $params = []) => $this->query($sql, $params));
        $connection->method('fetchAssociative')->willReturnCallback(function ($sql, $params = []) {
            $rows = $this->query($sql, $params);

            return $rows[0] ?? false;
        });

        return new RouteHealthService($connection);
    }

    /**
     * Healthy page: active route in both workspaces + reference rows + one old URL as history.
     */
    private function seedHealthyPage(): void
    {
        $pageDraft = $this->addNode('/cmf/example/contents/ueber-uns/impressum', 'default', self::PAGE, $this->pageProps(self::PAGE, '/ueber-uns/impressum', 'Impressum'));
        $pageLive = $this->addNode('/cmf/example/contents/ueber-uns/impressum', 'default_live', self::PAGE, $this->pageProps(self::PAGE, '/ueber-uns/impressum', 'Impressum'));
        $rd = $this->addNode('/cmf/example/routes/de/ueber-uns/impressum', 'default', self::ROUTE_DRAFT, $this->routeProps(self::ROUTE_DRAFT, self::PAGE, false));
        $rl = $this->addNode('/cmf/example/routes/de/ueber-uns/impressum', 'default_live', self::ROUTE_LIVE, $this->routeProps(self::ROUTE_LIVE, self::PAGE, false));
        $od = $this->addNode('/cmf/example/routes/de/impressum', 'default', self::ROUTE_OLD_DRAFT, $this->routeProps(self::ROUTE_OLD_DRAFT, self::ROUTE_DRAFT, true));
        $ol = $this->addNode('/cmf/example/routes/de/impressum', 'default_live', self::ROUTE_OLD_LIVE, $this->routeProps(self::ROUTE_OLD_LIVE, self::ROUTE_LIVE, true));
        $this->addReference($rd, $pageDraft);
        $this->addReference($rl, $pageLive);
        $this->addReference($od, $rd);
        $this->addReference($ol, $rl);
    }

    public function testHealthyPageReportsOkInBothWorkspaces(): void
    {
        $this->seedHealthyPage();

        $health = $this->service()->getRouteHealth('/cmf/example/contents/ueber-uns/impressum');

        $this->assertNotNull($health);
        $this->assertSame('/ueber-uns/impressum', $health['draftUrl']);
        $this->assertSame('/ueber-uns/impressum', $health['liveUrl']);
        $this->assertSame(
            ['draft' => 'ok', 'live' => 'ok', 'references' => 'ok', 'activeRoutes' => 1, 'healthy' => true],
            $health['routeHealth']
        );
        $this->assertCount(4, $health['routes'], 'active + history routes of both workspaces');
    }

    public function testMcpCreatedPageReportsMissingDraftRouteAndReferences(): void
    {
        $this->addNode('/cmf/example/contents/glossare/ki', 'default', self::PAGE, $this->pageProps(self::PAGE, '/glossare/ki', 'KI'));
        $this->addNode('/cmf/example/contents/glossare/ki', 'default_live', self::PAGE, $this->pageProps(self::PAGE, '/glossare/ki', 'KI'));
        $this->addNode('/cmf/example/routes/de/glossare/ki', 'default_live', self::ROUTE_LIVE, $this->routeProps(self::ROUTE_LIVE, self::PAGE, false));

        $health = $this->service()->getRouteHealth('/cmf/example/contents/glossare/ki');

        $this->assertSame('missing', $health['routeHealth']['draft']);
        $this->assertSame('ok', $health['routeHealth']['live']);
        $this->assertSame('missing', $health['routeHealth']['references']);
        $this->assertFalse($health['routeHealth']['healthy']);
    }

    public function testUnpublishedPageWithoutRoutesIsHealthy(): void
    {
        $this->addNode('/cmf/example/contents/draft', 'default', self::PAGE, $this->pageProps(self::PAGE, '/draft', 'Draft', 1));
        $this->addNode('/cmf/example/contents/draft', 'default_live', self::PAGE, $this->pageProps(self::PAGE, '/draft', 'Draft', 1));

        $health = $this->service()->getRouteHealth('/cmf/example/contents/draft');

        $this->assertFalse($health['published']);
        $this->assertSame('none', $health['routeHealth']['draft']);
        $this->assertSame('none', $health['routeHealth']['live']);
        $this->assertTrue($health['routeHealth']['healthy']);
    }

    public function testLiveUrlMismatchAndDuplicateActiveRoutes(): void
    {
        $pd = $this->addNode('/cmf/example/contents/glossare/krea', 'default', self::PAGE, $this->pageProps(self::PAGE, '/glossare/ki/krea', 'Krea'));
        $pl = $this->addNode('/cmf/example/contents/glossare/krea', 'default_live', self::PAGE, $this->pageProps(self::PAGE, '/glossare/ki/krea', 'Krea'));
        $rd = $this->addNode('/cmf/example/routes/de/glossare/ki/krea', 'default', self::ROUTE_DRAFT, $this->routeProps(self::ROUTE_DRAFT, self::PAGE, false));
        $old = $this->addNode('/cmf/example/routes/de/glossare/krea', 'default_live', self::ROUTE_OLD_LIVE, $this->routeProps(self::ROUTE_OLD_LIVE, self::PAGE, false));
        $new = $this->addNode('/cmf/example/routes/de/glossare/ki/krea', 'default_live', self::ROUTE_LIVE, $this->routeProps(self::ROUTE_LIVE, self::PAGE, false));
        $this->addReference($rd, $pd);
        $this->addReference($old, $pl);
        $this->addReference($new, $pl);

        $health = $this->service()->getRouteHealth('/cmf/example/contents/glossare/krea');

        $this->assertSame('ok', $health['routeHealth']['draft']);
        $this->assertSame('ok', $health['routeHealth']['live']);
        $this->assertSame(2, $health['routeHealth']['activeRoutes']);
        $this->assertFalse($health['routeHealth']['healthy']);

        $check = $this->service()->checkUrl('/de/glossare/krea');
        $this->assertSame('page', $check['type']);
        $this->assertTrue($check['duplicate']);
        $this->assertSame('/de/glossare/ki/krea', $check['canonicalUrl']);
    }

    public function testGetRouteHealthReturnsNullForUnknownPage(): void
    {
        $this->assertNull($this->service()->getRouteHealth('/cmf/example/contents/nope'));
    }

    public function testBatchHealthOmitsUnknownPages(): void
    {
        $this->seedHealthyPage();

        $batch = $this->service()->getRouteHealthBatch(['/cmf/example/contents/ueber-uns/impressum', '/cmf/example/contents/nope']);

        $this->assertSame(['/cmf/example/contents/ueber-uns/impressum'], array_keys($batch));
        $this->assertTrue($batch['/cmf/example/contents/ueber-uns/impressum']['routeHealth']['healthy']);
    }

    public function testListHistoryRoutesIncludesTransitiveHistory(): void
    {
        $this->seedHealthyPage();

        $result = $this->service()->listHistoryRoutes('/cmf/example/contents/ueber-uns/impressum');

        $this->assertTrue($result['success']);
        $urls = array_map(fn (array $r) => $r['workspace'] . ' ' . $r['url'] . ' ' . ($r['history'] ? 'history' : 'active') . ' -> ' . $r['target'], $result['routes']);
        $this->assertSame([
            'default /ueber-uns/impressum active -> /cmf/example/contents/ueber-uns/impressum',
            'default /impressum history -> /ueber-uns/impressum',
            'default_live /ueber-uns/impressum active -> /cmf/example/contents/ueber-uns/impressum',
            'default_live /impressum history -> /ueber-uns/impressum',
        ], $urls);
    }

    public function testCheckUrlResolvesPageHistoryRedirectBundleAndNotFound(): void
    {
        $this->seedHealthyPage();
        $this->redirects[] = ['id' => 'r1', 'source' => '/de/alt', 'sourceHost' => null, 'target' => '/de/neu', 'statusCode' => 301, 'enabled' => 1];
        $this->redirects[] = ['id' => 'r2', 'source' => '/de/weg', 'sourceHost' => null, 'target' => '', 'statusCode' => 410, 'enabled' => 1];
        $svc = $this->service();

        $page = $svc->checkUrl('/de/ueber-uns/impressum/');
        $this->assertSame('page', $page['type']);
        $this->assertSame(self::PAGE, $page['uuid']);
        $this->assertFalse($page['duplicate']);

        $history = $svc->checkUrl('/de/impressum');
        $this->assertSame('history_redirect', $history['type']);
        $this->assertSame(301, $history['statusCode']);
        $this->assertSame('/de/ueber-uns/impressum', $history['target']);

        $redirect = $svc->checkUrl('/de/alt');
        $this->assertSame('redirect_bundle', $redirect['type']);
        $this->assertSame('/de/neu', $redirect['target']);

        $gone = $svc->checkUrl('/DE/weg');
        $this->assertSame('redirect_bundle', $gone['type']);
        $this->assertSame(410, $gone['statusCode']);
        $this->assertNull($gone['target']);

        $this->assertSame('not_found', $svc->checkUrl('/de/nirgends')['type']);
    }

    public function testFindActiveRouteOwner(): void
    {
        $this->seedHealthyPage();
        $svc = $this->service();

        $owner = $svc->findActiveRouteOwner('/ueber-uns/impressum');
        $this->assertSame(self::PAGE, $owner['uuid']);
        $this->assertSame('/cmf/example/contents/ueber-uns/impressum', $owner['path']);

        $this->assertNull($svc->findActiveRouteOwner('/impressum'), 'history routes are not owners');
        $this->assertNull($svc->findActiveRouteOwner('/free'));
        $this->assertTrue($svc->hasActiveRoute('/cmf/example/contents/ueber-uns/impressum'));
    }

    public function testExtractPropertyDecodesEntities(): void
    {
        $props = '<sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0"><sv:value length="3">A &amp; B</sv:value></sv:property>';

        $this->assertSame('A & B', RouteHealthService::extractProperty($props, 'i18n:de-title'));
        $this->assertNull(RouteHealthService::extractProperty($props, 'i18n:de-url'));
    }
}
