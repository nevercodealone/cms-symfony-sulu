<?php

declare(strict_types=1);

namespace App\Command;

use Sulu\Component\Content\Document\WorkflowStage;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Creates a page through the DocumentManager. The node is named after the
 * resource segment (not the title) so the MCP path contract
 * `parentPath + resourceSegment` holds. Routes are created by Sulu on publish.
 */
#[AsCommand(
    name: 'app:page:create',
    description: 'Create a page via DocumentManager in a fresh process'
)]
class PageCreateCommand extends AbstractPageDocumentCommand
{
    protected function configure(): void
    {
        $this
            ->addArgument('parentPath', InputArgument::REQUIRED, 'PHPCR path or UUID of the parent page')
            ->addArgument('title', InputArgument::REQUIRED, 'Page title')
            ->addArgument('resourceSegment', InputArgument::REQUIRED, 'Slug with leading slash, e.g. /my-page')
            ->addOption('locale', 'l', InputOption::VALUE_REQUIRED, 'Locale', 'de')
            ->addOption('template', 't', InputOption::VALUE_REQUIRED, 'Structure type', 'tailwind')
            ->addOption('publish', 'p', InputOption::VALUE_NONE, 'Publish right away')
            ->addOption('seo-title', null, InputOption::VALUE_REQUIRED)
            ->addOption('seo-description', null, InputOption::VALUE_REQUIRED)
            ->addOption('seo-keywords', null, InputOption::VALUE_REQUIRED)
            ->addOption('excerpt-title', null, InputOption::VALUE_REQUIRED)
            ->addOption('excerpt-description', null, InputOption::VALUE_REQUIRED)
            ->addOption('excerpt-image', null, InputOption::VALUE_REQUIRED, 'Media id')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $parentPath = (string) $input->getArgument('parentPath');
        $title = (string) $input->getArgument('title');
        $slug = (string) $input->getArgument('resourceSegment');
        $locale = (string) $input->getOption('locale');
        $template = (string) $input->getOption('template');
        $publish = (bool) $input->getOption('publish');

        return $this->runGuarded($output, function () use ($input, $parentPath, $title, $slug, $locale, $template, $publish): array {
            $parent = $this->findDocument($parentPath, $locale);
            if ($parent === null) {
                return $this->notFound($parentPath, 'parent_not_found');
            }

            /** @var object $document */
            $document = $this->documentManager->create('page');
            $document->setTitle($title);
            $document->setStructureType($template);
            $document->setResourceSegment($this->childResourceSegment($parent, $slug));
            $document->setWorkflowStage(WorkflowStage::TEST);
            if (method_exists($document, 'setParent')) {
                $document->setParent($parent);
            }

            $extensions = [];
            $seo = array_filter([
                'title' => $input->getOption('seo-title'),
                'description' => $input->getOption('seo-description'),
                'keywords' => $input->getOption('seo-keywords'),
            ], fn ($v) => $v !== null && $v !== '');
            if ($seo !== []) {
                $extensions['seo'] = $seo;
            }
            $excerpt = array_filter([
                'title' => $input->getOption('excerpt-title'),
                'description' => $input->getOption('excerpt-description'),
            ], fn ($v) => $v !== null && $v !== '');
            $image = $input->getOption('excerpt-image');
            if ($image !== null && $image !== '') {
                $excerpt['images'] = ['ids' => [(int) $image]];
            }
            if ($excerpt !== []) {
                $extensions['excerpt'] = $excerpt;
            }
            if ($extensions !== []) {
                $document->setExtensionsData($extensions);
            }

            $this->documentManager->persist($document, $locale, [
                'parent_path' => method_exists($parent, 'getPath') ? (string) $parent->getPath() : $parentPath,
                'node_name' => ltrim($slug, '/'),
            ]);
            if ($publish) {
                $this->documentManager->publish($document, $locale);
            }
            $this->documentManager->flush();

            return ['success' => true, 'message' => 'Page created', 'published' => $publish] + $this->describe($document);
        }, 'create_failed');
    }
}
