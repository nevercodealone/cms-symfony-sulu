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
        $titles = $I->grabMultiple($page::$overviewListClassTitle);
        $trainer = $I->grabMultiple($page::$overviewListClassTrainer);
        $descriptions = $I->grabMultiple($page::$overviewListClassDescription);
        $hrefs = $I->grabMultiple($page::$overviewListClassUrl, 'href');
        $srces = $I->grabMultiple($page::$overviewListClassImg, 'src');
        $alts = $I->grabMultiple($page::$overviewListClassImg, 'alt');
        $imgTitles = $I->grabMultiple($page::$overviewListClassImg, 'title');

        foreach ($titles as $key => $title) {
            $I->comment('key: ' . $key);
            $I->assertNotEmpty($title, 'Title');
            $I->assertNotEmpty($trainer[$key], 'Trainer');
            $I->assertNotEmpty($descriptions[$key], 'Description');
            $I->assertNotEmpty($hrefs[$key], 'href');
            $I->assertNotEmpty($srces[$key], 'src');
            $I->assertNotEmpty($alts[$key], 'alt');
            $I->assertNotEmpty($imgTitles[$key], 'Img title');
        }
    }
}
