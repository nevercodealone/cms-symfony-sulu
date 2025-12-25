<?php

namespace App\Tests\Unit\Command\AI;

use App\AI\Platform\AIPlatform;
use App\AI\Platform\AIResponse;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\TestCase;

/**
 * Base test case for AI Command tests with common mocks and utilities
 */
abstract class AICommandTestCase extends TestCase
{
    protected AIPlatform $aiPlatform;
    protected Connection $connection;

    protected function setUp(): void
    {
        $this->aiPlatform = $this->createMock(AIPlatform::class);
        $this->connection = $this->createMock(Connection::class);
    }

    /**
     * Create a mock AIResponse with specified content
     */
    protected function createMockAIResponse(string $content, int $tokens = 0, array $usage = []): AIResponse
    {
        $response = $this->createMock(AIResponse::class);
        $response->method('getContent')->willReturn($content);
        $response->method('getUsage')->willReturn($usage + ['totalTokens' => $tokens]);
        
        return $response;
    }

    /**
     * Create structured content for testing
     */
    protected function createStructuredContent(string $headline = 'Test Headline', array $items = null): array
    {
        return [
            'type' => 'headline-paragraphs',
            'headline' => $headline,
            'items' => $items ?? [
                ['type' => 'description', 'description' => 'Test paragraph 1'],
                ['type' => 'description', 'description' => 'Test paragraph 2']
            ]
        ];
    }

    /**
     * Create plain text content with headline and paragraphs
     */
    protected function createPlainTextContent(string $headline = 'Test Headline', array $paragraphs = null): string
    {
        $paragraphs = $paragraphs ?? ['First paragraph content.', 'Second paragraph content.'];
        return "# $headline\n\n" . implode("\n\n", $paragraphs);
    }

    /**
     * Setup connection mock to return page data
     */
    protected function setupConnectionWithPageData(array $pageData): void
    {
        $this->connection->expects($this->any())
            ->method('fetchAssociative')
            ->willReturn($pageData);
    }

    /**
     * Setup connection mock to simulate successful updates
     */
    protected function setupConnectionForSuccessfulUpdate(): void
    {
        $this->connection->expects($this->any())
            ->method('executeStatement')
            ->willReturn(1);
    }

    /**
     * Common test data providers
     */
    
    public static function formatProvider(): array
    {
        return [
            'seo' => ['seo'],
            'technical' => ['technical'],
            'tutorial' => ['tutorial'],
        ];
    }

    public static function localeProvider(): array
    {
        return [
            'german' => ['de'],
            'english' => ['en'],
        ];
    }

    public static function temperatureProvider(): array
    {
        return [
            'low' => [0.1],
            'medium' => [0.5],
            'high' => [0.9],
        ];
    }

    public static function urlProvider(): array
    {
        return [
            'sulu_url' => ['https://sulu-never-code-alone.ddev.site/de/php-glossar/phpstan', '/cmf/example/contents/php-glossar/phpstan'],
            'cmf_path' => ['/cmf/example/contents/blog/test-page', '/cmf/example/contents/blog/test-page'],
        ];
    }
}