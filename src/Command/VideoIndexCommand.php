<?php

declare(strict_types=1);

namespace App\Command;

use App\Store\Indexer;
use Symfony\Component\Console\Attribute\Argument;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Attribute\Option;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:video:index', description: 'Index videos from the Never Code Alone YouTube channel')]
final readonly class VideoIndexCommand
{
    public function __construct(
        private Indexer $indexer,
    ) {
    }

    public function __invoke(
        SymfonyStyle $io,
        #[Argument(description: 'Handle of the YouTube channel')] string $channelHandle = '@NeverCodeAlone',
        #[Option(description: 'Maximum number of videos')] int $limit = 100,
    ): int {
        $io->title('Index Videos');
        $io->comment('Indexing videos from the Never Code Alone YouTube channel');

        $this->indexer->index($channelHandle, $limit);

        $io->success('Done.');

        return 0;
    }
}
