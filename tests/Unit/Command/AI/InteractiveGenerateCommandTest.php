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

    public function testAddContentSerializedFormatArrayInsertion(): void
    {
        // This test will expose the array duplication bug
        $method = $this->reflection->getMethod('addContentSerializedFormat');
        $method->setAccessible(true);

        // Create mock XML structure
        $xml = new \DOMDocument();
        $xml->loadXML('<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks" sv:type="String" sv:multi-valued="0">
        <sv:value length="160">' . base64_encode(serialize([
            ['type' => 'description', 'description' => 'Block A'],
            ['type' => 'description', 'description' => 'Block B'], 
            ['type' => 'description', 'description' => 'Block C']
        ])) . '</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">3</sv:value>
    </sv:property>
</sv:node>');

        $xpath = new \DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

        // Mock connection to capture executeStatement calls
        $sqlQueries = [];
        $this->connection->method('executeStatement')
            ->willReturnCallback(function($sql, $params) use (&$sqlQueries) {
                $sqlQueries[] = ['sql' => $sql, 'params' => $params];
                return 1;
            });

        $newContent = [
            'type' => 'headline-paragraphs',
            'headline' => 'New Content',
            'items' => [['type' => 'description', 'description' => 'New block content']]
        ];

        // Insert at position 1 (between Block A and Block B)
        $result = $method->invoke($this->command, $xml, $xpath, $newContent, 1, 'de', '/test/path');

        $this->assertTrue($result);

        // Verify the blocks were inserted correctly without duplication
        $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks"]');
        $blocksValue = $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
        $resultBlocks = unserialize(base64_decode($blocksValue));

        // Should be 4 blocks total (3 original + 1 new)
        $this->assertCount(4, $resultBlocks, 'Should have exactly 4 blocks after insertion');
        
        // Verify correct order without duplicates
        $this->assertEquals('Block A', $resultBlocks[0]['description']);
        $this->assertEquals('New Content', $resultBlocks[1]['headline']); // New content at position 1
        $this->assertEquals('Block B', $resultBlocks[2]['description']); // Block B should be at position 2
        $this->assertEquals('Block C', $resultBlocks[3]['description']); // Block C should be at position 3

        // Verify length was updated correctly
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]');
        $length = (int)$lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
        $this->assertEquals(4, $length, 'Length should be updated to 4');
    }

    public function testAddContentToSuluPageWithSerializedFormat(): void
    {
        $method = $this->reflection->getMethod('addContentToSuluPage');
        $method->setAccessible(true);

        // Mock database result with serialized format
        $mockXml = '<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks" sv:type="String" sv:multi-valued="0">
        <sv:value length="120">' . base64_encode(serialize([
            ['type' => 'description', 'description' => 'Existing Block 1'],
            ['type' => 'description', 'description' => 'Existing Block 2']
        ])) . '</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
</sv:node>';

        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => $mockXml]);

        $executedQueries = [];
        $this->connection->method('executeStatement')
            ->willReturnCallback(function($sql, $params) use (&$executedQueries) {
                $executedQueries[] = ['sql' => $sql, 'params' => $params];
                return 1;
            });

        $newContent = [
            'type' => 'headline-paragraphs',
            'headline' => 'Test Headline',
            'items' => [['type' => 'description', 'description' => 'Test content']]
        ];

        $result = $method->invoke($this->command, '/test/path', $newContent, 1, 'de');

        $this->assertTrue($result);
        
        // Verify both workspaces were updated
        $this->assertCount(2, $executedQueries);
        $this->assertStringContainsString('default', $executedQueries[0]['params'][2]);
        $this->assertStringContainsString('default_live', $executedQueries[1]['params'][2]);

        // Extract and verify the serialized blocks from the query
        $updatedXml = $executedQueries[0]['params'][0];
        $doc = new \DOMDocument();
        $doc->loadXML($updatedXml);
        $xpath = new \DOMXPath($doc);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
        
        $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks"]');
        $blocksValue = $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
        $finalBlocks = unserialize(base64_decode($blocksValue));

        // Critical assertion: should be exactly 3 blocks, not more due to duplication
        $this->assertCount(3, $finalBlocks, 'Should have exactly 3 blocks without duplication');
        
        // Verify correct insertion order
        $this->assertEquals('Existing Block 1', $finalBlocks[0]['description']);
        $this->assertEquals('Test Headline', $finalBlocks[1]['headline']); // New at position 1
        $this->assertEquals('Existing Block 2', $finalBlocks[2]['description']); // Moved to position 2
    }


    public function testAddContentToSuluPageWithLocaleEn(): void
    {
        // This test exposes the real bug - locale handling
        $method = $this->reflection->getMethod('addContentToSuluPage');
        $method->setAccessible(true);

        // Create XML with GERMAN locale blocks, but try to insert with ENGLISH locale
        $mockXml = '<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks" sv:type="String" sv:multi-valued="0">
        <sv:value length="120">' . base64_encode(serialize([
            ['type' => 'description', 'description' => 'German Block 1'],
            ['type' => 'description', 'description' => 'German Block 2']
        ])) . '</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">2</sv:value>
    </sv:property>
