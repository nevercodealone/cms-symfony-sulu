<?php

namespace App\Command\AI;

use App\AI\Platform\AIPlatform;
use App\AI\GeminiProvider;
use App\AI\Logger\AIActivityLogger;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Question\ChoiceQuestion;
use Symfony\Component\Console\Question\ConfirmationQuestion;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use PDO;
use Exception;
use DOMDocument;
use DOMXPath;

#[AsCommand(
    name: 'ai:content:generate',
    description: 'Advanced AI content generation with interactive options'
)]
class GenerateCommand extends Command
{
    public function __construct(
        private AIPlatform $aiPlatform,
        #[Autowire(env: 'GEMINI_API_KEY')] private string $geminiApiKey,
        #[Autowire(env: 'GEMINI_MODEL')] private string $geminiModel = 'gemini-1.5-flash'
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('page-path', InputArgument::REQUIRED, 'Sulu page path or URL')
            ->addArgument('url', InputArgument::REQUIRED, 'Source URL to analyze')
            ->addArgument('prompt', InputArgument::REQUIRED, 'Content generation prompt')
            ->addOption('position', null, InputOption::VALUE_REQUIRED, 'Insert position', '2')
            ->addOption('locale', 'l', InputOption::VALUE_REQUIRED, 'Target locale', 'de')
            ->addOption('headline', null, InputOption::VALUE_REQUIRED, 'Custom headline')
            ->addOption('temperature', 't', InputOption::VALUE_REQUIRED, 'AI temperature (0.1-1.0)', '0.3')
            ->addOption('format', 'f', InputOption::VALUE_REQUIRED, 'Content format (seo|technical|tutorial)', 'seo')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'Preview only, do not save');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        
        $pageInput = $input->getArgument('page-path');
        $url = $input->getArgument('url');
        $prompt = $input->getArgument('prompt');
        $pagePath = $this->convertToPagePath($pageInput);
        $position = (int) $input->getOption('position');
        $locale = $input->getOption('locale');
        $headline = $input->getOption('headline');
        $temperature = (float) $input->getOption('temperature');
        $format = $input->getOption('format');
        $dryRun = $input->getOption('dry-run');

        // Validate temperature
        $temperature = max(0.1, min(1.0, $temperature));

        $io->title('AI Content Generator für Sulu CMS - Gemini Powered');
        
        $io->section('Configuration');
        $io->definitionList(
            ['Page Path' => $pagePath],
            ['Source URL' => $url],
            ['AI Prompt' => substr($prompt, 0, 80) . (strlen($prompt) > 80 ? '...' : '')],
            ['Position' => $position],
            ['Locale' => $locale],
            ['Custom Headline' => $headline ?: 'Auto-generated'],
            ['Temperature' => sprintf('%.1f (Creativity Level)', $temperature)],
            ['Format' => $format],
            ['Mode' => $dryRun ? 'Preview Only' : 'Live Update']
        );

        // Initialize AI
        try {
            $geminiProvider = new GeminiProvider($this->geminiApiKey, $this->geminiModel);
            $this->aiPlatform->addProvider('gemini', $geminiProvider);
            $this->aiPlatform->setDefaultProvider('gemini');
            $io->success('AI Platform initialized successfully');
        } catch (Exception $e) {
            $io->error('Failed to initialize AI Platform: ' . $e->getMessage());
            $io->note('Make sure GEMINI_API_KEY is set in your .env.local file');
            return Command::FAILURE;
        }

        // Step 1: Analyze URL
        $io->section('Analysis Phase');
        $io->text('Analyzing URL with Gemini AI...');
        
        try {
            $analysisPrompt = $this->createAnalysisPrompt($prompt, $format, $locale);
            $startTime = microtime(true);
            $analysisResponse = $this->aiPlatform->analyzeUrl($url, $analysisPrompt);
            $analysisTime = round((microtime(true) - $startTime) * 1000);
            
            $io->success(sprintf('AI analysis completed in %dms', $analysisTime));
            $io->text('Usage: ' . ($analysisResponse->getUsage()['totalTokens'] ?? 'N/A') . ' tokens');
            
        } catch (Exception $e) {
            $io->error('Error during AI analysis: ' . $e->getMessage());
            return Command::FAILURE;
        }

        // Step 2: Generate content
        $io->section('Content Generation');
        $io->text('Generating structured Sulu content...');
        
