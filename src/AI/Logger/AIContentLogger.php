<?php

declare(strict_types=1);

namespace App\AI\Logger;

use App\AI\Domain\Event\AIContentGeneratedEvent;
use Psr\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\EventDispatcher;

class AIContentLogger
{
    private EventDispatcherInterface $eventDispatcher;

    public function __construct(?EventDispatcherInterface $eventDispatcher = null)
    {
        $this->eventDispatcher = $eventDispatcher ?? new EventDispatcher();
    }

    /**
     * Log AI content generation activity to Sulu's activity system
     */
    public function logAIContentGeneration(
        string $pagePath,
        string $locale,
        array $content,
        string $sourceUrl,
        string $aiProvider = 'gemini',
        ?string $prompt = null
    ): void {
        // Extract resource ID from page path
        $resourceId = $this->extractResourceIdFromPath($pagePath);
        
        $payload = [
            'headline' => $content['headline'] ?? 'AI Generated Content',
            'blocks_count' => isset($content['items']) ? count($content['items']) : 0,
            'source_url' => $sourceUrl,
            'ai_provider' => $aiProvider,
            'prompt' => $prompt ? substr($prompt, 0, 200) : null,
            'generation_timestamp' => date('c'),
            'cli_tool' => $this->detectCliTool(),
            'position' => $this->extractPosition(),
            'content_type' => $content['type'] ?? 'headline-paragraphs'
        ];

        $event = new AIContentGeneratedEvent(
            'pages', // Sulu resource key for pages
            $resourceId,
            $locale,
            $payload
        );

        try {
            $this->eventDispatcher->dispatch($event);
        } catch (\Throwable $e) {
            // Fail silently - don't break content generation if logging fails
            error_log("AI Content Logger failed: " . $e->getMessage());
        }
    }

    private function extractResourceIdFromPath(string $pagePath): string
    {
        // Extract UUID from CMF path like /cmf/example/contents/blog/my-page
        // For now, use a hash of the path as identifier since we don't have direct UUID access
        return md5($pagePath);
    }

    private function detectCliTool(): string
    {
        $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 10);
        foreach ($trace as $frame) {
            if (isset($frame['file'])) {
                $filename = basename($frame['file']);
                if (str_contains($filename, 'nca-ai-assistant')) {
                    return 'nca-ai-assistant';
                } elseif (str_contains($filename, 'ai_content_generator_gemini')) {
                    return 'ai_content_generator_gemini';
                } elseif (str_contains($filename, 'nca-quick')) {
                    return 'nca-quick';
                }
            }
        }
        return 'ai-cli-unknown';
    }

    private function extractPosition(): ?int
    {
        // Try to detect position from global variables or arguments
        global $argv;
        if (isset($argv)) {
            foreach ($argv as $arg) {
                if (strpos($arg, '--position=') === 0) {
                    return (int) substr($arg, 11);
                }
            }
        }
        return null;
    }
}