</sv:node>';

        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => $mockXml]);

        $newContent = [
            'type' => 'headline-paragraphs',
            'headline' => 'English Content',
            'items' => []
        ];

        // Try to insert with ENGLISH locale - this should throw an exception
        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage("No content found for locale 'en' on page '/test/path'");

        // InteractiveGenerateCommand should throw exception because it can't find 'i18n:en-blocks'
        // QuickGenerateCommand would succeed because it hardcodes 'de'
        $method->invoke($this->command, '/test/path', $newContent, 1, 'en');
    }

    public function testAddContentToSuluPageWithMismatchedLocaleXMLFormat(): void
    {
        // Test the XML format path with locale mismatch
        $method = $this->reflection->getMethod('addContentToSuluPage');
        $method->setAccessible(true);

        // Create XML with German XML format (no serialized blocks)
        $mockXml = '<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">description</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-settings#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="2">[]</sv:value>
    </sv:property>
</sv:node>';

        $this->connection->method('fetchAssociative')
            ->willReturn(['props' => $mockXml]);

        $newContent = [
            'type' => 'headline-paragraphs',
            'headline' => 'English Content', 
            'items' => []
        ];

        // Try to insert with English locale on German page
        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage("No content found for locale 'en' on page '/test/path'");

        // Should throw exception because it looks for 'i18n:en-blocks-length' but only 'i18n:de-blocks-length' exists
        $method->invoke($this->command, '/test/path', $newContent, 1, 'en');
    }

    public function testCreateSuluBlocksFromStructuredGeneratesValidBlocks(): void
    {
        // Test that structured content processing creates valid blocks
        $method = $this->reflection->getMethod('createSuluBlocksFromStructured');
        $method->setAccessible(true);

        $structuredContent = [
            'headline' => 'Test Article Headline',
            'introduction' => 'This is the introduction paragraph.',
            'sections' => [
                [
                    'heading' => 'First Section',
                    'content' => 'Content of the first section with important details.',
                    'key_points' => ['Point 1', 'Point 2', 'Point 3']
                ],
                [
                    'heading' => 'Second Section', 
                    'content' => 'Content of the second section.',
                    'code_example' => '<?php echo "Hello World"; ?>'
                ]
            ],
            'conclusion' => 'This is the conclusion paragraph.'
        ];

        $result = $method->invoke($this->command, $structuredContent, 'Custom Title', 'https://test.com');

        // Verify structure
        $this->assertEquals('headline-paragraphs', $result['type']);
        $this->assertEquals('Custom Title', $result['headline']);
        $this->assertIsArray($result['items']);
        
        // Count expected blocks: introduction + 2*(heading+content) + points + code + conclusion = 8 blocks
        $expectedBlockCount = 1 + // introduction
                            2 + // section 1: heading + content  
                            1 + // key points list
                            2 + // section 2: heading + content
                            1 + // code example
                            1;  // conclusion
        
        $this->assertCount($expectedBlockCount, $result['items'], 'Should create exactly ' . $expectedBlockCount . ' blocks');
        
        // Verify block types and content
        $this->assertEquals('description', $result['items'][0]['type']);
        $this->assertStringContainsString('<p>This is the introduction paragraph.</p>', $result['items'][0]['description']);
        
        // Check for heading block
        $headingFound = false;
        foreach ($result['items'] as $item) {
            if ($item['type'] === 'description' && str_contains($item['description'], '<h2>First Section</h2>')) {
                $headingFound = true;
                break;
            }
        }
        $this->assertTrue($headingFound, 'Should contain H2 heading block');
        
        // Check for code block
        $codeFound = false;
        foreach ($result['items'] as $item) {
            if ($item['type'] === 'code' && isset($item['code'])) {
                // Code is HTML escaped, so check for the escaped version
                $this->assertStringContainsString('echo &quot;Hello World&quot;', $item['code']);
                $codeFound = true;
                break;
            }
        }
        $this->assertTrue($codeFound, 'Should contain code block');
    }

    public function testAddContentXMLFormatGeneratesCorrectLengthAttributes(): void
    {
        // Test that the XML format generates correct length attributes (regression test)
        $method = $this->reflection->getMethod('addContentXMLFormat');
        $method->setAccessible(true);

        // Create mock XML with German XML format
        $xml = new \DOMDocument();
        $xml->loadXML('<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="i18n:de-blocks-length" sv:type="Long" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
</sv:node>');

        $xpath = new \DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

        $this->connection->method('executeStatement')->willReturn(1);

        $content = [
            'type' => 'headline-paragraphs',
            'headline' => 'Test Headline',
            'items' => [
                ['type' => 'description', 'description' => 'Item 1'],
                ['type' => 'description', 'description' => 'Item 2'],
                ['type' => 'description', 'description' => 'Item 3'],
                ['type' => 'description', 'description' => 'Item 4'],
                ['type' => 'description', 'description' => 'Item 5'],
                ['type' => 'description', 'description' => 'Item 6'],
                ['type' => 'description', 'description' => 'Item 7'],
                ['type' => 'description', 'description' => 'Item 8'],
                ['type' => 'description', 'description' => 'Item 9'],
                ['type' => 'description', 'description' => 'Item 10'], // 10 items = 2 digit count
            ]
        ];

        $result = $method->invoke($this->command, $xml, $xpath, $content, 1, 'de', '/test/path');

        $this->assertTrue($result);

        // Verify that the items-length property has correct length attribute
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-items#1-length"]//sv:value');
        $this->assertGreaterThan(0, $lengthNodes->length, 'Should have items-length property');
        
        $lengthValue = $lengthNodes->item(0);
        $itemCount = count($content['items']); // 10
        $expectedLength = strlen((string)$itemCount); // strlen("10") = 2
        
        $this->assertEquals($expectedLength, $lengthValue->getAttribute('length'), 
            "Length attribute should be $expectedLength for count $itemCount");
        $this->assertEquals($itemCount, $lengthValue->textContent,
            "Text content should equal the item count");
    }

    public function testAddContentToSuluPageWithInvalidContent(): void
    {
        $method = $this->reflection->getMethod('addContentToSuluPage');
        $method->setAccessible(true);

        // Test with missing required keys
        $invalidContent = [
            'headline' => 'Missing type and items'
        ];

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage("Content must have 'type', 'headline', and 'items' keys");

        $method->invoke($this->command, '/test/path', $invalidContent, 1, 'de');
    }

    public function testAddContentToSuluPageWithNegativePosition(): void
    {
        $method = $this->reflection->getMethod('addContentToSuluPage');
        $method->setAccessible(true);

        $validContent = [
            'type' => 'headline-paragraphs',
            'headline' => 'Test',
            'items' => []
        ];

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage("Position must be non-negative, got: -1");

        $method->invoke($this->command, '/test/path', $validContent, -1, 'de');
    }

    public function testAddContentToSuluPageWithEmptyPath(): void
    {
        $method = $this->reflection->getMethod('addContentToSuluPage');
        $method->setAccessible(true);

        $validContent = [
            'type' => 'headline-paragraphs',
            'headline' => 'Test',
            'items' => []
        ];

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage("Page path cannot be empty");

        $method->invoke($this->command, '', $validContent, 1, 'de');
    }

    public function testAddContentToSuluPageWithNonexistentPage(): void
    {
        $method = $this->reflection->getMethod('addContentToSuluPage');
        $method->setAccessible(true);

        // Mock database to return no result
        $this->connection->method('fetchAssociative')->willReturn(false);

        $validContent = [
            'type' => 'headline-paragraphs',
            'headline' => 'Test',
            'items' => []
        ];

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage("Page not found at path '/nonexistent/path' in default workspace");

        $method->invoke($this->command, '/nonexistent/path', $validContent, 1, 'de');
    }
}