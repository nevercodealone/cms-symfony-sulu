<?php
namespace NCATesting;

use Codeception\Lib\Friend;
use Codeception\Actor;
use ReflectionException;
use ReflectionClass;
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
 * @method Friend haveFriend($name, $actorClass = null)
 *
 * @SuppressWarnings(PHPMD)
*/
class UnitTester extends Actor
{
    use UnitTesterActions;

    /**
     * @throws ReflectionException
     */
    public function getMethodReturn($fixture, $method, $param)
    {
        $class = new ReflectionClass($fixture);
        $method = $class->getMethod($method);
        $method->setAccessible(true);

        $methodReturn = $method->invoke($fixture, $param);
        return $methodReturn;
    }
}
