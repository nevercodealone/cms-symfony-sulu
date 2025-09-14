<?php

declare(strict_types=1);

namespace App\YouTube;

use MrMySQL\YoutubeTranscript\TranscriptListFetcher;
use Symfony\Component\HttpClient\Psr18Client;
use Symfony\Contracts\HttpClient\HttpClientInterface;

final class TranscriptFetcher
{
    public function __construct(
        private readonly HttpClientInterface $client,
    ) {
    }

    public function fetchTranscript(string $videoId): string
    {
        $psr18Client = new Psr18Client($this->client);
        $fetcher = new TranscriptListFetcher($psr18Client, $psr18Client, $psr18Client);

        $list = $fetcher->fetch($videoId);
        $transcript = $list->findTranscript($list->getAvailableLanguageCodes());

        return array_reduce($transcript->fetch(), function (string $carry, array $item): string {
            return $carry.PHP_EOL.$item['text'];
        }, '');
    }
}
