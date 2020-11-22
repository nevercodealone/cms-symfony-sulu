<?php

namespace NCATesting\health;

use NCATesting\AcceptanceTester;
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
        $I->dontSeeInPageSource($page::$cookieStringGoogle);
        $I->comment('Piwik');
        $I->dontSeeInPageSource($page::$cookieStringPiwik);
        $I->comment('Twitter');
        $I->dontSeeInPageSource($page::$cookieStringTwitter);
        $I->comment('Facebook');
        $I->dontSeeInPageSource($page::$cookieStringFacebook);
    }

    public function acceptAllTrackingPixels(AcceptanceTester $I, startpage $page)
    {
        $I->waitForElementClickable($page::$cookieAcceptAll);
        $I->click($page::$cookieAcceptAll);
        $I->waitForElementNotVisible($page::$cookieDiv);
        $I->reloadPage();
        $I->waitForElement($page::$logo);
        $I->dontSeeElement($page::$cookieDiv);

        $I->comment('Google');
        $I->seeInPageSource($page::$cookieStringGoogle);
        $I->comment('Piwik');
        $I->seeInPageSource($page::$cookieStringPiwik);
        $I->comment('Twitter');
        $I->seeInPageSource($page::$cookieStringTwitter);
        $I->comment('Facebook');
        $I->seeInPageSource($page::$cookieStringFacebook);
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
        $I->seeInPageSource($page::$cookieStringGoogle);
        $I->comment('Piwik');
        $I->seeInPageSource($page::$cookieStringPiwik);
        $I->comment('Twitter');
        $I->dontSeeInPageSource($page::$cookieStringTwitter);
        $I->comment('Facebook');
        $I->dontSeeInPageSource($page::$cookieStringFacebook);
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
        $I->dontSeeInPageSource($page::$cookieStringGoogle);
        $I->comment('Piwik');
        $I->dontSeeInPageSource($page::$cookieStringPiwik);
        $I->comment('Twitter');
        $I->seeInPageSource($page::$cookieStringTwitter);
        $I->comment('Facebook');
        $I->seeInPageSource($page::$cookieStringFacebook);
    }
}
