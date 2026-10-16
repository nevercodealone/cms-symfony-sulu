<?php

declare(strict_types=1);

namespace App\Tests\Functional;

use App\MCP\Tools\SuluPagesTool;
use Doctrine\DBAL\Connection;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * Route lifecycle through the real sulu_pages tool against the DDEV database:
 * create + publish, slug change, move, copy, check_url and redirect CRUD.
 * Every step spawns the real DocumentManager console commands.
 *
 * Needs two published glossary parents with healthy draft routes
 * (run nca:routes:repair first). NOT in CI - run manually:
 *   ddev exec vendor/bin/phpunit tests/Functional/RouteLifecycleFunctionalTest.php --group functional-manual
 *
 * @group functional-manual
 */
class RouteLifecycleFunctionalTest extends KernelTestCase
{
    private const PARENT_A = '/cmf/example/contents/glossare/nca-glossar-ki-modelle';
    private const PARENT_B = '/cmf/example/contents/glossare/nca-typescript-glossar';
    private const SLUG = '/zz-route-lifecycle';

    private SuluPagesTool $tool;
    private Connection $connection;

    /** @var list<string> */
    private array $createdPages = [];

    /** @var list<string> */
    private array $redirectSourcePrefixes = ['/de/zz-route-lifecycle', '/de/glossare/nca-glossar-ki-modelle/zz-route-lifecycle', '/de/glossare/nca-typescript-glossar/zz-route-lifecycle'];

    protected function setUp(): void
    {
        self::bootKernel();
        $this->tool = static::getContainer()->get(SuluPagesTool::class);
        $this->connection = static::getContainer()->get(Connection::class);
    }

    protected function tearDown(): void
    {
        foreach (array_reverse($this->createdPages) as $path) {
            $exists = $this->connection->fetchOne("SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'", [$path]);
            if ($exists !== false) {
                $this->call(['action' => 'unpublish', 'path' => $path]);
                $this->call(['action' => 'delete_page', 'path' => $path, 'confirm' => $path, 'dryRun' => 'false']);
            }
        }
        // Test redirects and the 410 entries Sulu adds when the test pages are deleted.
        foreach ($this->redirectSourcePrefixes as $prefix) {
            foreach ($this->call(['action' => 'list_redirects', 'sourcePrefix' => $prefix])['redirects'] ?? [] as $redirect) {
                $this->call(['action' => 'delete_redirect', 'id' => $redirect['id'], 'confirm' => $redirect['id']]);
            }
        }
        parent::tearDown();
    }

    /**
     * @param array<string, mixed> $args
     *
     * @return array<string, mixed>
     */
    private function call(array $args): array
    {
        $text = $this->tool->execute($args)->getSanitizedResult()['text'];
        $data = json_decode($text, true);

        return is_array($data) ? $data : ['raw' => $text];
    }

    /**
     * @param array<string, mixed> $response
     */
    private function assertHealthy(array $response): void
    {
        $this->assertTrue($response['success'] ?? false, json_encode($response, JSON_UNESCAPED_SLASHES) ?: '');
        $this->assertSame(
            ['draft' => 'ok', 'live' => 'ok', 'references' => 'ok', 'activeRoutes' => 1, 'healthy' => true],
            $response['routeHealth']
        );
    }

