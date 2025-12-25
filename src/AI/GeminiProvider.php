<?php

declare(strict_types=1);

namespace App\AI;

use App\AI\Platform\AIProviderInterface;
use App\AI\Platform\AIResponse;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class GeminiProvider implements AIProviderInterface
{
    private HttpClientInterface $httpClient;
    private string $apiKey;
    private string $model;
    private string $baseUrl;

    public function __construct(
        #[Autowire(env: 'GEMINI_API_KEY')] string $apiKey,
        #[Autowire(env: 'GEMINI_MODEL')] string $model = 'gemini-1.5-flash',
        #[Autowire(env: 'GEMINI_BASE_URL')] string $baseUrl = 'https://generativelanguage.googleapis.com/v1beta',
        ?HttpClientInterface $httpClient = null
    ) {
        $this->apiKey = $apiKey;
        $this->model = $model;
        $this->baseUrl = $baseUrl;
        $this->httpClient = $httpClient ?? HttpClient::create();
    }

    /**
     * @param array<string, mixed> $options
     */
    public function generateContent(string $prompt, array $options = []): AIResponse
    {
        $url = sprintf('%s/models/%s:generateContent?key=%s', 
            $this->baseUrl, 
            $this->model, 
            $this->apiKey
        );

        $payload = [
            'contents' => [
                [
                    'parts' => [
                        ['text' => $prompt]
                    ]
                ]
            ],
            'generationConfig' => array_merge([
                'temperature' => 0.7,
                'topK' => 40,
                'topP' => 0.95,
                'maxOutputTokens' => 8192,
            ], $options['generation_config'] ?? [])
        ];

        try {
            $response = $this->httpClient->request('POST', $url, [
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
                'json' => $payload,
                'timeout' => $options['timeout'] ?? 60,
            ]);

            $data = $response->toArray();
            
            if (!isset($data['candidates'][0]['content']['parts'][0]['text'])) {
                throw new \RuntimeException('Invalid Gemini API response structure');
            }

            return new AIResponse(
                $data['candidates'][0]['content']['parts'][0]['text'],
                $data['usageMetadata'] ?? null,
                $data['candidates'][0]['finishReason'] ?? null
            );

        } catch (\Exception $e) {
            throw new \RuntimeException('Gemini API error: ' . $e->getMessage(), 0, $e);
        }
    }

    /**
     * @param array<string, mixed> $schema
     */
    public function generateStructuredContent(string $prompt, array $schema = []): AIResponse
    {
        $structuredPrompt = $prompt;
        
        if (!empty($schema)) {
            $structuredPrompt .= "\n\nIMPORTANT: Respond ONLY with valid JSON in the following structure (no markdown, no code blocks, no extra text):\n" . json_encode($schema, JSON_PRETTY_PRINT);
        }

        $response = $this->generateContent($structuredPrompt, [
            'generation_config' => [
                'temperature' => 0.3, // Lower temperature for structured output
            ]
        ]);

        $metadata = $response->getMetadata();
        $content = $response->getContent();
        
        // Clean the response - remove markdown code blocks if present
        $content = preg_replace('/^```json\s*/i', '', $content);
        $content = preg_replace('/^```\s*/i', '', $content);
        $content = preg_replace('/\s*```$/i', '', $content);
        $content = trim($content);
        
        // Try to parse JSON if schema was provided
        if (!empty($schema)) {
            try {
                $jsonContent = json_decode($content, true, 512, JSON_THROW_ON_ERROR);
                $metadata['structured_content'] = $jsonContent;
            } catch (\JsonException $e) {
                // Try to extract JSON from the content
                if (preg_match('/\{[\s\S]*\}/m', $content, $matches)) {
                    try {
                        $jsonContent = json_decode($matches[0], true, 512, JSON_THROW_ON_ERROR);
                        $metadata['structured_content'] = $jsonContent;
                    } catch (\JsonException $e2) {
                        // Fallback: return raw content if JSON parsing fails
                        $metadata['json_error'] = 'Failed to parse JSON: ' . $e2->getMessage();
                        $metadata['raw_content'] = $content;
                    }
                } else {
                    $metadata['json_error'] = 'No JSON found in response: ' . $e->getMessage();
                    $metadata['raw_content'] = $content;
                }
            }
        }

        return new AIResponse(
            $content,
            $response->getUsage(),
            $response->getFinishReason(),
            $metadata
        );
    }

    public function analyzeUrl(string $url, string $analysisPrompt): AIResponse
    {
        // First fetch the URL content
        try {
            $response = $this->httpClient->request('GET', $url, [
                'headers' => [
                    'User-Agent' => 'Mozilla/5.0 (compatible; GeminiAnalyzer/1.0)',
                ],
                'timeout' => 30,
            ]);
            
            $content = $response->getContent();
            
            // Ensure proper UTF-8 encoding
            if (!mb_check_encoding($content, 'UTF-8')) {
                $content = mb_convert_encoding($content, 'UTF-8', 'auto');
            }
            
            // Clean and truncate content for API limits
            $cleanContent = strip_tags($content);
            $cleanContent = preg_replace('/\s+/', ' ', $cleanContent);
            
            // Remove any remaining non-UTF-8 characters
            $cleanContent = mb_convert_encoding($cleanContent, 'UTF-8', 'UTF-8');
            
            // Truncate to roughly 30k characters to stay within token limits
            if (strlen($cleanContent) > 30000) {
                $cleanContent = substr($cleanContent, 0, 30000) . '...';
            }
            
            $prompt = "Analyze this content from URL: {$url}\n\n";
            $prompt .= "Content:\n{$cleanContent}\n\n";
            $prompt .= "Analysis Request: {$analysisPrompt}";
            
            return $this->generateContent($prompt);
            
        } catch (\Exception $e) {
            throw new \RuntimeException("Failed to analyze URL {$url}: " . $e->getMessage(), 0, $e);
        }
    }

    public function getName(): string
    {
        return 'gemini';
    }

    public function supportsFeature(string $feature): bool
    {
        return in_array($feature, [
            'text_generation',
            'url_analysis',
            'structured_output'
        ]);
    }
}