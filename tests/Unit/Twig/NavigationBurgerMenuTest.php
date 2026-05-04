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

    public function test_scenario_tailwindConfigHasDesktopBreakpoint(): void
    {
        $config = $this->getTailwindConfigContent();

        $this->assertStringContainsString("'1200px'", $config, 'Tailwind config must define a 1200px breakpoint for desktop');
        $this->assertStringContainsString('desktop', $config, 'Tailwind config must name the 1200px breakpoint "desktop"');
    }

    public function test_scenario_burgerButtonHasDesktopHiddenClass(): void
    {
        $template = $this->getTemplateContent();

        $burgerButtonPattern = '/<button[^>]+x-on:click="menuOpen\s*=\s*!menuOpen"[^>]*>/s';
        $this->assertMatchesRegularExpression($burgerButtonPattern, $template, 'Burger button with Alpine toggle must exist in navigation template');

        preg_match($burgerButtonPattern, $template, $matches);
        $buttonTag = $matches[0];

        $this->assertStringContainsString('desktop:hidden', $buttonTag, 'Burger button must use Tailwind desktop:hidden utility class');
    }

    public function test_scenario_overlayAndBackdropHaveDesktopHiddenClass(): void
    {
        $template = $this->getTemplateContent();

        $backdropPattern = '/class="[^"]*desktop:hidden[^"]*fixed[^"]*"/s';
        $this->assertMatchesRegularExpression($backdropPattern, $template, 'Backdrop must use Tailwind desktop:hidden utility class');

        $overlayPattern = '/class="[^"]*desktop:hidden[^"]*"/s';
        preg_match_all($overlayPattern, $template, $overlayMatches);
        $this->assertGreaterThanOrEqual(2, count($overlayMatches[0]), 'Both backdrop and overlay nav must use Tailwind desktop:hidden');
    }

    public function test_scenario_chipNavUsesDesktopBlock(): void
    {
        $template = $this->getTemplateContent();

        $chipNavPattern = '/class="[^"]*hidden\s+desktop:block[^"]*"/s';
        $this->assertMatchesRegularExpression($chipNavPattern, $template, 'Chip nav must use Tailwind hidden desktop:block utilities');
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
