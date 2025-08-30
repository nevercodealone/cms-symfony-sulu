<?php

namespace App\Tests\Unit\Command\AI;

use App\AI\Platform\AIPlatform;
use App\Command\AI\InteractiveGenerateCommand;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\TestCase;
use ReflectionClass;
use Symfony\Component\Console\Style\SymfonyStyle;

class InteractiveGenerateCommandTest extends TestCase
{
    private InteractiveGenerateCommand $command;
    private AIPlatform $aiPlatform;
    private Connection $connection;
    private ReflectionClass $reflection;

    protected function setUp(): void
    {
        $this->aiPlatform = $this->createMock(AIPlatform::class);
        $this->connection = $this->createMock(Connection::class);
        
        $this->command = new InteractiveGenerateCommand(
            $this->aiPlatform,
            $this->connection,
            'test-api-key',
            'gemini-1.5-flash'
        );
        
        $this->reflection = new ReflectionClass($this->command);
    }

    public function testCommandConfiguration(): void
    {
        $this->assertEquals('ai:content:interactive', $this->command->getName());
        $this->assertEquals('Interactive AI content generation with step-by-step guidance', $this->command->getDescription());
        
        $definition = $this->command->getDefinition();
        
        // Test options (no required arguments in interactive mode)
        $this->assertTrue($definition->hasOption('page'));
        $this->assertTrue($definition->hasOption('position'));
        $this->assertTrue($definition->hasOption('locale'));
        $this->assertTrue($definition->hasOption('format'));
        $this->assertTrue($definition->hasOption('temperature'));
        $this->assertTrue($definition->hasOption('dry-run'));
    }

    public function testCreateAnalysisPrompt(): void
    {
        $method = $this->reflection->getMethod('createAnalysisPrompt');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command, 'Test user prompt', 'seo', 'de');
        
