<?php

declare(strict_types=1);

namespace App\Command;

use Codewithkyrian\ChromaDB\Client;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:video:clear-index', description: 'Clear the YouTube video index from ChromaDB')]
final class VideoClearIndexCommand extends Command
{
    public function __construct(
        private readonly Client $chromaClient,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Clear Video Index');
        
        try {
            // Get the collection
            $collection = $this->chromaClient->getOrCreateCollection('youtube_videos');
            
            $documentCount = $collection->count();
            
            if ($documentCount > 0) {
                $io->comment(sprintf('Clearing %d documents from youtube_videos collection...', $documentCount));
                
                // Get all document IDs by retrieving all documents
                $getResponse = $collection->get();
                
                if (!empty($getResponse->ids)) {
                    $collection->delete($getResponse->ids);
                    $io->success(sprintf('Deleted %d documents. Collection is now empty.', count($getResponse->ids)));
                } else {
                    $io->warning('No documents found to delete.');
                }
            } else {
                $io->warning('Collection youtube_videos is already empty.');
            }
        } catch (\Exception $e) {
            $io->error('Failed to clear index: ' . $e->getMessage());
            return Command::FAILURE;
        }

        return Command::SUCCESS;
    }
}