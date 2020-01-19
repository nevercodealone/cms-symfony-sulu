<?php
namespace NCATesting\training;

use NCATesting\AcceptanceTester;
use NCATesting\Page\Training;

class detailCest
{
    public function _before(AcceptanceTester $I, Training $page)
    {
        $I->amOnPage($page::$detailURL);
        $I->waitForElement('h1');
    }

    public function hOneIsUnique(AcceptanceTester $I, Training $page)
    {
        $I->seeNumberOfElements('h1', 1);
    }
}
