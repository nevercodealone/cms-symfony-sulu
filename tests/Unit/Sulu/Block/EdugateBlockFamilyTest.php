<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Block;

use App\Sulu\Block\BlockExtractor;
use App\Sulu\Block\BlockTypeRegistry;
use App\Sulu\Block\BlockWriter;
use DOMDocument;
use DOMXPath;
use PHPUnit\Framework\TestCase;

/**
 * Round-trips every block type a training-detail page can contain.
 *
 * Block type NAMES collide across the tailwind and edugate block libraries with different
 * field sets (quote, team, list), and PHPCR storage records only the bare type string, so
 * schemas must resolve per template. Before this was family-aware, reading a training-detail
 * page returned empty quote blocks and dropped html/date/schedule content entirely.
 *
 * @see BlockTypeRegistry::EDUGATE_OVERRIDES
 */
class EdugateBlockFamilyTest extends TestCase
{
    private const E = BlockTypeRegistry::FAMILY_EDUGATE;
    private const T = BlockTypeRegistry::FAMILY_TAILWIND;

    private BlockWriter $writer;
    private BlockExtractor $extractor;
    private BlockTypeRegistry $registry;

    protected function setUp(): void
    {
        $this->registry = new BlockTypeRegistry();
        $this->writer = new BlockWriter($this->registry);
        $this->extractor = new BlockExtractor($this->registry);
    }

    /**
     * @return array<string, array{0: array<string, mixed>}>
     */
    public static function edugateBlockProvider(): array
    {
        return [
            'hl-des' => [[
                'type' => 'hl-des',
                'headline' => 'Was du lernst',
                'description' => 'Du schreibst ab Tag eins eigene Tests.',
            ]],
            'quote' => [[
                'type' => 'quote',
                'headline' => 'Bestes Training seit Jahren',
                'description' => 'Sofort umsetzbar.',
                'name' => 'Maria Schmidt',
                'company' => 'Beispiel GmbH',
            ]],
            'buttons' => [[
                'type' => 'buttons',
                'buttonText' => 'Jetzt buchen',
                'downloadText' => 'Agenda als PDF',
                'pdfTarget' => ['ids' => [123]],
            ]],
            'gallery' => [[
                'type' => 'gallery',
                'headline' => 'Impressionen',
                'image' => ['ids' => [492, 483]],
            ]],
            'date' => [[
                'type' => 'date',
                'headline' => 'Termine',
                'date' => '12. bis 13. M&auml;rz 2026',
            ]],
            'html' => [[
                'type' => 'html',
                'html' => '<iframe src="https://example.test/embed"></iframe>',
            ]],
            'team' => [[
                'type' => 'team',
                'subline' => 'Deine Trainer',
                'headline' => 'Wer dich begleitet',
            ]],
            'youtube-from-channel' => [[
                'type' => 'youtube-from-channel',
                'headline' => 'Reviews',
                'subline' => 'Stimmen',
                'playlistid' => 'PLKrKzhBjw2Y88YH',
            ]],
            'list' => [[
                'type' => 'list',
                'headline' => 'Voraussetzungen',
                'items' => [
                    ['description' => 'Grundkenntnisse in PHP'],
                    ['description' => 'Laptop mit Docker'],
                ],
            ]],
            'schedule' => [[
                'type' => 'schedule',
                'headline' => 'Ablauf',
                'dayOneHeadline' => 'Tag 1',
                'dayOneItems' => [
                    ['title' => 'Setup', 'status' => 'theory'],
                    ['title' => 'Pair Programming', 'status' => 'team'],
                ],
                'dayTwoHeadline' => 'Tag 2',
                'dayTwoItems' => [
                    ['title' => 'Refactoring', 'status' => 'live'],
                ],
            ]],
        ];
    }

