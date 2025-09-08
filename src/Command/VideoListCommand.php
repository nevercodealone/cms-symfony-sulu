<?php

declare(strict_types=1);

namespace App\Command;

use App\YouTube\VideoListing;
use Symfony\Component\Console\Attribute\Argument;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Attribute\Option;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:video:list', description: 'List videos from the Never Code Alone YouTube channel')]
final readonly class VideoListCommand
{
    public function __construct(
        private VideoListing $videoListing,
    ) {
    }

    public function __invoke(
        SymfonyStyle $io,
        #[Argument(description: 'Handle of the YouTube channel')] string $channelHandle = '@NeverCodeAlone',
        #[Option(description: 'Maximum number of videos')] int $limit = 100,
    ): int {
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

        return 0;
    }
}
