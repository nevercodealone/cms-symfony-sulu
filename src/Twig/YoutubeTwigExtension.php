<?php

namespace App\Twig;

use App\Service\YouTubeService;
use Google_Service_YouTube;
use Symfony\Component\Intl\Countries;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * This is just an example Twig Extension.
 * It is recommended to use `intl_country` from the `sulu/web-twig` package instead of this.
 */
class YoutubeTwigExtension extends AbstractExtension
{
    private \App\Service\YouTubeService $youTubeService;

    public function __construct(YouTubeService $youTubeService)
    {
        $this->youTubeService = $youTubeService;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('youtube', [$this, 'playlistItemsListByPlaylistId']),
        ];
    }

    public function playlistItemsListByPlaylistId(string $playlistId): array
    {
        return $this->youTubeService->getItemsFromChannel($playlistId);
    }
}
