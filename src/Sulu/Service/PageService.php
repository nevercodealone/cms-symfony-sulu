<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use Doctrine\DBAL\Connection;
use DOMDocument;
use DOMXPath;

/**
 * Service for Sulu page CRUD operations via direct database access.
 */
class PageService
{
    public function __construct(
        private Connection $connection,
    ) {
    }

    /**
     * List pages under a path prefix.
     *
     * @return array<int, array{path: string, title: string, template: string}>
     */
    public function listPages(string $locale = 'de', string $pathPrefix = '/cmf/example/contents'): array
    {
        $results = $this->connection->fetchAllAssociative(
            "SELECT path, props FROM phpcr_nodes
             WHERE path LIKE ? AND workspace_name = 'default'
             ORDER BY path",
            [$pathPrefix . '%']
        );

        $pages = [];
        foreach ($results as $row) {
            $title = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-title");
            $template = $this->extractPropertyFromXml($row['props'], 'template');

            if ($title !== null) {
                $pages[] = [
                    'path' => $row['path'],
                    'title' => $title,
                    'template' => $template ?? 'default',
                ];
            }
        }

        return $pages;
    }

    /**
     * Get page content including blocks.
     *
     * @return array{path: string, title: string, template: string, blocks: array<mixed>}|null
     */
    public function getPage(string $path, string $locale = 'de'): ?array
    {
        $result = $this->connection->fetchAssociative(
            "SELECT path, props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'",
            [$path]
        );

        if (!$result) {
            return null;
        }

        $title = $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-title") ?? '';
        $template = $this->extractPropertyFromXml($result['props'], 'template') ?? 'default';
        $blocks = $this->extractBlocks($result['props'], $locale);

        return [
            'path' => $result['path'],
            'title' => $title,
            'template' => $template,
            'blocks' => $blocks,
        ];
    }

    /**
     * Add a content block to a page using expanded PHPCR property format.
     *
     * @param array{type: string, headline?: string, description?: string, items?: array<mixed>} $block
     * @return array{success: bool, message: string, position: int}
     */
    public function addBlock(string $path, array $block, int $position, string $locale = 'de'): array
    {
        try {
            $result = $this->connection->fetchAssociative(
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not found', 'position' => -1];
            }

            $xml = new DOMDocument();
            $xml->loadXML($result['props']);

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            // Get current blocks length
            $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]/sv:value');
            $currentLength = 0;
            if ($lengthNodes !== false && $lengthNodes->length > 0 && $lengthNodes->item(0)) {
                $currentLength = (int) $lengthNodes->item(0)->nodeValue;
            }

            // Use the next available index
            $newIndex = $currentLength;
            $rootNode = $xpath->query('/sv:node')->item(0);

            if (!$rootNode) {
                return ['success' => false, 'message' => 'Invalid XML structure', 'position' => -1];
            }

            // Add block type property
            $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-type#{$newIndex}", $block['type']);
            $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-settings#{$newIndex}", '[]');

            // Add block-specific properties based on type
            if ($block['type'] === 'headline-paragraphs') {
                if (isset($block['headline'])) {
                    $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-headline#{$newIndex}", $block['headline']);
                }
                if (isset($block['items']) && is_array($block['items'])) {
                    $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-length", (string) count($block['items']), 'Long');
                    foreach ($block['items'] as $itemIndex => $item) {
                        $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-type#{$itemIndex}", $item['type'] ?? 'description');
                        $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-settings#{$itemIndex}", '[]');
                        if (isset($item['description'])) {
                            $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-description#{$itemIndex}", $item['description']);
                        }
                    }
                }
            } elseif ($block['type'] === 'hl-des') {
                if (isset($block['headline'])) {
                    $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-headline#{$newIndex}", $block['headline']);
                }
                if (isset($block['description'])) {
                    $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-description#{$newIndex}", $block['description']);
                }
            }

            // Update blocks length
            if ($lengthNodes !== false && $lengthNodes->length > 0 && $lengthNodes->item(0)) {
                $lengthNodes->item(0)->nodeValue = (string) ($currentLength + 1);
            } else {
                $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-length", (string) ($currentLength + 1));
            }

            $updatedXml = $xml->saveXML();

            // Update both workspaces
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default']
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default_live']
            );

