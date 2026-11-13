<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use App\Sulu\Process\ConsoleCommandRunner;
use Doctrine\DBAL\Connection;

/**
 * MCP redirect management on top of SuluRedirectBundle (re_redirect_routes).
 *
 * Reads with DBAL. Writes go through RedirectRouteManager inside the
 * app:redirect:save / app:redirect:delete commands in a fresh process (the
 * ORM in the long-lived MCP server suffers the same stale-connection problem
 * as the DocumentManager). All validation happens here first:
 *  - statusCode 301, 302, 307, 308 or 410; target required unless 410
 *  - a source that is an active page route or a history route is refused:
 *    Sulu's content router runs before the redirect router, so the redirect
 *    would never fire
 *  - chains (target is itself a redirect or history route) produce a warning
 *    with the final target
 */
class RedirectService
{
    public const MAX_BATCH = 50;
    public const STATUS_CODES = [301, 302, 307, 308, 410];

    public function __construct(
        private readonly Connection $connection,
        private readonly RouteHealthService $routeHealth,
        private readonly ConsoleCommandRunner $commandRunner,
    ) {
    }

    /**
     * @return array<string, mixed>
     */
    public function listRedirects(?string $sourcePrefix = null, ?string $target = null, ?int $statusCode = null, int $limit = 100): array
    {
        $where = [];
        $params = [];
        if ($sourcePrefix !== null && $sourcePrefix !== '') {
            $where[] = 'source LIKE ?';
            $params[] = self::normaliseSource($sourcePrefix) . '%';
        }
        if ($target !== null && $target !== '') {
            $where[] = 'target = ?';
            $params[] = $target;
        }
        if ($statusCode !== null) {
            $where[] = 'statusCode = ?';
            $params[] = $statusCode;
        }
        $limit = max(1, min($limit, 500));

        $rows = $this->connection->fetchAllAssociative(
            'SELECT id, source, sourceHost, target, statusCode, enabled, created, changed FROM re_redirect_routes'
            . ($where !== [] ? ' WHERE ' . implode(' AND ', $where) : '')
            . ' ORDER BY created DESC LIMIT ' . $limit,
            $params
        );

        return [
            'success' => true,
            'count' => count($rows),
            'redirects' => array_map(fn (array $r) => self::formatRow($r), $rows),
        ];
    }

    /**
     * Create one or many (up to 50) redirects. Valid entries are created,
     * invalid ones are returned with a reason; nothing else changes.
     *
     * @param list<array<string, mixed>> $items
     *
     * @return array<string, mixed>
     */
    public function createRedirects(array $items): array
    {
        if ($items === []) {
            return ['success' => false, 'errorCode' => 'invalid_input', 'message' => 'No redirects given'];
        }
        if (count($items) > self::MAX_BATCH) {
            return ['success' => false, 'errorCode' => 'too_many_redirects', 'message' => 'At most ' . self::MAX_BATCH . ' redirects per call'];
        }

        $valid = [];
        $failed = [];
        $warnings = [];
        $seen = [];
        foreach ($items as $index => $item) {
            $checked = $this->validate($item, null);
            if (isset($checked['error'])) {
                $failed[] = ['index' => $index, 'item' => $item, 'reason' => $checked['error'], 'errorCode' => $checked['errorCode']];
                continue;
            }
            $key = $checked['data']['source'] . '|' . ($checked['data']['sourceHost'] ?? '');
            if (isset($seen[$key])) {
                $failed[] = ['index' => $index, 'item' => $item, 'reason' => 'Duplicate source in this batch', 'errorCode' => 'duplicate_source'];
                continue;
            }
            $seen[$key] = true;
            $valid[] = $checked['data'];
            if (isset($checked['warning'])) {
                $warnings[] = ['source' => $checked['data']['source']] + $checked['warning'];
            }
        }

        $saved = [];
        if ($valid !== []) {
            $result = $this->save($valid);
            $saved = $result['saved'] ?? [];
            foreach ($result['failed'] ?? [] as $f) {
                $failed[] = ['item' => $f['item'], 'reason' => $f['reason'], 'errorCode' => 'save_failed'];
            }
            if (!isset($result['saved']) && empty($result['success'])) {
                foreach ($valid as $v) {
                    $failed[] = ['item' => $v, 'reason' => (string) ($result['message'] ?? 'save failed'), 'errorCode' => (string) ($result['errorCode'] ?? 'save_failed')];
                }
            }
        }

        $response = [
            'success' => $failed === [],
            'created' => $saved,
            'failed' => $failed,
        ];
        if ($warnings !== []) {
            $response['warnings'] = $warnings;
        }

        return $response;
    }

