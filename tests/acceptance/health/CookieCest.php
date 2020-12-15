<?php

namespace NCATesting\health;

use NCATesting\AcceptanceTester;
use NCATesting\Helper\Acceptance as AcceptanceHelper;
use NCATesting\Page\startpage;

class CookieCest
{
    public function _before(AcceptanceTester $I, startpage $page)
    {
        $I->amOnPage($page::$URL);
        $I->waitForElement($page::$logo);
        $I->resetCookie('klaro');
        $I->reloadPage();
        $I->waitForElement($page::$logo);
        $I->waitForElementVisible($page::$cookieDiv);
    }

    public function denyAllTrackingPixels(AcceptanceTester $I, startpage $page)
    {
        $I->waitForElementClickable($page::$cookieDenyAll);
        $I->click($page::$cookieDenyAll);
        $I->waitForElementNotVisible($page::$cookieDiv);

        $I->reloadPage();
        $I->waitForElementClickable($page::$logo);
        $I->waitForPageLoad();
        $I->dontSeeElement($page::$cookieDiv);

        $klaro = $I->grabCookie($page::$cookieKlaro);
        $cookieSettings = json_decode(urldecode($klaro), true);
        $I->comment('Validate cookie settings');
        foreach ($cookieSettings as $key => $cookieSetting) {
            $I->assertFalse($cookieSetting, $key);
        }
    }

    public function acceptAllTrackingPixels(AcceptanceTester $I, startpage $page,  AcceptanceHelper $acceptanceHelper)
    {
        $I->waitForElementClickable($page::$cookieAcceptAll);
        $I->click($page::$cookieAcceptAll);
        $I->waitForElementNotVisible($page::$cookieDiv);
        $I->reloadPage();
        $I->waitForElement($page::$logo);
        $I->waitForPageLoad();
        $I->dontSeeElement($page::$cookieDiv);

        $klaro = $I->grabCookie($page::$cookieKlaro);
        $cookieSettings = json_decode(urldecode($klaro), true);
        $I->comment('Validate cookie settings');
        foreach ($cookieSettings as $key => $cookieSetting) {
            $I->assertTrue($cookieSetting, $key);
        }
    }

}
