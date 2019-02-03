<?php
namespace NCATesting;

use NCATesting\_generated\UnitTesterActions;

/**
 * Inherited Methods
 * @method void wantToTest($text)
 * @method void wantTo($text)
 * @method void execute($callable)
 * @method void expectTo($prediction)
 * @method void expect($prediction)
 * @method void amGoingTo($argumentation)
 * @method void am($role)
 * @method void lookForwardTo($achieveValue)
 * @method void comment($description)
 * @method \Codeception\Lib\Friend haveFriend($name, $actorClass = NULL)
 *
 * @SuppressWarnings(PHPMD)
*/
class UnitTester extends \Codeception\Actor
{
    use UnitTesterActions;

    /**
     * @throws \ReflectionException
     */
    public function getMethodReturn($fixture, $method, $param)
    {
        $class = new \ReflectionClass($fixture);
        $method = $class->getMethod($method);
        $method->setAccessible(true);
        $methodReturn = $method->invoke($fixture, $param);
        return $methodReturn;
    }
}
