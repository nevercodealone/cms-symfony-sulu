<?php

declare(strict_types=1);

namespace App\Command;

use Sulu\Component\Content\Document\Behavior\ResourceSegmentBehavior;
use Sulu\Component\DocumentManager\DocumentManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Base for the DocumentManager-backed page commands the MCP server spawns
 * in a fresh process (see PageService and ConsoleCommandRunner).
 *
 * Contract: exactly one JSON object on stdout with at least `success`;
 * failures carry `errorCode` + `message`. Warnings go to stderr.
 */
abstract class AbstractPageDocumentCommand extends Command
{
    public function __construct(
        protected readonly DocumentManagerInterface $documentManager,
    ) {
        parent::__construct();
    }

    /**
     * @param callable(): array<string, mixed> $operation
     */
    protected function runGuarded(OutputInterface $output, callable $operation, string $failureCode): int
    {
        try {
            $result = $operation();
        } catch (\Throwable $e) {
            $result = [
                'success' => false,
                'errorCode' => $failureCode,
                'message' => $e->getMessage(),
                'exception' => $e::class,
            ];
        }

        $output->writeln(json_encode($result, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?: '{"success":false}');

        return !empty($result['success']) ? Command::SUCCESS : Command::FAILURE;
    }

    /**
     * Find a page document by PHPCR path or UUID; null when it does not exist.
     */
    protected function findDocument(string $identifier, string $locale): ?object
    {
        try {
            return $this->documentManager->find($identifier, $locale);
        } catch (\Throwable) {
            return null;
        }
    }

    /**
     * @return array{path: string|null, uuid: string|null, url: string|null, title: string|null}
     */
    protected function describe(object $document): array
    {
        return [
            'path' => method_exists($document, 'getPath') ? (string) $document->getPath() : null,
            'uuid' => method_exists($document, 'getUuid') ? (string) $document->getUuid() : null,
            'url' => $document instanceof ResourceSegmentBehavior ? (string) $document->getResourceSegment() : null,
            'title' => method_exists($document, 'getTitle') ? (string) $document->getTitle() : null,
        ];
    }

    /**
     * Resource locator of a page's parent ('/' for the homepage / webspace root).
     */
    protected function parentResourceSegment(object $parent): string
    {
        if ($parent instanceof ResourceSegmentBehavior) {
            $segment = (string) $parent->getResourceSegment();

            return $segment !== '' ? $segment : '/';
        }

        return '/';
    }

    /**
     * Full resource locator of a child: parent locator + slug.
     */
    protected function childResourceSegment(object $parent, string $slug): string
    {
        return rtrim($this->parentResourceSegment($parent), '/') . '/' . ltrim($slug, '/');
    }

    /**
     * @return array{success: false, errorCode: string, message: string}
     */
    protected function notFound(string $identifier, string $code = 'page_not_found'): array
    {
        return ['success' => false, 'errorCode' => $code, 'message' => 'Page not found: ' . $identifier];
    }
}
