<?php
namespace NCATesting\pageobjects;
use NCATesting\AcceptanceTester;
use NCATesting\Page\startpage;

class servicesCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/');
        $I->waitForPageLoad();
    }

    public function navigationMatchesAnchors(AcceptanceTester $I, startpage $startpage)
    {
        $anchors = $I->grabMultiple($startpage::$servicesNavigation, 'href');
        $contentItems = $I->grabMultiple($startpage::$servicesItems, 'id');

        foreach ($anchors as $key => $anchor) {
            $anchorValue = explode('#', $anchor)[1];
            $I->assertEquals($anchorValue, $contentItems[$key]);
        }
    }

    public function onlyFirstContentElementIsVisibleOnStart(AcceptanceTester $I, startpage $startpage)
    {
        $contentItems = $I->grabMultiple($startpage::$servicesItems, 'id');

        $first = true;
        foreach ($contentItems as $contentItem) {
            // First item is visible
            if ($first) {
                $I->seeElement('#' . $contentItem);
                $first = false;
                continue;
            }

            $I->cantSeeElement('#' . $contentItem);
        }
    }
}
