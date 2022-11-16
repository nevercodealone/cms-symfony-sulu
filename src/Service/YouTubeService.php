<?php
namespace App\Service;

class YouTubeService
{
    /** @var \Google_Service_YouTube */
    private $youtubeService;

    public function __construct(\Google_Service_YouTube $youtubeService)
    {
        $this->youtubeService = $youtubeService;
    }

    public function getItemsFromChannel($playlistId = 'PLKrKzhBjw2Y8XpxPMbaTvc8hHLqDTcDNF')
    {
        $params = [
            'maxResults' => 100,
            'playlistId' => $playlistId
        ];

        $videoList = $this->playlistItemsListByPlaylistId('snippet', $params);
        $videos = $videoList['items'];
        usort($videos, static function ($a, $b) {
            $actual = strtotime((string) $a['snippet']['publishedAt']);
            $next = strtotime((string) $b['snippet']['publishedAt']);
            return $actual - $next;
        });
        $videos = array_reverse($videos);

        return array_slice($videos, 0, 10);
    }

    private function playlistItemsListByPlaylistId($part, $params)
    {
        $params = array_filter($params);
        $response = $this->youtubeService->playlistItems->listPlaylistItems(
            $part,
            $params
        );

        return $response;
    }
}
