<?php
/**
 * Created by PhpStorm.
 * User: rocket
 * Date: 22.04.18
 * Time: 01:28
 */

namespace App\Service;

class SpamProtection
{
    public $spamWords = [
        'viagra',
        'script',
        'href'
    ];
    public function validateUserInputs(array $data) {
        // Validate name
        if(!$this->validateName($data['name'])) {
            return false;
        }

        // Validate ip
        if(!$this->validateIp($data['ip'])) {
            return false;
        }

        // Validate email
        if(!$this->validateEmail($data['email'])) {
            return false;
        }

        // Validate message
        if(!$this->validateMessage($data['message'])) {
            return false;
        }

        return true;
    }

    protected function validateName(string $name) {
        if($this->isEmptyString($name)) {
            return false;
        }

        if($this->isSpamString($name)) {
            return false;
        }

        return true;
    }

    protected function validateIp(string $ip)
    {
        if(strpos($ip, '127.0.0.1') !== false || strpos($ip, 'localhost') !== false) {
            return true;
        }

        if(!filter_var($ip, FILTER_VALIDATE_IP)) {
            return false;
        }

        if(strpos($ip, '192') !== false) {
            return false;
        }

        // Europe
        if(!$this->isIpFromDe($ip)) {
            return false;
        }

        return true;

    }

    protected function isIpFromDe(string $ip) {
        return true;
    }

    protected function validateEmail(string $email) {
        if($email === '') {
            return false;
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
           return false;
        }

        return true;
    }

    protected function validateMessage(string $message) {
        if($this->isEmptyString($message)) {
            return false;
        }

        if($this->isSpamString($message)) {
            return false;
        }

        return true;
    }

    private function isEmptyString(string $string) {
        return $string === '';
    }

    private function isSpamString(string $string) {
        $string = strtolower($string);
        foreach ($this->spamWords as $spamWord) {
            if (strpos($string, $spamWord) !== false) {
                return true;
            }
        }

        return false;
    }

}