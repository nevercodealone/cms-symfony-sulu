<?php

namespace App\AI\Platform;

class AIResponse
{
    private string $content;
    private ?array $usage;
    private ?string $finishReason;
    private array $metadata;

    public function __construct(
        string $content,
        ?array $usage = null,
        ?string $finishReason = null,
        array $metadata = []
    ) {
        $this->content = $content;
        $this->usage = $usage;
        $this->finishReason = $finishReason;
        $this->metadata = $metadata;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function getUsage(): ?array
    {
        return $this->usage;
    }

    public function getFinishReason(): ?string
    {
        return $this->finishReason;
    }

    public function getMetadata(): array
    {
        return $this->metadata;
    }

    public function getMetadataValue(string $key, $default = null)
    {
        return $this->metadata[$key] ?? $default;
    }

    public function toArray(): array
    {
        return [
            'content' => $this->content,
            'usage' => $this->usage,
            'finish_reason' => $this->finishReason,
            'metadata' => $this->metadata,
        ];
    }
}