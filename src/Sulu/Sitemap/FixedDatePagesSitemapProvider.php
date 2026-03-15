<?php

declare(strict_types=1);

namespace App\Sulu\Sitemap;

use Doctrine\DBAL\Connection;
use Sulu\Bundle\WebsiteBundle\Sitemap\Sitemap;
use Sulu\Bundle\WebsiteBundle\Sitemap\SitemapProviderInterface;
use Sulu\Bundle\WebsiteBundle\Sitemap\SitemapUrl;
use Sulu\Component\Webspace\Manager\WebspaceManagerInterface;

/**
 * Decorates PagesSitemapProvider to fix lastmod dates.
 *
 * Sulu's ContentRepository queries `changed` and `lastModified` with the wrong
 * namespace encoder, returning empty strings. `new \DateTime('')` then resolves
 * to "now", so every page shows today's date. This decorator reads the actual
 * `i18n:{locale}-changed` property directly from PHPCR via DBAL.
 */
class FixedDatePagesSitemapProvider implements SitemapProviderInterface
{
    public function __construct(
        private SitemapProviderInterface $inner,
        private Connection $connection,
        private WebspaceManagerInterface $webspaceManager,
        private string $environment,
    ) {
    }

    public function build($page, $scheme, $host): array
    {
        /** @var SitemapUrl[] $urls */
        $urls = $this->inner->build($page, $scheme, $host);

        if ([] === $urls) {
            return $urls;
        }

        $portalInformations = $this->webspaceManager->findPortalInformationsByHostIncludingSubdomains(
            $host,
            $this->environment,
        );

        $locales = [];
        foreach ($portalInformations as $portalInformation) {
            $localization = $portalInformation->getLocalization();
            if ($localization) {
                $locales[] = $localization->getLocale();
            }
        }
        $locales = array_unique($locales);

        $dateMap = $this->buildDateMap($locales, $host, $scheme);

        if ([] === $dateMap) {
            return $urls;
        }

        $lastmodReflection = new \ReflectionProperty(SitemapUrl::class, 'lastmod');

        foreach ($urls as $sitemapUrl) {
            $loc = $sitemapUrl->getLoc();
            if (isset($dateMap[$loc])) {
                $lastmodReflection->setValue($sitemapUrl, $dateMap[$loc]);
            }
        }

        return $urls;
    }

    public function createSitemap($scheme, $host): Sitemap
    {
        return $this->inner->createSitemap($scheme, $host);
    }

    public function getAlias(): string
    {
        return $this->inner->getAlias();
    }

    public function getMaxPage($scheme, $host): int
    {
        return $this->inner->getMaxPage($scheme, $host);
    }

    /**
     * Build a map of full URL → DateTime from PHPCR content node XML.
     *
     * Content nodes contain both `i18n:{locale}-url` (the resource locator)
     * and `i18n:{locale}-changed` (the actual modification date), so we only
     * need a single query.
     *
     * @param string[] $locales
     *
     * @return array<string, \DateTime>
     */
    private function buildDateMap(array $locales, string $host, string $scheme): array
    {
        $sql = <<<'SQL'
            SELECT props
            FROM phpcr_nodes
            WHERE workspace_name = 'default_live'
              AND type = 'nt:unstructured'
              AND (path LIKE '/cmf/%/contents/%' OR local_name = 'contents')
        SQL;

        try {
            $rows = $this->connection->fetchAllAssociative($sql);
        } catch (\Exception) {
            return [];
        }

        $portalInformations = $this->webspaceManager->findPortalInformationsByHostIncludingSubdomains(
            $host,
            $this->environment,
        );

        $result = [];

        foreach ($rows as $row) {
            foreach ($locales as $locale) {
                $changed = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-changed");
                $url = $this->extractPropertyFromXml($row['props'], "i18n:{$locale}-url");

                if (null === $changed) {
                    continue;
                }

                // Homepage has no url property — use /
                if (null === $url) {
                    $url = '/';
                }

                try {
                    $dateTime = new \DateTime($changed);
                } catch (\Exception) {
                    continue;
                }

                // Resolve to full URL via webspace manager
                foreach ($portalInformations as $portalInformation) {
                    $portalLocalization = $portalInformation->getLocalization();
                    if (null === $portalLocalization || $portalLocalization->getLocale() !== $locale) {
                        continue;
                    }

                    $fullUrl = $this->webspaceManager->findUrlByResourceLocator(
                        $url,
                        $this->environment,
                        $locale,
                        $portalInformation->getWebspaceKey(),
                        $host,
                        $scheme,
                    );

                    if (null !== $fullUrl) {
                        $result[$fullUrl] = $dateTime;
                    }
                }
            }
        }

        return $result;
    }

    private function extractPropertyFromXml(string $xmlString, string $propertyName): ?string
    {
        try {
            $xml = new \DOMDocument();
            $xml->loadXML($xmlString, \LIBXML_NONET | \LIBXML_NOERROR);

            $xpath = new \DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            $nodes = $xpath->query('//sv:property[@sv:name="' . $propertyName . '"]/sv:value');

            if (false !== $nodes && $nodes->length > 0 && null !== $nodes->item(0)) {
                return $nodes->item(0)->nodeValue;
            }
        } catch (\Exception) {
            // Ignore parsing errors
        }

        return null;
    }
}
