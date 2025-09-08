<?php

declare(strict_types=1);

namespace App\Store;

use Symfony\AI\Store\Document\Transformer\TextSplitTransformer;
use Symfony\AI\Store\Indexer as AiIndexer;

final readonly class Indexer
{
    public function __construct(
        private YouTubeChannelLoader $loader,
        private TextSplitTransformer $transformer,
        private AiIndexer $indexer,
    ) {
    }

    public function index(string $channelHandle, int $limit): void
    {
        $documents = [];
        foreach (($this->transformer)(($this->loader)($channelHandle, ['limit' => $limit])) as $document) {
            array_push($documents, $document);
        }

        $this->indexer->index($documents);
    }
}
