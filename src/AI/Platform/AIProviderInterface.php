<?php

namespace App\AI\Platform;

interface AIProviderInterface
{
    public function generateContent(string $prompt, array $options = []): AIResponse;
    
    public function analyzeUrl(string $url, string $analysisPrompt): AIResponse;
    
    public function getName(): string;
    
    public function supportsFeature(string $feature): bool;
}