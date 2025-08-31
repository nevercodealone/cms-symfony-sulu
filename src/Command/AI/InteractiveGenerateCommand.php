<?php

namespace App\Command\AI;

use App\AI\Platform\AIPlatform;
use App\AI\GeminiProvider;
use App\AI\Logger\AIActivityLogger;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Question\ChoiceQuestion;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Doctrine\DBAL\Connection;
use Exception;
use DOMDocument;
use DOMXPath;
use JsonException;

#[AsCommand(
    name: 'ai:content:interactive',
    description: 'Interactive AI content generation with step-by-step guidance'
)]
class InteractiveGenerateCommand extends Command
{
    public function __construct(
        private AIPlatform $aiPlatform,
        private Connection $connection,
        #[Autowire(env: 'GEMINI_API_KEY')] private string $geminiApiKey,
        #[Autowire(env: 'GEMINI_MODEL')] private string $geminiModel = 'gemini-1.5-flash'
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('page', 'p', InputOption::VALUE_REQUIRED, 'Default Sulu page path', '/cmf/example/contents/blog/ai-generated')
            ->addOption('position', null, InputOption::VALUE_REQUIRED, 'Default insert position', '2')
            ->addOption('locale', 'l', InputOption::VALUE_REQUIRED, 'Default locale', 'de')
            ->addOption('format', 'f', InputOption::VALUE_REQUIRED, 'Default format (seo|technical|tutorial)', 'seo')
            ->addOption('temperature', 't', InputOption::VALUE_REQUIRED, 'Default AI temperature', '0.3')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'Default to dry run mode');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        
        $io->title('NCA AI Assistant - Interactive Content Generator');
        $io->text('Interactive step-by-step content generation powered by Gemini AI');

        // Initialize AI Platform
        $io->section('Initializing AI Platform');
        try {
            $geminiProvider = new GeminiProvider($this->geminiApiKey, $this->geminiModel);
            $this->aiPlatform->addProvider('gemini', $geminiProvider);
            $this->aiPlatform->setDefaultProvider('gemini');
            $io->success('AI Platform ready!');
        } catch (Exception $e) {
            $io->error('Failed to initialize AI Platform: ' . $e->getMessage());
            $io->note('Make sure GEMINI_API_KEY is set in your environment');
            return Command::FAILURE;
        }

        // Step 1: Target Configuration
        $io->section('Step 1: Target Configuration');
        $io->text('Where should the content be published?');
        $io->note([
            'You can use either:',
            '- Full URL: https://sulu-never-code-alone.ddev.site/de/php-glossar/class-leak',
            '- CMF Path: /cmf/example/contents/nca-php-glossar/class-leak'
        ]);

        $pagePath = $this->askWithRetry($io, $input, 'Target Sulu Page (URL or CMF Path)', 
            $input->getOption('page'), 
            function($value) {
                return !empty($value);
            }, 
            'Target page is required!'
        );
        $pagePath = $this->convertToPagePath($pagePath);

        $position = $this->askWithRetry($io, $input, 'Insert Position', 
            $input->getOption('position'), 
            function($value) {
                $pos = (int) $value;
                return $pos >= 0 && $pos <= 50;
            }, 
            'Position must be between 0 and 50'
        );
        $position = (int) $position;

        $locale = $this->askWithRetry($io, $input, 'Locale', 
            $input->getOption('locale'), 
            function($value) {
                return preg_match('/^[a-z]{2}$/', $value);
            }, 
            'Locale must be a 2-letter language code (e.g., de, en)'
        );

        // Step 2: Source Information
        $io->section('Step 2: Source Information');
        $io->text('What URL should be analyzed for content?');

        $url = $this->askWithRetry($io, $input, 'Source URL (GitHub, docs, articles)', 
            null, 
            function($value) {
                return !empty($value) && filter_var($value, FILTER_VALIDATE_URL);
            }, 
            'Please enter a valid HTTP/HTTPS URL'
        );

