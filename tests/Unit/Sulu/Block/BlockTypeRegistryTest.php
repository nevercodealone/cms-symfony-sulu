<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Block;

use App\Sulu\Block\BlockTypeRegistry;
use PHPUnit\Framework\TestCase;

class BlockTypeRegistryTest extends TestCase
{
    private BlockTypeRegistry $registry;

    protected function setUp(): void
    {
        $this->registry = new BlockTypeRegistry();
    }

    public function testRegistryContains34BlockTypes(): void
    {
        $this->assertEquals(34, $this->registry->count());
    }

    public function testGetSchemaReturnsArrayForKnownType(): void
    {
        $schema = $this->registry->getSchema('faq');

        $this->assertNotNull($schema);
        $this->assertIsArray($schema);
        $this->assertArrayHasKey('properties', $schema);
        $this->assertArrayHasKey('nested', $schema);
        $this->assertArrayHasKey('nestedProperties', $schema);
    }

    public function testGetSchemaReturnsNullForUnknownType(): void
    {
        $schema = $this->registry->getSchema('unknown-block-type');

        $this->assertNull($schema);
    }

    public function testHasTypeReturnsTrueForKnownType(): void
    {
        $this->assertTrue($this->registry->hasType('faq'));
        $this->assertTrue($this->registry->hasType('table'));
        $this->assertTrue($this->registry->hasType('headline-paragraphs'));
    }

    public function testHasTypeReturnsFalseForUnknownType(): void
    {
        $this->assertFalse($this->registry->hasType('nonexistent'));
    }

    // === FAQ Block Tests (uses 'faqs' not 'items', 'subline' not 'description') ===

    public function testFaqBlockHasCorrectNestedName(): void
    {
        $this->assertEquals('faqs', $this->registry->getNestedName('faq'));
    }

    public function testFaqBlockHasCorrectNestedProperties(): void
    {
        $nestedProps = $this->registry->getNestedProperties('faq');

        $this->assertContains('headline', $nestedProps);
        $this->assertContains('subline', $nestedProps);
        $this->assertNotContains('description', $nestedProps);
    }

    public function testFaqBlockHasNoTopLevelProperties(): void
    {
        $props = $this->registry->getProperties('faq');

        $this->assertEmpty($props);
    }

    // === Table Block Tests (uses 'rows' not 'items') ===

    public function testTableBlockHasCorrectNestedName(): void
    {
        $this->assertEquals('rows', $this->registry->getNestedName('table'));
    }

    public function testTableBlockHasCorrectNestedProperties(): void
    {
        $nestedProps = $this->registry->getNestedProperties('table');

        $this->assertContains('cell1', $nestedProps);
        $this->assertContains('cell2', $nestedProps);
        $this->assertContains('cell3', $nestedProps);
    }

    public function testTableBlockHasCorrectTopLevelProperties(): void
    {
        $props = $this->registry->getProperties('table');

        $this->assertContains('headline', $props);
        $this->assertContains('description', $props);
        $this->assertContains('columnheader1', $props);
        $this->assertContains('columnheader2', $props);
        $this->assertContains('columnheader3', $props);
    }

    // === Image-with-flags Block Tests (uses 'flags' not 'items') ===

    public function testImageWithFlagsBlockHasCorrectNestedName(): void
    {
        $this->assertEquals('flags', $this->registry->getNestedName('image-with-flags'));
    }

    public function testImageWithFlagsBlockHasCorrectNestedProperties(): void
    {
        $nestedProps = $this->registry->getNestedProperties('image-with-flags');

        $this->assertContains('language', $nestedProps);
        $this->assertContains('url', $nestedProps);
    }

    // === Standard Blocks with 'items' ===

    public function testHeadlineParagraphsUsesItems(): void
    {
        $this->assertEquals('items', $this->registry->getNestedName('headline-paragraphs'));
    }

    public function testFeatureBlockUsesItems(): void
    {
        $this->assertEquals('items', $this->registry->getNestedName('feature'));
    }

