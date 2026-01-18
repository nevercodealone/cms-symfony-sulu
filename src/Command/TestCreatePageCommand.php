<?php

declare(strict_types=1);

namespace App\Command;

use App\Sulu\Service\PageService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand('app:test-create-page', description: 'Test creating a page via PageService')]
final class TestCreatePageCommand extends Command
{
    public function __construct(
        private readonly PageService $pageService,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addOption('parent', 'p', InputOption::VALUE_REQUIRED, 'Parent path', '/cmf/example/contents');
        $this->addOption('title', 't', InputOption::VALUE_REQUIRED, 'Page title', 'Test Page ' . date('Y-m-d H:i:s'));
        $this->addOption('segment', 's', InputOption::VALUE_REQUIRED, 'URL segment (without leading slash)');
        $this->addOption('locale', 'l', InputOption::VALUE_REQUIRED, 'Locale', 'de');
        $this->addOption('publish', null, InputOption::VALUE_NONE, 'Publish the page');
        $this->addOption('cleanup', null, InputOption::VALUE_NONE, 'Delete test pages after verification');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Test Create Page');

        $parentPath = $input->getOption('parent');
        $title = $input->getOption('title');
        $segment = $input->getOption('segment');
        $locale = $input->getOption('locale');
        $publish = $input->getOption('publish');

        // Generate unique segment if not provided
        if (!$segment) {
            $segment = '/test-page-' . time();
        } elseif (!str_starts_with($segment, '/')) {
            $segment = '/' . $segment;
        }

        $io->section('Creating Page');
        $io->listing([
            'Parent Path: ' . $parentPath,
            'Title: ' . $title,
            'Resource Segment: ' . $segment,
            'Locale: ' . $locale,
            'Publish: ' . ($publish ? 'Yes' : 'No'),
        ]);

        // Step 1: Create the page
        $result = $this->pageService->createPage([
            'parentPath' => $parentPath,
            'title' => $title,
            'resourceSegment' => $segment,
            'seoTitle' => $title . ' - SEO',
            'seoDescription' => 'Test page created via command',
            'publish' => $publish,
        ], $locale);

        if (!$result['success']) {
            $io->error('Failed to create page: ' . $result['message']);
            return Command::FAILURE;
        }

        $io->success('Page created successfully!');
        $io->definitionList(
            ['UUID' => $result['uuid'] ?? 'N/A'],
            ['Path' => $result['path'] ?? 'N/A'],
            ['URL' => $result['url'] ?? 'N/A'],
        );

        $createdPath = $result['path'] ?? null;

        // Step 2: Verify the page exists via list
        $io->section('Verifying via list()');
        $pages = $this->pageService->listPages($locale, $parentPath);
        $foundInList = false;
        foreach ($pages as $page) {
            if ($page['path'] === $createdPath) {
                $foundInList = true;
                $io->success('Page found in list!');
                $io->definitionList(
                    ['Path' => $page['path']],
                    ['Title' => $page['title']],
                    ['URL' => $page['url'] ?? 'N/A'],
                    ['Template' => $page['template']],
                );
                break;
            }
        }

        if (!$foundInList) {
            $io->error('Page NOT found in list! This indicates a persistence issue.');
            $io->note('Listed ' . count($pages) . ' pages under ' . $parentPath);
            return Command::FAILURE;
        }

        // Step 3: Verify the page exists via get
        $io->section('Verifying via get()');
        $pageData = $this->pageService->getPage($createdPath, $locale);
        if ($pageData) {
            $io->success('Page retrieved successfully!');
            $io->definitionList(
                ['Path' => $pageData['path']],
                ['Title' => $pageData['title']],
                ['URL' => $pageData['url'] ?? 'N/A'],
                ['Template' => $pageData['template']],
                ['Blocks' => count($pageData['blocks']) . ' blocks'],
            );
        } else {
            $io->error('Page NOT found via get()! This indicates a persistence issue.');
            return Command::FAILURE;
        }

        $io->success('All verification steps passed! create_page is working correctly.');

        return Command::SUCCESS;
    }
}
