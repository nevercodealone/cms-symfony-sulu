<?php

declare(strict_types=1);

namespace App\AI\Platform;

class AIPlatform
{
    /** @var array<string, AIProviderInterface> */
    private array $providers = [];
    private ?string $defaultProvider = null;

    public function addProvider(string $name, AIProviderInterface $provider): void
    {
        $this->providers[$name] = $provider;
        
        if ($this->defaultProvider === null) {
            $this->defaultProvider = $name;
        }
    }

    public function getProvider(?string $name = null): AIProviderInterface
    {
        $providerName = $name ?? $this->defaultProvider;
        
        if (!isset($this->providers[$providerName])) {
            throw new \InvalidArgumentException("Provider '{$providerName}' not found");
        }

        return $this->providers[$providerName];
    }

    public function setDefaultProvider(string $name): void
    {
        if (!isset($this->providers[$name])) {
            throw new \InvalidArgumentException("Provider '{$name}' not found");
        }
        
        $this->defaultProvider = $name;
    }

    /**
     * @return array<int, string>
     */
    public function getAvailableProviders(): array
    {
        return array_keys($this->providers);
    }

    /**
     * @param array<string, mixed> $options
     */
    public function generateContent(string $prompt, array $options = [], ?string $provider = null): AIResponse
    {
        return $this->getProvider($provider)->generateContent($prompt, $options);
    }

    public function analyzeUrl(string $url, string $analysisPrompt, ?string $provider = null): AIResponse
    {
        return $this->getProvider($provider)->analyzeUrl($url, $analysisPrompt);
    }
}