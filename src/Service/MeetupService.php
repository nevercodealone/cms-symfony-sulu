<?php

namespace App\Service;

use Unirest\Request;

class MeetupService
{
    public function __construct(private readonly Request $request)
    {
    }

    public function getNextEvents()
    {
        // @codingStandardsIgnoreStart
        $meetupLink = 'https://api.meetup.com/meetup-group-PNulFhzz/events?&sign=true&photo-host=public&page=20&fields=featured_photo';
        // @codingStandardsIgnoreEnd
        
        $response = $this->request::get($meetupLink);

        return json_decode((string) $response->raw_body, true, 512, JSON_THROW_ON_ERROR);
    }
}
