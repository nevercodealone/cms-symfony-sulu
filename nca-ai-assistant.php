#!/usr/bin/env php
<?php

/**
 * NCA AI Assistant - Interactive Content Generator
 * 
 * Interactive command line assistant for generating Sulu CMS content
 * Enter URL, source info, and custom prompts step by step
 */

require_once __DIR__ . '/vendor/autoload.php';

use Symfony\Component\Dotenv\Dotenv;
use App\AI\Platform\AIPlatform;
use App\AI\GeminiProvider;
use App\AI\Logger\AIActivityLogger;

// Load environment variables
$dotenv = new Dotenv();
$dotenv->loadEnv(__DIR__ . '/.env.local');

// Colors for better CLI experience
function colorize($text, $color = 'white') {
    $colors = [
        'red' => "\033[31m",
        'green' => "\033[32m",
        'yellow' => "\033[33m",
        'blue' => "\033[34m",
        'magenta' => "\033[35m",
        'cyan' => "\033[36m",
        'white' => "\033[37m",
        'reset' => "\033[0m"
    ];
    return $colors[$color] . $text . $colors['reset'];
}

function prompt($question, $default = null) {
    $defaultText = $default ? " [" . colorize($default, 'cyan') . "]" : "";
    echo colorize($question, 'yellow') . $defaultText . ": ";
    $input = trim(fgets(STDIN));
    return empty($input) && $default ? $default : $input;
}

