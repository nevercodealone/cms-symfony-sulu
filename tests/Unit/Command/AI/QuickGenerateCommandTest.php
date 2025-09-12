<?php

namespace App\Tests\Unit\Command\AI;

use App\AI\Platform\AIPlatform;
use App\Command\AI\QuickGenerateCommand;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\TestCase;
use ReflectionClass;
use Symfony\Component\Console\Application;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Tester\CommandTester;

class QuickGenerateCommandTest extends TestCase
{
    private QuickGenerateCommand $command;
    private AIPlatform $aiPlatform;
    private Connection $connection;
    private ReflectionClass $reflection;

    protected function setUp(): void
    {
        $this->aiPlatform = $this->createMock(AIPlatform::class);
        $this->connection = $this->createMock(Connection::class);
        
        $this->command = new QuickGenerateCommand(
            $this->aiPlatform,
            $this->connection,
            'test-api-key',
            'gemini-1.5-flash'
        );
        
        $this->reflection = new ReflectionClass($this->command);
    }

    public function testCommandConfiguration(): void
    {
        $this->assertEquals('ai:content:quick', $this->command->getName());
        $this->assertEquals('Generate content quickly using AI and add to Sulu pages', $this->command->getDescription());
        
        $definition = $this->command->getDefinition();
        
        // Test required arguments
        $this->assertTrue($definition->hasArgument('url'));
        $this->assertTrue($definition->hasArgument('prompt'));
        $this->assertTrue($definition->getArgument('url')->isRequired());
        $this->assertTrue($definition->getArgument('prompt')->isRequired());
        
        // Test options
        $this->assertTrue($definition->hasOption('page'));
        $this->assertTrue($definition->hasOption('position'));
        $this->assertTrue($definition->hasOption('format'));
        $this->assertTrue($definition->hasOption('headline'));
        $this->assertTrue($definition->hasOption('dry-run'));
        $this->assertTrue($definition->hasOption('live'));
    }

    public function testCreateAnalysisPrompt(): void
    {
        $method = $this->reflection->getMethod('createAnalysisPrompt');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command, 'Test prompt', 'seo');
        
        $this->assertIsString($result);
        $this->assertStringContainsString('Test prompt', $result);
        $this->assertStringContainsString('seo', $result);
        $this->assertStringContainsString('Deutsche PHP/Symfony-Entwickler', $result);
    }

    public function testCreateContentPrompt(): void
    {
        $method = $this->reflection->getMethod('createContentPrompt');
        $method->setAccessible(true);
        
        $analysis = 'Test analysis content';
        $prompt = 'Create article';
        $format = 'technical';
        
        $result = $method->invoke($this->command, $analysis, $prompt, $format);
        
        $this->assertIsString($result);
        $this->assertStringContainsString($analysis, $result);
        $this->assertStringContainsString($prompt, $result);
        $this->assertStringContainsString($format, $result);
        $this->assertStringContainsString('3000-5000 Zeichen', $result);
    }

    public function testGenerateHeadlineFromContent(): void
    {
        $method = $this->reflection->getMethod('generateHeadline');
        $method->setAccessible(true);
        
        $content = "# This is a test headline\n\nSome content here";
        $prompt = 'test prompt';
        
        $result = $method->invoke($this->command, $content, $prompt);
        
        $this->assertEquals('This is a test headline', $result);
    }

    public function testGenerateHeadlineFromPromptFallback(): void
    {
        $method = $this->reflection->getMethod('generateHeadline');
        $method->setAccessible(true);
        
        $content = "Short content";  // Too short to extract headline
        $prompt = 'create amazing content for testing purposes';
        
        $result = $method->invoke($this->command, $content, $prompt);
        
        $this->assertStringContainsString('create amazing content for testing', $result);
        $this->assertStringContainsString(date('M Y'), $result);
    }

    public function testConvertToPagePathWithUrl(): void
    {
        $method = $this->reflection->getMethod('convertToPagePath');
        $method->setAccessible(true);
        
        $url = 'https://sulu-never-code-alone.ddev.site/de/nca-php-glossar/phpstan';
        $result = $method->invoke($this->command, $url);
        
        $this->assertEquals('/cmf/example/contents/nca-php-glossar/phpstan', $result);
    }

    public function testConvertToPagePathWithCmfPath(): void
    {
        $method = $this->reflection->getMethod('convertToPagePath');
        $method->setAccessible(true);
        
        $path = '/cmf/example/contents/blog/test-page';
        $result = $method->invoke($this->command, $path);
        
        $this->assertEquals($path, $result);
    }

    public function testParseContentToSuluBlocks(): void
    {
        $method = $this->reflection->getMethod('parseContentToSuluBlocks');
        $method->setAccessible(true);
        
        $content = "# Test Headline\n\nFirst paragraph.\n\nSecond paragraph with more content.";
        $url = 'https://example.com';
        
        $result = $method->invoke($this->command, $content, $url);
        
        $this->assertIsArray($result);
        $this->assertCount(3, $result); // Headline + 2 paragraphs
        
        // Check first item (headline)
        $this->assertEquals('description', $result[0]['type']);
        $this->assertStringContainsString('<h2>Test Headline</h2>', $result[0]['description']);
        
        // Check paragraphs
        $this->assertEquals('description', $result[1]['type']);
        $this->assertStringContainsString('<p>First paragraph.</p>', $result[1]['description']);
    }

    public function testParseContentToSuluBlocksWithoutHeadline(): void
    {
        $method = $this->reflection->getMethod('parseContentToSuluBlocks');
        $method->setAccessible(true);
        
        $content = "Just some content without headline.\n\nAnother paragraph.";
        $url = 'https://example.com';
        
        $result = $method->invoke($this->command, $content, $url);
        
        $this->assertIsArray($result);
        $this->assertCount(2, $result); // Two paragraphs
        
        // Check paragraphs
        $this->assertEquals('description', $result[0]['type']);
        $this->assertStringContainsString('<p>Just some content without headline.</p>', $result[0]['description']);
    }

    /**
     * @dataProvider formatProvider
     */
    public function testCreateAnalysisPromptWithDifferentFormats(string $format, string $expectedContent): void
    {
        $method = $this->reflection->getMethod('createAnalysisPrompt');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command, 'Test prompt', $format);
        
        $this->assertStringContainsString($expectedContent, $result);
    }

    public function formatProvider(): array
    {
        return [
            'seo' => ['seo', 'SEO-Optimierung'],
            'technical' => ['technical', 'technische Details'],
            'tutorial' => ['tutorial', 'Schritt-für-Schritt'],
        ];
    }

    public function testCommandWithInvalidFormat(): void
    {
        $application = new Application();
        $application->add($this->command);
        
        $commandTester = new CommandTester($this->command);
        
        // Mock AI platform to avoid actual API calls
        $this->aiPlatform->expects($this->never())->method('generateContent');
        
        // Test with invalid format - should still work but use default
        $commandTester->execute([
            'url' => 'https://example.com',
            'prompt' => 'test prompt',
            '--format' => 'invalid-format',
            '--dry-run' => true
        ]);
        
        // Command should complete without throwing exception
        $this->assertStringContainsString('Configuration', $commandTester->getDisplay());
    }

    public function testCommandRequiredArguments(): void
    {
        $this->expectException(\Symfony\Component\Console\Exception\RuntimeException::class);
        
        $application = new Application();
        $application->add($this->command);
        
        $commandTester = new CommandTester($this->command);
        
        // Should fail without required arguments
        $commandTester->execute([]);
    }
}