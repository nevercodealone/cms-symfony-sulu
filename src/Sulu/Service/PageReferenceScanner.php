<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use Doctrine\DBAL\Connection;
use DOMDocument;
use DOMXPath;

/**
 * Scans the PHPCR repository for incoming references to a target page.
 *
 * ARCHITECTURE: Direct DBAL access, mirroring PageService. The MCP server runs
 * as a long-lived process where DocumentManager causes connection timeouts and
 * state corruption; this service must not use it.
 *
 * Three reference signals are detected, all keyed on the target page UUID so no
 * resource-segment resolution is needed:
 *   1. page-teaser blocks - i18n:{locale}-blocks-page#{N} SV value === UUID
 *   2. subpages-overview blocks - i18n:{locale}-blocks-items#{N} JSON with
 *      "dataSource":"{UUID}"
 *   3. sulu-link tags in rich-text/html fields - HTML-entity-encoded
 *      &lt;sulu-link provider="page" href="{UUID}"&gt;
 *
 * Sulu auto-strips invalid <sulu-link> targets at render time, so signal #3 is
 * about editorial hygiene (the spec's "incoming references" rule), not frontend
 * breakage.
 */
class PageReferenceScanner
{
    private const WORKSPACE_DEFAULT = 'default';

    public function __construct(
        private readonly Connection $connection,
    ) {
    }

    /**
     * Find every page that references the target page.
     *
     * @return list<array{
     *     sourcePath: string,
     *     sourceUuid: string|null,
     *     blockType: string,
     *     blockPosition: int|null,
     *     locale: string,
     *     field: string
     * }>
     */
    public function findIncomingReferences(string $targetUuid, string $locale = 'de'): array
    {
        if ($targetUuid === '') {
            return [];
        }

        // SQL prefilter: only pages whose props mention the UUID at all.
        // Cheap narrowing before the per-row XML parse.
        $candidates = $this->connection->fetchAllAssociative(
            "SELECT path, props FROM phpcr_nodes
             WHERE workspace_name = '" . self::WORKSPACE_DEFAULT . "'
               AND props LIKE ?
             ORDER BY path",
            ['%' . $targetUuid . '%']
        );

        $references = [];
        foreach ($candidates as $row) {
            $path = $row['path'];
            $props = $row['props'];
            $sourceUuid = $this->extractUuidFromProps($props);

            // Signal 1: page-teaser block references this UUID
            foreach ($this->findPageTeaserReferences($props, $targetUuid, $locale) as $hit) {
                $references[] = [
                    'sourcePath' => $path,
                    'sourceUuid' => $sourceUuid,
                    'blockType' => 'page-teaser',
                    'blockPosition' => $hit,
                    'locale' => $locale,
                    'field' => "i18n:{$locale}-blocks-page#{$hit}",
                ];
            }

            // Signal 2: subpages-overview dataSource references this UUID
            foreach ($this->findSubpagesOverviewReferences($props, $targetUuid, $locale) as $hit) {
                $references[] = [
                    'sourcePath' => $path,
                    'sourceUuid' => $sourceUuid,
                    'blockType' => 'subpages-overview',
                    'blockPosition' => $hit,
                    'locale' => $locale,
                    'field' => "i18n:{$locale}-blocks-items#{$hit}",
                ];
            }

            // Signal 3: <sulu-link provider="page" href="UUID"> in any rich-text/html SV value
            foreach ($this->findSuluLinkReferences($props, $targetUuid) as $hit) {
                $references[] = [
                    'sourcePath' => $path,
                    'sourceUuid' => $sourceUuid,
                    'blockType' => 'sulu-link',
                    'blockPosition' => $hit['blockPosition'],
                    'locale' => $hit['locale'],
                    'field' => $hit['propertyName'],
                ];
            }
        }

        return $references;
    }

