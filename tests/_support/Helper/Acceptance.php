<?php
namespace NCATesting\Helper;

// here you can define custom actions
// all public methods declared in helper class will be available in $I
use Codeception\Module;
use Codeception\Exception\ModuleException;
use Codeception\TestInterface;

class Acceptance extends Module
{
    public function _before(TestInterface $test)
    {
        sleep(15);
        parent::_before($test);
    }

    /**
     * https://stackoverflow.com/questions/26183792/use-codeception-assertion-in-conditional-if-statement
     * @param $element
     * @return bool
     * @throws ModuleException
     */
    public function seePageHasElement($element)
    {
        $findElement = $this->getModule('WebDriver')->_findElements($element);
        return (is_countable($findElement) ? count($findElement) : 0) > 0;
    }
}
