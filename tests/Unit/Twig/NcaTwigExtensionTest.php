<?php

declare(strict_types=1);

namespace App\Tests\Unit\Twig;

use App\Service\WordpressService;
use App\Sulu\Service\LatestArticlesService;
use App\Service\YouTubeService;
use App\Twig\NcaTwigExtension;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\RequestStack;

class NcaTwigExtensionTest extends TestCase
{
    private NcaTwigExtension $extension;

    protected function setUp(): void
    {
        $this->extension = new NcaTwigExtension(
            $this->createMock(YouTubeService::class),
            $this->createMock(WordpressService::class),
            $this->createMock(LatestArticlesService::class),
            $this->createMock(RequestStack::class),
        );
    }

    public function test_filtersExposeCanonicalUrlFilter(): void
    {
        $filters = $this->extension->getFilters();

        $this->assertCount(2, $filters);
        $this->assertSame('nca_canonical_url', $filters[0]->getName());
        $this->assertSame('nca_slugify', $filters[1]->getName());
    }

    /**
     * @dataProvider provideSlugify
     */
    public function test_slugifyCreatesCleanAnchorSlugs(
        string $input,
        string $expected,
    ): void {
        $this->assertSame($expected, $this->extension->slugify($input));
    }

    /**
     * @return array<string, array{string, string}>
     */
    public static function provideSlugify(): array
    {
        return [
            'german umlauts are transliterated' => [
                'Schulungen für Entwickler',
                'schulungen-fuer-entwickler',
            ],
            'punctuation is stripped' => [
                'Tools, Tipps & More 2026',
                'tools-tipps-more-2026',
            ],
            'multiple dashes collapse' => [
                'Vibe Coding -- Modelle',
                'vibe-coding-modelle',
            ],
            'leading and trailing dashes are trimmed' => [
                ' Was ist Vibe Coding? ',
                'was-ist-vibe-coding',
            ],
            'empty text stays empty' => [
                '',
                '',
            ],
        ];
    }

    /**
     * @dataProvider provideCanonicalUrl
     */
    public function test_canonicalUrlForcesLiveDomainAndStripsEverythingButThePath(
        string $input,
        string $expected,
    ): void {
        $this->assertSame($expected, $this->extension->canonicalUrl($input));
    }

    /**
     * @return array<string, array{string, string}>
     */
    public static function provideCanonicalUrl(): array
    {
        return [
            'absolute URL with port' => [
                'http://sulu-never-code-alone.ddev.site:8090/de/glossare/php-glossar/docker',
                'https://nevercodealone.de/de/glossare/php-glossar/docker',
            ],
            'root-relative path' => [
                '/de/leistungen/gitlab-ci-cd-pipeline-setup',
                'https://nevercodealone.de/de/leistungen/gitlab-ci-cd-pipeline-setup',
            ],
            'scheme-relative URL' => [
                '//nevercodealone.de/de/glossare/php-glossar/docker',
                'https://nevercodealone.de/de/glossare/php-glossar/docker',
            ],
            'query string is stripped' => [
                'https://nevercodealone.de/de/suche?q=docker',
                'https://nevercodealone.de/de/suche',
            ],
            'garbage value without slash gets a safe path' => [
                'Docker',
                'https://nevercodealone.de/Docker',
            ],
            'empty value falls back to root' => [
                '',
                'https://nevercodealone.de/',
            ],
        ];
    }
}
