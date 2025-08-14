#!/usr/bin/env php
<?php

/**
 * AI Content Generator für Sulu CMS
 * 
 * Usage: php ai_content_generator.php <page-path> <url> <prompt> [options]
 * 
 * Example:
 * php ai_content_generator.php "/cmf/example/contents/nca-php-glossar/phpunit" "https://github.com/sebastianbergmann/phpunit/issues/3795" "Erstelle einen deutschen Artikel über Bootstrap per Test Suite" --position=2 --headline="PHPUnit Bootstrap Features"
 */

if ($argc < 4) {
    echo "Usage: php ai_content_generator.php <page-path> <url> <prompt> [--position=2] [--locale=de] [--headline='Custom Headline'] [--dry-run]\n";
    echo "\nExamples:\n";
    echo "  php ai_content_generator.php '/cmf/example/contents/blog/my-article' 'https://example.com' 'Erstelle einen Artikel über...' --position=3\n";
    echo "  php ai_content_generator.php '/cmf/example/contents/tutorials/php' 'https://github.com/issue/123' 'Erkläre dieses GitHub Issue' --headline='GitHub Issue Analysis'\n";
    exit(1);
}

// Parse arguments
$pagePath = $argv[1];
$url = $argv[2];
$prompt = $argv[3];

// Parse options
$options = [
    'position' => 2,
    'locale' => 'de',
    'headline' => null,
    'dry-run' => false
];

for ($i = 4; $i < $argc; $i++) {
    if (strpos($argv[$i], '--position=') === 0) {
        $options['position'] = (int) substr($argv[$i], 11);
    } elseif (strpos($argv[$i], '--locale=') === 0) {
        $options['locale'] = substr($argv[$i], 9);
    } elseif (strpos($argv[$i], '--headline=') === 0) {
        $options['headline'] = trim(substr($argv[$i], 11), '"\'');
    } elseif ($argv[$i] === '--dry-run') {
        $options['dry-run'] = true;
    }
}

echo "🤖 AI Content Generator für Sulu CMS\n";
echo "=====================================\n\n";

echo "📋 Configuration:\n";
echo "  Page Path: {$pagePath}\n";
echo "  Source URL: {$url}\n";
echo "  AI Prompt: {$prompt}\n";
echo "  Position: {$options['position']}\n";
echo "  Locale: {$options['locale']}\n";
echo "  Custom Headline: " . ($options['headline'] ?: 'Auto-generated') . "\n";
echo "  Mode: " . ($options['dry-run'] ? 'Preview Only' : 'Live Update') . "\n\n";

// Step 1: Fetch content from URL
echo "📥 Fetching Content from URL...\n";
try {
    $context = stream_context_create([
        'http' => [
            'method' => 'GET',
            'header' => [
                'User-Agent: Mozilla/5.0 (compatible; SuluAI/1.0)',
                'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            ],
            'timeout' => 30
        ],
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false
        ]
    ]);
    
    $content = file_get_contents($url, false, $context);
    if ($content === false) {
        throw new Exception("Failed to fetch content from URL");
    }
    
    echo "✅ Successfully fetched content from: {$url}\n";
    echo "📊 Content length: " . strlen($content) . " characters\n\n";
} catch (Exception $e) {
    echo "❌ Error fetching content: " . $e->getMessage() . "\n";
    exit(1);
}

// Step 2: Generate AI content (simulation)
echo "🧠 Generating AI Content...\n";
$aiContent = generateAIContent($content, $prompt, $url);
echo "✅ AI content generated successfully\n\n";

// Step 3: Show preview
echo "👀 Content Preview:\n";
echo "==================\n";
showContentPreview($aiContent);

