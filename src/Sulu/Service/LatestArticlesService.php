<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use Doctrine\DBAL\Connection;
use DOMDocument;
use DOMXPath;

/**
 * Returns the UUIDs of the most recently created pages in the webspace.
 *
 * Mirrors the direct-DBAL pattern used by {@see PageService} (reading the
 * PHPCR XML blob from the `phpcr_nodes` table) so the result can be resolved
 * to fully-loaded Sulu pages via `sulu_content_load()` in Twig.
 */
class LatestArticlesService
{
    private const WORKSPACE_DEFAULT = 'default';
    private const WORKSPACE_LIVE = 'default_live';
    private const CONTENTS_PREFIX = '/cmf/example/contents';
    private const STATE_PUBLISHED = 2;

    public function __construct(
        private readonly Connection $connection,
    ) {
    }

    /**
     * Find the UUIDs of the $limit most recently created published pages.
     *
     * Created date is read from the `i18n:{locale}-created` PHPCR property,
     * matching the field set on page creation in {@see PageService}.
     *
     * @return list<string> UUIDs sorted by created date DESC
     */
    public function findLatestArticleUuids(int $limit, string $locale): array
    {
        $livePaths = $this->fetchLivePaths();
        if ($livePaths === []) {
            return [];
        }

        $draftRows = $this->connection->fetchAllAssociative(
            "SELECT path, identifier, props FROM phpcr_nodes "
            . "WHERE path LIKE ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
            [self::CONTENTS_PREFIX . '%']
        );

        $candidates = [];
        foreach ($draftRows as $row) {
            // Skip the webspace root node itself.
            if ($row['path'] === self::CONTENTS_PREFIX) {
                continue;
            }

            // Must exist in the live workspace (i.e. be published).
            if (!isset($livePaths[$row['path']])) {
                continue;
            }

            $state = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-state");
            if ((int) ($state ?? 1) !== self::STATE_PUBLISHED) {
                continue;
            }

            // Skip pages that have no title for the requested locale.
            $title = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-title");
            if ($title === null || $title === '') {
                continue;
            }

            $created = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-created");

            $uuid = $row['identifier'] ?? $this->extractPropertyFromXml($row['props'], 'jcr:uuid');
            if ($uuid === null || $uuid === '') {
                continue;
            }

            $candidates[] = [
                'uuid' => $uuid,
                'created' => $created ?? '',
            ];
        }

        usort($candidates, static fn (array $a, array $b): int => strcmp($b['created'], $a['created']));

        $top = array_slice($candidates, 0, max(0, $limit));

        return array_map(static fn (array $item): string => $item['uuid'], $top);
    }

    /**
     * @return array<string, int> Map of path => 1 for pages in the live workspace
     */
    private function fetchLivePaths(): array
    {
        $rows = $this->connection->fetchAllAssociative(
            "SELECT path FROM phpcr_nodes "
            . "WHERE path LIKE ? AND workspace_name = '" . self::WORKSPACE_LIVE . "'",
            [self::CONTENTS_PREFIX . '%']
        );

        return array_flip(array_column($rows, 'path'));
    }

    private function extractPropertyFromXml(string $xmlString, string $propertyName): ?string
    {
        try {
            $xml = new DOMDocument();
            $previous = libxml_use_internal_errors(true);
            $xml->loadXML($xmlString);
            libxml_use_internal_errors($previous);

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            $nodes = $xpath->query('//sv:property[@sv:name="' . $propertyName . '"]/sv:value');

            if ($nodes !== false && $nodes->length > 0 && $nodes->item(0)) {
                return $nodes->item(0)->nodeValue;
            }
        } catch (\Exception) {
            // Ignore parsing errors
        }

        return null;
    }
}
