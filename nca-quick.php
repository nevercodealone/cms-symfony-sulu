#!/usr/bin/env php
<?php

/**
 * NCA Quick - Fast AI Content Generator
 * 
 * Usage: php nca-quick.php <url> <prompt> [options]
 * 
 * Quick one-liner for fast content generation
 */

require_once __DIR__ . '/vendor/autoload.php';

use Symfony\Component\Dotenv\Dotenv;
use App\AI\Platform\AIPlatform;
use App\AI\GeminiProvider;

if ($argc < 3) {
    echo "🚀 NCA Quick - Fast AI Content Generator\n";
    echo "=========================================\n\n";
    echo "Usage: php nca-quick.php <url> <prompt> [options]\n\n";
    echo "Options:\n";
    echo "  --page=PATH            Sulu page path (default: /cmf/example/contents/blog/quick-ai)\n";
    echo "  --position=N           Insert position (default: 2)\n";
    echo "  --format=FORMAT        seo|technical|tutorial (default: seo)\n";
    echo "  --headline='TEXT'      Custom headline\n";
    echo "  --dry-run              Preview only\n";
    echo "  --live                 Execute immediately (skip confirmations)\n\n";
    echo "Examples:\n";
    echo "  php nca-quick.php 'https://github.com/php/php-src' 'PHP 8.3 Features für deutsche Entwickler' --format=technical\n";
    echo "  php nca-quick.php 'https://symfony.com/releases' 'Symfony Updates analysieren' --dry-run\n";
    echo "  php nca-quick.php 'https://github.com/laravel/laravel' 'Laravel Tutorial erstellen' --page='/cmf/example/contents/tutorials/laravel' --live\n";
    exit(1);
}

// Parse arguments
$url = $argv[1];
$prompt = $argv[2];

// Parse options
$options = [
    'page' => '/cmf/example/contents/blog/quick-ai',
    'position' => 2,
    'format' => 'seo',
    'headline' => null,
    'dry-run' => true,
    'live' => false
];

for ($i = 3; $i < $argc; $i++) {
    if (strpos($argv[$i], '--page=') === 0) {
        $options['page'] = convertToPagePath(substr($argv[$i], 7));
    } elseif (strpos($argv[$i], '--position=') === 0) {
        $options['position'] = (int) substr($argv[$i], 11);
    } elseif (strpos($argv[$i], '--format=') === 0) {
        $options['format'] = substr($argv[$i], 9);
    } elseif (strpos($argv[$i], '--headline=') === 0) {
        $options['headline'] = trim(substr($argv[$i], 11), '"\'');
    } elseif ($argv[$i] === '--dry-run') {
        $options['dry-run'] = true;
        $options['live'] = false;
    } elseif ($argv[$i] === '--live') {
        $options['live'] = true;
        $options['dry-run'] = false;
    }
}

// Load environment
$dotenv = new Dotenv();
$dotenv->loadEnv(__DIR__ . '/.env.local');

echo "⚡ NCA Quick - Fast AI Content Generator\n";
echo "========================================\n\n";

// Initialize AI
try {
    $geminiProvider = new GeminiProvider(
        $_ENV['GEMINI_API_KEY'] ?? throw new Exception('GEMINI_API_KEY required'),
        $_ENV['GEMINI_MODEL'] ?? 'gemini-1.5-flash'
    );
    
    $aiPlatform = new AIPlatform();
    $aiPlatform->addProvider('gemini', $geminiProvider);
    $aiPlatform->setDefaultProvider('gemini');
    
    echo "✅ AI Platform ready\n";
} catch (Exception $e) {
    echo "❌ AI Platform error: " . $e->getMessage() . "\n";
    exit(1);
}

echo "🎯 Target: {$options['page']} (position {$options['position']})\n";
echo "🔗 Source: $url\n";
echo "📊 Format: {$options['format']}\n";
echo "🚀 Mode: " . ($options['dry-run'] ? 'Dry Run' : 'Live') . "\n";
echo "✍️  Prompt: " . substr($prompt, 0, 60) . (strlen($prompt) > 60 ? '...' : '') . "\n\n";

