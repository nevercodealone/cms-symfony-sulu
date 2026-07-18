<?php

declare(strict_types=1);

namespace App\Twig;

use App\Service\TwitterService;
use App\Service\WordpressService;
use App\Sulu\Service\LatestArticlesService;
use App\Service\YouTubeService;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Custom Twig Extension for NCA functionality
 */
class NcaTwigExtension extends AbstractExtension
{
    public function __construct(
        private readonly YouTubeService $youTubeService,
        private readonly WordpressService $wordpressService,
        private readonly LatestArticlesService $latestArticlesService,
        private readonly RequestStack $requestStack,
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
        ),
        new TwigFunction(
            'latestArticles',
            [$this, 'getLatestArticles']
        ),
        ];
    }

  /**
   * @return array<int, mixed>
   */
    public function playlistItemsListByPlaylistId(string $playlistId): array
    {
        return $this->youTubeService->getItemsFromChannel($playlistId);
    }

  /**
   * @return array<int, mixed>
   */
    public function getWordpressPosts(): array
    {
        try {
            return $this->wordpressService->getItemsFromBlog();
        } catch (\Throwable $e) {
            return [];
        }
    }

  /**
   * Return the UUIDs of the $limit most recently created published pages
   * for the current request locale. Resolve each via sulu_content_load() in Twig.
   *
   * @return list<string>
   */
    public function getLatestArticles(int $limit = 6): array
    {
        try {
            $locale = $this->requestStack->getCurrentRequest()?->getLocale() ?? 'de';

            return $this->latestArticlesService->findLatestArticleUuids($limit, $locale);
        } catch (\Throwable $e) {
            return [];
        }
    }
}
