<?php
namespace NCATesting\Step\Acceptance;

class Navigation extends \NCATesting\AcceptanceTester
{

    public function navigateToVorverkauf() :void
    {
        $I = $this;
        $I->click('body > header > div > div > div > div:nth-child(1) > div > ul > li:nth-child(2) > a');
        $I->waitForElement('h1');
    }

}