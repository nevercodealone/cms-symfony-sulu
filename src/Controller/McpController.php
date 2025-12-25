<?php

declare(strict_types=1);

namespace App\Controller;

use App\Sulu\Service\PageService;
use Mcp\Schema\Enum\ProtocolVersion;
use Mcp\Server;
use Mcp\Server\Transport\StreamableHttpTransport;
use Nyholm\Psr7\Factory\Psr17Factory;
use Psr\Log\LoggerInterface;
use Symfony\Bridge\PsrHttpMessage\Factory\HttpFoundationFactory;
use Symfony\Bridge\PsrHttpMessage\Factory\PsrHttpFactory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * MCP HTTP Endpoint for Claude Chat integration.
 *
 * @see https://modelcontextprotocol.io/specification/draft/basic/transports
 * @see https://support.claude.com/en/articles/11503834-building-custom-connectors-via-remote-mcp-servers
 * @see https://symfony.com/doc/current/components/psr7.html
 */
#[Route('/mcp', name: 'mcp_')]
class McpController extends AbstractController
{
    public function __construct(
        private readonly PageService $pageService,
        private readonly LoggerInterface $logger,
        #[Autowire(env: 'default::MCP_SECRET_TOKEN')]
        private readonly ?string $mcpSecretToken = null,
    ) {
    }

    #[Route('', name: 'endpoint', methods: ['GET', 'POST', 'DELETE', 'OPTIONS'])]
    public function endpoint(Request $request): Response
    {
        // Token-based authentication for remote access (optional)
        if ($this->mcpSecretToken !== null && $this->mcpSecretToken !== '') {
            $authHeader = $request->headers->get('Authorization', '');
            $providedToken = str_replace('Bearer ', '', $authHeader);

            if (!hash_equals($this->mcpSecretToken, $providedToken)) {
                return new Response('Unauthorized', Response::HTTP_UNAUTHORIZED, [
                    'WWW-Authenticate' => 'Bearer realm="MCP Server"',
                ]);
            }
        }

        // PSR-7 factories (Symfony best practice)
        $psr17Factory = new Psr17Factory();
        $psrHttpFactory = new PsrHttpFactory(
            $psr17Factory,
            $psr17Factory,
            $psr17Factory,
            $psr17Factory
        );
        $httpFoundationFactory = new HttpFoundationFactory();

        // Convert Symfony Request to PSR-7
        $psrRequest = $psrHttpFactory->createRequest($request);

        // Build MCP server with tools
        $server = $this->buildMcpServer();

        // Create HTTP transport with CORS headers
        $transport = new StreamableHttpTransport(
            request: $psrRequest,
            responseFactory: $psr17Factory,
            streamFactory: $psr17Factory,
            logger: $this->logger,
        );

        // Run server and get PSR-7 response
        $psrResponse = $server->run($transport);

        // Convert PSR-7 Response to Symfony Response
        return $httpFoundationFactory->createResponse($psrResponse);
    }

    private function buildMcpServer(): Server
    {
        return Server::builder()
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
                        'path' => ['type' => 'string', 'description' => 'Full page path'],
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
                        'blockType' => ['type' => 'string', 'description' => 'Block type: headline-paragraphs, hl-des, html, code, hero'],
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
                        'position' => ['type' => 'integer', 'description' => 'Block position to remove'],
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
            ->build();
    }

    /**
     * @return array{type: string, headline?: string, description?: string, items?: array<mixed>}
     */
    private function buildBlock(string $type, string $headline, string $content): array
    {
        return match ($type) {
            'hl-des' => [
                'type' => 'hl-des',
                'headline' => $headline,
                'description' => $content,
            ],
            'headline-paragraphs' => [
                'type' => 'headline-paragraphs',
                'headline' => $headline,
                'items' => [
                    ['type' => 'description', 'description' => $content],
                ],
            ],
            default => [
                'type' => 'headline-paragraphs',
                'headline' => $headline,
                'items' => [
                    ['type' => 'description', 'description' => $content],
                ],
            ],
        };
    }

    private function getInstructions(): string
    {
        return <<<'INSTRUCTIONS'
Sulu CMS Content Management for Never Code Alone (nevercodealone.de).

Generate content in German for PHP/Symfony developers.
Use headline-paragraphs block type for content.
INSTRUCTIONS;
    }
}
