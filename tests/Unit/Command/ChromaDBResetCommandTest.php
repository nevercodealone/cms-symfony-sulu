<?php

declare(strict_types=1);

namespace App\Tests\Unit\Command;

use App\Command\ChromaDBResetCommand;
use Codewithkyrian\ChromaDB\Client;
use Codewithkyrian\ChromaDB\Models\Collection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Console\Application;
use Symfony\Component\Console\Tester\CommandTester;

class ChromaDBResetCommandTest extends TestCase
{
    private Client&MockObject $chromaClient;
    private CommandTester $commandTester;

    protected function setUp(): void
    {
        $this->chromaClient = $this->createMock(Client::class);

        $command = new ChromaDBResetCommand($this->chromaClient);
        $application = new Application();
        $application->add($command);

        $this->commandTester = new CommandTester($application->find('app:chromadb:reset'));
    }

    public function testDeletesAndRecreatesCollections(): void
    {
        $collection = $this->createMock(Collection::class);

        $this->chromaClient->expects($this->exactly(2))
            ->method('deleteCollection')
            ->willReturnCallback(function (string $name): void {
                $this->assertContains($name, ['youtube_videos', 'sulu_content']);
            });

        $this->chromaClient->expects($this->exactly(2))
            ->method('getOrCreateCollection')
            ->willReturn($collection);

        $this->commandTester->execute([]);

        $this->assertSame(0, $this->commandTester->getStatusCode());
        $this->assertStringContainsString('Collections reset', $this->commandTester->getDisplay());
    }

    public function testHandlesNonExistentCollections(): void
    {
        $collection = $this->createMock(Collection::class);

        $this->chromaClient->expects($this->exactly(2))
            ->method('deleteCollection')
            ->willThrowException(new \Exception('Collection not found'));

        $this->chromaClient->expects($this->exactly(2))
            ->method('getOrCreateCollection')
            ->willReturn($collection);

        $this->commandTester->execute([]);

        $this->assertSame(0, $this->commandTester->getStatusCode());
        $this->assertStringContainsString('does not exist', $this->commandTester->getDisplay());
    }
}
