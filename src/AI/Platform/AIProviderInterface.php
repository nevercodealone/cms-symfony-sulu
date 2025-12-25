<?php

declare(strict_types=1);

namespace App\AI\Platform;

interface AIProviderInterface
{
    /**
     * @param array<string, mixed> $options
     */
    public function generateContent(string $prompt, array $options = []): AIResponse;

    /**
     * @param array<string, mixed> $schema
     */
    public function generateStructuredContent(string $prompt, array $schema = []): AIResponse;

    public function analyzeUrl(string $url, string $analysisPrompt): AIResponse;

    public function getName(): string;

    public function supportsFeature(string $feature): bool;
}