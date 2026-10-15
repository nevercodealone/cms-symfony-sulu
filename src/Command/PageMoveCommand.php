<?php

declare(strict_types=1);

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Moves a page under another parent through the DocumentManager. Sulu
 * regenerates the URL from the new parent's draft route, moves the live node,
 * creates the new routes and keeps the old URLs as history routes.
 */
#[AsCommand(
    name: 'app:page:move',
    description: 'Move a page under a new parent via DocumentManager in a fresh process'
)]
class PageMoveCommand extends AbstractPageDocumentCommand
{
    protected function configure(): void
    {
        $this
            ->addArgument('path', InputArgument::REQUIRED, 'PHPCR path or UUID of the page')
            ->addArgument('targetParent', InputArgument::REQUIRED, 'PHPCR path or UUID of the new parent')
            ->addOption('locale', 'l', InputOption::VALUE_REQUIRED, 'Locale', 'de')
            ->addOption('resource-segment', 's', InputOption::VALUE_REQUIRED, 'New slug under the new parent (optional)')
            ->addOption('publish', 'p', InputOption::VALUE_NONE, 'Publish after the move')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $identifier = (string) $input->getArgument('path');
        $targetParent = (string) $input->getArgument('targetParent');
        $locale = (string) $input->getOption('locale');
        $slug = $input->getOption('resource-segment');
        $publish = (bool) $input->getOption('publish');

        return $this->runGuarded($output, function () use ($identifier, $targetParent, $locale, $slug, $publish): array {
            $document = $this->findDocument($identifier, $locale);
            if ($document === null) {
                return $this->notFound($identifier);
            }
            $parent = $this->findDocument($targetParent, $locale);
            if ($parent === null) {
                return $this->notFound($targetParent, 'parent_not_found');
            }

            $before = $this->describe($document);
            $parentUuid = method_exists($parent, 'getUuid') ? (string) $parent->getUuid() : $targetParent;

            $this->documentManager->move($document, $parentUuid);
            $this->documentManager->flush();

            if (is_string($slug) && $slug !== '') {
                $document->setResourceSegment($this->childResourceSegment($parent, $slug));
                $this->documentManager->persist($document, $locale, [
                    'clear_missing_content' => false,
                    // Keep the node name: Sulu would otherwise rename the node from the title,
                    // which silently changes the PHPCR path the MCP uses as identifier.
                    'auto_name' => false,
                ]);
                $this->documentManager->flush();
            }

            if ($publish) {
                $this->documentManager->publish($document, $locale);
                $this->documentManager->flush();
            }

            $after = $this->describe($document);

            return [
                'success' => true,
                'message' => 'Page moved',
                'oldPath' => $before['path'],
                'oldUrl' => $before['url'],
                'newUrl' => $after['url'],
                'published' => $publish,
            ] + $after;
        }, 'move_failed');
    }
}