        try {
            $contentPrompt = $this->createContentPrompt($analysisResponse->getContent(), $prompt, $format, $temperature, $locale);
            $startTime = microtime(true);
            $contentResponse = $this->aiPlatform->getProvider('gemini')->generateStructuredContent(
                $contentPrompt,
                $this->getSuluContentSchema()
            );
            $contentTime = round((microtime(true) - $startTime) * 1000);
            
            $io->success(sprintf('Content generation completed in %dms', $contentTime));
            $io->text('Usage: ' . ($contentResponse->getUsage()['totalTokens'] ?? 'N/A') . ' tokens');
            
        } catch (Exception $e) {
            $io->error('Error during content generation: ' . $e->getMessage());
            return Command::FAILURE;
        }

        // Process content
        $io->text('Processing AI-generated content...');
        $suluContent = $this->processAIContent($contentResponse, $headline, $url);

        // Show preview
        $io->section('Content Preview');
        $this->showContentPreview($io, $suluContent);

        if (!$dryRun) {
            // Interactive options
            $helper = $this->getHelper('question');
            $question = new ChoiceQuestion(
                'What would you like to do?',
                [
                    1 => 'Approve and add to Sulu page',
                    2 => 'Regenerate with adjusted prompt',
                    3 => 'Adjust AI settings and regenerate',
                    4 => 'Cancel operation'
                ],
                1
            );
            
            $choice = $helper->ask($input, $output, $question);
            
            if ($choice === 'Regenerate with adjusted prompt') {
                $newPrompt = $io->ask('Enter new/modified prompt', $prompt);
                $contentPrompt = $this->createContentPrompt($analysisResponse->getContent(), $newPrompt, $format, $temperature, $locale);
                $contentResponse = $this->aiPlatform->getProvider('gemini')->generateStructuredContent(
                    $contentPrompt,
                    $this->getSuluContentSchema()
                );
                $suluContent = $this->processAIContent($contentResponse, $headline, $url);
                
                $io->section('Updated Content Preview');
                $this->showContentPreview($io, $suluContent);
                
                if (!$io->confirm('Approve this version?', false)) {
                    $io->note('Operation cancelled');
                    return Command::SUCCESS;
                }
            } elseif ($choice === 'Adjust AI settings and regenerate') {
                $newTemp = $io->ask('Enter new temperature (0.1-1.0)', (string) $temperature);
                if (is_numeric($newTemp)) {
                    $temperature = max(0.1, min(1.0, (float) $newTemp));
                }
                
                $newFormat = $io->choice('Select format', ['seo', 'technical', 'tutorial'], $format);
                
                $io->text('Regenerating with new settings...');
                $contentPrompt = $this->createContentPrompt($analysisResponse->getContent(), $prompt, $newFormat, $temperature, $locale);
                $contentResponse = $this->aiPlatform->getProvider('gemini')->generateStructuredContent(
                    $contentPrompt,
                    $this->getSuluContentSchema()
                );
                $suluContent = $this->processAIContent($contentResponse, $headline, $url);
                
                $io->section('Updated Content Preview');
                $this->showContentPreview($io, $suluContent);
                
                if (!$io->confirm('Approve this version?', false)) {
                    $io->note('Operation cancelled');
                    return Command::SUCCESS;
                }
            } elseif ($choice === 'Cancel operation') {
                $io->note('Operation cancelled');
                return Command::SUCCESS;
            }

            // Add content to Sulu
            $io->section('Adding Content to Sulu Page');
            $result = $this->addContentToSuluPage($pagePath, $suluContent, $position, $locale);
            
            if ($result) {
                $io->success('Successfully added AI-generated content to Sulu page!');
                $webPath = str_replace('/cmf/example/contents', '', $pagePath);
                $io->text('Visit: https://sulu-never-code-alone.ddev.site/' . $locale . $webPath);
                $io->text('Total tokens used: ' . (
                    ($analysisResponse->getUsage()['totalTokens'] ?? 0) + 
                    ($contentResponse->getUsage()['totalTokens'] ?? 0)
                ));
                
                // Log activity
                try {
                    $logger = new AIActivityLogger();
                    if ($logger->logAIContentGeneration($pagePath, $locale, $suluContent, $url, 'gemini', $prompt)) {
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
            $io->text('Total tokens used: ' . (
                ($analysisResponse->getUsage()['totalTokens'] ?? 0) + 
                ($contentResponse->getUsage()['totalTokens'] ?? 0)
            ));
        }

        return Command::SUCCESS;
    }

    private function createAnalysisPrompt(string $userPrompt, string $format, string $locale): string
    {
        $formatInstructions = [
            'seo' => 'Fokus auf SEO-Optimierung, Keywords und suchmaschinenfreundliche Struktur',
            'technical' => 'Technische Tiefe, Code-Beispiele und Implementierungsdetails',
            'tutorial' => 'Schritt-für-Schritt Anleitung, praktische Beispiele und Lernziele'
        ];
        
        return "Du bist ein erfahrener deutscher Content-Analyst für Entwickler-Zielgruppen. 

Analysiere den Inhalt dieser URL umfassend für folgende Aufgabe:
{$userPrompt}

Content-Format: {$format} - {$formatInstructions[$format]}
Zielsprache: Deutsch
Zielgruppe: Deutsche PHP/Symfony-Entwickler und Teams

Bitte extrahiere und analysiere:
1. Hauptthemen und technische Konzepte
2. Relevante Keywords für deutsche Entwickler
3. Praktische Anwendungsfälle
4. Code-Beispiele oder technische Details
5. Neuigkeiten oder Updates die erwähnenswert sind

Gib eine strukturierte Analyse zurück, die als Basis für deutschen Content dient.";
    }

    private function createContentPrompt(string $analysis, string $userPrompt, string $format, float $temperature, string $locale): string
    {
        $formatStyles = [
            'seo' => [
                'style' => 'SEO-optimiert mit klarer H2/H3-Struktur',
                'keywords' => 'Verwende relevante deutsche Tech-Keywords',
                'length' => '4000-6000 Zeichen für optimale SEO-Performance'
            ],
            'technical' => [
                'style' => 'Technisch präzise mit Code-Beispielen',
                'keywords' => 'Fachbegriffe auf Deutsch und Englisch',
                'length' => '3000-5000 Zeichen mit Fokus auf Implementierung'
            ],
            'tutorial' => [
                'style' => 'Schritt-für-Schritt Anleitung',
                'keywords' => 'Lern-orientierte Keywords',
                'length' => '5000-7000 Zeichen für komplette Tutorials'
            ]
        ];
        
        $style = $formatStyles[$format];
        
        return "Basierend auf dieser Analyse erstelle einen hochwertigen deutschen Artikel:

ANALYSE:
{$analysis}

AUFTRAG: {$userPrompt}

CONTENT-ANFORDERUNGEN:
- Format: {$format} ({$style['style']})
- {$style['keywords']}
- {$style['length']}
- Zielgruppe: Deutsche PHP-Entwickler, Senior-Entwickler, Team-Leader
- Temperatur: {$temperature} (Kreativitätslevel)

STRUKTUR:
1. Einleitungsabsatz mit Kernaussage (50-80 Wörter)
2. 3-5 Hauptabschnitte mit H2-Überschriften
3. Pro Hauptabschnitt: 150-300 Wörter
4. Bei technischen Themen: Code-Beispiele einbauen
5. Praxisbezug für deutsche Entwickler
6. Fazit mit actionable takeaways

QUALITÄTSKRITERIEN:
- Keywords natürlich einbauen (nicht stuffing)
- Deutsche Fachbegriffe korrekt verwenden
- Für Suchmaschinen optimiert
- Praktischer Nutzen für Entwickler
- Professioneller aber zugänglicher Schreibstil

Erstelle jetzt den vollständigen Artikel als strukturierten Text.";
    }

    private function getSuluContentSchema(): array
    {
        return [
            'headline' => 'string (SEO-optimierter Titel mit Hauptkeyword)',
            'introduction' => 'string (Einleitungsabsatz 50-80 Wörter)',
            'sections' => [
                [
                    'heading' => 'string (H2-Überschrift)',
                    'content' => 'string (Hauptinhalt 150-300 Wörter)',
                    'code_example' => 'string (optional: Code-Beispiel wenn relevant)',
                    'key_points' => ['string (3-5 wichtige Punkte als Liste)']
                ]
            ],
            'conclusion' => 'string (Fazit mit actionable takeaways)',
            'keywords' => ['string (5-8 relevante Keywords)'],
            'meta_description' => 'string (150-160 Zeichen für SEO)'
        ];
    }

    private function processAIContent($contentResponse, ?string $headline, string $url): array
    {
        $content = $contentResponse->getContent();
        $structuredContent = $contentResponse->getMetadataValue('structured_content');
        
        if ($structuredContent && is_array($structuredContent)) {
            return $this->createSuluBlocksFromStructured($structuredContent, $headline, $url);
        }
        
        return $this->createSuluBlocksFromText($content, $headline, $url);
    }

    private function createSuluBlocksFromStructured(array $structured, ?string $headline, string $url): array
    {
        $items = [];
        
        if (isset($structured['introduction'])) {
            $items[] = [
                'type' => 'description',
                'settings' => [],
                'description' => '<p>' . $structured['introduction'] . '</p>'
            ];
        }
        
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
        
        if (isset($structured['conclusion'])) {
            $items[] = [
                'type' => 'description',
                'settings' => [],
                'description' => '<h3>Fazit</h3><p>' . $structured['conclusion'] . '</p>'
            ];
        }
        
        // No source/AI attribution needed
        
        $generatedHeadline = $headline ?? $structured['headline'] ?? "AI-Generierter Content - " . date('d.m.Y');
        $generatedHeadline = preg_replace('/^#{1,6}\s+/', '', $generatedHeadline);
        $generatedHeadline = strip_tags($generatedHeadline);
        
        return [
            'type' => 'headline-paragraphs',
            'settings' => [],
            'headline' => $generatedHeadline,
            'items' => $items
        ];
    }

    private function createSuluBlocksFromText(string $content, ?string $headline, string $url): array
    {
        $paragraphs = explode("\n\n", $content);
        $items = [];
        
        foreach ($paragraphs as $paragraph) {
            $paragraph = trim($paragraph);
            if (empty($paragraph)) continue;
            
            if (preg_match('/^(#{1,3})\s*(.+)/', $paragraph, $matches)) {
                $level = strlen($matches[1]);
                $text = $matches[2];
                $tag = $level === 1 ? 'h2' : ($level === 2 ? 'h3' : 'h4');
                
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
        
        $generatedHeadline = $headline ?? "AI-Generierter Content - " . date('d.m.Y');
        $generatedHeadline = preg_replace('/^#{1,6}\s+/', '', $generatedHeadline);
        $generatedHeadline = strip_tags($generatedHeadline);
        
        return [
            'type' => 'headline-paragraphs',
            'settings' => [],
            'headline' => $generatedHeadline,
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
                $preview = substr($preview, 0, 200) . (strlen($preview) > 200 ? '...' : '');
                $io->text('   ' . $preview);
            } elseif ($item['type'] === 'code') {
                $preview = strip_tags($item['code']);
                $preview = substr($preview, 0, 150) . (strlen($preview) > 150 ? '...' : '');
                $io->text('   CODE: ' . $preview);
            }
            $io->newLine();
        }
    }

    private function convertToPagePath(string $input): string 
    {
        if (strpos($input, '/cmf/') === 0) {
            return $input;
        }
        
        if (strpos($input, 'https://sulu-never-code-alone.ddev.site/') === 0) {
            $path = str_replace('https://sulu-never-code-alone.ddev.site/', '', $input);
            $path = preg_replace('/^[a-z]{2}\//', '', $path);
            $path = preg_replace('/#.*$/', '', $path);
            $cmfPath = '/cmf/example/contents/' . trim($path, '/');
            $cmfPath = str_replace('/php-glossar/', '/nca-php-glossar/', $cmfPath);
            return $cmfPath;
        }
        
        if (strpos($input, '/') === 0 && strpos($input, '/cmf/') !== 0) {
            return '/cmf/example/contents' . $input;
        }
        
        return $input;
    }

    private function addContentToSuluPage(string $pagePath, array $content, int $position, string $locale): bool
    {
        try {
            $pdo = new PDO("mysql:host=db;dbname=db;charset=utf8mb4", 'db', 'db');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $stmt = $pdo->prepare("SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'");
            $stmt->execute([$pagePath]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$result) {
                return false;
            }
            
            $xml = new DOMDocument();
            $xml->loadXML($result['props']);
            
            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
            
            // Check which format the page uses
            $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks"]');
            
            if ($blocksNodes->length > 0) {
                // Format 1: Serialized blocks (newer format)
                return $this->addContentSerializedFormat($xml, $xpath, $content, $position, $locale, $pagePath, $pdo);
            } else {
                // Format 2: Individual XML properties (older format)
                return $this->addContentXMLFormat($xml, $xpath, $content, $position, $locale, $pagePath, $pdo);
            }
            
        } catch (Exception $e) {
            return false;
        }
    }

    private function addContentSerializedFormat($xml, $xpath, $content, $position, $locale, $pagePath, $pdo): bool
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
        
        $updateStmt = $pdo->prepare("UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?");
        $updateStmt->execute([$updatedXml, $pagePath, 'default']);
        $updateStmt->execute([$updatedXml, $pagePath, 'default_live']);
        
        return true;
    }

    private function addContentXMLFormat($xml, $xpath, $content, $position, $locale, $pagePath, $pdo): bool
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
        
        $updateStmt = $pdo->prepare("UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?");
        $updateStmt->execute([$updatedXml, $pagePath, 'default']);
        $updateStmt->execute([$updatedXml, $pagePath, 'default_live']);
        
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
            $itemsLengthValue->setAttribute('length', strlen(count($content['items'])));
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