if (!$options['dry-run']) {
    // Step 4: Get user confirmation
    echo "\n🤔 What would you like to do?\n";
    echo "  [1] Approve and add to Sulu page\n";
    echo "  [2] Regenerate content with new prompt\n";
    echo "  [3] Cancel operation\n";
    echo "Choice [1]: ";
    
    $choice = trim(fgets(STDIN));
    if (empty($choice)) $choice = '1';
    
    if ($choice === '2') {
        echo "\nEnter new/modified prompt (or press Enter to use original): ";
        $newPrompt = trim(fgets(STDIN));
        if (empty($newPrompt)) $newPrompt = $prompt;
        
        echo "\n🔄 Regenerating Content...\n";
        $aiContent = generateAIContent($content, $newPrompt, $url);
        
        echo "👀 Updated Content Preview:\n";
        echo "===========================\n";
        showContentPreview($aiContent);
        
        echo "\n✅ Approve this version? [y/N]: ";
        $approve = trim(fgets(STDIN));
        if (strtolower($approve) !== 'y') {
            echo "❌ Operation cancelled\n";
            exit(0);
        }
    } elseif ($choice === '3') {
        echo "❌ Operation cancelled\n";
        exit(0);
    }

    // Step 5: Add content to Sulu page
    echo "\n💾 Adding Content to Sulu Page...\n";
    $result = addContentToSuluPage($pagePath, $aiContent, $options);
    
    if ($result) {
        echo "🎉 Successfully added AI-generated content to Sulu page!\n";
        $webPath = str_replace('/cmf/example/contents', '', $pagePath);
        echo "🌐 Visit: https://sulu-never-code-alone.ddev.site/{$options['locale']}{$webPath}\n";
    } else {
        echo "❌ Failed to add content to Sulu page\n";
        exit(1);
    }
} else {
    echo "\n🔍 Dry run completed - no changes made to Sulu page\n";
}

function generateAIContent(string $sourceContent, string $prompt, string $url): array
{
    // Extract title from content
    $title = '';
    if (preg_match('/<title[^>]*>([^<]+)<\/title>/i', $sourceContent, $matches)) {
        $title = trim($matches[1]);
    } elseif (preg_match('/<h1[^>]*>([^<]+)<\/h1>/i', $sourceContent, $matches)) {
        $title = strip_tags($matches[1]);
    }
    
    // Generate dynamic headline
    $headline = "🔥 KI-Analyse: " . ($title ?: "Neue Erkenntnisse") . " - " . date('d.m.Y');
    
    // Extract key content snippets
    $textContent = strip_tags($sourceContent);
    $textContent = preg_replace('/\s+/', ' ', $textContent);
    $preview = substr($textContent, 0, 500) . '...';
    
    $items = [
        [
            'type' => 'description',
            'settings' => [],
            'description' => '<p><strong>Automatisch generierter Inhalt</strong> basierend auf: <a href="' . htmlspecialchars($url) . '" target="_blank">' . htmlspecialchars($url) . '</a></p>'
        ],
        [
            'type' => 'description',
            'settings' => [],
            'description' => '<h3>🎯 Analyse-Prompt</h3><p><em>"' . htmlspecialchars($prompt) . '"</em></p>'
        ]
    ];
    
    // Add content analysis based on prompt keywords
    if (stripos($prompt, 'github') !== false || stripos($prompt, 'issue') !== false) {
        $items[] = [
            'type' => 'description',
            'settings' => [],
            'description' => '<h3>📋 GitHub Issue Analyse</h3><p>Detaillierte Analyse des GitHub Issues mit Fokus auf technische Implementierung und Community-Impact.</p>'
        ];
        
        $items[] = [
            'type' => 'code',
            'settings' => [],
            'code' => '<p>// Beispiel-Code basierend auf dem analysierten Issue<br>const analysis = await analyzeGitHubIssue(url);<br>console.log("Issue-Details erfolgreich extrahiert!");</p>'
        ];
    } elseif (stripos($prompt, 'phpunit') !== false || stripos($prompt, 'test') !== false) {
        $items[] = [
            'type' => 'description',
            'settings' => [],
            'description' => '<h3>🧪 PHPUnit Features</h3><p>Analyse neuer Testing-Features und deren Auswirkungen auf die Entwicklungspraxis.</p>'
        ];
        
        $items[] = [
            'type' => 'code',
            'settings' => [],
            'code' => '<p>&lt;phpunit bootstrap="tests/bootstrap.php"&gt;<br>&nbsp;&nbsp;&lt;testsuites&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;testsuite name="feature-tests"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;directory&gt;tests/Feature&lt;/directory&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/testsuite&gt;<br>&nbsp;&nbsp;&lt;/testsuites&gt;<br>&lt;/phpunit&gt;</p>'
        ];
    } else {
        $items[] = [
            'type' => 'description',
            'settings' => [],
            'description' => '<h3>💡 Wichtigste Erkenntnisse</h3><p>KI-basierte Analyse der wichtigsten Punkte aus dem Quellmaterial.</p>'
        ];
        
        $items[] = [
            'type' => 'description',
            'settings' => [],
            'description' => '<h3>📊 Content-Vorschau</h3><p>' . htmlspecialchars($preview) . '</p>'
        ];
    }
    
    // Add source reference
    $items[] = [
        'type' => 'description',
        'settings' => [],
        'description' => '<h3>🔗 Quelle & Weiterführende Links</h3><p>Originale Quelle: <a href="' . htmlspecialchars($url) . '" target="_blank" rel="noopener">' . htmlspecialchars($url) . '</a></p><p><em>Generiert am ' . date('d.m.Y H:i') . ' Uhr mit KI-Unterstützung</em></p>'
    ];

    return [
        'type' => 'headline-paragraphs',
        'settings' => [],
        'headline' => $headline,
        'items' => $items
    ];
}