    public function testCreatePublishRenameMoveAndRedirect(): void
    {
        foreach ([self::PARENT_A, self::PARENT_B] as $parent) {
            $health = $this->call(['action' => 'route_health', 'path' => $parent]);
            if (($health['routeHealth']['draft'] ?? null) !== 'ok') {
                $this->markTestSkipped($parent . ' has no healthy draft route - run nca:routes:repair first');
            }
        }

        $path = self::PARENT_A . self::SLUG;
        $this->createdPages[] = $path;

        // create + publish: routes in both workspaces under the parent
        $created = $this->call(['action' => 'create_page', 'parentPath' => self::PARENT_A, 'title' => 'Route Lifecycle', 'resourceSegment' => self::SLUG, 'publish' => 'true']);
        $this->assertHealthy($created);
        $this->assertSame('/glossare/nca-glossar-ki-modelle/zz-route-lifecycle', $created['liveUrl']);

        // slug change: old URL becomes a history route in both workspaces
        $renamed = $this->call(['action' => 'update_resource_locator', 'path' => $path, 'resourceSegment' => self::SLUG . '-2', 'publish' => 'true']);
        $this->assertHealthy($renamed);
        $this->assertSame($path, $renamed['path'], 'node path must stay stable');
        $this->assertCount(2, $renamed['historyRoutes']);
        $old = $this->call(['action' => 'check_url', 'url' => '/de/glossare/nca-glossar-ki-modelle/zz-route-lifecycle']);
        $this->assertSame('history_redirect', $old['type']);
        $this->assertSame('/de/glossare/nca-glossar-ki-modelle/zz-route-lifecycle-2', $old['target']);

        // copy keeps its own route; taken slug is refused
        $copyPath = self::PARENT_A . self::SLUG . '-copy';
        $this->createdPages[] = $copyPath;
        $copy = $this->call(['action' => 'copy_page', 'sourcePath' => $path, 'title' => 'Route Lifecycle Copy', 'resourceSegment' => self::SLUG . '-copy', 'publish' => 'true']);
        $this->assertHealthy($copy);
        $taken = $this->call(['action' => 'update_resource_locator', 'path' => $copyPath, 'resourceSegment' => self::SLUG . '-2']);
        $this->assertSame('resource_locator_taken', $taken['errorCode']);

        // move: URL under the new parent, never one level too high
        $moved = $this->call(['action' => 'move_page', 'path' => $path, 'targetParentPath' => self::PARENT_B, 'publish' => 'true']);
        $this->assertHealthy($moved);
        $movedPath = self::PARENT_B . self::SLUG;
        $this->createdPages[] = $movedPath;
        $this->assertSame($movedPath, $moved['path']);
        $this->assertSame('/glossare/nca-typescript-glossar/zz-route-lifecycle-2', $moved['newUrl']);
        $history = $this->call(['action' => 'list_history_routes', 'path' => $movedPath]);
        $historyUrls = array_unique(array_column(array_filter($history['routes'], fn ($r) => $r['history']), 'url'));
        sort($historyUrls);
        $this->assertSame([
            '/glossare/nca-glossar-ki-modelle/zz-route-lifecycle',
            '/glossare/nca-glossar-ki-modelle/zz-route-lifecycle-2',
        ], array_values($historyUrls));

        // redirects: refusal on an active route, 301, 410
        $refused = $this->call(['action' => 'create_redirect', 'source' => '/de/glossare/nca-typescript-glossar/zz-route-lifecycle-2', 'target' => '/de/']);
        $this->assertSame('source_is_active_route', $refused['failed'][0]['errorCode']);

        $bulk = $this->call(['action' => 'create_redirect', 'redirects' => json_encode([
            ['source' => '/de/zz-route-lifecycle-old', 'target' => '/de/glossare/nca-typescript-glossar/zz-route-lifecycle-2'],
            ['source' => '/de/zz-route-lifecycle-gone', 'statusCode' => 410],
        ])]);
        $this->assertTrue($bulk['success'], json_encode($bulk) ?: '');
        $this->assertSame('redirect_bundle', $this->call(['action' => 'check_url', 'url' => '/de/zz-route-lifecycle-old'])['type']);
        $gone = $this->call(['action' => 'check_url', 'url' => '/de/zz-route-lifecycle-gone']);
        $this->assertSame(410, $gone['statusCode']);

        $id = $bulk['created'][0]['id'];
        $updated = $this->call(['action' => 'update_redirect', 'id' => $id, 'statusCode' => 302]);
        $this->assertSame(302, $updated['redirect']['statusCode']);
        $this->assertSame('confirmation_mismatch', $this->call(['action' => 'delete_redirect', 'id' => $id, 'confirm' => 'x'])['errorCode']);
        $this->assertTrue($this->call(['action' => 'delete_redirect', 'id' => $id, 'confirm' => $id])['success']);
    }
}
