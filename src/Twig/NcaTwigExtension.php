<?php

namespace App\Twig;

use App\Service\TwitterService;
use App\Service\WordpressService;
use App\Service\YouTubeService;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Custom Twig Extension for NCA functionality
 */
class NcaTwigExtension extends AbstractExtension
{
  public function __construct(
    private readonly YouTubeService $youTubeService,
    private readonly WordpressService $wordpressService
  ) {
  }

  public function getFunctions(): array
  {
    return [
      new TwigFunction(
        'youtube',
        [$this, 'playlistItemsListByPlaylistId']
      ),
      new TwigFunction(
        'wordpressPosts',
        [$this, 'getWordpressPosts']
      )
    ];
  }

  public function playlistItemsListByPlaylistId(string $playlistId): array
  {
    return $this->youTubeService->getItemsFromChannel($playlistId);
  }

  public function getWordpressPosts(): array
  {
    return $this->wordpressService->getItemsFromBlog();
  }
}
