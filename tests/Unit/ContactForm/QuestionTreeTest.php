<?php

declare(strict_types=1);

namespace App\Tests\Unit\ContactForm;

use App\ContactForm\QuestionTree;
use PHPUnit\Framework\TestCase;

class QuestionTreeTest extends TestCase
{
    public function testGetServicesReturnsThree(): void
    {
        $tree = new QuestionTree();
        $services = $tree->getServices();

        $this->assertCount(3, $services);
        $this->assertSame('php-refactoring', $services[0]['key']);
        $this->assertSame('accessibility', $services[1]['key']);
        $this->assertSame('vibe-coding', $services[2]['key']);
    }

    public function testEachServiceHasRequiredFields(): void
    {
        $tree = new QuestionTree();

        foreach ($tree->getServices() as $service) {
            $this->assertArrayHasKey('key', $service);
            $this->assertArrayHasKey('label', $service);
            $this->assertArrayHasKey('icon', $service);
            $this->assertArrayHasKey('badge', $service);
            $this->assertArrayHasKey('description', $service);
            $this->assertNotEmpty($service['label']);
            $this->assertNotEmpty($service['badge']);
        }
    }

    public function testGetServiceByKey(): void
    {
        $tree = new QuestionTree();
        $service = $tree->getService('accessibility');

        $this->assertNotNull($service);
        $this->assertSame('Barrierefreies Webdesign', $service['label']);
    }

    public function testGetServiceReturnsNullForUnknownKey(): void
    {
        $tree = new QuestionTree();
        $this->assertNull($tree->getService('does-not-exist'));
    }

    public function testPhpRefactoringHasVersionSelectAndSetupCheckbox(): void
    {
        $tree = new QuestionTree();
        $questions = $tree->getQuestions('php-refactoring');

        $this->assertCount(2, $questions);
        $this->assertSame('php_version', $questions[0]['id']);
        $this->assertSame('select', $questions[0]['type']);
        $this->assertSame('setup', $questions[1]['id']);
        $this->assertSame('checkbox', $questions[1]['type']);
    }

    public function testAccessibilityHasQuestions(): void
    {
        $tree = new QuestionTree();
        $questions = $tree->getQuestions('accessibility');

        $this->assertCount(2, $questions);
        $this->assertSame('wcag_status', $questions[0]['id']);
        $this->assertSame('select', $questions[0]['type']);
        $this->assertSame('content_types', $questions[1]['id']);
        $this->assertSame('checkbox', $questions[1]['type']);
    }

    public function testVibeCodingHasQuestions(): void
    {
        $tree = new QuestionTree();
        $questions = $tree->getQuestions('vibe-coding');

        $this->assertCount(2, $questions);
        $this->assertSame('language', $questions[0]['id']);
        $this->assertSame('select', $questions[0]['type']);
        $this->assertSame('current_setup', $questions[1]['id']);
        $this->assertSame('checkbox', $questions[1]['type']);
    }

    public function testGetQuestionsReturnsEmptyForUnknownService(): void
    {
        $tree = new QuestionTree();
        $this->assertSame([], $tree->getQuestions('nope'));
    }

    public function testCheckboxOptionsCarryGroupField(): void
    {
        $tree = new QuestionTree();
        $questions = $tree->getQuestions('php-refactoring');
        $setupQuestion = $questions[1];

        foreach ($setupQuestion['options'] as $option) {
            $this->assertArrayHasKey('group', $option);
            $this->assertContains($option['group'], ['Setup', 'Framework']);
        }
    }

    public function testGroupOptionsPreservesOrderAndGroups(): void
    {
        $tree = new QuestionTree();
        $questions = $tree->getQuestions('php-refactoring');
        $grouped = $tree->groupOptions($questions[1]['options']);

        $this->assertSame(['Setup', 'Framework'], array_keys($grouped));
        $this->assertCount(6, $grouped['Setup']);
        $this->assertCount(3, $grouped['Framework']);
    }
}
