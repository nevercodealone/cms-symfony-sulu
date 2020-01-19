<?php

namespace NCATesting\training;
use NCATesting\AcceptanceTester;
use NCATesting\Page\Training;

class overviewCest
{
    public function _before(AcceptanceTester $I, Training $page)
    {
        $I->amOnPage($page::$URL);
        $I->waitForElement($page::$overviewListItem);
    }

    public function pageItemsExists(AcceptanceTester $I, Training $page)
    {
        $I->seeElement($page::$overviewListItem);
    }

    public function youTubeItemsExists(AcceptanceTester $I, Training $page)
    {
        $I->seeElement($page::$overviewYTItem);
    }
}
