<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use Doctrine\DBAL\Connection;

/**
 * Read-only inspection of Sulu's PHPCR route nodes via direct DBAL queries.
 *
 * How Sulu stores URLs: every page content node exists in the workspaces
 * `default` (draft, admin) and `default_live` (website) with the same
 * identifier. Its URL lives in `i18n:{locale}-url` and, separately, as a
 * route node `/cmf/{webspace}/routes/{locale}{url}` per workspace:
 *
 *   active route : sulu:history = 0, sulu:content -> page uuid
 *   history route: sulu:history = 1, sulu:content -> uuid of the active route it redirects to
 *
 * `phpcr_nodes_references` mirrors every sulu:content reference. Sulu finds a
 * page's routes through that table, so a route without a reference row is
 * invisible to the DocumentManager (child URL prefix, history conversion).
 *
 * Used for route health in read actions and for post-write verification of
 * the DocumentManager-backed mutations. Never writes.
 */
class RouteHealthService
{
    public const WORKSPACE_DEFAULT = 'default';
    public const WORKSPACE_LIVE = 'default_live';
    public const WEBSPACE = 'example';
    public const LOCALES = ['de', 'en'];

    public const STATUS_OK = 'ok';
    public const STATUS_MISSING = 'missing';
    public const STATUS_MISMATCH = 'mismatch';
    public const STATUS_NONE = 'none';

    public function __construct(
        private readonly Connection $connection,
    ) {
    }

    public function routesRoot(string $locale): string
    {
        return '/cmf/' . self::WEBSPACE . '/routes/' . $locale;
    }

    /**
     * Route health of one page, with the full route list.
     *
     * @return array<string, mixed>|null null when the page does not exist in the draft workspace
     */
    public function getRouteHealth(string $pagePath, string $locale = 'de'): ?array
    {
        $pages = $this->loadPages([$pagePath], $locale);
        if (!isset($pages[$pagePath])) {
            return null;
        }

        $page = $pages[$pagePath];
        $routes = $this->loadRoutesReferencing([$page['uuid']], $locale);

        $health = $this->buildHealth($page, $routes, $locale);
        $health['routes'] = array_map(fn (array $r) => $this->formatRoute($r, $locale), $routes);

        return $health;
    }

    /**
     * Route health for many pages with one route query (used by list).
     *
     * @param list<string> $pagePaths
     *
     * @return array<string, array<string, mixed>> keyed by page path; pages that do not exist are omitted
     */
    public function getRouteHealthBatch(array $pagePaths, string $locale = 'de'): array
    {
        if ($pagePaths === []) {
            return [];
        }

        $pages = $this->loadPages($pagePaths, $locale);
        if ($pages === []) {
            return [];
        }

        $index = $this->loadRouteIndex($locale);
        $byTarget = [];
        foreach ($index as $route) {
            if ($route['target'] !== null) {
                $byTarget[$route['target']][] = $route;
            }
        }

        $result = [];
        foreach ($pages as $path => $page) {
            $result[$path] = $this->buildHealth($page, $byTarget[$page['uuid']] ?? [], $locale);
        }

        return $result;
    }

    /**
     * Every route of a page in both workspaces: the active ones and, transitively,
     * all history routes that end up pointing to them.
     *
     * @return array<string, mixed>|null
     */
    public function listHistoryRoutes(string $pagePath, string $locale = 'de'): ?array
    {
        $pages = $this->loadPages([$pagePath], $locale);
        if (!isset($pages[$pagePath])) {
            return null;
        }
        $page = $pages[$pagePath];

        $index = $this->loadRouteIndex($locale);
        $byTarget = [];
        foreach ($index as $route) {
            if ($route['target'] !== null) {
                $byTarget[$route['target']][] = $route;
            }
        }

        $collected = [];
        $queue = [$page['uuid']];
        $seen = [$page['uuid'] => true];
        while ($queue !== []) {
            $target = array_shift($queue);
            foreach ($byTarget[$target] ?? [] as $route) {
                $key = $route['workspace'] . ':' . $route['path'];
                if (isset($collected[$key])) {
                    continue;
                }
                $collected[$key] = $route;
                if (!isset($seen[$route['identifier']])) {
                    $seen[$route['identifier']] = true;
                    $queue[] = $route['identifier'];
                }
            }
        }

        $routes = array_values($collected);
        usort($routes, fn (array $a, array $b) => [$a['workspace'], (int) $a['history'], $a['path']] <=> [$b['workspace'], (int) $b['history'], $b['path']]);

        $byUuid = [];
        foreach ($index as $route) {
            $byUuid[$route['workspace'] . ':' . $route['identifier']] = $route;
        }

        $formatted = [];
        foreach ($routes as $route) {
            $entry = $this->formatRoute($route, $locale);
            if ($route['history'] && $route['target'] !== null) {
                $targetRoute = $byUuid[$route['workspace'] . ':' . $route['target']] ?? null;
                $entry['target'] = $targetRoute !== null ? $this->routeUrl($targetRoute['path'], $locale) : $route['target'];
            } else {
                $entry['target'] = $page['path'];
            }
            $formatted[] = $entry;
        }

        return [
            'success' => true,
            'path' => $page['path'],
            'uuid' => $page['uuid'],
            'draftUrl' => $page['default']['url'] ?? null,
            'liveUrl' => $page['live']['url'] ?? null,
            'routes' => $formatted,
        ];
    }

