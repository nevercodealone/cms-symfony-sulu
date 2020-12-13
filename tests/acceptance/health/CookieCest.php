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

        $I->comment('Google');
        $I->dontSeeCookie($page::$cookieGoogleGa);
        $I->dontSeeCookie($page::$cookieGoogleGa);

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

        $I->comment('Google');
        $I->seeCookie($page::$cookieGoogleGa);
        $I->seeCookie($page::$cookieGoogleGid);
        $I->seeCookie($page::$cookieGoogleGat);

        $klaro = $I->grabCookie($page::$cookieKlaro);
        $cookieSettings = json_decode(urldecode($klaro), true);
        $I->comment('Validate cookie settings');
        foreach ($cookieSettings as $key => $cookieSetting) {
            $I->assertTrue($cookieSetting, $key);
        }
    }

    public function onlyAcceptStats(AcceptanceTester $I, startpage $page)
    {
        $I->waitForElementClickable($page::$cookieShowMore);
        $I->click($page::$cookieShowMore);
        $I->wait(1);
        $I->waitForElementClickable($page::$cookieModalAcceptAllStatCookies);
        $I->click($page::$cookieModalAcceptAllStatCookies);
        $I->click($page::$cookieModalAcceptSelection);

        $I->reloadPage();
        $I->waitForElement($page::$logo);
        $I->waitForPageLoad();
        $I->dontSeeElement($page::$cookieDiv);

        $I->comment('Google');
        $I->seeCookie($page::$cookieGoogleGa);
        $I->seeCookie($page::$cookieGoogleGid);

        $klaro = $I->grabCookie($page::$cookieKlaro);
        $cookieSettings = json_decode(urldecode($klaro), true);
        $I->comment('Validate cookie settings');
        $I->assertTrue($cookieSettings['google'], 'google');
        $I->assertTrue($cookieSettings['matomo'], 'matomo');
        $I->assertFalse($cookieSettings['facebook'], 'facebook');
    }

    public function onlyAcceptSocial(AcceptanceTester $I, startpage $page)
    {
        $I->waitForElementClickable($page::$cookieShowMore);
        $I->click($page::$cookieShowMore);
        $I->wait(1);
        $I->click($page::$cookieModalAcceptAllSocialCookies);
        $I->click($page::$cookieModalAcceptSelection);

        $I->reloadPage();
        $I->waitForElement($page::$logo);
        $I->waitForPageLoad();
        $I->dontSeeElement($page::$cookieDiv);

        $I->comment('Google');
        $I->dontSeeCookie($page::$cookieGoogleGa);
        $I->dontSeeCookie($page::$cookieGoogleGid);

        $klaro = $I->grabCookie($page::$cookieKlaro);
        $cookieSettings = json_decode(urldecode($klaro), true);
        $I->comment('Validate cookie settings');
        $I->assertFalse($cookieSettings['google'], 'google');
        $I->assertFalse($cookieSettings['matomo'], 'matomo');
        $I->assertTrue($cookieSettings['facebook'], 'facebook');
    }
}
