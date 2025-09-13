<?php

declare(strict_types=1);

namespace App\Command;

use App\YouTube\TranscriptFetcher;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:video:transcript', description: 'Fetches the transcript of videos from YouTube')]
final class VideoTranscriptCommand extends Command
{
    public function __construct(
        private readonly TranscriptFetcher $transcriptFetcher,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('id', InputArgument::REQUIRED, 'ID of a YouTube video');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $id = $input->getArgument('id');
        $io->title('Video Transcript Fetcher');

        $io->text($this->transcriptFetcher->fetchTranscript($id));

        $io->success('Done.');

        return Command::SUCCESS;
    }
}
