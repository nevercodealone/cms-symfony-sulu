<?php

declare(strict_types=1);

namespace App\Command;

use App\Sulu\Service\RouteHealthService;
use Doctrine\DBAL\Connection;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * One-off repair of PHPCR route nodes written by the old MCP code.
 *
 * The old `createRouteForPage()` wrote route nodes into `default_live` only,
 * never into the draft workspace, never into `phpcr_nodes_references`, and
 * never converted a superseded route into a history route. Sulu resolves
 * child URL prefixes from the parent's DRAFT route via the references
 * table, so every page under such a parent got a wrong URL.
 *
 * Three idempotent steps, raw DBAL, one transaction:
 *  1. copy each live active route that has no draft counterpart into `default`
 *  2. add missing `phpcr_nodes_references` rows for every route node
 *  3. turn extra active routes of a page into history routes (sulu:history=1,
 *     sulu:content -> the route matching the page's current URL)
 *
 * After a real run: massive:search:reindex and cache:clear.
 */
#[AsCommand(
    name: 'nca:routes:repair',
    description: 'Create missing draft routes, reference rows and history routes for MCP-created pages'
)]
class RoutesRepairCommand extends Command
{
    private const WS_DEFAULT = RouteHealthService::WORKSPACE_DEFAULT;
    private const WS_LIVE = RouteHealthService::WORKSPACE_LIVE;

    /** @var list<array{page: string, draftUrl: string, liveUrl: string, action: string}> */
    private array $report = [];

    /** @var array<string, int> */
    private array $counters = ['draft_routes_created' => 0, 'container_nodes_created' => 0, 'references_added' => 0, 'history_converted' => 0];

    public function __construct(
        private readonly Connection $connection,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'Only report what would change')
            ->addOption('path-prefix', null, InputOption::VALUE_REQUIRED, 'Only pages whose URL starts with this prefix, e.g. /glossare', '')
            ->addOption('locale', 'l', InputOption::VALUE_REQUIRED, 'Locale of the routes', 'de')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $dryRun = (bool) $input->getOption('dry-run');
        $prefix = (string) $input->getOption('path-prefix');
        $locale = (string) $input->getOption('locale');
        $root = '/cmf/' . RouteHealthService::WEBSPACE . '/routes/' . $locale;

        $io->title(($dryRun ? '[DRY RUN] ' : '') . 'Route repair for locale ' . $locale . ($prefix !== '' ? ', URL prefix ' . $prefix : ''));

        $this->connection->beginTransaction();
        try {
            $pages = $this->loadPages($locale, $prefix);
            $io->text(count($pages) . ' pages in scope');

            $this->createMissingDraftRoutes($pages, $root, $dryRun);
            $this->addMissingReferences($root, $prefix, $dryRun);
            $this->convertExtraActiveRoutes($pages, $root, $dryRun);

            if ($dryRun) {
                $this->connection->rollBack();
            } else {
                $this->connection->commit();
            }
        } catch (\Throwable $e) {
            $this->connection->rollBack();
            $io->error($e->getMessage());

            return Command::FAILURE;
        }

        if ($this->report !== []) {
            $io->table(['Page', 'Draft URL', 'Live URL', 'Action'], array_map(fn (array $r) => array_values($r), $this->report));
        }

        $io->definitionList(...array_map(fn (string $k, int $v) => [$k => $v], array_keys($this->counters), $this->counters));

        if ($dryRun) {
            $io->note('Dry run - nothing was changed. Re-run without --dry-run to apply.');
        } elseif (array_sum($this->counters) > 0) {
            $io->success('Routes repaired. Now run: bin/console massive:search:reindex && bin/console cache:clear && bin/websiteconsole cache:clear');
        } else {
            $io->success('Nothing to repair.');
        }

