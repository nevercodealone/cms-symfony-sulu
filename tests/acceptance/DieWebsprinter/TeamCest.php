<?php

namespace NCATesting\DieWebsprinter;

use NCATesting\AcceptanceTester;
use NCATesting\Page\DieWebsprinter;

class TeamCest
{
    public function _before(AcceptanceTester $I, DieWebsprinter $page)
    {
        $I->amOnPage($page::$URL);
        $I->waitForElement($page::$socialLink);
    }

    public function socialLinkMatchClass(AcceptanceTester $I, DieWebsprinter $page)
    {
        $hrefs = array_unique($I->grabMultiple($page::$socialLink, 'href'));
        $classes = $I->grabMultiple($page::$socialIcon, 'class');

        $I->assertNotEmpty($hrefs, 'Social item links');

        foreach ($hrefs as $key => $href) {
            $domain = explode('.', parse_url($href)['host'])[1];
            $I->assertStringContainsString($domain, $classes[$key]);
        }
    }
}