    public function testFeatureDefaultBlockUsesItems(): void
    {
        $this->assertEquals('items', $this->registry->getNestedName('feature-default'));
    }

    // === Blocks without nested items ===

    public function testHasNestedReturnsTrueForNestedBlocks(): void
    {
        $this->assertTrue($this->registry->hasNested('faq'));
        $this->assertTrue($this->registry->hasNested('table'));
        $this->assertTrue($this->registry->hasNested('feature'));
        $this->assertTrue($this->registry->hasNested('image-with-flags'));
    }

    public function testHasNestedReturnsFalseForSimpleBlocks(): void
    {
        $this->assertFalse($this->registry->hasNested('hero'));
        $this->assertFalse($this->registry->hasNested('button'));
        $this->assertFalse($this->registry->hasNested('hl-des'));
        $this->assertFalse($this->registry->hasNested('image'));
        $this->assertFalse($this->registry->hasNested('chat'));
    }

    public function testGetNestedNameReturnsNullForSimpleBlocks(): void
    {
        $this->assertNull($this->registry->getNestedName('hero'));
        $this->assertNull($this->registry->getNestedName('button'));
        $this->assertNull($this->registry->getNestedName('image'));
    }

    // === Hero Block Properties ===

    public function testHeroBlockHasCorrectProperties(): void
    {
        $props = $this->registry->getProperties('hero');

        $this->assertContains('image', $props);
        $this->assertContains('headline', $props);
        $this->assertContains('description', $props);
        $this->assertContains('buttonText', $props);
        $this->assertContains('url', $props);
    }

    // === CTA Button Block Properties ===

    public function testCtaButtonBlockHasCorrectProperties(): void
    {
        $props = $this->registry->getProperties('cta-button');

        $this->assertContains('headline', $props);
        $this->assertContains('description', $props);
        $this->assertContains('text', $props);
        $this->assertContains('url', $props);
        $this->assertContains('texttwo', $props);
        $this->assertContains('urltwo', $props);
    }

    // === Contact Blocks ===

    public function testTeamBlockHasOrganisationProperty(): void
    {
        $props = $this->registry->getProperties('team');

        $this->assertContains('organisation', $props);
        $this->assertContains('headline', $props);
        $this->assertContains('description', $props);
    }

    public function testContactBlockHasSnippetsProperty(): void
    {
        $props = $this->registry->getProperties('contact');

        $this->assertContains('snippets', $props);
        $this->assertContains('description', $props);
    }

    // === GetAllTypes Test ===

    public function testGetAllTypesReturnsAllBlockTypeNames(): void
    {
        $types = $this->registry->getAllTypes();

        $this->assertCount(34, $types);
        $this->assertContains('faq', $types);
        $this->assertContains('table', $types);
        $this->assertContains('hero', $types);
        $this->assertContains('headline-paragraphs', $types);
        $this->assertContains('image-with-flags', $types);
        $this->assertContains('hl-des', $types);
    }

    // === Edge Cases ===

    public function testGetPropertiesReturnsEmptyArrayForUnknownType(): void
    {
        $props = $this->registry->getProperties('nonexistent');

        $this->assertIsArray($props);
        $this->assertEmpty($props);
    }

    public function testGetNestedPropertiesReturnsEmptyArrayForUnknownType(): void
    {
        $nestedProps = $this->registry->getNestedProperties('nonexistent');

        $this->assertIsArray($nestedProps);
        $this->assertEmpty($nestedProps);
    }

    public function testGetNestedPropertiesReturnsEmptyArrayForSimpleBlock(): void
    {
        $nestedProps = $this->registry->getNestedProperties('hero');

        $this->assertIsArray($nestedProps);
        $this->assertEmpty($nestedProps);
    }

    // === Data Provider Test for All Block Types ===

