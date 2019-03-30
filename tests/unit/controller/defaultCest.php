<?php
namespace NCATesting\controller;

use App\Controller\PageController;
use NCATesting\UnitTester;

use Symfony\Component\HttpFoundation\Request;

class defaultCest
{
    private $fixture;

    public function _before(UnitTester $I)
    {
        $this->fixture = new PageController();
    }

    public function getSourceParamReturnWebsiteDefault(UnitTester $I)
    {
        $request = new Request();
        $methodReturn = $I->getMethodReturn($this->fixture,'getSourceParam', $request);
        $I->assertContains('aff=website', $methodReturn);
    }

    public function getSourceParamFromAffiliateGetParam(UnitTester $I)
    {
        $affiliate = 'testify';
        $request = new Request();
        $request->query->set('aff', $affiliate);
        $methodReturn = $I->getMethodReturn($this->fixture,'getSourceParam', $request);
        $I->assertContains('aff=' . $affiliate, $methodReturn);
    }
}
