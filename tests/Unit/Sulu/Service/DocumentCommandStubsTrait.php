<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Process\ConsoleCommandRunner;
use App\Sulu\Service\RouteHealthService;
use PHPUnit\Framework\MockObject\MockObject;

/**
 * Stubs for the fresh-process DocumentManager commands and the route health
 * check, so PageService create/publish/move/url logic can be unit tested
 * without spawning bin/console.
 */
trait DocumentCommandStubsTrait
{
    /** @var list<list<string>> console arguments of every spawned command */
    private array $spawnedCommands = [];

    /**
     * @param array<string, mixed>|callable(list<string>): array<string, mixed> $commandResult JSON the command prints
     */
    private function stubRunner(array|callable $commandResult = ['success' => true]): ConsoleCommandRunner&MockObject
    {
        $runner = $this->createMock(ConsoleCommandRunner::class);
        $runner->method('run')->willReturnCallback(function (array $args) use ($commandResult): array {
            $this->spawnedCommands[] = $args;
            $result = is_callable($commandResult) ? $commandResult($args) : $commandResult;

            return ['exitCode' => 0, 'output' => (string) json_encode($result), 'errorOutput' => '', 'timedOut' => false, 'result' => $result];
        });

        return $runner;
    }

    /**
     * Route health report as RouteHealthService::getRouteHealth() returns it.
     *
     * @param list<array{url: string, workspace: string, history: bool}> $routes
     *
     * @return array<string, mixed>
     */
    private function healthReport(
        string $path,
        ?string $draftUrl,
        ?string $liveUrl,
        bool $published,
        string $draft = 'ok',
        string $live = 'ok',
        array $routes = [],
        string $uuid = 'page-uuid',
    ): array {
        return [
            'path' => $path,
            'uuid' => $uuid,
            'published' => $published,
            'draftUrl' => $draftUrl,
            'liveUrl' => $liveUrl,
            'routeHealth' => [
                'draft' => $draft,
                'live' => $live,
                'references' => 'ok',
                'activeRoutes' => $published ? 1 : 0,
                'healthy' => true,
            ],
            'routes' => array_map(fn (array $r) => $r + ['target' => null, 'referenceRow' => true], $routes),
        ];
    }

    /**
     * Route health stub: by default every page is an unpublished, healthy draft.
     *
     * @param callable(string): (array<string, mixed>|null)|null $byPath
     */
    private function stubRouteHealth(?callable $byPath = null): RouteHealthService&MockObject
    {
        $health = $this->createMock(RouteHealthService::class);
        $health->method('getRouteHealth')->willReturnCallback(
            $byPath ?? fn (string $path) => $this->healthReport($path, '/x', null, false, 'none', 'none')
        );
        $health->method('getRouteHealthBatch')->willReturn([]);

        return $health;
    }

    /**
     * @return list<string> the arguments of the first spawned command with the given name
     */
    private function spawnedArgs(string $command): array
    {
        foreach ($this->spawnedCommands as $args) {
            if (($args[0] ?? null) === $command) {
                return $args;
            }
        }
        $this->fail('Command not spawned: ' . $command);
    }
}
