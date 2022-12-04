<?php
namespace NCATesting;

use Codeception\Lib\Friend;
use Codeception\Actor;
use NCATesting\_generated\AcceptanceTesterActions;
use diversen\meta;

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
class AcceptanceTester extends Actor
{
    use AcceptanceTesterActions;

    /**
     * @param int $timeout
     */
    public function waitForAjax($timeout = 5)
    {
        $this->waitForJS(
            'return !!window.jQuery && window.jQuery.active == 0;',
            $timeout
        );
    }


    /**
     * @param int $timeout
     */
    public function waitForPageLoad($timeout = 5)
    {
        $this->waitForElement('h1');
    }

    public function getMeta($tags = []) {
        $m = new meta();
        return $m->getMeta($this->getCurrentUrl(), $tags);
    }

    public function getCurrentUrl()
    {
        return $this->executeJS("return location.href");
    }

    public function getCurlStatusByUrl($url) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_exec($ch);
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return $status;
    }
}
