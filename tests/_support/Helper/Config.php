<?php
namespace NCATesting\Helper;

// here you can define custom actions
// all public methods declared in helper class will be available in $I

class Config extends \Codeception\Module
{
    public function getUrlFromConfigWebdriver($key = '')
    {
        $webDriver = $this->getModule('WebDriver')->_getConfig();

        if($key !== '') {
            return $webDriver[$key];
        }

        return $webDriver;
    }
}
