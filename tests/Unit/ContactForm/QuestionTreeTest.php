<?php

declare(strict_types=1);

namespace App\Tests\Unit\ContactForm;

use App\ContactForm\QuestionTree;
use PHPUnit\Framework\TestCase;

class QuestionTreeTest extends TestCase
{
    public function testGetTabs(): void
    {
        $tree = new QuestionTree();
        $tabs = $tree->getTabs();

        $this->assertCount(3, $tabs);
        $this->assertSame('vibe-coding', $tabs[0]['key']);
        $this->assertSame('php-refactoring', $tabs[1]['key']);
        $this->assertSame('ai-content', $tabs[2]['key']);
    }

    public function testVibeCodingHasTwoQuestions(): void
    {
        $tree = new QuestionTree();
        $questions = $tree->getQuestions('vibe-coding');

        $this->assertCount(2, $questions);
        $this->assertSame('target', $questions[0]['id']);
        $this->assertSame('tech_stack', $questions[1]['id']);
    }

    public function testPhpRefactoringHasThreeQuestions(): void
    {
        $tree = new QuestionTree();
        $questions = $tree->getQuestions('php-refactoring');

        $this->assertCount(3, $questions);
        $this->assertSame('php_version', $questions[0]['id']);
        $this->assertSame('ci_cd_infra', $questions[1]['id']);
        $this->assertSame('codebase_age', $questions[2]['id']);
    }

    public function testAiContentHasTwoQuestions(): void
    {
        $tree = new QuestionTree();
        $questions = $tree->getQuestions('ai-content');

        $this->assertCount(2, $questions);
        $this->assertSame('url', $questions[0]['id']);
        $this->assertSame('seo_target_keyword', $questions[1]['id']);
    }

    public function testGetQuestionByIndex(): void
    {
        $tree = new QuestionTree();
        $question = $tree->getQuestion('vibe-coding', 0);

        $this->assertSame('target', $question['id']);
        $this->assertNotEmpty($question['label']);
        $this->assertNotEmpty($question['options']);
    }

    public function testGetQuestionReturnsNullForInvalidIndex(): void
    {
        $tree = new QuestionTree();
        $this->assertNull($tree->getQuestion('vibe-coding', 99));
    }

    public function testIsLastQuestion(): void
    {
        $tree = new QuestionTree();
        $this->assertFalse($tree->isLastQuestion('vibe-coding', 0));
        $this->assertTrue($tree->isLastQuestion('vibe-coding', 1));
        $this->assertFalse($tree->isLastQuestion('php-refactoring', 1));
        $this->assertTrue($tree->isLastQuestion('php-refactoring', 2));
    }
}
