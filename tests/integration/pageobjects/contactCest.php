<?php
namespace NCATesting\pageobjects;
use NCATesting\AcceptanceTester;
use NCATesting\Page\startpage;

class contactCest
{
    public function _before(AcceptanceTester $I, startpage $startpage)
    {
        $I->amOnPage('/');
        $I->waitForPageLoad();
        $I->scrollTo($startpage::$formContact);
    }

    /**
     * @group db
     */
    public function checkValidFormSending(AcceptanceTester $I)
    {
        $time = microtime();

        $name = 'test';
        $email = 'test@ify.com';
        $message = 'CC message:' . $time;

        $messagePost = [
            'name'    => $name,
            'email'   => $email,
            'message' => $message
        ];

        $I->fillField('#name', $name);
        $I->fillField('#email', $email);
        $I->fillField('#message', $message);
        $I->click('#send');

        $I->waitForText('Danke wir melden uns');

        $I->seeNumRecords(1, 'message', $messagePost);
    }
}