        // Step 3: Content Strategy
        $io->section('Step 3: Content Strategy');
        $io->text('How should the content be formatted?');

        $formatChoice = $io->choice('Choose content format', [
            'seo' => 'SEO (Keywords, 4000-6000 chars, search optimized)',
            'technical' => 'Technical (Code examples, implementation details)',
            'tutorial' => 'Tutorial (Step-by-step, learning oriented)'
        ], $input->getOption('format'));

        $temperature = $this->askWithRetry($io, $input, 'AI Temperature (0.1-1.0, lower=more focused)', 
            $input->getOption('temperature'), 
            function($value) {
                $temp = (float) $value;
                return $temp >= 0.1 && $temp <= 1.0;
            }, 
            'Temperature must be between 0.1 and 1.0'
        );
        $temperature = (float) $temperature;

        // Step 4: Content Request
        $io->section('Step 4: Content Request');
        $io->text('Describe what content you want to create:');
        $io->note('Example: "Erstelle einen deutschen Artikel über die neuesten PHP Features"');

        $customPrompt = $this->askWithRetry($io, $input, 'Content Prompt', 
            null, 
            function($value) {
                return !empty($value);
            }, 
            'Content prompt is required!'
        );

        $headline = $io->ask('Custom Headline (optional, auto-generated if empty)');

        // Step 5: Execution Mode
        $io->section('Step 5: Execution Mode');
        $dryRun = $input->getOption('dry-run') || 
                  $io->choice('How should this be executed?', [
                      'dry-run' => 'Dry Run (Preview only, safe)',
                      'live' => 'Live Update (Modify Sulu page)'
                  ], 'dry-run') === 'dry-run';

        // Summary
        $io->section('Configuration Summary');
        $io->definitionList(
            ['Target' => sprintf('%s (position %d, locale: %s)', $pagePath, $position, $locale)],
            ['Source' => $url],
            ['Format' => sprintf('%s (temperature: %.1f)', $formatChoice, $temperature)],
            ['Prompt' => substr($customPrompt, 0, 60) . (strlen($customPrompt) > 60 ? '...' : '')],
            ['Headline' => $headline ?: 'Auto-generated'],
            ['Mode' => $dryRun ? 'Preview Only' : 'Live Update']
        );

        if (!$io->confirm('Continue with this configuration?', true)) {
            $io->note('Operation cancelled');
            return Command::SUCCESS;
        }

        // Execute AI content generation
        $io->section('AI Content Generation');

        try {
            // Step 1: Analyze URL
            $io->text('Analyzing source URL...');
            $analysisPrompt = $this->createAnalysisPrompt($customPrompt, $formatChoice, $locale);
            
            $startTime = microtime(true);
            $analysisResponse = $this->aiPlatform->analyzeUrl($url, $analysisPrompt);
            $analysisTime = round((microtime(true) - $startTime) * 1000);
            
            $io->success(sprintf('Analysis completed in %dms', $analysisTime));
            $analysisTokens = $analysisResponse->getUsage()['totalTokens'] ?? 0;
            $io->text('Tokens used: ' . $analysisTokens);

            // Step 2: Generate content
            $io->text('Generating structured content...');
            $contentPrompt = $this->createContentPrompt($analysisResponse->getContent(), $customPrompt, $formatChoice, $temperature, $locale);
            
            $startTime = microtime(true);
            $contentResponse = $this->aiPlatform->getProvider('gemini')->generateStructuredContent(
                $contentPrompt,
                $this->getSuluContentSchema()
            );
            $contentTime = round((microtime(true) - $startTime) * 1000);
            
            $io->success(sprintf('Content generated in %dms', $contentTime));
            $contentTokens = $contentResponse->getUsage()['totalTokens'] ?? 0;
            $io->text('Tokens used: ' . $contentTokens);

        } catch (Exception $e) {
            $io->error('AI generation failed: ' . $e->getMessage());
            return Command::FAILURE;
        }

        // Process content
        $suluContent = $this->processAIContent($contentResponse, $headline, $url);

