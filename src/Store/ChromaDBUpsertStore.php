<?php

declare(strict_types=1);

namespace App\Store;

use Codewithkyrian\ChromaDB\Client;
use Symfony\AI\Platform\Vector\Vector;
use Symfony\AI\Store\Document\Metadata;
use Symfony\AI\Store\Document\VectorDocument;
use Symfony\AI\Store\Exception\RuntimeException;
use Symfony\AI\Store\Query\QueryInterface;
use Symfony\AI\Store\Query\VectorQuery;
use Symfony\AI\Store\StoreInterface;

/**
 * ChromaDB Store with upsert capability to prevent duplicates.
 * Uses deterministic IDs based on video_id and content type.
 */
final readonly class ChromaDBUpsertStore implements StoreInterface
{
    public function __construct(
        private Client $client,
        private string $collectionName,
    ) {
    }

    public function add(VectorDocument|array $documents): void
    {
        if ($documents instanceof VectorDocument) {
            $documents = [$documents];
        }

        $ids = [];
        $vectors = [];
        $metadata = [];
        $originalDocuments = [];

        foreach ($documents as $document) {
            // Generate deterministic ID based on video_id and content
            $metadataArray = $document->getMetadata()->getArrayCopy();
            $videoId = $metadataArray['id'] ?? $metadataArray['video_id'] ?? '';
            $content = $document->getMetadata()->getText() ?? '';

            if ($videoId && $content !== '') {
                $contentHash = substr(md5($content), 0, 8);
                $deterministicId = $videoId . '_' . $contentHash;
            } elseif ($videoId) {
                $deterministicId = $videoId . '_' . substr((string) $document->getId(), 0, 8);
            } else {
                $deterministicId = (string) $document->getId();
            }

            $ids[] = $deterministicId;
            $vectors[] = $document->getVector()->getData();

            $metadataCopy = $document->getMetadata()->getArrayCopy();
            $originalDocuments[] = $document->getMetadata()->getText() ?? '';
            unset($metadataCopy[Metadata::KEY_TEXT]);

            if ($videoId && !isset($metadataCopy['video_id'])) {
                $metadataCopy['video_id'] = $videoId;
            }

            $metadata[] = $metadataCopy;
        }

        $collection = $this->client->getOrCreateCollection($this->collectionName);

        // @phpstan-ignore argument.type (chromadb-php library has incorrect PHPDoc type for $metadatas parameter)
        $collection->upsert($ids, $vectors, $metadata, $originalDocuments);
    }

    public function remove(string|array $ids, array $options = []): void
    {
        if (\is_string($ids)) {
            $ids = [$ids];
        }

        if ([] === $ids) {
            return;
        }

        $collection = $this->client->getOrCreateCollection($this->collectionName);
        $collection->delete(ids: $ids);
    }

    public function supports(string $queryClass): bool
    {
        return $queryClass === VectorQuery::class;
    }

    /**
     * @param array{limit?: int, where?: array<string, string>, whereDocument?: array<string, mixed>} $options
     */
    public function query(QueryInterface $query, array $options = []): iterable
    {
        if (!$query instanceof VectorQuery) {
            throw new RuntimeException(sprintf('Unsupported query type "%s".', $query::class));
        }

        $collection = $this->client->getOrCreateCollection($this->collectionName);
        $queryResponse = $collection->query(
            queryEmbeddings: [$query->getVector()->getData()],
            nResults: $options['limit'] ?? 10,
            where: $options['where'] ?? null,
            whereDocument: $options['whereDocument'] ?? null,
        );

        for ($i = 0; $i < \count($queryResponse->metadatas[0]); ++$i) {
            $metaData = new Metadata($queryResponse->metadatas[0][$i]);
            if (isset($queryResponse->documents[0][$i])) {
                $metaData->setText($queryResponse->documents[0][$i]);
            }

            yield new VectorDocument(
                id: $queryResponse->ids[0][$i],
                vector: new Vector($queryResponse->embeddings[0][$i]),
                metadata: $metaData,
                score: $queryResponse->distances[0][$i] ?? null,
            );
        }
    }

    /**
     * Check if a video has already been indexed.
     */
    public function hasVideo(string $videoId): bool
    {
        $collection = $this->client->getOrCreateCollection($this->collectionName);

        $result = $collection->get(
            where: ['video_id' => $videoId],
            limit: 1
        );

        return !empty($result->ids);
    }

    /**
     * Get all indexed video IDs.
     *
     * @return array<int, string>
     */
    public function getIndexedVideoIds(): array
    {
        $collection = $this->client->getOrCreateCollection($this->collectionName);

        $result = $collection->get();

        $videoIds = [];
        if (!empty($result->metadatas)) {
            foreach ($result->metadatas as $metadata) {
                if (isset($metadata['video_id']) || isset($metadata['id'])) {
                    $videoId = $metadata['video_id'] ?? $metadata['id'];
                    $videoIds[$videoId] = true;
                }
            }
        }

        return array_keys($videoIds);
    }
}
