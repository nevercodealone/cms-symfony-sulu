<?php
namespace NCATesting\seo;
use NCATesting\AcceptanceTester;

class startpageCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/');
        $I->waitForPageLoad();
    }

    public function titleContainsOpenSource(AcceptanceTester $I)
    {
        $I->canSeeInTitle('Open Source fail test');
    }
}
