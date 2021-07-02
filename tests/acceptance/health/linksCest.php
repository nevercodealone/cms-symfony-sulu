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

    /**
     * @group live
     */
    public function allInternalLinksFromStartpageWorks(AcceptanceTester $I, Config $helperConfig)
    {
        $specialLinksParts = [
            '#',
            '_profiler'
        ];

        $url = $helperConfig->getUrlFromConfigWebdriver('url');
        $items = $I->grabMultiple('a', 'href');

        $internalLinks = [];

        foreach ($items as $key => $item) {
            foreach ($specialLinksParts as $specialLink) {
                if(strpos($item, $specialLink) !== false) {
                    continue 2;
                }
            }

            if(strpos($item, $url) !== false) {
                $item = str_replace($url, '', $item);
                if (!in_array($item, $internalLinks)) {
                    $internalLinks[] = $item;
                }
            }
        }

        // remove first link to startpage
        array_shift($internalLinks);

        foreach($internalLinks as $internalLink) {
            $I->amOnPage($internalLink);
            $I->waitForElement('body');
            $I->cantSee('Error 500');
        }
    }
}
