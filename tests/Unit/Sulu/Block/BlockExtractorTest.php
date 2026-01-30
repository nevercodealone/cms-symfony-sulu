<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Block;

use App\Sulu\Block\BlockExtractor;
use App\Sulu\Block\BlockTypeRegistry;
use PHPUnit\Framework\TestCase;

class BlockExtractorTest extends TestCase
{
    private BlockExtractor $extractor;
    private BlockTypeRegistry $registry;

    protected function setUp(): void
    {
        $this->registry = new BlockTypeRegistry();
        $this->extractor = new BlockExtractor($this->registry);
    }

    // === Basic Extraction Tests ===

    public function testExtractBlocksReturnsEmptyArrayForEmptyXml(): void
    {
        $result = $this->extractor->extractBlocks('', 'de');

        $this->assertIsArray($result);
        $this->assertEmpty($result);
    }

    public function testExtractBlocksReturnsEmptyArrayForInvalidXml(): void
    {
        $result = $this->extractor->extractBlocks('not valid xml', 'de');

        $this->assertIsArray($result);
        $this->assertEmpty($result);
    }

    public function testExtractBlocksReturnsEmptyArrayWhenNoBlocksLength(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">Test</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertEmpty($result);
    }

    // === Simple Block Extraction ===

    public function testExtractSimpleHlDesBlock(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">hl-des</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="14">Test Headline</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-description#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="16">Test Description</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('hl-des', $result[0]['type']);
        $this->assertEquals(0, $result[0]['position']);
        $this->assertEquals('Test Headline', $result[0]['headline']);
        $this->assertEquals('Test Description', $result[0]['description']);
    }

    // === FAQ Block Extraction (uses 'faqs' not 'items') ===

    public function testExtractFaqBlockWithCorrectNestedName(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="3">faq</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-faqs#0-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-faqs#0-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="13">First Question</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-faqs#0-subline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">First Answer</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-faqs#0-headline#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="15">Second Question</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-faqs#0-subline#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="13">Second Answer</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('faq', $result[0]['type']);
        $this->assertArrayHasKey('faqs', $result[0]);
        $this->assertCount(2, $result[0]['faqs']);

        // Check first FAQ item
        $this->assertEquals('First Question', $result[0]['faqs'][0]['headline']);
        $this->assertEquals('First Answer', $result[0]['faqs'][0]['subline']); // Keep original property name

        // Check second FAQ item
        $this->assertEquals('Second Question', $result[0]['faqs'][1]['headline']);
        $this->assertEquals('Second Answer', $result[0]['faqs'][1]['subline']);
    }

    // === Table Block Extraction (uses 'rows' not 'items') ===

    public function testExtractTableBlockWithCorrectNestedName(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="5">table</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">Prices</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-columnheader1#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">Plan</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-columnheader2#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="5">Price</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-rows#0-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-rows#0-cell1#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="5">Basic</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-rows#0-cell2#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="3">$10</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-rows#0-cell1#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="3">Pro</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-rows#0-cell2#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="3">$50</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('table', $result[0]['type']);
        $this->assertEquals('Prices', $result[0]['headline']);
        $this->assertEquals('Plan', $result[0]['columnheader1']);
        $this->assertEquals('Price', $result[0]['columnheader2']);

        $this->assertArrayHasKey('rows', $result[0]);
        $this->assertCount(2, $result[0]['rows']);

        $this->assertEquals('Basic', $result[0]['rows'][0]['cell1']);
        $this->assertEquals('$10', $result[0]['rows'][0]['cell2']);
        $this->assertEquals('Pro', $result[0]['rows'][1]['cell1']);
        $this->assertEquals('$50', $result[0]['rows'][1]['cell2']);
    }

    // === Image-with-flags Block Extraction (uses 'flags' not 'items') ===

    public function testExtractImageWithFlagsBlock(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="16">image-with-flags</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="9">Languages</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-flags#0-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-flags#0-language#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="2">de</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-flags#0-url#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">/de/</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-flags#0-language#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="2">en</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-flags#0-url#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">/en/</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('image-with-flags', $result[0]['type']);
        $this->assertEquals('Languages', $result[0]['headline']);

        $this->assertArrayHasKey('flags', $result[0]);
        $this->assertCount(2, $result[0]['flags']);

        $this->assertEquals('de', $result[0]['flags'][0]['language']);
        $this->assertEquals('/de/', $result[0]['flags'][0]['url']);
        $this->assertEquals('en', $result[0]['flags'][1]['language']);
        $this->assertEquals('/en/', $result[0]['flags'][1]['url']);
    }

    // === Feature Block Extraction (uses 'items') ===

    public function testExtractFeatureBlockWithItems(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="7">feature</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-subline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">Features</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">Our Features</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#0-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#0-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="9">Feature 1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#0-description#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">Description</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('feature', $result[0]['type']);
        $this->assertEquals('Features', $result[0]['subline']);
        $this->assertEquals('Our Features', $result[0]['headline']);

        $this->assertArrayHasKey('items', $result[0]);
        $this->assertCount(1, $result[0]['items']);
        $this->assertEquals('Feature 1', $result[0]['items'][0]['headline']);
        $this->assertEquals('Description', $result[0]['items'][0]['description']); // Keep original property name
    }

    // === Hero Block Extraction (no nested items) ===

    public function testExtractHeroBlockWithAllProperties(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">hero</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="13">Hero Headline</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-description#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="16">Hero Description</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-buttonText#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="10">Learn More</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-url#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">/about</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('hero', $result[0]['type']);
        $this->assertEquals('Hero Headline', $result[0]['headline']);
        $this->assertEquals('Hero Description', $result[0]['description']);
        $this->assertEquals('Learn More', $result[0]['buttonText']);
        $this->assertEquals('/about', $result[0]['url']);
        $this->assertArrayNotHasKey('items', $result[0]);
    }

