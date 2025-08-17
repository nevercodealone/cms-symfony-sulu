#!/usr/bin/env php
<?php

/**
 * AI Content Generator für Sulu CMS - Powered by Gemini AI Platform
 * 
 * Usage: php ai_content_generator_gemini.php <page-path> <url> <prompt> [options]
 * 
 * Examples:
 * php ai_content_generator_gemini.php "/cmf/example/contents/nca-php-glossar/phpunit-11" "https://github.com/sebastianbergmann/phpunit/releases/tag/11.4.3" "Erstelle einen umfassenden deutschen Artikel über PHPUnit 11.4.3 Features und Optimierungen" --position=2 --headline="PHPUnit 11.4.3: Neue Features"
 * php ai_content_generator_gemini.php "/cmf/example/contents/blog/symfony-guide" "https://github.com/symfony/symfony" "Analysiere die neuesten Symfony Features und erstelle einen praktischen Guide für deutsche Entwickler" --dry-run
 */

require_once __DIR__ . '/vendor/autoload.php';

use Symfony\Component\Dotenv\Dotenv;
use App\AI\Platform\AIPlatform;
use App\AI\GeminiProvider;
use App\AI\Logger\AIActivityLogger;

// Load environment variables
$dotenv = new Dotenv();
$dotenv->loadEnv(__DIR__ . '/.env.local');

if ($argc < 4) {
    echo " AI Content Generator für Sulu CMS - Gemini Powered\n";
    echo "=====================================================\n\n";
    echo "Usage: php ai_content_generator_gemini.php <page-path> <url> <prompt> [options]\n\n";
    echo "Options:\n";
    echo "  --position=N           Position to insert content (default: 2)\n";
    echo "  --locale=LOCALE        Target locale (default: de)\n";
    echo "  --headline='TEXT'      Custom headline (auto-generated if not provided)\n";
    echo "  --dry-run              Preview only, don't modify Sulu page\n";
    echo "  --temperature=N        AI creativity level 0.1-1.0 (default: 0.3)\n";
    echo "  --format=FORMAT        Content format: seo|technical|tutorial (default: seo)\n\n";
    echo "Examples:\n";
    echo "  php ai_content_generator_gemini.php '/cmf/example/contents/blog/my-article' 'https://example.com' 'Erstelle einen Artikel über...' --position=3\n";
    echo "  php ai_content_generator_gemini.php '/cmf/example/contents/tutorials/php' 'https://github.com/issue/123' 'Erkläre dieses GitHub Issue' --headline='GitHub Issue Analysis' --format=technical\n";
    echo "  php ai_content_generator_gemini.php '/cmf/example/contents/guides/laravel' 'https://laravel.com/docs' 'Laravel Tutorial für deutsche Entwickler' --dry-run --temperature=0.7\n";
    exit(1);
}

// Parse arguments
$pageInput = $argv[1];
$url = $argv[2];
$prompt = $argv[3];

// Convert page input to proper CMF path
$pagePath = convertToPagePath($pageInput);

// Parse options
$options = [
    'position' => 2,
    'locale' => 'de',
    'headline' => null,
    'dry-run' => false,
    'temperature' => 0.3,
    'format' => 'seo'
];

for ($i = 4; $i < $argc; $i++) {
    if (strpos($argv[$i], '--position=') === 0) {
        $options['position'] = (int) substr($argv[$i], 11);
    } elseif (strpos($argv[$i], '--locale=') === 0) {
        $options['locale'] = substr($argv[$i], 9);
    } elseif (strpos($argv[$i], '--headline=') === 0) {
        $options['headline'] = trim(substr($argv[$i], 11), '"\'');
    } elseif (strpos($argv[$i], '--temperature=') === 0) {
        $options['temperature'] = (float) substr($argv[$i], 14);
    } elseif (strpos($argv[$i], '--format=') === 0) {
        $options['format'] = substr($argv[$i], 9);
    } elseif ($argv[$i] === '--dry-run') {
        $options['dry-run'] = true;
    }
}

// Validate temperature
$options['temperature'] = max(0.1, min(1.0, $options['temperature']));

echo " AI Content Generator für Sulu CMS - Gemini Powered\n";
echo "=====================================================\n\n";

