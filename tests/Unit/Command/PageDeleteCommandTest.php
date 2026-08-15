<?php

declare(strict_types=1);

namespace App\Tests\Unit\Command;

use App\Command\PageDeleteCommand;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Sulu\Component\DocumentManager\DocumentManagerInterface;
use Symfony\Component\Console\Tester\CommandTester;

class PageDeleteCommandTest extends TestCase
{
    private DocumentManagerInterface&MockObject $documentManager;

    protected function setUp(): void
    {
        $this->documentManager = $this->createMock(DocumentManagerInterface::class);
    }

    public function testDeletesPageAndReturnsJsonSuccess(): void
    {
        $document = new class {
            public function getPath(): string
            {
                return '/cmf/example/contents/foo';
            }

            public function getUuid(): string
            {
                return '11111111-2222-3333-4444-555555555555';
            }
        };

        $this->documentManager->expects($this->once())->method('find')
            ->with('/cmf/example/contents/foo', 'de')
            ->willReturn($document);
        $this->documentManager->expects($this->once())->method('remove')
            ->with($document);
        $this->documentManager->expects($this->once())->method('flush');

        $tester = new CommandTester(new PageDeleteCommand($this->documentManager));
        $exitCode = $tester->execute(['path' => '/cmf/example/contents/foo']);

        $this->assertSame(0, $exitCode);
        $data = json_decode(trim($tester->getDisplay()), true);
        $this->assertTrue($data['success']);
        $this->assertSame('/cmf/example/contents/foo', $data['path']);
        $this->assertSame('11111111-2222-3333-4444-555555555555', $data['uuid']);
    }

    public function testReturnsStructuredErrorWhenPageNotFound(): void
    {
        $this->documentManager->method('find')->willReturn(null);
        $this->documentManager->expects($this->never())->method('remove');

        $tester = new CommandTester(new PageDeleteCommand($this->documentManager));
        $exitCode = $tester->execute(['path' => '/cmf/example/contents/missing']);

        $this->assertSame(1, $exitCode);
        $data = json_decode(trim($tester->getDisplay()), true);
        $this->assertFalse($data['success']);
        $this->assertSame('page_not_found', $data['errorCode']);
    }

    public function testReturnsStructuredErrorOnException(): void
    {
        $this->documentManager->method('find')->willThrowException(new \RuntimeException('session went away'));

        $tester = new CommandTester(new PageDeleteCommand($this->documentManager));
        $exitCode = $tester->execute(['path' => '/cmf/example/contents/foo']);

        $this->assertSame(1, $exitCode);
        $data = json_decode(trim($tester->getDisplay()), true);
        $this->assertFalse($data['success']);
        $this->assertSame('delete_failed', $data['errorCode']);
        $this->assertStringContainsString('session went away', $data['message']);
    }

    public function testPassesLocaleToDocumentManager(): void
    {
        $document = new class {
            public function getPath(): string
            {
                return '/cmf/example/contents/foo';
            }

            public function getUuid(): string
            {
                return 'uuid';
            }
        };

        $this->documentManager->expects($this->once())->method('find')
            ->with('/cmf/example/contents/foo', 'en')
            ->willReturn($document);
        $this->documentManager->method('remove');
        $this->documentManager->method('flush');

        $tester = new CommandTester(new PageDeleteCommand($this->documentManager));
        $exitCode = $tester->execute(['path' => '/cmf/example/contents/foo', '--locale' => 'en']);

        $this->assertSame(0, $exitCode);
    }
}
