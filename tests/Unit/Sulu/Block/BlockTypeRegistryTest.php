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

    public function testRegistryContains32BlockTypes(): void
    {
        $this->assertEquals(32, $this->registry->count());
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

        $this->assertCount(32, $types);
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
            'youtube-from-channel' => ['youtube-from-channel'],
            'wordpressposts' => ['wordpressposts'],
            'hl-des' => ['hl-des'],
        ];
    }
}
