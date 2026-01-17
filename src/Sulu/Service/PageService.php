<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use App\Sulu\Logger\McpActivityLogger;
use Doctrine\DBAL\Connection;
use DOMDocument;
use DOMXPath;
use FOS\HttpCacheBundle\CacheManager as FOSCacheManager;
use Sulu\Bundle\HttpCacheBundle\Cache\CacheManagerInterface;

/**
 * Service for Sulu page CRUD operations via direct database access.
 */
class PageService
{
    public function __construct(
        private Connection $connection,
        private McpActivityLogger $activityLogger,
        private ?CacheManagerInterface $cacheManager = null,
        private ?FOSCacheManager $fosCacheManager = null,
    ) {
    }

    /**
     * Invalidate HTTP cache for a page by its path.
     */
    private function invalidatePageCache(string $path, string $locale): void
    {
        if (!$this->cacheManager) {
            return;
        }

        // Get page UUID for cache invalidation
        $uuid = $this->getPageUuid($path);
        if ($uuid) {
            $this->cacheManager->invalidateTag($uuid);
        }

        // Also try to invalidate by URL path
        $urlPath = $this->convertPhpcrPathToUrl($path, $locale);
        if ($urlPath) {
            $this->cacheManager->invalidatePath($urlPath);
        }

        // Flush immediately for long-running processes like MCP server
        // ConsoleEvents::TERMINATE only fires when command exits, not during execution
        if ($this->fosCacheManager) {
            try {
                $this->fosCacheManager->flush();
            } catch (\Exception $e) {
                // Log but don't fail the operation
            }
        }
    }

    /**
     * Get page UUID from database.
     */
    private function getPageUuid(string $path): ?string
    {
        $result = $this->connection->fetchAssociative(
            "SELECT identifier FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'",
            [$path]
        );

        return $result ? $result['identifier'] : null;
    }

    /**
     * Convert PHPCR path to frontend URL.
     */
    private function convertPhpcrPathToUrl(string $path, string $locale): ?string
    {
        // /cmf/example/contents/glossare/phpunit -> /de/glossare/phpunit
        if (preg_match('#^/cmf/[^/]+/contents(.*)$#', $path, $matches)) {
            return '/' . $locale . $matches[1];
        }
        return null;
    }