echo " Configuration:\n";
echo "  Page Path: {$pagePath}\n";
echo "  Source URL: {$url}\n";
echo "  AI Prompt: " . substr($prompt, 0, 80) . (strlen($prompt) > 80 ? '...' : '') . "\n";
echo "  Position: {$options['position']}\n";
echo "  Locale: {$options['locale']}\n";
echo "  Custom Headline: " . ($options['headline'] ?: 'Auto-generated') . "\n";
echo "  Temperature: {$options['temperature']} (Creativity Level)\n";
echo "  Format: {$options['format']}\n";
echo "  Mode: " . ($options['dry-run'] ? ' Preview Only' : ' Live Update') . "\n\n";

// Initialize AI Platform
echo " Initializing Gemini AI Platform...\n";
try {
    $geminiProvider = new GeminiProvider(
        $_ENV['GEMINI_API_KEY'] ?? throw new Exception('GEMINI_API_KEY not found in environment'),
        $_ENV['GEMINI_MODEL'] ?? 'gemini-1.5-flash',
        $_ENV['GEMINI_BASE_URL'] ?? 'https://generativelanguage.googleapis.com/v1beta'
    );
    
    $aiPlatform = new AIPlatform();
    $aiPlatform->addProvider('gemini', $geminiProvider);
    $aiPlatform->setDefaultProvider('gemini');
    
    echo " AI Platform initialized successfully\n\n";
} catch (Exception $e) {
    echo "ERROR: Failed to initialize AI Platform: " . $e->getMessage() . "\n";
    echo " Make sure GEMINI_API_KEY is set in your .env.local file\n";
    exit(1);
}

// Step 1: Analyze URL with AI
echo " Analyzing URL with Gemini AI...\n";
try {
    $analysisPrompt = createAnalysisPrompt($prompt, $options['format'], $options['locale']);
    
    $startTime = microtime(true);
    $analysisResponse = $aiPlatform->analyzeUrl($url, $analysisPrompt);
    $analysisTime = round((microtime(true) - $startTime) * 1000);
    
    echo " AI analysis completed in {$analysisTime}ms\n";
    echo " Usage: " . ($analysisResponse->getUsage()['totalTokens'] ?? 'N/A') . " tokens\n\n";
    
} catch (Exception $e) {
    echo "ERROR: Error during AI analysis: " . $e->getMessage() . "\n";
    exit(1);
}

// Step 2: Generate structured content
echo " Generating structured Sulu content...\n";
try {
    $contentPrompt = createContentPrompt($analysisResponse->getContent(), $prompt, $options);
    
    $startTime = microtime(true);
    $contentResponse = $aiPlatform->getProvider('gemini')->generateStructuredContent(
        $contentPrompt,
        getSuluContentSchema()
    );
    $contentTime = round((microtime(true) - $startTime) * 1000);
    
    echo " Content generation completed in {$contentTime}ms\n";
    echo " Usage: " . ($contentResponse->getUsage()['totalTokens'] ?? 'N/A') . " tokens\n\n";
    
} catch (Exception $e) {
    echo "ERROR: Error during content generation: " . $e->getMessage() . "\n";
    exit(1);
}

// Step 3: Process and format content
echo "  Processing AI-generated content...\n";
$suluContent = processAIContent($contentResponse, $options, $url);

// Step 4: Show preview
echo " Content Preview:\n";
echo "==================\n";
showContentPreview($suluContent);

