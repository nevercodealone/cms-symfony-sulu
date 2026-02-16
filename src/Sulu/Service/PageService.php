<?php

declare(strict_types=1);

namespace App\Sulu\Service;

use App\Sulu\Block\BlockExtractor;
use App\Sulu\Block\BlockTypeRegistry;
use App\Sulu\Block\BlockValidator;
use App\Sulu\Block\BlockWriter;
use App\Sulu\Cache\HttpCacheClearer;
use App\Sulu\Logger\McpActivityLogger;
use App\Sulu\Service\SnippetService;
use Doctrine\DBAL\Connection;
use DOMDocument;
use DOMXPath;
use FOS\HttpCacheBundle\CacheManager as FOSCacheManager;
use Sulu\Bundle\HttpCacheBundle\Cache\CacheManagerInterface;
use Sulu\Component\DocumentManager\DocumentManagerInterface;

/**
 * Service for Sulu page CRUD operations via direct database access.
 *
 * ARCHITECTURE DECISION - DO NOT REFACTOR TO USE DocumentManager:
 * ===============================================================
 * This service intentionally uses direct DBAL queries to read/write PHPCR XML
 * instead of Sulu's DocumentManager. This is NOT legacy code to be "improved".
 *
 * WHY DIRECT DATABASE ACCESS:
 * 1. MCP Server runs as long-lived process - DocumentManager has connection
 *    timeout issues and entity manager state problems in long-running processes
 * 2. DocumentManager requires complex event dispatching, workflows, and
 *    subscriber chains that cause issues outside HTTP request context
 * 3. Direct XML manipulation gives us precise control over block structure
 *    without fighting Sulu's internal abstractions
 * 4. Cache clearing via DocumentManager causes "MySQL server has gone away"
 *    errors in MCP context (see commit c3657fa)
 *
 * WHAT NOT TO DO:
 * - Don't try to replace Connection with DocumentManager for block operations
 * - Don't add DocumentManager->flush() calls for block CRUD operations
 * - Don't add DocumentManager->clear() for cache management
 * - Don't wrap this in Sulu's PageDocument or StructureManager
 *
 * The only DocumentManager usage is deletePage() which requires it for proper
 * cleanup of routes and search indexes - and even that is carefully isolated.
 *
 * @see BlockWriter For XML block writing logic
 * @see BlockExtractor For XML block reading logic
 */
class PageService
{
    private const WORKSPACE_DEFAULT = 'default';
    private const WORKSPACE_LIVE = 'default_live';

    private BlockExtractor $blockExtractor;
    private BlockWriter $blockWriter;
    private BlockValidator $blockValidator;

    public function __construct(
        private Connection $connection,
        private McpActivityLogger $activityLogger,
        private ?CacheManagerInterface $cacheManager = null,
        private ?FOSCacheManager $fosCacheManager = null,
        ?BlockTypeRegistry $blockTypeRegistry = null,
        ?BlockExtractor $blockExtractor = null,
        ?BlockWriter $blockWriter = null,
        ?BlockValidator $blockValidator = null,
        private ?DocumentManagerInterface $documentManager = null,
        private ?HttpCacheClearer $httpCacheClearer = null,
        private ?SnippetService $snippetService = null,
    ) {
        // Create default instances if not provided (backwards compatibility)
        $registry = $blockTypeRegistry ?? new BlockTypeRegistry();
        $this->blockExtractor = $blockExtractor ?? new BlockExtractor($registry);
        $this->blockWriter = $blockWriter ?? new BlockWriter($registry);
        $this->blockValidator = $blockValidator ?? new BlockValidator($registry);
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

        // Direct HTTP cache clearing for CLI/MCP processes
        // FOS HttpCache with use_kernel_dispatcher only works in HTTP requests
        if ($this->httpCacheClearer) {
            $this->httpCacheClearer->clear();
        }
    }

