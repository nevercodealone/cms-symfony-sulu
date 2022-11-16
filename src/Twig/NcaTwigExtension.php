<?php

namespace App\Twig;

use App\Service\TwitterService;
use App\Service\YouTubeService;
use Google_Service_YouTube;
use Symfony\Component\Intl\Countries;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * This is just an example Twig Extension.
 * It is recommended to use `intl_country` from the `sulu/web-twig` package instead of this.
 */
class NcaTwigExtension extends AbstractExtension
{
    public function __construct(
        private readonly YouTubeService $youTubeService,
        private readonly TwitterService $twitterService
    ) {
    }

    public function getFunctions()
    {
        return [
            new TwigFunction(
                'youtube',
                $this->playlistItemsListByPlaylistId(...)
            ),
            new TwigFunction(
                'twitterGetEmbedCodeByUrl',
                $this->getEmbedCodeByUrl(...)
            )
        ];
    }

    public function playlistItemsListByPlaylistId(string $playlistId): array
    {
        return $this->youTubeService->getItemsFromChannel($playlistId);
    }

    public function getEmbedCodeByUrl(string $url): string
    {
        return $this->twitterService->getEmbedCodeByUrl($url);
    }
}
