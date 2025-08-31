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
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Doctrine\DBAL\Connection;
use Exception;
use DOMDocument;
use DOMXPath;

#[AsCommand(
    name: 'ai:content:quick',
    description: 'Generate content quickly using AI and add to Sulu pages'
)]
class QuickGenerateCommand extends Command
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
            ->addArgument('url', InputArgument::REQUIRED, 'Source URL to analyze')
            ->addArgument('prompt', InputArgument::REQUIRED, 'Content generation prompt')
            ->addOption('page', 'p', InputOption::VALUE_REQUIRED, 'Sulu page path', '/cmf/example/contents/blog/quick-ai')
            ->addOption('position', null, InputOption::VALUE_REQUIRED, 'Insert position', '2')
            ->addOption('format', 'f', InputOption::VALUE_REQUIRED, 'Content format (seo|technical|tutorial)', 'seo')
            ->addOption('headline', null, InputOption::VALUE_REQUIRED, 'Custom headline')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'Preview only, do not save')
            ->addOption('live', null, InputOption::VALUE_NONE, 'Execute immediately without confirmation');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        
        $url = $input->getArgument('url');
        $prompt = $input->getArgument('prompt');
        $pagePath = $this->convertToPagePath($input->getOption('page'));
        $position = (int) $input->getOption('position');
        $format = $input->getOption('format');
        $headline = $input->getOption('headline');
        $dryRun = $input->getOption('dry-run');
        $live = $input->getOption('live');

        $io->title('NCA Quick - AI Content Generator');
        
        $io->section('Configuration');
        $io->definitionList(
            ['Target' => sprintf('%s (position %d)', $pagePath, $position)],
            ['Source' => $url],
            ['Format' => $format],
            ['Mode' => $dryRun ? 'Dry Run' : 'Live'],
            ['Prompt' => substr($prompt, 0, 60) . (strlen($prompt) > 60 ? '...' : '')]
        );

        // Initialize AI
        try {
            $geminiProvider = new GeminiProvider($this->geminiApiKey, $this->geminiModel);
            $this->aiPlatform->addProvider('gemini', $geminiProvider);
            $this->aiPlatform->setDefaultProvider('gemini');
            $io->success('AI Platform ready');
        } catch (Exception $e) {
            $io->error('AI Platform initialization failed: ' . $e->getMessage());
            return Command::FAILURE;
        }

        // Generate content
        $io->section('Content Generation');
        $io->text('Analyzing source URL...');
        
        try {
            $analysisPrompt = $this->createAnalysisPrompt($prompt, $format);
            $startTime = microtime(true);
            $analysisResponse = $this->aiPlatform->analyzeUrl($url, $analysisPrompt);
            $analysisTime = round((microtime(true) - $startTime) * 1000);
            
            $io->text(sprintf('Analysis completed in %dms', $analysisTime));
            
            $contentPrompt = $this->createContentPrompt($analysisResponse->getContent(), $prompt, $format);
            $contentResponse = $this->aiPlatform->getProvider('gemini')->generateContent($contentPrompt, [
                'generation_config' => ['temperature' => 0.3]
            ]);
            
            $processingTime = round((microtime(true) - $startTime) * 1000);
            $io->success(sprintf('Content generated in %dms', $processingTime));
            
        } catch (Exception $e) {
            $io->error('Content generation failed: ' . $e->getMessage());
            return Command::FAILURE;
        }

        // Process content
        $content = $contentResponse->getContent();
        
        // Clean up HTML from markdown code blocks if present
        if (preg_match('/^```(?:html)?\s*\n?(.*?)\n?```$/s', trim($content), $matches)) {
            $content = trim($matches[1]);
        }

        $generatedHeadline = $headline ?: $this->generateHeadline($content, $prompt);
        $suluContent = [
            'type' => 'headline-paragraphs',
            'settings' => [],
            'headline' => $generatedHeadline,
            'items' => $this->parseContentToSuluBlocks($content, $url)
        ];

        // Show preview
        $io->section('Content Preview');
        $io->text('Headline: ' . $generatedHeadline);
        
        $previewText = strip_tags(implode(' ', array_column($suluContent['items'], 'description')));
        $preview = substr($previewText, 0, 300) . (strlen($previewText) > 300 ? '...' : '');
        $io->text($preview);
        
        $io->text(sprintf('Blocks: %d, Length: %d characters', 
            count($suluContent['items']), 
            strlen($previewText)
        ));

        if (!$dryRun) {
            if (!$live && !$io->confirm('Add content to Sulu page?', false)) {
                $io->note('Operation cancelled');
                return Command::SUCCESS;
            }
            
            $io->text('Adding content to Sulu...');
            $result = $this->addToSuluPage($pagePath, $suluContent, $position);
            
            if ($result) {
                $io->success('Content added successfully!');
                $webPath = str_replace('/cmf/example/contents', '', $pagePath);
                $io->text('URL: https://sulu-never-code-alone.ddev.site/de' . $webPath);
                
                // Log activity
                try {
                    $logger = new AIActivityLogger($this->connection);
                    if ($logger->logAIContentGeneration($pagePath, 'de', $suluContent, $url, 'gemini', $prompt)) {
                        $io->text('Activity logged to Sulu');
                    }
                } catch (Exception $e) {
                    $io->warning('Activity logging failed: ' . $e->getMessage());
                }
            } else {
                $io->error('Failed to add content to Sulu');
                return Command::FAILURE;
            }
        } else {
            $io->note('Dry run completed - no changes made');
        }

        return Command::SUCCESS;
    }

    private function createAnalysisPrompt(string $prompt, string $format): string
    {
        $formatInstructions = [
            'seo' => 'Fokus auf SEO-Optimierung, Keywords und suchmaschinenfreundliche Struktur',
            'technical' => 'Technische Tiefe, Code-Beispiele und Implementierungsdetails',
            'tutorial' => 'Schritt-für-Schritt Anleitung, praktische Beispiele und Lernziele'
        ];

        return "Du bist ein erfahrener deutscher Content-Analyst für Entwickler-Zielgruppen.

Analysiere den Inhalt dieser URL umfassend für folgende Aufgabe:
{$prompt}

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

    private function createContentPrompt(string $analysis, string $prompt, string $format): string
    {
        return "Basierend auf dieser Analyse erstelle einen hochwertigen deutschen Artikel:

ANALYSE:
{$analysis}

AUFTRAG: {$prompt}

CONTENT-ANFORDERUNGEN:
- Format: {$format}
- Zielgruppe: Deutsche PHP-Entwickler, Senior-Entwickler, Team-Leader
- Länge: 3000-5000 Zeichen

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

    private function generateHeadline(string $content, string $prompt): string 
    {
        $lines = explode("\n", $content);
        foreach ($lines as $line) {
            $line = trim($line);
            if (strlen($line) > 20 && !str_contains($line, '```')) {
                // Remove markdown headers (##, ###, etc.)
                $line = preg_replace('/^#{1,6}\s+/', '', $line);
                // Strip any remaining HTML tags
                return strip_tags($line);
            }
        }
        
        // Fallback: generate from prompt
        $words = explode(' ', $prompt);
        $keyWords = array_slice($words, 0, 5);
        return implode(' ', $keyWords) . " - " . date('M Y');
    }

    private function parseContentToSuluBlocks(string $content, string $url): array
    {
        $blocks = [];
        
        // Check if content already contains HTML tags
        $hasHtml = preg_match('/<[^>]+>/', $content);
        
        if ($hasHtml) {
            // Content already has HTML, split properly
            $content = preg_replace('/^#{1,6}\s+/m', '', $content);
            $parts = preg_split('/\n\n|(?=<h[1-6]>)|(?<=<\/h[1-6]>)|(?=<ul>)|(?<=<\/ul>)|(?=<ol>)|(?<=<\/ol>)/', $content);
            
            foreach ($parts as $part) {
                $part = trim($part);
                if (empty($part)) continue;
                
                $blocks[] = [
                    'type' => 'description',
                    'settings' => [],
                    'description' => $part
                ];
            }
        } else {
            // Parse markdown-style content
            $paragraphs = explode("\n\n", $content);
            
            foreach ($paragraphs as $paragraph) {
                $paragraph = trim($paragraph);
                if (empty($paragraph)) continue;
                
                // Headings
                if (preg_match('/^(#{1,3})\s*(.+)/', $paragraph, $matches)) {
                    $level = strlen($matches[1]);
                    $text = $matches[2];
                    $tag = $level === 1 ? 'h2' : 'h3';
                    
                    $blocks[] = [
                        'type' => 'description',
                        'settings' => [],
                        'description' => "<{$tag}>" . $text . "</{$tag}>"
                    ];
                    continue;
                }
                
                // Regular paragraphs
                $paragraph = preg_replace('/\*\*(.+?)\*\*/', '<strong>$1</strong>', $paragraph);
                $paragraph = preg_replace('/\*(.+?)\*/', '<em>$1</em>', $paragraph);
                
                $blocks[] = [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<p>' . nl2br($paragraph) . '</p>'
                ];
            }
        }
        
        // No source/AI attribution needed
        
        return $blocks;
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

    private function addToSuluPage(string $pagePath, array $content, int $position): bool
    {
        try {
            $result = $this->connection->fetchAssociative(
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'",
                [$pagePath]
            );
            
            if (!$result) return false;
            
            $xml = new DOMDocument();
            $xml->loadXML($result['props']);
            
            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
            
            $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks"]');
            
            if ($blocksNodes->length > 0) {
                // Format 1: Serialized blocks
                $blocksValue = $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
                $currentBlocks = unserialize(base64_decode($blocksValue));
                
                array_splice($currentBlocks, $position, 0, [$content]);
                
                $newBlocksValue = base64_encode(serialize($currentBlocks));
                $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = $newBlocksValue;
                
                $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]');
                if ($lengthNodes->length > 0) {
                    $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = count($currentBlocks);
                }
            } else {
                // Format 2: Individual XML properties (older format)
                return $this->addContentXMLFormat($xml, $xpath, $content, $position, 'de', $pagePath);
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
            
        } catch (Exception $e) {
            error_log("Sulu content addition failed: " . $e->getMessage());
            error_log("Stack trace: " . $e->getTraceAsString());
            return false;
        }
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