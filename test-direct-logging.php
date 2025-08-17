#!/usr/bin/env php
<?php

/**
 * Test Direct Activity Logging to Sulu Database
 */

require_once __DIR__ . '/vendor/autoload.php';

use App\AI\Logger\AIActivityLogger;

echo "🧪 Testing Direct Activity Logging\n";
echo "==================================\n\n";

// Test data
$testContent = [
    'type' => 'headline-paragraphs',
    'headline' => 'Test AI Generated Content - ' . date('Y-m-d H:i:s'),
    'items' => [
        ['type' => 'description', 'description' => 'Test paragraph 1'],
        ['type' => 'description', 'description' => 'Test paragraph 2'],
    ]
];

$logger = new AIActivityLogger();

echo "📝 Logging test activity...\n";
$result = $logger->logAIContentGeneration(
    '/cmf/example/contents/blog',
    'de',
    $testContent,
    'https://test.example.com',
    'gemini',
    'Test logging prompt'
);

if ($result) {
    echo "✅ Activity logged successfully!\n";
    echo "🔍 Check Sulu Admin → Activities to see the new entry\n";
    echo "   Type: 'modified' (with AI marker)\n";
    echo "   Resource: pages\n";
    echo "   Headline: " . $testContent['headline'] . " [AI: gemini]\n";
} else {
    echo "❌ Failed to log activity\n";
}

// Check if activity was stored
echo "\n📊 Checking database for recent AI activities...\n";
try {
    $pdo = new PDO("mysql:host=db;dbname=db;charset=utf8mb4", 'db', 'db');
    $stmt = $pdo->query("
        SELECT id, type, resourceTitle, timestamp, userId, context
        FROM ac_activities 
        WHERE type = 'modified' 
        AND context LIKE '%ai_generated%'
        ORDER BY timestamp DESC
        LIMIT 5
    ");
    
    $activities = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    if (count($activities) > 0) {
        echo "Found " . count($activities) . " AI-generated activities:\n";
        foreach ($activities as $activity) {
            echo "  - ID: {$activity['id']}, Title: {$activity['resourceTitle']}, Time: {$activity['timestamp']}\n";
        }
    } else {
        echo "No AI-generated activities found in database.\n";
    }
} catch (Exception $e) {
    echo "Could not check database: " . $e->getMessage() . "\n";
}

echo "\n🎉 Test completed!\n";