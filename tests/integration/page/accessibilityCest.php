<?php
namespace NCATesting\page;
use NCATesting\AcceptanceTester;

class accessibilityCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/');
        $I->waitForPageLoad();
    }

    public function iframesHasTitles(AcceptanceTester $I)
    {
        $iframeTitles = $I->grabMultiple('iframe', 'title');
        $iframeSrcs = $I->grabMultiple('iframe', 'src');

        foreach ($iframeTitles as $key => $iframeTitle) {
            $I->assertNotEmpty($iframeTitle, $iframeSrcs[$key]);
        }
    }
}
