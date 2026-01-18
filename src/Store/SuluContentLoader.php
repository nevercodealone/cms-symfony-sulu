<?php

declare(strict_types=1);

namespace App\Store;

use Psr\Log\LoggerInterface;
use Sulu\Component\Content\Compat\StructureInterface;
use Sulu\Component\Content\Mapper\ContentMapperInterface;
use Sulu\Component\Webspace\Manager\WebspaceManagerInterface;
use Symfony\AI\Store\Document\LoaderInterface;
use Symfony\AI\Store\Document\Metadata;
use Symfony\AI\Store\Document\TextDocument;
use Symfony\Component\Uid\Uuid;

final readonly class SuluContentLoader implements LoaderInterface
{
    public function __construct(
        private ContentMapperInterface $contentMapper,
        private WebspaceManagerInterface $webspaceManager,
        private LoggerInterface $logger,
    ) {
    }

    /**
     * @param string $source   Locale to load (e.g., 'de' or 'en')
     * @param array<string, mixed>  $options  Options: limit, webspace
     *
     * @return iterable<TextDocument>
     */
    public function load(string $source, array $options = []): iterable
    {
        return $this->__invoke($source, $options);
    }

    /**
     * @param string $source   Locale to load (e.g., 'de' or 'en')
     * @param array<string, mixed>  $options  Options: limit, webspace
     *
     * @return iterable<TextDocument>
     */
    public function __invoke(string $source, array $options = []): iterable
    {
        $locale = $source;
        $limit = $options['limit'] ?? 1000;
        $webspaceKey = $options['webspace'] ?? 'example';

        $this->logger->info(sprintf('Loading Sulu content for locale "%s" in webspace "%s"', $locale, $webspaceKey));

        $count = 0;
        $errors = 0;

        // Load pages using a safer approach with individual error handling
        $pageGenerator = $this->loadPagesWithErrorHandling($webspaceKey, $locale, $limit);

        foreach ($pageGenerator as $pageResult) {
            if ($count >= $limit) {
                break;
            }

            if ($pageResult['error']) {
                $errors++;
                $this->logger->debug(sprintf('Error loading page: %s', $pageResult['error']));
                continue;
            }

            $page = $pageResult['page'];
            if ($page === null) {
                continue;
            }

            try {
                yield from $this->extractDocumentsFromPage($page, $locale);
                $count++;
            } catch (\Exception $e) {
                $errors++;
                $this->logger->debug(sprintf('Error extracting content from page: %s', $e->getMessage()));
                continue;
            }
        }

        if ($errors > 0) {
            $this->logger->warning(sprintf('Skipped %d pages due to errors', $errors));
        }

        $this->logger->info(sprintf('Loaded %d pages from Sulu', $count));
    }

    /**
     * Load pages with individual error handling per page
     *
     * @return iterable<array{page: ?StructureInterface, error: ?string}>
     */
    private function loadPagesWithErrorHandling(string $webspaceKey, string $locale, int $limit): iterable
    {
        // Get the webspace to find the root page
        $webspace = $this->webspaceManager->findWebspaceByKey($webspaceKey);
        if (!$webspace) {
            yield ['page' => null, 'error' => sprintf('Webspace "%s" not found', $webspaceKey)];
            return;
        }

        // Load the homepage first
        try {
            $homepage = $this->contentMapper->loadStartPage($webspaceKey, $locale);
            if ($homepage) {
                yield ['page' => $homepage, 'error' => null];
            }
        } catch (\Exception $e) {
            yield ['page' => null, 'error' => sprintf('Error loading homepage: %s', $e->getMessage())];
        }

        // Load children with individual error handling
        yield from $this->loadChildrenSafely($webspaceKey, $locale, null, $limit);
    }

    /**
     * Load child pages with error handling per page
     *
     * @return iterable<array{page: ?StructureInterface, error: ?string}>
     */
    private function loadChildrenSafely(string $webspaceKey, string $locale, ?string $parentUuid, int $limit, int $depth = 0): iterable
    {
        if ($depth > 10) {
            return; // Prevent infinite recursion
        }

        $children = [];
        try {
            $children = $this->contentMapper->loadByParent(
                $parentUuid,
                $webspaceKey,
                $locale,
                1, // depth
                false, // flat
                true, // ignoreExceptions
                true // excludeGhosts
            );
        } catch (\Throwable $e) {
            // Catch both Exceptions and Errors (like TypeError)
            yield ['page' => null, 'error' => sprintf('Error loading children: %s', $e->getMessage())];
            return;
        }

        if (!is_array($children)) {
            return;
        }

        foreach ($children as $child) {
            if ($child === null) {
                continue;
            }

            // Validate the child structure
            try {
                $key = $child->getKey();
                if (empty($key)) {
                    yield ['page' => null, 'error' => 'Page has empty structure key'];
                    continue;
                }

                // Try to access the UUID to validate the structure
                $childUuid = $child->getUuid();

                yield ['page' => $child, 'error' => null];

                // Load grandchildren
                if ($childUuid) {
                    yield from $this->loadChildrenSafely($webspaceKey, $locale, $childUuid, $limit, $depth + 1);
                }
            } catch (\Exception $e) {
                yield ['page' => null, 'error' => sprintf('Error processing page: %s', $e->getMessage())];
            }
        }
    }

    /**
     * Extract TextDocuments from a Sulu page
     *
     * @return iterable<TextDocument>
     */
    private function extractDocumentsFromPage(StructureInterface $page, string $locale): iterable
    {
        $title = $page->getTitle() ?? '';
        $uuid = $page->getUuid();
        $path = $page->getPath() ?? '';
        $template = $page->getKey() ?? 'default';

        // Build URL from resource locator
        $url = '';
        try {
            $resourceLocator = $page->getResourceLocator();
            if ($resourceLocator) {
                $url = 'https://nevercodealone.de' . $resourceLocator;
            }
        } catch (\Exception $e) {
            // Resource locator not available
        }

        $this->logger->debug(sprintf('Processing page: %s (%s)', $title, $uuid));

        // Create metadata for this page
        $metadata = new Metadata([
            'id' => $uuid,
            'title' => $title,
            'url' => $url,
            'path' => $path,
            'locale' => $locale,
            'template' => $template,
            'type' => 'page',
        ]);

        // 1. Yield title as separate document
        if (!empty($title)) {
            yield new TextDocument(Uuid::v4(), $title, $metadata);
        }

        // 2. Extract and yield content from properties
        $content = $this->extractContentFromPage($page);
        if (!empty($content)) {
            yield new TextDocument(Uuid::v4(), $content, $metadata);
        }

        // 3. Extract excerpt/description if available
        $excerpt = $this->extractExcerpt($page);
        if (!empty($excerpt)) {
            yield new TextDocument(Uuid::v4(), $excerpt, $metadata);
        }
    }

    /**
     * Extract text content from page properties and blocks
     */
    private function extractContentFromPage(StructureInterface $page): string
    {
        $contentParts = [];

        try {
            // Iterate through all properties
            foreach ($page->getProperties() as $property) {
                try {
                    $name = $property->getName();
                    $value = $property->getValue();

                    // Skip internal properties
                    if (str_starts_with($name, '_') || $name === 'title') {
                        continue;
                    }

                    $extractedText = $this->extractTextFromValue($value, $name);
                    if (!empty($extractedText)) {
                        $contentParts[] = $extractedText;
                    }
                } catch (\Exception $e) {
                    // Skip problematic properties
                    continue;
                }
            }
        } catch (\Exception $e) {
            $this->logger->debug(sprintf('Error iterating properties: %s', $e->getMessage()));
        }

        return implode("\n\n", $contentParts);
    }

    /**
     * Extract text from various value types
     */
    private function extractTextFromValue(mixed $value, string $propertyName = ''): string
    {
        if (is_string($value)) {
            // Strip HTML tags from rich text
            $text = strip_tags($value);
            $text = html_entity_decode($text, ENT_QUOTES, 'UTF-8');
            $text = preg_replace('/\s+/', ' ', $text);
            return trim($text);
        }

        if (is_array($value)) {
            // Handle blocks
            if ($this->isBlockArray($value)) {
                return $this->extractTextFromBlocks($value);
            }

            // Handle other arrays
            $parts = [];
            foreach ($value as $item) {
                $extracted = $this->extractTextFromValue($item);
                if (!empty($extracted)) {
                    $parts[] = $extracted;
                }
            }
            return implode("\n", $parts);
        }

        return '';
    }

    /**
     * Check if array is a blocks array
     *
     * @param array<mixed> $value
     */
    private function isBlockArray(array $value): bool
    {
        foreach ($value as $item) {
            if (is_array($item) && isset($item['type'])) {
                return true;
            }
        }
        return false;
    }

    /**
     * Extract text from block content
     *
     * @param array<mixed> $blocks
     */
    private function extractTextFromBlocks(array $blocks): string
    {
        $parts = [];

        foreach ($blocks as $block) {
            if (!is_array($block)) {
                continue;
            }

            // Extract text from common block properties
            $textProperties = ['text', 'content', 'description', 'headline', 'title', 'quote'];

            foreach ($textProperties as $prop) {
                if (isset($block[$prop]) && is_string($block[$prop])) {
                    $text = strip_tags($block[$prop]);
                    $text = html_entity_decode($text, ENT_QUOTES, 'UTF-8');
                    $text = preg_replace('/\s+/', ' ', $text);
                    $text = trim($text);
                    if (!empty($text)) {
                        $parts[] = $text;
                    }
                }
            }

            // Handle nested blocks
            if (isset($block['blocks']) && is_array($block['blocks'])) {
                $nestedText = $this->extractTextFromBlocks($block['blocks']);
                if (!empty($nestedText)) {
                    $parts[] = $nestedText;
                }
            }
        }

        return implode("\n", $parts);
    }

    /**
     * Extract excerpt data from page
     */
    private function extractExcerpt(StructureInterface $page): string
    {
        $parts = [];

        try {
            // Try to get excerpt extension data
            $excerptData = $page->getExt('excerpt');

            if (is_array($excerptData)) {
                if (!empty($excerptData['title'])) {
                    $parts[] = $excerptData['title'];
                }
                if (!empty($excerptData['description'])) {
                    $text = strip_tags($excerptData['description']);
                    $parts[] = trim($text);
                }
            }
        } catch (\Exception $e) {
            // Excerpt not available
        }

        return implode("\n", $parts);
    }
}
