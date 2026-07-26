<?php

declare(strict_types=1);

namespace App\Command;

use App\Telegram\TelegramNotifier;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:telegram:test',
    description: 'Send a test message to Telegram to verify the bot token and chat id'
)]
class TelegramTestCommand extends Command
{
    public function __construct(
        private readonly TelegramNotifier $telegramNotifier,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('text', InputArgument::OPTIONAL, 'Text to send', 'Test from sulu')
            ->addOption('chat-id', 'c', InputOption::VALUE_REQUIRED, 'Override the default chat id')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $text = $input->getArgument('text');
        $chatId = $input->getOption('chat-id');

        try {
            $result = $this->telegramNotifier->sendText($text, $chatId);
            $io->success('Message sent. message_id=' . ($result['message_id'] ?? '?'));
            return Command::SUCCESS;
        } catch (\Throwable $e) {
            $io->error('Telegram send failed: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }
}
