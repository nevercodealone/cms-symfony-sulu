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

    public static $cookieModalAcceptAllSocialCookies = '#klaro > div > div > div.cm-modal.cm-klaro > div.cm-body > ul > li:nth-child(2) > label > span.cm-switch > div';

    public static $cookieModalAcceptSelection = '#klaro > div > div > div.cm-modal.cm-klaro > div.cm-footer > div > button.cm-btn.cm-btn-success.cm-btn-info.cm-btn-accept';

    public static $cookieKlaro = 'klaro';

    public static $cookieGoogleGa = '_ga';

    public static $cookieGoogleGid = '_gid';

    public static $cookieGoogleGat = '_gat';

    public static $cookieMatomo = '_pk';

    public static $cookieFacebook = '_fb';

    public static $serviceSection = '//*[@data-q="services-section"]';

    public static $serviceContainer = '//*[@data-q="services-container"]';

    public static $servicesNavigation = '//*[@data-q="services-navigation"]/li/div/a';

    public static $servicesItems = '//*[@data-q="services-content"]/div';

    public static $formContact = '//*[@data-q="form-contact"]';
}