if (!$options['dry-run']) {
    // Step 5: Get user confirmation
    echo "\n What would you like to do?\n";
    echo "  [1]  Approve and add to Sulu page\n";
    echo "  [2]  Regenerate with adjusted prompt\n";
    echo "  [3]   Adjust AI settings and regenerate\n";
    echo "  [4] ERROR: Cancel operation\n";
    echo "Choice [1]: ";
    
    $choice = trim(fgets(STDIN));
    if (empty($choice)) $choice = '1';
    
    if ($choice === '2') {
        echo "\nEnter new/modified prompt (or press Enter to use original): ";
        $newPrompt = trim(fgets(STDIN));
        if (empty($newPrompt)) $newPrompt = $prompt;
        
        echo "\n Regenerating Content...\n";
        $contentPrompt = createContentPrompt($analysisResponse->getContent(), $newPrompt, $options);
        $contentResponse = $aiPlatform->getProvider('gemini')->generateStructuredContent(
            $contentPrompt,
            getSuluContentSchema()
        );
        $suluContent = processAIContent($contentResponse, $options, $url);
        
        echo "Updated Content Preview:\n";
        echo "===========================\n";
        showContentPreview($suluContent);
        
        echo "\n Approve this version? [y/N]: ";
        $approve = trim(fgets(STDIN));
        if (strtolower($approve) !== 'y') {
            echo "ERROR: Operation cancelled\n";
            exit(0);
        }
    } elseif ($choice === '3') {
        echo "\nAdjust AI Settings:\n";
        echo "Current Temperature: {$options['temperature']}\n";
        echo "Enter new temperature (0.1-1.0): ";
        $newTemp = trim(fgets(STDIN));
        if (is_numeric($newTemp)) {
            $options['temperature'] = max(0.1, min(1.0, (float)$newTemp));
        }
        
        echo "Current Format: {$options['format']}\n";
        echo "Enter new format (seo/technical/tutorial): ";
        $newFormat = trim(fgets(STDIN));
        if (in_array($newFormat, ['seo', 'technical', 'tutorial'])) {
            $options['format'] = $newFormat;
        }
        
        echo "\n Regenerating with new settings...\n";
        $contentPrompt = createContentPrompt($analysisResponse->getContent(), $prompt, $options);
        $contentResponse = $aiPlatform->getProvider('gemini')->generateStructuredContent(
            $contentPrompt,
            getSuluContentSchema()
        );
        $suluContent = processAIContent($contentResponse, $options, $url);
        
        echo "Updated Content Preview:\n";
        echo "===========================\n";
        showContentPreview($suluContent);
        
        echo "\n Approve this version? [y/N]: ";
        $approve = trim(fgets(STDIN));
        if (strtolower($approve) !== 'y') {
            echo "ERROR: Operation cancelled\n";
            exit(0);
        }
    } elseif ($choice === '4') {
        echo "ERROR: Operation cancelled\n";
        exit(0);
    }

    // Step 6: Add content to Sulu page
    echo "\n Adding Content to Sulu Page...\n";
    $result = addContentToSuluPage($pagePath, $suluContent, $options);
    
    if ($result) {
        echo " Successfully added AI-generated content to Sulu page!\n";
        $webPath = str_replace('/cmf/example/contents', '', $pagePath);
        echo " Visit: https://sulu-never-code-alone.ddev.site/{$options['locale']}{$webPath}\n";
        echo " Total tokens used: " . (
            ($analysisResponse->getUsage()['totalTokens'] ?? 0) + 
            ($contentResponse->getUsage()['totalTokens'] ?? 0)
        ) . "\n";
        
        // Log AI content generation activity
        try {
            $logger = new AIActivityLogger();
            if ($logger->logAIContentGeneration(
                $pagePath,
                $options['locale'],
                $suluContent,
                $url,
                'gemini',
                $prompt
            )) {
                echo " Activity logged to Sulu\n";
            }
        } catch (Exception $e) {
            // Log error but don't fail the operation
            echo "WARNING:  Activity logging failed: " . $e->getMessage() . "\n";
        }
    } else {
        echo "ERROR: Failed to add content to Sulu page\n";
        exit(1);
    }
} else {
    echo "\n Dry run completed - no changes made to Sulu page\n";
    echo " Total tokens used: " . (
        ($analysisResponse->getUsage()['totalTokens'] ?? 0) + 
        ($contentResponse->getUsage()['totalTokens'] ?? 0)
    ) . "\n";
}

function createAnalysisPrompt(string $userPrompt, string $format, string $locale): string
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

function createContentPrompt(string $analysis, string $userPrompt, array $options): string
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
    
    $style = $formatStyles[$options['format']];
    
    return "Basierend auf dieser Analyse erstelle einen hochwertigen deutschen Artikel:

ANALYSE:
{$analysis}

AUFTRAG: {$userPrompt}

CONTENT-ANFORDERUNGEN:
- Format: {$options['format']} ({$style['style']})
- {$style['keywords']}
- {$style['length']}
- Zielgruppe: Deutsche PHP-Entwickler, Senior-Entwickler, Team-Leader
- Temperatur: {$options['temperature']} (Kreativitätslevel)

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

function getSuluContentSchema(): array
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

function processAIContent($contentResponse, array $options, string $url): array
{
    $content = $contentResponse->getContent();
    $structuredContent = $contentResponse->getMetadataValue('structured_content');
    
    // Try to parse structured content first
    if ($structuredContent && is_array($structuredContent)) {
        return createSuluBlocksFromStructured($structuredContent, $options, $url);
    }
    
    // Fallback: parse the raw content
    return createSuluBlocksFromText($content, $options, $url);
}

