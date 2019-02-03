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
            if($first) {
                $I->seeElement('#' . $contentItem);
                $first = false;
                continue;
            }

            $I->cantSeeElement('#' . $contentItem);
        }
    }

    public function onClickElementIsVisibleAndAllOthersNot(AcceptanceTester $I, startpage $startpage)
    {
        $I->scrollTo($startpage::$serviceSection);

        $anchors = $I->grabMultiple($startpage::$servicesNavigation, 'href');
        $contentItems = $I->grabMultiple($startpage::$servicesItems, 'id');

        array_shift($anchors);
        $firstItem = array_shift($contentItems);

        $I->seeElement('#' . $firstItem);

        foreach ($anchors as $key => $anchor)
        {
            $I->click('//*[@data-q="services-navigation"]/li[' . ($key + 2) . ']/div/a');
            $I->waitForElementVisible('#' . $contentItems[$key]);

            $actualContentItems = $I->grabMultiple($startpage::$servicesItems, 'id');
            foreach ($actualContentItems as $actualContentItem) {
                if($actualContentItem === $contentItems[$key]) {
                    continue;
                }

                $I->cantSeeElement('#' . $actualContentItem);
            }
        }

        $I->scrollTo($startpage::$serviceSection);
        $I->click('//*[@data-q="services-navigation"]/li[1]/div/a');
        $I->waitForElementVisible('#' . $firstItem);
    }
}