    /**
     * List pages under a path prefix.
     *
     * @return array<int, array{path: string, url: string|null, fullUrl: string|null, title: string, template: string}>
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
            $url = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-url");

            if ($title !== null) {
                $pages[] = [
                    'path' => $row['path'],
                    'url' => $url,
                    'fullUrl' => $url !== null ? '/' . $locale . $url : null,
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
     * @return array{path: string, url: string|null, fullUrl: string|null, title: string, template: string, blocks: array<mixed>}|null
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
        $url = $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-url");
        $blocks = $this->extractBlocks($result['props'], $locale);

        return [
            'path' => $result['path'],
            'url' => $url,
            'fullUrl' => $url !== null ? '/' . $locale . $url : null,
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
                if (isset($block['items'])) {
                    $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-length", (string) count($block['items']), 'Long');
                    foreach ($block['items'] as $itemIndex => $item) {
                        $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-type#{$itemIndex}", $item['type'] ?? 'description');
                        $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-settings#{$itemIndex}", '[]');
                        if (isset($item['description'])) {
                            $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-description#{$itemIndex}", $item['description']);
                        }
                        if (isset($item['code'])) {
                            $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-code#{$itemIndex}", $item['code']);
                        }
                        if (isset($item['language'])) {
                            $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$newIndex}-language#{$itemIndex}", $item['language']);
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

            $this->activityLogger->logMcpAction(
                'mcp_block_added',
                $path,
                $locale,
                [
                    'blockType' => $block['type'],
                    'headline' => $block['headline'] ?? null,
                    'position' => $newIndex,
                ]
            );

            // Invalidate HTTP cache for this page
            $this->invalidatePageCache($path, $locale);

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
     * Remove a block from a page using expanded PHPCR property format.
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

            // Get blocks length
            $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]/sv:value');
            if ($lengthNodes === false || $lengthNodes->length === 0 || !$lengthNodes->item(0)) {
                return ['success' => false, 'message' => 'No blocks found'];
            }

            $blocksLength = (int) $lengthNodes->item(0)->nodeValue;
            if ($position < 0 || $position >= $blocksLength) {
                return ['success' => false, 'message' => "Block position {$position} out of range (0-" . ($blocksLength - 1) . ")"];
            }

            // Collect all block properties grouped by position
            $blockProperties = [];
            $allProperties = $xpath->query('//sv:property[starts-with(@sv:name, "i18n:' . $locale . '-blocks-")]');

            if ($allProperties !== false) {
                foreach ($allProperties as $prop) {
                    if ($prop instanceof \DOMElement) {
                        $name = $prop->getAttribute('sv:name');
                        // Skip the length property
                        if ($name === "i18n:{$locale}-blocks-length") {
                            continue;
                        }
                        // Extract position from property name (first # number)
                        if (preg_match('/#(\d+)/', $name, $matches)) {
                            $pos = (int) $matches[1];
                            if (!isset($blockProperties[$pos])) {
                                $blockProperties[$pos] = [];
                            }
                            $blockProperties[$pos][] = $prop;
                        }
                    }
                }
            }

            // Remove all properties for the target block position
            if (isset($blockProperties[$position])) {
                foreach ($blockProperties[$position] as $prop) {
                    if ($prop->parentNode) {
                        $prop->parentNode->removeChild($prop);
                    }
                }
            }

            // Renumber all blocks after the removed position
            for ($i = $position + 1; $i < $blocksLength; $i++) {
                if (isset($blockProperties[$i])) {
                    foreach ($blockProperties[$i] as $prop) {
                        if ($prop instanceof \DOMElement) {
                            $name = $prop->getAttribute('sv:name');
                            // Replace #oldPos with #newPos (and handle nested items like #0-type#1)
                            $newName = preg_replace_callback(
                                '/#(\d+)/',
                                function ($m) use ($i) {
                                    $oldNum = (int) $m[1];
                                    // Only decrement the first position (block index), not nested item indices
                                    if ($oldNum === $i) {
                                        return '#' . ($oldNum - 1);
                                    }
                                    return $m[0];
                                },
                                $name,
                                1 // Only replace first occurrence
                            );
                            if ($newName !== null) {
                                $prop->setAttribute('sv:name', $newName);
                            }
                        }
                    }
                }
            }

            // Update blocks length
            $lengthNodes->item(0)->nodeValue = (string) ($blocksLength - 1);

            $updatedXml = $xml->saveXML();

            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default']
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default_live']
            );

            $this->activityLogger->logMcpAction(
                'mcp_block_removed',
                $path,
                $locale,
                ['position' => $position]
            );

            // Invalidate HTTP cache for this page
            $this->invalidatePageCache($path, $locale);

            // Re-read page to return current state (helps with caching issues)
            $updatedPage = $this->getPage($path, $locale);
            $blockCount = $updatedPage ? count($updatedPage['blocks']) : 0;

            return [
                'success' => true,
                'message' => 'Block removed successfully',
                'blocks_remaining' => $blockCount,
                'blocks' => $updatedPage['blocks'] ?? [],
            ];

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

            // Copy content to live workspace
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$result['props'], $path, 'default_live']
            );

            // Create route if it doesn't exist
            $this->createRouteForPage($path, $result['props'], $locale);

            $this->activityLogger->logMcpAction(
                'mcp_page_published',
                $path,
                $locale
            );

            // Invalidate HTTP cache for this page
            $this->invalidatePageCache($path, $locale);

            return ['success' => true, 'message' => 'Page published successfully'];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Create route node for a page.
     */
    private function createRouteForPage(string $pagePath, string $pageProps, string $locale): void
    {
        // Extract UUID and URL from page props
        $xml = new \DOMDocument();
        $xml->loadXML($pageProps);
        $xpath = new \DOMXPath($xml);
        $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

        $uuidNodes = $xpath->query('//sv:property[@sv:name="jcr:uuid"]/sv:value');
        $urlNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-url"]/sv:value');

        if (!$uuidNodes || $uuidNodes->length === 0 || !$urlNodes || $urlNodes->length === 0) {
            return;
        }

        $pageUuid = $uuidNodes->item(0)?->nodeValue ?? '';
        $pageUrl = $urlNodes->item(0)?->nodeValue ?? '';

        if (empty($pageUuid) || empty($pageUrl)) {
            return;
        }

        // Build route path: /cmf/example/routes/{locale}/{url}
        $routePath = '/cmf/example/routes/' . $locale . $pageUrl;

        // Check if route already exists
        $existing = $this->connection->fetchAssociative(
            "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default_live'",
            [$routePath]
        );

        if ($existing) {
            return; // Route already exists
        }

        // Get parent route node ID
        $parentPath = dirname($routePath);
        $parent = $this->connection->fetchAssociative(
            "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default_live'",
            [$parentPath]
        );

        if (!$parent) {
            // Create parent path recursively if needed
            $this->ensureRouteParentExists($parentPath, $locale);
            $parent = $this->connection->fetchAssociative(
                "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default_live'",
                [$parentPath]
            );
        }

        if (!$parent) {
            return; // Can't create route without parent
        }

        $routeUuid = $this->generateUuid();
        $now = (new \DateTime())->format('Y-m-d\TH:i:s.vP');
        $nodeName = basename($routePath);

        // Build route props XML
        $routeProps = '<?xml version="1.0" encoding="UTF-8"?>' . "\n" .
            '<sv:node xmlns:mix="http://www.jcp.org/jcr/mix/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0" ' .
            'xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:jcr="http://www.jcp.org/jcr/1.0" ' .
            'xmlns:sv="http://www.jcp.org/jcr/sv/1.0" xmlns:rep="internal">' .
            '<sv:property sv:name="jcr:primaryType" sv:type="Name" sv:multi-valued="0"><sv:value length="15">nt:unstructured</sv:value></sv:property>' .
            '<sv:property sv:name="jcr:mixinTypes" sv:type="Name" sv:multi-valued="1"><sv:value length="17">mix:referenceable</sv:value><sv:value length="9">sulu:path</sv:value></sv:property>' .
            '<sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0"><sv:value length="36">' . $routeUuid . '</sv:value></sv:property>' .
            '<sv:property sv:name="sulu:history" sv:type="Boolean" sv:multi-valued="0"><sv:value length="0">0</sv:value></sv:property>' .
            '<sv:property sv:name="sulu:created" sv:type="Date" sv:multi-valued="0"><sv:value length="29">' . $now . '</sv:value></sv:property>' .
            '<sv:property sv:name="sulu:changed" sv:type="Date" sv:multi-valued="0"><sv:value length="29">' . $now . '</sv:value></sv:property>' .
            '<sv:property sv:name="sulu:content" sv:type="Reference" sv:multi-valued="0"><sv:value length="36">' . $pageUuid . '</sv:value></sv:property>' .
            '</sv:node>' . "\n";

        // Insert route node
        $this->connection->executeStatement(
            "INSERT INTO phpcr_nodes (path, parent, local_name, namespace, workspace_name, identifier, type, props, depth, sort_order) " .
            "VALUES (?, ?, ?, '', 'default_live', ?, 'nt:unstructured', ?, ?, ?)",
            [$routePath, $parent['id'], $nodeName, $routeUuid, $routeProps, substr_count($routePath, '/'), 0]
        );
    }

