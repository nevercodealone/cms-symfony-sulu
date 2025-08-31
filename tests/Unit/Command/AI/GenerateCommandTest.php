<?php

namespace App\Tests\Unit\Command\AI;

use App\AI\Platform\AIPlatform;
use App\Command\AI\GenerateCommand;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\TestCase;
use ReflectionClass;
use Symfony\Component\Console\Application;
use Symfony\Component\Console\Tester\CommandTester;

class GenerateCommandTest extends TestCase
{
    private GenerateCommand $command;
    private AIPlatform $aiPlatform;
    private Connection $connection;
    private ReflectionClass $reflection;

    protected function setUp(): void
    {
        $this->aiPlatform = $this->createMock(AIPlatform::class);
        $this->connection = $this->createMock(Connection::class);
        
        $this->command = new GenerateCommand(
            $this->aiPlatform,
            $this->connection,
            'test-api-key',
            'gemini-1.5-flash'
        );
        
        $this->reflection = new ReflectionClass($this->command);
    }

    public function testCommandConfiguration(): void
    {
        $this->assertEquals('ai:content:generate', $this->command->getName());
        $this->assertEquals('Advanced AI content generation with interactive options', $this->command->getDescription());
        
        $definition = $this->command->getDefinition();
        
        // Test required arguments
        $this->assertTrue($definition->hasArgument('page-path'));
        $this->assertTrue($definition->hasArgument('url'));
        $this->assertTrue($definition->hasArgument('prompt'));
        $this->assertTrue($definition->getArgument('page-path')->isRequired());
        $this->assertTrue($definition->getArgument('url')->isRequired());
        $this->assertTrue($definition->getArgument('prompt')->isRequired());
        
        // Test options with defaults
        $this->assertTrue($definition->hasOption('position'));
        $this->assertTrue($definition->hasOption('locale'));
        $this->assertTrue($definition->hasOption('headline'));
        $this->assertTrue($definition->hasOption('temperature'));
        $this->assertTrue($definition->hasOption('format'));
        $this->assertTrue($definition->hasOption('dry-run'));
        
        // Test default values
        $this->assertEquals('2', $definition->getOption('position')->getDefault());
        $this->assertEquals('de', $definition->getOption('locale')->getDefault());
        $this->assertEquals('0.3', $definition->getOption('temperature')->getDefault());
        $this->assertEquals('seo', $definition->getOption('format')->getDefault());
    }

    public function testTemperatureValidation(): void
    {
        $application = new Application();
        $application->add($this->command);
        
        $commandTester = new CommandTester($this->command);
        
        // Mock provider with generateStructuredContent method
        $mockProvider = $this->createMock(\App\AI\GeminiProvider::class);
        $mockProvider->method('generateStructuredContent')
                    ->willThrowException(new \Exception('Mocked error to stop execution'));
        
        $this->aiPlatform->method('getProvider')->with('gemini')->willReturn($mockProvider);
        
        // Test temperature clamping - too low
        $commandTester->execute([
            'page-path' => '/cmf/example/contents/test',
            'url' => 'https://example.com',
            'prompt' => 'test prompt',
            '--temperature' => '0.05',  // Below minimum
            '--dry-run' => true
        ]);
        
        // Should clamp to 0.1 minimum
        $display = $commandTester->getDisplay();
        $this->assertStringContainsString('0.1 (Creativity Level)', $display);
    }

    public function testTemperatureValidationHigh(): void
    {
        $application = new Application();
        $application->add($this->command);
        
        $commandTester = new CommandTester($this->command);
        
        // Mock provider with generateStructuredContent method
        $mockProvider = $this->createMock(\App\AI\GeminiProvider::class);
        $mockProvider->method('generateStructuredContent')
                    ->willThrowException(new \Exception('Mocked error to stop execution'));
        
        $this->aiPlatform->method('getProvider')->with('gemini')->willReturn($mockProvider);
        
        // Test temperature clamping - too high
        $commandTester->execute([
            'page-path' => '/cmf/example/contents/test',
            'url' => 'https://example.com',
            'prompt' => 'test prompt',
            '--temperature' => '1.5',  // Above maximum
            '--dry-run' => true
        ]);
        
        // Should clamp to 1.0 maximum
        $display = $commandTester->getDisplay();
        $this->assertStringContainsString('1.0 (Creativity Level)', $display);
    }

