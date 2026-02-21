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

    // === Heroslider Images Round-Trip Test ===

    public function testAddHerosliderBlockWithImages(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'heroslider',
            'headline' => 'Slider Title',
            'description' => '<p>Slider description.</p>',
            'pageurl1' => '/page1',
            'pageurl2' => '/page2',
            'images' => ['ids' => [100, 101], 'displayOption' => 'top'],
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Extract and verify round-trip
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('heroslider', $blocks[0]['type']);
        $this->assertEquals('Slider Title', $blocks[0]['headline']);
        $this->assertArrayHasKey('images', $blocks[0]);
        $this->assertIsArray($blocks[0]['images']);
        $this->assertEquals([100, 101], $blocks[0]['images']['ids']);
        $this->assertEquals('top', $blocks[0]['images']['displayOption']);
    }

    // === PHPCR Reference Property Tests ===

    public function testAddContactBlockWritesSnippetsAsReference(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'contact',
            'snippets' => ['cdba3044-9725-41c0-8056-0437dfae2841'],
            'description' => '<p>Contact us.</p>',
        ]);

        // Verify raw XML structure: sv:type="Reference", sv:multi-valued="1"
        $propNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-snippets#0"]');
        $this->assertSame(1, $propNodes->length, 'snippets property should exist');

        $prop = $propNodes->item(0);
        $this->assertSame('Reference', $prop->getAttribute('sv:type'));
        $this->assertSame('1', $prop->getAttribute('sv:multi-valued'));

        // Verify single <sv:value> with UUID (not JSON)
        $valueNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-snippets#0"]/sv:value');
        $this->assertSame(1, $valueNodes->length);
        $this->assertSame('cdba3044-9725-41c0-8056-0437dfae2841', $valueNodes->item(0)->nodeValue);

        // Round-trip: extractor should read it back correctly
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        $lengthNodes->item(0)->nodeValue = '1';
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertSame('contact', $blocks[0]['type']);
        $this->assertSame(['cdba3044-9725-41c0-8056-0437dfae2841'], $blocks[0]['snippets']);
    }

    public function testAddHighlightsBlockWritesSnippetsAsReference(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $uuids = [
            'cdba3044-9725-41c0-8056-0437dfae2841',
            '4499c20b-6de3-4999-9c85-cab9deeb789b',
            'e3175c1c-0530-43fd-9e18-b5e83794b1f1',
        ];

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'highlights',
            'snippets' => $uuids,
        ]);

        // Verify raw XML: Reference type, multi-valued
        $prop = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-snippets#0"]')->item(0);
        $this->assertSame('Reference', $prop->getAttribute('sv:type'));
        $this->assertSame('1', $prop->getAttribute('sv:multi-valued'));

        // Verify 3 separate <sv:value> nodes
        $valueNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-snippets#0"]/sv:value');
        $this->assertSame(3, $valueNodes->length);
        $this->assertSame($uuids[0], $valueNodes->item(0)->nodeValue);
        $this->assertSame($uuids[1], $valueNodes->item(1)->nodeValue);
        $this->assertSame($uuids[2], $valueNodes->item(2)->nodeValue);
    }

    public function testAddConsultantBlockWritesOrganisationAsReference(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'consultant',
            'organisation' => ['a1b2c3d4-e5f6-7890-abcd-ef1234567890'],
            'description' => '<p>Our consultant.</p>',
        ]);

        // Verify raw XML: Reference type
        $prop = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-organisation#0"]')->item(0);
        $this->assertSame('Reference', $prop->getAttribute('sv:type'));
        $this->assertSame('1', $prop->getAttribute('sv:multi-valued'));

        $valueNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-organisation#0"]/sv:value');
        $this->assertSame(1, $valueNodes->length);
        $this->assertSame('a1b2c3d4-e5f6-7890-abcd-ef1234567890', $valueNodes->item(0)->nodeValue);
    }

    public function testAddTeamBlockWritesOrganisationAsReference(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $orgUuids = [
            'aaaa1111-bbbb-2222-cccc-333344445555',
            'ffff6666-eeee-7777-dddd-888899990000',
        ];

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'team',
            'headline' => 'Our Team',
            'description' => '<p>Meet the team.</p>',
            'organisation' => $orgUuids,
        ]);

        // Verify Reference type with 2 values
        $prop = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-organisation#0"]')->item(0);
        $this->assertSame('Reference', $prop->getAttribute('sv:type'));
        $this->assertSame('1', $prop->getAttribute('sv:multi-valued'));

        $valueNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-organisation#0"]/sv:value');
        $this->assertSame(2, $valueNodes->length);
        $this->assertSame($orgUuids[0], $valueNodes->item(0)->nodeValue);
        $this->assertSame($orgUuids[1], $valueNodes->item(1)->nodeValue);
    }

    public function testUpdateBlockUpdatesSnippetsAsReference(): void
    {
        // Start with a contact block that has old String-format snippets
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="7">contact</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-snippets#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="38">["cdba3044-9725-41c0-8056-0437dfae2841"]</sv:value>
    </sv:property>
</sv:node>
XML);

        $xpath = $this->getXpath($xml);

        $newUuid = '4499c20b-6de3-4999-9c85-cab9deeb789b';
        $this->writer->updateBlock($xml, $xpath, 'de', 0, 'contact', [
            'snippets' => [$newUuid],
        ]);

        // Verify old String property was replaced with Reference
        $prop = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-snippets#0"]')->item(0);
        $this->assertSame('Reference', $prop->getAttribute('sv:type'));
        $this->assertSame('1', $prop->getAttribute('sv:multi-valued'));

        $valueNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-snippets#0"]/sv:value');
        $this->assertSame(1, $valueNodes->length);
        $this->assertSame($newUuid, $valueNodes->item(0)->nodeValue);
    }

    public function testAddContactBlockWithEmptySnippetsSkipsProperty(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'contact',
            'snippets' => [],
            'description' => '<p>No snippets here.</p>',
        ]);

        // Verify no snippets property was created
        $propNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-snippets#0"]');
        $this->assertSame(0, $propNodes->length, 'Empty snippets array should not create a property node');
    }

    public function testRoundTripContactBlockSnippetsPreserved(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $uuids = [
            'cdba3044-9725-41c0-8056-0437dfae2841',
            '4499c20b-6de3-4999-9c85-cab9deeb789b',
        ];

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'contact',
            'snippets' => $uuids,
            'description' => '<p>Full round-trip test.</p>',
        ]);

        // Update length for extraction
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        $lengthNodes->item(0)->nodeValue = '1';

        // Extract and verify full round-trip
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertSame('contact', $blocks[0]['type']);
        $this->assertSame($uuids, $blocks[0]['snippets']);
        $this->assertSame('<p>Full round-trip test.</p>', $blocks[0]['description']);
    }

    // === Code Value Encoding Tests ===

    /**
     * Helper: call private encodeCodeValue via reflection.
     */
    private function callEncodeCodeValue(string $value): string
    {
        $method = new \ReflectionMethod(BlockWriter::class, 'encodeCodeValue');

        return $method->invoke($this->writer, $value);
    }

    public function testEncodeCodeValueEscapesHtmlTags(): void
    {
        $result = $this->callEncodeCodeValue('<div class="foo">');

        $this->assertStringContainsString('&lt;div class=&quot;foo&quot;&gt;', $result);
    }

    public function testEncodeCodeValueConvertsNewlines(): void
    {
        $result = $this->callEncodeCodeValue("line1\nline2");

        $this->assertStringContainsString('line1<br>line2', $result);
    }

    public function testEncodeCodeValueConvertsLeadingSpaces(): void
    {
        $result = $this->callEncodeCodeValue("  indented");

        $this->assertStringContainsString('&nbsp;&nbsp;indented', $result);
    }

    public function testEncodeCodeValueWrapsInParagraph(): void
    {
        $result = $this->callEncodeCodeValue('echo "hello";');

        $this->assertStringStartsWith('<p>', $result);
        $this->assertStringEndsWith('</p>', $result);
    }

    public function testEncodeCodeValueSkipsAlreadyEncoded(): void
    {
        $input = '<p>echo &lt;strong&gt;&quot;hello&quot;&lt;/strong&gt;;</p>';

        $result = $this->callEncodeCodeValue($input);

        $this->assertSame($input, $result);
    }

    public function testAddHeadlineParagraphsCodeBlockRoundTrip(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'headline-paragraphs',
            'headline' => 'HTML Tutorial',
            'items' => [
                [
                    'type' => 'code',
                    'code' => '<div class="container"><p>Hello</p></div>',
                    'language' => 'html',
                ],
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
        $this->assertEquals('headline-paragraphs', $blocks[0]['type']);
        $this->assertCount(1, $blocks[0]['items']);
        $this->assertEquals('code', $blocks[0]['items'][0]['type']);

        // The code should be HTML-escaped and wrapped in <p>
        $code = $blocks[0]['items'][0]['code'];
        $this->assertStringStartsWith('<p>', $code);
        $this->assertStringContainsString('&lt;div', $code);
        $this->assertStringContainsString('&lt;p&gt;', $code);
    }

    // === HTML-Raw Block Tests ===

    /**
     * Test that adding an html-raw block correctly stores the html property.
     *
     * Regression test for: html property not being persisted via MCP.
     */
    public function testAddHtmlRawBlockWritesHtmlProperty(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $htmlContent = '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>';

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'html-raw',
            'html' => $htmlContent,
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Verify raw XML structure
        $htmlProp = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-html#0"]/sv:value');
        $this->assertSame(1, $htmlProp->length, 'html property should exist in XML');
        $this->assertSame($htmlContent, $htmlProp->item(0)->nodeValue);

        // Extract and verify round-trip
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('html-raw', $blocks[0]['type']);
        $this->assertArrayHasKey('html', $blocks[0], 'html property should be extracted');
        $this->assertEquals($htmlContent, $blocks[0]['html']);
    }

    /**
     * Test that updating an html-raw block correctly updates the html property.
     *
     * This is the actual bug: mapPropertyName() didn't include 'html', so
     * updateBlock() silently ignored updates to the html property.
     *
     * Regression test for: MCP client thinks update succeeded but html not persisted.
     */
    public function testUpdateHtmlRawBlockUpdatesHtmlProperty(): void
    {
        // Start with an existing html-raw block
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">html-raw</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-html#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="20">Old HTML content</sv:value>
    </sv:property>
</sv:node>
XML);

        $xpath = $this->getXpath($xml);

        $newHtmlContent = '<iframe src="https://www.youtube.com/embed/NEW_VIDEO" frameborder="0" allowfullscreen></iframe>';

        $this->writer->updateBlock($xml, $xpath, 'de', 0, 'html-raw', [
            'html' => $newHtmlContent,
        ]);

        // Extract and verify the update took effect
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('html-raw', $blocks[0]['type']);
        $this->assertArrayHasKey('html', $blocks[0], 'html property should exist');
        $this->assertEquals($newHtmlContent, $blocks[0]['html'], 'html property should be updated to new value');
        $this->assertNotEquals('Old HTML content', $blocks[0]['html'], 'old html content should be replaced');
    }

    /**
     * Test that html-raw block round-trips correctly (add then read).
     */
    public function testHtmlRawBlockRoundTrip(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $htmlContent = '<div class="embed-container"><script src="https://example.com/widget.js"></script></div>';

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'html-raw',
            'html' => $htmlContent,
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        if ($lengthNodes !== false && $lengthNodes->length > 0) {
            $lengthNodes->item(0)->nodeValue = '1';
        }

        // Round-trip: extract, verify, update, extract again
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');
        $this->assertEquals($htmlContent, $blocks[0]['html']);

        // Now update with new content
        $newHtml = '<embed src="https://example.com/video.swf">';
        $this->writer->updateBlock($xml, $xpath, 'de', 0, 'html-raw', ['html' => $newHtml]);

        $updatedBlocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');
        $this->assertEquals($newHtml, $updatedBlocks[0]['html']);
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

    // === Schema-Driven Property Validation Tests ===

    /**
     * Test that updateBlock uses schema for property validation.
     *
     * This verifies that only properties defined in the schema are written.
     */
    public function testUpdateBlockUsesSchemaForPropertyValidation(): void
    {
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">hero</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-headline#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="12">Old Headline</sv:value>
    </sv:property>
</sv:node>
XML);

        $xpath = $this->getXpath($xml);

        // Update with a valid property from the schema
        $this->writer->updateBlock($xml, $xpath, 'de', 0, 'hero', [
            'headline' => 'New Headline',
            'description' => 'New Description',
        ]);

        // Extract and verify
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertEquals('New Headline', $blocks[0]['headline']);
        $this->assertEquals('New Description', $blocks[0]['description']);
    }

    /**
     * Test that updateBlock ignores unknown properties not in schema.
     *
     * This is critical for security and preventing unintended property writes.
     */
    public function testUpdateBlockIgnoresUnknownProperties(): void
    {
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">hero</sv:value>
    </sv:property>
</sv:node>
XML);

        $xpath = $this->getXpath($xml);

        // Try to update with properties not in hero schema
        $this->writer->updateBlock($xml, $xpath, 'de', 0, 'hero', [
            'headline' => 'Valid Property',
            'unknownProperty' => 'Should Be Ignored',
            'anotherUnknown' => 'Also Ignored',
        ]);

        // Verify unknown properties were NOT written
        $unknownProp = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-unknownProperty#0"]');
        $this->assertSame(0, $unknownProp->length, 'Unknown property should not be written');

        $anotherUnknown = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-anotherUnknown#0"]');
        $this->assertSame(0, $anotherUnknown->length, 'Unknown property should not be written');

        // But valid property should be written
        $headlineProp = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-headline#0"]/sv:value');
        $this->assertSame(1, $headlineProp->length);
        $this->assertEquals('Valid Property', $headlineProp->item(0)->nodeValue);
    }

    /**
     * Regression test: Ensure html-raw block updates work with schema-driven approach.
     *
     * This was the original bug - html property was missing from hardcoded list.
     */
    public function testSchemaBasedHtmlRawUpdate(): void
    {
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="8">html-raw</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-html#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="20">Old HTML content</sv:value>
    </sv:property>
</sv:node>
XML);

        $xpath = $this->getXpath($xml);

        // The original bug: this update would silently fail because 'html' wasn't in knownProps
        $newHtml = '<iframe src="https://example.com/video"></iframe>';
        $this->writer->updateBlock($xml, $xpath, 'de', 0, 'html-raw', [
            'html' => $newHtml,
        ]);

        // Extract and verify - this is the critical assertion
        $blocks = $this->extractor->extractBlocks($xml->saveXML(), 'de');

        $this->assertCount(1, $blocks);
        $this->assertEquals('html-raw', $blocks[0]['type']);
        $this->assertEquals($newHtml, $blocks[0]['html'], 'html property should be updated via schema-driven approach');
    }

    /**
     * Test that updateBlock correctly uses JSON encoding for image properties.
     */
    public function testUpdateBlockWithJsonEncodedProperty(): void
    {
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="4">hero</sv:value>
    </sv:property>
</sv:node>
XML);

        $xpath = $this->getXpath($xml);

        $imageData = ['ids' => [42], 'displayOption' => 'left'];
        $this->writer->updateBlock($xml, $xpath, 'de', 0, 'hero', [
            'image' => $imageData,
        ]);

        // Verify JSON encoding in raw XML
        $imageProp = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-image#0"]/sv:value');
        $this->assertSame(1, $imageProp->length);

        $storedValue = $imageProp->item(0)->nodeValue;
        $decodedValue = json_decode($storedValue, true);
        $this->assertEquals($imageData, $decodedValue);
    }

    /**
     * Test that updateBlock correctly uses Reference encoding for snippets.
     */
    public function testUpdateBlockWithReferenceProperty(): void
    {
        $xml = new DOMDocument();
        $xml->loadXML(<<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="7">contact</sv:value>
    </sv:property>
</sv:node>
XML);

        $xpath = $this->getXpath($xml);

        $uuids = ['aaaa1111-bbbb-2222-cccc-333344445555', 'ffff6666-eeee-7777-dddd-888899990000'];
        $this->writer->updateBlock($xml, $xpath, 'de', 0, 'contact', [
            'snippets' => $uuids,
        ]);

        // Verify Reference type in raw XML
        $snippetsProp = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-snippets#0"]')->item(0);
        $this->assertSame('Reference', $snippetsProp->getAttribute('sv:type'));
        $this->assertSame('1', $snippetsProp->getAttribute('sv:multi-valued'));

        // Verify both UUIDs are stored
        $valueNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-snippets#0"]/sv:value');
        $this->assertSame(2, $valueNodes->length);
        $this->assertSame($uuids[0], $valueNodes->item(0)->nodeValue);
        $this->assertSame($uuids[1], $valueNodes->item(1)->nodeValue);
    }

    // === Code Block HTML Escaping Tests ===

    /**
     * Bug 4: Code items with HTML tags must be escaped so they display as text, not render as HTML.
     */
    public function testHeadlineParagraphsCodeItemEscapesHtmlTags(): void
    {
        $xml = $this->createEmptyBlocksXml();
        $xpath = $this->getXpath($xml);
        $rootNode = $xpath->query('/sv:node')->item(0);

        $this->writer->addBlock($xml, $rootNode, 'de', 0, [
            'type' => 'headline-paragraphs',
            'headline' => 'HTML Example',
            'items' => [
                ['type' => 'code', 'code' => "<main>\n  <h1>Laufschuhe kaufen</h1>\n</main>", 'language' => 'html'],
            ],
        ]);

        // Update the length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]/sv:value');
        $lengthNodes->item(0)->nodeValue = '1';

        // Check the raw XML — the code property must contain escaped HTML
        $codeNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-items#0-code#0"]/sv:value');
        $this->assertSame(1, $codeNodes->length);

        $storedCode = $codeNodes->item(0)->nodeValue;
        $this->assertStringContainsString('&lt;main&gt;', $storedCode, 'HTML tags in code must be escaped');
        $this->assertStringContainsString('&lt;h1&gt;', $storedCode, 'HTML tags in code must be escaped');
        $this->assertStringNotContainsString('<main>', $storedCode, 'Raw HTML must not be stored unescaped');
    }
}