function displayHeader() {
    echo colorize("
╔══════════════════════════════════════════════════════════════╗
║                    🤖 NCA AI Assistant                      ║
║              Interactive Content Generator                   ║
║                 Powered by Gemini AI                        ║
╚══════════════════════════════════════════════════════════════╝
", 'cyan') . "\n\n";
}

function displayStep($step, $title) {
    echo colorize("┌─ Step $step: $title", 'magenta') . "\n";
    echo colorize("└─ ", 'magenta');
}

displayHeader();

// Initialize AI Platform
echo colorize("🧠 Initializing AI Platform...", 'blue') . "\n";
try {
    $geminiProvider = new GeminiProvider(
        $_ENV['GEMINI_API_KEY'] ?? throw new Exception('GEMINI_API_KEY not found in environment'),
        $_ENV['GEMINI_MODEL'] ?? 'gemini-1.5-flash',
        $_ENV['GEMINI_BASE_URL'] ?? 'https://generativelanguage.googleapis.com/v1beta'
    );
    
    $aiPlatform = new AIPlatform();
    $aiPlatform->addProvider('gemini', $geminiProvider);
    $aiPlatform->setDefaultProvider('gemini');
    
    echo colorize("✅ AI Platform ready!", 'green') . "\n\n";
} catch (Exception $e) {
    echo colorize("❌ Failed to initialize AI Platform: " . $e->getMessage(), 'red') . "\n";
    echo colorize("💡 Make sure GEMINI_API_KEY is set in your .env.local file", 'yellow') . "\n";
    exit(1);
}

// Step 1: Get Target Information
displayStep(1, "Target Configuration");
echo colorize("Where should the content be published?", 'white') . "\n";
echo colorize("💡 You can use either:", 'cyan') . "\n";
echo "  - Full URL: https://sulu-never-code-alone.ddev.site/de/php-glossar/class-leak\n";
echo "  - CMF Path: /cmf/example/contents/nca-php-glossar/class-leak\n\n";

$pageInput = prompt("🎯 Sulu Page (URL or CMF Path)", "/cmf/example/contents/blog/ai-generated");
$pagePath = convertToPagePath($pageInput);

$position = 2;
while (true) {
    $positionInput = prompt("📍 Insert Position", "2");
    $position = (int) $positionInput;
    
    if ($position >= 0 && $position <= 50) {
        break;
    }
    
    echo colorize("❌ Position must be between 0 and 50", 'red') . "\n";
    $retry = prompt("🔄 Try again? [Y/n]", "y");
    if (strtolower($retry) === 'n') {
        echo colorize("❌ Operation cancelled by user", 'yellow') . "\n";
        exit(0);
    }
}

$locale = '';
while (empty($locale)) {
    $locale = prompt("🌐 Locale", "de");
    
    if (!preg_match('/^[a-z]{2}$/', $locale)) {
        echo colorize("❌ Locale must be a 2-letter language code (e.g., 'de', 'en')", 'red') . "\n";
        $locale = '';
        
        $retry = prompt("🔄 Try again? [Y/n]", "y");
        if (strtolower($retry) === 'n') {
            echo colorize("👋 Operation cancelled by user. No changes made.", 'yellow') . "\n";
            exit(0);
        }
    }
}

echo "\n";

// Step 2: Source URL
displayStep(2, "Source Information");
echo colorize("What URL should be analyzed for content?", 'white') . "\n";

$url = '';
while (empty($url)) {
    $url = prompt("🔗 Source URL (GitHub, docs, articles)");
    
    if (empty($url)) {
        echo colorize("❌ URL is required! Please enter a valid URL.", 'red') . "\n";
        echo colorize("💡 Examples:", 'cyan') . "\n";
        echo "  - https://github.com/symfony/symfony\n";
        echo "  - https://tomasvotruba.com/blog/some-article\n";
        echo "  - https://docs.php.net/\n\n";
        
        $retry = prompt("🔄 Try again? [Y/n]", "y");
        if (strtolower($retry) === 'n') {
            echo colorize("👋 Operation cancelled by user. No changes made.", 'yellow') . "\n";
            exit(0);
        }
    } elseif (!filter_var($url, FILTER_VALIDATE_URL)) {
        echo colorize("❌ Invalid URL format! Please enter a valid HTTP/HTTPS URL.", 'red') . "\n";
        echo colorize("💡 URL must start with http:// or https://", 'cyan') . "\n\n";
        
        $url = '';
        $retry = prompt("🔄 Try again? [Y/n]", "y");
        if (strtolower($retry) === 'n') {
            echo colorize("👋 Operation cancelled by user. No changes made.", 'yellow') . "\n";
            exit(0);
        }
    }
}

echo "\n";

// Step 3: Content Strategy
displayStep(3, "Content Strategy");
echo colorize("How should the content be formatted?", 'white') . "\n";

echo colorize("Content Formats:", 'white') . "\n";
echo "  " . colorize("1", 'cyan') . " - SEO (Keywords, 4000-6000 chars, search optimized)\n";
echo "  " . colorize("2", 'cyan') . " - Technical (Code examples, implementation details)\n";
echo "  " . colorize("3", 'cyan') . " - Tutorial (Step-by-step, learning oriented)\n";

$format = 'seo';
while (true) {
    $formatChoice = prompt("📊 Choose format [1-3]", "1");
    $formatMap = ['1' => 'seo', '2' => 'technical', '3' => 'tutorial'];
    
    if (isset($formatMap[$formatChoice])) {
        $format = $formatMap[$formatChoice];
        break;
    }
    
    echo colorize("❌ Please choose 1, 2, or 3", 'red') . "\n";
    $retry = prompt("🔄 Try again? [Y/n]", "y");
    if (strtolower($retry) === 'n') {
        echo colorize("❌ Operation cancelled by user", 'yellow') . "\n";
        exit(0);
    }
}

$temperature = 0.3;
while (true) {
    $tempInput = prompt("🎛️  AI Temperature (0.1-1.0, lower=more focused)", "0.3");
    $temperature = (float) $tempInput;
    
    if ($temperature >= 0.1 && $temperature <= 1.0) {
        break;
    }
    
    echo colorize("❌ Temperature must be between 0.1 and 1.0", 'red') . "\n";
    $retry = prompt("🔄 Try again? [Y/n]", "y");
    if (strtolower($retry) === 'n') {
        echo colorize("❌ Operation cancelled by user", 'yellow') . "\n";
        exit(0);
    }
}

echo "\n";

// Step 4: Custom Prompt
displayStep(4, "Content Request");
echo colorize("Describe what content you want to create:", 'white') . "\n";
echo colorize("💡 Example: 'Erstelle einen deutschen Artikel über die neuesten PHP Features'", 'cyan') . "\n";

$customPrompt = '';
while (empty($customPrompt)) {
    $customPrompt = prompt("✍️  Your prompt");
    
    if (empty($customPrompt)) {
        echo colorize("❌ Content prompt is required! Please describe what you want to create.", 'red') . "\n";
        echo colorize("💡 Examples:", 'cyan') . "\n";
        echo "  - 'Erstelle einen deutschen Artikel über die neuesten PHP Features'\n";
        echo "  - 'Erkläre die Installation und Nutzung dieses Tools'\n";
        echo "  - 'Schreibe einen technischen Guide für deutsche Entwickler'\n\n";
        
        $retry = prompt("🔄 Try again? [Y/n]", "y");
        if (strtolower($retry) === 'n') {
            echo colorize("👋 Operation cancelled by user. No changes made.", 'yellow') . "\n";
            exit(0);
        }
    }
}

$headline = prompt("📰 Custom Headline (optional, auto-generated if empty)");

echo "\n";

// Step 5: Execution Mode
displayStep(5, "Execution Mode");
echo colorize("How should this be executed?", 'white') . "\n";

echo "  " . colorize("1", 'cyan') . " - Dry Run (Preview only, safe)\n";
echo "  " . colorize("2", 'cyan') . " - Live Update (Modify Sulu page)\n";

$dryRun = true;
while (true) {
    $modeChoice = prompt("🚀 Choose mode [1-2]", "1");
    
    if ($modeChoice === "1" || $modeChoice === "2") {
        $dryRun = $modeChoice !== "2";
        break;
    }
    
    echo colorize("❌ Please choose 1 (Dry Run) or 2 (Live Update)", 'red') . "\n";
    $retry = prompt("🔄 Try again? [Y/n]", "y");
    if (strtolower($retry) === 'n') {
        echo colorize("❌ Operation cancelled by user", 'yellow') . "\n";
        exit(0);
    }
}

echo "\n";

// Summary
echo colorize("📋 Summary", 'magenta') . "\n";
echo colorize("═══════════", 'magenta') . "\n";
echo "🎯 Target: " . colorize($pagePath, 'cyan') . " (position $position, locale: $locale)\n";
echo "🔗 Source: " . colorize($url, 'cyan') . "\n";
echo "📊 Format: " . colorize($format, 'cyan') . " (temperature: $temperature)\n";
echo "✍️  Prompt: " . colorize(substr($customPrompt, 0, 60) . (strlen($customPrompt) > 60 ? '...' : ''), 'cyan') . "\n";
if ($headline) {
    echo "📰 Headline: " . colorize($headline, 'cyan') . "\n";
}
echo "🚀 Mode: " . colorize($dryRun ? 'Preview Only' : 'Live Update', $dryRun ? 'yellow' : 'red') . "\n";

echo "\n" . colorize("Continue with this configuration? [Y/n]", 'yellow') . ": ";
$confirm = trim(fgets(STDIN));
if (strtolower($confirm) === 'n') {
    echo colorize("❌ Operation cancelled", 'red') . "\n";
    exit(0);
}

echo "\n";

// Execute the AI content generation
echo colorize("🔄 Starting AI Content Generation...", 'blue') . "\n";
echo colorize("════════════════════════════════════", 'blue') . "\n";

// Create analysis prompt
$analysisPrompt = createAnalysisPrompt($customPrompt, $format, $locale);

// Step 1: Analyze URL
echo colorize("🔍 Analyzing source URL...", 'blue') . "\n";
try {
    $startTime = microtime(true);
    $analysisResponse = $aiPlatform->analyzeUrl($url, $analysisPrompt);
    $analysisTime = round((microtime(true) - $startTime) * 1000);
    
    echo colorize("✅ Analysis completed in {$analysisTime}ms", 'green') . "\n";
    $analysisTokens = $analysisResponse->getUsage()['totalTokens'] ?? 0;
    echo colorize("📊 Tokens used: $analysisTokens", 'green') . "\n\n";
    
} catch (Exception $e) {
    echo colorize("❌ Analysis failed: " . $e->getMessage(), 'red') . "\n";
    exit(1);
}

// Step 2: Generate content
echo colorize("📝 Generating structured content...", 'blue') . "\n";
try {
    $contentPrompt = createContentPrompt($analysisResponse->getContent(), $customPrompt, $format, $temperature, $locale);
    
    $startTime = microtime(true);
    $contentResponse = $aiPlatform->getProvider('gemini')->generateStructuredContent(
        $contentPrompt,
        getSuluContentSchema()
    );
    $contentTime = round((microtime(true) - $startTime) * 1000);
    
    echo colorize("✅ Content generated in {$contentTime}ms", 'green') . "\n";
    $contentTokens = $contentResponse->getUsage()['totalTokens'] ?? 0;
    echo colorize("📊 Tokens used: $contentTokens", 'green') . "\n\n";
    
} catch (Exception $e) {
    echo colorize("❌ Content generation failed: " . $e->getMessage(), 'red') . "\n";
    exit(1);
}

// Process content
$suluContent = processAIContent($contentResponse, $headline, $url);

// Show preview
echo colorize("👀 Content Preview", 'magenta') . "\n";
echo colorize("═══════════════════", 'magenta') . "\n";
showContentPreview($suluContent);

if (!$dryRun) {
    echo "\n" . colorize("Add this content to Sulu page? [Y/n]", 'yellow') . ": ";
    $finalConfirm = trim(fgets(STDIN));
    if (strtolower($finalConfirm) === 'n') {
        echo colorize("❌ Operation cancelled", 'red') . "\n";
        exit(0);
    }
    
    echo colorize("💾 Adding content to Sulu page...", 'blue') . "\n";
    $result = addContentToSuluPage($pagePath, $suluContent, $position, $locale);
    
    if ($result) {
        echo colorize("🎉 Content successfully added to Sulu!", 'green') . "\n";
        $webPath = str_replace('/cmf/example/contents', '', $pagePath);
        echo colorize("🌐 Visit: https://sulu-never-code-alone.ddev.site/{$locale}{$webPath}", 'cyan') . "\n";
        
        // Log AI content generation activity
        try {
            $logger = new AIActivityLogger();
            if ($logger->logAIContentGeneration(
                $pagePath,
                $locale,
                $suluContent,
                $url,
                'gemini',
                $prompt
            )) {
                echo colorize("📝 Activity logged to Sulu", 'green') . "\n";
            }
        } catch (Exception $e) {
            // Log error but don't fail the operation
            echo colorize("⚠️  Activity logging failed: " . $e->getMessage(), 'yellow') . "\n";
        }
    } else {
        echo colorize("❌ Failed to add content to Sulu page", 'red') . "\n";
        exit(1);
    }
} else {
    echo "\n" . colorize("🔍 Dry run completed - no changes made to Sulu page", 'yellow') . "\n";
}

// Final stats
$totalTokens = $analysisTokens + $contentTokens;
echo colorize("📈 Total tokens used: $totalTokens", 'cyan') . "\n";
echo colorize("⚡ Total processing time: " . ($analysisTime + $contentTime) . "ms", 'cyan') . "\n\n";

echo colorize("🎉 NCA AI Assistant completed successfully!", 'green') . "\n";

// Helper functions
function createAnalysisPrompt(string $userPrompt, string $format, string $locale): string
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

function createContentPrompt(string $analysis, string $userPrompt, string $format, float $temperature, string $locale): string
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

function getSuluContentSchema(): array
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

function processAIContent($contentResponse, $customHeadline, string $url): array
{
    $content = $contentResponse->getContent();
    $structuredContent = $contentResponse->getMetadataValue('structured_content');
    
    // First try to use structured content if available
    if ($structuredContent && is_array($structuredContent)) {
        return createSuluBlocksFromStructured($structuredContent, $customHeadline, $url);
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
                return createSuluBlocksFromStructured($jsonContent, $customHeadline, $url);
            }
        } catch (JsonException $e) {
            // Continue to fallback
        }
    }
    
    // Fallback to text parsing
    return createSuluBlocksFromText($content, $customHeadline, $url);
}