            return ['success' => true, 'message' => 'Block added successfully', 'position' => $newIndex];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage(), 'position' => -1];
        }
    }

    /**
     * Add a PHPCR property to the XML document.
     */
    private function addPhpcrProperty(DOMDocument $xml, \DOMNode $rootNode, string $name, string $value, string $type = 'String'): void
    {
        $property = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:property');
        $property->setAttribute('sv:name', $name);
        $property->setAttribute('sv:type', $type);
        $property->setAttribute('sv:multi-valued', '0');

        $valueNode = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:value');
        $valueNode->setAttribute('length', (string) strlen($value));
        $valueNode->appendChild($xml->createTextNode($value));
        $property->appendChild($valueNode);

        $rootNode->appendChild($property);
    }

    /**
     * Remove a block from a page.
     *
     * @return array{success: bool, message: string}
     */
    public function removeBlock(string $path, int $position, string $locale = 'de'): array
    {
        try {
            $result = $this->connection->fetchAssociative(
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not found'];
            }

            $xml = new DOMDocument();
            $xml->loadXML($result['props']);

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks"]');

            if ($blocksNodes !== false && $blocksNodes->length > 0) {
                $blocksValue = $blocksNodes->item(0)?->getElementsByTagName('value')->item(0)?->nodeValue;
                if ($blocksValue) {
                    $currentBlocks = unserialize(base64_decode($blocksValue));
                    if (!is_array($currentBlocks)) {
                        return ['success' => false, 'message' => 'No blocks found'];
                    }

                    if (!isset($currentBlocks[$position])) {
                        return ['success' => false, 'message' => 'Block position not found'];
                    }

                    array_splice($currentBlocks, $position, 1);

                    $newBlocksValue = base64_encode(serialize($currentBlocks));
                    $valueNode = $blocksNodes->item(0)?->getElementsByTagName('value')->item(0);
                    if ($valueNode) {
                        $valueNode->nodeValue = $newBlocksValue;
                    }

                    // Update length
                    $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]');
                    if ($lengthNodes !== false && $lengthNodes->length > 0) {
                        $lengthValueNode = $lengthNodes->item(0)?->getElementsByTagName('value')->item(0);
                        if ($lengthValueNode) {
                            $lengthValueNode->nodeValue = (string) count($currentBlocks);
                        }
                    }
                }
            }

            $updatedXml = $xml->saveXML();

            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default']
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default_live']
            );

            return ['success' => true, 'message' => 'Block removed successfully'];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Publish page to live workspace.
     *
     * @return array{success: bool, message: string}
     */
    public function publishPage(string $path, string $locale = 'de'): array
    {
        try {
            $result = $this->connection->fetchAssociative(
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not found'];
            }

            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$result['props'], $path, 'default_live']
            );

            return ['success' => true, 'message' => 'Page published successfully'];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Extract a property value from PHPCR XML.
     */
    private function extractPropertyFromXml(string $xmlString, string $propertyName): ?string
    {
        try {
            $xml = new DOMDocument();
            $xml->loadXML($xmlString);

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
     * Extract blocks from PHPCR XML.
     *
     * @return array<mixed>
     */
    private function extractBlocks(string $xmlString, string $locale): array
    {
        try {
            $xml = new DOMDocument();
            $xml->loadXML($xmlString);

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            $blocksNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks"]/sv:value');

            if ($blocksNodes !== false && $blocksNodes->length > 0 && $blocksNodes->item(0)) {
                $blocksValue = $blocksNodes->item(0)->nodeValue;
                if ($blocksValue) {
                    $blocks = unserialize(base64_decode($blocksValue));
                    return is_array($blocks) ? $blocks : [];
                }
            }
        } catch (\Exception) {
            // Ignore parsing errors
        }

        return [];
    }
}
