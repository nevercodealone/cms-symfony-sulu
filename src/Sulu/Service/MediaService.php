<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Exception as ConnectionException;
use Sulu\Bundle\MediaBundle\Media\Manager\MediaManagerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * Service for Sulu media operations via direct database access.
 *
 * Provides media listing, search, upload, and lookup functionality.
 * Uses direct SQL queries to Sulu's media tables for performance.
 * Upload operations use Sulu's MediaManagerInterface for proper
 * storage, thumbnails, versioning, and metadata handling.
 */
class MediaService
{
    private const MAX_UPLOAD_SIZE = 10 * 1024 * 1024; // 10MB

    /** @var list<string> Internal IP ranges to block for SSRF prevention */
    private const BLOCKED_IP_RANGES = [
        '127.0.0.0/8',
        '10.0.0.0/8',
        '172.16.0.0/12',
        '192.168.0.0/16',
        '169.254.0.0/16',
        '0.0.0.0/8',
    ];

    public function __construct(
        private Connection $connection,
        private MediaManagerInterface $mediaManager,
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
     * List media collections with fallback title and media count.
     *
     * Joins both the requested locale and a fallback locale (en/de) so
     * collections that only have metadata in one language are still identifiable.
     *
     * @return array<int, array{id: int, title: string|null, key: string|null, parent_id: int|null, depth: int, media_count: int}>
     */
    public function listCollections(string $locale = 'de'): array
    {
        $fallback = $locale === 'de' ? 'en' : 'de';

        $results = $this->connection->fetchAllAssociative(
            "SELECT c.id, cm.title AS title_locale, cmf.title AS title_fallback,
                    c.collection_key, c.idCollectionsParent, c.depth,
                    (SELECT COUNT(*) FROM me_media m WHERE m.idCollections = c.id) AS media_count
             FROM me_collections c
             LEFT JOIN me_collection_meta cm ON cm.idCollections = c.id AND cm.locale = ?
             LEFT JOIN me_collection_meta cmf ON cmf.idCollections = c.id AND cmf.locale = ?
             ORDER BY c.lft",
            [$locale, $fallback]
        );

        return array_map(fn($row) => [
            'id' => (int) $row['id'],
            'title' => $row['title_locale'] ?? $row['title_fallback'],
            'key' => $row['collection_key'],
            'parent_id' => $row['idCollectionsParent'] !== null ? (int) $row['idCollectionsParent'] : null,
            'depth' => (int) $row['depth'],
            'media_count' => (int) $row['media_count'],
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

    /**
     * Upload media from a URL to Sulu's media library.
     *
     * Downloads the file from the given URL, validates it, and saves via
     * Sulu's MediaManager for proper storage, thumbnails, and metadata.
     *
     * @return array{id: int, title: string, filename: string, mimeType: string, size: int, collectionId: int}
     *
     * @throws \RuntimeException On download failure, validation error, or save error
     */
    public function uploadMediaFromUrl(
        string $url,
        string $title,
        int $collectionId = 1,
        string $locale = 'de',
        ?string $filename = null,
    ): array {
        $this->validateUrl($url);

        $tempPath = sys_get_temp_dir() . '/sulu_upload_' . uniqid('', true);

        try {
            $this->downloadFile($url, $tempPath);
            $resolvedFilename = $filename ?? $this->extractFilenameFromUrl($url);

            return $this->saveViaMediaManager($tempPath, $resolvedFilename, $title, $collectionId, $locale);
        } finally {
            if (file_exists($tempPath)) {
                unlink($tempPath);
            }
        }
    }

    /**
     * Upload media from a local file path to Sulu's media library.
     *
     * @return array{id: int, title: string, filename: string, mimeType: string, size: int, collectionId: int}
     *
     * @throws \RuntimeException If file does not exist, is not readable, or save fails
     */
    public function uploadMediaFromPath(
        string $filePath,
        string $title,
        int $collectionId = 1,
        string $locale = 'de',
        ?string $filename = null,
    ): array {
        if (!file_exists($filePath)) {
            throw new \RuntimeException("File not found: {$filePath}");
        }

        if (!is_readable($filePath)) {
            throw new \RuntimeException("File not readable: {$filePath}");
        }

        $fileSize = filesize($filePath);
        if ($fileSize > self::MAX_UPLOAD_SIZE) {
            throw new \RuntimeException(
                sprintf('File too large: %s bytes (max %s bytes)', $fileSize, self::MAX_UPLOAD_SIZE)
            );
        }

        $resolvedFilename = $filename ?? basename($filePath);

        return $this->saveViaMediaManager($filePath, $resolvedFilename, $title, $collectionId, $locale);
    }

    /**
     * Save a file to Sulu's media library via MediaManagerInterface.
     *
     * Uses the same proven pattern as auto-hortz MediaManagerService:
     * creates an UploadedFile and calls mediaManager->save().
     * Retries once on ConnectionException for stale DBAL connections
     * in the long-lived MCP process.
     *
     * @return array{id: int, title: string, filename: string, mimeType: string, size: int, collectionId: int}
     */
    private function saveViaMediaManager(
        string $tempPath,
        string $filename,
        string $title,
        int $collectionId,
        string $locale,
    ): array {
        $uploadedFile = new UploadedFile($tempPath, $filename, null, null, true);

        $data = [
            'locale' => $locale,
            'title' => $title,
            'collection' => $collectionId,
        ];

        try {
            $media = $this->mediaManager->save($uploadedFile, $data, null);
        } catch (ConnectionException $e) {
            // Retry once — stale DBAL connection in long-lived MCP process
            $this->connection->close();
            $this->connection->connect();
            $media = $this->mediaManager->save($uploadedFile, $data, null);
        }

        return [
            'id' => $media->getId(),
            'title' => $title,
            'filename' => $media->getName(),
            'mimeType' => $media->getMimeType(),
            'size' => $media->getSize(),
            'collectionId' => $collectionId,
        ];
    }

    /**
     * Validate a URL for safety (scheme, SSRF protection).
     *
     * @throws \RuntimeException On invalid or blocked URL
     */
    private function validateUrl(string $url): void
    {
        $parsed = parse_url($url);

        if ($parsed === false || !isset($parsed['scheme'], $parsed['host'])) {
            throw new \RuntimeException('Invalid URL format');
        }

        if (!in_array($parsed['scheme'], ['http', 'https'], true)) {
            throw new \RuntimeException('Only http and https URLs are allowed');
        }

        // Resolve hostname to IP and check for internal ranges (SSRF protection)
        $ip = gethostbyname($parsed['host']);
        if ($ip === $parsed['host']) {
            // gethostbyname returns the input on failure
            throw new \RuntimeException("Cannot resolve hostname: {$parsed['host']}");
        }

        foreach (self::BLOCKED_IP_RANGES as $range) {
            if ($this->ipInRange($ip, $range)) {
                throw new \RuntimeException('URLs pointing to internal network addresses are not allowed');
            }
        }
    }

    /**
     * Check if an IP address falls within a CIDR range.
     */
    private function ipInRange(string $ip, string $cidr): bool
    {
        [$subnet, $bits] = explode('/', $cidr);

        $ipLong = ip2long($ip);
        $subnetLong = ip2long($subnet);
        $mask = -1 << (32 - (int) $bits);

        return ($ipLong & $mask) === ($subnetLong & $mask);
    }

    /**
     * Download a file from URL to a local temp path.
     *
     * @throws \RuntimeException On download failure or file too large
     */
    private function downloadFile(string $url, string $tempPath): void
    {
        $context = stream_context_create([
            'http' => [
                'timeout' => 30,
                'max_redirects' => 5,
                'follow_location' => true,
                'user_agent' => 'Sulu-MCP-MediaUploader/1.0',
            ],
            'ssl' => [
                'verify_peer' => true,
                'verify_peer_name' => true,
            ],
        ]);

        $source = @fopen($url, 'r', false, $context);
        if ($source === false) {
            throw new \RuntimeException("Failed to download from URL: {$url}");
        }

        try {
            $dest = fopen($tempPath, 'w');
            if ($dest === false) {
                throw new \RuntimeException('Failed to create temp file for download');
            }

            $bytesWritten = 0;
            try {
                while (!feof($source)) {
                    $chunk = fread($source, 8192);
                    if ($chunk === false) {
                        break;
                    }
                    $bytesWritten += strlen($chunk);
                    if ($bytesWritten > self::MAX_UPLOAD_SIZE) {
                        throw new \RuntimeException(
                            sprintf('Download exceeds max size of %d bytes', self::MAX_UPLOAD_SIZE)
                        );
                    }
                    fwrite($dest, $chunk);
                }
            } finally {
                fclose($dest);
            }

            if ($bytesWritten === 0) {
                throw new \RuntimeException('Downloaded file is empty');
            }
        } finally {
            fclose($source);
        }
    }

    /**
     * Extract a usable filename from a URL.
     */
    private function extractFilenameFromUrl(string $url): string
    {
        $path = parse_url($url, PHP_URL_PATH);
        $filename = $path ? basename($path) : '';

        // If no extension or empty name, generate one
        if ($filename === '' || !str_contains($filename, '.')) {
            $filename = 'upload_' . date('Ymd_His') . '.jpg';
        }

        return $filename;
    }
}
