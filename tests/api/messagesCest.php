<?php
namespace AppBundle;
use NCATesting\ApiTester;

class messagesCest
{
    /**
     * @group db
     */
    public function addMessageWithValidNameAndEmail(ApiTester $I)
    {
        $microtime = microtime();

        $name = 'test';
        $email = 'test' . time() . '@ify.com';
        $message = 'CC message:' . $microtime;

        $messagePost = [
            'name'    => $name,
            'email'   => $email,
            'message' => $message
        ];


        $I->haveHttpHeader('Content-Type', 'application/json');
        $I->sendPOST(
            '/api/contact',
            json_encode($messagePost)
        );

        $I->seeResponseIsJson();

        $response = json_decode($I->grabResponse(), true);

        $I->assertEquals('messagesAction', $response);
        $I->seeResponseCodeIs(200);
        $I->seeNumRecords(1, 'message', $messagePost);
    }

    /**
     * @group db
     */
    public function singleEmptyValueMessageStatus(ApiTester $I)
    {
        $time = microtime();

        $name = 'test:' . $time;
        $email = 'test@ify.com';
        $message = 'This is a test:' . $time;

        $messagePost = [
            'name'    => $name,
            'email'   => $email,
            'message' => $message
        ];

        foreach ($messagePost as $key => $value) {
            $postArray = $messagePost;
            $postArray[$key] = '';

            $I->haveHttpHeader('Content-Type', 'application/json');
            $I->sendPOST(
                '/api/contact',
                json_encode($postArray)
            );

            $I->seeResponseIsJson();

            $response = json_decode($I->grabResponse(), true);

            $I->assertContains('empty', $response);
            $I->seeResponseCodeIs(400);
            $I->dontSeeInDatabase('message', $postArray);
        }
    }

    /**
     * @group db
     */
    public function singleNotSetValueMessageStatus(ApiTester $I)
    {
        $time = microtime();

        $name = 'test:' . $time;
        $email = 'test@ify.com';
        $message = 'This is a test:' . $time;

        $messagePost = [
            'name'    => $name,
            'email'   => $email,
            'message' => $message
        ];

        foreach ($messagePost as $key => $value) {
            $postArray = $messagePost;
            unset($postArray[$key]);

            $I->haveHttpHeader('Content-Type', 'application/json');
            $I->sendPOST(
                '/api/contact',
                json_encode($postArray)
            );

            $I->seeResponseIsJson();

            $response = json_decode($I->grabResponse(), true);

            $I->assertContains('not set', $response);
            $I->seeResponseCodeIs(401);
            $I->dontSeeInDatabase('message', $postArray);
        }
    }
}
