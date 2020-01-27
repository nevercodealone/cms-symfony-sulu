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

    public function validateTrainingItems(AcceptanceTester $I, Training $page)
    {
        $items = $I->grabMultiple($page::$overviewListItem);

        foreach ($items as $key => $item) {
            $title = $I->grabTextFrom($page::$overviewListItem . '[' . ($key + 1) . ']');
            $I->comment('Key: ' . $key);
            $I->assertNotEmpty($title, 'Title');
        }
    }
}
