<?php

declare(strict_types=1);

namespace App\Tests\Unit\Command;

use App\Command\RoutesRepairCommand;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\DriverManager;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Console\Tester\CommandTester;

/**
 * Runs the repair against an in-memory SQLite copy of phpcr_nodes and
 * phpcr_nodes_references seeded with the broken state the old MCP produced.
 */
class RoutesRepairCommandTest extends TestCase
{
    private const PAGE = 'aaaaaaaa-0000-0000-0000-000000000001';
    private const PARENT = 'aaaaaaaa-0000-0000-0000-000000000002';
    private const PARENT_ROUTE_LIVE = 'bbbbbbbb-0000-0000-0000-000000000001';
    private const PAGE_ROUTE_LIVE = 'bbbbbbbb-0000-0000-0000-000000000002';
    private const PAGE_ROUTE_OLD = 'bbbbbbbb-0000-0000-0000-000000000003';
    private const ROUTES_ROOT = 'cccccccc-0000-0000-0000-000000000001';

    private Connection $connection;

    protected function setUp(): void
    {
        if (!extension_loaded('pdo_sqlite')) {
            $this->markTestSkipped('pdo_sqlite not available');
        }

        $this->connection = DriverManager::getConnection(['driver' => 'pdo_sqlite', 'memory' => true]);
        $this->connection->executeStatement('CREATE TABLE phpcr_nodes (id INTEGER PRIMARY KEY AUTOINCREMENT, path TEXT, parent TEXT, local_name TEXT, namespace TEXT, workspace_name TEXT, identifier TEXT, type TEXT, props TEXT, depth INTEGER, sort_order INTEGER)');
        $this->connection->executeStatement('CREATE TABLE phpcr_nodes_references (source_id INTEGER, source_property_name TEXT, target_id INTEGER)');

        foreach (['default', 'default_live'] as $ws) {
            $this->insertNode('/cmf/example/routes', $ws, $ws . '-routes', '<sv:node/>');
            $this->insertNode('/cmf/example/routes/de', $ws, self::ROUTES_ROOT, '<sv:node/>');
            $this->insertNode('/cmf/example/contents/glossare', $ws, self::PARENT, $this->pageProps('/glossare', 'Glossare'));
            $this->insertNode('/cmf/example/contents/glossare/ki', $ws, self::PAGE, $this->pageProps('/glossare/ki', 'KI'));
        }
    }

    private function pageProps(string $url, string $title): string
    {
        return '<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">'
            . '<sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0"><sv:value length="1">' . $title . '</sv:value></sv:property>'
            . '<sv:property sv:name="i18n:de-url" sv:type="String" sv:multi-valued="0"><sv:value length="1">' . $url . '</sv:value></sv:property>'
            . '<sv:property sv:name="i18n:de-state" sv:type="Long" sv:multi-valued="0"><sv:value length="1">2</sv:value></sv:property>'
            . '</sv:node>';
    }

    private function routeProps(string $target, bool $history): string
    {
        return '<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">'
            . '<sv:property sv:name="sulu:history" sv:type="Boolean" sv:multi-valued="0"><sv:value length="1">' . ($history ? '1' : '0') . '</sv:value></sv:property>'
            . '<sv:property sv:name="sulu:content" sv:type="Reference" sv:multi-valued="0"><sv:value length="36">' . $target . '</sv:value></sv:property>'
            . '</sv:node>';
    }

    private function insertNode(string $path, string $workspace, string $identifier, string $props): int
    {
        $this->connection->executeStatement(
            "INSERT INTO phpcr_nodes (path, parent, local_name, namespace, workspace_name, identifier, type, props, depth, sort_order) VALUES (?, ?, ?, '', ?, ?, 'nt:unstructured', ?, ?, 0)",
            [$path, dirname($path), basename($path), $workspace, $identifier, $props, substr_count($path, '/')]
        );

        return (int) $this->connection->lastInsertId();
    }

    private function nodeId(string $path, string $workspace): ?int
    {
        $id = $this->connection->fetchOne('SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = ?', [$path, $workspace]);

        return $id === false ? null : (int) $id;
    }

    private function referenceTarget(int $sourceId): ?int
    {
        $t = $this->connection->fetchOne("SELECT target_id FROM phpcr_nodes_references WHERE source_id = ? AND source_property_name = 'sulu:content'", [$sourceId]);

        return $t === false ? null : (int) $t;
    }