    /**
     * How the website will answer a public path, in router order:
     * live route node (page / history redirect) -> SuluRedirectBundle -> 404.
     *
     * @return array<string, mixed>
     */
    public function checkUrl(string $publicPath): array
    {
        [$locale, $url] = $this->splitPublicPath($publicPath);
        $root = $this->routesRoot($locale);
        $response = [
            'success' => true,
            'input' => $publicPath,
            'locale' => $locale,
            'url' => $url,
        ];

        $route = $this->loadRouteAt($root . ($url === '/' ? '' : $url), self::WORKSPACE_LIVE);
        if ($route !== null && $route['target'] !== null) {
            if (!$route['history']) {
                $content = $this->loadNodeByIdentifier($route['target'], self::WORKSPACE_LIVE, $locale);
                if ($content !== null) {
                    $canonical = $content['url'];
                    $duplicate = $canonical !== null && $canonical !== $url;

                    return $response + [
                        'type' => 'page',
                        'uuid' => $content['uuid'],
                        'path' => $content['path'],
                        'title' => $content['title'],
                        'published' => $content['state'] === '2',
                        'duplicate' => $duplicate,
                        'canonicalUrl' => $canonical !== null ? '/' . $locale . $canonical : null,
                        'warning' => $duplicate
                            ? 'This URL serves the page although the page\'s current URL is ' . '/' . $locale . $canonical . ' (duplicate content). Convert it to a history route with nca:routes:repair.'
                            : null,
                    ];
                }
            } else {
                $target = $this->resolveHistoryTarget($route, $locale);

                return $response + [
                    'type' => 'history_redirect',
                    'statusCode' => 301,
                    'target' => $target !== null ? '/' . $locale . $target : null,
                ];
            }
        }

        $redirect = $this->findEnabledRedirect($publicPath);
        if ($redirect !== null) {
            return $response + [
                'type' => 'redirect_bundle',
                'id' => $redirect['id'],
                'statusCode' => (int) $redirect['statusCode'],
                'target' => $redirect['target'] !== '' ? $redirect['target'] : null,
            ];
        }

        return $response + ['type' => 'not_found'];
    }

    /**
     * Owner of the active route at $url in the given workspace, if any.
     *
     * @return array{uuid: string, path: string|null}|null
     */
    public function findActiveRouteOwner(string $url, string $locale = 'de', string $workspace = self::WORKSPACE_DEFAULT): ?array
    {
        $route = $this->loadRouteAt($this->routesRoot($locale) . $url, $workspace);
        if ($route === null || $route['history'] || $route['target'] === null) {
            return null;
        }

        $content = $this->loadNodeByIdentifier($route['target'], $workspace, $locale);

        return ['uuid' => $route['target'], 'path' => $content['path'] ?? null];
    }

    /**
     * Whether an active route of this page exists in a workspace - the
     * precondition Sulu needs to resolve child URLs under it.
     */
    public function hasActiveRoute(string $pagePath, string $locale = 'de', string $workspace = self::WORKSPACE_DEFAULT): bool
    {
        $health = $this->getRouteHealth($pagePath, $locale);
        if ($health === null) {
            return false;
        }

        foreach ($health['routes'] as $route) {
            if ($route['workspace'] === $workspace && !$route['history']) {
                return true;
            }
        }

        return false;
    }

    // -------------------------------------------------------------------------