function showContentPreview(array $content): void
{
    echo "📋 Headline: " . $content['headline'] . "\n\n";
    
    foreach ($content['items'] as $index => $item) {
        echo "📄 Item " . ($index + 1) . " ({$item['type']}):\n";
        
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
        // Use direct database approach since Symfony DI is complex
        $host = 'db';
        $user = 'db';
        $password = 'db';
        $database = 'db';
        
        $pdo = new PDO("mysql:host=$host;dbname=$database;charset=utf8mb4", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Override headline if custom one provided
        if ($options['headline']) {
            $content['headline'] = $options['headline'];
        }
        
        // Get current page from default workspace
        $stmt = $pdo->prepare("SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'");
        $stmt->execute([$pagePath]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$result) {
            echo "❌ Page not found: $pagePath\n";
            return false;
        }
        
        echo "✅ Found page: $pagePath\n";
        
        // Parse XML
        $xml = new DOMDocument();
        $xml->loadXML($result['props']);
        
        $xpath = new DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
        
        // Get current blocks
        $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $options['locale'] . '-blocks"]');
        if ($blocksNodes->length === 0) {
            echo "❌ No blocks property found for locale {$options['locale']}\n";
            return false;
        }
        
        $blocksValue = $blocksNodes->item(0)->getElementsByTagName('value')->item(0)->nodeValue;
        $currentBlocks = unserialize(base64_decode($blocksValue));
        
        echo "📊 Current blocks count: " . count($currentBlocks) . "\n";
        
        // Check for duplicate headline
        foreach ($currentBlocks as $index => $block) {
            if (isset($block['headline']) && $block['headline'] === $content['headline']) {
                echo "⚠️  Block with same headline already exists at index $index\n";
                return false;
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
        
        echo "📥 Inserting new block at position {$options['position']}\n";
        echo "📈 New blocks count: " . count($updatedBlocks) . "\n";
        
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
        
        echo "💾 Updated both default and default_live workspaces\n";
        
        return true;
        
    } catch (Exception $e) {
        echo "❌ Error: " . $e->getMessage() . "\n";
        return false;
    }
}