<?php

declare(strict_types=1);

namespace App\Tests\Unit\Twig;

use PHPUnit\Framework\TestCase;

class NavigationBurgerMenuTest extends TestCase
{
    private string $templatePath;
    private string $cssPath;
    private string $tailwindConfigPath;

    protected function setUp(): void
    {
        $projectRoot = dirname(__DIR__, 3);
        $this->templatePath = $projectRoot . '/templates/includes/tailwind/navigation.html.twig';
        $this->cssPath = $projectRoot . '/assets/website/styles/app.css';
        $this->tailwindConfigPath = $projectRoot . '/tailwind.config.js';
    }

    private function getTemplateContent(): string
    {
        $this->assertFileExists($this->templatePath);
        return file_get_contents($this->templatePath);
    }

    private function getCssContent(): string
    {
        $this->assertFileExists($this->cssPath);
        return file_get_contents($this->cssPath);
    }

    private function getTailwindConfigContent(): string
    {
        $this->assertFileExists($this->tailwindConfigPath);
        return file_get_contents($this->tailwindConfigPath);
    }

    public function test_scenario_tailwindConfigHasNoCustomScreens(): void
    {
        $config = $this->getTailwindConfigContent();

        $this->assertStringNotContainsString('desktop', $config, 'Tailwind config must NOT define a custom "desktop" screen — use official Tailwind breakpoints only (sm:, md:, lg:, xl:, 2xl:)');
    }

    public function test_scenario_burgerButtonHasXlHiddenClass(): void
    {
        $template = $this->getTemplateContent();

        $burgerButtonPattern = '/<button[^>]+{{\s*stimulus_action\(\s*[\x27"]mobile-menu[\x27"]\s*,\s*[\x27"]open[\x27"]\s*\) }}[^>]*>/s';
        $this->assertMatchesRegularExpression($burgerButtonPattern, $template, 'Burger button with Stimulus open action must exist in navigation template');

        $wrapperPattern = '/<div[^>]*xl:hidden[^>]*>.*?<button[^>]+{{\s*stimulus_action\(\s*[\x27"]mobile-menu[\x27"]\s*,\s*[\x27"]open[\x27"]\s*\)/s';
        $this->assertMatchesRegularExpression($wrapperPattern, $template, 'Burger wrapper must use xl:hidden');
        $this->assertStringNotContainsString('desktop:', $template, 'Template must NOT use custom desktop: prefix — use official Tailwind breakpoints only');
    }

    public function test_scenario_dialogReplacesBackdropAndOverlay(): void
    {
        $template = $this->getTemplateContent();

        $this->assertStringContainsString('<dialog', $template, 'Navigation must use a native dialog element');
        $this->assertStringContainsString('closedby="any"', $template, 'Dialog must support light dismiss');
        $this->assertStringContainsString('id="nca-mobile-menu"', $template, 'Dialog must have correct ID');
        $this->assertStringNotContainsString('desktop:', $template, 'Template must NOT use custom desktop: prefix anywhere');
    }

    public function test_scenario_chipNavUsesXlBlock(): void
    {
        $template = $this->getTemplateContent();

        $chipNavPattern = '/class="[^"]*hidden\s+xl:(?:block|flex)[^"]*"/s';
        $this->assertMatchesRegularExpression($chipNavPattern, $template, 'Chip nav must use official Tailwind hidden xl:block or hidden xl:flex utilities');
    }

    public function test_scenario_noCustomDesktopMediaQueriesForNav(): void
    {
        $css = $this->getCssContent();

        $this->assertStringNotContainsString('.nav-burger-hidden', $css, 'CSS must NOT contain custom .nav-burger-hidden class');
        $this->assertStringNotContainsString('.nav-overlay-fixed', $css, 'CSS must NOT contain custom .nav-overlay-fixed class');
        $this->assertStringNotContainsString('.nav-backdrop-fixed', $css, 'CSS must NOT contain custom .nav-backdrop-fixed class');
        $this->assertStringNotContainsString('.nav-chips-visible', $css, 'CSS must NOT contain custom .nav-chips-visible class');
    }

    public function test_scenario_noCustomNavMediaQueryBlock(): void
    {
        $css = $this->getCssContent();

        $customNavMediaPattern = '/@media\s*\(\s*min-width:\s*1200px\s*\)\s*\{[^}]*(?:nav-burger|nav-overlay|nav-backdrop|nav-chips-visible)/s';
        $this->assertDoesNotMatchRegularExpression($customNavMediaPattern, 'CSS must NOT have a custom @media block for nav visibility classes');
    }
}
