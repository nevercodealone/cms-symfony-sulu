<?php namespace NCATesting\health;

use NCATesting\AcceptanceTester;
use NCATesting\Helper\Config;
use NCATesting\Page\startpage;

class linksCest
{
    public function _before(AcceptanceTester $I, startpage $page)
    {
        $I->amOnPage($page::$URL);
        $I->waitForElement('a');
    }

    // tests
    public function internalLinksWorks(AcceptanceTester $I, Config $helperConfig)
    {
        $specialLinks = [
            'tel:+',
            '//symfony.com',
            'https://clea',
            '_profiler',
            '/#'
        ];

        $url = $helperConfig->getUrlFromConfigWebdriver('url');

        $items = $I->grabMultiple('a', 'href');
        $itemsTargets = $I->grabMultiple('a', 'target');

        $internalLinks = [];

        foreach ($items as $key => $item) {
            if($item === null) {
                continue;
            }

            if(strpos($item, $url) !== false) {
                foreach ($specialLinks as $specialLink) {
                    if(strpos($item, $specialLink) !== false) {
                        continue 2;
                    }
                }

                $item = str_replace($url, '', $item);
                if(!in_array($item, $internalLinks)) {
                    $internalLinks[] = $item;
                }
            }
        }

        // remove first link to startpage
        array_shift($internalLinks);

        foreach($internalLinks as $internalLink) {
            $I->amOnPage($internalLink);
            $I->waitForElement('body');
            $I->canSee('Error 500');
        }
    }
}
