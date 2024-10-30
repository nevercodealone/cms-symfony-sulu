<?php

namespace App\Twig;

use App\Service\TwitterService;
use App\Service\YouTubeService;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * This is just an example Twig Extension.
 * It is recommended to use `intl_country` from the `sulu/web-twig` package instead of this.
 */
class NcaTwigExtension extends AbstractExtension
{
  public function __construct(
    private readonly YouTubeService $youTubeService
  ) {
  }

  public function getFunctions()
  {
    return [
      new TwigFunction(
        'youtube',
        $this->playlistItemsListByPlaylistId(...)
      )
    ];
  }

  public function playlistItemsListByPlaylistId(string $playlistId): array
  {
    return $this->youTubeService->getItemsFromChannel($playlistId);
  }

}
