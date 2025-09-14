<?php

declare(strict_types=1);

namespace App\Store;

use Codewithkyrian\ChromaDB\Client;
use Symfony\AI\Platform\Vector\Vector;
use Symfony\AI\Store\Document\Metadata;
use Symfony\AI\Store\Document\VectorDocument;
use Symfony\AI\Store\Exception\RuntimeException;
use Symfony\AI\Store\StoreInterface;
use Symfony\Component\Uid\Uuid;

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
        if (!class_exists(Client::class)) {
            throw new RuntimeException('For using the ChromaDB as retrieval vector store, the codewithkyrian/chromadb-php package is required. Try running "composer require codewithkyrian/chromadb-php".');
        }
    }

    public function add(VectorDocument ...$documents): void
    {
        $ids = [];
        $vectors = [];
        $metadata = [];
        $originalDocuments = [];

        foreach ($documents as $document) {
            // Generate deterministic ID based on video_id and content
            $metadataArray = $document->metadata->getArrayCopy();
            $videoId = $metadataArray['id'] ?? $metadataArray['video_id'] ?? '';
            $content = $document->metadata->getText() ?? '';

            // Use YouTube video ID + sequence for multiple docs per video
            if ($videoId) {
                // Track document count per video for this batch
                static $videoDocCounts = [];
                if (!isset($videoDocCounts[$videoId])) {
                    $videoDocCounts[$videoId] = 0;
                }
                $docIndex = $videoDocCounts[$videoId]++;

                // YouTube ID + index (e.g., "dQw4w9WgXcQ_0", "dQw4w9WgXcQ_1")
                $deterministicId = $videoId . '_' . $docIndex;
            } else {
                // Fallback to original UUID if no video ID
                $deterministicId = (string) $document->id;
            }

            $ids[] = $deterministicId;
            $vectors[] = $document->vector->getData();

            $metadataCopy = $document->metadata->getArrayCopy();
            $originalDocuments[] = $document->metadata->getText() ?? '';
            unset($metadataCopy[Metadata::KEY_TEXT]);

            // Ensure video_id is stored in metadata
            if ($videoId && !isset($metadataCopy['video_id'])) {
                $metadataCopy['video_id'] = $videoId;
            }

            $metadata[] = $metadataCopy;
        }

        $collection = $this->client->getOrCreateCollection($this->collectionName);

        // Use upsert instead of add to update existing documents
        $collection->upsert($ids, $vectors, $metadata, $originalDocuments);
    }

    /**
     * @param array{where?: array<string, string>, whereDocument?: array<string, mixed>} $options
     */
    public function query(Vector $vector, array $options = []): array
    {
        $collection = $this->client->getOrCreateCollection($this->collectionName);
        $queryResponse = $collection->query(
            queryEmbeddings: [$vector->getData()],
            nResults: 4,
            where: $options['where'] ?? null,
            whereDocument: $options['whereDocument'] ?? null,
        );

        $documents = [];
        for ($i = 0; $i < \count($queryResponse->metadatas[0]); ++$i) {
            // Try to reconstruct UUID from ID or create new one
            $id = $queryResponse->ids[0][$i];
            try {
                $uuid = Uuid::fromString($id);
            } catch (\Exception $e) {
                // If ID is not a valid UUID (our deterministic ID), create a new UUID
                $uuid = Uuid::v5(Uuid::fromString('6ba7b810-9dad-11d1-80b4-00c04fd430c8'), $id);
            }

            $documents[] = new VectorDocument(
                id: $uuid,
                vector: new Vector($queryResponse->embeddings[0][$i]),
                metadata: new Metadata($queryResponse->metadatas[0][$i]),
            );
        }

        return $documents;
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