    /**
     * @param array<string, mixed> $block
     */
    #[\PHPUnit\Framework\Attributes\DataProvider('edugateBlockProvider')]
    public function testEdugateBlockRoundTrips(array $block): void
    {
        $extracted = $this->roundTrip($block);

        foreach ($block as $key => $expected) {
            $this->assertArrayHasKey($key, $extracted, "'{$key}' was lost in the round-trip");
            $this->assertSame($expected, $extracted[$key], "'{$key}' did not survive the round-trip");
        }
    }

    public function testEveryEdugateTypeIsCovered(): void
    {
        $covered = array_keys(self::edugateBlockProvider());
        sort($covered);
        $expected = BlockTypeRegistry::EDUGATE_TYPES;
        sort($expected);

        $this->assertSame($expected, $covered, 'Every edugate block type needs round-trip coverage');
    }

    public function testScheduleKeepsBothDayCollectionsSeparate(): void
    {
        $extracted = $this->roundTrip(self::edugateBlockProvider()['schedule'][0]);

        $this->assertCount(2, $extracted['dayOneItems']);
        $this->assertCount(1, $extracted['dayTwoItems']);
        $this->assertSame('Setup', $extracted['dayOneItems'][0]['title']);
        $this->assertSame('live', $extracted['dayTwoItems'][0]['status']);
    }

    public function testQuoteResolvesDifferentlyPerFamily(): void
    {
        $this->assertSame(
            ['headline', 'description', 'name', 'company'],
            $this->registry->getProperties('quote', self::E),
        );
        $this->assertSame(
            ['text', 'author', 'role', 'source', 'date', 'url'],
            $this->registry->getProperties('quote', self::T),
        );
    }

    public function testTeamUsesSublineOnEdugateAndDescriptionOnTailwind(): void
    {
        $this->assertContains('subline', $this->registry->getProperties('team', self::E));
        $this->assertNotContains('description', $this->registry->getProperties('team', self::E));
        $this->assertContains('description', $this->registry->getProperties('team', self::T));
    }

    public function testSharedTypesAreNotDuplicatedAcrossFamilies(): void
    {
        // hl-des and youtube-from-channel are declared once, in SCHEMAS, and resolve through
        // the edugate fallback - they must not appear in EDUGATE_OVERRIDES.
        foreach (['hl-des', 'youtube-from-channel'] as $type) {
            $this->assertArrayNotHasKey($type, BlockTypeRegistry::EDUGATE_OVERRIDES);
            $this->assertSame(
                $this->registry->getProperties($type, self::T),
                $this->registry->getProperties($type, self::E),
            );
        }
    }

    public function testOmittingFamilyKeepsTailwindBehaviour(): void
    {
        $this->assertSame(
            $this->registry->getProperties('quote', self::T),
            $this->registry->getProperties('quote'),
        );
        $this->assertTrue($this->registry->hasType('faq'));
        $this->assertFalse($this->registry->hasType('faq', self::E));
    }

    public function testReadFallsBackToTheOtherFamilySoLegacyBlocksStayVisible(): void
    {
        // Two published training-detail pages already carry tailwind faq blocks. Reading
        // them must surface their content rather than silently dropping it.
        $schema = $this->registry->getSchemaForRead('faq', self::E);

        $this->assertNotNull($schema);
        $this->assertSame('faqs', $schema['nested']);
    }

    /**
     * @param array<string, mixed> $block
     * @return array<string, mixed>
     */
    private function roundTrip(array $block): array
    {
        $xml = new DOMDocument();
        $xml->loadXML(
            '<?xml version="1.0" encoding="UTF-8"?>'
            . '<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0"></sv:node>'
        );

        $xpath = new DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
        $rootNode = $xpath->query('/sv:node')->item(0);
        self::assertNotNull($rootNode);

        $this->writer->addProperty($xml, $rootNode, 'i18n:de-blocks-length', '1', 'Long');
        $this->writer->addBlock($xml, $rootNode, 'de', 0, $block, self::E);

        $blocks = $this->extractor->extractBlocks((string) $xml->saveXML(), 'de', self::E);
        self::assertCount(1, $blocks);

        return $blocks[0];
    }
}
