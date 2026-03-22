<?php

declare(strict_types=1);

namespace App\Store;

use Symfony\AI\Store\Document\VectorizerInterface;
use Symfony\AI\Store\Query\VectorQuery;
use Symfony\AI\Store\StoreInterface;

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
        $vector = $this->vectorizer->vectorize($query);

        $results = $this->store->query(new VectorQuery($vector), ['limit' => $limit]);

        $formattedResults = [];
        $seenPages = [];

        foreach ($results as $result) {
            $metadata = $result->getMetadata()->getArrayCopy();
            $pageId = $metadata['id'] ?? '';

            if (isset($seenPages[$pageId])) {
                continue;
            }
            $seenPages[$pageId] = true;

            $title = $metadata['title'] ?? 'Unbekannt';
            $url = $metadata['url'] ?? '';
            $locale = $metadata['locale'] ?? '';
            $template = $metadata['template'] ?? '';
            $type = $metadata['type'] ?? 'page';
            $content = $result->getMetadata()->getText() ?? '';

            if (strlen($content) > 300) {
                $content = substr($content, 0, 297) . '...';
            }

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