    /**
     * Ensure parent route path exists.
     */
    private function ensureRouteParentExists(string $parentPath, string $locale): void
    {
        $existing = $this->connection->fetchAssociative(
            "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default_live'",
            [$parentPath]
        );

        if ($existing) {
            return;
        }

        // Recursively create parent
        $grandparent = dirname($parentPath);
        if ($grandparent !== '/cmf/example/routes/' . $locale && $grandparent !== '/cmf/example/routes') {
            $this->ensureRouteParentExists($grandparent, $locale);
        }

        $parent = $this->connection->fetchAssociative(
            "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default_live'",
            [$grandparent]
        );

        if (!$parent) {
            return;
        }

        $uuid = $this->generateUuid();
        $nodeName = basename($parentPath);

        $props = '<?xml version="1.0" encoding="UTF-8"?>' . "\n" .
            '<sv:node xmlns:mix="http://www.jcp.org/jcr/mix/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0" ' .
            'xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:jcr="http://www.jcp.org/jcr/1.0" ' .
            'xmlns:sv="http://www.jcp.org/jcr/sv/1.0" xmlns:rep="internal">' .
            '<sv:property sv:name="jcr:primaryType" sv:type="Name" sv:multi-valued="0"><sv:value length="15">nt:unstructured</sv:value></sv:property>' .
            '<sv:property sv:name="jcr:mixinTypes" sv:type="Name" sv:multi-valued="1"><sv:value length="17">mix:referenceable</sv:value></sv:property>' .
            '<sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0"><sv:value length="36">' . $uuid . '</sv:value></sv:property>' .
            '</sv:node>' . "\n";

        $this->connection->executeStatement(
            "INSERT INTO phpcr_nodes (path, parent, local_name, namespace, workspace_name, identifier, type, props, depth, sort_order) " .
            "VALUES (?, ?, ?, '', 'default_live', ?, 'nt:unstructured', ?, ?, ?)",
            [$parentPath, $parent['id'], $nodeName, $uuid, $props, substr_count($parentPath, '/'), 0]
        );
    }

    /**
     * Generate a UUID v4.
     */
    private function generateUuid(): string
    {
        $data = random_bytes(16);
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }

    /**
     * Create a new page using DocumentManager.
     *
     * @param array{parentPath?: string, title?: string, resourceSegment?: string, seoTitle?: string, seoDescription?: string, publish?: bool} $data
     * @return array{success: bool, message: string, path?: string, uuid?: string, url?: string}
     */
    public function createPage(array $data, string $locale = 'de'): array
    {
        $parentPath = $data['parentPath'] ?? '';
        $title = $data['title'] ?? '';
        $resourceSegment = $data['resourceSegment'] ?? '';
        $seoTitle = $data['seoTitle'] ?? null;
        $seoDescription = $data['seoDescription'] ?? null;
        $publish = $data['publish'] ?? false;

        // Validate required fields
        if (empty($parentPath)) {
            return ['success' => false, 'message' => 'parentPath is required'];
        }
        if (empty($title)) {
            return ['success' => false, 'message' => 'title is required'];
        }
        if (empty($resourceSegment)) {
            return ['success' => false, 'message' => 'resourceSegment is required'];
        }

        // Validate resourceSegment format
        if (!preg_match('#^/[a-z0-9-]+$#', $resourceSegment)) {
            return ['success' => false, 'message' => 'resourceSegment must start with / and contain only lowercase letters, numbers, and hyphens'];
        }

        try {
            // Get parent info from default workspace
            $parent = $this->connection->fetchAssociative(
                "SELECT id, path, props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'",
                [$parentPath]
            );

            if (!$parent) {
                return ['success' => false, 'message' => "Parent path does not exist: {$parentPath}"];
            }

            // Extract parent URL to build full URL
            $parentUrl = $parent['props'] ? ($this->extractPropertyFromXml($parent['props'], "i18n:{$locale}-url") ?? '') : '';
            $fullUrl = rtrim($parentUrl, '/') . $resourceSegment;

            // Generate UUID and build path
            $uuid = $this->generateUuid();
            $nodeName = ltrim($resourceSegment, '/');
            $path = $parentPath . '/' . $nodeName;
            $depth = substr_count($path, '/');

            // Check if page already exists
            $existing = $this->connection->fetchAssociative(
                "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default'",
                [$path]
            );

            if ($existing) {
                return ['success' => false, 'message' => "Page already exists at: {$path}"];
            }

            // Get next sort order
            $maxOrder = $this->connection->fetchOne(
                "SELECT MAX(sort_order) FROM phpcr_nodes WHERE parent = ? AND workspace_name = 'default'",
                [$parent['id']]
            );
            $sortOrder = ($maxOrder ?? 0) + 1;

            // Build XML props
            $now = (new \DateTime())->format('Y-m-d\TH:i:s.v+00:00');
            $props = $this->buildPagePropsXml($uuid, $title, $fullUrl, $locale, $now, $seoTitle, $seoDescription, $publish);

            // Insert into BOTH workspaces
            foreach (['default', 'default_live'] as $workspace) {
                // Get parent ID for this workspace
                $parentInWorkspace = $this->connection->fetchAssociative(
                    "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = ?",
                    [$parentPath, $workspace]
                );

                if (!$parentInWorkspace) {
                    continue; // Skip if parent doesn't exist in this workspace
                }

                $this->connection->executeStatement(
                    "INSERT INTO phpcr_nodes (path, parent, local_name, namespace, workspace_name, identifier, type, props, depth, sort_order) " .
                    "VALUES (?, ?, ?, '', ?, ?, 'nt:unstructured', ?, ?, ?)",
                    [$path, $parentInWorkspace['id'], $nodeName, $workspace, $uuid, $props, $depth, $sortOrder]
                );
            }

            // Create route if publishing
            if ($publish) {
                $this->createRouteForPage($path, $props, $locale);
            }

            $this->activityLogger->logMcpAction(
                'mcp_page_created',
                $path,
                $locale,
                [
                    'title' => $title,
                    'resourceSegment' => $resourceSegment,
                    'published' => $publish,
                ]
            );

            return [
                'success' => true,
                'message' => 'Page created successfully',
                'path' => $path,
                'uuid' => $uuid,
                'url' => '/' . $locale . $fullUrl,
            ];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Build XML props for a new page.
     */
    private function buildPagePropsXml(
        string $uuid,
        string $title,
        string $url,
        string $locale,
        string $now,
        ?string $seoTitle = null,
        ?string $seoDescription = null,
        bool $published = false
    ): string {
        $titleLen = strlen($title);
        $urlLen = strlen($url);
        $seoTitleValue = $seoTitle ?? $title;
        $seoTitleLen = strlen($seoTitleValue);
        $seoDescValue = $seoDescription ?? '';
        $seoDescLen = strlen($seoDescValue);
        $state = $published ? '2' : '1'; // 2 = published, 1 = draft

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<sv:node xmlns:mix="http://www.jcp.org/jcr/mix/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:sv="http://www.jcp.org/jcr/sv/1.0" xmlns:rep="internal">';

        // Required PHPCR properties
        $xml .= '<sv:property sv:name="jcr:primaryType" sv:type="Name" sv:multi-valued="0"><sv:value length="15">nt:unstructured</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="jcr:mixinTypes" sv:type="Name" sv:multi-valued="1"><sv:value length="9">sulu:page</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0"><sv:value length="36">' . $uuid . '</sv:value></sv:property>';

        // Page content properties
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-title" sv:type="String" sv:multi-valued="0"><sv:value length="' . $titleLen . '">' . htmlspecialchars($title, ENT_XML1) . '</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-url" sv:type="String" sv:multi-valued="0"><sv:value length="' . $urlLen . '">' . htmlspecialchars($url, ENT_XML1) . '</sv:value></sv:property>';

        // Empty blocks
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-blocks-length" sv:type="Long" sv:multi-valued="0"><sv:value length="1">0</sv:value></sv:property>';

        // Template and state
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-template" sv:type="String" sv:multi-valued="0"><sv:value length="8">tailwind</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-state" sv:type="Long" sv:multi-valued="0"><sv:value length="1">' . $state . '</sv:value></sv:property>';

        // Permissions
        $xml .= '<sv:property sv:name="sec:permissions" sv:type="String" sv:multi-valued="0"><sv:value length="2">[]</sv:value></sv:property>';

        // User tracking
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-creator" sv:type="Long" sv:multi-valued="0"><sv:value length="1">1</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-changer" sv:type="Long" sv:multi-valued="0"><sv:value length="1">1</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-author" sv:type="Long" sv:multi-valued="0"><sv:value length="1">1</sv:value></sv:property>';

        // Dates
        $nowLen = strlen($now);
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-authored" sv:type="Date" sv:multi-valued="0"><sv:value length="' . $nowLen . '">' . $now . '</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-created" sv:type="Date" sv:multi-valued="0"><sv:value length="' . $nowLen . '">' . $now . '</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-changed" sv:type="Date" sv:multi-valued="0"><sv:value length="' . $nowLen . '">' . $now . '</sv:value></sv:property>';

        // Navigation
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-navContexts" sv:type="String" sv:multi-valued="1"/>';
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-nodeType" sv:type="Long" sv:multi-valued="0"><sv:value length="1">1</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="sulu:order" sv:type="Long" sv:multi-valued="0"><sv:value length="3">100</sv:value></sv:property>';

        // Published date (only if published)
        if ($published) {
            $xml .= '<sv:property sv:name="i18n:' . $locale . '-published" sv:type="Date" sv:multi-valued="0"><sv:value length="' . $nowLen . '">' . $now . '</sv:value></sv:property>';
        }

        // SEO extension
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-seo-title" sv:type="String" sv:multi-valued="0"><sv:value length="' . $seoTitleLen . '">' . htmlspecialchars($seoTitleValue, ENT_XML1) . '</sv:value></sv:property>';
        $xml .= '<sv:property sv:name="i18n:' . $locale . '-seo-description" sv:type="String" sv:multi-valued="0"><sv:value length="' . $seoDescLen . '">' . htmlspecialchars($seoDescValue, ENT_XML1) . '</sv:value></sv:property>';

        $xml .= '</sv:node>' . "\n";

        return $xml;
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
     * Extract blocks from PHPCR XML using expanded property format.
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

            // Get blocks length
            $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]/sv:value');
            if ($lengthNodes === false || $lengthNodes->length === 0 || !$lengthNodes->item(0)) {
                return [];
            }

            $blocksLength = (int) $lengthNodes->item(0)->nodeValue;
            $blocks = [];

            for ($i = 0; $i < $blocksLength; $i++) {
                $block = ['position' => $i];

                // Get block type
                $typeNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-type#' . $i . '"]/sv:value');
                if ($typeNodes !== false && $typeNodes->length > 0 && $typeNodes->item(0)) {
                    $block['type'] = $typeNodes->item(0)->nodeValue;
                }

                // Get headline
                $headlineNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-headline#' . $i . '"]/sv:value');
                if ($headlineNodes !== false && $headlineNodes->length > 0 && $headlineNodes->item(0)) {
                    $block['headline'] = $headlineNodes->item(0)->nodeValue;
                }

                // Get description (for hl-des blocks)
                $descNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-description#' . $i . '"]/sv:value');
                if ($descNodes !== false && $descNodes->length > 0 && $descNodes->item(0)) {
                    $block['description'] = $descNodes->item(0)->nodeValue;
                }

                // Get nested items (for headline-paragraphs blocks)
                $itemsLengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-items#' . $i . '-length"]/sv:value');
                if ($itemsLengthNodes !== false && $itemsLengthNodes->length > 0 && $itemsLengthNodes->item(0)) {
                    $itemsLength = (int) $itemsLengthNodes->item(0)->nodeValue;
                    $items = [];

                    for ($j = 0; $j < $itemsLength; $j++) {
                        $item = [];

                        $itemTypeNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-items#' . $i . '-type#' . $j . '"]/sv:value');
                        if ($itemTypeNodes !== false && $itemTypeNodes->length > 0 && $itemTypeNodes->item(0)) {
                            $item['type'] = $itemTypeNodes->item(0)->nodeValue;
                        }

                        $itemDescNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-items#' . $i . '-description#' . $j . '"]/sv:value');
                        if ($itemDescNodes !== false && $itemDescNodes->length > 0 && $itemDescNodes->item(0)) {
                            $item['content'] = $itemDescNodes->item(0)->nodeValue;
                        }

                        $itemCodeNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-items#' . $i . '-code#' . $j . '"]/sv:value');
                        if ($itemCodeNodes !== false && $itemCodeNodes->length > 0 && $itemCodeNodes->item(0)) {
                            $item['code'] = $itemCodeNodes->item(0)->nodeValue;
                        }

                        $itemLangNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-items#' . $i . '-language#' . $j . '"]/sv:value');
                        if ($itemLangNodes !== false && $itemLangNodes->length > 0 && $itemLangNodes->item(0)) {
                            $item['language'] = $itemLangNodes->item(0)->nodeValue;
                        }

                        if (!empty($item)) {
                            $items[] = $item;
                        }
                    }

                    if (!empty($items)) {
                        $block['items'] = $items;
                    }
                }

                // Get image/media properties
                $imageNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-image#' . $i . '"]/sv:value');
                if ($imageNodes !== false && $imageNodes->length > 0 && $imageNodes->item(0)) {
                    $imageData = $imageNodes->item(0)->nodeValue;
                    if ($imageData) {
                        $block['image'] = json_decode($imageData, true) ?: $imageData;
                    }
                }

                // Get code block properties
                $codeNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-code#' . $i . '"]/sv:value');
                if ($codeNodes !== false && $codeNodes->length > 0 && $codeNodes->item(0)) {
                    $block['code'] = $codeNodes->item(0)->nodeValue;
                }

                $languageNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-language#' . $i . '"]/sv:value');
                if ($languageNodes !== false && $languageNodes->length > 0 && $languageNodes->item(0)) {
                    $block['language'] = $languageNodes->item(0)->nodeValue;
                }

                $blocks[] = $block;
            }

            return $blocks;
        } catch (\Exception) {
            // Ignore parsing errors
        }

        return [];
    }

