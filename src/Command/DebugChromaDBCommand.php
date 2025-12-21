<?php

declare(strict_types=1);

namespace App\Command;

use Codewithkyrian\ChromaDB\Client;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:debug:chromadb',
    description: 'Debug ChromaDB collections and inspect indexed content'
)]
class DebugChromaDBCommand extends Command
{
    public function __construct(
        private readonly Client $chromaClient,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('collection', InputArgument::OPTIONAL, 'Collection name to inspect (youtube_videos or sulu_content)')
            ->addOption('search', 's', InputOption::VALUE_REQUIRED, 'Search query to test')
            ->addOption('limit', 'l', InputOption::VALUE_REQUIRED, 'Number of results', '10')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $collectionName = $input->getArgument('collection');
        $searchQuery = $input->getOption('search');
        $limit = (int) $input->getOption('limit');

        $io->title('ChromaDB Debug Tool');

        try {
            // List all collections
            $collections = $this->chromaClient->listCollections();

            $io->section('Available Collections');
            $collectionsData = [];
            foreach ($collections as $collectionInfo) {
                $collection = $this->chromaClient->getCollection($collectionInfo->name);
                $result = $collection->get(limit: 1);
                $count = count($result->ids ?? []) > 0 ? '✓ Has documents' : '✗ Empty';

                $collectionsData[] = [
                    $collectionInfo->name,
                    $count,
                    $collectionInfo->metadata['embedding_function'] ?? 'N/A',
                ];
            }

            if (empty($collectionsData)) {
                $io->warning('No collections found in ChromaDB!');
                return Command::SUCCESS;
            }

            $io->table(['Collection Name', 'Document Count', 'Embedding Function'], $collectionsData);

            // If specific collection requested, show details
            if ($collectionName) {
                $collection = $this->chromaClient->getCollection($collectionName);

                $io->section(sprintf('Collection: %s', $collectionName));

                // Get count by fetching all IDs
                $allDocs = $collection->get();
                $totalCount = count($allDocs->ids ?? []);
                $io->writeln(sprintf('Total documents: <info>%d</info>', $totalCount));

                // Get sample documents
                $io->section('Sample Documents (first ' . $limit . ')');
                $result = $collection->get(limit: $limit);

                if (empty($result->ids)) {
                    $io->warning('No documents found in this collection!');
                } else {
                    foreach ($result->ids as $index => $id) {
                        $metadata = $result->metadatas[$index] ?? [];
                        $document = $result->documents[$index] ?? '';

                        $io->writeln(sprintf('<fg=yellow>ID:</> %s', $id));
                        $io->writeln(sprintf('<fg=cyan>Title:</> %s', $metadata['title'] ?? 'N/A'));
                        $io->writeln(sprintf('<fg=cyan>URL:</> %s', $metadata['url'] ?? 'N/A'));
                        $io->writeln(sprintf('<fg=green>Content:</> %s', substr($document, 0, 150) . '...'));
                        $io->newLine();
                    }
                }

                // Test search if query provided
                if ($searchQuery) {
                    $io->section(sprintf('Search Results for: "%s"', $searchQuery));

                    try {
                        $searchResults = $collection->query(
                            queryTexts: [$searchQuery],
                            nResults: $limit
                        );

                        if (empty($searchResults->ids[0])) {
                            $io->warning('No results found for this query!');
                        } else {
                            foreach ($searchResults->ids[0] as $index => $id) {
                                $metadata = $searchResults->metadatas[0][$index] ?? [];
                                $document = $searchResults->documents[0][$index] ?? '';
                                $distance = $searchResults->distances[0][$index] ?? 0;

                                $io->writeln(sprintf('<fg=yellow>Rank %d</> (distance: %.4f)', $index + 1, $distance));
                                $io->writeln(sprintf('<fg=cyan>Title:</> %s', $metadata['title'] ?? 'N/A'));
                                $io->writeln(sprintf('<fg=cyan>URL:</> %s', $metadata['url'] ?? 'N/A'));
                                $io->writeln(sprintf('<fg=green>Content:</> %s', substr($document, 0, 200) . '...'));
                                $io->newLine();
                            }
                        }
                    } catch (\Exception $e) {
                        $io->error('Search failed: ' . $e->getMessage());
                    }
                }
            }

            $io->success('ChromaDB inspection complete!');

            return Command::SUCCESS;
        } catch (\Exception $e) {
            $io->error('Failed to connect to ChromaDB: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }
}
