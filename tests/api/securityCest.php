<?php
namespace NCATesting;
use NCATesting\ApiTester;

class securityCest
{
    private $route = '/api/contact';

    // tests
    public function messagesDeleteNotPublic(ApiTester $I)
    {
        $delete = [
            'id' => 1
        ];

        $I->sendDELETE(
            $this->route,
            $delete
        );

        $I->canSeeResponseCodeIs(405);
    }

    public function messagesPutNotPublic(ApiTester $I)
    {
        $put = [
            'id' => 1,
            'message' => 'when you can read this test failed'
        ];

        $I->sendPUT(
            $this->route,
            $put
        );

        $I->canSeeResponseCodeIs(405);
    }
}