    /**
     * @dataProvider blockTypeProvider
     */
    public function testAllBlockTypesHaveValidSchema(string $blockType): void
    {
        $schema = $this->registry->getSchema($blockType);

        $this->assertNotNull($schema, "Block type '{$blockType}' should have a schema");
        $this->assertArrayHasKey('properties', $schema, "Block type '{$blockType}' should have 'properties' key");
        $this->assertIsArray($schema['properties'], "Block type '{$blockType}' properties should be an array");

        if (isset($schema['nested'])) {
            $this->assertIsString($schema['nested'], "Block type '{$blockType}' nested name should be a string");
            $this->assertArrayHasKey('nestedProperties', $schema, "Block type '{$blockType}' with nested should have 'nestedProperties'");
            $this->assertIsArray($schema['nestedProperties'], "Block type '{$blockType}' nestedProperties should be an array");
        }
    }

    /**
     * @return array<string, array{0: string}>
     */
    public static function blockTypeProvider(): array
    {
        return [
            'headline-paragraphs' => ['headline-paragraphs'],
            'faq' => ['faq'],
            'code' => ['code'],
            'introduction' => ['introduction'],
            'table' => ['table'],
            'hero' => ['hero'],
            'hero-startpage' => ['hero-startpage'],
            'hero-image-right' => ['hero-image-right'],
            'heroslider' => ['heroslider'],
            'cta-button' => ['cta-button'],
            'button' => ['button'],
            'feature' => ['feature'],
            'feature-default' => ['feature-default'],
            'feature-with-icons' => ['feature-with-icons'],
            'formats' => ['formats'],
            'image' => ['image'],
            'image-gallery' => ['image-gallery'],
            'images-with-heading-and-description' => ['images-with-heading-and-description'],
            'image-with-flags' => ['image-with-flags'],
            'logo-gallary' => ['logo-gallary'],
            'excerpt-image' => ['excerpt-image'],
            'team' => ['team'],
            'consultant' => ['consultant'],
            'contact' => ['contact'],
            'chat' => ['chat'],
            'highlights' => ['highlights'],
            'related-content-by-page-tag' => ['related-content-by-page-tag'],
            'subpages-overview' => ['subpages-overview'],
            'table-of-contents' => ['table-of-contents'],
            'html-raw' => ['html-raw'],
            'youtube-from-channel' => ['youtube-from-channel'],
            'wordpressposts' => ['wordpressposts'],
            'hl-des' => ['hl-des'],
            'card-trio' => ['card-trio'],
        ];
    }

    // === Description Tests ===

    public function testGetDescriptionReturnsStringForKnownType(): void
    {
        $description = $this->registry->getDescription('faq');

        $this->assertNotNull($description);
        $this->assertIsString($description);
        $this->assertStringContainsString('FAQ', $description);
    }

    public function testGetDescriptionReturnsNullForUnknownType(): void
    {
        $this->assertNull($this->registry->getDescription('unknown-block-type'));
    }

    public function testAllBlockTypesHaveDescriptions(): void
    {
        foreach ($this->registry->getAllTypes() as $type) {
            $description = $this->registry->getDescription($type);
            $this->assertNotNull($description, "Block type '{$type}' is missing a description");
            $this->assertNotEmpty($description, "Block type '{$type}' has empty description");
        }
    }

    // === Example Tests ===

    public function testGetExampleReturnsArrayForKnownType(): void
    {
        $example = $this->registry->getExample('faq');

        $this->assertNotNull($example);
        $this->assertIsArray($example);
        $this->assertArrayHasKey('type', $example);
        $this->assertEquals('faq', $example['type']);
        $this->assertArrayHasKey('faqs', $example);
    }

    public function testGetExampleReturnsNullForUnknownType(): void
    {
        $this->assertNull($this->registry->getExample('unknown-block-type'));
    }