function createSuluBlocksFromStructured(array $structured, $customHeadline, string $url): array
{
    $items = [];
    
    // Add introduction
    if (isset($structured['introduction'])) {
        $items[] = [
            'type' => 'description',
            'settings' => [],
            'description' => '<p><strong>' . htmlspecialchars($structured['introduction']) . '</strong></p>'
        ];
    }
    
    // Add sections
    if (isset($structured['sections']) && is_array($structured['sections'])) {
        foreach ($structured['sections'] as $section) {
            if (isset($section['heading'])) {
                $items[] = [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<h2>' . htmlspecialchars($section['heading']) . '</h2>'
                ];
            }
            
            if (isset($section['content'])) {
                $items[] = [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<p>' . nl2br(htmlspecialchars($section['content'])) . '</p>'
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
    
    // Add source
    $items[] = [
        'type' => 'description',
        'settings' => [],
        'description' => '<hr><p><small><strong>Quelle:</strong> <a href="' . htmlspecialchars($url) . '" target="_blank">' . htmlspecialchars($url) . '</a><br><em>Generiert mit NCA AI Assistant am ' . date('d.m.Y H:i') . '</em></small></p>'
    ];
    
    $headline = $customHeadline ?: ($structured['headline'] ?? "AI Content - " . date('d.m.Y'));
    
    return [
        'type' => 'headline-paragraphs',
        'settings' => [],
        'headline' => $headline,
        'items' => $items
    ];
}

function createSuluBlocksFromText(string $content, $customHeadline, string $url): array
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
    
    $items[] = [
        'type' => 'description',
        'settings' => [],
        'description' => '<hr><p><small><strong>Quelle:</strong> <a href="' . htmlspecialchars($url) . '" target="_blank">' . htmlspecialchars($url) . '</a><br><em>Generiert mit NCA AI Assistant am ' . date('d.m.Y H:i') . '</em></small></p>'
    ];
    
    $headline = $customHeadline ?: "AI Content - " . date('d.m.Y');
    
    return [
        'type' => 'headline-paragraphs',
        'settings' => [],
        'headline' => $headline,
        'items' => $items
    ];
}

function showContentPreview(array $content): void
{
    echo colorize("📰 " . $content['headline'], 'cyan') . "\n\n";
    
    foreach ($content['items'] as $index => $item) {
        echo colorize("▶ Block " . ($index + 1), 'yellow') . " (" . colorize($item['type'], 'magenta') . ")\n";
        
        if ($item['type'] === 'description') {
            $preview = strip_tags($item['description']);
            $preview = substr($preview, 0, 120) . (strlen($preview) > 120 ? '...' : '');
            echo "  " . $preview . "\n";
        } elseif ($item['type'] === 'code') {
            $preview = strip_tags($item['code']);
            $preview = substr($preview, 0, 80) . (strlen($preview) > 80 ? '...' : '');
            echo "  " . colorize("CODE: ", 'green') . $preview . "\n";
        }
        echo "\n";
    }
}

function addContentToSuluPage(string $pagePath, array $content, int $position, string $locale): bool
{
    try {
        $pdo = new PDO("mysql:host=db;dbname=db;charset=utf8mb4", 'db', 'db');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $pdo->prepare("SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'");
        $stmt->execute([$pagePath]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$result) {
            echo colorize("❌ Page not found: $pagePath", 'red') . "\n";
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
            echo colorize("📦 Using serialized blocks format", 'cyan') . "\n";
            return addContentSerializedFormat($xml, $xpath, $content, $position, $locale, $pagePath, $pdo);
        } else {
            // Format 2: Individual XML properties (older format)
            echo colorize("📄 Using XML properties format", 'cyan') . "\n";
            return addContentXMLFormat($xml, $xpath, $content, $position, $locale, $pagePath, $pdo);
        }
        
    } catch (Exception $e) {
        echo colorize("❌ Database error: " . $e->getMessage(), 'red') . "\n";
        return false;
    }
}

function addContentSerializedFormat($xml, $xpath, $content, $position, $locale, $pagePath, $pdo): bool
{
    $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks"]');
    $blocksValue = $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
    $currentBlocks = unserialize(base64_decode($blocksValue));
    
    // Insert at position
    array_splice($currentBlocks, $position, 0, [$content]);
    
    $newBlocksValue = base64_encode(serialize($currentBlocks));
    $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = $newBlocksValue;
    
    // Update length
    $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]');
    if ($lengthNodes->length > 0) {
        $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = count($currentBlocks);
    }
    
    $updatedXml = $xml->saveXML();
    
    $updateStmt = $pdo->prepare("UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?");
    $updateStmt->execute([$updatedXml, $pagePath, 'default']);
    $updateStmt->execute([$updatedXml, $pagePath, 'default_live']);
    
    echo colorize("✅ Content added using serialized format", 'green') . "\n";
    return true;
}

function addContentXMLFormat($xml, $xpath, $content, $position, $locale, $pagePath, $pdo): bool
{
    // Get current blocks length
    $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]');
    if ($lengthNodes->length === 0) {
        echo colorize("❌ No blocks-length property found", 'red') . "\n";
        return false;
    }
    
    $currentLength = (int) $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
    echo colorize("📊 Current blocks: $currentLength", 'yellow') . "\n";
    
    // Shift existing blocks from position onwards to make room
    if ($position < $currentLength) {
        echo colorize("🔄 Shifting blocks from position $position", 'yellow') . "\n";
        for ($i = $currentLength - 1; $i >= $position; $i--) {
            shiftBlockProperties($xml, $xpath, $locale, $i, $i + 1);
        }
    }
    
    // Add the new block at the specified position
    echo colorize("📝 Adding new block at position $position", 'yellow') . "\n";
    addBlockProperties($xml, $xpath, $locale, $position, $content);
    
    // Update the blocks length
    $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = $currentLength + 1;
    
    // Save to database
    $updatedXml = $xml->saveXML();
    
    $updateStmt = $pdo->prepare("UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?");
    $updateStmt->execute([$updatedXml, $pagePath, 'default']);
    $updateStmt->execute([$updatedXml, $pagePath, 'default_live']);
    
    echo colorize("✅ Content added using XML format", 'green') . "\n";
    echo colorize("📈 New blocks count: " . ($currentLength + 1), 'green') . "\n";
    return true;
}

function shiftBlockProperties($xml, $xpath, $locale, $fromIndex, $toIndex): void
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

function addBlockProperties($xml, $xpath, $locale, $position, $content): void
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
        
        echo colorize("🔄 Converted URL to CMF path: $cmfPath", 'green') . "\n";
        return $cmfPath;
    }
    
    // If it's a relative path, assume it's under /cmf/example/contents
    if (strpos($input, '/') === 0 && strpos($input, '/cmf/') !== 0) {
        $cmfPath = '/cmf/example/contents' . $input;
        echo colorize("🔄 Converted relative path to CMF path: $cmfPath", 'green') . "\n";
        return $cmfPath;
    }
    
    // Default: return input as is
    return $input;
}