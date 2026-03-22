<?php

declare(strict_types=1);

namespace App\Command;

use Codewithkyrian\ChromaDB\Client;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:chromadb:reset', description: 'Delete and recreate ChromaDB collections to reset embedding dimensions')]
final class ChromaDBResetCommand extends Command
{
    private const COLLECTIONS = ['youtube_videos', 'sulu_content'];

    public function __construct(
        private readonly Client $chromaClient,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('ChromaDB Reset');

        foreach (self::COLLECTIONS as $name) {
            try {
                $this->chromaClient->deleteCollection($name);
                $io->comment(sprintf('Deleted collection: %s', $name));
            } catch (\Exception) {
                $io->comment(sprintf('Collection %s does not exist, skipping', $name));
            }

            $this->chromaClient->getOrCreateCollection($name);
            $io->info(sprintf('Created collection: %s', $name));
        }

        $io->success('Collections reset. Run app:index:sulu-content and app:video:index to re-index.');

        return Command::SUCCESS;
    }
}