    public function testCreateAnalysisPrompt(): void
    {
        $method = $this->reflection->getMethod('createAnalysisPrompt');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command, 'Test user prompt', 'technical', 'en');
        
        $this->assertIsString($result);
        $this->assertStringContainsString('Test user prompt', $result);
        $this->assertStringContainsString('technical', $result);
    }

    public function testCreateContentPrompt(): void
    {
        $method = $this->reflection->getMethod('createContentPrompt');
        $method->setAccessible(true);
        
        $analysis = 'Detailed analysis content';
        $userPrompt = 'Create comprehensive guide';
        $format = 'tutorial';
        $temperature = 0.6;
        $locale = 'de';
        
        $result = $method->invoke($this->command, $analysis, $userPrompt, $format, $temperature, $locale);
        
        $this->assertIsString($result);
        $this->assertStringContainsString($analysis, $result);
        $this->assertStringContainsString($userPrompt, $result);
        $this->assertStringContainsString('tutorial', $result);
        $this->assertStringContainsString('Temperatur: 0.6', $result);
    }

    public function testProcessAIContentWithStructuredResponse(): void
    {
        $method = $this->reflection->getMethod('processAIContent');
        $method->setAccessible(true);
        
        $mockResponse = $this->createMock(\App\AI\Response\AIResponse::class);
        $structuredContent = [
            'headline' => 'Generated Headline',
            'introduction' => 'Test introduction',
            'sections' => [
                [
                    'heading' => 'Section 1', 
                    'content' => 'Section 1 content'
                ]
            ]
        ];
        $mockResponse->method('getContent')->willReturn('Plain text content');
        $mockResponse->method('getMetadataValue')->with('structured_content')->willReturn($structuredContent);
        
        $result = $method->invoke($this->command, $mockResponse, 'Custom Headline', 'https://source.com');
        
        $this->assertIsArray($result);
        $this->assertEquals('Custom Headline', $result['headline']);
        $this->assertEquals('headline-paragraphs', $result['type']);
        $this->assertIsArray($result['items']);
    }

    public function testProcessAIContentWithPlainText(): void
    {
        $method = $this->reflection->getMethod('processAIContent');
        $method->setAccessible(true);
        
        $mockResponse = $this->createMock(\App\AI\Response\AIResponse::class);
        $mockResponse->method('getContent')->willReturn("# Main Title\n\nFirst paragraph content.\n\nSecond paragraph content.");
        $mockResponse->method('getMetadataValue')->with('structured_content')->willReturn(null);
        
        $result = $method->invoke($this->command, $mockResponse, 'Main Title', 'https://source.com');
        
        $this->assertIsArray($result);
        $this->assertEquals('Main Title', $result['headline']);
        $this->assertEquals('headline-paragraphs', $result['type']);
        $this->assertIsArray($result['items']);
    }

    public function testCreateSuluBlocksFromStructured(): void
    {
        $method = $this->reflection->getMethod('createSuluBlocksFromStructured');
        $method->setAccessible(true);
        
        $structured = [
            'headline' => 'Auto Generated',
            'introduction' => 'Test introduction',
            'sections' => [
                [
                    'heading' => 'Section 1', 
                    'content' => 'Section 1 content'
                ]
            ],
            'conclusion' => 'Test conclusion'
        ];
        
        $result = $method->invoke($this->command, $structured, 'Manual Headline', 'https://example.com');
        
        $this->assertIsArray($result);
        $this->assertEquals('Manual Headline', $result['headline']);
        $this->assertEquals('headline-paragraphs', $result['type']);
        $this->assertGreaterThan(0, count($result['items']));
    }

    public function testCreateSuluBlocksFromText(): void
    {
        $method = $this->reflection->getMethod('createSuluBlocksFromText');
        $method->setAccessible(true);
        
        $content = "Paragraph one with content.\n\nParagraph two with more details.\n\nParagraph three final thoughts.";
        
        $result = $method->invoke($this->command, $content, 'Test Title', 'https://example.com');
        
        $this->assertIsArray($result);
        $this->assertEquals('Test Title', $result['headline']);
        $this->assertEquals('headline-paragraphs', $result['type']);
        $this->assertCount(3, $result['items']);
        
        // Check content preservation - content is wrapped in <p> tags
        $this->assertEquals('<p>Paragraph one with content.</p>', $result['items'][0]['description']);
        $this->assertEquals('<p>Paragraph two with more details.</p>', $result['items'][1]['description']);
        $this->assertEquals('<p>Paragraph three final thoughts.</p>', $result['items'][2]['description']);
    }

    public function testConvertToPagePath(): void
    {
        $method = $this->reflection->getMethod('convertToPagePath');
        $method->setAccessible(true);
        
        // Test URL conversion - path gets nca-php-glossar transformation
        $url = 'https://sulu-never-code-alone.ddev.site/de/blog/test-post';
        $result = $method->invoke($this->command, $url);
        $this->assertEquals('/cmf/example/contents/blog/test-post', $result);
        
        // Test CMF path pass-through
        $path = '/cmf/example/contents/custom/path';
        $result = $method->invoke($this->command, $path);
        $this->assertEquals($path, $result);
    }

    /**
     * @dataProvider localeProvider
     */
    public function testCreateAnalysisPromptWithLocales(string $locale, string $expectedTarget): void
    {
        $method = $this->reflection->getMethod('createAnalysisPrompt');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command, 'Test prompt', 'seo', $locale);
        
        $this->assertStringContainsString($expectedTarget, $result);
    }

    public function localeProvider(): array
    {
        return [
            'german' => ['de', 'Deutsche PHP/Symfony-Entwickler'],
            'english' => ['en', 'Deutsche PHP/Symfony-Entwickler'], // Still German target audience
        ];
    }

    /**
     * @dataProvider formatProvider
     */
    public function testCreateContentPromptWithFormats(string $format, array $expectedKeywords): void
    {
        $method = $this->reflection->getMethod('createContentPrompt');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command, 'Analysis', 'Prompt', $format, 0.5, 'de');
        
        foreach ($expectedKeywords as $keyword) {
            $this->assertStringContainsString($keyword, $result);
        }
    }

    public function formatProvider(): array
    {
        return [
            'seo' => ['seo', ['SEO-optimiert', 'Keywords']],
            'technical' => ['technical', ['Code-Beispiele', 'Implementierung']],
            'tutorial' => ['tutorial', ['Schritt-für-Schritt', 'Lern-orientierte']],
        ];
    }

    public function testCommandRequiresAllArguments(): void
    {
        $this->expectException(\Symfony\Component\Console\Exception\RuntimeException::class);
        
        $application = new Application();
        $application->add($this->command);
        
        $commandTester = new CommandTester($this->command);
        
        // Should fail without all required arguments
        $commandTester->execute([
            'page-path' => '/test',
            // Missing url and prompt
        ]);
    }

    public function testDefaultOptionValues(): void
    {
        $application = new Application();
        $application->add($this->command);
        
        $commandTester = new CommandTester($this->command);
        
        // Mock provider with generateStructuredContent method
        $mockProvider = $this->createMock(\App\AI\GeminiProvider::class);
        $mockProvider->method('generateStructuredContent')
                    ->willThrowException(new \Exception('Mocked error to stop execution'));
        
        $this->aiPlatform->method('getProvider')->with('gemini')->willReturn($mockProvider);
        
        $commandTester->execute([
            'page-path' => '/cmf/example/contents/test',
            'url' => 'https://example.com',
            'prompt' => 'test prompt',
            '--dry-run' => true
        ]);
        
        $display = $commandTester->getDisplay();
        
        // Check default values are used - looking at the actual output format
        $this->assertStringContainsString('2', $display); // Position
        $this->assertStringContainsString('de', $display); // Locale
        $this->assertStringContainsString('0.3 (Creativity Level)', $display); // Temperature
        $this->assertStringContainsString('seo', $display); // Format
    }
}