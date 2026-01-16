<?php

declare(strict_types=1);

namespace App\Command;

use Codewithkyrian\ChromaDB\Client;
use Symfony\AI\Platform\Bridge\OpenAi\Embeddings;
use Symfony\AI\Platform\PlatformInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:video:query', description: 'Query indexed videos from the vector store')]
final class VideoQueryCommand extends Command
{
    public function __construct(
        private readonly Client $chromaClient,
        private readonly PlatformInterface $platform,
    ) {
        parent::__construct();
    }

    protected function execute(\Symfony\Component\Console\Input\InputInterface $input, \Symfony\Component\Console\Output\OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Testing Chroma DB Connection');

        $io->comment('Connecting to Chroma DB ...');
        $collection = $this->chromaClient->getOrCreateCollection('youtube_videos');
        $io->table(['Key', 'Value'], [
            ['ChromaDB Version', $this->chromaClient->version()],
            ['Collection Name', $collection->name],
            ['Collection ID', $collection->id],
            ['Total Documents', $collection->count()],
        ]);

        $search = $io->ask('Hast du eine Frage?', 'Was kannst du mir über Testing erzählen?');
        $io->comment(sprintf('Converting "%s" to vector & searching in Chroma DB ...', $search));
        $io->comment('Results are limited to 4 most similar documents.');

        $result = $this->platform->invoke(new Embeddings(), $search);
        $queryResponse = $collection->query(
            queryEmbeddings: [$result->asVectors()[0]->getData()],
            nResults: 4,
        );

        if (1 === count($queryResponse->ids, COUNT_RECURSIVE)) {
            $io->error('No results found!');

            return Command::FAILURE;
        }

        foreach ($queryResponse->ids[0] as $i => $id) {
            $io->section((string) ($queryResponse->metadatas[0][$i]['id'] ?? ''));
            $io->block((string) ($queryResponse->metadatas[0][$i]['title'] ?? ''));
        }

        $io->success('Chroma DB Connection & Similarity Search Test Successful!');

        return Command::SUCCESS;
    }
}
