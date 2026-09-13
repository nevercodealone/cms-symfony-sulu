<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Logger\McpActivityLogger;
use App\Sulu\Service\PageService;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * Covers switching a page between the `tailwind` and `training-detail` templates.
 *
 * The switch must be lossless: only the template property changes, so switching back restores
 * the page exactly. Nothing is converted and nothing is purged - which is also what Sulu's own
 * StructureSubscriber does on a template change.
 */
class PageServiceSwitchTemplateTest extends TestCase
{
    private Connection&MockObject $connection;
    private PageService $pageService;

    private const TAILWIND_XML = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="9">Test Page</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">hl-des</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="5">Intro</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="3">faq</sv:value>
    </sv:property>
</sv:node>
XML;

    private const TRAINING_DETAIL_XML = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">Workshop</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-template" sv:type="String" sv:multi-valued="0">
        <sv:value length="15">training-detail</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-paymenturl" sv:type="String" sv:multi-valued="0">
        <sv:value length="23">https://shop.test/buy/1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="9">factItems</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="10">Teilnehmer</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">hl-des</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">schedule</sv:value>
    </sv:property>
</sv:node>
XML;

    /** @var array<int, string> */
    private array $written = [];

    protected function setUp(): void
    {
        $this->connection = $this->createMock(Connection::class);
        $this->pageService = new PageService(
            $this->connection,
            $this->createMock(McpActivityLogger::class),
        );
        $this->written = [];
    }

    private function givenPage(string $xml): void
    {
        $this->connection->method('fetchAssociative')->willReturn(['props' => $xml]);
        $this->connection->method('executeStatement')
            ->willReturnCallback(function (string $sql, array $params): int {
                $this->written[] = $params[0];

                return 1;
            });
    }

    public function testSwitchToTrainingDetailWritesTheTemplateWithMatchingLength(): void
    {
        $this->givenPage(self::TAILWIND_XML);

        $result = $this->pageService->switchTemplate('/p', 'training-detail', 'de');

        $this->assertTrue($result['success'], $result['message']);
        $this->assertSame('tailwind', $result['from']);
        $this->assertSame('training-detail', $result['to']);
        $this->assertStringContainsString(
            '<sv:value length="15">training-detail</sv:value>',
            $this->written[0],
        );
    }

    public function testSwitchBackToTailwindWritesTheShorterLength(): void
    {
        $this->givenPage(self::TRAINING_DETAIL_XML);

        $result = $this->pageService->switchTemplate('/p', 'tailwind', 'de');

        $this->assertTrue($result['success']);
        $this->assertStringContainsString(
            '<sv:value length="8">tailwind</sv:value>',
            $this->written[0],
        );
    }

    public function testBothWorkspacesGetTheSameXml(): void
    {
        $this->givenPage(self::TAILWIND_XML);

        $this->pageService->switchTemplate('/p', 'training-detail', 'de');

        $this->assertCount(2, $this->written);
        $this->assertSame($this->written[0], $this->written[1]);
    }

    public function testSwitchIsLosslessForBlocksAndTemplateSpecificFields(): void
    {
        $this->givenPage(self::TRAINING_DETAIL_XML);

        $this->pageService->switchTemplate('/p', 'tailwind', 'de');
        $written = $this->written[0];

        // Nothing is purged - switching back must restore the page exactly.
        $this->assertStringContainsString('i18n:de-paymenturl', $written);
        $this->assertStringContainsString('i18n:de-factItems-length', $written);
        $this->assertStringContainsString('i18n:de-factItems-headline#0', $written);
        $this->assertStringContainsString('i18n:de-blocks-type#1', $written);
        $this->assertStringContainsString('Teilnehmer', $written);
    }

    public function testSwitchingToTheSameTemplateIsANoOp(): void
    {
        $this->connection->method('fetchAssociative')->willReturn(['props' => self::TAILWIND_XML]);
        $this->connection->expects($this->never())->method('executeStatement');

        $result = $this->pageService->switchTemplate('/p', 'tailwind', 'de');

        $this->assertTrue($result['success']);
        $this->assertStringContainsString('nothing changed', $result['message']);
    }

    /**
     * @return array<string, array{0: string}>
     */
    public static function unsupportedTemplateProvider(): array
    {
        return [
            'no blocks collection at all' => ['training'],
            'named collections only' => ['conference'],
            'third block set, not modelled' => ['default'],
            'nonsense' => ['does-not-exist'],
        ];
    }

    #[\PHPUnit\Framework\Attributes\DataProvider('unsupportedTemplateProvider')]
    public function testUnsupportedTargetsAreRejectedWithoutWriting(string $template): void
    {
        $this->connection->expects($this->never())->method('executeStatement');

        $result = $this->pageService->switchTemplate('/p', $template, 'de');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Cannot switch to template '{$template}'", $result['message']);
        $this->assertStringContainsString('tailwind, training-detail', $result['message']);
    }

    public function testMissingPageIsReported(): void
    {
        $this->connection->method('fetchAssociative')->willReturn(false);
        $this->connection->expects($this->never())->method('executeStatement');

        $result = $this->pageService->switchTemplate('/nope', 'training-detail', 'de');

        $this->assertFalse($result['success']);
        $this->assertSame('Page not found', $result['message']);
    }

    public function testBlocksWithNoTemplateInTheNewLayoutAreReported(): void
    {
        $this->givenPage(self::TRAINING_DETAIL_XML);

        // `schedule` is edugate-only; `hl-des` exists in both.
        $result = $this->pageService->switchTemplate('/p', 'tailwind', 'de');

        $this->assertSame(
            [['position' => 1, 'type' => 'schedule']],
            $result['blocksNotInNewTemplate'],
        );
        $this->assertStringContainsString('will not render', $result['message']);
        $this->assertStringContainsString('no content was lost', $result['message']);
    }

    public function testAFullyCompatiblePageReportsNoProblemBlocks(): void
    {
        $this->givenPage(self::TAILWIND_XML);

        // hl-des and faq both exist in the tailwind set.
        $result = $this->pageService->switchTemplate('/p', 'training-detail', 'de');

        // faq is tailwind-only, so it IS reported when moving to training-detail.
        $this->assertSame(
            [['position' => 1, 'type' => 'faq']],
            $result['blocksNotInNewTemplate'],
        );
    }
}
