<?php

declare(strict_types=1);

namespace App\Telegram;

use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * Sends outbound messages to Telegram via the Bot API.
 *
 * Uses the same bot token as the Hermes gateway. Sulu is an additional
 * sender (which Telegram allows concurrently). Inbound handling is NOT
 * implemented here because Hermes already polls getUpdates on the same
 * bot and Telegram permits only one consumer per bot.
 */
final class TelegramNotifier
{
    private const API_BASE = 'https://api.telegram.org/bot';

    public function __construct(
        private readonly HttpClientInterface $httpClient,
        private readonly string $botToken,
        private readonly string $defaultChatId,
    ) {
    }

    /**
     * Send a text message. Returns the Telegram message payload on success.
     *
     * @return array<string, mixed>
     *
     * @throws \RuntimeException when the Telegram API returns ok=false or a non-200 status
     * @throws \Symfony\Contracts\HttpClient\Exception\ExceptionInterface on network/transport errors
     */
    public function sendText(string $text, ?string $chatId = null, string $parseMode = ''): array
    {
        $payload = [
            'chat_id' => $chatId ?? $this->defaultChatId,
            'text' => $text,
        ];
        if ($parseMode !== '') {
            $payload['parse_mode'] = $parseMode;
        }

        $response = $this->httpClient->request(
            'POST',
            self::API_BASE . $this->botToken . '/sendMessage',
            ['json' => $payload]
        );

        $body = $response->toArray(false);
        if (!isset($body['ok']) || $body['ok'] !== true) {
            $description = $body['description'] ?? 'unknown error';
            throw new \RuntimeException('Telegram API error: ' . $description);
        }

        return $body['result'] ?? [];
    }
}