// Quick analysis
echo "🔍 Analyzing...\n";
$startTime = microtime(true);

try {
    $analysisPrompt = "Analysiere diese URL für deutsche Entwickler-Zielgruppe:\n{$prompt}\n\nFormat: {$options['format']}\nExtrahiere relevante Informationen, Keywords und technische Details.";
    
    $analysisResponse = $aiPlatform->analyzeUrl($url, $analysisPrompt);
    
    $contentPrompt = "Erstelle einen {$options['format']}-optimierten deutschen Artikel:\n\nAnalyse: {$analysisResponse->getContent()}\n\nAuftrag: {$prompt}\n\nAnforderungen:\n- Deutsche Zielgruppe: PHP/Symfony-Entwickler\n- Format: {$options['format']}\n- Struktur: Einleitung, 3-4 Hauptabschnitte, Fazit\n- Keywords natürlich einbauen\n- Praxisbezug\n\nErstelle strukturierten Content.";
    
    $contentResponse = $aiPlatform->getProvider('gemini')->generateContent($contentPrompt, [
        'generation_config' => ['temperature' => 0.3]
    ]);
    
    $processingTime = round((microtime(true) - $startTime) * 1000);
    echo "✅ Generated in {$processingTime}ms\n\n";
    
} catch (Exception $e) {
    echo "❌ Generation failed: " . $e->getMessage() . "\n";
    exit(1);
}

// Process content
$content = $contentResponse->getContent();
$headline = $options['headline'] ?: generateHeadline($content, $prompt);

$suluContent = [
    'type' => 'headline-paragraphs',
    'settings' => [],
    'headline' => $headline,
    'items' => parseContentToSuluBlocks($content, $url)
];

// Show preview
echo "👀 Preview:\n";
echo "═══════════\n";
echo "📰 {$headline}\n\n";

$previewText = strip_tags(implode(' ', array_column($suluContent['items'], 'description')));
$preview = substr($previewText, 0, 300) . (strlen($previewText) > 300 ? '...' : '');
echo "$preview\n\n";

echo "📊 Blocks: " . count($suluContent['items']) . "\n";
echo "📏 Length: " . strlen($previewText) . " characters\n\n";

if (!$options['dry-run']) {
    if (!$options['live']) {
        echo "Add to Sulu page? [y/N]: ";
        $confirm = trim(fgets(STDIN));
        if (strtolower($confirm) !== 'y') {
            echo "❌ Cancelled\n";
            exit(0);
        }
    }
    
    echo "💾 Adding to Sulu...\n";
    $result = addToSuluPage($options['page'], $suluContent, $options['position']);
    
    if ($result) {
        echo "✅ Content added successfully!\n";
        $webPath = str_replace('/cmf/example/contents', '', $options['page']);
        echo "🌐 https://sulu-never-code-alone.ddev.site/de{$webPath}\n";
    } else {
        echo "❌ Failed to add content\n";
        exit(1);
    }
} else {
    echo "🔍 Dry run completed - no changes made\n";
}

echo "⚡ NCA Quick completed!\n";

function generateHeadline($content, $prompt): string 
{
    // Extract first meaningful line or generate from prompt
    $lines = explode("\n", $content);
    foreach ($lines as $line) {
        $line = trim($line);
        if (strlen($line) > 20 && !str_contains($line, '```')) {
            return strip_tags($line);
        }
    }
    
    // Fallback: generate from prompt
    $words = explode(' ', $prompt);
    $keyWords = array_slice($words, 0, 5);
    return implode(' ', $keyWords) . " - " . date('M Y');
}

