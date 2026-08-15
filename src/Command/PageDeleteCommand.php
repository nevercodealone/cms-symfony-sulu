<?php

declare(strict_types=1);

namespace App\Command;

use Sulu\Component\DocumentManager\DocumentManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Deletes a page via the DocumentManager in a FRESH process.
 *
 * Why a dedicated command: the MCP server is a long-lived process in which
 * the in-process DocumentManager (its PHPCR session and the trash
 * subscriber's ORM EntityManager) holds stale connections that can block
 * indefinitely on find()/flush(). Spawning this command gives every
 * deletion fresh connections - the same proven pattern as clearCache().
 *
 * Sulu's PageTrashSubscriber fires automatically on remove(), so the page
 * lands in tr_trash_items. The MCP audit entry is written by PageService
 * (direct DBAL) after the process exits - this command logs nothing.
 *
 * Output: a single JSON object on stdout. Warnings go to stderr.
 */
#[AsCommand(
    name: 'app:page:delete',
    description: 'Delete a page via DocumentManager in a fresh process (auto-trashed by Sulu)'
)]
class PageDeleteCommand extends Command
{
    public function __construct(
        private readonly DocumentManagerInterface $documentManager,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('path', InputArgument::REQUIRED, 'PHPCR path or UUID of the page to delete')
            ->addOption('locale', 'l', InputOption::VALUE_REQUIRED, 'Locale for the deletion', 'de')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $identifier = (string) $input->getArgument('path');
        $locale = (string) $input->getOption('locale');

        try {
            $document = $this->documentManager->find($identifier, $locale);

            if ($document === null) {
                $output->writeln(json_encode([
                    'success' => false,
                    'errorCode' => 'page_not_found',
                    'message' => 'Page not found: ' . $identifier,
                ]) ?: '');

                return Command::FAILURE;
            }

            $path = method_exists($document, 'getPath') ? (string) $document->getPath() : $identifier;
            $uuid = method_exists($document, 'getUuid') ? (string) $document->getUuid() : null;

            $this->documentManager->remove($document);
            $this->documentManager->flush();

            $output->writeln(json_encode([
                'success' => true,
                'message' => 'Page deleted successfully',
                'path' => $path,
                'uuid' => $uuid,
            ]) ?: '');

            return Command::SUCCESS;
        } catch (\Throwable $e) {
            $output->writeln(json_encode([
                'success' => false,
                'errorCode' => 'delete_failed',
                'message' => $e->getMessage(),
            ]) ?: '');

            return Command::FAILURE;
        }
    }
}
