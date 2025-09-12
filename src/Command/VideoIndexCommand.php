<?php

declare(strict_types=1);

namespace App\Command;

use App\Store\Indexer;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:video:index', description: 'Index videos from the Never Code Alone YouTube channel')]
final class VideoIndexCommand extends Command
{
    public function __construct(
        private readonly Indexer $indexer,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('source', InputArgument::OPTIONAL, 'YouTube channel handle or playlist ID', 'PLKrKzhBjw2Y-xrgw927AuGBVVPOvNV03g');
        $this->addOption('limit', 'l', InputOption::VALUE_REQUIRED, 'Maximum number of videos', 100);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $source = $input->getArgument('source');
        $limit = (int) $input->getOption('limit');
        $io->title('Index Videos');
        
        if (str_starts_with($source, 'PL')) {
            $io->comment(sprintf('Indexing videos from playlist: %s', $source));
        } else {
            $io->comment(sprintf('Indexing videos from channel: %s', $source));
        }

        $this->indexer->index($source, $limit);

        $io->success('Done.');

        return Command::SUCCESS;
    }
}