    /**
     * Update an existing block.
     *
     * @param array<string, mixed> $blockData
     * @return array{success: bool, message: string}
     */
    public function updateBlock(string $path, int $position, array $blockData, string $locale = 'de'): array
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

            // Check if block exists
            $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]/sv:value');
            if ($lengthNodes === false || $lengthNodes->length === 0 || !$lengthNodes->item(0)) {
                return ['success' => false, 'message' => 'No blocks found'];
            }

            $blocksLength = (int) $lengthNodes->item(0)->nodeValue;
            if ($position < 0 || $position >= $blocksLength) {
                return ['success' => false, 'message' => "Block position {$position} out of range (0-" . ($blocksLength - 1) . ")"];
            }

            // Update block properties
            foreach ($blockData as $key => $value) {
                $propName = match ($key) {
                    'headline' => "i18n:{$locale}-blocks-headline#{$position}",
                    'description' => "i18n:{$locale}-blocks-description#{$position}",
                    'content' => "i18n:{$locale}-blocks-description#{$position}",
                    'code' => "i18n:{$locale}-blocks-code#{$position}",
                    'language' => "i18n:{$locale}-blocks-language#{$position}",
                    default => null,
                };

                if ($propName === null) {
                    continue;
                }

                $propNodes = $xpath->query('//sv:property[@sv:name="' . $propName . '"]/sv:value');
                if ($propNodes !== false && $propNodes->length > 0 && $propNodes->item(0)) {
                    $propNodes->item(0)->nodeValue = (string) $value;
                } else {
                    // Add new property if it doesn't exist
                    $rootNode = $xpath->query('/sv:node')->item(0);
                    if ($rootNode) {
                        $this->addPhpcrProperty($xml, $rootNode, $propName, (string) $value);
                    }
                }
            }

            // Handle complete items replacement for headline-paragraphs
            if (isset($blockData['items']) && is_array($blockData['items'])) {
                // Remove all old item properties for this block
                $oldItemProps = $xpath->query('//sv:property[contains(@sv:name, "i18n:' . $locale . '-blocks-items#' . $position . '-")]');
                if ($oldItemProps !== false) {
                    foreach ($oldItemProps as $prop) {
                        if ($prop->parentNode) {
                            $prop->parentNode->removeChild($prop);
                        }
                    }
                }

                // Add new items
                $rootNode = $xpath->query('/sv:node')->item(0);
                if ($rootNode) {
                    $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$position}-length", (string) count($blockData['items']), 'Long');

                    foreach ($blockData['items'] as $itemIndex => $item) {
                        $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$position}-type#{$itemIndex}", $item['type'] ?? 'description');
                        $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$position}-settings#{$itemIndex}", '[]');
                        if (isset($item['description'])) {
                            $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$position}-description#{$itemIndex}", $item['description']);
                        }
                        if (isset($item['code'])) {
                            $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$position}-code#{$itemIndex}", $item['code']);
                        }
                        if (isset($item['language'])) {
                            $this->addPhpcrProperty($xml, $rootNode, "i18n:{$locale}-blocks-items#{$position}-language#{$itemIndex}", $item['language']);
                        }
                    }
                }
            }

            $updatedXml = $xml->saveXML();

            // Update both workspaces for immediate visibility
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default']
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default_live']
            );

            $this->activityLogger->logMcpAction(
                'mcp_block_updated',
                $path,
                $locale,
                ['position' => $position, 'fields' => array_keys($blockData)]
            );

            // Invalidate HTTP cache for this page
            $this->invalidatePageCache($path, $locale);

            // Re-read page to return current state
            $updatedPage = $this->getPage($path, $locale);

            return [
                'success' => true,
                'message' => 'Block updated successfully',
                'blocks' => $updatedPage['blocks'] ?? [],
            ];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Move a block to a new position.
     *
     * @return array{success: bool, message: string}
     */
    public function moveBlock(string $path, int $fromPosition, int $toPosition, string $locale = 'de'): array
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

            // Get blocks length
            $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]/sv:value');
            if ($lengthNodes === false || $lengthNodes->length === 0 || !$lengthNodes->item(0)) {
                return ['success' => false, 'message' => 'No blocks found'];
            }

            $blocksLength = (int) $lengthNodes->item(0)->nodeValue;
            if ($fromPosition < 0 || $fromPosition >= $blocksLength) {
                return ['success' => false, 'message' => "From position {$fromPosition} out of range"];
            }
            if ($toPosition < 0 || $toPosition >= $blocksLength) {
                return ['success' => false, 'message' => "To position {$toPosition} out of range"];
            }
            if ($fromPosition === $toPosition) {
                return ['success' => true, 'message' => 'Block already at target position'];
            }

            // Extract all block properties
            $blockProperties = [];
            $allProperties = $xpath->query('//sv:property[starts-with(@sv:name, "i18n:' . $locale . '-blocks-")]');

            if ($allProperties !== false) {
                foreach ($allProperties as $prop) {
                    if ($prop instanceof \DOMElement) {
                        $name = $prop->getAttribute('sv:name');
                        // Skip the length property
                        if (str_contains($name, '-length') && !str_contains($name, '-items#')) {
                            continue;
                        }
                        // Extract position from property name
                        if (preg_match('/#(\d+)/', $name, $matches)) {
                            $pos = (int) $matches[1];
                            if (!isset($blockProperties[$pos])) {
                                $blockProperties[$pos] = [];
                            }
                            $blockProperties[$pos][] = $prop;
                        }
                    }
                }
            }

            // Reorder block properties
            $newOrder = range(0, $blocksLength - 1);
            $movedBlock = array_splice($newOrder, $fromPosition, 1)[0];
            array_splice($newOrder, $toPosition, 0, [$movedBlock]);

            // Rename properties according to new order
            foreach ($newOrder as $newPos => $oldPos) {
                if (isset($blockProperties[$oldPos])) {
                    foreach ($blockProperties[$oldPos] as $prop) {
                        if ($prop instanceof \DOMElement) {
                            $name = $prop->getAttribute('sv:name');
                            $newName = preg_replace('/#' . $oldPos . '(?!\d)/', '#' . $newPos, $name);
                            if ($newName !== null) {
                                $prop->setAttribute('sv:name', $newName);
                            }
                        }
                    }
                }
            }

            $updatedXml = $xml->saveXML();

            // Update both workspaces for immediate visibility
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default']
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default_live']
            );

            $this->activityLogger->logMcpAction(
                'mcp_block_moved',
                $path,
                $locale,
                ['from_position' => $fromPosition, 'to_position' => $toPosition]
            );

            // Invalidate HTTP cache for this page
            $this->invalidatePageCache($path, $locale);

            // Re-read page to return current state
            $updatedPage = $this->getPage($path, $locale);

            return [
                'success' => true,
                'message' => "Block moved from position {$fromPosition} to {$toPosition}",
                'blocks' => $updatedPage['blocks'] ?? [],
            ];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Unpublish page (remove from live workspace).
     *
     * @return array{success: bool, message: string}
     */
    public function unpublishPage(string $path, string $locale = 'de'): array
    {
        try {
            $result = $this->connection->fetchAssociative(
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = 'default_live'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not published or not found'];
            }

            $xml = new DOMDocument();
            $xml->loadXML($result['props']);

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            // Set workflow state to unpublished
            $stateNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-state"]/sv:value');
            if ($stateNodes !== false && $stateNodes->length > 0 && $stateNodes->item(0)) {
                $stateNodes->item(0)->nodeValue = '1'; // 1 = unpublished, 2 = published
            }

            // Set published date to null
            $publishedNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-published"]');
            if ($publishedNodes !== false && $publishedNodes->length > 0 && $publishedNodes->item(0)) {
                $parent = $publishedNodes->item(0)->parentNode;
                if ($parent) {
                    $parent->removeChild($publishedNodes->item(0));
                }
            }

            $updatedXml = $xml->saveXML();

            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, 'default_live']
            );

            $this->activityLogger->logMcpAction(
                'mcp_page_unpublished',
                $path,
                $locale
            );

            // Invalidate HTTP cache for this page
            $this->invalidatePageCache($path, $locale);

            return ['success' => true, 'message' => 'Page unpublished successfully'];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * List available block types from template configuration.
     *
     * @return array<int, array{name: string, fields: array<string>}>
     */
    public function listBlockTypes(): array
    {
        // These are the common block types used in Sulu templates
        return [
            [
                'name' => 'headline-paragraphs',
                'fields' => ['headline', 'items'],
                'description' => 'Headline with multiple paragraph items',
            ],
            [
                'name' => 'hl-des',
                'fields' => ['headline', 'description'],
                'description' => 'Simple headline and description block',
            ],
            [
                'name' => 'text',
                'fields' => ['text'],
                'description' => 'Rich text content block',
            ],
            [
                'name' => 'image',
                'fields' => ['image', 'alt', 'caption'],
                'description' => 'Image with optional caption',
            ],
            [
                'name' => 'code',
                'fields' => ['code', 'language'],
                'description' => 'Code snippet with syntax highlighting',
            ],
            [
                'name' => 'quote',
                'fields' => ['quote', 'author'],
                'description' => 'Blockquote with attribution',
            ],
            [
                'name' => 'video',
                'fields' => ['url', 'title'],
                'description' => 'Embedded video',
            ],
        ];
    }

    // ==========================================================================
    // Page Discovery Methods
    // ==========================================================================

    /**
     * Search pages by title (case-insensitive).
     *
     * @return array<int, array{path: string, url: string|null, fullUrl: string|null, title: string, template: string}>
     */
    public function searchPages(string $query, string $locale = 'de', string $pathPrefix = '/cmf/example/contents'): array
    {
        $allPages = $this->listPages($locale, $pathPrefix);
        $queryLower = mb_strtolower($query);

        return array_values(array_filter($allPages, function (array $page) use ($queryLower): bool {
            return str_contains(mb_strtolower($page['title']), $queryLower);
        }));
    }

    /**
     * Get page tree with hierarchical structure.
     *
     * @return array{path: string, url: string|null, fullUrl: string|null, title: string, template: string, children: array<mixed>}|null
     */
    public function getPageTree(string $rootPath, string $locale = 'de', int $depth = 2): ?array
    {
        $allPages = $this->listPages($locale, $rootPath);

        if (empty($allPages)) {
            return null;
        }

        // Find root node
        $rootNode = null;
        $childPages = [];

        foreach ($allPages as $page) {
            if ($page['path'] === $rootPath) {
                $rootNode = $page;
            } else {
                $childPages[] = $page;
            }
        }

        if ($rootNode === null) {
            return null;
        }

        // Build tree structure
        $rootNode['children'] = $this->buildChildTree($rootPath, $childPages, $depth, 0);

        return $rootNode;
    }

    /**
     * Build child tree recursively.
     *
     * @param array<int, array<string, mixed>> $pages
     * @return array<int, array<string, mixed>>
     */
    private function buildChildTree(string $parentPath, array $pages, int $maxDepth, int $currentDepth): array
    {
        if ($currentDepth >= $maxDepth) {
            return [];
        }

        $children = [];
        $parentPathLength = strlen($parentPath);

        foreach ($pages as $page) {
            $pagePath = $page['path'];

            // Check if this page is a direct child of the parent
            if (!str_starts_with($pagePath, $parentPath . '/')) {
                continue;
            }

            $relativePath = substr($pagePath, $parentPathLength + 1);

            // Direct child has no additional slashes in relative path
            if (!str_contains($relativePath, '/')) {
                $page['children'] = $this->buildChildTree($pagePath, $pages, $maxDepth, $currentDepth + 1);
                $children[] = $page;
            }
        }

        return $children;
    }

    /**
     * Find page by frontend URL.
     *
     * @return array{path: string, url: string|null, fullUrl: string|null, title: string, template: string}|null
     */
    public function findPageByUrl(string $url, string $locale = 'de', string $pathPrefix = '/cmf/example/contents'): ?array
    {
        // Strip locale prefix if present (e.g., /de/php-glossar -> /php-glossar)
        $normalizedUrl = $this->normalizeUrl($url, $locale);

        $allPages = $this->listPages($locale, $pathPrefix);

        foreach ($allPages as $page) {
            if (isset($page['url']) && $page['url'] === $normalizedUrl) {
                return $page;
            }
        }

        return null;
    }

    /**
     * Normalize URL by stripping locale prefix.
     */
    private function normalizeUrl(string $url, string $locale): string
    {
        $localePrefix = '/' . $locale . '/';

        if (str_starts_with($url, $localePrefix)) {
            return '/' . substr($url, strlen($localePrefix));
        }

        return $url;
    }
}