    // === Multiple Blocks ===

    public function testExtractMultipleBlocks(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">3</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">hero</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">Hero 1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="3">faq</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-faqs#1-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-faqs#1-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">Question</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-faqs#1-subline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">Answer</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#2" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">hl-des</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#2" sv:type="String" sv:multi-valued="0">
        <sv:value length="7">Content</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(3, $result);

        $this->assertEquals('hero', $result[0]['type']);
        $this->assertEquals(0, $result[0]['position']);
        $this->assertEquals('Hero 1', $result[0]['headline']);

        $this->assertEquals('faq', $result[1]['type']);
        $this->assertEquals(1, $result[1]['position']);
        $this->assertArrayHasKey('faqs', $result[1]);
        $this->assertEquals('Question', $result[1]['faqs'][0]['headline']);

        $this->assertEquals('hl-des', $result[2]['type']);
        $this->assertEquals(2, $result[2]['position']);
        $this->assertEquals('Content', $result[2]['headline']);
    }

    // === Locale Support ===

    public function testExtractBlocksWithDifferentLocale(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:en-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:en-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">hl-des</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:en-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="16">English Headline</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'en');

        $this->assertCount(1, $result);
        $this->assertEquals('English Headline', $result[0]['headline']);
    }

    public function testExtractBlocksReturnsEmptyForMismatchedLocale(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'en');

        $this->assertEmpty($result);
    }

    // === JSON Property Handling ===

    public function testExtractBlockWithJsonEncodedImage(): void
    {
        $imageJson = '{"ids":[1],"displayOption":"top"}';
        $xml = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="5">image</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-image#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="33">$imageJson</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('image', $result[0]['type']);
        $this->assertIsArray($result[0]['image']);
        $this->assertEquals([1], $result[0]['image']['ids']);
        $this->assertEquals('top', $result[0]['image']['displayOption']);
    }

    // === Multi-Valued Property Handling (snippet_selection, contact_account_selection) ===

    public function testExtractBlockWithMultiValuedSnippets(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="7">contact</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-snippets#0" sv:type="String" sv:multi-valued="true">
        <sv:value>uuid-abc-123</sv:value>
        <sv:value>uuid-def-456</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-description#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="16">Contact section</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('contact', $result[0]['type']);
        $this->assertArrayHasKey('snippets', $result[0]);
        $this->assertIsArray($result[0]['snippets']);
        $this->assertCount(2, $result[0]['snippets']);
        $this->assertEquals('uuid-abc-123', $result[0]['snippets'][0]);
        $this->assertEquals('uuid-def-456', $result[0]['snippets'][1]);
    }

    public function testExtractBlockWithJsonEncodedSnippets(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="7">contact</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-snippets#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="38">["uuid-abc-123","uuid-def-456"]</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('contact', $result[0]['type']);
        $this->assertIsArray($result[0]['snippets']);
        $this->assertCount(2, $result[0]['snippets']);
        $this->assertEquals('uuid-abc-123', $result[0]['snippets'][0]);
        $this->assertEquals('uuid-def-456', $result[0]['snippets'][1]);
    }

    public function testExtractBlockWithSingleSnippetValue(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="7">contact</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-snippets#0" sv:type="String" sv:multi-valued="true">
        <sv:value>uuid-single-123</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertIsArray($result[0]['snippets']);
        $this->assertCount(1, $result[0]['snippets']);
        $this->assertEquals('uuid-single-123', $result[0]['snippets'][0]);
    }

    public function testExtractBlockWithMultiValuedOrganisation(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="10">consultant</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-organisation#0" sv:type="String" sv:multi-valued="true">
        <sv:value>org-uuid-111</sv:value>
        <sv:value>org-uuid-222</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-description#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">Consultant</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('consultant', $result[0]['type']);
        $this->assertIsArray($result[0]['organisation']);
        $this->assertCount(2, $result[0]['organisation']);
        $this->assertEquals('org-uuid-111', $result[0]['organisation'][0]);
        $this->assertEquals('org-uuid-222', $result[0]['organisation'][1]);
    }

    public function testExtractHighlightsBlockWithMultiValuedSnippets(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="10">highlights</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-snippets#0" sv:type="String" sv:multi-valued="true">
        <sv:value>highlight-uuid-1</sv:value>
        <sv:value>highlight-uuid-2</sv:value>
        <sv:value>highlight-uuid-3</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('highlights', $result[0]['type']);
        $this->assertIsArray($result[0]['snippets']);
        $this->assertCount(3, $result[0]['snippets']);
        $this->assertEquals('highlight-uuid-1', $result[0]['snippets'][0]);
        $this->assertEquals('highlight-uuid-2', $result[0]['snippets'][1]);
        $this->assertEquals('highlight-uuid-3', $result[0]['snippets'][2]);
    }

    // === Unknown Block Type Fallback ===

    public function testExtractUnknownBlockTypeFallsBackToCommonProperties(): void
    {
        $xml = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">unknown-type</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="13">Some Headline</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-description#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="16">Some Description</sv:value>
    </sv:property>
</sv:node>
XML;

        $result = $this->extractor->extractBlocks($xml, 'de');

        $this->assertCount(1, $result);
        $this->assertEquals('unknown-type', $result[0]['type']);
        $this->assertEquals('Some Headline', $result[0]['headline']);
        $this->assertEquals('Some Description', $result[0]['description']);
    }
}