    /**
     * @param array{path: string, uuid: string, default: array<string, mixed>|null, live: array<string, mixed>|null} $page
     * @param list<array{id: int, path: string, workspace: string, identifier: string, history: bool, target: string|null, referenceRow: bool}> $routes routes whose sulu:content is the page
     *
     * @return array<string, mixed>
     */
    private function buildHealth(array $page, array $routes, string $locale): array
    {
        $root = $this->routesRoot($locale);
        $draftUrl = $page['default']['url'] ?? null;
        $liveUrl = $page['live']['url'] ?? null;
        $published = $page['live'] !== null && ($page['live']['state'] ?? null) === '2';

        $active = [self::WORKSPACE_DEFAULT => [], self::WORKSPACE_LIVE => []];
        foreach ($routes as $route) {
            if (!$route['history']) {
                $active[$route['workspace']][] = $route;
            }
        }

        $draftStatus = $this->workspaceStatus($active[self::WORKSPACE_DEFAULT], $draftUrl, $root, $published);
        $liveStatus = $this->workspaceStatus($active[self::WORKSPACE_LIVE], $liveUrl, $root, $published);

        $referencesOk = true;
        foreach ([...$active[self::WORKSPACE_DEFAULT], ...$active[self::WORKSPACE_LIVE]] as $route) {
            if (!$route['referenceRow']) {
                $referencesOk = false;
                break;
            }
        }

        $activeCount = max(count($active[self::WORKSPACE_DEFAULT]), count($active[self::WORKSPACE_LIVE]));
        $healthy = in_array($draftStatus, [self::STATUS_OK, self::STATUS_NONE], true)
            && in_array($liveStatus, [self::STATUS_OK, self::STATUS_NONE], true)
            && $referencesOk
            && $activeCount <= 1
            && (!$published || ($draftStatus === self::STATUS_OK && $liveStatus === self::STATUS_OK));

        return [
            'path' => $page['path'],
            'uuid' => $page['uuid'],
            'published' => $published,
            'draftUrl' => $draftUrl,
            'liveUrl' => $liveUrl,
            'routeHealth' => [
                'draft' => $draftStatus,
                'live' => $liveStatus,
                'references' => $referencesOk ? self::STATUS_OK : self::STATUS_MISSING,
                'activeRoutes' => $activeCount,
                'healthy' => $healthy,
            ],
        ];
    }

    /**
     * @param list<array{path: string}> $activeRoutes
     */
    private function workspaceStatus(array $activeRoutes, ?string $url, string $root, bool $published): string
    {
        if ($activeRoutes === []) {
            return $published ? self::STATUS_MISSING : self::STATUS_NONE;
        }
        if ($url === null) {
            return self::STATUS_MISMATCH;
        }

        $expected = $root . ($url === '/' ? '' : $url);
        foreach ($activeRoutes as $route) {
            if ($route['path'] === $expected) {
                return self::STATUS_OK;
            }
        }

        return self::STATUS_MISMATCH;
    }

    /**
     * @param array{path: string, workspace: string, history: bool, target: string|null, referenceRow: bool} $route
     *
     * @return array{url: string, workspace: string, history: bool, target: string|null, referenceRow: bool}
     */
    private function formatRoute(array $route, string $locale): array
    {
        return [
            'url' => $this->routeUrl($route['path'], $locale),
            'workspace' => $route['workspace'],
            'history' => $route['history'],
            'target' => $route['target'],
            'referenceRow' => $route['referenceRow'],
        ];
    }

    private function routeUrl(string $routePath, string $locale): string
    {
        $root = $this->routesRoot($locale);
        if ($routePath === $root) {
            return '/';
        }

        return str_starts_with($routePath, $root . '/') ? substr($routePath, strlen($root)) : $routePath;
    }

    /**
     * @return array{0: string, 1: string} locale and resource locator (always starting with /)
     */
    private function splitPublicPath(string $publicPath): array
    {
        $path = '/' . ltrim(trim($publicPath), '/');
        $path = preg_replace('#[?\#].*$#', '', $path) ?? $path;
        if (strlen($path) > 1) {
            $path = rtrim($path, '/');
        }

        if (preg_match('#^/(' . implode('|', self::LOCALES) . ')(/.*)?$#', $path, $m)) {
            return [$m[1], isset($m[2]) && $m[2] !== '' ? $m[2] : '/'];
        }

        return ['de', $path];
    }

