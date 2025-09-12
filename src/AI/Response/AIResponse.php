<?php

namespace App\AI\Response;

/**
 * Response object from AI providers
 */
class AIResponse
{
    public function __construct(
        private string $content,
        private array $usage = [],
        private array $metadata = []
    ) {}

    public function getContent(): string
    {
        return $this->content;
    }

    public function getUsage(): array
    {
        return $this->usage;
    }

    public function getMetadata(): array
    {
        return $this->metadata;
    }

    public function getTotalTokens(): int
    {
        return $this->usage['totalTokens'] ?? 0;
    }

    public function getPromptTokens(): int
    {
        return $this->usage['promptTokens'] ?? 0;
    }

    public function getCompletionTokens(): int
    {
        return $this->usage['completionTokens'] ?? 0;
    }

    public function getMetadataValue(string $key, $default = null)
    {
        return $this->metadata[$key] ?? $default;
    }
}