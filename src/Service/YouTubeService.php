<?php

declare(strict_types=1);

namespace App\Service;

use Google_Service_YouTube;

class YouTubeService
{
    /** @var \Google_Service_YouTube */
    private $youtubeService;

    public function __construct(Google_Service_YouTube $youtubeService)
    {
        $this->youtubeService = $youtubeService;
    }

    /**
     * @return array<int, mixed>
     */
    public function getItemsFromChannel(string $playlistId = 'PLKrKzhBjw2Y8XpxPMbaTvc8hHLqDTcDNF'): array
    {
        $params = [
            'maxResults' => 100,
            'playlistId' => $playlistId
        ];

        $videoList = $this->playlistItemsListByPlaylistId('snippet', $params);
        $items = $videoList->getItems();

        // Convert to arrays for template compatibility
        $videos = array_map(function ($item) {
            return [
                'snippet' => [
                    'publishedAt' => $item->getSnippet()->getPublishedAt(),
                    'title' => $item->getSnippet()->getTitle(),
                    'description' => $item->getSnippet()->getDescription(),
                    'thumbnails' => $item->getSnippet()->getThumbnails(),
                    'resourceId' => [
                        'videoId' => $item->getSnippet()->getResourceId()->getVideoId(),
                    ],
                ],
            ];
        }, $items);

        usort($videos, static function ($a, $b) {
            $actual = strtotime((string) $a['snippet']['publishedAt']);
            $next = strtotime((string) $b['snippet']['publishedAt']);
            return $actual - $next;
        });
        $videos = array_reverse($videos);

        return array_slice($videos, 0, 10);
    }

    /**
     * @param array<string, mixed> $params
     * @return \Google\Service\YouTube\PlaylistItemListResponse
     */
    private function playlistItemsListByPlaylistId(string $part, array $params): \Google\Service\YouTube\PlaylistItemListResponse
    {
        $params = array_filter($params);

        return $this->youtubeService->playlistItems->listPlaylistItems(
            $part,
            $params
        );
    }
}
