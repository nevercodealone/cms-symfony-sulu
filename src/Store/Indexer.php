<?php

declare(strict_types=1);

namespace App\Store;

use Symfony\AI\Store\Document\Transformer\TextSplitTransformer;
use Symfony\AI\Store\IndexerInterface;

final readonly class Indexer
{
    public function __construct(
        private YouTubeChannelLoader $loader,
        private TextSplitTransformer $transformer,
        private IndexerInterface $indexer,
    ) {
    }

    public function index(string $channelHandle, int $limit): void
    {
        $documents = [];
        $rawDocuments = $this->loader->load($channelHandle, ['limit' => $limit]);
        $transformedDocuments = $this->transformer->transform($rawDocuments);
        
        foreach ($transformedDocuments as $document) {
            $documents[] = $document;
        }

        $this->indexer->index($documents);
    }
}