    /**
     * @param array<string, mixed> $fields source, sourceHost, target, statusCode, enabled (only given ones change)
     *
     * @return array<string, mixed>
     */
    public function updateRedirect(string $id, array $fields): array
    {
        $existing = $this->findById($id);
        if ($existing === null) {
            return ['success' => false, 'errorCode' => 'redirect_not_found', 'message' => 'Redirect not found: ' . $id];
        }

        $merged = array_merge($existing, array_filter($fields, fn ($v) => $v !== null));
        $checked = $this->validate($merged, $id);
        if (isset($checked['error'])) {
            return ['success' => false, 'errorCode' => $checked['errorCode'], 'message' => $checked['error']];
        }

        $result = $this->save([$checked['data'] + ['id' => $id]]);
        if (empty($result['success'])) {
            return [
                'success' => false,
                'errorCode' => (string) ($result['errorCode'] ?? 'save_failed'),
                'message' => (string) ($result['failed'][0]['reason'] ?? $result['message'] ?? 'save failed'),
            ];
        }

        $response = ['success' => true, 'before' => $existing, 'redirect' => $result['saved'][0] ?? null];
        if (isset($checked['warning'])) {
            $response['warning'] = $checked['warning'];
        }

        return $response;
    }

    /**
     * @return array<string, mixed>
     */
    public function deleteRedirect(string $id, string $confirm): array
    {
        if ($confirm !== $id) {
            return [
                'success' => false,
                'errorCode' => 'confirmation_mismatch',
                'message' => 'confirm must equal the redirect id',
                'details' => ['expected' => $id, 'got' => $confirm],
            ];
        }
        if ($this->findById($id) === null) {
            return ['success' => false, 'errorCode' => 'redirect_not_found', 'message' => 'Redirect not found: ' . $id];
        }

        $spawn = $this->commandRunner->run(['app:redirect:delete', $id]);

        return ConsoleCommandRunner::toResult($spawn, 'app:redirect:delete', ConsoleCommandRunner::DEFAULT_TIMEOUT, 'redirect_delete_failed');
    }

    // -------------------------------------------------------------------------

    /**
     * @param list<array<string, mixed>> $items
     *
     * @return array<string, mixed>
     */
    private function save(array $items): array
    {
        $spawn = $this->commandRunner->run(['app:redirect:save', (string) json_encode($items, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)], 120);

        return ConsoleCommandRunner::toResult($spawn, 'app:redirect:save', 120, 'save_failed');
    }

