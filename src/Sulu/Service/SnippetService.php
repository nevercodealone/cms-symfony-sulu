<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use Doctrine\DBAL\Connection;
use DOMDocument;
use DOMElement;
use DOMXPath;

/**
 * Service for Sulu snippet operations via direct database access.
 *
 * Provides snippet listing, search, creation and update functionality
 * independent of PageService. Uses PHPCR workspace queries / node writes
 * to find and manage snippets across draft and live workspaces.
 */
class SnippetService
{
    private const WORKSPACE_DEFAULT = 'default';
    private const WORKSPACE_LIVE = 'default_live';
    private const SNIPPETS_PATH = '/cmf/snippets';

    /**
     * Light allow-list of known snippet templates and their properties.
     *
     * Property types: 'string', 'html' (rich text), 'boolean' (checkbox),
     * 'contact' (single contact id, stored as Long), 'page' (single page UUID,
     * stored as String), 'pages' (multiple page UUIDs, stored as References).
     * Blocks map block name => item schema (default type + sub-properties).
     *
     * Templates not listed here are still writable (free-form) but responses
     * carry a warning that no schema was checked.
     */
    private const SNIPPET_SCHEMAS = [
        'workshop_offer' => [
            'properties' => [
                'title' => 'string',
                'eyebrow' => 'string',
                'headline' => 'string',
                'text' => 'html',
                'contact' => 'contact',
                'targetPage' => 'page',
                'buttonText' => 'string',
            ],
            'blocks' => [
                'steps' => [
                    'type' => 'step',
                    'properties' => ['title' => 'string', 'text' => 'string', 'optional' => 'boolean'],
                ],
            ],
        ],
        'workshop_facts' => [
            'properties' => [
                'title' => 'string',
                'headline' => 'string',
                'variants' => 'pages',
            ],
            'blocks' => [
                'facts' => [
                    'type' => 'fact',
                    'properties' => ['icon' => 'string', 'text' => 'string'],
                ],
            ],
        ],
    ];

    private const DATE_FORMAT = 'Y-m-d\TH:i:s.vP';

    public function __construct(
        private Connection $connection,
        private string $projectDir,
    ) {
    }

