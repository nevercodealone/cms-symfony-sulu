<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use SimpleXMLElement;

/**
 * Reads snippet template XML (config/templates/snippets/*.xml) into a schema
 * used for validation (SnippetService) and for the get_snippet_schema MCP action.
 *
 * writeType is the storage mapping used by SnippetService:
 * 'string', 'html', 'boolean', 'contact' (Long), 'page' (String uuid),
 * 'pages' (multi-valued Reference). Properties with any other Sulu type
 * (media, smart content, account selections, nested blocks) are reported
 * with writable=false and cannot be written via the MCP.
 */
class SnippetSchemaReader
{
    private const WRITE_TYPES = [
        'text_line' => 'string',
        'text_area' => 'string',
        'url' => 'string',
        'email' => 'string',
        'single_select' => 'string',
        'text_editor' => 'html',
        'checkbox' => 'boolean',
        'single_contact_selection' => 'contact',
        'single_page_selection' => 'page',
        'page_selection' => 'pages',
    ];

    /** @var array<string, array<string, mixed>>|null */
    private ?array $cache = null;

    public function __construct(
        private string $projectDir,
    ) {
    }

    /**
     * @return array<int, string> sorted snippet template keys
     */
    public function listTypes(): array
    {
        $types = array_keys($this->all());
        sort($types);

        return $types;
    }

    /**
     * @return array{
     *     key: string,
     *     title: array<string, string>,
     *     areas: array<int, array{key: string, title: array<string, string>}>,
     *     properties: array<string, array<string, mixed>>,
     *     blocks: array<string, array<string, mixed>>
     * }|null
     */
    public function getSchema(string $type): ?array
    {
        $schema = $this->all()[$type] ?? null;
        if ($schema === null) {
            return null;
        }

        unset($schema['declaredAreas']);

        return $schema;
    }

    /**
     * All snippet areas across templates (area key => template key + title).
     *
     * Mirrors Sulu's SnippetAreaCompilerPass: when no template declares
     * <areas>, every template key becomes an area of the same name.
     *
     * @return array<string, array{key: string, template: string, title: array<string, string>}>
     */
    public function listAreas(): array
    {
        $declared = [];
        $defaults = [];

        foreach ($this->all() as $key => $schema) {
            $defaults[$key] = ['key' => $key, 'template' => $key, 'title' => $schema['title']];
            foreach ($schema['declaredAreas'] as $area) {
                $declared[$area['key']] = ['key' => $area['key'], 'template' => $key, 'title' => $area['title']];
            }
        }

        $areas = $declared !== [] ? $declared : $defaults;
        ksort($areas);

        return $areas;
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    private function all(): array
    {
        if ($this->cache !== null) {
            return $this->cache;
        }

        $this->cache = [];
        $directory = rtrim($this->projectDir, '/') . '/config/templates/snippets';

        foreach (glob($directory . '/*.xml') ?: [] as $file) {
            $xml = simplexml_load_file($file);
            if ($xml === false) {
                continue;
            }

            $key = isset($xml->key) ? (string) $xml->key : basename($file, '.xml');
            $title = $this->readTitles($xml->meta ?? null);

            $declaredAreas = [];
            if (isset($xml->areas)) {
                foreach ($xml->areas->area as $area) {
                    $declaredAreas[] = [
                        'key' => (string) $area['key'],
                        'title' => $this->readTitles($area->meta ?? null),
                    ];
                }
            }

            [$properties, $blocks] = $this->readProperties($xml->properties);

            $this->cache[$key] = [
                'key' => $key,
                'title' => $title,
                'areas' => $declaredAreas !== [] ? $declaredAreas : [['key' => $key, 'title' => $title]],
                'declaredAreas' => $declaredAreas,
                'properties' => $properties,
                'blocks' => $blocks,
            ];
        }

        return $this->cache;
    }

    /**
     * @return array{0: array<string, array<string, mixed>>, 1: array<string, array<string, mixed>>}
     */
    private function readProperties(?SimpleXMLElement $container): array
    {
        $properties = [];
        $blocks = [];

        if ($container === null) {
            return [$properties, $blocks];
        }

        foreach ($container->children() as $element) {
            $name = (string) $element['name'];

            if ($element->getName() === 'section') {
                [$sectionProperties, $sectionBlocks] = $this->readProperties($element->properties);
                $properties += $sectionProperties;
                $blocks += $sectionBlocks;
                continue;
            }

            if ($element->getName() === 'block') {
                $blocks[$name] = $this->readBlock($element);
                continue;
            }

            if ($element->getName() === 'property') {
                $properties[$name] = $this->readProperty($element);
            }
        }

        return [$properties, $blocks];
    }

    /**
     * @return array<string, mixed>
     */
    private function readProperty(SimpleXMLElement $element): array
    {
        $suluType = (string) $element['type'];
        $property = [
            'suluType' => $suluType,
            'writeType' => self::WRITE_TYPES[$suluType] ?? null,
            'writable' => isset(self::WRITE_TYPES[$suluType]),
            'required' => (string) $element['mandatory'] === 'true',
        ];

        if ($suluType === 'single_select') {
            $options = [];
            $default = null;
            foreach ($element->params->param ?? [] as $param) {
                if ((string) $param['name'] === 'values') {
                    foreach ($param->param as $option) {
                        $options[] = (string) $option['name'];
                    }
                }
                if ((string) $param['name'] === 'default_value') {
                    $default = (string) $param['value'];
                }
            }
            $property['options'] = $options;
            if ($default !== null) {
                $property['default'] = $default;
            }
        }

        return $property;
    }

    /**
     * @return array<string, mixed>
     */
    private function readBlock(SimpleXMLElement $element): array
    {
        $types = [];
        $writable = true;

        foreach ($element->types->type ?? [] as $type) {
            [$typeProperties, $nestedBlocks] = $this->readProperties($type->properties);

            $entry = ['properties' => $typeProperties];
            if ($nestedBlocks !== []) {
                $entry['blocks'] = $nestedBlocks;
                $writable = false;
            }
            foreach ($typeProperties as $property) {
                $writable = $writable && $property['writable'];
            }

            $types[(string) $type['name']] = $entry;
        }

        $minOccurs = (int) (string) $element['minOccurs'];
        $maxOccurs = (string) $element['maxOccurs'];

        return [
            'suluType' => 'block',
            'writable' => $writable,
            'required' => $minOccurs > 0,
            'minOccurs' => $minOccurs,
            'maxOccurs' => $maxOccurs !== '' ? (int) $maxOccurs : null,
            'defaultType' => (string) $element['default-type'],
            'types' => $types,
        ];
    }

    /**
     * @return array<string, string>
     */
    private function readTitles(?SimpleXMLElement $meta): array
    {
        $titles = [];
        foreach ($meta->title ?? [] as $title) {
            $titles[(string) ($title['lang'] ?? '') ?: 'default'] = (string) $title;
        }

        return $titles;
    }
}
