<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Service\PageReferenceScanner;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class PageReferenceScannerTest extends TestCase
{
    private Connection&MockObject $connection;
    private PageReferenceScanner $scanner;

    private const TARGET_UUID = '0e36092e-eb62-41d0-ae38-f8cd9c7cc56e';

    private const SOURCE_UUID = '11111111-1111-1111-1111-111111111111';

    /** Page with a page-teaser block pointing at the target UUID */
    private const PAGE_TEASER_XML = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0">
        <sv:value length="36">SOURCE_UUID_PLACEHOLDER</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#7" sv:type="String" sv:multi-valued="0">
        <sv:value length="11">page-teaser</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-page#7" sv:type="String" sv:multi-valued="0">
        <sv:value length="36">0e36092e-eb62-41d0-ae38-f8cd9c7cc56e</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-showImage#7" sv:type="Boolean" sv:multi-valued="0">
        <sv:value length="1">1</sv:value>
    </sv:property>
</sv:node>
XML;

    /** Page with a subpages-overview block using the target as dataSource */
    private const SUBPAGES_OVERVIEW_XML = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0">
        <sv:value length="36">SOURCE_UUID_PLACEHOLDER</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="17">subpages-overview</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-items#1" sv:type="String" sv:multi-valued="0">
        <sv:value length="120">{"dataSource":"0e36092e-eb62-41d0-ae38-f8cd9c7cc56e","includeSubFolders":false,"sortBy":null,"sortMethod":"asc"}</sv:value>
    </sv:property>
</sv:node>
XML;

    /** Page with a sulu-link in a rich-text description (HTML-entity-encoded, as stored in PHPCR) */
    private const SULU_LINK_XML = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0">
        <sv:value length="36">SOURCE_UUID_PLACEHOLDER</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-description#0" sv:type="Text" sv:multi-valued="0">
        <sv:value length="200">&lt;p&gt;Erfahrenes Team unterst&amp;uuml;tzt Sie bei &lt;sulu-link provider="page" target="_self" href="0e36092e-eb62-41d0-ae38-f8cd9c7cc56e"&gt;PHP Updates&lt;/sulu-link&gt;, Beratung.&lt;/p&gt;</sv:value>
    </sv:property>
</sv:node>
XML;

    /** Page with NO reference to the target (should be filtered out by the SQL prefilter anyway) */
    private const UNRELATED_XML = <<<'XML'
<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">
    <sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0">
        <sv:value length="36">99999999-9999-9999-9999-999999999999</sv:value>
    </sv:property>
    <sv:property sv:name="i18n:de-blocks-type#0" sv:type="String" sv:multi-valued="0">
        <sv:value length="19">headline-paragraphs</sv:value>
    </sv:property>
</sv:node>
XML;

    protected function setUp(): void
    {
        $this->connection = $this->createMock(Connection::class);
        $this->scanner = new PageReferenceScanner($this->connection);
    }

    public function testFindsPageTeaserReference(): void
    {
        $this->connection->method('fetchAllAssociative')->willReturn([
            ['path' => '/cmf/example/contents/source', 'props' => str_replace('SOURCE_UUID_PLACEHOLDER', self::SOURCE_UUID, self::PAGE_TEASER_XML)],
        ]);

        $refs = $this->scanner->findIncomingReferences(self::TARGET_UUID, 'de');

        $this->assertCount(1, $refs);
        $this->assertSame('page-teaser', $refs[0]['blockType']);
        $this->assertSame(7, $refs[0]['blockPosition']);
        $this->assertSame('/cmf/example/contents/source', $refs[0]['sourcePath']);
        $this->assertSame(self::SOURCE_UUID, $refs[0]['sourceUuid']);
    }

    public function testFindsSubpagesOverviewReference(): void
    {
        $this->connection->method('fetchAllAssociative')->willReturn([
            ['path' => '/cmf/example/contents/listing', 'props' => str_replace('SOURCE_UUID_PLACEHOLDER', self::SOURCE_UUID, self::SUBPAGES_OVERVIEW_XML)],
        ]);

        $refs = $this->scanner->findIncomingReferences(self::TARGET_UUID, 'de');

        $this->assertCount(1, $refs);
        $this->assertSame('subpages-overview', $refs[0]['blockType']);
        $this->assertSame(1, $refs[0]['blockPosition']);
        $this->assertSame('/cmf/example/contents/listing', $refs[0]['sourcePath']);
    }

    public function testFindsSuluLinkReference(): void
    {
        $this->connection->method('fetchAllAssociative')->willReturn([
            ['path' => '/cmf/example/contents/blog/php', 'props' => str_replace('SOURCE_UUID_PLACEHOLDER', self::SOURCE_UUID, self::SULU_LINK_XML)],
        ]);

        $refs = $this->scanner->findIncomingReferences(self::TARGET_UUID, 'de');

        $this->assertCount(1, $refs);
        $this->assertSame('sulu-link', $refs[0]['blockType']);
        $this->assertSame(0, $refs[0]['blockPosition']);
        $this->assertSame('/cmf/example/contents/blog/php', $refs[0]['sourcePath']);
    }

    public function testFindsAllThreeReferenceTypesFromMultiplePages(): void
    {
        $this->connection->method('fetchAllAssociative')->willReturn([
            ['path' => '/cmf/example/contents/a', 'props' => str_replace('SOURCE_UUID_PLACEHOLDER', self::SOURCE_UUID, self::PAGE_TEASER_XML)],
            ['path' => '/cmf/example/contents/b', 'props' => str_replace('SOURCE_UUID_PLACEHOLDER', self::SOURCE_UUID, self::SUBPAGES_OVERVIEW_XML)],
            ['path' => '/cmf/example/contents/c', 'props' => str_replace('SOURCE_UUID_PLACEHOLDER', self::SOURCE_UUID, self::SULU_LINK_XML)],
            ['path' => '/cmf/example/contents/d', 'props' => self::UNRELATED_XML],
        ]);

        $refs = $this->scanner->findIncomingReferences(self::TARGET_UUID, 'de');

        // Three hits from a/b/c; d has no reference
        $this->assertCount(3, $refs);
        $types = array_column($refs, 'blockType');
        $this->assertContains('page-teaser', $types);
        $this->assertContains('subpages-overview', $types);
        $this->assertContains('sulu-link', $types);
    }

    public function testReturnsEmptyForUnknownUuid(): void
    {
        $this->connection->method('fetchAllAssociative')->willReturn([]);

        $this->assertSame([], $this->scanner->findIncomingReferences('aaaaaaaa-0000-0000-0000-000000000000', 'de'));
    }

    public function testReturnsEmptyForEmptyUuid(): void
    {
        // No DB call should be made
        $this->connection->expects($this->never())->method('fetchAllAssociative');

        $this->assertSame([], $this->scanner->findIncomingReferences('', 'de'));
    }

    public function testIgnoresPageTeaserPointingAtDifferentUuid(): void
    {
        $otherXml = str_replace(self::TARGET_UUID, '22222222-2222-2222-2222-222222222222', self::PAGE_TEASER_XML);
        $this->connection->method('fetchAllAssociative')->willReturn([
            ['path' => '/cmf/example/contents/other', 'props' => str_replace('SOURCE_UUID_PLACEHOLDER', self::SOURCE_UUID, $otherXml)],
        ]);

        $this->assertSame([], $this->scanner->findIncomingReferences(self::TARGET_UUID, 'de'));
    }

    public function testIsUsedAsDataSourceReturnsTrueWhenReferenced(): void
    {
        $this->connection->method('fetchAllAssociative')->willReturn([
            ['props' => str_replace('SOURCE_UUID_PLACEHOLDER', self::SOURCE_UUID, self::SUBPAGES_OVERVIEW_XML)],
        ]);

        $this->assertTrue($this->scanner->isUsedAsDataSource(self::TARGET_UUID));
    }

    public function testIsUsedAsDataSourceReturnsFalseWhenNotReferenced(): void
    {
        $this->connection->method('fetchAllAssociative')->willReturn([
            ['props' => self::UNRELATED_XML],
        ]);

        $this->assertFalse($this->scanner->isUsedAsDataSource(self::TARGET_UUID));
    }

    public function testIsUsedAsDataSourceReturnsFalseForEmptyUuid(): void
    {
        $this->connection->expects($this->never())->method('fetchAllAssociative');

        $this->assertFalse($this->scanner->isUsedAsDataSource(''));
    }
}
