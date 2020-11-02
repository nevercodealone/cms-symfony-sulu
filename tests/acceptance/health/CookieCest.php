<?php namespace NCATesting\health;
use NCATesting\AcceptanceTester;
use NCATesting\Page\startpage;

class CookieCest
{
    public function _before(AcceptanceTester $I, startpage $page)
    {
        $I->amOnPage($page::$URL);
        $I->waitForElement($page::$cookieDiv);
    }

    public function allNoDoNotShowTrackingPixels(AcceptanceTester $I, startpage $page)
    {
        $I->click($page::$cookieSubmit);
        $I->waitForElementNotVisible($page::$cookieDiv);

        $I->comment('Google');
        $I->dontSeeInPageSource($page::$cookieStringGoogle);
        $I->comment('Matomo');
        $I->dontSeeInPageSource($page::$cookieStringMatomo);
        $I->comment('Social');
        $I->dontSeeInPageSource($page::$cookieStringSocial);
    }
}
