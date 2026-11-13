<?php

declare(strict_types=1);

namespace App\Command;

use Doctrine\ORM\EntityManagerInterface;
use Sulu\Bundle\RedirectBundle\Manager\RedirectRouteManagerInterface;
use Sulu\Bundle\RedirectBundle\Model\RedirectRouteInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Creates or updates SuluRedirectBundle redirects (re_redirect_routes) in a
 * fresh process, spawned by the MCP RedirectService. Input is a JSON list of
 * {id?, source, sourceHost?, target, statusCode, enabled?}; validation happens
 * in RedirectService before. Every entry is saved on its own so one failure
 * does not block the others.
 *
 * Output: one JSON object {success, saved: [...], failed: [{item, reason}]}.
 */
#[AsCommand(
    name: 'app:redirect:save',
    description: 'Create or update redirects via SuluRedirectBundle in a fresh process'
)]
class RedirectSaveCommand extends Command
{
    public function __construct(
        private readonly RedirectRouteManagerInterface $redirectRouteManager,
        private readonly EntityManagerInterface $entityManager,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('redirects', InputArgument::REQUIRED, 'JSON list of redirects');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $items = json_decode((string) $input->getArgument('redirects'), true);
        if (!is_array($items) || !array_is_list($items)) {
            $output->writeln((string) json_encode(['success' => false, 'errorCode' => 'invalid_input', 'message' => 'redirects must be a JSON list']));

            return Command::FAILURE;
        }

        $saved = [];
        $failed = [];
        foreach ($items as $item) {
            try {
                $route = $this->redirectRouteManager->saveByData([
                    'id' => $item['id'] ?? null,
                    'source' => (string) $item['source'],
                    'sourceHost' => ($item['sourceHost'] ?? '') !== '' ? (string) $item['sourceHost'] : null,
                    'target' => (string) ($item['target'] ?? ''),
                    'statusCode' => (int) ($item['statusCode'] ?? 301),
                ]);
                $route->setEnabled((bool) ($item['enabled'] ?? true));
                $this->entityManager->flush();
                $saved[] = self::toArray($route);
            } catch (\Throwable $e) {
                $failed[] = ['item' => $item, 'reason' => $e->getMessage()];
                if (!$this->entityManager->isOpen()) {
                    break;
                }
            }
        }

        $output->writeln((string) json_encode([
            'success' => $failed === [],
            'saved' => $saved,
            'failed' => $failed,
        ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));

        return $failed === [] ? Command::SUCCESS : Command::FAILURE;
    }

    /**
     * @return array{id: string, source: string, sourceHost: string|null, target: string, statusCode: int, enabled: bool}
     */
    public static function toArray(RedirectRouteInterface $route): array
    {
        return [
            'id' => (string) $route->getId(),
            'source' => (string) $route->getSource(),
            'sourceHost' => $route->getSourceHost(),
            'target' => (string) $route->getTarget(),
            'statusCode' => (int) $route->getStatusCode(),
            'enabled' => (bool) $route->isEnabled(),
        ];
    }
}