    /**
     * Get page UUID from database.
     */
    public function getPageUuid(string $path): ?string
    {
        $result = $this->connection->fetchAssociative(
            "SELECT identifier FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
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
     * @return array<int, array{path: string, url: string|null, fullUrl: string|null, title: string, template: string, published: bool, state: string}>
     */
    public function listPages(string $locale = 'de', string $pathPrefix = '/cmf/example/contents'): array
    {
        $results = $this->connection->fetchAllAssociative(
            "SELECT path, props FROM phpcr_nodes
             WHERE path LIKE ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'
             ORDER BY path",
            [$pathPrefix . '%']
        );

        // Batch check which pages exist in live workspace
        $livePaths = [];
        if (!empty($results)) {
            $paths = array_column($results, 'path');
            $placeholders = implode(',', array_fill(0, count($paths), '?'));
            $liveResults = $this->connection->fetchAllAssociative(
                "SELECT path FROM phpcr_nodes WHERE path IN ({$placeholders}) AND workspace_name = ?",
                [...$paths, self::WORKSPACE_LIVE]
            );
            $livePaths = array_flip(array_column($liveResults, 'path'));
        }

        $pages = [];
        foreach ($results as $row) {
            $title = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-title");
            $template = $this->extractPropertyFromXml($row['props'], 'template');
            $url = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-url");

            if ($title !== null) {
                $existsInLive = isset($livePaths[$row['path']]);
                $pubMeta = $this->extractPublicationMeta($row['props'], $locale, $existsInLive);

                $pages[] = [
                    'path' => $row['path'],
                    'url' => $url,
                    'fullUrl' => $url !== null ? '/' . $locale . $url : null,
                    'title' => $title,
                    'template' => $template ?? 'default',
                    'published' => $pubMeta['published'],
                    'state' => $pubMeta['state'],
                ];
            }
        }

        return $pages;
    }

    /**
     * Get page content including blocks.
     *
     * @return array{path: string, url: string|null, fullUrl: string|null, title: string, template: string, blocks: array<mixed>, published: bool, state: string, publishedAt: string|null, createdAt: string|null, modifiedAt: string|null, excerpt: array{title: string|null, description: string|null, images: array<mixed>|null}}|null
     */
    public function getPage(string $path, string $locale = 'de'): ?array
    {
        $result = $this->connection->fetchAssociative(
            "SELECT path, props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
            [$path]
        );

        if (!$result) {
            return null;
        }

        $title = $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-title") ?? '';
        $template = $this->extractPropertyFromXml($result['props'], 'template') ?? 'default';
        $url = $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-url");
        $blocks = $this->extractBlocks($result['props'], $locale);
        $blocks = $this->resolveSnippetReferences($blocks, $locale);

        // Extract excerpt data
        $excerptTitle = $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-excerpt-title");
        $excerptDescription = $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-excerpt-description");
        $excerptImages = $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-excerpt-images");

        // Get publication metadata
        $existsInLive = $this->isPagePublished($path);
        $pubMeta = $this->extractPublicationMeta($result['props'], $locale, $existsInLive);

        return [
            'path' => $result['path'],
            'url' => $url,
            'fullUrl' => $url !== null ? '/' . $locale . $url : null,
            'title' => $title,
            'template' => $template,
            'blocks' => $blocks,
            'published' => $pubMeta['published'],
            'state' => $pubMeta['state'],
            'publishedAt' => $pubMeta['publishedAt'],
            'createdAt' => $pubMeta['createdAt'],
            'modifiedAt' => $pubMeta['modifiedAt'],
            'excerpt' => [
                'title' => $excerptTitle,
                'description' => $excerptDescription,
                'images' => $excerptImages ? json_decode($excerptImages, true) : null,
            ],
        ];
    }

    /**
     * Get lightweight page structure without full block content.
     *
     * @return array{success: bool, title: string, uuid: string|null, url: string|null, seoTitle: string|null, seoDescription: string|null, excerptTitle: string|null, excerptDescription: string|null, excerptImage: int|null, blocks_count: int, blocks: array<int, array{position: int, type: string, headline?: string, faqs_count?: int, rows_count?: int, items_count?: int}>}|null
     */
    public function getPageStructure(string $path, string $locale = 'de'): ?array
    {
        $page = $this->getPage($path, $locale);
        if ($page === null) {
            return null;
        }

        $result = $this->connection->fetchAssociative(
            "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
            [$path]
        );
        $seoTitle = $result ? $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-seo-title") : null;
        $seoDescription = $result ? $this->extractPropertyFromXml($result['props'], "i18n:{$locale}-seo-description") : null;

        return [
            'success' => true,
            'title' => $page['title'],
            'uuid' => $this->getPageUuid($path),
            'url' => $page['fullUrl'],
            'seoTitle' => $seoTitle,
            'seoDescription' => $seoDescription,
            'excerptTitle' => $page['excerpt']['title'] ?? null,
            'excerptDescription' => $page['excerpt']['description'] ?? null,
            'excerptImage' => $page['excerpt']['images']['ids'][0] ?? null,
            'blocks_count' => count($page['blocks']),
            'blocks' => $this->formatCompactBlocks($page['blocks']),
        ];
    }

    /**
     * Add a content block to a page using BlockWriter.
     *
     * Supports all 32 block types including:
     * - FAQ: use 'faqs' array with items having 'headline' and 'content'
     * - Table: use 'rows' array with items having 'cell1', 'cell2', 'cell3'
     * - Image-with-flags: use 'flags' array with items having 'language' and 'url'
     * - Feature: use 'items' array with items having 'headline' and 'content'
     *
     * @param array{type: string, headline?: string, description?: string, items?: array<mixed>|string, faqs?: array<mixed>, rows?: array<mixed>, flags?: array<mixed>} $block
     * @return array{success: bool, message: string, position: int}
     */
    public function addBlock(string $path, array $block, int $position, string $locale = 'de'): array
    {
        // Validate block data before proceeding (includes path-based restrictions)
        $validationError = $this->blockValidator->validateWithPath($block, $path);
        if ($validationError !== null) {
            return ['success' => false, 'message' => $validationError, 'position' => -1];
        }

        try {
            $result = $this->connection->fetchAssociative(
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not found', 'position' => -1];
            }

            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $result['props']);

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            // Get current blocks length
            $lengthNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-length"]/sv:value');
            $currentLength = 0;
            if ($lengthNodes !== false && $lengthNodes->length > 0 && $lengthNodes->item(0)) {
                $currentLength = (int) $lengthNodes->item(0)->nodeValue;
            }

            // Determine insertion index: use position if valid, otherwise append
            $insertIndex = $currentLength; // Default: append at end
            if ($position >= 0 && $position < $currentLength) {
                // Insert at specified position - shift existing blocks up
                $this->shiftBlocksUp($xpath, $xml, $locale, $position, $currentLength);
                $insertIndex = $position;
            } elseif ($position >= $currentLength) {
                // Position beyond current length - append at end
                $insertIndex = $currentLength;
            }

            $rootNode = $xpath->query('/sv:node')->item(0);

            if (!$rootNode) {
                return ['success' => false, 'message' => 'Invalid XML structure', 'position' => -1];
            }

            // Use BlockWriter to add the block (supports all 32 block types)
            $this->blockWriter->addBlock($xml, $rootNode, $locale, $insertIndex, $block);

            // Update blocks length
            if ($lengthNodes !== false && $lengthNodes->length > 0 && $lengthNodes->item(0)) {
                $lengthNodes->item(0)->nodeValue = (string) ($currentLength + 1);
            } else {
                $this->blockWriter->addProperty($xml, $rootNode, "i18n:{$locale}-blocks-length", (string) ($currentLength + 1), 'Long');
            }

            $updatedXml = $xml->saveXML();

            // Update both workspaces
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, self::WORKSPACE_DEFAULT]
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, self::WORKSPACE_LIVE]
            );

