<?php

declare(strict_types=1);

namespace App\Tests\Unit\Twig;

use PHPUnit\Framework\TestCase;

class PageMetaTest extends TestCase
{
    private string $templatePath;

    protected function setUp(): void
    {
        $projectRoot = dirname(__DIR__, 3);
        $this->templatePath = $projectRoot . '/templates/includes/tailwind/page-meta.html.twig';
    }

    private function getTemplateContent(): string
    {
        $this->assertFileExists($this->templatePath);
        return file_get_contents($this->templatePath);
    }

    public function test_comparisonUsesDayGranularityNotSeconds(): void
    {
        $template = $this->getTemplateContent();

        $this->assertStringNotContainsString(
            "'Y-m-d H:i:s'",
            $template,
            'Date comparison must use day granularity (Y-m-d), not seconds, so a page created and updated on the same day does not render two identical dates.'
        );

        $this->assertStringContainsString('createdDay', $template, 'Template must compute a day-level "createdDay" value.');
        $this->assertStringContainsString('changedDay', $template, 'Template must compute a day-level "changedDay" value.');
        $this->assertStringContainsString(
            'hasBeenUpdated = changedDay != createdDay',
            $template,
            'hasBeenUpdated must be derived from a day-level comparison.'
        );
    }

    public function test_changedFallbackKeepsUpdateRenderableWhenChangedIsMissing(): void
    {
        $template = $this->getTemplateContent();

        $this->assertStringContainsString(
            'displayChanged',
            $template,
            'Because the "Aktualisiert" block now always renders, a displayChanged fallback (changed or created) is required.'
        );
    }

    public function test_createdBlockOnlyRendersWhenHasBeenUpdated(): void
    {
        $template = $this->getTemplateContent();

        $createdLabelPos = strpos($template, '{{ createdLabel }}');
        $this->assertNotFalse($createdLabelPos, 'Template must render a createdLabel.');

        $ifBeforeCreated = strrpos(substr($template, 0, $createdLabelPos), '{% if hasBeenUpdated %}');
        $this->assertNotFalse(
            $ifBeforeCreated,
            'The "Erstellt"/Created block must be wrapped in {% if hasBeenUpdated %} so it is hidden when created and changed fall on the same day.'
        );

        $endifAfterCreated = strpos($template, '{% endif %}', $createdLabelPos);
        $this->assertNotFalse($endifAfterCreated, 'The {% if hasBeenUpdated %} guard around the Created block must be closed.');

        $updatedLabelPos = strpos($template, '{{ updatedLabel }}');
        $this->assertNotFalse($updatedLabelPos, 'Template must render an updatedLabel.');
        $this->assertLessThan(
            $updatedLabelPos,
            $endifAfterCreated,
            'The Created block guard must close before the "Aktualisiert"/Updated block begins.'
        );
    }

    public function test_updatedBlockAlwaysRenders(): void
    {
        $template = $this->getTemplateContent();

        $updatedLabelPos = strpos($template, '{{ updatedLabel }}');
        $this->assertNotFalse($updatedLabelPos, 'Template must render an updatedLabel.');

        $createdLabelPos = strpos($template, '{{ createdLabel }}');
        $endifAfterCreated = strpos($template, '{% endif %}', $createdLabelPos);

        $segmentBetweenCreatedGuardAndUpdated = substr($template, $endifAfterCreated, $updatedLabelPos - $endifAfterCreated);
        $this->assertStringNotContainsString(
            '{% if hasBeenUpdated %}',
            $segmentBetweenCreatedGuardAndUpdated,
            'The "Aktualisiert"/Updated block must render unconditionally (same-day shows only Aktualisiert).'
        );
    }
}
