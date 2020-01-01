<?php

namespace App\Service;

use Unirest\Request;

class MeetupService
{
    /** @var Request */
    private $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function getNextEvents()
    {
        // @codingStandardsIgnoreStart
        $meetupLink = 'https://api.meetup.com/meetup-group-PNulFhzz/events?&sign=true&photo-host=public&page=20&fields=featured_photo';
        // @codingStandardsIgnoreEnd
        
        $response = $this->request::get($meetupLink);

        return json_decode($response->raw_body, true);
    }
}
