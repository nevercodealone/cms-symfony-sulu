<?php

declare(strict_types=1);

namespace App\Command\MCP;

use App\Sulu\Service\PageService;
use Mcp\Schema\Enum\ProtocolVersion;
use Mcp\Server;
use Mcp\Server\Transport\StdioTransport;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\HttpClient\HttpClient;

#[AsCommand(
    name: 'mcp:server',
    description: 'Run MCP server for Claude Code integration'
)]
class McpServerCommand extends Command
{
    public function __construct(
        private PageService $pageService,
    ) {
        parent::__construct();
    }

    /**
     * STDIO transport provides inherent security - only local MCP client can connect.
     * Per MCP spec: "MCP servers running locally SHOULD use stdio transport to limit access"
     *
     * @see https://modelcontextprotocol.io/specification/draft/basic/security_best_practices
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $server = Server::builder()
            ->setProtocolVersion(ProtocolVersion::V2024_11_05)
            ->setServerInfo(
                name: 'sulu-nca',
                version: '1.0.0',
                description: 'Sulu CMS Content Management for Never Code Alone'
            )
            ->setInstructions($this->getInstructions())
            ->addTool(
                handler: fn (string $locale = 'de', string $pathPrefix = '/cmf/example/contents') => $this->pageService->listPages($locale, $pathPrefix),
                name: 'sulu-page-list',
                description: 'List Sulu CMS pages under a path prefix',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [
                        'locale' => ['type' => 'string', 'description' => 'Language code (de, en)', 'default' => 'de'],
                        'pathPrefix' => ['type' => 'string', 'description' => 'Path prefix to search', 'default' => '/cmf/example/contents'],
                    ],
                ],
            )
            ->addTool(
                handler: fn (string $path, string $locale = 'de') => $this->pageService->getPage($path, $locale),
                name: 'sulu-page-get',
                description: 'Get Sulu page content including all blocks',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [
                        'path' => ['type' => 'string', 'description' => 'Full page path (e.g., /cmf/example/contents/blog/my-post)'],
                        'locale' => ['type' => 'string', 'description' => 'Language code', 'default' => 'de'],
                    ],
                    'required' => ['path'],
                ],
            )
            ->addTool(
                handler: fn (string $pagePath, string $blockType, string $headline, string $content, int $position = 0, string $locale = 'de') =>
                    $this->pageService->addBlock($pagePath, $this->buildBlock($blockType, $headline, $content), $position, $locale),
                name: 'sulu-block-add',
                description: 'Add a content block to a Sulu page',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [
                        'pagePath' => ['type' => 'string', 'description' => 'Target page path'],
                        'blockType' => ['type' => 'string', 'description' => 'Block type: hl-des (default), html, headline-paragraphs, code, hero'],
                        'headline' => ['type' => 'string', 'description' => 'Block headline'],
                        'content' => ['type' => 'string', 'description' => 'HTML content'],
                        'position' => ['type' => 'integer', 'description' => 'Insert position (0-based)', 'default' => 0],
                        'locale' => ['type' => 'string', 'description' => 'Language code', 'default' => 'de'],
                    ],
                    'required' => ['pagePath', 'blockType', 'headline', 'content'],
                ],
            )
            ->addTool(
                handler: fn (string $pagePath, int $position, string $locale = 'de') =>
                    $this->pageService->removeBlock($pagePath, $position, $locale),
                name: 'sulu-block-remove',
                description: 'Remove a content block from a Sulu page',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [
                        'pagePath' => ['type' => 'string', 'description' => 'Target page path'],
                        'position' => ['type' => 'integer', 'description' => 'Block position to remove (0-based)'],
                        'locale' => ['type' => 'string', 'description' => 'Language code', 'default' => 'de'],
                    ],
                    'required' => ['pagePath', 'position'],
                ],
            )
            ->addTool(
                handler: fn (string $path, string $locale = 'de') => $this->pageService->publishPage($path, $locale),
                name: 'sulu-page-publish',
                description: 'Publish a Sulu page to the live website',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [
                        'path' => ['type' => 'string', 'description' => 'Page path to publish'],
                        'locale' => ['type' => 'string', 'description' => 'Language code', 'default' => 'de'],
                    ],
                    'required' => ['path'],
                ],
            )
            ->addTool(
                handler: fn () => $this->getBlockTypes(),
                name: 'sulu-block-types',
                description: 'List available Sulu block types',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [],
                ],
            )
            ->addTool(
                handler: fn (string $query, string $locale = 'de', string $pathPrefix = '/cmf/example/contents') =>
                    $this->pageService->searchPages($query, $locale, $pathPrefix),
                name: 'sulu-page-search',
                description: 'Search pages by title (case-insensitive). Use to find pages without knowing exact path.',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [
                        'query' => ['type' => 'string', 'description' => 'Search term to match in page titles'],
                        'locale' => ['type' => 'string', 'description' => 'Language code', 'default' => 'de'],
                        'pathPrefix' => ['type' => 'string', 'description' => 'Path prefix to search within', 'default' => '/cmf/example/contents'],
                    ],
                    'required' => ['query'],
                ],
            )
            ->addTool(
                handler: fn (string $rootPath, string $locale = 'de', int $depth = 2) =>
                    $this->pageService->getPageTree($rootPath, $locale, $depth),
                name: 'sulu-page-tree',
                description: 'Get hierarchical page tree structure. Use to understand page hierarchy and find parent paths for new pages.',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [
                        'rootPath' => ['type' => 'string', 'description' => 'Root path to build tree from'],
                        'locale' => ['type' => 'string', 'description' => 'Language code', 'default' => 'de'],
                        'depth' => ['type' => 'integer', 'description' => 'Maximum depth of children to include', 'default' => 2],
                    ],
                    'required' => ['rootPath'],
                ],
            )
            ->addTool(
                handler: fn (string $url, string $locale = 'de', string $pathPrefix = '/cmf/example/contents') =>
                    $this->pageService->findPageByUrl($url, $locale, $pathPrefix),
                name: 'sulu-page-find-by-url',
                description: 'Find page by frontend URL. Converts URL like /de/glossar/php to PHPCR path.',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [
                        'url' => ['type' => 'string', 'description' => 'Frontend URL (e.g., /php-glossar or /de/php-glossar)'],
                        'locale' => ['type' => 'string', 'description' => 'Language code', 'default' => 'de'],
                        'pathPrefix' => ['type' => 'string', 'description' => 'Path prefix to search within', 'default' => '/cmf/example/contents'],
                    ],
                    'required' => ['url'],
                ],
            )
            ->addTool(
                handler: fn (string $url) => $this->fetchUrl($url),
                name: 'sulu-url-fetch',
                description: 'Fetch URL content for Claude to process and generate content from',
                inputSchema: [
                    'type' => 'object',
                    'properties' => [
                        'url' => ['type' => 'string', 'description' => 'URL to fetch content from'],
                    ],
                    'required' => ['url'],
                ],
            )
            ->build();

        $transport = new StdioTransport();
        $server->run($transport);

        return Command::SUCCESS;
    }

    private function getInstructions(): string
    {
        return <<<'INSTRUCTIONS'
Sulu CMS Content Management for Never Code Alone (nevercodealone.de).

YOU ARE THE AI - Generate content yourself, don't call external AI APIs.

WORKFLOW FOR CONTENT CREATION:
1. Use sulu-page-search to find existing pages by title
2. Use sulu-page-tree to understand page hierarchy
3. Use sulu-page-find-by-url to convert URLs to paths
4. Use sulu-page-list for full page listing
5. Generate content in German for PHP/Symfony developers
6. Use sulu-block-add to add content blocks
7. Use sulu-page-publish to make live

PAGE DISCOVERY TOOLS:
- sulu-page-search: Find pages by title (e.g., search for "PHP" to find PHP-related pages)
- sulu-page-tree: Get hierarchical structure (useful for finding parent paths)
- sulu-page-find-by-url: Convert frontend URL to PHPCR path

CONTENT GUIDELINES:
- Target: German PHP/Symfony developers
- Language: German (Deutsch)
- Style: Professional, technical, practical
- Include code examples where relevant
- Use SEO-friendly structure with clear headings

BLOCK TYPES:
- headline-paragraphs: PREFERRED for tutorials/docs with mixed text and code. Uses items array.
- hl-des: Headline + description (simple content)
- html: Raw HTML content
- code: Standalone code snippets
- hero: Page headers

CRITICAL - headline-paragraphs STRUCTURE:
The "items" parameter must be a JSON STRING containing an array of items.
Each item has "type": "description" (for HTML text) or "type": "code" (for code blocks).

CORRECT items format (JSON string):
"[{\"type\":\"description\",\"content\":\"<p>First step:</p>\"},{\"type\":\"code\",\"code\":\"composer require x\",\"language\":\"bash\"},{\"type\":\"description\",\"content\":\"<p>Next step:</p>\"}]"

Item types:
- description: {"type":"description","content":"<p>HTML here</p>"}
- code: {"type":"code","code":"echo 1;","language":"php"}

Code languages: php, bash, javascript, html, css, xml, yaml, json

COMMON MISTAKES TO AVOID:
1. Do NOT embed <pre><code> in HTML content - use separate code items
2. Do NOT forget "language" field for code items
3. Do NOT include <?php tags in PHP code - block is already marked as PHP
4. Do NOT forget to call sulu-page-publish after changes

URL RESEARCH:
- Use sulu-url-fetch to get URL content
- Process and summarize in German
- Never copy content verbatim
INSTRUCTIONS;
    }

    /**
     * @return array<string, string>
     */
    private function getBlockTypes(): array
    {
        return [
            'headline-paragraphs' => 'Headline with description paragraphs - main content block',
            'code' => 'Code block for code snippets',
            'hero' => 'Hero section for page headers',
            'faq' => 'FAQ accordion for Q&A',
            'table' => 'Data table',
            'image' => 'Single image',
            'button' => 'Button/CTA',
            'contact' => 'Contact information',
            'feature' => 'Feature showcase',
        ];
    }

