<?php

declare(strict_types=1);

namespace App\Command;

use Doctrine\ORM\EntityManagerInterface;
use Sulu\Bundle\RedirectBundle\Manager\RedirectRouteManagerInterface;
use Sulu\Bundle\RedirectBundle\Model\RedirectRouteRepositoryInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Deletes one SuluRedirectBundle redirect in a fresh process.
 */
#[AsCommand(
    name: 'app:redirect:delete',
    description: 'Delete a redirect via SuluRedirectBundle in a fresh process'
)]
class RedirectDeleteCommand extends Command
{
    public function __construct(
        private readonly RedirectRouteManagerInterface $redirectRouteManager,
        private readonly RedirectRouteRepositoryInterface $redirectRouteRepository,
        private readonly EntityManagerInterface $entityManager,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('id', InputArgument::REQUIRED, 'Redirect id');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $id = (string) $input->getArgument('id');

        try {
            $route = $this->redirectRouteRepository->findById($id);
            if ($route === null) {
                $result = ['success' => false, 'errorCode' => 'redirect_not_found', 'message' => 'Redirect not found: ' . $id];
            } else {
                $deleted = RedirectSaveCommand::toArray($route);
                $this->redirectRouteManager->delete($route);
                $this->entityManager->flush();
                $result = ['success' => true, 'deleted' => $deleted];
            }
        } catch (\Throwable $e) {
            $result = ['success' => false, 'errorCode' => 'redirect_delete_failed', 'message' => $e->getMessage()];
        }

        $output->writeln((string) json_encode($result, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));

        return !empty($result['success']) ? Command::SUCCESS : Command::FAILURE;
    }
}
