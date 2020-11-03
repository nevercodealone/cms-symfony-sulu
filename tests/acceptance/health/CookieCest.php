<?php namespace NCATesting\health;
use NCATesting\AcceptanceTester;
use NCATesting\Page\startpage;

class CookieCest
{
    public function _before(AcceptanceTester $I, startpage $page)
    {
        $I->amOnPage($page::$URL);
        $I->waitForElement($page::$logo);
        $I->resetCookie('Cookie_Consent');
        $I->resetCookie('Cookie_Category_socialmedia');
        $I->resetCookie('Cookie_Category_matomo');
        $I->resetCookie('Cookie_Category_google');
        $I->reloadPage();
        $I->waitForElement($page::$logo);
        $I->waitForElementVisible($page::$cookieDiv);
        $I->scrollTo($page::$cookieDiv);
    }

    public function allNoDoNotShowTrackingPixels(AcceptanceTester $I, startpage $page)
    {
        $I->waitForElementClickable($page::$cookieSubmit);
        $I->click($page::$cookieSubmit);
        $I->waitForElementNotVisible($page::$cookieDiv);

        $I->comment('Google');
        $I->dontSeeInPageSource($page::$cookieStringGoogle);
        $I->comment('Matomo');
        $I->dontSeeInPageSource($page::$cookieStringMatomo);
        $I->comment('Social');
        $I->dontSeeInPageSource($page::$cookieStringSocial);
    }

    public function allYesShowTrackingPixels(AcceptanceTester $I, startpage $page)
    {
        $I->checkOption($page::$cookieMatomoYes);
        $I->checkOption($page::$cookieGoogleYes);
        $I->checkOption($page::$cookieSocialYes);
        $I->click($page::$cookieSubmit);
        $I->waitForElementNotVisible($page::$cookieDiv);
        $I->reloadPage();
        $I->waitForElement($page::$logo);

        $I->comment('Google');
        $I->seeInPageSource($page::$cookieStringGoogle);
        $I->comment('Matomo');
        $I->seeInPageSource($page::$cookieStringMatomo);
        $I->comment('Social');
        $I->seeInPageSource($page::$cookieStringSocial);
    }

}