        return Command::SUCCESS;
    }

    // -------------------------------------------------------------------------

    /**
     * Content nodes with their draft / live rows and URLs.
     *
     * @return list<array{path: string, uuid: string, draft: array{id: int, url: string|null}, live: array{id: int, url: string|null}|null}>
     */
    private function loadPages(string $locale, string $prefix): array
    {
        $rows = $this->connection->fetchAllAssociative(
            'SELECT id, path, workspace_name, identifier, props FROM phpcr_nodes WHERE path LIKE ? AND workspace_name IN (?, ?) ORDER BY path',
            ['/cmf/' . RouteHealthService::WEBSPACE . '/contents%', self::WS_DEFAULT, self::WS_LIVE]
        );

        $pages = [];
        foreach ($rows as $row) {
            $url = RouteHealthService::extractProperty((string) $row['props'], "i18n:{$locale}-url");
            $path = (string) $row['path'];
            $pages[$path] ??= ['path' => $path, 'uuid' => (string) $row['identifier'], 'draft' => null, 'live' => null];
            $pages[$path][$row['workspace_name'] === self::WS_DEFAULT ? 'draft' : 'live'] = ['id' => (int) $row['id'], 'url' => $url];
        }

        $result = [];
        foreach ($pages as $page) {
            if ($page['draft'] === null) {
                continue;
            }
            $url = $page['draft']['url'] ?? $page['live']['url'] ?? null;
            if ($prefix !== '' && ($url === null || !str_starts_with($url, $prefix))) {
                continue;
            }
            $result[] = $page;
        }

        return $result;
    }

    /**
     * Step 1: a published page whose active live route has no node at the
     * same path in the draft workspace gets that node copied over (same
     * identifier and props, like Sulu's own publish does), including any
     * missing container nodes above it.
     *
     * @param list<array{path: string, uuid: string, draft: array{id: int, url: string|null}, live: array{id: int, url: string|null}|null}> $pages
     */
    private function createMissingDraftRoutes(array $pages, string $root, bool $dryRun): void
    {
        foreach ($pages as $page) {
            if ($page['live'] === null || $page['live']['url'] === null || $page['live']['url'] === '/') {
                continue;
            }

            $routePath = $root . $page['live']['url'];
            $liveRoute = $this->loadNode($routePath, self::WS_LIVE);
            if ($liveRoute === null || !$this->isActiveRouteOf($liveRoute['props'], $page['uuid'])) {
                continue;
            }
            if ($this->loadNode($routePath, self::WS_DEFAULT) !== null) {
                continue;
            }

            $this->report[] = [
                'page' => $page['path'],
                'draftUrl' => (string) $page['draft']['url'],
                'liveUrl' => (string) $page['live']['url'],
                'action' => 'create draft route ' . $page['live']['url'],
            ];
            $this->counters['draft_routes_created']++;

            if (!$dryRun) {
                $this->copyLiveNodeToDraft($liveRoute, $root);
            }
        }
    }

    /**
     * Copy a live route node (and missing ancestors below the locale root) into the draft workspace.
     *
     * @param array{id: int, path: string, parent: string, local_name: string, identifier: string, type: string, props: string, depth: int, sort_order: int|null} $liveNode
     */
    private function copyLiveNodeToDraft(array $liveNode, string $root): void
    {
        $parentPath = $liveNode['parent'];
        if ($this->loadNode($parentPath, self::WS_DEFAULT) === null) {
            if ($parentPath === $root || !str_starts_with($parentPath, $root . '/')) {
                throw new \RuntimeException('Route root missing in draft workspace: ' . $parentPath);
            }
            $liveParent = $this->loadNode($parentPath, self::WS_LIVE);
            if ($liveParent === null) {
                throw new \RuntimeException('Live parent route node missing: ' . $parentPath);
            }
            $this->counters['container_nodes_created']++;
            $this->copyLiveNodeToDraft($liveParent, $root);
        }

        $this->connection->executeStatement(
            'INSERT INTO phpcr_nodes (path, parent, local_name, namespace, workspace_name, identifier, type, props, depth, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
                $liveNode['path'],
                $liveNode['parent'],
                $liveNode['local_name'],
                '',
                self::WS_DEFAULT,
                $liveNode['identifier'],
                $liveNode['type'],
                $liveNode['props'],
                $liveNode['depth'],
                $liveNode['sort_order'],
            ]
        );
    }

    /**
     * Step 2: every route node with a sulu:content reference needs a row in
     * phpcr_nodes_references pointing at the referenced node of the same
     * workspace - otherwise Sulu cannot find the route from the page.
     */
    private function addMissingReferences(string $root, string $prefix, bool $dryRun): void
    {
        $rows = $this->connection->fetchAllAssociative(
            "SELECT n.id, n.path, n.workspace_name, n.props FROM phpcr_nodes n
             LEFT JOIN phpcr_nodes_references r ON r.source_id = n.id AND r.source_property_name = 'sulu:content'
             WHERE n.path LIKE ? AND n.workspace_name IN (?, ?) AND n.props LIKE '%sulu:content%' AND r.source_id IS NULL
             ORDER BY n.workspace_name, n.path",
            [$root . ($prefix !== '' ? $prefix : '') . '%', self::WS_DEFAULT, self::WS_LIVE]
        );

        foreach ($rows as $row) {
            $target = RouteHealthService::extractProperty((string) $row['props'], 'sulu:content');
            if ($target === null) {
                continue;
            }
            $targetId = $this->connection->fetchOne(
                'SELECT id FROM phpcr_nodes WHERE identifier = ? AND workspace_name = ?',
                [$target, $row['workspace_name']]
            );
            $url = substr((string) $row['path'], strlen($root));
            if ($targetId === false || $targetId === null) {
                $this->report[] = ['page' => '(route) ' . $url, 'draftUrl' => '', 'liveUrl' => '', 'action' => 'SKIP: reference target ' . $target . ' missing in ' . $row['workspace_name']];
                continue;
            }

            $this->report[] = ['page' => '(route) ' . $url, 'draftUrl' => '', 'liveUrl' => '', 'action' => 'add reference row (' . $row['workspace_name'] . ')'];
            $this->counters['references_added']++;

            if (!$dryRun) {
                $this->connection->executeStatement(
                    "INSERT INTO phpcr_nodes_references (source_id, source_property_name, target_id) VALUES (?, 'sulu:content', ?)",
                    [(int) $row['id'], (int) $targetId]
                );
            }
        }
    }

    /**
     * Step 3: a page may own at most one active route per workspace. The one
     * matching the page's URL property stays; the others become history
     * routes redirecting to it.
     *
     * @param list<array{path: string, uuid: string, draft: array{id: int, url: string|null}, live: array{id: int, url: string|null}|null}> $pages
     */
    private function convertExtraActiveRoutes(array $pages, string $root, bool $dryRun): void
    {
        foreach ($pages as $page) {
            foreach ([self::WS_DEFAULT => $page['draft'], self::WS_LIVE => $page['live']] as $workspace => $node) {
                if ($node === null || $node['url'] === null) {
                    continue;
                }

                $routes = $this->loadActiveRoutesOf($page['uuid'], $workspace, $root);
                if (count($routes) < 2) {
                    continue;
                }

                $expectedPath = $root . ($node['url'] === '/' ? '' : $node['url']);
                $keep = null;
                foreach ($routes as $route) {
                    if ($route['path'] === $expectedPath) {
                        $keep = $route;
                        break;
                    }
                }
                if ($keep === null) {
                    $this->report[] = ['page' => $page['path'], 'draftUrl' => (string) $page['draft']['url'], 'liveUrl' => (string) ($page['live']['url'] ?? ''), 'action' => 'SKIP: ' . count($routes) . ' active routes in ' . $workspace . ' but none matches the URL property'];
                    continue;
                }

                foreach ($routes as $route) {
                    if ($route['id'] === $keep['id']) {
                        continue;
                    }
                    $this->report[] = [
                        'page' => $page['path'],
                        'draftUrl' => (string) $page['draft']['url'],
                        'liveUrl' => (string) ($page['live']['url'] ?? ''),
                        'action' => 'history route ' . substr($route['path'], strlen($root)) . ' -> ' . $node['url'] . ' (' . $workspace . ')',
                    ];
                    $this->counters['history_converted']++;

                    if (!$dryRun) {
                        $this->convertToHistory($route, $keep);
                    }
                }
            }
        }
    }

    /**
     * @param array{id: int, path: string, props: string} $route
     * @param array{id: int, identifier: string} $target
     */
    private function convertToHistory(array $route, array $target): void
    {
        $props = $route['props'];
        $props = preg_replace(
            '#(<sv:property sv:name="sulu:history"[^>]*>\s*<sv:value[^>]*>)[^<]*(</sv:value>)#',
            '${1}1${2}',
            $props
        ) ?? $props;
        $props = preg_replace(
            '#(<sv:property sv:name="sulu:content"[^>]*>\s*<sv:value[^>]*>)[^<]*(</sv:value>)#',
            '${1}' . $target['identifier'] . '${2}',
            $props
        ) ?? $props;

        $this->connection->executeStatement('UPDATE phpcr_nodes SET props = ? WHERE id = ?', [$props, $route['id']]);
        $this->connection->executeStatement("DELETE FROM phpcr_nodes_references WHERE source_id = ? AND source_property_name = 'sulu:content'", [$route['id']]);
        $this->connection->executeStatement(
            "INSERT INTO phpcr_nodes_references (source_id, source_property_name, target_id) VALUES (?, 'sulu:content', ?)",
            [$route['id'], $target['id']]
        );
    }

    // -------------------------------------------------------------------------

    /**
     * @return array{id: int, path: string, parent: string, local_name: string, identifier: string, type: string, props: string, depth: int, sort_order: int|null}|null
     */
    private function loadNode(string $path, string $workspace): ?array
    {
        $row = $this->connection->fetchAssociative(
            'SELECT id, path, parent, local_name, identifier, type, props, depth, sort_order FROM phpcr_nodes WHERE path = ? AND workspace_name = ?',
            [$path, $workspace]
        );
        if (!is_array($row) || $row === []) {
            return null;
        }

        return [
            'id' => (int) $row['id'],
            'path' => (string) $row['path'],
            'parent' => (string) $row['parent'],
            'local_name' => (string) $row['local_name'],
            'identifier' => (string) $row['identifier'],
            'type' => (string) $row['type'],
            'props' => (string) $row['props'],
            'depth' => (int) $row['depth'],
            'sort_order' => $row['sort_order'] === null ? null : (int) $row['sort_order'],
        ];
    }

    /**
     * @return list<array{id: int, path: string, identifier: string, props: string}>
     */
    private function loadActiveRoutesOf(string $pageUuid, string $workspace, string $root): array
    {
        $rows = $this->connection->fetchAllAssociative(
            'SELECT id, path, identifier, props FROM phpcr_nodes WHERE path LIKE ? AND workspace_name = ? AND props LIKE ? ORDER BY path',
            [$root . '/%', $workspace, '%' . $pageUuid . '%']
        );

        $routes = [];
        foreach ($rows as $row) {
            if ($this->isActiveRouteOf((string) $row['props'], $pageUuid)) {
                $routes[] = ['id' => (int) $row['id'], 'path' => (string) $row['path'], 'identifier' => (string) $row['identifier'], 'props' => (string) $row['props']];
            }
        }

        return $routes;
    }

    private function isActiveRouteOf(string $props, string $pageUuid): bool
    {
        $history = RouteHealthService::extractProperty($props, 'sulu:history');

        return RouteHealthService::extractProperty($props, 'sulu:content') === $pageUuid
            && ($history === '0' || $history === 'false');
    }
}
