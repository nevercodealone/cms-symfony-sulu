<?php

declare(strict_types=1);

namespace App\Tests\Unit\Command;

use App\Command\PageCreateCommand;
use App\Command\PageMoveCommand;
use App\Command\PagePublishCommand;
use App\Command\PageSetUrlCommand;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Sulu\Bundle\PageBundle\Document\PageDocument;
use Sulu\Component\DocumentManager\DocumentManagerInterface;
use Symfony\Component\Console\Tester\CommandTester;

class PageDocumentCommandsTest extends TestCase
{
    private DocumentManagerInterface&MockObject $documentManager;

    protected function setUp(): void
    {
        $this->documentManager = $this->createMock(DocumentManagerInterface::class);
    }

    private function page(string $path, string $url, string $uuid = 'uuid-1'): PageDocument&MockObject
    {
        $doc = $this->createMock(PageDocument::class);
        $doc->method('getPath')->willReturn($path);
        $doc->method('getUuid')->willReturn($uuid);
        $doc->method('getTitle')->willReturn('T');
        $currentUrl = $url;
        $doc->method('getResourceSegment')->willReturnCallback(function () use (&$currentUrl) {
            return $currentUrl;
        });
        $doc->method('setResourceSegment')->willReturnCallback(function ($u) use (&$currentUrl, $doc) {
            $currentUrl = $u;

            return $doc;
        });

        return $doc;
    }

    /**
     * @return array<string, mixed>
     */
    private function json(CommandTester $tester): array
    {
        $data = json_decode(trim($tester->getDisplay()), true);
        $this->assertIsArray($data);

        return $data;
    }

    public function testPublishPublishesAndFlushes(): void
    {
        $doc = $this->page('/cmf/example/contents/a', '/a');
        $this->documentManager->method('find')->willReturn($doc);
        $this->documentManager->expects($this->once())->method('publish')->with($doc, 'de');
        $this->documentManager->expects($this->once())->method('flush');

        $tester = new CommandTester(new PagePublishCommand($this->documentManager));
        $this->assertSame(0, $tester->execute(['path' => '/cmf/example/contents/a']));
        $this->assertSame('/a', $this->json($tester)['url']);
    }

    public function testPublishReportsMissingPage(): void
    {
        $this->documentManager->method('find')->willThrowException(new \RuntimeException('not found'));
        $this->documentManager->expects($this->never())->method('publish');

        $tester = new CommandTester(new PagePublishCommand($this->documentManager));
        $this->assertSame(1, $tester->execute(['path' => '/nope']));
        $this->assertSame('page_not_found', $this->json($tester)['errorCode']);
    }

    public function testPublishTurnsExceptionsIntoJson(): void
    {
        $this->documentManager->method('find')->willReturn($this->page('/cmf/example/contents/a', '/a'));
        $this->documentManager->method('publish')->willThrowException(new \RuntimeException('boom'));

        $tester = new CommandTester(new PagePublishCommand($this->documentManager));
        $this->assertSame(1, $tester->execute(['path' => '/cmf/example/contents/a']));
        $data = $this->json($tester);
        $this->assertSame('publish_failed', $data['errorCode']);
        $this->assertSame('boom', $data['message']);
    }

    public function testCreateBuildsUrlFromParentAndNamesNodeAfterSegment(): void
    {
        $parent = $this->page('/cmf/example/contents/glossare', '/glossare', 'parent-uuid');
        $doc = $this->page('/cmf/example/contents/glossare/krea', '');
        $this->documentManager->method('find')->willReturn($parent);
        $this->documentManager->method('create')->with('page')->willReturn($doc);
        $doc->expects($this->once())->method('setStructureType')->with('tailwind');
        $doc->expects($this->once())->method('setExtensionsData')->with([
            'seo' => ['title' => 'S'],
            'excerpt' => ['title' => 'E', 'images' => ['ids' => [5]]],
        ]);
        $this->documentManager->expects($this->once())->method('persist')->with($doc, 'de', [
            'parent_path' => '/cmf/example/contents/glossare',
            'node_name' => 'krea',
        ]);
        $this->documentManager->expects($this->once())->method('publish')->with($doc, 'de');

        $tester = new CommandTester(new PageCreateCommand($this->documentManager));
        $this->assertSame(0, $tester->execute([
            'parentPath' => '/cmf/example/contents/glossare',
            'title' => 'Krea',
            'resourceSegment' => '/krea',
            '--publish' => true,
            '--seo-title' => 'S',
            '--excerpt-title' => 'E',
            '--excerpt-image' => '5',
        ]));
        $this->assertSame('/glossare/krea', $this->json($tester)['url']);
    }

    public function testSetUrlKeepsNodeNameAndUsesParentPrefix(): void
    {
        $parent = $this->page('/cmf/example/contents/glossare/ki', '/glossare/ki', 'p');
        $doc = $this->page('/cmf/example/contents/glossare/ki/krea', '/glossare/ki/krea');
        $doc->method('getParent')->willReturn($parent);
        $this->documentManager->method('find')->willReturn($doc);
        $this->documentManager->expects($this->once())->method('persist')
            ->with($doc, 'de', $this->callback(fn (array $o) => $o['auto_name'] === false && $o['clear_missing_content'] === false));
        $this->documentManager->expects($this->never())->method('publish');

        $tester = new CommandTester(new PageSetUrlCommand($this->documentManager));
        $this->assertSame(0, $tester->execute(['path' => '/cmf/example/contents/glossare/ki/krea', 'resourceSegment' => '/krea-2']));
        $data = $this->json($tester);
        $this->assertSame('/glossare/ki/krea', $data['oldUrl']);
        $this->assertSame('/glossare/ki/krea-2', $data['newUrl']);
    }

    public function testMoveMovesToParentUuidAndPublishes(): void
    {
        $doc = $this->page('/cmf/example/contents/glossare/ki/krea', '/glossare/ki/krea');
        $parent = $this->page('/cmf/example/contents/glossare/ts', '/glossare/ts', 'ts-uuid');
        $this->documentManager->method('find')->willReturnMap([
            ['/cmf/example/contents/glossare/ki/krea', 'de', [], $doc],
            ['/cmf/example/contents/glossare/ts', 'de', [], $parent],
        ]);
        $this->documentManager->expects($this->once())->method('move')->with($doc, 'ts-uuid');
        $this->documentManager->expects($this->once())->method('publish')->with($doc, 'de');
        $this->documentManager->expects($this->never())->method('persist');

        $tester = new CommandTester(new PageMoveCommand($this->documentManager));
        $this->assertSame(0, $tester->execute([
            'path' => '/cmf/example/contents/glossare/ki/krea',
            'targetParent' => '/cmf/example/contents/glossare/ts',
            '--publish' => true,
        ]));
        $this->assertSame('/glossare/ki/krea', $this->json($tester)['oldUrl']);
    }
}