    public function testAllBlockTypesHaveExamples(): void
    {
        foreach ($this->registry->getAllTypes() as $type) {
            $example = $this->registry->getExample($type);
            $this->assertNotNull($example, "Block type '{$type}' is missing an example");
            $this->assertIsArray($example, "Block type '{$type}' example should be an array");
            $this->assertArrayHasKey('type', $example, "Block type '{$type}' example missing 'type' key");
            $this->assertEquals($type, $example['type'], "Block type '{$type}' example has wrong type");
        }
    }

    public function testFaqExampleUsesCorrectNestedName(): void
    {
        $example = $this->registry->getExample('faq');

        $this->assertArrayHasKey('faqs', $example);
        $this->assertArrayNotHasKey('items', $example);
    }

    public function testTableExampleUsesCorrectNestedName(): void
    {
        $example = $this->registry->getExample('table');

        $this->assertArrayHasKey('rows', $example);
        $this->assertArrayNotHasKey('items', $example);
    }

    public function testHeadlineParagraphsExampleHasItems(): void
    {
        $example = $this->registry->getExample('headline-paragraphs');

        $this->assertArrayHasKey('items', $example);
        $this->assertIsArray($example['items']);
        $this->assertNotEmpty($example['items']);
    }

    // === getAllDescriptions / getAllExamples Tests ===

    public function testGetAllDescriptionsReturns34Entries(): void
    {
        $descriptions = $this->registry->getAllDescriptions();

        $this->assertCount(34, $descriptions);
    }

    public function testGetAllExamplesReturns34Entries(): void
    {
        $examples = $this->registry->getAllExamples();

        $this->assertCount(34, $examples);
    }

    // === Property Encoding Tests ===

    public function testGetPropertyEncodingReturnsJsonForImageProperties(): void
    {
        $this->assertEquals('json', $this->registry->getPropertyEncoding('hero', 'image'));
        $this->assertEquals('json', $this->registry->getPropertyEncoding('image', 'image'));
        $this->assertEquals('json', $this->registry->getPropertyEncoding('heroslider', 'images'));
    }

    public function testGetPropertyEncodingReturnsReferenceForSnippets(): void
    {
        $this->assertEquals('reference', $this->registry->getPropertyEncoding('contact', 'snippets'));
        $this->assertEquals('reference', $this->registry->getPropertyEncoding('highlights', 'snippets'));
        $this->assertEquals('reference', $this->registry->getPropertyEncoding('related-content-by-page-tag', 'snippets'));
    }

    public function testGetPropertyEncodingReturnsReferenceForOrganisation(): void
    {
        $this->assertEquals('reference', $this->registry->getPropertyEncoding('team', 'organisation'));
        $this->assertEquals('reference', $this->registry->getPropertyEncoding('consultant', 'organisation'));
    }

    public function testGetPropertyEncodingReturnsRawForHtmlRaw(): void
    {
        $this->assertEquals('raw', $this->registry->getPropertyEncoding('html-raw', 'html'));
    }

    public function testGetPropertyEncodingDefaultsToString(): void
    {
        $this->assertEquals('string', $this->registry->getPropertyEncoding('hero', 'headline'));
        $this->assertEquals('string', $this->registry->getPropertyEncoding('hero', 'description'));
        $this->assertEquals('string', $this->registry->getPropertyEncoding('faq', 'headline'));
        $this->assertEquals('string', $this->registry->getPropertyEncoding('unknown-type', 'anything'));
    }

    public function testGetNestedPropertyEncodingReturnsCodeForHeadlineParagraphs(): void
    {
        $this->assertEquals('code', $this->registry->getNestedPropertyEncoding('headline-paragraphs', 'code'));
    }

    public function testGetNestedPropertyEncodingReturnsJsonForLogoGalleryImage(): void
    {
        $this->assertEquals('json', $this->registry->getNestedPropertyEncoding('logo-gallary', 'image'));
    }

    public function testGetNestedPropertyEncodingDefaultsToString(): void
    {
        $this->assertEquals('string', $this->registry->getNestedPropertyEncoding('headline-paragraphs', 'description'));
        $this->assertEquals('string', $this->registry->getNestedPropertyEncoding('faq', 'headline'));
    }

