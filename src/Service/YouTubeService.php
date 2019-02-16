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

    public function getItemsFromChannel()
    {
        $params = [
            'maxResults' => 10,
            'playlistId' => 'PLKrKzhBjw2Y8XpxPMbaTvc8hHLqDTcDNF'
        ];

        $videoList = $this->playlistItemsListByPlaylistId('snippet',$params);
        $videos = array_reverse($videoList['items']);

        return $videos;
    }

    private function playlistItemsListByPlaylistId($part, $params) {
        $params = array_filter($params);
        $response = $this->youtubeService->playlistItems->listPlaylistItems(
            $part,
            $params
        );

        return $response;
    }
}
