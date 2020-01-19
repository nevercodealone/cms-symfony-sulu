<?php
namespace NCATesting\training;

use NCATesting\AcceptanceTester;
use NCATesting\Page\Training;

class detailCest
{
    public function _before(AcceptanceTester $I, Training $page)
    {
        $I->amOnPage('/');
        $I->waitForElement($page::$navigationFirstCourse);
        $url = $I->grabAttributeFrom($page::$navigationFirstCourse, 'href');
        $I->amOnUrl($url);
    }

    public function hOneIsUnique(AcceptanceTester $I, Training $page)
    {
        $I->seeNumberOfElements('h1');
    }
}
