<?php

namespace App\AI;

use App\AI\Platform\AIPlatform;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class AIContentService
{
    private AIPlatform $aiPlatform;
    private bool $enabled;

    public function __construct(
        AIPlatform $aiPlatform,
        #[Autowire(env: 'AI_ENABLED')] bool $enabled = true
    ) {
        $this->aiPlatform = $aiPlatform;
        $this->enabled = $enabled;
    }

    public function generateSuluContentBlock(string $url, string $prompt, array $options = []): array
    {
        if (!$this->enabled) {
            throw new \RuntimeException('AI content generation is disabled');
        }

        // Analyze the URL with AI
        $analysisPrompt = "Create German content for a Sulu CMS based on this prompt: {$prompt}";
        $aiResult = $this->aiPlatform->analyzeUrl($url, $analysisPrompt);

        // Extract title and content
        $content = $aiResult->getContent();
        
        // Generate structured Sulu content block
        $structuredPrompt = "Based on this analysis, create a Sulu CMS content block structure with:
        - A compelling German headline
        - Multiple content items (description, code examples if relevant)
        - Professional formatting for German developers
        
        Analysis: {$content}
        
        Return as JSON with this structure:
        {
            \"headline\": \"Headline text\",
            \"items\": [
                {\"type\": \"description\", \"content\": \"HTML content\"},
                {\"type\": \"code\", \"content\": \"Code example\"}
            ]
        }";

        $structuredResult = $this->aiPlatform->getProvider('gemini')->generateStructuredContent($structuredPrompt);

        // Convert to Sulu format
        if ($structuredResult->getMetadataValue('structured_content')) {
            return $this->convertToSuluFormat($structuredResult->getMetadataValue('structured_content'), $options);
        }

        // Fallback: manual parsing if structured failed
        return $this->createFallbackSuluBlock($content, $url, $prompt);
    }

    private function convertToSuluFormat(array $structured, array $options): array
    {
        $headline = $structured['headline'] ?? '🤖 AI-Generated Content';
        
        $items = [];
        foreach ($structured['items'] ?? [] as $item) {
            $items[] = [
                'type' => $item['type'] === 'code' ? 'code' : 'description',
                'settings' => [],
                $item['type'] === 'code' ? 'code' : 'description' => $item['content']
            ];
        }

        // Add source reference
        if (isset($options['source_url'])) {
            $items[] = [
                'type' => 'description',
                'settings' => [],
                'description' => '<h3>🔗 Quelle</h3><p>Basierend auf: <a href="' . htmlspecialchars($options['source_url']) . '" target="_blank" rel="noopener">' . htmlspecialchars($options['source_url']) . '</a></p><p><em>Generiert mit KI am ' . date('d.m.Y H:i') . ' Uhr</em></p>'
            ];
        }

        return [
            'type' => 'headline-paragraphs',
            'settings' => [],
            'headline' => $headline,
            'items' => $items
        ];
    }

    private function createFallbackSuluBlock(string $content, string $url, string $prompt): array
    {
        // Simple fallback when structured parsing fails
        $headline = '🤖 KI-Analyse: ' . date('d.m.Y H:i');
        
        // Extract first paragraph as summary
        $lines = explode("\n", $content);
        $summary = '';
        $details = '';
        
        $foundSummary = false;
        foreach ($lines as $line) {
            $line = trim($line);
            if (empty($line)) continue;
            
            if (!$foundSummary && strlen($line) > 50) {
                $summary = $line;
                $foundSummary = true;
            } else {
                $details .= $line . "\n";
            }
        }

        return [
            'type' => 'headline-paragraphs',
            'settings' => [],
            'headline' => $headline,
            'items' => [
                [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<p><strong>Automatisch generierte Analyse</strong> basierend auf: <a href="' . htmlspecialchars($url) . '" target="_blank">' . htmlspecialchars($url) . '</a></p>'
                ],
                [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<h3>📝 Prompt</h3><p><em>' . htmlspecialchars($prompt) . '</em></p>'
                ],
                [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<h3>🎯 Zusammenfassung</h3><p>' . htmlspecialchars($summary) . '</p>'
                ],
                [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<h3>📋 Details</h3><p>' . nl2br(htmlspecialchars(substr($details, 0, 1000))) . '</p>'
                ],
                [
                    'type' => 'description',
                    'settings' => [],
                    'description' => '<p><em>Generiert mit Gemini AI am ' . date('d.m.Y H:i') . ' Uhr</em></p>'
                ]
            ]
        ];
    }

    public function isEnabled(): bool
    {
        return $this->enabled;
    }
}