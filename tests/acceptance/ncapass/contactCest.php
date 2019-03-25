<?php
namespace NCATesting\ncapass;
use NCATesting\AcceptanceTester;

class contactCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/ncapaas');
        $I->waitForPageLoad();
        $I->waitForElementNotVisible("#preloader");
        $I->waitForElement('#setting > i');
    }

    /**
     * @group db
     */
    public function openContactFormAndSentWithValidData(AcceptanceTester $I)
    {
        $inputData = [
            'name' => 'Roland',
            'email' => 'rg-' . time() . '@gmail.com',
            'message' => 'Testify right here'
        ];

        $I->click('#setting > i');
        $I->wait(1);
        $I->selectOption('#reason', 'lunch');
        $I->fillField('#name', $inputData['name']);
        $I->fillField('#email', $inputData['email']);
        $I->fillField('#phone', '112');
        $I->fillField('#message', $inputData['message']);

        $I->click('#sent');
        $I->waitForText('Danke wir melden uns');

        $inputData['message'] = 'lunch|112|Testify right here';

        $I->seeInDatabase(
            'message',
            $inputData
        );
    }
}