    /**
     * Follow history routes until an active one; returns its resource locator.
     *
     * @param array{workspace: string, target: string|null, history: bool, path: string} $route
     */
    private function resolveHistoryTarget(array $route, string $locale): ?string
    {
        $seen = [];
        $current = $route;
        for ($i = 0; $i < 10 && $current !== null && $current['history'] && $current['target'] !== null; $i++) {
            if (isset($seen[$current['target']])) {
                return null;
            }
            $seen[$current['target']] = true;
            $current = $this->loadRouteByIdentifier($current['target'], $current['workspace'], $locale);
        }

        if ($current === null || $current['history']) {
            return null;
        }

        return $this->routeUrl($current['path'], $locale);
    }

    /**
     * @return array<string, mixed>|null
     */
    private function findEnabledRedirect(string $publicPath): ?array
    {
        $source = strtolower('/' . ltrim(trim($publicPath), '/'));
        $candidates = [$source];
        if (strlen($source) > 1 && str_ends_with($source, '/')) {
            $candidates[] = rtrim($source, '/');
        }

        foreach ($candidates as $candidate) {
            $row = $this->connection->fetchAssociative(
                'SELECT id, source, sourceHost, target, statusCode, enabled FROM re_redirect_routes WHERE source = ? AND enabled = 1 AND sourceHost IS NULL ORDER BY changed DESC LIMIT 1',
                [$candidate]
            );
            if (is_array($row) && $row !== []) {
                return $row;
            }
        }

        return null;
    }

    // -------------------------------------------------------------------------
    // Loaders

    /**
     * @param list<string> $paths
     *
     * @return array<string, array{path: string, uuid: string, default: array<string, mixed>|null, live: array<string, mixed>|null}>
     */
    private function loadPages(array $paths, string $locale): array
    {
        $placeholders = implode(',', array_fill(0, count($paths), '?'));
        $rows = $this->connection->fetchAllAssociative(
            "SELECT id, path, workspace_name, identifier, props FROM phpcr_nodes WHERE path IN ({$placeholders}) AND workspace_name IN (?, ?)",
            [...$paths, self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE]
        );

        $pages = [];
        foreach ((array) $rows as $row) {
            if (!is_array($row)) {
                continue;
            }
            $path = (string) $row['path'];
            $node = [
                'id' => (int) $row['id'],
                'uuid' => (string) $row['identifier'],
                'url' => self::extractProperty((string) $row['props'], "i18n:{$locale}-url"),
                'state' => self::extractProperty((string) $row['props'], "i18n:{$locale}-state"),
                'title' => self::extractProperty((string) $row['props'], "i18n:{$locale}-title"),
            ];
            $pages[$path] ??= ['path' => $path, 'uuid' => $node['uuid'], 'default' => null, 'live' => null];
            if ($row['workspace_name'] === self::WORKSPACE_DEFAULT) {
                $pages[$path]['default'] = $node;
                $pages[$path]['uuid'] = $node['uuid'];
            } else {
                $pages[$path]['live'] = $node;
            }
        }

        // Only pages that exist in the draft workspace count as existing.
        return array_filter($pages, fn (array $p) => $p['default'] !== null);
    }

    /**
     * @return array{path: string, uuid: string, url: string|null, state: string|null, title: string|null}|null
     */
    private function loadNodeByIdentifier(string $identifier, string $workspace, string $locale): ?array
    {
        $row = $this->connection->fetchAssociative(
            'SELECT path, identifier, props FROM phpcr_nodes WHERE identifier = ? AND workspace_name = ?',
            [$identifier, $workspace]
        );
        if (!is_array($row) || $row === []) {
            return null;
        }

        return [
            'path' => (string) $row['path'],
            'uuid' => (string) $row['identifier'],
            'url' => self::extractProperty((string) $row['props'], "i18n:{$locale}-url"),
            'state' => self::extractProperty((string) $row['props'], "i18n:{$locale}-state"),
            'title' => self::extractProperty((string) $row['props'], "i18n:{$locale}-title"),
        ];
    }

    /**
     * All route nodes under the locale's route root in both workspaces.
     *
     * @return list<array{id: int, path: string, workspace: string, identifier: string, history: bool, target: string|null, referenceRow: bool}>
     */
    private function loadRouteIndex(string $locale): array
    {
        $rows = $this->connection->fetchAllAssociative(
            'SELECT id, path, workspace_name, identifier, props FROM phpcr_nodes WHERE path LIKE ? AND workspace_name IN (?, ?)',
            [$this->routesRoot($locale) . '/%', self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE]
        );

        return $this->hydrateRoutes((array) $rows);
    }