    /**
     * Quick check whether any subpages-overview block uses the target as dataSource.
     * Used by delete_page's "locked pages" rule.
     */
    public function isUsedAsDataSource(string $targetUuid): bool
    {
        if ($targetUuid === '') {
            return false;
        }

        $candidates = $this->connection->fetchAllAssociative(
            "SELECT props FROM phpcr_nodes
             WHERE workspace_name = '" . self::WORKSPACE_DEFAULT . "'
               AND props LIKE ?
             ORDER BY path",
            ['%' . $targetUuid . '%']
        );

        foreach ($candidates as $row) {
            // dataSource check is locale-agnostic: scan every locale's items fields
            foreach ($this->scanAllLocalesForDataSource($row['props'], $targetUuid) as $hit) {
                if ($hit) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Find page-teaser blocks pointing at the target UUID.
     *
     * @return list<int> block positions
     */
    private function findPageTeaserReferences(string $props, string $targetUuid, string $locale): array
    {
        $hits = [];
        $xpath = $this->buildXpath($props);
        if ($xpath === null) {
            return $hits;
        }

        // Match i18n:{locale}-blocks-page#{N} property, check value
        $properties = $xpath->query(
            '//sv:property[starts-with(@sv:name, "i18n:' . $locale . '-blocks-page#")]'
        );
        if ($properties === false) {
            return $hits;
        }

        foreach ($properties as $property) {
            if (!$property instanceof \DOMElement) {
                continue;
            }
            $name = $property->getAttribute('sv:name');
            if (preg_match('/#(\d+)$/', $name, $m) !== 1) {
                continue;
            }
            $position = (int) $m[1];

            $values = $xpath->query('sv:value', $property);
            if ($values === false) {
                continue;
            }
            foreach ($values as $value) {
                if ($value instanceof \DOMElement && trim($value->textContent) === $targetUuid) {
                    $hits[] = $position;
                }
            }
        }

        return $hits;
    }

    /**
     * Find subpages-overview blocks whose items.dataSource === target UUID.
     *
     * @return list<int> block positions
     */
    private function findSubpagesOverviewReferences(string $props, string $targetUuid, string $locale): array
    {
        $hits = [];
        $xpath = $this->buildXpath($props);
        if ($xpath === null) {
            return $hits;
        }

        // For each i18n:{locale}-blocks-items#{N}, decode JSON and check dataSource
        $properties = $xpath->query(
            '//sv:property[starts-with(@sv:name, "i18n:' . $locale . '-blocks-items#")]'
        );
        if ($properties === false) {
            return $hits;
        }

        foreach ($properties as $property) {
            if (!$property instanceof \DOMElement) {
                continue;
            }
            $name = $property->getAttribute('sv:name');
            if (preg_match('/#(\d+)$/', $name, $m) !== 1) {
                continue;
            }
            $position = (int) $m[1];

            $values = $xpath->query('sv:value', $property);
            if ($values === false) {
                continue;
            }
            foreach ($values as $value) {
                if (!$value instanceof \DOMElement) {
                    continue;
                }
                $decoded = html_entity_decode($value->textContent, ENT_QUOTES | ENT_HTML5);
                $data = json_decode($decoded, true);
                if (is_array($data) && ($data['dataSource'] ?? null) === $targetUuid) {
                    $hits[] = $position;
                }
            }
        }

        return $hits;
    }

    /**
     * Locale-agnostic dataSource scan for isUsedAsDataSource.
     *
     * @return list<bool>
     */
    private function scanAllLocalesForDataSource(string $props, string $targetUuid): array
    {
        $hits = [];
        $xpath = $this->buildXpath($props);
        if ($xpath === null) {
            return $hits;
        }

        // Match every i18n:*-blocks-items#{N} property regardless of locale
        $properties = $xpath->query(
            '//sv:property[contains(@sv:name, "-blocks-items#") and starts-with(@sv:name, "i18n:")]'
        );
        if ($properties === false) {
            return $hits;
        }

        foreach ($properties as $property) {
            if (!$property instanceof \DOMElement) {
                continue;
            }
            $values = $xpath->query('sv:value', $property);
            if ($values === false) {
                continue;
            }
            foreach ($values as $value) {
                if (!$value instanceof \DOMElement) {
                    continue;
                }
                $decoded = html_entity_decode($value->textContent, ENT_QUOTES | ENT_HTML5);
                $data = json_decode($decoded, true);
                if (is_array($data) && ($data['dataSource'] ?? null) === $targetUuid) {
                    $hits[] = true;
                    return $hits; // short-circuit on first hit
                }
            }
        }

        return $hits;
    }

    /**
     * Find <sulu-link provider="page" href="UUID"> occurrences inside any SV value.
     * Rich-text content is HTML-entity-encoded, so decode before matching.
     *
     * @return list<array{blockPosition: int|null, locale: string, propertyName: string}>
     */
    private function findSuluLinkReferences(string $props, string $targetUuid): array
    {
        $hits = [];
        $xpath = $this->buildXpath($props);
        if ($xpath === null) {
            return $hits;
        }

        // Pattern matches provider="page" with the UUID as href, in either attribute order.
        // The HTML-entity-encoded form is decoded first.
        $pattern = '/<sulu-link\b[^>]*\bprovider="page"[^>]*\bhref="'
            . preg_quote($targetUuid, '/')
            . '"[^>]*>/i';
        $patternAlt = '/<sulu-link\b[^>]*\bhref="'
            . preg_quote($targetUuid, '/')
            . '"[^>]*\bprovider="page"[^>]*>/i';

        // Examine every String/Text SV property that could carry rich-text/html.
        // Property name tells us both locale and (for blocks) the block position.
        $properties = $xpath->query('//sv:property[@sv:type="String"] | //sv:property[@sv:type="Text"]');
        if ($properties === false) {
            return $hits;
        }

        foreach ($properties as $property) {
            if (!$property instanceof \DOMElement) {
                continue;
            }
            $name = $property->getAttribute('sv:name');
            $locale = $this->extractLocaleFromPropertyName($name);

            $values = $xpath->query('sv:value', $property);
            if ($values === false) {
                continue;
            }
            foreach ($values as $value) {
                if (!$value instanceof \DOMElement) {
                    continue;
                }
                $raw = $value->textContent;
                $decoded = html_entity_decode($raw, ENT_QUOTES | ENT_HTML5);
                if ($decoded === $raw) {
                    // Not entity-encoded; try raw match too
                }
                $matched = preg_match($pattern, $decoded) === 1
                    || preg_match($patternAlt, $decoded) === 1
                    || preg_match($pattern, $raw) === 1
                    || preg_match($patternAlt, $raw) === 1;
                if ($matched) {
                    $blockPosition = null;
                    if (preg_match('/#(\d+)/', $name, $m) === 1) {
                        $blockPosition = (int) $m[1];
                    }
                    $hits[] = [
                        'blockPosition' => $blockPosition,
                        'locale' => $locale ?? 'de',
                        'propertyName' => $name,
                    ];
                    break; // one hit per property is enough
                }
            }
        }

        return $hits;
    }

    private function buildXpath(string $props): ?DOMXPath
    {
        if ($props === '') {
            return null;
        }
        $doc = new DOMDocument();
        $previous = libxml_use_internal_errors(true);
        $loaded = $doc->loadXML($props, LIBXML_NONET | LIBXML_NOENT);
        libxml_use_internal_errors($previous);
        if ($loaded === false) {
            return null;
        }
        $xpath = new DOMXPath($doc);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

        return $xpath;
    }

    private function extractUuidFromProps(string $props): ?string
    {
        $xpath = $this->buildXpath($props);
        if ($xpath === null) {
            return null;
        }
        $nodes = $xpath->query('//sv:property[@sv:name="jcr:uuid"]/sv:value');
        if ($nodes === false || $nodes->length === 0 || !$nodes->item(0)) {
            return null;
        }

        return trim($nodes->item(0)->textContent);
    }

    private function extractLocaleFromPropertyName(string $name): ?string
    {
        if (preg_match('/^i18n:([a-z]{2})-/', $name, $m) === 1) {
            return $m[1];
        }

        return null;
    }
}
