<?php

declare(strict_types=1);

namespace App\Command;

use App\Store\SuluContentIndexer;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:index:sulu-content',
    description: 'Index Sulu CMS content into ChromaDB for AI chatbot search'
)]
final class IndexSuluContentCommand extends Command
{
    public function __construct(
        private readonly SuluContentIndexer $indexer,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption(
                'locale',
                'l',
                InputOption::VALUE_REQUIRED,
                'Locale to index (de or en)',
                'de'
            )
            ->addOption(
                'limit',
                null,
                InputOption::VALUE_REQUIRED,
                'Maximum number of pages to index',
                1000
            )
            ->addOption(
                'webspace',
                'w',
                InputOption::VALUE_REQUIRED,
                'Webspace key to index',
                'example'
            )
            ->addOption(
                'all-locales',
                'a',
                InputOption::VALUE_NONE,
                'Index both German and English content'
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $locale = $input->getOption('locale');
        $limit = (int) $input->getOption('limit');
        $webspace = $input->getOption('webspace');
        $allLocales = $input->getOption('all-locales');

        $io->title('Sulu Content Indexer');

        if ($allLocales) {
            $locales = ['de', 'en'];
            $io->info('Indexing both German and English content...');
        } else {
            $locales = [$locale];
        }

        foreach ($locales as $loc) {
            $io->section(sprintf('Indexing locale: %s', strtoupper($loc)));

            try {
                $this->indexer->index($loc, $limit, $output, $webspace);
            } catch (\Exception $e) {
                $io->error(sprintf('Failed to index locale "%s": %s', $loc, $e->getMessage()));
                return Command::FAILURE;
            }

            $io->newLine();
        }

        $io->success('Sulu content indexing completed!');

        return Command::SUCCESS;
    }
}
