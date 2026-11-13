<?php

declare(strict_types=1);

namespace App\Tests\Functional;

use App\Kernel;
use Sulu\Component\HttpKernel\SuluKernel;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\KernelInterface;

/**
 * Functional test for the visitor-facing AI search form at /ai-search.
 *
 * Renders the page through the website kernel against the real ddev database
 * (the site layout reads the navigation). It does not call the sulu.ai platform.
 *
 * NOT included in CI pipeline - run manually:
 *   ddev exec vendor/bin/phpunit tests/Functional/AiSearchPageFunctionalTest.php
 *
 * @group functional-manual
 */
class AiSearchPageFunctionalTest extends KernelTestCase
{
    protected static function createKernel(array $options = []): KernelInterface
    {
        return new Kernel(
            $options['environment'] ?? 'test',
            (bool) ($options['debug'] ?? true),
            SuluKernel::CONTEXT_WEBSITE,
        );
    }

    public function testFormShowsOnlyTheQuestionField(): void
    {
        $xpath = $this->requestPage('/ai-search');
        $root = '//*[@data-controller="ai-search"]';

        self::assertSame(1, $xpath->query($root . '//form')->length);
        self::assertSame(1, $xpath->query($root . '//form//textarea[@name="q"][@required][@maxlength]')->length);
        self::assertSame(1, $xpath->query($root . '//form//label[@for="ai-search-question"]')->length);
        self::assertSame(1, $xpath->query($root . '//form//button[@type="submit"]')->length);

        // The bundle demo's developer controls (mode, locale, webspace, buckets) are gone.
        self::assertSame(0, $xpath->query($root . '//select')->length);

        self::assertSame('/api/intelligent-search', $xpath->evaluate('string(' . $root . '/@data-ai-search-endpoint-value)'));
        self::assertSame(
            '/api/intelligent-search/feedback',
            $xpath->evaluate('string(' . $root . '/@data-ai-search-feedback-endpoint-value)'),
        );
        self::assertNotSame('', $xpath->evaluate('string(' . $root . '/@data-ai-search-locale-value)'));
    }

    public function testQuestionFromUrlIsPrefilledAndEscaped(): void
    {
        $xpath = $this->requestPage('/ai-search', ['q' => 'Was ist <b>Vibe</b> Coding?']);

        self::assertSame(
            'Was ist <b>Vibe</b> Coding?',
            $xpath->evaluate('string(//textarea[@id="ai-search-question"])'),
        );
        self::assertSame(0, $xpath->query('//textarea[@id="ai-search-question"]//b')->length);
    }

    public function testPageLoadsNoThirdPartyDemoAssets(): void
    {
        $html = $this->requestHtml('/ai-search');

        self::assertStringNotContainsString('cdn.tailwindcss.com', $html);
        self::assertStringNotContainsString('cdn.jsdelivr.net', $html);
    }

    /**
     * @param array<string, string> $query
     */
    private function requestPage(string $path, array $query = []): \DOMXPath
    {
        $document = new \DOMDocument();
        @$document->loadHTML('<?xml encoding="UTF-8">' . $this->requestHtml($path, $query));

        return new \DOMXPath($document);
    }

    /**
     * @param array<string, string> $query
     */
    private function requestHtml(string $path, array $query = []): string
    {
        $kernel = self::bootKernel();
        $response = $kernel->handle(Request::create($path, 'GET', $query));

        self::assertSame(200, $response->getStatusCode());

        return (string) $response->getContent();
    }
}
