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
        $I->waitForElement($page::$logo);
        $I->dontSeeElement($page::$cookieDiv);

        $I->comment('Google');
        $I->dontSeeCookie($page::$cookieGoogleGa);
        $I->dontSeeCookie($page::$cookieGoogleGa);
    }

    public function acceptAllTrackingPixels(AcceptanceTester $I, startpage $page,  AcceptanceHelper $acceptanceHelper)
    {
        $I->waitForElementClickable($page::$cookieAcceptAll);
        $I->click($page::$cookieAcceptAll);
        $I->waitForElementNotVisible($page::$cookieDiv);
        $I->reloadPage();
        $I->waitForElement($page::$logo);
        $I->dontSeeElement($page::$cookieDiv);

        $I->comment('Google');
        $I->seeCookie($page::$cookieGoogleGa);
        $I->seeCookie($page::$cookieGoogleGid);
    }

    public function onlyAcceptStats(AcceptanceTester $I, startpage $page)
    {
        $I->waitForElementClickable($page::$cookieShowMore);
        $I->click($page::$cookieShowMore);
        $I->wait(1);
        $I->click($page::$cookieModalAcceptAllStatCookies);
        $I->click($page::$cookieModalAcceptSelection);

        $I->reloadPage();
        $I->waitForElement($page::$logo);
        $I->dontSeeElement($page::$cookieDiv);

        $I->comment('Google');
        $I->seeCookie($page::$cookieGoogleGa);
        $I->seeCookie($page::$cookieGoogleGid);
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
        $I->dontSeeElement($page::$cookieDiv);

        $I->comment('Google');
        $I->dontSeeCookie($page::$cookieGoogleGa);
        $I->dontSeeCookie($page::$cookieGoogleGid);
    }
}
