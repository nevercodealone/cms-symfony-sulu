<?php

declare(strict_types=1);

namespace App\Command;

use App\YouTube\VideoListing;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:video:list', description: 'List videos from the Never Code Alone YouTube channel')]
final class VideoListCommand extends Command
{
    public function __construct(
        private readonly VideoListing $videoListing,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('channelHandle', InputArgument::OPTIONAL, 'Handle of the YouTube channel', '@NeverCodeAlone');
        $this->addOption('limit', 'l', InputOption::VALUE_REQUIRED, 'Maximum number of videos', 100);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $channelHandle = $input->getArgument('channelHandle');
        $limit = (int) $input->getOption('limit');
        $io->title('Never Code Alone Videos');
        $io->comment(sprintf('Listing videos from the Never Code Alone YouTube channel (maximum: %d)', $limit));

        $table = $io
            ->createTable()
            ->setHeaders(['#', 'ID', 'Title', 'Published At']);

        $videos = 0;
        foreach ($this->videoListing->getVideos($channelHandle, $limit) as $video) {
            $table->addRow([++$videos, $video['id'], $video['title'], $video['publishedAt']->format('Y-m-d H:i:s')]);
        }
        $table->render();

        $io->success(sprintf('Listed %d videos successfully.', $videos));

        return Command::SUCCESS;
    }
}
