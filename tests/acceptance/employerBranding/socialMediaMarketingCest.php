<?php

namespace NCATesting\employerBranding;

use NCATesting\AcceptanceTester;

class socialMediaMarketingCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/de/employer-branding/');
        $I->waitForPageLoad();
        $I->scrollTo('#socialmediamarketing');
    }

    // tests
    public function filterWorksFine(AcceptanceTester $I)
    {
        $selectorFigure = 'div.isotope > figure';
        $numberOfAllElements = count($I->grabMultiple($selectorFigure));
        $filtersDataOptionValues = $I->grabMultiple('#filters > li > a', 'data-option-value');

        foreach ($filtersDataOptionValues as $key => $dataOptionValue) {
            if($dataOptionValue === '*') {
                $I->seeNumberOfElements($selectorFigure, $numberOfAllElements);
                continue;
            }

            $I->click('#filters > li:nth-child(' . ($key + 1) . ') > a');
            $I->wait(1);

            foreach ($filtersDataOptionValues as $filtersDataOptionValue) {
                if($filtersDataOptionValue === '*') {
                    continue;
                }

                $searchSelector = 'figure' . $filtersDataOptionValue;
                if($filtersDataOptionValue === $dataOptionValue) {
                    $I->seeElement($searchSelector);
                } else {
                    $I->cantSeeElement($searchSelector);
                }
            }
        }

    }
}
