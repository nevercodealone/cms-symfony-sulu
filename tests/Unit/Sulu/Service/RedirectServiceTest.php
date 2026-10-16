<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Service\RedirectService;
use App\Sulu\Service\RouteHealthService;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class RedirectServiceTest extends TestCase
{
    use DocumentCommandStubsTrait;

    /** @var list<array<string, mixed>> */
    private array $rows = [];

    /** @var array<string, array<string, mixed>> checkUrl answers by path */
    private array $urls = [];

    private function service(): RedirectService
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')->willReturnCallback(function (string $sql, array $params) {
            foreach ($this->rows as $row) {
                if (str_contains($sql, 'WHERE id = ?') && $row['id'] === $params[0]) {
                    return $row;
                }
                if (str_contains($sql, 'WHERE source = ?') && $row['source'] === $params[0]) {
                    return $row;
                }
            }

            return false;
        });
        $connection->method('fetchAllAssociative')->willReturnCallback(fn () => $this->rows);

        $health = $this->createMock(RouteHealthService::class);
        $health->method('checkUrl')->willReturnCallback(fn (string $u) => $this->urls[$u] ?? ['type' => 'not_found']);

        $runner = $this->stubRunner(function (array $args) {
            if ($args[0] === 'app:redirect:delete') {
                return ['success' => true, 'deleted' => ['id' => $args[1]]];
            }
            $items = json_decode($args[1], true);

            return ['success' => true, 'saved' => array_map(fn (array $i) => $i + ['id' => $i['id'] ?? 'new-id'], $items), 'failed' => []];
        });

        return new RedirectService($connection, $health, $runner);
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function savedItems(): array
    {
        return json_decode($this->spawnedArgs('app:redirect:save')[1], true);
    }

    public function testCreatesSinglePermanentRedirectWithNormalisedSource(): void
    {
        $result = $this->service()->createRedirects([['source' => 'DE/Glossare/Krea-2', 'target' => '/de/glossare/ki/krea-2']]);

        $this->assertTrue($result['success']);
        $this->assertSame([[
            'source' => '/de/glossare/krea-2',
            'sourceHost' => null,
            'target' => '/de/glossare/ki/krea-2',
            'statusCode' => 301,
            'enabled' => true,
        ]], $this->savedItems());
    }

    public function testGoneRedirectNeedsNoTargetAndDropsAGivenOne(): void
    {
        $result = $this->service()->createRedirects([['source' => '/de/weg', 'statusCode' => 410, 'target' => '/ignored']]);

        $this->assertTrue($result['success']);
        $this->assertSame('', $this->savedItems()[0]['target']);
    }

    public function testBulkCreatesValidEntriesAndReportsInvalidOnes(): void
    {
        $this->urls['/de/live-page'] = ['type' => 'page', 'path' => '/cmf/example/contents/live-page'];
        $this->urls['/de/old-url'] = ['type' => 'history_redirect', 'statusCode' => 301, 'target' => '/de/new-url'];
        $this->rows[] = ['id' => 'r1', 'source' => '/de/taken', 'sourceHost' => null, 'target' => '/de/x', 'statusCode' => 301, 'enabled' => 1];

        $result = $this->service()->createRedirects([
            ['source' => '/de/a', 'target' => '/de/b'],
            ['source' => '/de/live-page', 'target' => '/de/b'],
            ['source' => '/de/old-url', 'target' => '/de/b'],
            ['source' => '/de/taken', 'target' => '/de/b'],
            ['source' => '/de/c', 'target' => '/de/b', 'statusCode' => 303],
            ['source' => '/de/d'],
            ['source' => '/de/a', 'target' => '/de/z'],
            ['source' => '/de/e', 'target' => '/de/e'],
        ]);

        $this->assertFalse($result['success']);
        $this->assertCount(1, $result['created']);
        $this->assertSame(
            ['source_is_active_route', 'source_is_history_route', 'redirect_exists', 'invalid_status_code', 'invalid_target', 'duplicate_source', 'redirect_loop'],
            array_column($result['failed'], 'errorCode')
        );
        $this->assertCount(1, $this->savedItems(), 'only the valid entry reaches the save command');
    }

    public function testRejectsMoreThanFiftyRedirects(): void
    {
        $items = array_fill(0, 51, ['source' => '/de/a', 'target' => '/de/b']);

        $this->assertSame('too_many_redirects', $this->service()->createRedirects($items)['errorCode']);
        $this->assertSame([], $this->spawnedCommands);
    }

    public function testWarnsAboutChainsWithTheFinalTarget(): void
    {
        $this->urls['/de/step-1'] = ['type' => 'redirect_bundle', 'statusCode' => 301, 'target' => '/de/step-2'];
        $this->urls['/de/step-2'] = ['type' => 'history_redirect', 'statusCode' => 301, 'target' => '/de/final'];
        $this->urls['/de/final'] = ['type' => 'page'];

        $result = $this->service()->createRedirects([['source' => '/de/start', 'target' => '/de/step-1']]);

        $this->assertTrue($result['success']);
        $this->assertSame('/de/final', $result['warnings'][0]['finalTarget']);
    }

    public function testUpdateMergesFieldsAndKeepsTheId(): void
    {
        $this->rows[] = ['id' => 'r1', 'source' => '/de/a', 'sourceHost' => null, 'target' => '/de/b', 'statusCode' => 301, 'enabled' => 1, 'created' => null, 'changed' => null];

        $result = $this->service()->updateRedirect('r1', ['statusCode' => 302]);

        $this->assertTrue($result['success']);
        $saved = $this->savedItems()[0];
        $this->assertSame('r1', $saved['id']);
        $this->assertSame(302, $saved['statusCode']);
        $this->assertSame('/de/b', $saved['target']);
    }

    public function testUpdateUnknownIdFails(): void
    {
        $this->assertSame('redirect_not_found', $this->service()->updateRedirect('nope', [])['errorCode']);
    }

    public function testDeleteRequiresConfirmEqualToId(): void
    {
        $this->rows[] = ['id' => 'r1', 'source' => '/de/a', 'sourceHost' => null, 'target' => '/de/b', 'statusCode' => 301, 'enabled' => 1];
        $service = $this->service();

        $this->assertSame('confirmation_mismatch', $service->deleteRedirect('r1', 'r2')['errorCode']);
        $this->assertSame([], $this->spawnedCommands);

        $this->assertTrue($service->deleteRedirect('r1', 'r1')['success']);
        $this->assertSame(['app:redirect:delete', 'r1'], $this->spawnedArgs('app:redirect:delete'));
    }

    public function testListRedirectsFormatsRows(): void
    {
        $this->rows[] = ['id' => 'r1', 'source' => '/de/a', 'sourceHost' => null, 'target' => '', 'statusCode' => '410', 'enabled' => '1', 'created' => 'c', 'changed' => 'd'];

        $result = $this->service()->listRedirects('/de/');

        $this->assertSame(1, $result['count']);
        $this->assertSame(410, $result['redirects'][0]['statusCode']);
        $this->assertTrue($result['redirects'][0]['enabled']);
    }
}
