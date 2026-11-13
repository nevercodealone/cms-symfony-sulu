<?php

declare(strict_types=1);

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Changes the slug of a page through the DocumentManager. With --publish,
 * Sulu moves the live route, converts the old one into a history route (301)
 * and adapts the URLs of published children.
 */
#[AsCommand(
    name: 'app:page:set-url',
    description: 'Change the resource locator (slug) of a page via DocumentManager in a fresh process'
)]
class PageSetUrlCommand extends AbstractPageDocumentCommand
{
    protected function configure(): void
    {
        $this
            ->addArgument('path', InputArgument::REQUIRED, 'PHPCR path or UUID of the page')
            ->addArgument('resourceSegment', InputArgument::REQUIRED, 'New slug with leading slash, e.g. /krea-2')
            ->addOption('locale', 'l', InputOption::VALUE_REQUIRED, 'Locale', 'de')
            ->addOption('publish', 'p', InputOption::VALUE_NONE, 'Publish after the change')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $identifier = (string) $input->getArgument('path');
        $slug = (string) $input->getArgument('resourceSegment');
        $locale = (string) $input->getOption('locale');
        $publish = (bool) $input->getOption('publish');

        return $this->runGuarded($output, function () use ($identifier, $slug, $locale, $publish): array {
            $document = $this->findDocument($identifier, $locale);
            if ($document === null) {
                return $this->notFound($identifier);
            }

            $oldUrl = $this->describe($document)['url'];
            $parent = method_exists($document, 'getParent') ? $document->getParent() : null;
            $newUrl = is_object($parent) ? $this->childResourceSegment($parent, $slug) : '/' . ltrim($slug, '/');

            $document->setResourceSegment($newUrl);
            $this->documentManager->persist($document, $locale, [
                    'clear_missing_content' => false,
                    // Keep the node name: Sulu would otherwise rename the node from the title,
                    // which silently changes the PHPCR path the MCP uses as identifier.
                    'auto_name' => false,
                ]);
            if ($publish) {
                $this->documentManager->publish($document, $locale);
            }
            $this->documentManager->flush();

            return [
                'success' => true,
                'message' => 'Resource locator changed',
                'oldUrl' => $oldUrl,
                'newUrl' => $newUrl,
                'published' => $publish,
            ] + $this->describe($document);
        }, 'set_url_failed');
    }
}
