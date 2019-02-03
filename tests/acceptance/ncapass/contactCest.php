<?php
namespace NCATesting\ncapass;
use NCATesting\AcceptanceTester;

class contactCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/nca-paas-startup/');
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
        $I->fillField('#namefield', $inputData['name']);
        $I->fillField('#emailfield', $inputData['email']);
        $I->fillField('#phone', '112');
        $I->fillField('#messagefield', $inputData['message']);

        $I->click('#nca-form > div > div.button > button');
        $I->waitForText('Danke wir melden uns');

        $inputData['message'] = 'lunch|112|Testify right here';

        $I->seeInDatabase(
            'message',
            $inputData
        );
    }
}