    /**
     * @param array<string, mixed> $item
     *
     * @return array{data: array{source: string, sourceHost: string|null, target: string, statusCode: int, enabled: bool}, warning?: array<string, mixed>}|array{error: string, errorCode: string}
     */
    private function validate(array $item, ?string $ownId): array
    {
        $rawSource = trim((string) ($item['source'] ?? ''));
        if ($rawSource === '') {
            return ['error' => 'source is required, e.g. /de/glossare/old-page', 'errorCode' => 'invalid_source'];
        }
        if (preg_match('#^https?://#i', $rawSource)) {
            return ['error' => 'source must be a path, not an absolute URL (use sourceHost for host-specific redirects)', 'errorCode' => 'invalid_source'];
        }
        $source = self::normaliseSource($rawSource);

        $statusCode = (int) ($item['statusCode'] ?? 301);
        if (!in_array($statusCode, self::STATUS_CODES, true)) {
            return ['error' => 'statusCode must be one of ' . implode(', ', self::STATUS_CODES), 'errorCode' => 'invalid_status_code'];
        }

        $target = trim((string) ($item['target'] ?? ''));
        if ($statusCode === 410) {
            $target = '';
        } elseif ($target === '') {
            return ['error' => 'target is required unless statusCode is 410', 'errorCode' => 'invalid_target'];
        } elseif (!str_starts_with($target, '/') && !preg_match('#^https?://#i', $target)) {
            return ['error' => 'target must be a path starting with / or an absolute http(s) URL', 'errorCode' => 'invalid_target'];
        }
        if ($target !== '' && strtolower(rtrim($target, '/')) === rtrim($source, '/')) {
            return ['error' => 'source and target are the same', 'errorCode' => 'redirect_loop'];
        }

        $sourceHost = trim((string) ($item['sourceHost'] ?? ''));
        $sourceHost = $sourceHost !== '' ? strtolower($sourceHost) : null;

        $existing = $this->findBySource($source, $sourceHost);
        if ($existing !== null && $existing['id'] !== $ownId) {
            return ['error' => 'A redirect for ' . $source . ' already exists (id ' . $existing['id'] . '); use update_redirect', 'errorCode' => 'redirect_exists'];
        }

        $check = $this->routeHealth->checkUrl($source);
        if (($check['type'] ?? null) === 'page') {
            return [
                'error' => $source . ' is the active URL of page ' . ($check['path'] ?? $check['uuid'] ?? '') . '; the page would shadow the redirect. Move or unpublish the page first.',
                'errorCode' => 'source_is_active_route',
            ];
        }

        if (($check['type'] ?? null) === 'history_redirect') {
            return [
                'error' => $source . ' is already a Sulu history route answering 301 to ' . ($check['target'] ?? '?') . '; Sulu\'s router wins, the redirect would never fire',
                'errorCode' => 'source_is_history_route',
            ];
        }

        $result = ['data' => [
            'source' => $source,
            'sourceHost' => $sourceHost,
            'target' => $target,
            'statusCode' => $statusCode,
            'enabled' => !isset($item['enabled']) || filter_var($item['enabled'], FILTER_VALIDATE_BOOLEAN),
        ]];

        if ($target !== '' && str_starts_with($target, '/')) {
            $final = $this->finalTarget($target);
            if ($final !== null && $final !== $target) {
                $result['warning'] = [
                    'warning' => 'target is itself redirected (chain)',
                    'finalTarget' => $final,
                ];
            }
        }

        return $result;
    }

    /**
     * Follow redirect bundle entries and history routes from $target.
     */
    private function finalTarget(string $target): ?string
    {
        $current = $target;
        $seen = [];
        for ($i = 0; $i < 10; $i++) {
            if (isset($seen[$current])) {
                return null;
            }
            $seen[$current] = true;
            $check = $this->routeHealth->checkUrl($current);
            $type = $check['type'] ?? null;
            if (!in_array($type, ['history_redirect', 'redirect_bundle'], true) || empty($check['target'])) {
                return $current;
            }
            if (($check['statusCode'] ?? 0) === 410) {
                return null;
            }
            $current = (string) $check['target'];
            if (!str_starts_with($current, '/')) {
                return $current;
            }
        }

        return $current;
    }

    /**
     * @return array<string, mixed>|null
     */
    private function findById(string $id): ?array
    {
        $row = $this->connection->fetchAssociative(
            'SELECT id, source, sourceHost, target, statusCode, enabled, created, changed FROM re_redirect_routes WHERE id = ?',
            [$id]
        );

        return is_array($row) && $row !== [] ? self::formatRow($row) : null;
    }

    /**
     * @return array<string, mixed>|null
     */
    private function findBySource(string $source, ?string $sourceHost): ?array
    {
        $row = $sourceHost === null
            ? $this->connection->fetchAssociative('SELECT id, source, sourceHost, target, statusCode, enabled, created, changed FROM re_redirect_routes WHERE source = ? AND sourceHost IS NULL', [$source])
            : $this->connection->fetchAssociative('SELECT id, source, sourceHost, target, statusCode, enabled, created, changed FROM re_redirect_routes WHERE source = ? AND sourceHost = ?', [$source, $sourceHost]);

        return is_array($row) && $row !== [] ? self::formatRow($row) : null;
    }

    /**
     * Same normalisation as RedirectRoute::setSource(): leading slash, lowercase.
     */
    public static function normaliseSource(string $source): string
    {
        return strtolower('/' . ltrim(trim($source), '/'));
    }

    /**
     * @param array<string, mixed> $row
     *
     * @return array<string, mixed>
     */
    private static function formatRow(array $row): array
    {
        return [
            'id' => (string) $row['id'],
            'source' => (string) $row['source'],
            'sourceHost' => $row['sourceHost'] ?? null,
            'target' => (string) $row['target'],
            'statusCode' => (int) $row['statusCode'],
            'enabled' => (bool) $row['enabled'],
            'created' => $row['created'] ?? null,
            'changed' => $row['changed'] ?? null,
        ];
    }
}
