<?php

declare(strict_types=1);

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Publishes a page through the DocumentManager so Sulu's subscribers copy the
 * draft to the live workspace, create / move the route in both workspaces,
 * turn the previous URL into a history route, adapt child URLs and reindex.
 */
#[AsCommand(
    name: 'app:page:publish',
    description: 'Publish a page via DocumentManager in a fresh process (routes handled by Sulu)'
)]
class PagePublishCommand extends AbstractPageDocumentCommand
{
    protected function configure(): void
    {
        $this
            ->addArgument('path', InputArgument::REQUIRED, 'PHPCR path or UUID of the page')
            ->addOption('locale', 'l', InputOption::VALUE_REQUIRED, 'Locale to publish', 'de')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $identifier = (string) $input->getArgument('path');
        $locale = (string) $input->getOption('locale');

        return $this->runGuarded($output, function () use ($identifier, $locale): array {
            $document = $this->findDocument($identifier, $locale);
            if ($document === null) {
                return $this->notFound($identifier);
            }

            $this->documentManager->publish($document, $locale);
            $this->documentManager->flush();

            return ['success' => true, 'message' => 'Page published'] + $this->describe($document);
        }, 'publish_failed');
    }
}
