<?php
namespace NCATesting\Page;

class startpage
{
    public static $URL = '/de';
    public static $logo = '//*[@data-q="logo"]';
    public static $navMain = '//ul[@data-q="navMain"]/li/a';

    public static $cookieDiv = '#klaro';
    public static $cookieAcceptAll = '#klaro > div > div > div > div > div > button.cm-btn.cm-btn-success';
    public static $cookieDenyAll = '#klaro > div > div > div > div > div > button.cm-btn.cm-btn-danger.cn-decline';
    public static $cookieShowMore = '#klaro > div > div > div > div > a';
    public static $cookieModal = '.cookie-modal';
    public static $cookieModalAcceptAllStatCookies = '#klaro > div > div > div.cm-modal.cm-klaro > div.cm-body > ul > li:nth-child(1) > label > span.cm-switch > div';
    public static $cookieModalAcceptAllSocialCookies = '#klaro > div > div > div.cm-modal.cm-klaro > div.cm-body > ul > li:nth-child(1) > label > span.cm-switch > div';

    public static $cookieStringGoogle = 'data-name="google"';
    public static $cookieStringPiwik = 'data-name="piwik"';
    public static $cookieStringTwitter = 'data-name="twitter"';
    public static $cookieStringFacebook = 'data-name="facebook"';

    public static $serviceSection = '//*[@data-q="services-section"]';
    public static $serviceContainer = '//*[@data-q="services-container"]';
    public static $servicesNavigation = '//*[@data-q="services-navigation"]/li/div/a';
    public static $servicesItems = '//*[@data-q="services-content"]/div';

    public static $formContact = '//*[@data-q="form-contact"]';
}
