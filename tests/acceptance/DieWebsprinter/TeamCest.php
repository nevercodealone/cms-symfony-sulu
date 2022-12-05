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
            // Twitter has no www
            $part = str_contains($href, 'www.') ? 1 : 0;
            $domain = explode('.', parse_url($href)['host'])[$part];
            $I->assertStringContainsString($domain, $classes[$key]);
        }
    }

    public function imageHasNotEmptyAltTag(AcceptanceTester $I, DieWebsprinter $page)
    {
        $imageAltTags = $I->grabMultiple($page::$teamImage, 'alt');

        $I->assertNotEmpty($imageAltTags, 'Social images');

        foreach ($imageAltTags as $imageAltTag) {
            $I->assertFalse(empty(trim($imageAltTag)), $imageAltTag);
        }
    }
}
