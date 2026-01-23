<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use Doctrine\DBAL\Connection;
use DOMDocument;
use DOMXPath;

/**
 * Service for Sulu snippet operations via direct database access.
 *
 * Provides snippet listing and search functionality independent of PageService.
 * Uses PHPCR workspace queries to find snippets across both draft and live workspaces.
 */
class SnippetService
{
    private const WORKSPACE_DEFAULT = 'default';
    private const WORKSPACE_LIVE = 'default_live';
    private const SNIPPETS_PATH = '/cmf/snippets';

    public function __construct(
        private Connection $connection,
    ) {
    }

    /**
     * List available snippets from PHPCR.
     *
     * Searches both workspaces and returns unique snippets.
     * Provides diagnostic information when no snippets are found.
     *
     * @return array{snippets: array<int, array{uuid: string, title: string, type: string, template?: string, path: string}>, diagnostic?: array{searched_path: string, workspaces_checked: array<string>, hint: string}}
     */
    public function listSnippets(?string $snippetType = null, string $locale = 'de'): array
    {
        $pathPrefix = self::SNIPPETS_PATH;
        if ($snippetType !== null) {
            $pathPrefix .= '/' . $snippetType;
        }

        // Search in both workspaces to find all snippets
        $results = $this->connection->fetchAllAssociative(
            "SELECT DISTINCT path, identifier, props FROM phpcr_nodes
             WHERE path LIKE ? AND workspace_name IN (?, ?)
             ORDER BY path",
            [$pathPrefix . '%', self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE]
        );

        if (empty($results)) {
            return [
                'snippets' => [],
                'diagnostic' => [
                    'searched_path' => $pathPrefix,
                    'workspaces_checked' => [self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE],
                    'hint' => 'No snippets found at this path. Create snippets in Sulu admin under "Snippets" section.',
                ],
            ];
        }

        $snippets = [];
        $seenUuids = [];

        foreach ($results as $row) {
            // Skip duplicates from multiple workspaces
            if (isset($seenUuids[$row['identifier']])) {
                continue;
            }
            $seenUuids[$row['identifier']] = true;

            $title = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-title");
            $template = $this->extractPropertyFromXml($row['props'], 'template');

            // Skip folder nodes (they don't have titles)
            if ($title === null) {
                continue;
            }

            $type = $this->extractTypeFromPath($row['path']);

            $snippets[] = [
                'uuid' => $row['identifier'],
                'title' => $title,
                'type' => $type,
                'template' => $template ?? 'default',
                'path' => $row['path'],
            ];
        }

        if (empty($snippets)) {
            return [
                'snippets' => [],
                'diagnostic' => [
                    'searched_path' => $pathPrefix,
                    'workspaces_checked' => [self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE],
                    'nodes_found' => count($results),
                    'hint' => 'Found PHPCR nodes but no snippets with titles. Check if snippets have content in locale: ' . $locale,
                ],
            ];
        }

        return ['snippets' => $snippets];
    }

    /**
     * Get a single snippet by UUID.
     *
     * @return array{uuid: string, title: string, type: string, template: string, path: string, content?: array<string, mixed>}|null
     */
    public function getSnippet(string $uuid, string $locale = 'de'): ?array
    {
        $result = $this->connection->fetchAssociative(
            "SELECT path, identifier, props FROM phpcr_nodes
             WHERE identifier = ? AND workspace_name = ?",
            [$uuid, self::WORKSPACE_DEFAULT]
        );

        if (!$result) {
            // Try live workspace
            $result = $this->connection->fetchAssociative(
                "SELECT path, identifier, props FROM phpcr_nodes
                 WHERE identifier = ? AND workspace_name = ?",
                [$uuid, self::WORKSPACE_LIVE]
            );
        }

        if (!$result) {
            return null;
        }

        $title = $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-title");
        $template = $this->extractPropertyFromXml($result['props'], 'template');

        $type = $this->extractTypeFromPath($result['path']);

        return [
            'uuid' => $result['identifier'],
            'title' => $title ?? '',
            'type' => $type,
            'template' => $template ?? 'default',
            'path' => $result['path'],
        ];
    }

    /**
     * List available snippet types (folder names under /cmf/snippets).
     *
     * @return array<string>
     */
    public function listSnippetTypes(): array
    {
        $results = $this->connection->fetchAllAssociative(
            "SELECT DISTINCT path FROM phpcr_nodes
             WHERE path LIKE ? AND workspace_name = ?
             AND path NOT LIKE ?
             ORDER BY path",
            [self::SNIPPETS_PATH . '/%', self::WORKSPACE_DEFAULT, self::SNIPPETS_PATH . '/%/%']
        );

        return array_map(
            fn(array $row): string => $this->extractTypeFromPath($row['path']),
            $results
        );
    }

    /**
     * Extract snippet type from PHPCR path.
     *
     * Path structure: {SNIPPETS_PATH}/{type}/{name}
     */
    private function extractTypeFromPath(string $path): string
    {
        $relativePath = substr($path, strlen(self::SNIPPETS_PATH) + 1);
        $firstSlash = strpos($relativePath, '/');

        return $firstSlash !== false
            ? substr($relativePath, 0, $firstSlash)
            : $relativePath;
    }

    /**
     * Extract a property value from PHPCR XML.
     */
    private function extractPropertyFromXml(string $xmlString, string $propertyName): ?string
    {
        try {
            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $xmlString);

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

    /**
     * Load XML securely with XXE protection.
     */
    private function loadXmlSecurely(DOMDocument $xml, string $xmlString): bool
    {
        $previousValue = libxml_use_internal_errors(true);
        $result = $xml->loadXML($xmlString, LIBXML_NONET | LIBXML_NOENT);
        libxml_use_internal_errors($previousValue);
        return $result;
    }
}
