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

    private const DATE_FORMAT = 'Y-m-d\TH:i:s.vP';

    private SnippetSchemaReader $schemaReader;

    public function __construct(
        private Connection $connection,
        string $projectDir,
        ?SnippetSchemaReader $schemaReader = null,
    ) {
        $this->schemaReader = $schemaReader ?? new SnippetSchemaReader($projectDir);
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
     * @return array{success: bool, message: string, path?: string, uuid?: string, template?: string, title?: string, published?: bool}
     */
    public function createSnippet(string $template, string $title, array $data, string $locale = 'de', bool $publish = true): array
    {
        try {
            if (empty($title)) {
                return ['success' => false, 'message' => 'title is required'];
            }

            $schema = $this->schemaReader->getSchema($template);
            if ($schema === null) {
                return [
                    'success' => false,
                    'message' => "Unknown template '{$template}'. Available templates: " . implode(', ', $this->schemaReader->listTypes()),
                ];
            }

            $data['title'] = $title;

            $error = $this->validateSnippetData($template, $schema, $data, true);
            if ($error !== null) {
                return ['success' => false, 'message' => $error];
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

            return [
                'success' => true,
                'message' => 'Snippet created successfully',
                'path' => $path,
                'uuid' => $uuid,
                'template' => $template,
                'title' => $title,
                'published' => $publish,
            ];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Update an existing snippet (merge scalars, replace blocks wholesale).
     *
     * @param array<string, mixed> $data property values to change; see createSnippet()
     *
     * @return array{success: bool, message: string, path?: string, uuid?: string, updated?: array<int, string>, published?: bool, content?: array<string, mixed>}
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

            $schema = $this->schemaReader->getSchema($template);
            if ($schema === null) {
                return ['success' => false, 'message' => "No template file for snippet type '{$template}'"];
            }

            $error = $this->validateSnippetData($template, $schema, $data, false);
            if ($error !== null) {
                return ['success' => false, 'message' => $error];
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

            $props = $xml->saveXML() ?: $row['props'];

            $this->connection->executeStatement(
                'UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?',
                [$props, $row['path'], self::WORKSPACE_DEFAULT]
            );

            if ($publish) {
                $this->writeLive($row['path'], $template, $row['identifier'], $props);
            }

            return [
                'success' => true,
                'message' => 'Snippet updated successfully',
                'path' => $row['path'],
                'uuid' => $row['identifier'],
                'updated' => $updated,
                'published' => $publish,
                'content' => $this->extractContentFromProps($props, $locale),
            ];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Publish the draft of a snippet: copy the default workspace node to live.
     *
     * @return array{success: bool, message: string, path?: string, uuid?: string, published?: bool}
     */
    public function publishSnippet(string $uuidOrPath, string $locale = 'de'): array
    {
        try {
            $row = $this->fetchSnippetRow($uuidOrPath);
            if ($row === null) {
                return ['success' => false, 'message' => "Snippet not found: {$uuidOrPath}"];
            }

            $template = $this->extractPropertyFromXml($row['props'], 'template');
            if ($template === null) {
                return ['success' => false, 'message' => 'Target node is not a snippet (missing template property)'];
            }

            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $row['props']);

            $now = (new \DateTime())->format(self::DATE_FORMAT);
            $this->upsertScalarProperty($xml, "i18n:{$locale}-state", 'Long', '2');
            $this->upsertScalarProperty($xml, "i18n:{$locale}-published", 'Date', $now);

            $props = $xml->saveXML() ?: $row['props'];

            $this->connection->executeStatement(
                'UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?',
                [$props, $row['path'], self::WORKSPACE_DEFAULT]
            );
            $this->writeLive($row['path'], $template, $row['identifier'], $props);

            return [
                'success' => true,
                'message' => 'Snippet published',
                'path' => $row['path'],
                'uuid' => $row['identifier'],
                'published' => true,
            ];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Schema of a snippet type, read from its template XML.
     *
     * @return array<string, mixed>
     */
    public function getSnippetSchema(string $snippetType): array
    {
        $schema = $this->schemaReader->getSchema($snippetType);
        if ($schema === null) {
            return [
                'success' => false,
                'message' => "Unknown snippet type '{$snippetType}'",
                'availableTypes' => $this->schemaReader->listTypes(),
            ];
        }

        return ['success' => true] + $schema;
    }

    /**
     * List the webspace snippet areas with their assigned default snippet.
     *
     * @return array{success: bool, webspace: string, areas: array<int, array{key: string, snippetType: string, title: string, snippet: array{uuid: string, title: string}|null}>}
     */
    public function listSnippetAreas(string $locale = 'de', string $webspaceKey = 'example'): array
    {
        $webspaceProps = $this->connection->fetchOne(
            'SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = ?',
            ['/cmf/' . $webspaceKey, self::WORKSPACE_DEFAULT]
        );

        $areas = [];
        foreach ($this->schemaReader->listAreas() as $area) {
            $uuid = is_string($webspaceProps)
                ? $this->extractPropertyFromXml($webspaceProps, "settings:snippets-{$area['key']}")
                : null;

            $snippet = null;
            if ($uuid !== null && $uuid !== '') {
                $found = $this->getSnippet($uuid, $locale);
                $snippet = ['uuid' => $uuid, 'title' => $found['title'] ?? null];
            }

            $areas[] = [
                'key' => $area['key'],
                'snippetType' => $area['template'],
                'title' => $area['title'][$locale] ?? (string) (reset($area['title']) ?: $area['key']),
                'snippet' => $snippet,
            ];
        }

        return ['success' => true, 'webspace' => $webspaceKey, 'areas' => $areas];
    }

    /**
     * Assign (or clear with null) the default snippet of a webspace snippet area.
     *
     * Writes the settings:snippets-{area} reference on the webspace node in
     * both workspaces (same storage the Sulu admin snippet-area settings use).
     *
     * @return array{success: bool, message: string, area?: string, uuid?: string|null, template?: string}
     */
    public function setDefaultSnippet(string $area, ?string $uuid, string $webspaceKey = 'example'): array
    {
        try {
            $areas = $this->schemaReader->listAreas();
            if (!isset($areas[$area])) {
                return [
                    'success' => false,
                    'message' => "Unknown snippet area '{$area}'. Available areas: " . implode(', ', array_keys($areas)),
                ];
            }
            $areaType = $areas[$area]['template'];

            $identifier = null;
            if ($uuid !== null && $uuid !== '') {
                $row = $this->fetchSnippetRow($uuid);
                if ($row === null) {
                    return ['success' => false, 'message' => "Snippet not found: {$uuid}"];
                }

                $template = $this->extractPropertyFromXml($row['props'], 'template') ?? '';
                if ($template !== $areaType) {
                    return [
                        'success' => false,
                        'message' => "Snippet template '{$template}' does not match area '{$area}'. Only '{$areaType}' snippets can be assigned to this area.",
                    ];
                }
                $identifier = $row['identifier'];
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
                if ($identifier === null) {
                    $this->removePropertyByName($xml, "settings:snippets-{$area}");
                } else {
                    $this->upsertScalarProperty($xml, "settings:snippets-{$area}", 'Reference', $identifier);
                }

                $this->connection->executeStatement(
                    'UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?',
                    [$xml->saveXML() ?: $node['props'], $webspacePath, $workspace]
                );
            }

            return [
                'success' => true,
                'message' => $identifier === null ? "Area '{$area}' cleared" : "Snippet assigned to area '{$area}'",
                'area' => $area,
                'uuid' => $identifier,
                'template' => $areaType,
            ];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Find every page block and webspace area that references a snippet.
     *
     * @return array<int, array{kind: string, path: string, workspace: string, property: string, blockType?: string|null, position?: int, area?: string}>
     */
    public function findSnippetReferences(string $uuid, string $ownPath = ''): array
    {
        if ($uuid === '') {
            return [];
        }

        $candidates = $this->connection->fetchAllAssociative(
            'SELECT path, workspace_name, props FROM phpcr_nodes
             WHERE workspace_name IN (?, ?) AND path <> ? AND props LIKE ?
             ORDER BY workspace_name, path',
            [self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE, $ownPath, '%' . $uuid . '%']
        );

        $references = [];
        foreach ($candidates as $row) {
            $xml = new DOMDocument();
            if (!$this->loadXmlSecurely($xml, $row['props'])) {
                continue;
            }

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
            $properties = $xpath->query('//sv:property[sv:value="' . $uuid . '"]');
            if ($properties === false) {
                continue;
            }

            /** @var DOMElement $property */
            foreach ($properties as $property) {
                $name = $property->getAttribute('sv:name');
                $reference = [
                    'kind' => 'page',
                    'path' => $row['path'],
                    'workspace' => $row['workspace_name'],
                    'property' => $name,
                ];

                if (str_starts_with($name, 'settings:snippets-')) {
                    $reference['kind'] = 'area';
                    $reference['area'] = substr($name, strlen('settings:snippets-'));
                } elseif (preg_match('/^(i18n:[a-z_]+-)?([a-z0-9_]+)-[A-Za-z0-9_]+#(\d+)$/i', $name, $match)) {
                    $reference['kind'] = 'block';
                    $reference['position'] = (int) $match[3];
                    $reference['blockType'] = $this->extractPropertyFromXml(
                        $row['props'],
                        $match[1] . $match[2] . '-type#' . $match[3]
                    );
                } elseif (str_starts_with($row['path'], self::SNIPPETS_PATH . '/')) {
                    $reference['kind'] = 'snippet';
                }

                $references[] = $reference;
            }
        }

        return $references;
    }

    /**
     * Delete a snippet after a reference check (dry run by default in the tool).
     *
     * @return array<string, mixed>
     */
    public function deleteSnippet(string $uuid, string $confirm, bool $dryRun, string $locale = 'de'): array
    {
        try {
            if ($uuid === '' || $confirm !== $uuid) {
                return $this->deleteError('confirm_mismatch', 'confirm must equal uuid byte-for-byte', ['uuid' => $uuid, 'confirm' => $confirm]);
            }

            $row = $this->fetchSnippetRow($uuid);
            if ($row === null || $this->extractPropertyFromXml($row['props'], 'template') === null) {
                return $this->deleteError('not_found', "Snippet not found: {$uuid}");
            }

            $references = $this->findSnippetReferences($row['identifier'], $row['path']);
            $snippet = $this->getSnippet($row['identifier'], $locale);

            if ($references !== []) {
                return $this->deleteError(
                    'references_present',
                    'Snippet is still referenced by ' . count($references) . ' page block(s) or area(s)',
                    ['references' => $references, 'snippet' => $snippet]
                );
            }

            if ($dryRun) {
                return [
                    'success' => true,
                    'dryRun' => true,
                    'message' => 'No references found. Call again with dryRun=false to delete.',
                    'references' => [],
                    'snippet' => $snippet,
                    'nextAction' => 'call again with dryRun=false and the same confirm to delete the snippet (hard delete, no trash)',
                ];
            }

            $this->connection->transactional(function (Connection $connection) use ($row): void {
                $nodeIds = $connection->fetchFirstColumn(
                    'SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name IN (?, ?)',
                    [$row['path'], self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE]
                );

                foreach (['phpcr_nodes_references', 'phpcr_nodes_weakreferences'] as $table) {
                    $connection->executeStatement("DELETE FROM {$table} WHERE target_id = ?", [$row['identifier']]);
                    foreach ($nodeIds as $nodeId) {
                        $connection->executeStatement("DELETE FROM {$table} WHERE source_id = ?", [$nodeId]);
                    }
                }

                $connection->executeStatement(
                    'DELETE FROM phpcr_nodes WHERE path = ? AND workspace_name IN (?, ?)',
                    [$row['path'], self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE]
                );
            });

            return [
                'success' => true,
                'dryRun' => false,
                'message' => 'Snippet deleted (hard delete, not recoverable via trash)',
                'uuid' => $row['identifier'],
                'path' => $row['path'],
                'deletedSnippet' => $snippet,
            ];
        } catch (\Exception $e) {
            return $this->deleteError('internal_error', $e->getMessage());
        }
    }

    /**
     * @param array<string, mixed> $details
     *
     * @return array{success: false, errorCode: string, message: string, details: array<string, mixed>, nextAction: string}
     */
    private function deleteError(string $code, string $message, array $details = []): array
    {
        $nextActions = [
            'confirm_mismatch' => 'pass confirm exactly equal to uuid',
            'not_found' => 'call list_snippets to find the snippet uuid',
            'references_present' => 'remove the snippet from the listed page blocks (update_block/remove_block) and clear listed areas with set_default_snippet uuid=null, then retry',
            'internal_error' => 'check the server log; nothing was changed when the transaction failed',
        ];

        return [
            'success' => false,
            'errorCode' => $code,
            'message' => $message,
            'details' => $details,
            'nextAction' => $nextActions[$code] ?? '',
        ];
    }

    /**
     * Write props to the live workspace, inserting the node when it is not live yet.
     */
    private function writeLive(string $path, string $template, string $uuid, string $props): void
    {
        $liveExists = $this->connection->fetchOne(
            'SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = ?',
            [$path, self::WORKSPACE_LIVE]
        );

        if ($liveExists) {
            $this->connection->executeStatement(
                'UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?',
                [$props, $path, self::WORKSPACE_LIVE]
            );

            return;
        }

        $this->ensureSnippetFolder($template);
        $this->insertSnippetNode($path, $template, basename($path), $uuid, $props, self::WORKSPACE_LIVE);
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
     * Validate data against the snippet template schema.
     *
     * Always: unknown or non-writable properties, block item types and
     * sub-properties, block occurrence limits, select options.
     * On create only: every required writable property must be present.
     *
     * @param array<string, mixed> $schema from SnippetSchemaReader::getSchema()
     * @param array<string, mixed> $data
     */
    private function validateSnippetData(string $template, array $schema, array $data, bool $isCreate): ?string
    {
        $hint = " See get_snippet_schema snippetType={$template}.";
        $properties = $schema['properties'];
        $blocks = $schema['blocks'];

        foreach (array_keys($data) as $key) {
            if (!isset($properties[$key]) && !isset($blocks[$key])) {
                return "Unknown property '{$key}'. Allowed properties: " . implode(', ', array_keys($properties))
                    . '. Allowed blocks: ' . (implode(', ', array_keys($blocks)) ?: '-') . '.' . $hint;
            }

            $definition = $properties[$key] ?? $blocks[$key];
            if (!$definition['writable']) {
                return "Property '{$key}' ({$definition['suluType']}) cannot be written via the MCP. Edit it in the Sulu admin." . $hint;
            }
        }

        if ($isCreate) {
            foreach ($properties as $name => $property) {
                if ($property['required'] && $property['writable'] && $this->isEmptyValue($data[$name] ?? null)) {
                    return "Missing required property '{$name}' ({$property['suluType']})." . $hint;
                }
            }
            foreach ($blocks as $name => $block) {
                if ($block['minOccurs'] > 0 && $block['writable'] && !isset($data[$name])) {
                    return "Missing required block '{$name}' (min {$block['minOccurs']} items)." . $hint;
                }
            }
        }

        foreach ($properties as $name => $property) {
            if (isset($data[$name]) && isset($property['options']) && !in_array((string) $data[$name], $property['options'], true)) {
                return "Invalid value '{$data[$name]}' for '{$name}'. Allowed: " . implode(', ', $property['options']) . '.';
            }
        }

        foreach ($blocks as $blockName => $block) {
            if (!array_key_exists($blockName, $data)) {
                continue;
            }

            if (!is_array($data[$blockName]) || !array_is_list($data[$blockName])) {
                return "Block '{$blockName}' must be a JSON array of items." . $hint;
            }

            $count = count($data[$blockName]);
            $max = $block['maxOccurs'];
            if ($count < $block['minOccurs'] || ($max !== null && $count > $max)) {
                return "Block '{$blockName}' needs {$block['minOccurs']}-" . ($max ?? 'n') . " items, got {$count}." . $hint;
            }

            foreach ($data[$blockName] as $index => $item) {
                if (!is_array($item)) {
                    return "Block '{$blockName}' item {$index} must be an object.";
                }

                $type = (string) ($item['type'] ?? $block['defaultType']);
                if (!isset($block['types'][$type])) {
                    return "Block '{$blockName}' does not support type '{$type}'. Allowed: " . implode(', ', array_keys($block['types'])) . '.';
                }
                $typeProperties = $block['types'][$type]['properties'];

                foreach (array_keys($item) as $key) {
                    if ($key === 'type') {
                        continue;
                    }
                    if (!isset($typeProperties[$key])) {
                        return "Unknown property '{$key}' in block '{$blockName}' item {$index}. Allowed: "
                            . implode(', ', array_keys($typeProperties)) . '.' . $hint;
                    }
                }

                foreach ($typeProperties as $subName => $subProperty) {
                    $value = $item[$subName] ?? null;
                    if ($subProperty['required'] && $this->isEmptyValue($value)) {
                        return "Missing required property '{$subName}' in block '{$blockName}' item {$index}." . $hint;
                    }
                    if ($value !== null && isset($subProperty['options']) && !in_array((string) $value, $subProperty['options'], true)) {
                        return "Invalid value '{$value}' for '{$subName}' in block '{$blockName}' item {$index}. Allowed: "
                            . implode(', ', $subProperty['options']) . '.';
                    }
                }
            }
        }

        return null;
    }

    private function isEmptyValue(mixed $value): bool
    {
        return $value === null || $value === '' || $value === [];
    }

    /**
     * Build the complete props XML for a new snippet node.
     *
     * @param array<string, mixed> $data
     * @param array{uuid: string, state: int, created: string, changed: string, published?: string|null} $meta
     * @param array<string, mixed> $schema
     */
    private function buildSnippetPropsXml(string $template, array $data, string $locale, array $meta, array $schema): string
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
     * @param array<string, mixed> $schema
     */
    private function writeSnippetData(DOMDocument $xml, array $data, string $locale, array $schema): void
    {
        foreach ($data as $key => $value) {
            if (isset($schema['blocks'][$key])) {
                $this->writeBlockProperties($xml, $locale, $key, is_array($value) ? $value : [], $schema['blocks'][$key]);
                continue;
            }

            $type = $schema['properties'][$key]['writeType'] ?? 'string';
            $this->writeScalarProperty($xml, "i18n:{$locale}-{$key}", $type, $value);
        }

        // Blocks present in the schema but absent in data get an empty length,
        // mirroring how Sulu stores an untouched empty block.
        foreach (array_keys($schema['blocks']) as $blockName) {
            if (!array_key_exists($blockName, $data)) {
                $this->appendProperty($xml, "i18n:{$locale}-{$blockName}-length", 'Long', ['0']);
            }
        }
    }

    /**
     * @param array<int, mixed> $items
     * @param array<string, mixed> $blockSchema
     */
    private function writeBlockProperties(DOMDocument $xml, string $locale, string $blockName, array $items, array $blockSchema): void
    {
        $items = array_values($items);
        $this->appendProperty($xml, "i18n:{$locale}-{$blockName}-length", 'Long', [(string) count($items)]);

        foreach ($items as $index => $item) {
            if (!is_array($item)) {
                continue;
            }

            $type = (string) ($item['type'] ?? $blockSchema['defaultType']);
            $this->appendProperty($xml, "i18n:{$locale}-{$blockName}-type#{$index}", 'String', [$type]);
            $this->appendProperty($xml, "i18n:{$locale}-{$blockName}-settings#{$index}", 'String', ['[]']);

            foreach ($blockSchema['types'][$type]['properties'] ?? [] as $subName => $subProperty) {
                if (!array_key_exists($subName, $item)) {
                    continue;
                }

                $this->writeScalarProperty($xml, "i18n:{$locale}-{$blockName}-{$subName}#{$index}", $subProperty['writeType'] ?? 'string', $item[$subName]);
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
     * @param array<string, mixed> $schema
     *
     * @return array<int, string> names of the properties that were written
     */
    private function mergeSnippetData(DOMDocument $xml, array $data, string $locale, array $schema): array
    {
        $updated = [];

        foreach ($data as $key => $value) {
            if (isset($schema['blocks'][$key])) {
                $this->removeBlockProperties($xml, $locale, $key);
                $this->writeBlockProperties($xml, $locale, $key, is_array($value) ? $value : [], $schema['blocks'][$key]);
                $updated[] = $key . ' (block, ' . count((array) $value) . ' items)';
                continue;
            }

            $type = $schema['properties'][$key]['writeType'] ?? 'string';
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
