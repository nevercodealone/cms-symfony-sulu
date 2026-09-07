<?php

declare(strict_types=1);

namespace App\Tests\Unit\Twig;

use PHPUnit\Framework\TestCase;

class SeoCanonicalTemplateTest extends TestCase
{
    private string $templatePath;

    protected function setUp(): void
    {
        $projectRoot = dirname(__DIR__, 3);
        $this->templatePath = $projectRoot . '/templates/bundles/SuluWebsiteBundle/Extension/seo.html.twig';
    }

    private function getTemplateContent(): string
    {
        $this->assertFileExists($this->templatePath);

        return file_get_contents($this->templatePath);
    }

    public function test_canonicalUsesActiveRouteInsteadOfRequestedUrl(): void
    {
        $template = $this->getTemplateContent();

        $this->assertStringContainsString(
            "localizations[app.request.locale].url",
            $template,
            'The canonical must be built from the active route of the requested localization (same source as hreflang), never from the requested URL alone.'
        );

        $this->assertStringContainsString(
            "app.request.attributes.get('structure')",
            $template,
            'The active-route lookup must be guarded by the structure request attribute so custom routes keep their own canonical.'
        );
    }

    public function test_manualCanonicalFieldIsNotRendered(): void
    {
        $template = $this->getTemplateContent();

        $this->assertStringNotContainsString(
            'seo.canonicalUrl',
            $template,
            'Manually entered canonical values must not reach the markup; unvalidated values like "Docker" caused broken canonical tags.'
        );
    }

    public function test_canonicalIsForcedOntoTheLiveDomain(): void
    {
        $template = $this->getTemplateContent();

        $this->assertStringContainsString(
            '|nca_canonical_url',
            $template,
            'The canonical output must be piped through the nca_canonical_url filter so the hard live domain is always used.'
        );
    }

    public function test_shadowPagesKeepBaseLocaleCanonical(): void
    {
        $template = $this->getTemplateContent();

        $this->assertStringContainsString(
            'localizations[shadowBaseLocale].url',
            $template,
            'Shadow pages must keep canonicalising to their base localization (Sulu core behavior).'
        );
    }
}
