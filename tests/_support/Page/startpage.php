<?php
namespace NCATesting\Page;

class startpage
{
    public static $URL = '/';
    public static $logo = '//*[@data-q="logo"]';
    public static $navMain = '//ul[@data-q="navMain"]/li/a';

    public static $cookieDiv = '.ch-cookie-consent';
    public static $cookieMatomoYes = '#cookie_consent_matomo_0';
    public static $cookieMatomoNo = '#cookie_consent_matomo_1';
    public static $cookieGoogleYes = '#cookie_consent_google_0';
    public static $cookieGoogleNo = '#cookie_consent_google_1';
    public static $cookieSocialYes = '#cookie_consent_socialmedia_0';
    public static $cookieSocialNo = '#cookie_consent_socialmedia_1';
    public static $cookieSubmit = 'body > div.ch-cookie-consent.ch-cookie-consent--dark-theme.ch-cookie-consent--top > form > button';
    public static $cookieStringGoogle = 'GoogleAnalyticsObject';
    public static $cookieStringMatomo = 'piwik';
    public static $cookieStringSocial = 'ads-twitter';


    public static $serviceSection = '//*[@data-q="services-section"]';
    public static $serviceContainer = '//*[@data-q="services-container"]';
    public static $servicesNavigation = '//*[@data-q="services-navigation"]/li/div/a';
    public static $servicesItems = '//*[@data-q="services-content"]/div';

    public static $formContact = '//*[@data-q="form-contact"]';
}