function createSuluBlocksFromStructured(array $structured, array $options, string $url): array
{
    $items = [];
    
    // Add introduction
    if (isset($structured['introduction'])) {
        $items[] = [
            'type' => 'description',
            'settings' => [],
            'description' => '<p>' . htmlspecialchars($structured['introduction']) . '</p>'
        ];
    }
    
    // Add sections
    if (isset($structured['sections']) && is_array($structured['sections'])) {
        foreach ($structured['sections'] as $section) {
            // Add heading
            if (isset($section['heading'])) {
                $items[] = [
                    'type' => 'description', 
                    'settings' => [],
                    'description' => '<h2>' . htmlspecialchars($section['heading']) . '</h2>'
                ];
            }
            
            // Add content
            if (isset($section['content'])) {
                $items[] = [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<p>' . nl2br(htmlspecialchars($section['content'])) . '</p>'
                ];
            }
            
            // Add code example if present
            if (isset($section['code_example']) && !empty($section['code_example'])) {
                $items[] = [
                    'type' => 'code',
                    'settings' => [],
                    'code' => '<pre><code>' . htmlspecialchars($section['code_example']) . '</code></pre>'
                ];
            }
            
            // Add key points as list
            if (isset($section['key_points']) && is_array($section['key_points'])) {
                $listItems = array_map(function($point) {
                    return '<li>' . htmlspecialchars($point) . '</li>';
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
            'description' => '<h3>Fazit</h3><p>' . htmlspecialchars($structured['conclusion']) . '</p>'
        ];
    }
    
    // Add metadata
    $items[] = [
        'type' => 'description',
        'settings' => [],
        'description' => '<hr><p><small><strong>Quelle:</strong> <a href="' . htmlspecialchars($url) . '" target="_blank" rel="noopener">' . htmlspecialchars($url) . '</a><br><em>Generiert am ' . date('d.m.Y H:i') . ' Uhr mit Gemini AI</em></small></p>'
    ];
    
    // Generate headline and clean it up
    $headline = $options['headline'] ?? $structured['headline'] ?? "AI-Generierter Content - " . date('d.m.Y');
    // Remove markdown headers if present
    $headline = preg_replace('/^#{1,6}\s+/', '', $headline);
    // Strip any HTML tags
    $headline = strip_tags($headline);
    
    return [
        'type' => 'headline-paragraphs',
        'settings' => [],
        'headline' => $headline,
        'items' => $items
    ];
}

function createSuluBlocksFromText(string $content, array $options, string $url): array
{
    // Basic fallback parsing
    $paragraphs = explode("\n\n", $content);
    $items = [];
    
    foreach ($paragraphs as $paragraph) {
        $paragraph = trim($paragraph);
        if (empty($paragraph)) continue;
        
        // Check if it's a heading
        if (preg_match('/^(#{1,3})\s*(.+)/', $paragraph, $matches)) {
            $level = strlen($matches[1]);
            $text = $matches[2];
            $tag = $level === 1 ? 'h2' : ($level === 2 ? 'h3' : 'h4');
            
            $items[] = [
                'type' => 'description',
                'settings' => [],
                'description' => "<{$tag}>" . htmlspecialchars($text) . "</{$tag}>"
            ];
        } else {
            $items[] = [
                'type' => 'description', 
                'settings' => [],
                'description' => '<p>' . nl2br(htmlspecialchars($paragraph)) . '</p>'
            ];
        }
    }
    
    // Add source reference
    $items[] = [
        'type' => 'description',
        'settings' => [],
        'description' => '<hr><p><small><strong>Quelle:</strong> <a href="' . htmlspecialchars($url) . '" target="_blank" rel="noopener">' . htmlspecialchars($url) . '</a><br><em>Generiert am ' . date('d.m.Y H:i') . ' Uhr mit Gemini AI</em></small></p>'
    ];
    
    $headline = $options['headline'] ?? "AI-Generierter Content - " . date('d.m.Y');
    // Remove markdown headers if present
    $headline = preg_replace('/^#{1,6}\s+/', '', $headline);
    // Strip any HTML tags
    $headline = strip_tags($headline);
    
    return [
        'type' => 'headline-paragraphs',
        'settings' => [],
        'headline' => $headline,
        'items' => $items
    ];
}

function showContentPreview(array $content): void
{
    echo " Headline: " . $content['headline'] . "\n\n";
    
    foreach ($content['items'] as $index => $item) {
        echo " Block " . ($index + 1) . " ({$item['type']}):\n";
        
        if ($item['type'] === 'description') {
            $preview = strip_tags($item['description']);
            $preview = substr($preview, 0, 200) . (strlen($preview) > 200 ? '...' : '');
            echo "   " . $preview . "\n";
        } elseif ($item['type'] === 'code') {
            $preview = strip_tags($item['code']);
            $preview = substr($preview, 0, 150) . (strlen($preview) > 150 ? '...' : '');
            echo "   CODE: " . $preview . "\n";
        }
        echo "\n";
    }
}

function addContentToSuluPage(string $pagePath, array $content, array $options): bool
{
    try {
        // Use direct database approach since Symfony DI is complex in CLI
        $host = 'db';
        $user = 'db';
        $password = 'db';
        $database = 'db';
        
        $pdo = new PDO("mysql:host=$host;dbname=$database;charset=utf8mb4", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Get current page from default workspace
        $stmt = $pdo->prepare("SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'");
        $stmt->execute([$pagePath]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$result) {
            echo "ERROR: Page not found: $pagePath\n";
            return false;
        }
        
        echo " Found page: $pagePath\n";
        
        // Parse XML
        $xml = new DOMDocument();
        $xml->loadXML($result['props']);
        
        $xpath = new DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
        
        // Get current blocks
        $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $options['locale'] . '-blocks"]');
        if ($blocksNodes->length === 0) {
            echo "ERROR: No blocks property found for locale {$options['locale']}\n";
            return false;
        }
        
        $blocksValue = $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
        $currentBlocks = unserialize(base64_decode($blocksValue));
        
        echo " Current blocks count: " . count($currentBlocks) . "\n";
        
        // Check for duplicate headline
        foreach ($currentBlocks as $index => $block) {
            if (isset($block['headline']) && $block['headline'] === $content['headline']) {
                echo "WARNING:  Block with same headline already exists at index $index\n";
                echo " Continue anyway? [y/N]: ";
                $confirm = trim(fgets(STDIN));
                if (strtolower($confirm) !== 'y') {
                    return false;
                }
                break;
            }
        }
        
        // Insert new block at specified position
        $updatedBlocks = [];
        for ($i = 0; $i < count($currentBlocks); $i++) {
            if ($i == $options['position']) {
                $updatedBlocks[] = $content; // Insert new block
            }
            $updatedBlocks[] = $currentBlocks[$i];
        }
        
        // If position is beyond current blocks, append at the end
        if ($options['position'] >= count($currentBlocks)) {
            $updatedBlocks[] = $content;
        }
        
        echo " Inserting new block at position {$options['position']}\n";
        echo " New blocks count: " . count($updatedBlocks) . "\n";
        
        // Update XML with new blocks
        $newBlocksValue = base64_encode(serialize($updatedBlocks));
        $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = $newBlocksValue;
        
        // Update blocks length
        $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $options['locale'] . '-blocks-length"]');
        if ($lengthNodes->length > 0) {
            $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = count($updatedBlocks);
        }
        
        // Save to both workspaces
        $updatedXml = $xml->saveXML();
        
        $updateStmt = $pdo->prepare("UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?");
        $updateStmt->execute([$updatedXml, $pagePath, 'default']);
        $updateStmt->execute([$updatedXml, $pagePath, 'default_live']);
        
        echo " Updated both default and default_live workspaces\n";
        
        return true;
        
    } catch (Exception $e) {
        echo "ERROR: Error: " . $e->getMessage() . "\n";
        return false;
    }
}

function convertToPagePath(string $input): string 
{
    // If it's already a CMF path, return as is
    if (strpos($input, '/cmf/') === 0) {
        return $input;
    }
    
    // If it's a full URL, convert to CMF path
    if (strpos($input, 'https://sulu-never-code-alone.ddev.site/') === 0) {
        // Remove base URL and locale
        $path = str_replace('https://sulu-never-code-alone.ddev.site/', '', $input);
        
        // Remove locale prefix (e.g., 'de/', 'en/')
        $path = preg_replace('/^[a-z]{2}\//', '', $path);
        
        // Remove any anchor fragments
        $path = preg_replace('/#.*$/', '', $path);
        
        // Convert URL path to CMF path
        $cmfPath = '/cmf/example/contents/' . trim($path, '/');
        
        // Replace URL segments with proper CMF structure
        $cmfPath = str_replace('/php-glossar/', '/nca-php-glossar/', $cmfPath);
        
        echo " Converted URL to CMF path: $cmfPath\n";
        return $cmfPath;
    }
    
    // If it's a relative path, assume it's under /cmf/example/contents
    if (strpos($input, '/') === 0 && strpos($input, '/cmf/') !== 0) {
        $cmfPath = '/cmf/example/contents' . $input;
        echo " Converted relative path to CMF path: $cmfPath\n";
        return $cmfPath;
    }
    
    // Default: return input as is
    return $input;
}