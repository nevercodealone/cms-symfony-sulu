<?php

namespace App\Service;

use DG\Twitter\Twitter;

class TwitterService
{
    /** @var Twitter */
    private $twitter;

    public $testify;

    public function __construct(Twitter $twitter)
    {
        $this->twitter = $twitter;
        $this->testify = 'testify';
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