        $this->assertIsString($result);
        $this->assertStringContainsString('Test user prompt', $result);
        $this->assertStringContainsString('seo', $result);
        $this->assertStringContainsString('Deutsche PHP/Symfony-Entwickler', $result);
    }

    public function testCreateContentPromptWithTemperature(): void
    {
        $method = $this->reflection->getMethod('createContentPrompt');
        $method->setAccessible(true);
        
        $analysis = 'Test analysis content';
        $userPrompt = 'Create technical article';
        $format = 'technical';
        $temperature = 0.7;
        $locale = 'de';
        
        $result = $method->invoke($this->command, $analysis, $userPrompt, $format, $temperature, $locale);
        
        $this->assertIsString($result);
        $this->assertStringContainsString($analysis, $result);
        $this->assertStringContainsString($userPrompt, $result);
        $this->assertStringContainsString('technical', $result);
        $this->assertStringContainsString('Kreativität: 0.7', $result);
    }

    public function testGetSuluContentSchema(): void
    {
        $method = $this->reflection->getMethod('getSuluContentSchema');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command);
        
        $this->assertIsArray($result);
        $this->assertArrayHasKey('headline', $result);
        $this->assertArrayHasKey('introduction', $result);
        $this->assertArrayHasKey('sections', $result);
        $this->assertArrayHasKey('conclusion', $result);
        $this->assertArrayHasKey('keywords', $result);
    }

    public function testProcessAIContentWithStructuredData(): void
    {
        $method = $this->reflection->getMethod('processAIContent');
        $method->setAccessible(true);
        
        $mockResponse = $this->createMock(\App\AI\Response\AIResponse::class);
        $mockResponse->method('getContent')->willReturn(json_encode([
            'type' => 'headline-paragraphs',
            'headline' => 'Test Headline',
            'items' => [
                ['type' => 'description', 'description' => 'Test paragraph']
            ]
        ]));
        
        $result = $method->invoke($this->command, $mockResponse, 'Custom Headline', 'https://test.com');
        
        $this->assertIsArray($result);
        $this->assertArrayHasKey('type', $result);
        $this->assertArrayHasKey('headline', $result);
        $this->assertEquals('Custom Headline', $result['headline']);
    }

    public function testProcessAIContentWithPlainText(): void
    {
        $method = $this->reflection->getMethod('processAIContent');
        $method->setAccessible(true);
        
        $mockResponse = $this->createMock(\App\AI\Response\AIResponse::class);
        $mockResponse->method('getContent')->willReturn('# Plain Text Headline\n\nSome content here.');
        $mockResponse->method('getMetadataValue')->with('structured_content')->willReturn(null);
        
        $result = $method->invoke($this->command, $mockResponse, 'Plain Text Headline', 'https://test.com');
        
        $this->assertIsArray($result);
        $this->assertEquals('headline-paragraphs', $result['type']);
        $this->assertEquals('Plain Text Headline', $result['headline']);
    }

    public function testCreateSuluBlocksFromStructured(): void
    {
        $method = $this->reflection->getMethod('createSuluBlocksFromStructured');
        $method->setAccessible(true);
        
        $structured = [
            'headline' => 'Original Headline',
            'introduction' => 'Test introduction',
            'sections' => [
                [
                    'heading' => 'Section 1', 
                    'content' => 'Section 1 content'
                ]
            ],
            'conclusion' => 'Test conclusion'
        ];
        
        $result = $method->invoke($this->command, $structured, 'Custom Headline', 'https://test.com');
        
        $this->assertIsArray($result);
        $this->assertEquals('Custom Headline', $result['headline']);
        $this->assertEquals('headline-paragraphs', $result['type']);
        $this->assertGreaterThan(0, count($result['items']));
    }

    public function testCreateSuluBlocksFromText(): void
    {
        $method = $this->reflection->getMethod('createSuluBlocksFromText');
        $method->setAccessible(true);
        
        $content = "First paragraph.\n\nSecond paragraph with more content.\n\nThird paragraph.";
        
        $result = $method->invoke($this->command, $content, 'Test Headline', 'https://test.com');
        
        $this->assertIsArray($result);
        $this->assertEquals('Test Headline', $result['headline']);
        $this->assertEquals('headline-paragraphs', $result['type']);
        $this->assertCount(3, $result['items']);
        
        // Check first item - content is wrapped in <p> tags
        $this->assertEquals('description', $result['items'][0]['type']);
        $this->assertEquals('<p>First paragraph.</p>', $result['items'][0]['description']);
    }

    public function testConvertToPagePathWithUrl(): void
    {
        $method = $this->reflection->getMethod('convertToPagePath');
        $method->setAccessible(true);
        
        $url = 'https://sulu-never-code-alone.ddev.site/de/php-glossar/phpstan';
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

    public function testAskWithRetrySuccess(): void
    {
        $method = $this->reflection->getMethod('askWithRetry');
        $method->setAccessible(true);
        
        $io = $this->createMock(SymfonyStyle::class);
        $io->expects($this->once())
           ->method('ask')
           ->willReturn('valid-answer');
        
        $validator = fn($value) => $value === 'valid-answer';
        
        $result = $method->invoke($this->command, $io, 'Test question', 'default', $validator, 'Error message');
        
        $this->assertEquals('valid-answer', $result);
    }

    /**
     * @dataProvider localeProvider
     */
    public function testCreateAnalysisPromptWithDifferentLocales(string $locale, string $expectedContent): void
    {
        $method = $this->reflection->getMethod('createAnalysisPrompt');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command, 'Test prompt', 'seo', $locale);
        
        $this->assertStringContainsString($expectedContent, $result);
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
    public function testCreateContentPromptWithDifferentFormats(string $format, string $expectedContent): void
    {
        $method = $this->reflection->getMethod('createContentPrompt');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command, 'Analysis', 'Prompt', $format, 0.5, 'de');
        
        $this->assertStringContainsString($expectedContent, $result);
    }

    public function formatProvider(): array
    {
        return [
            'seo' => ['seo', 'SEO-optimiert'],
            'technical' => ['technical', 'Code-Beispiele'],
            'tutorial' => ['tutorial', 'Schritt-für-Schritt'],
        ];
    }

    /**
     * @dataProvider temperatureProvider
     */
    public function testCreateContentPromptWithDifferentTemperatures(float $temperature, string $expectedCreativity): void
    {
        $method = $this->reflection->getMethod('createContentPrompt');
        $method->setAccessible(true);
        
        $result = $method->invoke($this->command, 'Analysis', 'Prompt', 'seo', $temperature, 'de');
        
        $this->assertStringContainsString("Kreativität: $expectedCreativity", $result);
    }

    public function temperatureProvider(): array
    {
        return [
            'low' => [0.1, '0.1'],
            'medium' => [0.5, '0.5'],
            'high' => [0.9, '0.9'],
        ];
    }
}