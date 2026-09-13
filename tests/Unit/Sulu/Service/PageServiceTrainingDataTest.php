<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Logger\McpActivityLogger;
use App\Sulu\Service\PageService;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * Covers the training-detail base data: the fields that live OUTSIDE the `blocks`
 * collection (paymenturl, date, trainerItems, factItems).
 *
 * Also pins updateSeo() behaviour, since both now share applyFieldMap().
 */
class PageServiceTrainingDataTest extends TestCase
{
    private Connection&MockObject $connection;
    private PageService $pageService;

    private const TRAINING_XML = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="16">PHPUnit Workshop</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-template" sv:type="String" sv:multi-valued="0">
        <sv:value length="15">training-detail</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-paymenturl" sv:type="String" sv:multi-valued="0">
        <sv:value length="23">https://shop.test/buy/1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-trainerItems" sv:type="String" sv:multi-valued="1">
        <sv:value length="3">c38</sv:value>
        <sv:value length="2">c1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="9">factItems</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="10">Teilnehmer</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-description#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="15">Max. 6 Personen</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-type#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="9">factItems</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-headline#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">Kosten</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-factItems-description#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">1386,-</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">0</sv:value>
    </sv:property>
</sv:node>
XML;

    private const TAILWIND_XML = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">Team</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-template" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">tailwind</sv:value>
    </sv:property>
</sv:node>
XML;

    protected function setUp(): void
    {
        $this->connection = $this->createMock(Connection::class);
        $this->pageService = new PageService(
            $this->connection,
            $this->createMock(McpActivityLogger::class),
        );
    }

    public function testGetTrainingDataReadsFieldsOutsideTheBlocksCollection(): void
    {
        $data = $this->pageService->getTrainingData(self::TRAINING_XML, 'de');

        $this->assertSame('https://shop.test/buy/1', $data['paymenturl']);
        $this->assertSame(['c38', 'c1'], $data['trainerItems']);
        $this->assertCount(2, $data['factItems']);
        $this->assertSame('Teilnehmer', $data['factItems'][0]['headline']);
        $this->assertSame('Max. 6 Personen', $data['factItems'][0]['description']);
        $this->assertSame('Kosten', $data['factItems'][1]['headline']);
    }

    public function testGetPageExposesTrainingDataForTrainingDetailPages(): void
    {
        $this->connection->method('fetchAssociative')->willReturn([
            'path' => '/cmf/example/contents/php-training/x',
            'props' => self::TRAINING_XML,
        ]);

        $page = $this->pageService->getPage('/cmf/example/contents/php-training/x', 'de');

        $this->assertNotNull($page);
        $this->assertSame('training-detail', $page['template']);
        $this->assertArrayHasKey('trainingData', $page);
        $this->assertSame('https://shop.test/buy/1', $page['trainingData']['paymenturl']);
    }

    public function testGetPageOmitsTrainingDataForOtherTemplates(): void
    {
        $this->connection->method('fetchAssociative')->willReturn([
            'path' => '/cmf/example/contents/ueber-uns/nca-team',
            'props' => self::TAILWIND_XML,
        ]);

        $page = $this->pageService->getPage('/cmf/example/contents/ueber-uns/nca-team', 'de');

        $this->assertNotNull($page);
        $this->assertArrayNotHasKey('trainingData', $page);
    }

    public function testUpdateTrainingDataRejectsNonTrainingDetailPages(): void
    {
        $this->connection->method('fetchAssociative')->willReturn(['props' => self::TAILWIND_XML]);
        $this->connection->expects($this->never())->method('executeStatement');

        $result = $this->pageService->updateTrainingData(
            '/cmf/example/contents/ueber-uns/nca-team',
            ['paymenturl' => 'https://shop.test/nope'],
            'de',
        );

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("not 'training-detail'", $result['message']);
    }

    public function testUpdateTrainingDataRejectsMissingPage(): void
    {
        $this->connection->method('fetchAssociative')->willReturn(false);

        $result = $this->pageService->updateTrainingData('/nope', ['paymenturl' => 'x'], 'de');

        $this->assertFalse($result['success']);
        $this->assertSame('Page not found', $result['message']);
    }

    public function testUpdateTrainingDataRejectsEmptyPayload(): void
    {
        $this->connection->method('fetchAssociative')->willReturn(['props' => self::TRAINING_XML]);
        $this->connection->expects($this->never())->method('executeStatement');

        $result = $this->pageService->updateTrainingData('/x', [], 'de');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('at least one of', $result['message']);
    }

