<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Block;

use App\Sulu\Block\BlockTypeRegistry;
use App\Sulu\Block\BlockValidator;
use PHPUnit\Framework\TestCase;

class BlockValidatorTest extends TestCase
{
    private BlockValidator $validator;

    protected function setUp(): void
    {
        $this->validator = new BlockValidator(new BlockTypeRegistry());
    }

    public function testValidBlockPasses(): void
    {
        $block = ['type' => 'headline-paragraphs', 'headline' => 'Test'];
        $result = $this->validator->validate($block);

        $this->assertTrue($result['valid']);
        $this->assertEmpty($result['errors']);
    }

    public function testMissingTypeFailsValidation(): void
    {
        $block = ['headline' => 'Test'];
        $result = $this->validator->validate($block);

        $this->assertFalse($result['valid']);
        $this->assertContains('Block type is required', $result['errors']);
    }

    public function testUnknownTypeFailsValidation(): void
    {
        $block = ['type' => 'nonexistent-block-type'];
        $result = $this->validator->validate($block);

        $this->assertFalse($result['valid']);
        $this->assertStringContainsString('Unknown block type', $result['errors'][0]);
    }

    public function testFaqBlockWithCorrectNestedKeyPasses(): void
    {
        $block = [
            'type' => 'faq',
            'faqs' => [
                ['headline' => 'Question 1', 'subline' => 'Answer 1'],
            ],
        ];
        $result = $this->validator->validate($block);

        $this->assertTrue($result['valid']);
    }

    public function testTableBlockWithCorrectNestedKeyPasses(): void
    {
        $block = [
            'type' => 'table',
            'headline' => 'Test Table',
            'rows' => [
                ['cell1' => 'A', 'cell2' => 'B', 'cell3' => 'C'],
            ],
        ];
        $result = $this->validator->validate($block);

        $this->assertTrue($result['valid']);
    }

    public function testValidateWithMessageReturnsNullForValidBlock(): void
    {
        $block = ['type' => 'hl-des', 'headline' => 'Test', 'description' => 'Content'];
        $message = $this->validator->validateWithMessage($block);

        $this->assertNull($message);
    }

    public function testValidateWithMessageReturnsErrorString(): void
    {
        $block = ['headline' => 'Test'];
        $message = $this->validator->validateWithMessage($block);

        $this->assertNotNull($message);
        $this->assertStringContainsString('Block type is required', $message);
    }

    public function testIsValidTypeReturnsTrueForKnownTypes(): void
    {
        $this->assertTrue($this->validator->isValidType('headline-paragraphs'));
        $this->assertTrue($this->validator->isValidType('faq'));
        $this->assertTrue($this->validator->isValidType('cta-button'));
    }

    public function testIsValidTypeReturnsFalseForUnknownTypes(): void
    {
        $this->assertFalse($this->validator->isValidType('unknown-type'));
        $this->assertFalse($this->validator->isValidType(''));
    }

    public function testGetNestedKeyReturnsCorrectKey(): void
    {
        $this->assertEquals('faqs', $this->validator->getNestedKey('faq'));
        $this->assertEquals('rows', $this->validator->getNestedKey('table'));
        $this->assertEquals('items', $this->validator->getNestedKey('feature'));
        $this->assertEquals('flags', $this->validator->getNestedKey('image-with-flags'));
    }

    public function testGetNestedKeyReturnsNullForBlocksWithoutNested(): void
    {
        $this->assertNull($this->validator->getNestedKey('hl-des'));
        $this->assertNull($this->validator->getNestedKey('image'));
    }

    public function testGetSuggestedFieldsReturnsSchema(): void
    {
        $schema = $this->validator->getSuggestedFields('cta-button');

        $this->assertIsArray($schema);
        $this->assertArrayHasKey('properties', $schema);
        $this->assertContains('text', $schema['properties']);
        $this->assertContains('url', $schema['properties']);
    }

    public function testNestedItemsArrayValidation(): void
    {
        $block = [
            'type' => 'faq',
            'faqs' => 'not an array',
        ];
        $result = $this->validator->validate($block);

        $this->assertFalse($result['valid']);
        $this->assertStringContainsString('must be an array', $result['errors'][0]);
    }

    public function testHeadlineParagraphsWithCodeItemPasses(): void
    {
        $block = [
            'type' => 'headline-paragraphs',
            'headline' => 'Code Example',
            'items' => [
                ['type' => 'description', 'description' => '<p>Text</p>'],
                ['type' => 'code', 'code' => 'echo "hello";', 'language' => 'php'],
            ],
        ];
        $result = $this->validator->validate($block);

        $this->assertTrue($result['valid']);
    }
}
