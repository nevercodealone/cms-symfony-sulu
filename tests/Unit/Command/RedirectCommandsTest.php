<?php

declare(strict_types=1);

namespace App\Tests\Unit\Command;

use App\Command\RedirectDeleteCommand;
use App\Command\RedirectSaveCommand;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;
use Sulu\Bundle\RedirectBundle\Entity\RedirectRoute;
use Sulu\Bundle\RedirectBundle\Manager\RedirectRouteManagerInterface;
use Sulu\Bundle\RedirectBundle\Model\RedirectRouteRepositoryInterface;
use Symfony\Component\Console\Tester\CommandTester;

class RedirectCommandsTest extends TestCase
{
    public function testSaveCreatesEachEntryFlushesAndReportsFailures(): void
    {
        $manager = $this->createMock(RedirectRouteManagerInterface::class);
        $manager->method('saveByData')->willReturnCallback(function (array $data) {
            if ($data['source'] === '/de/dup') {
                throw new \RuntimeException('not unique');
            }
            $route = new RedirectRoute();
            $route->setId('id-' . $data['source']);
            $route->setSource($data['source']);
            $route->setTarget($data['target']);
            $route->setStatusCode($data['statusCode']);

            return $route;
        });
        $em = $this->createMock(EntityManagerInterface::class);
        $em->method('isOpen')->willReturn(true);
        $em->expects($this->once())->method('flush');

        $tester = new CommandTester(new RedirectSaveCommand($manager, $em));
        $exit = $tester->execute(['redirects' => json_encode([
            ['source' => '/de/a', 'target' => '/de/b', 'statusCode' => 301, 'enabled' => false],
            ['source' => '/de/dup', 'target' => '/de/b', 'statusCode' => 301],
        ])]);

        $this->assertSame(1, $exit);
        $data = json_decode(trim($tester->getDisplay()), true);
        $this->assertFalse($data['success']);
        $this->assertSame('/de/a', $data['saved'][0]['source']);
        $this->assertFalse($data['saved'][0]['enabled']);
        $this->assertSame('not unique', $data['failed'][0]['reason']);
    }

    public function testSaveRejectsNonListInput(): void
    {
        $tester = new CommandTester(new RedirectSaveCommand(
            $this->createMock(RedirectRouteManagerInterface::class),
            $this->createMock(EntityManagerInterface::class)
        ));

        $this->assertSame(1, $tester->execute(['redirects' => '{"source":"/a"}']));
        $this->assertSame('invalid_input', json_decode(trim($tester->getDisplay()), true)['errorCode']);
    }

    public function testDeleteRemovesAndFlushes(): void
    {
        $route = new RedirectRoute();
        $route->setId('r1');
        $route->setSource('/de/a');
        $route->setTarget('');
        $route->setStatusCode(410);

        $repo = $this->createMock(RedirectRouteRepositoryInterface::class);
        $repo->method('findById')->willReturnMap([['r1', $route], ['nope', null]]);
        $manager = $this->createMock(RedirectRouteManagerInterface::class);
        $manager->expects($this->once())->method('delete')->with($route);
        $em = $this->createMock(EntityManagerInterface::class);
        $em->expects($this->once())->method('flush');

        $tester = new CommandTester(new RedirectDeleteCommand($manager, $repo, $em));
        $this->assertSame(0, $tester->execute(['id' => 'r1']));
        $this->assertSame('/de/a', json_decode(trim($tester->getDisplay()), true)['deleted']['source']);

        $this->assertSame(1, $tester->execute(['id' => 'nope']));
        $this->assertSame('redirect_not_found', json_decode(trim($tester->getDisplay()), true)['errorCode']);
    }
}