    private function runRepair(bool $dryRun, string $prefix = ''): CommandTester
    {
        $tester = new CommandTester(new RoutesRepairCommand($this->connection));
        $options = ['--locale' => 'de'];
        if ($dryRun) {
            $options['--dry-run'] = true;
        }
        if ($prefix !== '') {
            $options['--path-prefix'] = $prefix;
        }
        $this->assertSame(0, $tester->execute($options), $tester->getDisplay());

        return $tester;
    }

    /**
     * The old MCP state: live routes only (parent + page), no reference rows,
     * plus an old live route still active after a move.
     */
    private function seedBrokenState(): void
    {
        $this->insertNode('/cmf/example/routes/de/glossare', 'default_live', self::PARENT_ROUTE_LIVE, $this->routeProps(self::PARENT, false));
        $this->insertNode('/cmf/example/routes/de/glossare/ki', 'default_live', self::PAGE_ROUTE_LIVE, $this->routeProps(self::PAGE, false));
        $this->insertNode('/cmf/example/routes/de/ki-alt', 'default_live', self::PAGE_ROUTE_OLD, $this->routeProps(self::PAGE, false));
    }

    public function testDryRunReportsButChangesNothing(): void
    {
        $this->seedBrokenState();

        $tester = $this->runRepair(true);
        $display = $tester->getDisplay();

        $this->assertStringContainsString('DRY RUN', $display);
        $this->assertStringContainsString('create draft route /glossare/ki', $display);
        $this->assertStringContainsString('history route /ki-alt -> /glossare/ki (default_live)', $display);
        $this->assertNull($this->nodeId('/cmf/example/routes/de/glossare/ki', 'default'));
        $this->assertSame(0, (int) $this->connection->fetchOne('SELECT COUNT(*) FROM phpcr_nodes_references'));
    }

    public function testRepairCreatesDraftRoutesReferencesAndHistoryRoutesIdempotently(): void
    {
        $this->seedBrokenState();

        $this->runRepair(false);

        // 1. draft routes copied from live with the same identifier, parent container included
        $draftParent = $this->nodeId('/cmf/example/routes/de/glossare', 'default');
        $draftPage = $this->nodeId('/cmf/example/routes/de/glossare/ki', 'default');
        $this->assertNotNull($draftParent);
        $this->assertNotNull($draftPage);
        $this->assertSame(self::PAGE_ROUTE_LIVE, $this->connection->fetchOne('SELECT identifier FROM phpcr_nodes WHERE id = ?', [$draftPage]));

        // 2. reference rows point at the page node of the same workspace
        $this->assertSame($this->nodeId('/cmf/example/contents/glossare/ki', 'default'), $this->referenceTarget($draftPage));
        $livePage = $this->nodeId('/cmf/example/routes/de/glossare/ki', 'default_live');
        $this->assertSame($this->nodeId('/cmf/example/contents/glossare/ki', 'default_live'), $this->referenceTarget($livePage));

        // 3. old live route is now a history route pointing at the kept route node
        $old = $this->nodeId('/cmf/example/routes/de/ki-alt', 'default_live');
        $props = (string) $this->connection->fetchOne('SELECT props FROM phpcr_nodes WHERE id = ?', [$old]);
        $this->assertStringContainsString('sv:name="sulu:history" sv:type="Boolean" sv:multi-valued="0"><sv:value length="1">1<', $props);
        $this->assertStringContainsString('>' . self::PAGE_ROUTE_LIVE . '<', $props);
        $this->assertSame($livePage, $this->referenceTarget($old));

        // the old route was never copied into the draft workspace (it is not the page's URL)
        $this->assertNull($this->nodeId('/cmf/example/routes/de/ki-alt', 'default'));

        // idempotent: second dry run finds nothing
        $display = $this->runRepair(true)->getDisplay();
        $this->assertStringContainsString('draft_routes_created', $display);
        $this->assertStringNotContainsString('create draft route', $display);
        $this->assertStringNotContainsString('add reference row', $display);
        $this->assertStringNotContainsString('history route', $display);
    }

    public function testPathPrefixLimitsTheScope(): void
    {
        $this->seedBrokenState();

        $this->runRepair(false, '/vibe-coding');

        $this->assertNull($this->nodeId('/cmf/example/routes/de/glossare/ki', 'default'));
    }
}