    /**
     * List available snippets from PHPCR.
     *
     * Searches both workspaces to find all snippets and returns unique snippets.
     * Provides diagnostic information when no snippets are found.
     *
     * @return array{snippets: array<int, array{uuid: string, title: string, type: string, template?: string, path: string, content?: array<string, mixed>}>, diagnostic?: array{searched_path: string, workspaces_checked: array<string>, hint: string}}
     */
    public function listSnippets(?string $snippetType = null, string $locale = 'de'): array
    {
        $pathPrefix = self::SNIPPETS_PATH;
        if ($snippetType !== null) {
            $pathPrefix .= '/' . $snippetType;
        }

        // Search in both workspaces to find all snippets
        $results = $this->connection->fetchAllAssociative(
            'SELECT DISTINCT path, identifier, props FROM phpcr_nodes
             WHERE path LIKE ? AND workspace_name IN (?, ?)
             ORDER BY path',
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
                'content' => $this->extractContentFromProps($row['props'], $locale),
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
            'SELECT path, identifier, props FROM phpcr_nodes
             WHERE identifier = ? AND workspace_name = ?',
            [$uuid, self::WORKSPACE_DEFAULT]
        );

        if (!$result) {
            // Try live workspace
            $result = $this->connection->fetchAssociative(
                'SELECT path, identifier, props FROM phpcr_nodes
                 WHERE identifier = ? AND workspace_name = ?',
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
            'content' => $this->extractContentFromProps($result['props'], $locale),
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
            'SELECT DISTINCT path FROM phpcr_nodes
             WHERE path LIKE ? AND workspace_name = ?
             AND path NOT LIKE ?
             ORDER BY path',
            [self::SNIPPETS_PATH . '/%', self::WORKSPACE_DEFAULT, self::SNIPPETS_PATH . '/%/%']
        );

        return array_map(
            fn(array $row): string => $this->extractTypeFromPath($row['path']),
            $results
        );
    }

    /**
     * Create a new snippet via direct PHPCR node writes.
     *
     * @param array<string, mixed> $data property values: scalars keyed by name
     *        ('eyebrow', 'text', 'contact' => id, 'targetPage' => uuid, 'variants' => [uuid, ...])
     *        and blocks as arrays of items ('steps' => [['type' => 'step', ...], ...])
     *
     * @return array{success: bool, message: string, path?: string, uuid?: string, template?: string, title?: string, published?: bool, warning?: string}
     */
    public function createSnippet(string $template, string $title, array $data, string $locale = 'de', bool $publish = true): array
    {
        try {
            if (empty($title)) {
                return ['success' => false, 'message' => 'title is required'];
            }

            $available = $this->getAvailableSnippetTemplates();
            if (!in_array($template, $available, true)) {
                return [
                    'success' => false,
                    'message' => "Unknown template '{$template}'. Available templates: " . implode(', ', $available),
                ];
            }

            $data['title'] = $title;

            $warning = null;
            $schema = self::SNIPPET_SCHEMAS[$template] ?? null;
            if ($schema === null) {
                $warning = "No schema allow-list for template '{$template}' - property names were not validated.";
            } else {
                $error = $this->validateSnippetData($schema, $data);
                if ($error !== null) {
                    return ['success' => false, 'message' => $error];
                }
            }

            $uuid = $this->generateUuid();
            $slug = $this->buildUniqueSlug($template, $title);
            $path = self::SNIPPETS_PATH . '/' . $template . '/' . $slug;
            $now = (new \DateTime())->format(self::DATE_FORMAT);

            $props = $this->buildSnippetPropsXml($template, $data, $locale, [
                'uuid' => $uuid,
                'state' => $publish ? 2 : 1,
                'created' => $now,
                'changed' => $now,
                'published' => $publish ? $now : null,
            ], $schema);

            $this->ensureSnippetFolder($template);

            $workspaces = [self::WORKSPACE_DEFAULT];
            if ($publish) {
                $workspaces[] = self::WORKSPACE_LIVE;
            }

            foreach ($workspaces as $workspace) {
                $this->insertSnippetNode($path, $template, $slug, $uuid, $props, $workspace);
            }

            $result = [
                'success' => true,
                'message' => 'Snippet created successfully',
                'path' => $path,
                'uuid' => $uuid,
                'template' => $template,
                'title' => $title,
                'published' => $publish,
            ];

            if ($warning !== null) {
                $result['warning'] = $warning;
            }

            return $result;
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Update an existing snippet (merge scalars, replace blocks wholesale).
     *
     * @param array<string, mixed> $data property values to change; see createSnippet()
     *
     * @return array{success: bool, message: string, path?: string, uuid?: string, updated?: array<int, string>, published?: bool, warning?: string}
     */
    public function updateSnippet(string $uuidOrPath, array $data, string $locale = 'de', bool $publish = true): array
    {
        try {
            if (empty($data)) {
                return ['success' => false, 'message' => 'data is required (at least one property to update)'];
            }

            $row = $this->fetchSnippetRow($uuidOrPath);
            if ($row === null) {
                return ['success' => false, 'message' => "Snippet not found: {$uuidOrPath}"];
            }

            $template = $this->extractPropertyFromXml($row['props'], 'template');
            if ($template === null) {
                return ['success' => false, 'message' => 'Target node is not a snippet (missing template property)'];
            }

            $warning = null;
            $schema = self::SNIPPET_SCHEMAS[$template] ?? null;
            if ($schema === null) {
                $warning = "No schema allow-list for template '{$template}' - property names were not validated.";
            } else {
                $error = $this->validateSnippetData($schema, $data);
                if ($error !== null) {
                    return ['success' => false, 'message' => $error];
                }
            }
            unset($data['title'], $data['template']);

            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $row['props']);

            $updated = $this->mergeSnippetData($xml, $data, $locale, $schema);

            $now = (new \DateTime())->format(self::DATE_FORMAT);
            $this->upsertScalarProperty($xml, "i18n:{$locale}-changed", 'Date', $now);

            if ($publish) {
                $this->upsertScalarProperty($xml, "i18n:{$locale}-state", 'Long', '2');
                $this->upsertScalarProperty($xml, "i18n:{$locale}-published", 'Date', $now);
            }

            $props = $xml->saveXML() ?? $row['props'];

            $this->connection->executeStatement(
                'UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?',
                [$props, $row['path'], self::WORKSPACE_DEFAULT]
            );

            if ($publish) {
                $liveExists = $this->connection->fetchOne(
                    'SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = ?',
                    [$row['path'], self::WORKSPACE_LIVE]
                );

                if ($liveExists) {
                    $this->connection->executeStatement(
                        'UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?',
                        [$props, $row['path'], self::WORKSPACE_LIVE]
                    );
                } else {
                    $slug = basename($row['path']);
                    $this->insertSnippetNode($row['path'], (string) $template, $slug, $row['identifier'], $props, self::WORKSPACE_LIVE);
                }
            }

            $result = [
                'success' => true,
                'message' => 'Snippet updated successfully',
                'path' => $row['path'],
                'uuid' => $row['identifier'],
                'updated' => $updated,
                'published' => $publish,
            ];

            if ($warning !== null) {
                $result['warning'] = $warning;
            }

            return $result;
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Assign a snippet as the default snippet of a webspace snippet area.
     *
     * Writes the settings:snippets-{area} reference on the webspace node in
     * both workspaces (same storage the Sulu admin snippet-area settings use).
     *
     * @return array{success: bool, message: string, area?: string, uuid?: string, template?: string}
     */
    public function assignSnippetArea(string $area, string $uuid, string $webspaceKey = 'example'): array
    {
        try {
            $row = $this->fetchSnippetRow($uuid);
            if ($row === null) {
                return ['success' => false, 'message' => "Snippet not found: {$uuid}"];
            }

            $template = $this->extractPropertyFromXml($row['props'], 'template') ?? '';
            if ($template !== $area) {
                return [
                    'success' => false,
                    'message' => "Snippet template '{$template}' does not match area '{$area}'. Only '{$area}' snippets can be assigned to this area.",
                ];
            }

            $webspacePath = '/cmf/' . $webspaceKey;

            foreach ([self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE] as $workspace) {
                $node = $this->connection->fetchAssociative(
                    'SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = ?',
                    [$webspacePath, $workspace]
                );

                if (!$node) {
                    continue;
                }

                $xml = new DOMDocument();
                $this->loadXmlSecurely($xml, $node['props']);
                $this->upsertScalarProperty($xml, "settings:snippets-{$area}", 'Reference', $row['identifier']);

                $this->connection->executeStatement(
                    'UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?',
                    [$xml->saveXML() ?? $node['props'], $webspacePath, $workspace]
                );
            }

            return [
                'success' => true,
                'message' => "Snippet assigned to area '{$area}'",
                'area' => $area,
                'uuid' => $row['identifier'],
                'template' => $template,
            ];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
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

    /**
     * Validate data keys against a schema allow-list.
     *
     * @param array<string, mixed> $schema
     * @param array<string, mixed> $data
     */
    private function validateSnippetData(array $schema, array $data): ?string
    {
        $allowedProperties = array_keys($schema['properties']);
        $allowedBlocks = array_keys($schema['blocks']);

        foreach (array_keys($data) as $key) {
            if (in_array($key, $allowedProperties, true) || in_array($key, $allowedBlocks, true)) {
                continue;
            }

            return "Unknown property '{$key}'. Allowed properties: " . implode(', ', $allowedProperties)
                . '. Allowed blocks: ' . implode(', ', $allowedBlocks) . '.';
        }

        foreach ($schema['blocks'] as $blockName => $blockSchema) {
            if (!isset($data[$blockName]) || !is_array($data[$blockName])) {
                continue;
            }

            foreach ($data[$blockName] as $index => $item) {
                if (!is_array($item)) {
                    return "Block '{$blockName}' item {$index} must be an object.";
                }

                $type = $item['type'] ?? $blockSchema['type'];
                if ($type !== $blockSchema['type']) {
                    return "Block '{$blockName}' only supports type '{$blockSchema['type']}', got '{$type}'.";
                }

                foreach (array_keys($item) as $key) {
                    if ($key === 'type') {
                        continue;
                    }
                    if (!array_key_exists($key, $blockSchema['properties'])) {
                        return "Unknown property '{$key}' in block '{$blockName}' item {$index}. Allowed: "
                            . implode(', ', array_keys($blockSchema['properties'])) . '.';
                    }
                }
            }
        }

        return null;
    }

    /**
     * Build the complete props XML for a new snippet node.
     *
     * @param array<string, mixed> $data
     * @param array{uuid: string, state: int, created: string, changed: string, published?: string|null} $meta
     * @param array<string, mixed>|null $schema
     */
    private function buildSnippetPropsXml(string $template, array $data, string $locale, array $meta, ?array $schema): string
    {
        $xml = new DOMDocument();
        $xml->loadXML(
            '<?xml version="1.0" encoding="UTF-8"?>'
            . '<sv:node xmlns:mix="http://www.jcp.org/jcr/mix/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0"'
            . ' xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:jcr="http://www.jcp.org/jcr/1.0"'
            . ' xmlns:sv="http://www.jcp.org/jcr/sv/1.0" xmlns:rep="internal"/>'
        );

        $this->appendProperty($xml, 'jcr:primaryType', 'Name', ['nt:unstructured']);
        $this->appendProperty($xml, 'jcr:mixinTypes', 'Name', ['sulu:snippet'], true);
        $this->appendProperty($xml, 'jcr:uuid', 'String', [$meta['uuid']]);

        $this->writeSnippetData($xml, $data, $locale, $schema);

        $this->appendProperty($xml, 'template', 'String', [$template]);
        $this->appendProperty($xml, "i18n:{$locale}-state", 'Long', [(string) $meta['state']]);
        $this->appendProperty($xml, "i18n:{$locale}-created", 'Date', [$meta['created']]);
        $this->appendProperty($xml, "i18n:{$locale}-changed", 'Date', [$meta['changed']]);
        if ($meta['published'] !== null) {
            $this->appendProperty($xml, "i18n:{$locale}-published", 'Date', [$meta['published']]);
        }

        return $xml->saveXML() ?? '';
    }

    /**
     * Write all data properties (scalars + blocks) into the props document.
     *
     * @param array<string, mixed> $data
     * @param array<string, mixed>|null $schema
     */
    private function writeSnippetData(DOMDocument $xml, array $data, string $locale, ?array $schema): void
    {
        $propertyTypes = $schema['properties'] ?? [];
        $blockSchemas = $schema['blocks'] ?? [];

        foreach ($data as $key => $value) {
            if ($schema !== null && isset($blockSchemas[$key])) {
                $this->writeBlockProperties($xml, $locale, $key, is_array($value) ? $value : [], $blockSchemas[$key]);
                continue;
            }

            $type = $propertyTypes[$key] ?? 'string';
            $this->writeScalarProperty($xml, "i18n:{$locale}-{$key}", $type, $value);
        }

        // Blocks present in the schema but absent in data get an empty length,
        // mirroring how Sulu stores an untouched empty block.
        if ($schema !== null) {
            foreach ($blockSchemas as $blockName => $blockSchema) {
                if (!array_key_exists($blockName, $data)) {
                    $this->appendProperty($xml, "i18n:{$locale}-{$blockName}-length", 'Long', ['0']);
                }
            }
        }
    }

    /**
     * @param array<int, mixed> $items
     * @param array<string, mixed> $blockSchema
     */
    private function writeBlockProperties(DOMDocument $xml, string $locale, string $blockName, array $items, array $blockSchema): void
    {
        $this->appendProperty($xml, "i18n:{$locale}-{$blockName}-length", 'Long', [(string) count($items)]);

        foreach ($items as $index => $item) {
            if (!is_array($item)) {
                continue;
            }

            $type = $item['type'] ?? $blockSchema['type'];
            $this->appendProperty($xml, "i18n:{$locale}-{$blockName}-type#{$index}", 'String', [$type]);
            $this->appendProperty($xml, "i18n:{$locale}-{$blockName}-settings#{$index}", 'String', ['[]']);

            foreach ($blockSchema['properties'] as $subName => $subType) {
                if (!array_key_exists($subName, $item)) {
                    continue;
                }

                $this->writeScalarProperty($xml, "i18n:{$locale}-{$blockName}-{$subName}#{$index}", $subType, $item[$subName]);
            }
        }
    }

    /**
     * Write a single scalar property with the correct sv:type.
     */
    private function writeScalarProperty(DOMDocument $xml, string $name, string $type, mixed $value): void
    {
        switch ($type) {
            case 'contact':
                $this->appendProperty($xml, $name, 'Long', [(string) (int) $value]);
                break;
            case 'boolean':
                $this->appendProperty($xml, $name, 'Boolean', [!empty($value) ? '1' : '0']);
                break;
            case 'pages':
                $uuids = array_map(
                    static fn($uuid): string => (string) $uuid,
                    is_array($value) ? array_values($value) : [$value]
                );
                $this->appendProperty($xml, $name, 'Reference', $uuids, true);
                break;
            case 'page':
            case 'string':
            case 'html':
            default:
                $this->appendProperty($xml, $name, 'String', [(string) $value]);
                break;
        }
    }

    /**
     * Append a property element with one or more values.
     *
     * @param array<int, string> $values raw (unescaped) values
     */
    private function appendProperty(DOMDocument $xml, string $name, string $svType, array $values, bool $multiValued = false): void
    {
        $root = $xml->documentElement;
        if ($root === null) {
            return;
        }

        $property = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:property');
        $property->setAttribute('sv:name', $name);
        $property->setAttribute('sv:type', $svType);
        $property->setAttribute('sv:multi-valued', $multiValued ? '1' : '0');

        foreach ($values as $value) {
            $valueElement = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:value', $value);
            $valueElement->setAttribute('length', (string) strlen($value));
            $property->appendChild($valueElement);
        }

        $root->appendChild($property);
    }

    /**
     * Replace or add a scalar property in an existing props document.
     */
    private function upsertScalarProperty(DOMDocument $xml, string $name, string $svType, string $value): void
    {
        $this->removePropertyByName($xml, $name);
        $this->appendProperty($xml, $name, $svType, [$value]);
    }

    /**
     * Remove every property node matching the given name.
     */
    private function removePropertyByName(DOMDocument $xml, string $name): void
    {
        $xpath = new DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

        $nodes = $xpath->query('//sv:property[@sv:name="' . $name . '"]');
        if ($nodes === false) {
            return;
        }

        foreach (iterator_to_array($nodes) as $node) {
            $node->parentNode?->removeChild($node);
        }
    }

    /**
     * Remove every property of a locale block ({block}-length, -type#, ...).
     *
     * @return array<int, string> removed property names
     */
    private function removeBlockProperties(DOMDocument $xml, string $locale, string $blockName): array
    {
        $xpath = new DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

        $nodes = $xpath->query('//sv:property[starts-with(@sv:name, "i18n:' . $locale . '-' . $blockName . '-")]');
        if ($nodes === false) {
            return [];
        }

        $removed = [];
        foreach (iterator_to_array($nodes) as $node) {
            $removed[] = (string) ($node->getAttribute('sv:name') ?: '');
            $node->parentNode?->removeChild($node);
        }

        return $removed;
    }

    /**
     * Merge update data into an existing props document.
     *
     * @param array<string, mixed> $data
     * @param array<string, mixed>|null $schema
     *
     * @return array<int, string> names of the properties that were written
     */
    private function mergeSnippetData(DOMDocument $xml, array $data, string $locale, ?array $schema): array
    {
        $updated = [];
        $propertyTypes = $schema['properties'] ?? [];
        $blockSchemas = $schema['blocks'] ?? [];

        foreach ($data as $key => $value) {
            if ($schema !== null && isset($blockSchemas[$key])) {
                $this->removeBlockProperties($xml, $locale, $key);
                $this->writeBlockProperties($xml, $locale, $key, is_array($value) ? $value : [], $blockSchemas[$key]);
                $updated[] = $key . ' (block, ' . count((array) $value) . ' items)';
                continue;
            }

            $type = $propertyTypes[$key] ?? 'string';
            $name = "i18n:{$locale}-{$key}";
            $this->removePropertyByName($xml, $name);
            $this->writeScalarProperty($xml, $name, $type, $value);
            $updated[] = $key;
        }

        return $updated;
    }

    /**
     * Parse localized content (scalars + blocks) out of a props document.
     *
     * @return array<string, mixed>
     */
    private function extractContentFromProps(string $xmlString, string $locale): array
    {
        $content = [];

        try {
            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $xmlString);

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            $properties = $xpath->query('//sv:property');
            if ($properties === false) {
                return $content;
            }

            $blockItems = [];
            $blockLengths = [];

            $prefix = 'i18n:' . $locale . '-';
            $metaSuffixes = ['-state', '-published', '-created', '-changed', '-creator'];

            /** @var DOMElement $property */
            foreach ($properties as $property) {
                $name = $property->getAttribute('sv:name');

                if (!str_starts_with($name, $prefix)) {
                    continue;
                }

                $shortName = substr($name, strlen($prefix));

                if (in_array('-' . $shortName, $metaSuffixes, true) || str_ends_with($shortName, '-state')) {
                    continue;
                }

                $values = [];
                foreach ($property->childNodes as $child) {
                    if ($child instanceof DOMElement && $child->localName === 'value') {
                        $values[] = $child->nodeValue ?? '';
                    }
                }

                $hashPosition = strpos($shortName, '#');
                if ($hashPosition !== false) {
                    $blockPart = substr($shortName, 0, $hashPosition);
                    $index = (int) substr($shortName, $hashPosition + 1);
                    $blockName = substr($blockPart, 0, (int) strrpos($blockPart, '-'));
                    $kind = substr($blockPart, (int) strrpos($blockPart, '-') + 1);

                    if ($kind === 'type') {
                        $blockItems[$blockName][$index]['type'] = $values[0] ?? '';
                    } elseif ($kind !== 'settings') {
                        $blockItems[$blockName][$index][$kind] = $values[0] ?? '';
                    }
                    continue;
                }

                if (str_ends_with($shortName, '-length') && ($property->getAttribute('sv:type') === 'Long')) {
                    $blockName = substr($shortName, 0, -strlen('-length'));
                    $blockLengths[$blockName] = (int) ($values[0] ?? 0);
                    continue;
                }

                $svType = $property->getAttribute('sv:type');
                if ($property->getAttribute('sv:multi-valued') === '1') {
                    $content[$shortName] = $values;
                } elseif ($svType === 'Boolean') {
                    $content[$shortName] = ($values[0] ?? '0') === '1';
                } else {
                    $content[$shortName] = $values[0] ?? '';
                }
            }

            foreach ($blockItems as $blockName => $items) {
                ksort($items);
                $content[$blockName] = array_values($items);
            }
        } catch (\Exception) {
            // Ignore parsing errors - content is best-effort
        }

        return $content;
    }

    /**
     * @return array{path: string, identifier: string, props: string}|null
     */
    private function fetchSnippetRow(string $uuidOrPath): ?array
    {
        $isPath = str_starts_with($uuidOrPath, '/');

        $result = $this->connection->fetchAssociative(
            'SELECT path, identifier, props FROM phpcr_nodes
             WHERE ' . ($isPath ? 'path' : 'identifier') . ' = ? AND workspace_name = ?',
            [$uuidOrPath, self::WORKSPACE_DEFAULT]
        );

        return $result ?: null;
    }

    private function insertSnippetNode(string $path, string $template, string $slug, string $uuid, string $props, string $workspace): void
    {
        $parentPath = self::SNIPPETS_PATH . '/' . $template;

        $maxOrder = $this->connection->fetchOne(
            'SELECT MAX(sort_order) FROM phpcr_nodes WHERE parent = ? AND workspace_name = ?',
            [$parentPath, $workspace]
        );
        $sortOrder = ((int) ($maxOrder ?? 0)) + 1;

        $this->connection->executeStatement(
            'INSERT INTO phpcr_nodes (path, parent, local_name, namespace, workspace_name, identifier, type, props, depth, sort_order)
             VALUES (?, ?, ?, \'\', ?, ?, \'nt:unstructured\', ?, ?, ?)',
            [$path, $parentPath, $slug, $workspace, $uuid, $props, substr_count($path, '/'), $sortOrder]
        );
    }

    /**
     * Ensure the /cmf/snippets/{template} folder exists in both workspaces.
     */
    private function ensureSnippetFolder(string $template): void
    {
        $folderPath = self::SNIPPETS_PATH . '/' . $template;

        foreach ([self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE] as $workspace) {
            $exists = $this->connection->fetchOne(
                'SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = ?',
                [$folderPath, $workspace]
            );

            if ($exists) {
                continue;
            }

            $uuid = $this->generateUuid();
            $xml = new DOMDocument();
            $xml->loadXML(
                '<?xml version="1.0" encoding="UTF-8"?>'
                . '<sv:node xmlns:mix="http://www.jcp.org/jcr/mix/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0"'
                . ' xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:jcr="http://www.jcp.org/jcr/1.0"'
                . ' xmlns:sv="http://www.jcp.org/jcr/sv/1.0" xmlns:rep="internal"/>'
            );
            $this->appendProperty($xml, 'jcr:primaryType', 'Name', ['nt:unstructured']);
            $this->appendProperty($xml, 'jcr:mixinTypes', 'Name', ['mix:referenceable'], true);
            $this->appendProperty($xml, 'jcr:uuid', 'String', [$uuid]);

            $maxOrder = $this->connection->fetchOne(
                'SELECT MAX(sort_order) FROM phpcr_nodes WHERE parent = ? AND workspace_name = ?',
                [self::SNIPPETS_PATH, $workspace]
            );

            $this->connection->executeStatement(
                'INSERT INTO phpcr_nodes (path, parent, local_name, namespace, workspace_name, identifier, type, props, depth, sort_order)
                 VALUES (?, ?, ?, \'\', ?, ?, \'nt:unstructured\', ?, ?, ?)',
                [$folderPath, self::SNIPPETS_PATH, $template, $workspace, $uuid, $xml->saveXML(), substr_count($folderPath, '/'), ((int) ($maxOrder ?? 0)) + 1]
            );
        }
    }

    /**
     * @return array<int, string>
     */
    private function getAvailableSnippetTemplates(): array
    {
        $templates = [];
        $directory = rtrim($this->projectDir, '/') . '/config/templates/snippets';

        if (!is_dir($directory)) {
            return $templates;
        }

        foreach (glob($directory . '/*.xml') ?: [] as $file) {
            $xml = simplexml_load_file($file);
            $key = $xml !== false && isset($xml->key) ? (string) $xml->key : basename($file, '.xml');
            $templates[] = $key;
        }

        sort($templates);

        return $templates;
    }

    private function buildUniqueSlug(string $template, string $title): string
    {
        $base = $this->slugify($title);
        if ($base === '') {
            $base = 'snippet';
        }

        $slug = $base;
        $counter = 1;

        while ($this->connection->fetchOne(
            'SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = ?',
            [self::SNIPPETS_PATH . '/' . $template . '/' . $slug, self::WORKSPACE_DEFAULT]
        )) {
            $slug = $base . '-' . ++$counter;
        }

        return $slug;
    }

    private function slugify(string $title): string
    {
        $title = strtolower($title);
        $title = strtr($title, ['ä' => 'ae', 'ö' => 'oe', 'ü' => 'ue', 'ß' => 'ss']);
        $title = preg_replace('/[^a-z0-9]+/', '-', $title) ?? '';

        return trim($title, '-');
    }

    private function generateUuid(): string
    {
        $data = random_bytes(16);
        $data[6] = chr((ord($data[6]) & 0x0f) | 0x40);
        $data[8] = chr((ord($data[8]) & 0x3f) | 0x80);

        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }
}