    /**
     * Route nodes whose sulu:content points at one of the given uuids.
     *
     * @param list<string> $uuids
     *
     * @return list<array{id: int, path: string, workspace: string, identifier: string, history: bool, target: string|null, referenceRow: bool}>
     */
    private function loadRoutesReferencing(array $uuids, string $locale): array
    {
        $routes = [];
        foreach ($uuids as $uuid) {
            $rows = $this->connection->fetchAllAssociative(
                'SELECT id, path, workspace_name, identifier, props FROM phpcr_nodes WHERE path LIKE ? AND workspace_name IN (?, ?) AND props LIKE ?',
                [$this->routesRoot($locale) . '/%', self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE, '%' . $uuid . '%']
            );
            foreach ($this->hydrateRoutes((array) $rows) as $route) {
                if ($route['target'] === $uuid) {
                    $routes[] = $route;
                }
            }
        }

        return $routes;
    }

    /**
     * @return array{id: int, path: string, workspace: string, identifier: string, history: bool, target: string|null, referenceRow: bool}|null
     */
    private function loadRouteAt(string $routePath, string $workspace): ?array
    {
        $row = $this->connection->fetchAssociative(
            'SELECT id, path, workspace_name, identifier, props FROM phpcr_nodes WHERE path = ? AND workspace_name = ?',
            [$routePath, $workspace]
        );
        if (!is_array($row) || $row === []) {
            return null;
        }

        return $this->hydrateRoutes([$row])[0] ?? null;
    }

    /**
     * @return array{id: int, path: string, workspace: string, identifier: string, history: bool, target: string|null, referenceRow: bool}|null
     */
    private function loadRouteByIdentifier(string $identifier, string $workspace, string $locale): ?array
    {
        $row = $this->connection->fetchAssociative(
            'SELECT id, path, workspace_name, identifier, props FROM phpcr_nodes WHERE identifier = ? AND workspace_name = ? AND path LIKE ?',
            [$identifier, $workspace, $this->routesRoot($locale) . '/%']
        );
        if (!is_array($row) || $row === []) {
            return null;
        }

        return $this->hydrateRoutes([$row])[0] ?? null;
    }

    /**
     * @param array<int, mixed> $rows
     *
     * @return list<array{id: int, path: string, workspace: string, identifier: string, history: bool, target: string|null, referenceRow: bool}>
     */
    private function hydrateRoutes(array $rows): array
    {
        $routes = [];
        foreach ($rows as $row) {
            if (!is_array($row) || !isset($row['props'])) {
                continue;
            }
            $props = (string) $row['props'];
            $target = self::extractProperty($props, 'sulu:content');
            if ($target === null) {
                continue; // plain container node, not a route
            }
            $history = self::extractProperty($props, 'sulu:history');
            $routes[] = [
                'id' => (int) $row['id'],
                'path' => (string) $row['path'],
                'workspace' => (string) $row['workspace_name'],
                'identifier' => (string) $row['identifier'],
                'history' => $history === '1' || $history === 'true',
                'target' => $target,
                'referenceRow' => false,
            ];
        }

        if ($routes === []) {
            return [];
        }

        $ids = array_map(fn (array $r) => $r['id'], $routes);
        $placeholders = implode(',', array_fill(0, count($ids), '?'));
        $refRows = $this->connection->fetchAllAssociative(
            "SELECT source_id FROM phpcr_nodes_references WHERE source_property_name = 'sulu:content' AND source_id IN ({$placeholders})",
            $ids
        );
        $withRef = [];
        foreach ((array) $refRows as $ref) {
            if (is_array($ref) && isset($ref['source_id'])) {
                $withRef[(int) $ref['source_id']] = true;
            }
        }
        foreach ($routes as &$route) {
            $route['referenceRow'] = isset($withRef[$route['id']]);
        }
        unset($route);

        return $routes;
    }

    /**
     * Single-valued property lookup in the PHPCR system-view XML, regex based
     * because route and content props are parsed in bulk.
     */
    public static function extractProperty(string $props, string $name): ?string
    {
        $pattern = '#<sv:property sv:name="' . preg_quote($name, '#') . '"[^>]*>\s*<sv:value[^>]*>([^<]*)</sv:value>#';
        if (preg_match($pattern, $props, $m) === 1) {
            return html_entity_decode($m[1], ENT_QUOTES | ENT_XML1, 'UTF-8');
        }

        return null;
    }
}
