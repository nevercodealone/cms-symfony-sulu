<?php

namespace App\Service;

use DG\Twitter\Twitter;

class TwitterService
{
    private readonly Twitter $twitter;

    public function __construct(
        private readonly string $twitter_api_key,
        private readonly string $twitter_api_secret,
        private readonly string $twitter_access_token,
        private readonly string $twitter_access_secret
    ) {
        $this->twitter = new Twitter(
            $this->twitter_api_key,
            $this->twitter_api_secret,
            $this->twitter_access_token,
            $this->twitter_access_secret
        );
    }

    public function statusesShowId($id)
    {

        $res = $this->twitter->request('statuses/show', 'GET', ['id' => $id, 'include_entities' => 'extended']);
        return $res;
    }

    public function getEmbedCodeByUrl($url)
    {
        $res = $this->twitter->request('statuses/oembed', 'GET', ['url' => $url, 'maxwidth' => '670']);
        return $res->html;
    }
}