    public function testUpdateTrainingDataWritesScalarsTrainersAndFacts(): void
    {
        $this->connection->method('fetchAssociative')->willReturn(['props' => self::TRAINING_XML]);

        $written = [];
        $this->connection->method('executeStatement')
            ->willReturnCallback(function (string $sql, array $params) use (&$written): int {
                $written[] = $params[0];

                return 1;
            });

        $result = $this->pageService->updateTrainingData('/x', [
            'paymenturl' => 'https://shop.test/new',
            'date' => '12. bis 13. Maerz 2026',
            'trainerItems' => ['c7'],
            'factItems' => [['headline' => 'Dauer', 'description' => '2 Tage']],
        ], 'de');

        $this->assertTrue($result['success'], $result['message']);

        // Both workspaces get the same XML.
        $this->assertCount(2, $written);
        $this->assertSame($written[0], $written[1]);

        $data = $result['trainingData'];
        $this->assertSame('https://shop.test/new', $data['paymenturl']);
        $this->assertSame('12. bis 13. Maerz 2026', $data['date']);
        $this->assertSame(['c7'], $data['trainerItems']);
        $this->assertCount(1, $data['factItems'], 'factItems must be replaced, not appended to');
        $this->assertSame('Dauer', $data['factItems'][0]['headline']);
    }

    public function testTrainerItemsAreStoredAsMultiValuedStringNotReference(): void
    {
        // The Sulu admin writes contact_account_selection as a multi-valued String of
        // c<id> refs. Writing a PHPCR Reference here would diverge from the admin.
        $this->connection->method('fetchAssociative')->willReturn(['props' => self::TRAINING_XML]);

        $written = '';
        $this->connection->method('executeStatement')
            ->willReturnCallback(function (string $sql, array $params) use (&$written): int {
                $written = $params[0];

                return 1;
            });

        $this->pageService->updateTrainingData('/x', ['trainerItems' => ['c7', 'c9']], 'de');

        $this->assertMatchesRegularExpression(
            '/sv:name="i18n:de-trainerItems" sv:type="String" sv:multi-valued="1"/',
            $written,
        );
    }

    public function testClearingAScalarRemovesTheProperty(): void
    {
        $this->connection->method('fetchAssociative')->willReturn(['props' => self::TRAINING_XML]);

        $written = '';
        $this->connection->method('executeStatement')
            ->willReturnCallback(function (string $sql, array $params) use (&$written): int {
                $written = $params[0];

                return 1;
            });

        $result = $this->pageService->updateTrainingData('/x', ['paymenturl' => null], 'de');

        $this->assertTrue($result['success']);
        $this->assertStringNotContainsString('i18n:de-paymenturl', $written);
        $this->assertNull($result['trainingData']['paymenturl']);
    }

    public function testUpdateSeoStillWritesAllThreeFieldsAfterTheHelperExtraction(): void
    {
        // Characterization test: updateSeo() and updateTrainingData() now share
        // applyFieldMap(), so this pins the pre-existing SEO behaviour.
        $this->connection->method('fetchAssociative')->willReturn(['props' => self::TRAINING_XML]);

        $written = '';
        $this->connection->method('executeStatement')
            ->willReturnCallback(function (string $sql, array $params) use (&$written): int {
                $written = $params[0];

                return 1;
            });

        $result = $this->pageService->updateSeo('/x', [
            'seoTitle' => 'Titel',
            'seoDescription' => 'Beschreibung',
            'seoKeywords' => 'a, b',
        ], 'de');

        $this->assertTrue($result['success']);
        $this->assertSame('Titel', $result['seo']['title']);
        $this->assertSame('Beschreibung', $result['seo']['description']);
        $this->assertSame('a, b', $result['seo']['keywords']);
        $this->assertStringContainsString('i18n:de-seo-title', $written);
    }

    public function testUpdateSeoClearsAFieldWhenGivenNull(): void
    {
        $xml = str_replace(
            '<sv:property sv:name="i18n:de-paymenturl"',
            '<sv:property sv:name="i18n:de-seo-title" sv:type="String" sv:multi-valued="0">'
            . '<sv:value length="3">Old</sv:value></sv:property>'
            . '<sv:property sv:name="i18n:de-paymenturl"',
            self::TRAINING_XML,
        );
        $this->connection->method('fetchAssociative')->willReturn(['props' => $xml]);

        $written = '';
        $this->connection->method('executeStatement')
            ->willReturnCallback(function (string $sql, array $params) use (&$written): int {
                $written = $params[0];

                return 1;
            });

        $this->pageService->updateSeo('/x', ['seoTitle' => null], 'de');

        $this->assertStringNotContainsString('i18n:de-seo-title', $written);
    }
}