    public function testIsReferencePropertyReturnsTrueForSnippets(): void
    {
        $this->assertTrue($this->registry->isReferenceProperty('contact', 'snippets'));
        $this->assertTrue($this->registry->isReferenceProperty('highlights', 'snippets'));
    }

    public function testIsReferencePropertyReturnsTrueForOrganisation(): void
    {
        $this->assertTrue($this->registry->isReferenceProperty('team', 'organisation'));
        $this->assertTrue($this->registry->isReferenceProperty('consultant', 'organisation'));
    }

    public function testIsReferencePropertyReturnsFalseForOtherProperties(): void
    {
        $this->assertFalse($this->registry->isReferenceProperty('hero', 'headline'));
        $this->assertFalse($this->registry->isReferenceProperty('hero', 'image'));
    }

    public function testIsJsonPropertyReturnsTrueForImageProperties(): void
    {
        $this->assertTrue($this->registry->isJsonProperty('hero', 'image'));
        $this->assertTrue($this->registry->isJsonProperty('heroslider', 'images'));
    }

    public function testIsJsonPropertyReturnsFalseForOtherProperties(): void
    {
        $this->assertFalse($this->registry->isJsonProperty('hero', 'headline'));
        $this->assertFalse($this->registry->isJsonProperty('contact', 'snippets'));
    }

    public function testIsRawPropertyReturnsTrueForHtmlRaw(): void
    {
        $this->assertTrue($this->registry->isRawProperty('html-raw', 'html'));
    }

    public function testIsRawPropertyReturnsFalseForOtherProperties(): void
    {
        $this->assertFalse($this->registry->isRawProperty('hero', 'headline'));
        $this->assertFalse($this->registry->isRawProperty('hero', 'image'));
    }

    public function testIsValidPropertyReturnsTrueForSchemaProperties(): void
    {
        $this->assertTrue($this->registry->isValidProperty('hero', 'headline'));
        $this->assertTrue($this->registry->isValidProperty('hero', 'image'));
        $this->assertTrue($this->registry->isValidProperty('html-raw', 'html'));
    }

    public function testIsValidPropertyReturnsFalseForUnknownProperties(): void
    {
        $this->assertFalse($this->registry->isValidProperty('hero', 'nonexistent'));
        $this->assertFalse($this->registry->isValidProperty('html-raw', 'headline'));
    }

    public function testIsValidPropertyReturnsFalseForUnknownBlockType(): void
    {
        $this->assertFalse($this->registry->isValidProperty('unknown-type', 'headline'));
    }

    /**
     * @dataProvider blockTypeProvider
     */
    public function testAllBlockTypesWithEncodingHaveValidSchema(string $blockType): void
    {
        $schema = $this->registry->getSchema($blockType);
        $this->assertNotNull($schema);

        // If encoding is defined, verify all encoded properties exist in properties array
        if (isset($schema['encoding'])) {
            foreach (array_keys($schema['encoding']) as $prop) {
                $this->assertContains(
                    $prop,
                    $schema['properties'],
                    "Block type '{$blockType}' has encoding for '{$prop}' but it's not in properties"
                );
            }
        }

        // If nestedEncoding is defined, verify nested exists and properties are valid
        if (isset($schema['nestedEncoding'])) {
            $this->assertArrayHasKey(
                'nested',
                $schema,
                "Block type '{$blockType}' has nestedEncoding but no nested key"
            );
            $this->assertArrayHasKey(
                'nestedProperties',
                $schema,
                "Block type '{$blockType}' has nestedEncoding but no nestedProperties"
            );

            foreach (array_keys($schema['nestedEncoding']) as $prop) {
                $this->assertContains(
                    $prop,
                    $schema['nestedProperties'],
                    "Block type '{$blockType}' has nestedEncoding for '{$prop}' but it's not in nestedProperties"
                );
            }
        }
    }
}
