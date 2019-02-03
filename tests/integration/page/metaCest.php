<?php
namespace NCATesting\page;
use NCATesting\AcceptanceTester;

class metaCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/');
        $I->waitForPageLoad();
    }

    public function metaContentImageHasStatusOk(AcceptanceTester $I)
    {
        $image = $I->getMeta(['twitter:image'])['twitter:image'];
        $status = $I->getCurlStatusByUrl($image);
        $I->assertSame(200, $status);
    }

    public function metaContentKeysNotEmpty(AcceptanceTester $I)
    {
        $twitterKeys = [
            'twitter:title',
            'twitter:description',
            'twitter:site',
            'twitter:image',
            'twitter:creator'
        ];

        $fbKeys = [
            'og:locale',
            'og:type',
            'og:title',
            'og:description',
            'og:url',
            'og:site_name',
            'og:image',
            'fb:app_id'
        ];

        $metaKeys = array_merge($twitterKeys, $fbKeys);

        foreach ($metaKeys as $metaKey) {
            $I->assertNotEmpty($I->getMeta([$metaKey]), $metaKey);
        }
    }
}
