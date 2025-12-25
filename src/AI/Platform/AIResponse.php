<?php

declare(strict_types=1);

namespace App\AI\Platform;

class AIResponse
{
    private string $content;
    /** @var array<string, mixed>|null */
    private ?array $usage;
    private ?string $finishReason;
    /** @var array<string, mixed> */
    private array $metadata;

    /**
     * @param array<string, mixed>|null $usage
     * @param array<string, mixed> $metadata
     */
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

    /**
     * @return array<string, mixed>|null
     */
    public function getUsage(): ?array
    {
        return $this->usage;
    }

    public function getFinishReason(): ?string
    {
        return $this->finishReason;
    }

    /**
     * @return array<string, mixed>
     */
    public function getMetadata(): array
    {
        return $this->metadata;
    }

    public function getMetadataValue(string $key, mixed $default = null): mixed
    {
        return $this->metadata[$key] ?? $default;
    }

    /**
     * @return array<string, mixed>
     */
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