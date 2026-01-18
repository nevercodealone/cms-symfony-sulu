<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Block;

use App\Sulu\Block\BlockExtractor;
use App\Sulu\Block\BlockTypeRegistry;
use App\Sulu\Block\BlockWriter;
use DOMDocument;
use DOMXPath;
use PHPUnit\Framework\TestCase;

class BlockWriterTest extends TestCase
{
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
     * Create a minimal PHPCR XML document with empty blocks.
     */
    private function createEmptyBlocksXml(): DOMDocument
    {
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">0</sv:value>
    </sv:property>
</sv:node>
XML);
        return $xml;
    }

    /**
     * Get XPath for a document.
     */
    private function getXpath(DOMDocument $xml): DOMXPath
    {
        $xpath = new DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
        return $xpath;
    }

    // === Basic Add Block Tests ===

    public function testAddBlockThrowsExceptionWithoutType(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage('Block must have a "type" property');

        $this->writer->addBlock($xml, $rootNode, 'de', 0, ['headline' => 'Test']);
    }

    public function testAddSimpleHlDesBlock(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'hl-des',
            'headline' => 'Test Headline',
            'description' => 'Test Description',
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('hl-des', $blocks[0]['type']);
        $this->assertEquals('Test Headline', $blocks[0]['headline']);
        $this->assertEquals('Test Description', $blocks[0]['description']);
    }

    // === FAQ Block Tests (uses 'faqs' not 'items') ===

    public function testAddFaqBlockWithFaqs(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'faq',
            'faqs' => [
                ['headline' => 'Question 1?', 'content' => 'Answer 1'],
                ['headline' => 'Question 2?', 'content' => 'Answer 2'],
            ],
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('faq', $blocks[0]['type']);
        $this->assertArrayHasKey('faqs', $blocks[0]);
        $this->assertCount(2, $blocks[0]['faqs']);

        $this->assertEquals('Question 1?', $blocks[0]['faqs'][0]['headline']);
        $this->assertEquals('Answer 1', $blocks[0]['faqs'][0]['subline']);
        $this->assertEquals('Question 2?', $blocks[0]['faqs'][1]['headline']);
        $this->assertEquals('Answer 2', $blocks[0]['faqs'][1]['subline']);
    }

    // === Table Block Tests (uses 'rows' not 'items') ===

    public function testAddTableBlockWithRows(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'table',
            'headline' => 'Pricing Table',
            'columnheader1' => 'Plan',
            'columnheader2' => 'Price',
            'columnheader3' => 'Features',
            'rows' => [
                ['cell1' => 'Basic', 'cell2' => '$10', 'cell3' => '5 users'],
                ['cell1' => 'Pro', 'cell2' => '$50', 'cell3' => 'Unlimited'],
            ],
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('table', $blocks[0]['type']);
        $this->assertEquals('Pricing Table', $blocks[0]['headline']);
        $this->assertEquals('Plan', $blocks[0]['columnheader1']);
        $this->assertEquals('Price', $blocks[0]['columnheader2']);

        $this->assertArrayHasKey('rows', $blocks[0]);
        $this->assertCount(2, $blocks[0]['rows']);

        $this->assertEquals('Basic', $blocks[0]['rows'][0]['cell1']);
        $this->assertEquals('$10', $blocks[0]['rows'][0]['cell2']);
        $this->assertEquals('Pro', $blocks[0]['rows'][1]['cell1']);
    }

    // === Image-with-flags Block Tests (uses 'flags' not 'items') ===

    public function testAddImageWithFlagsBlock(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'image-with-flags',
            'headline' => 'Languages',
            'flags' => [
                ['language' => 'de', 'url' => '/de/'],
                ['language' => 'en', 'url' => '/en/'],
            ],
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('image-with-flags', $blocks[0]['type']);
        $this->assertEquals('Languages', $blocks[0]['headline']);

        $this->assertArrayHasKey('flags', $blocks[0]);
        $this->assertCount(2, $blocks[0]['flags']);

        $this->assertEquals('de', $blocks[0]['flags'][0]['language']);
        $this->assertEquals('/de/', $blocks[0]['flags'][0]['url']);
    }

    // === Feature Block Tests (uses 'items') ===

    public function testAddFeatureBlockWithItems(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'feature',
            'subline' => 'Our Features',
            'headline' => 'Why Choose Us',
            'description' => 'Main description',
            'items' => [
                ['headline' => 'Feature 1', 'content' => 'Description 1'],
                ['headline' => 'Feature 2', 'content' => 'Description 2'],
            ],
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('feature', $blocks[0]['type']);
        $this->assertEquals('Our Features', $blocks[0]['subline']);
        $this->assertEquals('Why Choose Us', $blocks[0]['headline']);

        $this->assertArrayHasKey('items', $blocks[0]);
        $this->assertCount(2, $blocks[0]['items']);

        $this->assertEquals('Feature 1', $blocks[0]['items'][0]['headline']);
        $this->assertEquals('Description 1', $blocks[0]['items'][0]['description']);
    }

    // === Hero Block Tests (no nested items) ===

    public function testAddHeroBlock(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'hero',
            'headline' => 'Welcome',
            'description' => 'Hero description',
            'buttonText' => 'Learn More',
            'url' => '/about',
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('hero', $blocks[0]['type']);
        $this->assertEquals('Welcome', $blocks[0]['headline']);
        $this->assertEquals('Hero description', $blocks[0]['description']);
        $this->assertEquals('Learn More', $blocks[0]['buttonText']);
        $this->assertEquals('/about', $blocks[0]['url']);
    }

    // === Multiple Blocks ===

    public function testAddMultipleBlocks(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'hero',
            'headline' => 'Hero Block',
        ]);

        $this->writer->addBlock($xml, $rootNode, 'de', 1, [
            'type' => 'faq',
            'faqs' => [
                ['headline' => 'Question?', 'content' => 'Answer'],
            ],
        ]);

        $this->writer->addBlock($xml, $rootNode, 'de', 2, [
            'type' => 'hl-des',
            'headline' => 'Content Block',
            'description' => 'Some content',
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '3';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(3, $blocks);
        $this->assertEquals('hero', $blocks[0]['type']);
        $this->assertEquals('faq', $blocks[1]['type']);
        $this->assertEquals('hl-des', $blocks[2]['type']);
    }

    // === Update Block Tests ===

    public function testUpdateBlockProperties(): void
    {
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="6">hl-des</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">Old Headline</sv:value>
    </sv:property>
</sv:node>
XML);

        $xpath = $this->getXpath($xml);

        $this->writer->updateBlock($xml, $xpath, 'de', 0, 'hl-des', [
            'headline' => 'New Headline',
            'description' => 'New Description',
        ]);

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertEquals('New Headline', $blocks[0]['headline']);
        $this->assertEquals('New Description', $blocks[0]['description']);
    }

    // === JSON Encoding Tests ===

    public function testAddBlockWithJsonEncodedImage(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'image',
            'image' => ['ids' => [1, 2], 'displayOption' => 'top'],
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertIsArray($blocks[0]['image']);
        $this->assertEquals([1, 2], $blocks[0]['image']['ids']);
        $this->assertEquals('top', $blocks[0]['image']['displayOption']);
    }

    // === Locale Support ===

    public function testAddBlockWithDifferentLocale(): void
    {
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:en-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">0</sv:value>
    </sv:property>
</sv:node>
XML);

        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'en', 0, [
            'type' => 'hl-des',
            'headline' => 'English Headline',
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:en-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'en');

        $this->assertCount(1, $blocks);
        $this->assertEquals('English Headline', $blocks[0]['headline']);
    }

    // === Unknown Block Type Fallback ===

    public function testAddUnknownBlockTypeFallsBackToCommonProperties(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'unknown-custom-block',
            'headline' => 'Custom Headline',
            'description' => 'Custom Description',
            'url' => '/custom',
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('unknown-custom-block', $blocks[0]['type']);
        $this->assertEquals('Custom Headline', $blocks[0]['headline']);
        $this->assertEquals('Custom Description', $blocks[0]['description']);
        $this->assertEquals('/custom', $blocks[0]['url']);
    }
}
