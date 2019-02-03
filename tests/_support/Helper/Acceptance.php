<?php
namespace NCATesting\Helper;

// here you can define custom actions
// all public methods declared in helper class will be available in $I

class Acceptance extends \Codeception\Module
{
    /**
     * https://stackoverflow.com/questions/26183792/use-codeception-assertion-in-conditional-if-statement
     * @param $element
     * @return bool
     * @throws \Codeception\Exception\ModuleException
     */
    public function seePageHasElement($element)
    {
        $findElement = $this->getModule('WebDriver')->_findElements($element);
        return count($findElement) > 0;
    }
}
