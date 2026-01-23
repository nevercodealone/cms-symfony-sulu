<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use Doctrine\DBAL\Connection;

/**
 * Service for Sulu media operations via direct database access.
 *
 * Provides media listing, search, and lookup functionality.
 * Uses direct SQL queries to Sulu's media tables for performance.
 */
class MediaService
{
    public function __construct(
        private Connection $connection,
    ) {
    }

    /**
     * List media with optional filtering and pagination.
     *
     * @return array{media: array<int, array{id: int, title: string|null, filename: string, mimeType: string, collectionId: int, size?: int}>, total: int, limit: int, offset: int}
     */
    public function listMedia(
        ?string $search = null,
        ?int $collectionId = null,
        string $locale = 'de',
        int $limit = 50,
        int $offset = 0
    ): array {
        $params = [$locale];
        $types = [\PDO::PARAM_STR];

        $sql = "SELECT m.id, fvm.title, fv.name as filename, fv.mimeType, fv.size, m.idCollections
                FROM me_media m
                INNER JOIN me_files f ON f.idMedia = m.id
                INNER JOIN me_file_versions fv ON fv.idFiles = f.id AND fv.version = f.version
                LEFT JOIN me_file_version_meta fvm ON fvm.idFileVersions = fv.id AND fvm.locale = ?
                WHERE 1=1";

        if ($search !== null && $search !== '') {
            $sql .= " AND (fvm.title LIKE ? OR fv.name LIKE ?)";
            $params[] = "%{$search}%";
            $params[] = "%{$search}%";
            $types[] = \PDO::PARAM_STR;
            $types[] = \PDO::PARAM_STR;
        }

        if ($collectionId !== null) {
            $sql .= " AND m.idCollections = ?";
            $params[] = $collectionId;
            $types[] = \PDO::PARAM_INT;
        }

        // Count total before pagination
        $countSql = str_replace(
            "SELECT m.id, fvm.title, fv.name as filename, fv.mimeType, fv.size, m.idCollections",
            "SELECT COUNT(DISTINCT m.id) as total",
            $sql
        );
        $totalResult = $this->connection->fetchAssociative($countSql, $params, $types);
        $total = (int) ($totalResult['total'] ?? 0);

        // Add ordering and pagination
        $sql .= " ORDER BY m.id DESC LIMIT ? OFFSET ?";
        $params[] = $limit;
        $params[] = $offset;
        $types[] = \PDO::PARAM_INT;
        $types[] = \PDO::PARAM_INT;

        $results = $this->connection->fetchAllAssociative($sql, $params, $types);

        $media = array_map(fn($row) => [
            'id' => (int) $row['id'],
            'title' => $row['title'] ?? $row['filename'],
            'filename' => $row['filename'],
            'mimeType' => $row['mimeType'],
            'size' => isset($row['size']) ? (int) $row['size'] : null,
            'collectionId' => (int) $row['idCollections'],
        ], $results);

        return [
            'media' => $media,
            'total' => $total,
            'limit' => $limit,
            'offset' => $offset,
        ];
    }

    /**
     * Get a single media item by ID.
     *
     * @return array{id: int, title: string|null, filename: string, mimeType: string, size: int|null, collectionId: int, url?: string}|null
     */
    public function getMedia(int $mediaId, string $locale = 'de'): ?array
    {
        $result = $this->connection->fetchAssociative(
            "SELECT m.id, fvm.title, fv.name as filename, fv.mimeType, fv.size, m.idCollections, fv.storageOptions
             FROM me_media m
             INNER JOIN me_files f ON f.idMedia = m.id
             INNER JOIN me_file_versions fv ON fv.idFiles = f.id AND fv.version = f.version
             LEFT JOIN me_file_version_meta fvm ON fvm.idFileVersions = fv.id AND fvm.locale = ?
             WHERE m.id = ?",
            [$locale, $mediaId]
        );

        if (!$result) {
            return null;
        }

        return [
            'id' => (int) $result['id'],
            'title' => $result['title'] ?? $result['filename'],
            'filename' => $result['filename'],
            'mimeType' => $result['mimeType'],
            'size' => isset($result['size']) ? (int) $result['size'] : null,
            'collectionId' => (int) $result['idCollections'],
        ];
    }

    /**
     * List media collections.
     *
     * @return array<int, array{id: int, title: string|null, key: string|null, parent_id: int|null}>
     */
    public function listCollections(string $locale = 'de'): array
    {
        $results = $this->connection->fetchAllAssociative(
            "SELECT c.id, cm.title, c.collection_key, c.idCollectionsParent
             FROM me_collections c
             LEFT JOIN me_collection_meta cm ON cm.idCollections = c.id AND cm.locale = ?
             ORDER BY c.lft",
            [$locale]
        );

        return array_map(fn($row) => [
            'id' => (int) $row['id'],
            'title' => $row['title'],
            'key' => $row['collection_key'],
            'parent_id' => $row['idCollectionsParent'] !== null ? (int) $row['idCollectionsParent'] : null,
        ], $results);
    }

    /**
     * Search media by filename or title.
     *
     * @return array<int, array{id: int, title: string|null, filename: string, mimeType: string, collectionId: int}>
     */
    public function searchMedia(string $query, string $locale = 'de', int $limit = 20): array
    {
        $result = $this->listMedia($query, null, $locale, $limit, 0);
        return $result['media'];
    }

    /**
     * Get media by type (image, video, document, etc.).
     *
     * @return array{media: array<int, array{id: int, title: string|null, filename: string, mimeType: string, collectionId: int}>, total: int}
     */
    public function listMediaByType(string $type, string $locale = 'de', int $limit = 50, int $offset = 0): array
    {
        $mimePattern = match ($type) {
            'image' => 'image/%',
            'video' => 'video/%',
            'audio' => 'audio/%',
            'document' => 'application/pdf',
            default => '%',
        };

        $params = [$locale, $mimePattern];

        $sql = "SELECT m.id, fvm.title, fv.name as filename, fv.mimeType, m.idCollections
                FROM me_media m
                INNER JOIN me_files f ON f.idMedia = m.id
                INNER JOIN me_file_versions fv ON fv.idFiles = f.id AND fv.version = f.version
                LEFT JOIN me_file_version_meta fvm ON fvm.idFileVersions = fv.id AND fvm.locale = ?
                WHERE fv.mimeType LIKE ?";

        // Count total
        $countSql = str_replace(
            "SELECT m.id, fvm.title, fv.name as filename, fv.mimeType, m.idCollections",
            "SELECT COUNT(DISTINCT m.id) as total",
            $sql
        );
        $totalResult = $this->connection->fetchAssociative($countSql, $params);
        $total = (int) ($totalResult['total'] ?? 0);

        // Add pagination
        $sql .= " ORDER BY m.id DESC LIMIT ? OFFSET ?";
        $params[] = $limit;
        $params[] = $offset;

        $results = $this->connection->fetchAllAssociative($sql, $params);

        $media = array_map(fn($row) => [
            'id' => (int) $row['id'],
            'title' => $row['title'] ?? $row['filename'],
            'filename' => $row['filename'],
            'mimeType' => $row['mimeType'],
            'collectionId' => (int) $row['idCollections'],
        ], $results);

        return [
            'media' => $media,
            'total' => $total,
        ];
    }
}