    /**
     * @return array{type: string, settings?: array<mixed>, headline?: string, description?: string, items?: array<mixed>, code?: string, html?: string}
     */
    private function buildBlock(string $type, string $headline, string $content): array
    {
        return match ($type) {
            'hl-des' => [
                'type' => 'hl-des',
                'headline' => $headline,
                'description' => $content,
            ],
            'html' => [
                'type' => 'html',
                'html' => $content,
            ],
            'headline-paragraphs' => [
                'type' => 'headline-paragraphs',
                'settings' => [],
                'headline' => $headline,
                'items' => [
                    ['type' => 'description', 'settings' => [], 'description' => $content],
                ],
            ],
            'code' => [
                'type' => 'code',
                'settings' => [],
                'code' => $content,
            ],
            'hero' => [
                'type' => 'hero',
                'settings' => [],
                'headline' => $headline,
                'description' => $content,
            ],
            default => [
                'type' => 'hl-des',
                'headline' => $headline,
                'description' => $content,
            ],
        };
    }

    /**
     * @return array{url: string, content: string, fetched_at: string}
     */
    private function fetchUrl(string $url): array
    {
        try {
            $client = HttpClient::create();
            $response = $client->request('GET', $url);
            $html = $response->getContent();

            // Extract text content
            $text = strip_tags($html);
            $text = preg_replace('/\s+/', ' ', $text) ?? $text;
            $text = trim($text);

            // Limit for token efficiency
            $text = substr($text, 0, 50000);

            return [
                'url' => $url,
                'content' => $text,
                'fetched_at' => date('c'),
            ];
        } catch (\Exception $e) {
            return [
                'url' => $url,
                'content' => 'Error fetching URL: ' . $e->getMessage(),
                'fetched_at' => date('c'),
            ];
        }
    }
}
