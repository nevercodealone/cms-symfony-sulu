<?php

declare(strict_types=1);

namespace App\Store;

use Symfony\AI\Store\StoreInterface;
use Symfony\AI\Store\Document\VectorizerInterface;

/**
 * Search tool for Sulu content that wraps the ChromaDB store.
 * Used by the AI agent to search website content.
 */
final readonly class SuluContentSearch
{
    public function __construct(
        private StoreInterface $store,
        private VectorizerInterface $vectorizer,
    ) {
    }

    /**
     * Search for relevant Sulu content based on a query string.
     *
     * @param string $query The search query
     * @param int    $limit Maximum number of results to return
     *
     * @return string Formatted search results
     */
    public function __invoke(string $query, int $limit = 5): string
    {
        // Convert query to vector using correct interface method
        $vector = $this->vectorizer->vectorize($query);

        // Query the vector store
        $results = $this->store->query($vector, ['limit' => $limit]);

        if (empty($results)) {
            return 'Keine passenden Webseiten-Inhalte gefunden.';
        }

        // Format results for the agent
        $formattedResults = [];
        $seenPages = [];

        foreach ($results as $result) {
            $metadata = $result->metadata->getArrayCopy();
            $pageId = $metadata['id'] ?? '';

            // Skip duplicate pages
            if (isset($seenPages[$pageId])) {
                continue;
            }
            $seenPages[$pageId] = true;

            $title = $metadata['title'] ?? 'Unbekannt';
            $url = $metadata['url'] ?? '';
            $locale = $metadata['locale'] ?? '';
            $template = $metadata['template'] ?? '';
            $type = $metadata['type'] ?? 'page';
            $content = $result->metadata->getText() ?? '';

            // Truncate content for readability
            if (strlen($content) > 300) {
                $content = substr($content, 0, 297) . '...';
            }

            // Build compact source information
            $sourceInfo = sprintf(
                "📄 %s · %s · %s",
                ucfirst($type),
                strtoupper($locale),
                $template
            );

            $formattedResults[] = sprintf(
                "**%s**\n%s\n%s\n%s",
                $title,
                $url,
                $sourceInfo,
                $content
            );
        }

        if (empty($formattedResults)) {
            return 'Keine passenden Webseiten-Inhalte gefunden.';
        }

        return implode("\n\n", $formattedResults);
    }
}