        // Show preview
        $io->section('Content Preview');
        $this->showContentPreview($io, $suluContent);

        if (!$dryRun) {
            if (!$io->confirm('Add this content to Sulu page?', false)) {
                $io->note('Operation cancelled');
                return Command::SUCCESS;
            }

            $io->text('Adding content to Sulu page...');
            $result = $this->addContentToSuluPage($pagePath, $suluContent, $position, $locale);

            if ($result) {
                $io->success('Content successfully added to Sulu!');
                $webPath = str_replace('/cmf/example/contents', '', $pagePath);
                $io->text('Visit: https://sulu-never-code-alone.ddev.site/' . $locale . $webPath);

                // Log activity
                try {
                    $logger = new AIActivityLogger($this->connection);
                    if ($logger->logAIContentGeneration($pagePath, $locale, $suluContent, $url, 'gemini', $customPrompt)) {
                        $io->text('Activity logged to Sulu');
                    }
                } catch (Exception $e) {
                    $io->warning('Activity logging failed: ' . $e->getMessage());
                }
            } else {
                $io->error('Failed to add content to Sulu page');
                return Command::FAILURE;
            }
        } else {
            $io->note('Dry run completed - no changes made to Sulu page');
        }

        // Final stats
        $totalTokens = $analysisTokens + $contentTokens;
        $io->text(sprintf('Total tokens used: %d', $totalTokens));
        $io->text(sprintf('Total processing time: %dms', $analysisTime + $contentTime));

