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

        $this->assertCount(1, $filters);
        $this->assertSame('nca_canonical_url', $filters[0]->getName());
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