            $this->activityLogger->logMcpAction(
                'mcp_block_added',
                $path,
                $locale,
                [
                    'blockType' => $block['type'],
                    'headline' => $block['headline'] ?? null,
                    'position' => $insertIndex,
                ]
            );

            // Invalidate HTTP cache for this page
            $this->invalidatePageCache($path, $locale);


            return ['success' => true, 'message' => 'Block added successfully', 'position' => $insertIndex];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage(), 'position' => -1];
        }
    }

    /**
     * Shift existing blocks up to make room for insertion at a specific position.
     *
     * Renumbers blocks from highest to lowest index to avoid collisions.
     * For example, when inserting at position 1 with 3 blocks:
     *   Block 2 -> Block 3
     *   Block 1 -> Block 2
     *   Position 1 is now free for the new block
     */
    private function shiftBlocksUp(\DOMXPath $xpath, \DOMDocument $xml, string $locale, int $fromPosition, int $currentLength): void
    {
        // Collect all block properties grouped by position
        $blockProperties = [];
        $allProperties = $xpath->query('//sv:property[starts-with(@sv:name, "i18n:' . $locale . '-blocks-")]');

        if ($allProperties === false) {
            return;
        }

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
                    if ($pos >= $fromPosition) {
                        if (!isset($blockProperties[$pos])) {
                            $blockProperties[$pos] = [];
                        }
                        $blockProperties[$pos][] = $prop;
                    }
                }
            }
        }

        // Renumber from highest to lowest to avoid collisions
        for ($i = $currentLength - 1; $i >= $fromPosition; $i--) {
            if (isset($blockProperties[$i])) {
                foreach ($blockProperties[$i] as $prop) {
                    if ($prop instanceof \DOMElement) {
                        $name = $prop->getAttribute('sv:name');
                        // Replace #oldPos with #newPos (only first occurrence to preserve nested indices)
                        $newName = preg_replace('/#' . $i . '(?!\d)/', '#' . ($i + 1), $name, 1);
                        if ($newName !== null) {
                            $prop->setAttribute('sv:name', $newName);
                        }
                    }
                }
            }
        }
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
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not found'];
            }

            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $result['props']);

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
                [$updatedXml, $path, self::WORKSPACE_DEFAULT]
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, self::WORKSPACE_LIVE]
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
                'blocks' => $this->formatCompactBlocks($updatedPage['blocks'] ?? []),
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
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not found'];
            }

            // Copy content to live workspace
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$result['props'], $path, self::WORKSPACE_LIVE]
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
        $this->loadXmlSecurely($xml, $pageProps);
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
            "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_LIVE . "'",
            [$routePath]
        );

        if ($existing) {
            return; // Route already exists
        }

        // Get parent route node ID
        $parentPath = dirname($routePath);
        $parent = $this->connection->fetchAssociative(
            "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_LIVE . "'",
            [$parentPath]
        );

        if (!$parent) {
            // Create parent path recursively if needed
            $this->ensureRouteParentExists($parentPath, $locale);
            $parent = $this->connection->fetchAssociative(
                "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_LIVE . "'",
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
            "VALUES (?, ?, ?, '', '" . self::WORKSPACE_LIVE . "', ?, 'nt:unstructured', ?, ?, ?)",
            [$routePath, $parentPath, $nodeName, $routeUuid, $routeProps, substr_count($routePath, '/'), 0]
        );
    }

    /**
     * Ensure parent route path exists.
     */
    private function ensureRouteParentExists(string $parentPath, string $locale): void
    {
        $existing = $this->connection->fetchAssociative(
            "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_LIVE . "'",
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
            "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_LIVE . "'",
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
            "VALUES (?, ?, ?, '', '" . self::WORKSPACE_LIVE . "', ?, 'nt:unstructured', ?, ?, ?)",
            [$parentPath, $grandparent, $nodeName, $uuid, $props, substr_count($parentPath, '/'), 0]
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
     * Create a new page using direct SQL.
     *
     * @param array{parentPath?: string, title?: string, resourceSegment?: string, seoTitle?: string, seoDescription?: string, publish?: bool, excerptTitle?: string, excerptDescription?: string, excerptImage?: int} $data
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
        $excerptTitle = $data['excerptTitle'] ?? null;
        $excerptDescription = $data['excerptDescription'] ?? null;
        $excerptImage = $data['excerptImage'] ?? null;

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
                "SELECT id, path, props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
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
                "SELECT id FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
                [$path]
            );

            if ($existing) {
                return ['success' => false, 'message' => "Page already exists at: {$path}"];
            }

            // Get next sort order
            $maxOrder = $this->connection->fetchOne(
                "SELECT MAX(sort_order) FROM phpcr_nodes WHERE parent = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
                [$parent['id']]
            );
            $sortOrder = ($maxOrder ?? 0) + 1;

            // Build XML props
            $now = (new \DateTime())->format('Y-m-d\TH:i:s.v+00:00');
            $props = $this->buildPagePropsXml($uuid, $title, $fullUrl, $locale, $now, $seoTitle, $seoDescription, $publish, $excerptTitle, $excerptDescription, $excerptImage);

            // Insert into BOTH workspaces
            foreach ([self::WORKSPACE_DEFAULT, self::WORKSPACE_LIVE] as $workspace) {
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
                    [$path, $parentPath, $nodeName, $workspace, $uuid, $props, $depth, $sortOrder]
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
        bool $published = false,
        ?string $excerptTitle = null,
        ?string $excerptDescription = null,
        ?int $excerptImage = null,
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

        // Excerpt extension
        if ($excerptTitle !== null) {
            $excerptTitleLen = strlen($excerptTitle);
            $xml .= '<sv:property sv:name="i18n:' . $locale . '-excerpt-title" sv:type="String" sv:multi-valued="0"><sv:value length="' . $excerptTitleLen . '">' . htmlspecialchars($excerptTitle, ENT_XML1) . '</sv:value></sv:property>';
        }
        if ($excerptDescription !== null) {
            $excerptDescLen = strlen($excerptDescription);
            $xml .= '<sv:property sv:name="i18n:' . $locale . '-excerpt-description" sv:type="String" sv:multi-valued="0"><sv:value length="' . $excerptDescLen . '">' . htmlspecialchars($excerptDescription, ENT_XML1) . '</sv:value></sv:property>';
        }
        if ($excerptImage !== null) {
            $imageJson = json_encode(['ids' => [$excerptImage]], JSON_UNESCAPED_SLASHES);
            $imageLen = strlen($imageJson);
            $xml .= '<sv:property sv:name="i18n:' . $locale . '-excerpt-images" sv:type="String" sv:multi-valued="0"><sv:value length="' . $imageLen . '">' . $imageJson . '</sv:value></sv:property>';
        }

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
     * Extract blocks from PHPCR XML using BlockExtractor.
     *
     * Supports all 32 block types including those with custom nested names:
     * - FAQ: uses 'faqs' (not 'items'), properties: headline, subline
     * - Table: uses 'rows' (not 'items'), properties: cell1, cell2, cell3
     * - Image-with-flags: uses 'flags', properties: language, url
     *
     * @return array<mixed>
     */
    private function extractBlocks(string $xmlString, string $locale): array
    {
        return $this->blockExtractor->extractBlocks($xmlString, $locale);
    }

    /**
     * Resolve snippet UUID references in blocks to {uuid, title} objects.
     *
     * @param array<mixed> $blocks
     * @return array<mixed>
     */
    private function resolveSnippetReferences(array $blocks, string $locale): array
    {
        if (!$this->snippetService) {
            return $blocks;
        }

        foreach ($blocks as &$block) {
            if (!isset($block['snippets'])) {
                continue;
            }

            // Normalize string snippet to array (defensive: handles edge case
            // where a single UUID was stored as plain string instead of array)
            $snippets = $block['snippets'];
            if (is_string($snippets)) {
                $snippets = [$snippets];
            }

            if (!is_array($snippets)) {
                continue;
            }

            $resolved = [];
            foreach ($snippets as $uuid) {
                if (!is_string($uuid)) {
                    $resolved[] = $uuid;
                    continue;
                }
                $snippet = $this->snippetService->getSnippet($uuid, $locale);
                $resolved[] = $snippet
                    ? ['uuid' => $uuid, 'title' => $snippet['title']]
                    : ['uuid' => $uuid, 'title' => null];
            }
            $block['snippets'] = $resolved;
        }

        return $blocks;
    }

    /**
     * Update an existing block using BlockWriter.
     *
     * Supports all 32 block types including nested updates for:
     * - FAQ: update 'faqs' array
     * - Table: update 'rows' array
     * - Feature: update 'items' array
     *
     * @param array<string, mixed> $blockData
     * @return array{success: bool, message: string, blocks?: array<int, array<string, mixed>>}
     */
    public function updateBlock(string $path, int $position, array $blockData, string $locale = 'de'): array
    {
        try {
            $result = $this->connection->fetchAssociative(
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not found'];
            }

            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $result['props']);

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

            // Get current block type
            $typeNodes = $xpath->query('//sv:property[@sv:name="i18n:' . $locale . '-blocks-type#' . $position . '"]/sv:value');
            $blockType = 'hl-des'; // fallback
            if ($typeNodes !== false && $typeNodes->length > 0 && $typeNodes->item(0)) {
                $blockType = $typeNodes->item(0)->nodeValue ?? 'hl-des';
            }

            // Use BlockWriter to update the block (supports all 32 block types)
            $this->blockWriter->updateBlock($xml, $xpath, $locale, $position, $blockType, $blockData);

            $updatedXml = $xml->saveXML();

            // Update both workspaces for immediate visibility
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, self::WORKSPACE_DEFAULT]
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, self::WORKSPACE_LIVE]
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
                'blocks' => $this->formatCompactBlocks($updatedPage['blocks'] ?? []),
            ];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Update excerpt data (title, description, image) on an existing page.
     *
     * @param array{excerptTitle?: string|null, excerptDescription?: string|null, excerptImage?: int|null} $data
     * @return array{success: bool, message: string, excerpt?: array{title: string|null, description: string|null, images: array<mixed>|null}}
     */
    public function updateExcerpt(string $path, array $data, string $locale = 'de'): array
    {
        try {
            $result = $this->connection->fetchAssociative(
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not found'];
            }

            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $result['props']);

            $xpath = new DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            $rootNode = $xpath->query('/sv:node')->item(0);
            if (!$rootNode) {
                return ['success' => false, 'message' => 'Invalid XML structure'];
            }

            $fieldMap = [
                'excerptTitle' => "i18n:{$locale}-excerpt-title",
                'excerptDescription' => "i18n:{$locale}-excerpt-description",
                'excerptImage' => "i18n:{$locale}-excerpt-images",
            ];

            $updatedFields = [];

            foreach ($fieldMap as $dataKey => $propertyName) {
                if (!array_key_exists($dataKey, $data)) {
                    continue;
                }

                $value = $data[$dataKey];

                // Encode image as JSON
                if ($dataKey === 'excerptImage' && $value !== null) {
                    $value = json_encode(['ids' => [(int) $value]], JSON_UNESCAPED_SLASHES);
                }

                $existingNodes = $xpath->query('//sv:property[@sv:name="' . $propertyName . '"]');

                if ($value === null) {
                    // Remove the property if explicitly null
                    if ($existingNodes !== false && $existingNodes->length > 0 && $existingNodes->item(0)) {
                        $node = $existingNodes->item(0);
                        if ($node->parentNode) {
                            $node->parentNode->removeChild($node);
                        }
                    }
                    $updatedFields[] = $dataKey;
                } elseif ($existingNodes !== false && $existingNodes->length > 0 && $existingNodes->item(0)) {
                    // Update existing property
                    $propertyNode = $existingNodes->item(0);
                    $valueNodes = $xpath->query('sv:value', $propertyNode);
                    if ($valueNodes !== false && $valueNodes->length > 0 && $valueNodes->item(0)) {
                        $valueNode = $valueNodes->item(0);
                        $valueNode->nodeValue = htmlspecialchars((string) $value, ENT_XML1);
                        if ($valueNode instanceof \DOMElement) {
                            $valueNode->setAttribute('length', (string) strlen((string) $value));
                        }
                    }
                    $updatedFields[] = $dataKey;
                } else {
                    // Create new property
                    $property = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:property');
                    $property->setAttribute('sv:name', $propertyName);
                    $property->setAttribute('sv:type', 'String');
                    $property->setAttribute('sv:multi-valued', '0');

                    $valueEl = $xml->createElementNS('http://www.jcp.org/jcr/sv/1.0', 'sv:value');
                    $valueEl->setAttribute('length', (string) strlen((string) $value));
                    $valueEl->appendChild($xml->createTextNode((string) $value));
                    $property->appendChild($valueEl);

                    $rootNode->appendChild($property);
                    $updatedFields[] = $dataKey;
                }
            }

            $updatedXml = $xml->saveXML();

            // Update both workspaces
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, self::WORKSPACE_DEFAULT]
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, self::WORKSPACE_LIVE]
            );

            $this->activityLogger->logMcpAction(
                'mcp_excerpt_updated',
                $path,
                $locale,
                ['fields' => $updatedFields]
            );

            $this->invalidatePageCache($path, $locale);

            // Read back the current excerpt values
            $excerptTitle = $this->extractPropertyFromXml($updatedXml, "i18n:{$locale}-excerpt-title");
            $excerptDescription = $this->extractPropertyFromXml($updatedXml, "i18n:{$locale}-excerpt-description");
            $excerptImages = $this->extractPropertyFromXml($updatedXml, "i18n:{$locale}-excerpt-images");

            return [
                'success' => true,
                'message' => 'Excerpt updated successfully',
                'excerpt' => [
                    'title' => $excerptTitle,
                    'description' => $excerptDescription,
                    'images' => $excerptImages ? json_decode($excerptImages, true) : null,
                ],
            ];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Append items to an existing block without replacing existing content.
     *
     * Useful for adding new FAQ entries, table rows, or feature items
     * without having to resend all existing items.
     *
     * @param array<array<string, mixed>> $newItems Items to append
     * @return array{success: bool, message: string, items_added?: int, total_items?: int}
     */
    public function appendToBlock(string $path, int $position, array $newItems, string $locale = 'de'): array
    {
        try {
            // Get current page and block
            $page = $this->getPage($path, $locale);
            if (!$page) {
                return ['success' => false, 'message' => 'Page not found'];
            }

            $blocks = $page['blocks'];
            if ($position < 0 || $position >= count($blocks)) {
                return ['success' => false, 'message' => "Block position {$position} out of range"];
            }

            $block = $blocks[$position];
            $blockType = $block['type'] ?? 'unknown';

            // Determine the nested key based on block type
            $nestedKey = match ($blockType) {
                'faq' => 'faqs',
                'table' => 'rows',
                'image-with-flags' => 'flags',
                default => 'items',
            };

            // Get existing items
            $existingItems = $block[$nestedKey] ?? [];
            if (!is_array($existingItems)) {
                $existingItems = [];
            }

            // Merge existing and new items
            $mergedItems = array_merge($existingItems, $newItems);

            // Update the block with merged items
            $blockData = [$nestedKey => $mergedItems];

            $result = $this->updateBlock($path, $position, $blockData, $locale);

            if ($result['success']) {
                return [
                    'success' => true,
                    'message' => 'Items appended successfully',
                    'items_added' => count($newItems),
                    'total_items' => count($mergedItems),
                    'blocks' => $this->formatCompactBlocks($result['blocks'] ?? []),
                ];
            }

            return $result;

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
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_DEFAULT . "'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not found'];
            }

            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $result['props']);

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
                [$updatedXml, $path, self::WORKSPACE_DEFAULT]
            );
            $this->connection->executeStatement(
                "UPDATE phpcr_nodes SET props = ? WHERE path = ? AND workspace_name = ?",
                [$updatedXml, $path, self::WORKSPACE_LIVE]
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
                'blocks' => $this->formatCompactBlocks($updatedPage['blocks'] ?? []),
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
                "SELECT props FROM phpcr_nodes WHERE path = ? AND workspace_name = '" . self::WORKSPACE_LIVE . "'",
                [$path]
            );

            if (!$result) {
                return ['success' => false, 'message' => 'Page not published or not found'];
            }

            $xml = new DOMDocument();
            $this->loadXmlSecurely($xml, $result['props']);

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
                [$updatedXml, $path, self::WORKSPACE_LIVE]
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
     * Delete a page completely.
     *
     * Uses DocumentManager for proper deletion (same as Sulu admin API).
     * This removes the page from both workspaces, routes, and search index.
     *
     * @param string $identifier UUID or path of the page
     * @param string $locale Locale for search deindexing
     * @return array{success: bool, message: string}
     */
    public function deletePage(string $identifier, string $locale = 'de'): array
    {
        if (!$this->documentManager) {
            return ['success' => false, 'message' => 'DocumentManager not available'];
        }

        try {
            // Find document by UUID or path
            $document = $this->documentManager->find($identifier, $locale);

            if ($document === null) {
                return ['success' => false, 'message' => 'Page not found: ' . $identifier];
            }

            // Get path for logging before deletion
            $path = method_exists($document, 'getPath') ? $document->getPath() : $identifier;


            // Remove the document (this handles both workspaces and routes)
            $this->documentManager->remove($document);
            $this->documentManager->flush();

            $this->activityLogger->logMcpAction(
                'mcp_page_deleted',
                $path,
                $locale,
                ['identifier' => $identifier]
            );

            return ['success' => true, 'message' => 'Page deleted successfully'];

        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    // ==========================================================================
    // Page Discovery Methods
    // ==========================================================================

    /**
     * Search pages by title (case-insensitive).
     *
     * @return array<int, array{path: string, url: string|null, fullUrl: string|null, title: string, template: string, published: bool, state: string}>
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
     * @return array{path: string, url: string|null, fullUrl: string|null, title: string, template: string, published: bool, state: string, children: array<mixed>}|null
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
     * @return array{path: string, url: string|null, fullUrl: string|null, title: string, template: string, published: bool, state: string}|null
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
     * Load XML securely with XXE protection.
     *
     * Disables external entity loading to prevent XXE attacks.
     */
    private function loadXmlSecurely(DOMDocument $xml, string $xmlString): bool
    {
        $previousValue = libxml_use_internal_errors(true);
        $result = $xml->loadXML($xmlString, LIBXML_NONET | LIBXML_NOENT);
        libxml_use_internal_errors($previousValue);
        return $result;
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

    /**
     * Copy a page with all its blocks to a new location.
     *
     * Reads the source page, creates a new page with the same excerpt data,
     * then copies all blocks. Creates as draft first, only publishes if
     * all blocks were successfully copied and publish=true.
     *
     * @param array{sourcePath?: string, parentPath?: string, title?: string, resourceSegment?: string, seoTitle?: string, seoDescription?: string, excerptTitle?: string, excerptDescription?: string, excerptImage?: int, publish?: bool} $data
     * @return array{success: bool, message: string, path?: string, uuid?: string, url?: string, blocksCopied?: int, blocksFailed?: int, errors?: array<string>}
     */
    public function copyPage(array $data, string $locale = 'de'): array
    {
        $sourcePath = $data['sourcePath'] ?? '';
        if (empty($sourcePath)) {
            return ['success' => false, 'message' => 'sourcePath is required'];
        }

        // Get source page
        $sourcePage = $this->getPage($sourcePath, $locale);
        if ($sourcePage === null) {
            return ['success' => false, 'message' => "Source page not found: {$sourcePath}"];
        }

        $title = $data['title'] ?? '';
        $resourceSegment = $data['resourceSegment'] ?? '';

        // Build create data, inheriting excerpt from source unless overridden
        $createData = [
            'parentPath' => $data['parentPath'] ?? dirname($sourcePath),
            'title' => $title,
            'resourceSegment' => $resourceSegment,
            'seoTitle' => $data['seoTitle'] ?? null,
            'seoDescription' => $data['seoDescription'] ?? null,
            'excerptTitle' => $data['excerptTitle'] ?? $sourcePage['excerpt']['title'] ?? null,
            'excerptDescription' => $data['excerptDescription'] ?? $sourcePage['excerpt']['description'] ?? null,
            'excerptImage' => $data['excerptImage'] ?? null,
            'publish' => false, // Always create as draft first
        ];

        // Inherit excerpt image from source if not overridden
        if ($createData['excerptImage'] === null && isset($sourcePage['excerpt']['images']['ids'][0])) {
            $createData['excerptImage'] = $sourcePage['excerpt']['images']['ids'][0];
        }

        // Create the new page
        $createResult = $this->createPage($createData, $locale);
        if (!$createResult['success']) {
            return $createResult;
        }

        $newPath = $createResult['path'];
        $blocksCopied = 0;
        $blocksFailed = 0;
        $errors = [];

        // Copy blocks from source
        foreach ($sourcePage['blocks'] as $position => $block) {
            $cleanBlock = $this->cleanBlockForCopy($block);
            $addResult = $this->addBlock($newPath, $cleanBlock, $position, $locale);
            if ($addResult['success']) {
                $blocksCopied++;
            } else {
                $blocksFailed++;
                $errors[] = "Block {$position} ({$block['type']}): {$addResult['message']}";
            }
        }

        // Publish only if requested AND all blocks succeeded
        $publish = $data['publish'] ?? false;
        if ($publish && $blocksFailed === 0) {
            $this->publishPage($newPath, $locale);
        }

        $this->activityLogger->logMcpAction(
            'mcp_page_copied',
            $newPath,
            $locale,
            [
                'sourcePath' => $sourcePath,
                'blocksCopied' => $blocksCopied,
                'blocksFailed' => $blocksFailed,
            ]
        );

        $result = [
            'success' => true,
            'message' => "Page copied successfully ({$blocksCopied} blocks copied" . ($blocksFailed > 0 ? ", {$blocksFailed} failed" : '') . ')',
            'path' => $newPath,
            'uuid' => $createResult['uuid'],
            'url' => $createResult['url'],
            'blocksCopied' => $blocksCopied,
            'blocksFailed' => $blocksFailed,
        ];

        if (!empty($errors)) {
            $result['errors'] = $errors;
        }

        return $result;
    }

    /**
     * Convert resolved snippet references back to raw UUID arrays.
     *
     * getPage() resolves snippet UUIDs to {uuid, title} objects,
     * but addBlock() expects raw UUID arrays. This converts back.
     *
     * @param array<mixed> $block
     * @return array<mixed>
     */
    private function unresolveSnippetReferences(array $block): array
    {
        if (!isset($block['snippets'])) {
            return $block;
        }

        // Normalize string snippet to array (handles edge case where
        // BlockExtractor returned a single UUID as plain string)
        $snippets = $block['snippets'];
        if (is_string($snippets)) {
            $snippets = [$snippets];
        }

        if (!is_array($snippets)) {
            return $block;
        }

        $rawUuids = [];
        foreach ($snippets as $snippet) {
            if (is_array($snippet) && isset($snippet['uuid'])) {
                $rawUuids[] = $snippet['uuid'];
            } elseif (is_string($snippet)) {
                $rawUuids[] = $snippet;
            }
        }

        $block['snippets'] = $rawUuids;
        return $block;
    }

    /**
     * Clean a block for copying by removing read-only fields
     * and converting resolved references back to raw values.
     *
     * @param array<mixed> $block
     * @return array<mixed>
     */
    private function cleanBlockForCopy(array $block): array
    {
        // Remove read-only position field added by BlockExtractor
        unset($block['position']);

        // Convert resolved snippet references back to raw UUIDs
        $block = $this->unresolveSnippetReferences($block);

        return $block;
    }

    /**
     * Check if a page exists in the live workspace.
     */
    private function isPagePublished(string $path): bool
    {
        $result = $this->connection->fetchAssociative(
            "SELECT 1 FROM phpcr_nodes WHERE path = ? AND workspace_name = ?",
            [$path, self::WORKSPACE_LIVE]
        );
        return $result !== false;
    }

    /**
     * Extract publication metadata from PHPCR XML properties.
     *
     * @return array{published: bool, state: string, publishedAt: string|null, createdAt: string|null, modifiedAt: string|null}
     */
    private function extractPublicationMeta(string $props, string $locale, bool $existsInLive): array
    {
        $state = $this->extractPropertyFromXml($props, "i18n:{$locale}-state");
        $publishedAt = $this->extractPropertyFromXml($props, "i18n:{$locale}-published");
        $createdAt = $this->extractPropertyFromXml($props, "i18n:{$locale}-created");
        $changedAt = $this->extractPropertyFromXml($props, "i18n:{$locale}-changed");

        // Determine state string
        $stateValue = (int) ($state ?? 1);
        $stateString = match (true) {
            $stateValue === 2 && $existsInLive => 'published',
            $publishedAt !== null => 'unpublished',  // Was published before
            default => 'draft',
        };

        return [
            'published' => $stateValue === 2 && $existsInLive,
            'state' => $stateString,
            'publishedAt' => $publishedAt,
            'createdAt' => $createdAt,
            'modifiedAt' => $changedAt,
        ];
    }

    /**
     * Format blocks as compact metadata (position + type + headline only).
     *
     * @param array<mixed> $blocks Full block data from getPage()
     * @return array<int, array{position: int, type: string, headline?: string, faqs_count?: int, rows_count?: int, items_count?: int}>
     */
    public function formatCompactBlocks(array $blocks): array
    {
        $compact = [];
        foreach ($blocks as $index => $block) {
            $entry = [
                'position' => $block['position'] ?? $index,
                'type' => $block['type'] ?? 'unknown',
            ];
            if (!empty($block['headline'])) {
                $entry['headline'] = $block['headline'];
            }
            if (isset($block['faqs']) && is_array($block['faqs'])) {
                $entry['faqs_count'] = count($block['faqs']);
            }
            if (isset($block['rows']) && is_array($block['rows'])) {
                $entry['rows_count'] = count($block['rows']);
            }
            if (isset($block['items']) && is_array($block['items'])) {
                $entry['items_count'] = count($block['items']);
            }
            $compact[] = $entry;
        }
        return $compact;
    }
}