        $io->success('NCA AI Assistant completed successfully!');
        return Command::SUCCESS;
    }

    private function askWithRetry(SymfonyStyle $io, InputInterface $input, string $question, ?string $default, callable $validator, string $errorMessage): string
    {
        $maxRetries = 3;
        $attempts = 0;
        
        while ($attempts < $maxRetries) {
            $answer = $io->ask($question, $default);
            
            if ($validator($answer)) {
                return $answer;
            }
            
            $attempts++;
            $io->error($errorMessage);
            
            // In non-interactive mode, don't loop forever
            if ($io->isQuiet() || !$input->isInteractive()) {
                throw new \InvalidArgumentException("$errorMessage (non-interactive mode, attempt $attempts/$maxRetries)");
            }
            
            // In interactive mode, ask if user wants to try again
            if ($attempts < $maxRetries && !$io->confirm('Try again?', true)) {
                throw new \RuntimeException('Operation cancelled by user');
            }
        }
        
        throw new \RuntimeException("Failed to get valid input after $maxRetries attempts: $errorMessage");
    }

    private function createAnalysisPrompt(string $userPrompt, string $format, string $locale): string
    {
        $formatInstructions = [
            'seo' => 'SEO-Optimierung mit Keywords und suchmaschinenfreundlicher Struktur',
            'technical' => 'Technische Details, Code-Beispiele und Implementierungsfokus',
            'tutorial' => 'Schritt-für-Schritt Anleitung mit praktischen Beispielen'
        ];

        return "Du bist ein Content-Analyst für deutsche Entwickler-Zielgruppen.

Analysiere den Inhalt dieser URL für folgende Aufgabe:
{$userPrompt}

Content-Format: {$format} - {$formatInstructions[$format]}
Zielsprache: {$locale}
Zielgruppe: Deutsche PHP/Symfony-Entwickler, Senior-Entwickler, Teams

Extrahiere:
1. Hauptthemen und technische Konzepte
2. Deutsche Keywords für Entwickler
3. Praktische Anwendungsfälle
4. Code-Beispiele oder technische Details
5. Neue Features oder Updates

Gib eine strukturierte Analyse für deutschen Content zurück.";
    }

    private function createContentPrompt(string $analysis, string $userPrompt, string $format, float $temperature, string $locale): string
    {
        $formatStyles = [
            'seo' => 'SEO-optimiert, 4000-6000 Zeichen, klare H2/H3-Struktur, Keywords',
            'technical' => 'Technisch präzise, 3000-5000 Zeichen, Code-Beispiele, Implementierung',
            'tutorial' => 'Tutorial-Format, 5000-7000 Zeichen, Schritt-für-Schritt, Lernziele'
        ];

        return "Erstelle einen hochwertigen deutschen Artikel basierend auf dieser Analyse:

ANALYSE:
{$analysis}

AUFTRAG: {$userPrompt}

ANFORDERUNGEN:
- Format: {$format} ({$formatStyles[$format]})
- Zielgruppe: Deutsche PHP-Entwickler, Teams, Senior-Entwickler
- Sprache: {$locale}
- Kreativität: {$temperature}

STRUKTUR:
1. Einleitung (50-80 Wörter, Kernaussage)
2. 3-5 Hauptabschnitte mit H2-Überschriften
3. Pro Abschnitt: 150-300 Wörter
4. Code-Beispiele bei technischen Themen
5. Praxisbezug für deutsche Entwickler
6. Fazit mit umsetzbaren Takeaways

QUALITÄT:
- Keywords natürlich einbauen
- Deutsche Fachbegriffe korrekt
- SEO-optimiert
- Praktischer Nutzen
- Professioneller Stil

Erstelle den vollständigen strukturierten Artikel.";
    }

    private function getSuluContentSchema(): array
    {
        return [
            'headline' => 'string (SEO-optimierter Titel mit Keywords)',
            'introduction' => 'string (Einleitung 50-80 Wörter)',
            'sections' => [
                [
                    'heading' => 'string (H2-Überschrift)',
                    'content' => 'string (Hauptinhalt 150-300 Wörter)',
                    'code_example' => 'string (optional: Code falls relevant)',
                    'key_points' => ['string (3-5 wichtige Punkte)']
                ]
            ],
            'conclusion' => 'string (Fazit mit Takeaways)',
            'keywords' => ['string (5-8 Keywords)']
        ];
    }

    private function processAIContent($contentResponse, $customHeadline, string $url): array
    {
        $content = $contentResponse->getContent();
        $structuredContent = $contentResponse->getMetadataValue('structured_content');

        // First try to use structured content if available
        if ($structuredContent && is_array($structuredContent)) {
            return $this->createSuluBlocksFromStructured($structuredContent, $customHeadline, $url);
        }

        // If no structured content, try to parse JSON from raw content
        if (!$structuredContent) {
            $cleanContent = preg_replace('/^```json\s*/i', '', $content);
            $cleanContent = preg_replace('/^```\s*/i', '', $cleanContent);
            $cleanContent = preg_replace('/\s*```$/i', '', $cleanContent);
            $cleanContent = trim($cleanContent);

            try {
                $jsonContent = json_decode($cleanContent, true, 512, JSON_THROW_ON_ERROR);
                if ($jsonContent && is_array($jsonContent)) {
                    return $this->createSuluBlocksFromStructured($jsonContent, $customHeadline, $url);
                }
            } catch (JsonException $e) {
                // Continue to fallback
            }
        }

        // Fallback to text parsing
        return $this->createSuluBlocksFromText($content, $customHeadline, $url);
    }

    private function createSuluBlocksFromStructured(array $structured, $customHeadline, string $url): array
    {
        $items = [];

        // Add introduction
        if (isset($structured['introduction'])) {
            $items[] = [
                'type' => 'description',
                'settings' => [],
                'description' => '<p>' . $structured['introduction'] . '</p>'
            ];
        }

        // Add sections
        if (isset($structured['sections']) && is_array($structured['sections'])) {
            foreach ($structured['sections'] as $section) {
                if (isset($section['heading'])) {
                    $items[] = [
                        'type' => 'description',
                        'settings' => [],
                        'description' => '<h2>' . $section['heading'] . '</h2>'
                    ];
                }

                if (isset($section['content'])) {
                    $items[] = [
                        'type' => 'description',
                        'settings' => [],
                        'description' => '<p>' . nl2br($section['content']) . '</p>'
                    ];
                }

                if (isset($section['code_example']) && !empty($section['code_example'])) {
                    $items[] = [
                        'type' => 'code',
                        'settings' => [],
                        'code' => '<pre><code>' . htmlspecialchars($section['code_example']) . '</code></pre>'
                    ];
                }

                if (isset($section['key_points']) && is_array($section['key_points'])) {
                    $listItems = array_map(function($point) {
                        return '<li>' . $point . '</li>';
                    }, $section['key_points']);

                    $items[] = [
                        'type' => 'description',
                        'settings' => [],
                        'description' => '<ul>' . implode('', $listItems) . '</ul>'
                    ];
                }
            }
        }

        // Add conclusion
        if (isset($structured['conclusion'])) {
            $items[] = [
                'type' => 'description',
                'settings' => [],
                'description' => '<h3>Fazit</h3><p>' . $structured['conclusion'] . '</p>'
            ];
        }

        // Add source
        // No source/AI attribution needed

        $headline = $customHeadline ?: ($structured['headline'] ?? "AI Content - " . date('d.m.Y'));
        $headline = preg_replace('/^#{1,6}\s+/', '', $headline);
        $headline = strip_tags($headline);

        return [
            'type' => 'headline-paragraphs',
            'settings' => [],
            'headline' => $headline,
            'items' => $items
        ];
    }

    private function createSuluBlocksFromText(string $content, $customHeadline, string $url): array
    {
        $paragraphs = explode("\n\n", $content);
        $items = [];

        foreach ($paragraphs as $paragraph) {
            $paragraph = trim($paragraph);
            if (empty($paragraph)) continue;

            if (preg_match('/^(#{1,3})\s*(.+)/', $paragraph, $matches)) {
                $level = strlen($matches[1]);
                $text = $matches[2];
                $tag = $level === 1 ? 'h2' : 'h3';

                $items[] = [
                    'type' => 'description',
                    'settings' => [],
                    'description' => "<{$tag}>" . $text . "</{$tag}>"
                ];
            } else {
                $items[] = [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<p>' . nl2br($paragraph) . '</p>'
                ];
            }
        }

        // No source/AI attribution needed

        $headline = $customHeadline ?: "AI Content - " . date('d.m.Y');
        $headline = preg_replace('/^#{1,6}\s+/', '', $headline);
        $headline = strip_tags($headline);

        return [
            'type' => 'headline-paragraphs',
            'settings' => [],
            'headline' => $headline,
            'items' => $items
        ];
    }

    private function showContentPreview(SymfonyStyle $io, array $content): void
    {
        $io->text('Headline: ' . $content['headline']);
        $io->newLine();

        foreach ($content['items'] as $index => $item) {
            $io->text(sprintf('Block %d (%s):', $index + 1, $item['type']));

            if ($item['type'] === 'description') {
                $preview = strip_tags($item['description']);
                $preview = substr($preview, 0, 120) . (strlen($preview) > 120 ? '...' : '');
                $io->text('   ' . $preview);
            } elseif ($item['type'] === 'code') {
                $preview = strip_tags($item['code']);
                $preview = substr($preview, 0, 80) . (strlen($preview) > 80 ? '...' : '');
                $io->text('   CODE: ' . $preview);
            }
            $io->newLine();
        }
    }

    private function convertToPagePath(string $input): string
    {
        // Already CMF path
        if (strpos($input, '/cmf/') === 0) {
            return $input;
        }

        // HTTP/HTTPS URL - extract path after domain
        if (preg_match('#^https?://[^/]+/(.+)$#', $input, $matches)) {
            $path = $matches[1];
            $path = preg_replace('/^[a-z]{2}\//', '', $path);  // Remove locale prefix
            $path = preg_replace('/#.*$/', '', $path);         // Remove anchors
            $cmfPath = '/cmf/example/contents/' . trim($path, '/');
            
            // Check if target page exists, if not try with nca- prefix for php-glossar
            if (strpos($cmfPath, '/php-glossar/') !== false) {
                $alternativePath = str_replace('/php-glossar/', '/nca-php-glossar/', $cmfPath);
                if ($this->pageExists($alternativePath)) {
                    return $alternativePath;
                }
            }
            
            return $cmfPath;
        }

        // Absolute path (starts with /)
        if (strpos($input, '/') === 0) {
            return '/cmf/example/contents' . $input;
        }

        // Fallback: return as-is
        return $input;
    }

    private function pageExists(string $pagePath): bool
    {
        try {
            $result = $this->connection->fetchAssociative(
                "SELECT 1 FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default' LIMIT 1",
                [$pagePath]
            );
            return $result !== false;
        } catch (\Exception $e) {
            return false;
        }
    }

    private function addContentToSuluPage(string $pagePath, array $content, int $position, string $locale): bool
    {
        // Validate input parameters (let these bubble up as InvalidArgumentException)
        if (empty($pagePath)) {
            throw new \InvalidArgumentException("Page path cannot be empty");
        }
        if (!isset($content['type']) || !isset($content['headline']) || !isset($content['items'])) {
            throw new \InvalidArgumentException("Content must have 'type', 'headline', and 'items' keys");
        }
        if ($position < 0) {
            throw new \InvalidArgumentException("Position must be non-negative, got: $position");
        }
        if (empty($locale)) {
            throw new \InvalidArgumentException("Locale cannot be empty");
        }
        
        try {

            $result = $this->connection->fetchAssociative(
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'",
                [$pagePath]
            );

            if (!$result) {
                throw new \RuntimeException("Page not found at path '$pagePath' in default workspace");
            }

            $xml = new DOMDocument();
            if (!$xml->loadXML($result['props'])) {
                throw new \RuntimeException("Failed to parse XML content for page '$pagePath'");
            }

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            // Check which format the page uses
            $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks"]');
            
            if ($blocksNodes->length > 0) {
                // Format 1: Serialized blocks (newer format)
                return $this->addContentSerializedFormat($xml, $xpath, $content, $position, $locale, $pagePath);
            } else {
                // Check if the page has any locale-specific content at all
                $anyLocaleBlocks = $xpath->query('//sv:property[starts-with(@sv:name, "i18n:' . $locale . '-")]');
                if ($anyLocaleBlocks->length === 0) {
                    throw new \RuntimeException("No content found for locale '$locale' on page '$pagePath'. Available locales might be different.");
                }
                // Format 2: Individual XML properties (older format)
                return $this->addContentXMLFormat($xml, $xpath, $content, $position, $locale, $pagePath);
            }

        } catch (Exception $e) {
            throw new \RuntimeException(
                "Failed to add content to Sulu page at path '$pagePath' (locale: $locale, position: $position): " . $e->getMessage(),
                0,
                $e
            );
        }
    }

    private function addContentSerializedFormat($xml, $xpath, $content, $position, $locale, $pagePath): bool
    {
        $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks"]');
        $blocksValue = $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
        $currentBlocks = unserialize(base64_decode($blocksValue));

        // Insert at position
        $updatedBlocks = [];
        for ($i = 0; $i < count($currentBlocks); $i++) {
            if ($i == $position) {
                $updatedBlocks[] = $content;
            }
            $updatedBlocks[] = $currentBlocks[$i];
        }

        if ($position >= count($currentBlocks)) {
            $updatedBlocks[] = $content;
        }

        $newBlocksValue = base64_encode(serialize($updatedBlocks));
        $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = $newBlocksValue;

        // Update length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]');
        if ($lengthNodes->length > 0) {
            $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = count($updatedBlocks);
        }

        $updatedXml = $xml->saveXML();

        $this->connection->executeStatement(
            "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
            [$updatedXml, $pagePath, 'default']
        );
        $this->connection->executeStatement(
            "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
            [$updatedXml, $pagePath, 'default_live']
        );

        return true;
    }

    private function addContentXMLFormat($xml, $xpath, $content, $position, $locale, $pagePath): bool
    {
        // Get current blocks length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]');
        if ($lengthNodes->length === 0) {
            return false;
        }

        $currentLength = (int) $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;

        // Shift existing blocks from position onwards to make room
        if ($position < $currentLength) {
            for ($i = $currentLength - 1; $i >= $position; $i--) {
                $this->shiftBlockProperties($xml, $xpath, $locale, $i, $i + 1);
            }
        }

        // Add the new block at the specified position
        $this->addBlockProperties($xml, $xpath, $locale, $position, $content);

        // Update the blocks length
        $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = $currentLength + 1;

        // Save to database
        $updatedXml = $xml->saveXML();

        $this->connection->executeStatement(
            "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
            [$updatedXml, $pagePath, 'default']
        );
        $this->connection->executeStatement(
            "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
            [$updatedXml, $pagePath, 'default_live']
        );

        return true;
    }

    private function shiftBlockProperties($xml, $xpath, $locale, $fromIndex, $toIndex): void
    {
        $svNamespace = 'http://www.jcp.org/jcr/sv/1.0';

        // Find all properties for this block index
        $properties = $xpath->query('//sv:property[starts-with(@sv:name, "i18n:' . $locale . '-blocks-") and contains(@sv:name, "#' . $fromIndex . '")]');

        foreach ($properties as $property) {
            $oldName = $property->getAttribute('sv:name');
            $newName = str_replace('#' . $fromIndex, '#' . $toIndex, $oldName);
            $property->setAttributeNS($svNamespace, 'sv:name', $newName);
        }
    }

    private function addBlockProperties($xml, $xpath, $locale, $position, $content): void
    {
        $svNamespace = 'http://www.jcp.org/jcr/sv/1.0';
        $root = $xml->documentElement;

        // Add type property
        $typeProperty = $xml->createElementNS($svNamespace, 'sv:property');
        $typeProperty->setAttributeNS($svNamespace, 'sv:name', "i18n:$locale-blocks-type#$position");
        $typeProperty->setAttributeNS($svNamespace, 'sv:type', 'String');
        $typeProperty->setAttributeNS($svNamespace, 'sv:multi-valued', '0');
        $typeValue = $xml->createElementNS($svNamespace, 'sv:value', $content['type']);
        $typeValue->setAttribute('length', strlen($content['type']));
        $typeProperty->appendChild($typeValue);
        $root->appendChild($typeProperty);

        // Add settings property
        $settingsProperty = $xml->createElementNS($svNamespace, 'sv:property');
        $settingsProperty->setAttributeNS($svNamespace, 'sv:name', "i18n:$locale-blocks-settings#$position");
        $settingsProperty->setAttributeNS($svNamespace, 'sv:type', 'String');
        $settingsProperty->setAttributeNS($svNamespace, 'sv:multi-valued', '0');
        $settingsValue = $xml->createElementNS($svNamespace, 'sv:value', '[]');
        $settingsValue->setAttribute('length', '2');
        $settingsProperty->appendChild($settingsValue);
        $root->appendChild($settingsProperty);

        // Add headline property
        if (isset($content['headline'])) {
            $headlineProperty = $xml->createElementNS($svNamespace, 'sv:property');
            $headlineProperty->setAttributeNS($svNamespace, 'sv:name', "i18n:$locale-blocks-headline#$position");
            $headlineProperty->setAttributeNS($svNamespace, 'sv:type', 'String');
            $headlineProperty->setAttributeNS($svNamespace, 'sv:multi-valued', '0');
            $headlineValue = $xml->createElementNS($svNamespace, 'sv:value', htmlspecialchars($content['headline']));
            $headlineValue->setAttribute('length', strlen($content['headline']));
            $headlineProperty->appendChild($headlineValue);
            $root->appendChild($headlineProperty);
        }

        // Add items if they exist
        if (isset($content['items']) && is_array($content['items'])) {
            // Add items length
            $itemsLengthProperty = $xml->createElementNS($svNamespace, 'sv:property');
            $itemsLengthProperty->setAttributeNS($svNamespace, 'sv:name', "i18n:$locale-blocks-items#$position-length");
            $itemsLengthProperty->setAttributeNS($svNamespace, 'sv:type', 'Long');
            $itemsLengthProperty->setAttributeNS($svNamespace, 'sv:multi-valued', '0');
            $itemsLengthValue = $xml->createElementNS($svNamespace, 'sv:value', count($content['items']));
            $itemsLengthValue->setAttribute('length', strlen((string)count($content['items'])));
            $itemsLengthProperty->appendChild($itemsLengthValue);
            $root->appendChild($itemsLengthProperty);

            // Add each item
            foreach ($content['items'] as $itemIndex => $item) {
                // Item type
                $itemTypeProperty = $xml->createElementNS($svNamespace, 'sv:property');
                $itemTypeProperty->setAttributeNS($svNamespace, 'sv:name', "i18n:$locale-blocks-items#$position-type#$itemIndex");
                $itemTypeProperty->setAttributeNS($svNamespace, 'sv:type', 'String');
                $itemTypeProperty->setAttributeNS($svNamespace, 'sv:multi-valued', '0');
                $itemTypeValue = $xml->createElementNS($svNamespace, 'sv:value', $item['type']);
                $itemTypeValue->setAttribute('length', strlen($item['type']));
                $itemTypeProperty->appendChild($itemTypeValue);
                $root->appendChild($itemTypeProperty);

                // Item settings
                $itemSettingsProperty = $xml->createElementNS($svNamespace, 'sv:property');
                $itemSettingsProperty->setAttributeNS($svNamespace, 'sv:name', "i18n:$locale-blocks-items#$position-settings#$itemIndex");
                $itemSettingsProperty->setAttributeNS($svNamespace, 'sv:type', 'String');
                $itemSettingsProperty->setAttributeNS($svNamespace, 'sv:multi-valued', '0');
                $itemSettingsValue = $xml->createElementNS($svNamespace, 'sv:value', '[]');
                $itemSettingsValue->setAttribute('length', '2');
                $itemSettingsProperty->appendChild($itemSettingsValue);
                $root->appendChild($itemSettingsProperty);

                // Item content (description or code)
                if ($item['type'] === 'description' && isset($item['description'])) {
                    $itemDescProperty = $xml->createElementNS($svNamespace, 'sv:property');
                    $itemDescProperty->setAttributeNS($svNamespace, 'sv:name', "i18n:$locale-blocks-items#$position-description#$itemIndex");
                    $itemDescProperty->setAttributeNS($svNamespace, 'sv:type', 'String');
                    $itemDescProperty->setAttributeNS($svNamespace, 'sv:multi-valued', '0');
                    $itemDescValue = $xml->createElementNS($svNamespace, 'sv:value', htmlspecialchars($item['description']));
                    $itemDescValue->setAttribute('length', strlen($item['description']));
                    $itemDescProperty->appendChild($itemDescValue);
                    $root->appendChild($itemDescProperty);
                } elseif ($item['type'] === 'code' && isset($item['code'])) {
                    $itemCodeProperty = $xml->createElementNS($svNamespace, 'sv:property');
                    $itemCodeProperty->setAttributeNS($svNamespace, 'sv:name', "i18n:$locale-blocks-items#$position-code#$itemIndex");
                    $itemCodeProperty->setAttributeNS($svNamespace, 'sv:type', 'String');
                    $itemCodeProperty->setAttributeNS($svNamespace, 'sv:multi-valued', '0');
                    $itemCodeValue = $xml->createElementNS($svNamespace, 'sv:value', htmlspecialchars($item['code']));
                    $itemCodeValue->setAttribute('length', strlen($item['code']));
                    $itemCodeProperty->appendChild($itemCodeValue);
                    $root->appendChild($itemCodeProperty);
                }
            }
        }
    }
}