function parseContentToSuluBlocks($content, $url): array
{
    $blocks = [];
    $paragraphs = explode("\n\n", $content);
    
    foreach ($paragraphs as $paragraph) {
        $paragraph = trim($paragraph);
        if (empty($paragraph)) continue;
        
        // Code blocks
        if (str_contains($paragraph, '```')) {
            $codeContent = preg_replace('/```\w*\n?/', '', $paragraph);
            $codeContent = preg_replace('/```$/', '', $codeContent);
            
            $blocks[] = [
                'type' => 'code',
                'settings' => [],
                'code' => '<pre><code>' . htmlspecialchars(trim($codeContent)) . '</code></pre>'
            ];
            continue;
        }
        
        // Headings
        if (preg_match('/^(#{1,3})\s*(.+)/', $paragraph, $matches)) {
            $level = strlen($matches[1]);
            $text = $matches[2];
            $tag = $level === 1 ? 'h2' : 'h3';
            
            $blocks[] = [
                'type' => 'description',
                'settings' => [],
                'description' => "<{$tag}>" . htmlspecialchars($text) . "</{$tag}>"
            ];
            continue;
        }
        
        // Regular paragraphs
        $blocks[] = [
            'type' => 'description',
            'settings' => [],
            'description' => '<p>' . nl2br(htmlspecialchars($paragraph)) . '</p>'
        ];
    }
    
    // Add source
    $blocks[] = [
        'type' => 'description',
        'settings' => [],
        'description' => '<hr><p><small>Quelle: <a href="' . htmlspecialchars($url) . '">' . htmlspecialchars($url) . '</a> | NCA Quick AI</small></p>'
    ];
    
    return $blocks;
}

function addToSuluPage($pagePath, $content, $position): bool
{
    try {
        $pdo = new PDO("mysql:host=db;dbname=db", 'db', 'db');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $pdo->prepare("SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'");
        $stmt->execute([$pagePath]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$result) return false;
        
        $xml = new DOMDocument();
        $xml->loadXML($result['props']);
        
        $xpath = new DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
        
        // Check which format the page uses
        $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks"]');
        
        if ($blocksNodes->length > 0) {
            // Format 1: Serialized blocks (newer format)
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
            $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:de-blocks-length"]');
            if ($lengthNodes->length === 0) return false;
            
            $currentLength = (int) $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
            
            // Shift existing blocks from position onwards to make room
            if ($position < $currentLength) {
                for ($i = $currentLength - 1; $i >= $position; $i--) {
                    $properties = $xpath->query('//sv:property[starts-with(@sv:name, "i18n:de-blocks-") and contains(@sv:name, "#' . $i . '")]');
                    foreach ($properties as $property) {
                        $oldName = $property->getAttribute('sv:name');
                        $newName = str_replace('#' . $i, '#' . ($i + 1), $oldName);
                        $property->setAttributeNS('http://www.jcp.org/jcr/sv/1.0', 'sv:name', $newName);
                    }
                }
            }
            
            // Add the new block properties
            addBlockPropertiesQuick($xml, $xpath, 'de', $position, $content);
            
            // Update the blocks length
            $lengthNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue = $currentLength + 1;
        }
        
        $updatedXml = $xml->saveXML();
        $updateStmt = $pdo->prepare("UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?");
        $updateStmt->execute([$updatedXml, $pagePath, 'default']);
        $updateStmt->execute([$updatedXml, $pagePath, 'default_live']);
        
        return true;
        
    } catch (Exception $e) {
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
        
        echo "🔄 Converted URL to CMF path: $cmfPath\n";
        return $cmfPath;
    }
    
    // If it's a relative path, assume it's under /cmf/example/contents
    if (strpos($input, '/') === 0 && strpos($input, '/cmf/') !== 0) {
        $cmfPath = '/cmf/example/contents' . $input;
        echo "🔄 Converted relative path to CMF path: $cmfPath\n";
        return $cmfPath;
    }
    
    // Default: return input as is
    return $input;
}

function addBlockPropertiesQuick($xml, $xpath, $locale, $position, $content): void
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