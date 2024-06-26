<?php
namespace App\Service;

use Unirest\Request;

class WordpressService
{
    public function getItemsFromBlog()
    {
        $headers = ['Accept' => 'application/json'];
        $query = [
            'per_page' => 10,
            '_embed' => ''
        ];

        $response = Request::get('https://blog.nevercodealone.de/wp-json/wp/v2/posts', $headers, $query);

        $body = json_decode((string) $response->raw_body, true, 512, JSON_THROW_ON_ERROR);

        return $body;
    }
}
