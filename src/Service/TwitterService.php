<?php

namespace App\Service;

use DG\Twitter\Twitter;

class TwitterService
{
    /** @var Twitter */
    private $twitter;

    public function __construct(Twitter $twitter)
    {
        $this->twitter = $twitter;
    }

    public function statusesShowId($id)
    {
        $res = $this->twitter->request('statuses/show', 'GET', ['id' => $id, 'include_entities' => 'extended']);
        return $res;
    }

    public function getEmbedCodeByUrl($url)
    {
        return '<h1>Twitter HTML</h1>';
    }
}
