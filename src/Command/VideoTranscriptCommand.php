<?php

declare(strict_types=1);

namespace App\Command;

use App\YouTube\TranscriptFetcher;
use Symfony\Component\Console\Attribute\Argument;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:video:transcript', description: 'Fetches the transcript of videos from YouTube')]
final readonly class VideoTranscriptCommand
{
    public function __construct(
        private TranscriptFetcher $transcriptFetcher,
    ) {
    }

    public function __invoke(SymfonyStyle $io, #[Argument(description: 'ID of a YouTube video')] string $id): int
    {
        $io->title('Video Transcript Fetcher');

        $io->text($this->transcriptFetcher->fetchTranscript($id));

        $io->success('Done.');

        return 0;
    }
}
