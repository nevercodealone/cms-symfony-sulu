<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Service\SnippetService;
use Doctrine\DBAL\Connection;
use PHPUnit\Framework\TestCase;

class SnippetServiceWriteTest extends TestCase
{
    private const EXISTING_OFFER_PROPS = '<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0"><sv:property sv:name="jcr:primaryType" sv:type="Name" sv:multi-valued="0"><sv:value>nt:unstructured</sv:value></sv:property><sv:property sv:name="jcr:mixinTypes" sv:type="Name" sv:multi-valued="1"><sv:value>sulu:snippet</sv:value></sv:property><sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0"><sv:value>8230bfdb-fd87-49e9-9e28-bbd9378f6df4</sv:value></sv:property><sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0"><sv:value>Old Title</sv:value></sv:property><sv:property sv:name="i18n:de-eyebrow" sv:type="String" sv:multi-valued="0"><sv:value>Old Eyebrow</sv:value></sv:property><sv:property sv:name="i18n:de-steps-length" sv:type="Long" sv:multi-valued="0"><sv:value>1</sv:value></sv:property><sv:property sv:name="i18n:de-steps-type#0" sv:type="String" sv:multi-valued="0"><sv:value>step</sv:value></sv:property><sv:property sv:name="i18n:de-steps-settings#0" sv:type="String" sv:multi-valued="0"><sv:value>[]</sv:value></sv:property><sv:property sv:name="i18n:de-steps-title#0" sv:type="String" sv:multi-valued="0"><sv:value>Old Step</sv:value></sv:property><sv:property sv:name="i18n:de-steps-optional#0" sv:type="Boolean" sv:multi-valued="0"><sv:value>0</sv:value></sv:property><sv:property sv:name="template" sv:type="String" sv:multi-valued="0"><sv:value>workshop_offer</sv:value></sv:property><sv:property sv:name="i18n:de-state" sv:type="Long" sv:multi-valued="0"><sv:value>1</sv:value></sv:property><sv:property sv:name="i18n:de-created" sv:type="Date" sv:multi-valued="0"><sv:value>2026-09-01T10:00:00.000+00:00</sv:value></sv:property><sv:property sv:name="i18n:de-changed" sv:type="Date" sv:multi-valued="0"><sv:value>2026-09-01T10:00:00.000+00:00</sv:value></sv:property></sv:node>';

    private const FACTS_PROPS = '<?xml version="1.0" encoding="UTF-8"?>
<sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0"><sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0"><sv:value>25d798a1-4603-4d5d-800b-fc0fe72236cf</sv:value></sv:property><sv:property sv:name="i18n:de-title" sv:type="String" sv:multi-valued="0"><sv:value>Workshop Fakten</sv:value></sv:property><sv:property sv:name="i18n:de-headline" sv:type="String" sv:multi-valued="0"><sv:value>Fakten</sv:value></sv:property><sv:property sv:name="i18n:de-facts-length" sv:type="Long" sv:multi-valued="0"><sv:value>1</sv:value></sv:property><sv:property sv:name="i18n:de-facts-type#0" sv:type="String" sv:multi-valued="0"><sv:value>fact</sv:value></sv:property><sv:property sv:name="i18n:de-facts-icon#0" sv:type="String" sv:multi-valued="0"><sv:value>groups</sv:value></sv:property><sv:property sv:name="i18n:de-facts-text#0" sv:type="String" sv:multi-valued="0"><sv:value>Maximal 25 Teilnehmer</sv:value></sv:property><sv:property sv:name="i18n:de-variants" sv:type="Reference" sv:multi-valued="1"><sv:value>11111111-1111-1111-1111-111111111111</sv:value><sv:value>22222222-2222-2222-2222-222222222222</sv:value></sv:property><sv:property sv:name="template" sv:type="String" sv:multi-valued="0"><sv:value>workshop_facts</sv:value></sv:property></sv:node>';

    private string $projectDir;

    protected function setUp(): void
    {
        $this->projectDir = dirname(__DIR__, 4);
    }

    public function testCreateSnippetWritesNodeWithBlockProps(): void
    {
        $connection = $this->createMock(Connection::class);

        $connection->method('fetchOne')->willReturnCallback(
            function ($sql, $params = []) {
                if (str_contains($sql, 'MAX(')) {
                    return 5;
                }
                // Path lookup: folder exists, snippet slug is free
                return ($params[0] ?? '') === '/cmf/snippets/workshop_offer' ? 123 : null;
            }
        );

        $capturedProps = [];
        $connection->expects($this->exactly(2))
            ->method('executeStatement')
            ->willReturnCallback(function ($sql, $params = []) use (&$capturedProps) {
                $this->assertStringContainsString('INSERT INTO phpcr_nodes', $sql);
                $capturedProps[] = $params[5];

                return 1;
            });

        $service = new SnippetService($connection, $this->projectDir);

        $result = $service->createSnippet('workshop_offer', 'Test Workshop', [
            'eyebrow' => 'Workshop',
            'headline' => 'Headline',
            'text' => '<p>Beschreibung</p>',
            'contact' => 41,
            'targetPage' => '3a314bdf-9b3a-45a9-9897-e867fa1099a2',
            'buttonText' => 'Mehr',
            'steps' => [
                ['title' => 'Setup', 'text' => 'Alles installieren', 'optional' => false],
                ['title' => 'Deep', 'text' => 'Mehr', 'optional' => true],
            ],
        ], 'de', true);

        $this->assertTrue($result['success'], $result['message']);
        $this->assertEquals('/cmf/snippets/workshop_offer/test-workshop', $result['path']);
        $this->assertTrue($result['published']);
        $this->assertCount(2, $capturedProps);

        $props = $capturedProps[0];
        $this->assertStringContainsString('sulu:snippet', $props);
        $this->assertStringContainsString('sv:name="template" sv:type="String" sv:multi-valued="0"><sv:value length="14">workshop_offer</sv:value>', $props);
        $this->assertStringContainsString('sv:name="i18n:de-steps-length" sv:type="Long"', $props);
        $this->assertStringContainsString('sv:name="i18n:de-steps-title#1"', $props);
        $this->assertStringContainsString('sv:name="i18n:de-steps-optional#1" sv:type="Boolean" sv:multi-valued="0"><sv:value length="1">1</sv:value>', $props);
        $this->assertStringContainsString('sv:name="i18n:de-contact" sv:type="Long"', $props);
        $this->assertStringContainsString('sv:name="i18n:de-targetPage" sv:type="String" sv:multi-valued="0"><sv:value length="36">3a314bdf-9b3a-45a9-9897-e867fa1099a2</sv:value>', $props);
        $this->assertStringContainsString('&lt;p&gt;Beschreibung&lt;/p&gt;', $props);
        $this->assertStringContainsString('sv:name="i18n:de-state" sv:type="Long" sv:multi-valued="0"><sv:value length="1">2</sv:value>', $props);
        $this->assertStringContainsString('sv:name="i18n:de-published" sv:type="Date"', $props);
    }

    public function testCreateSnippetWithoutPublishInsertsOnlyDefaultWorkspace(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchOne')->willReturnCallback(
            function ($sql, $params = []) {
                if (str_contains($sql, 'MAX(')) {
                    return 0;
                }

                return ($params[0] ?? '') === '/cmf/snippets/workshop_offer' ? 123 : null;
            }
        );

        $connection->expects($this->once())->method('executeStatement');

        $service = new SnippetService($connection, $this->projectDir);

        $result = $service->createSnippet('workshop_offer', 'Draft Snippet', ['eyebrow' => 'E'], 'de', false);

        $this->assertTrue($result['success']);
        $this->assertFalse($result['published']);
    }

    public function testCreateSnippetRejectsUnknownTemplate(): void
    {
        $service = new SnippetService($this->createMock(Connection::class), $this->projectDir);

        $result = $service->createSnippet('does_not_exist', 'X', [], 'de', true);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('Unknown template', $result['message']);
        $this->assertStringContainsString('workshop_offer', $result['message']);
    }

    public function testCreateSnippetRejectsUnknownProperty(): void
    {
        $service = new SnippetService($this->createMock(Connection::class), $this->projectDir);

        $result = $service->createSnippet('workshop_offer', 'X', ['foobar' => 'nope'], 'de', true);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Unknown property 'foobar'", $result['message']);
        $this->assertStringContainsString('Allowed properties:', $result['message']);
    }

    public function testCreateSnippetRejectsUnknownBlockSubProperty(): void
    {
        $service = new SnippetService($this->createMock(Connection::class), $this->projectDir);

        $result = $service->createSnippet('workshop_facts', 'X', [
            'facts' => [['icon' => 'star', 'text' => 'ok', 'nope' => 1]],
        ], 'de', true);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Unknown property 'nope' in block 'facts'", $result['message']);
    }

    public function testCreateSnippetWarnsForUnknownTemplateSchema(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchOne')->willReturnCallback(
            function ($sql, $params = []) {
                if (str_contains($sql, 'MAX(')) {
                    return 0;
                }

                return ($params[0] ?? '') === '/cmf/snippets/contact' ? 9 : null;
            }
        );
        $connection->method('executeStatement')->willReturn(1);

        $service = new SnippetService($connection, $this->projectDir);

        // contact template exists in config but has no allow-list schema
        $result = $service->createSnippet('contact', 'Kontakt', ['description' => '<p>Hi</p>'], 'de', true);

        $this->assertTrue($result['success'], $result['message']);
        $this->assertArrayHasKey('warning', $result);
        $this->assertStringContainsString('No schema allow-list', $result['warning']);
    }

    public function testUpdateSnippetMergesScalarsAndReplacesBlocks(): void
    {
        $connection = $this->createMock(Connection::class);

        $connection->method('fetchAssociative')->willReturnCallback(
            function ($sql, $params = []) {
                if (str_contains($sql, 'SELECT path, identifier, props')) {
                    return [
                        'path' => '/cmf/snippets/workshop_offer/ki-workshop-developer',
                        'identifier' => '8230bfdb-fd87-49e9-9e28-bbd9378f6df4',
                        'props' => self::EXISTING_OFFER_PROPS,
                    ];
                }

                return null;
            }
        );

        $connection->method('fetchOne')->willReturn(77); // live row exists

        $capturedProps = [];
        $connection->expects($this->exactly(2))
            ->method('executeStatement')
            ->willReturnCallback(function ($sql, $params = []) use (&$capturedProps) {
                $this->assertStringContainsString('UPDATE phpcr_nodes SET props', $sql);
                $capturedProps[] = $params[0];

                return 1;
            });

        $service = new SnippetService($connection, $this->projectDir);

        $result = $service->updateSnippet('8230bfdb-fd87-49e9-9e28-bbd9378f6df4', [
            'eyebrow' => 'New Eyebrow',
            'steps' => [
                ['title' => 'A', 'text' => 'a', 'optional' => false],
                ['title' => 'B', 'text' => 'b', 'optional' => true],
                ['title' => 'C', 'text' => 'c', 'optional' => false],
            ],
        ], 'de', true);

        $this->assertTrue($result['success'], $result['message']);
        $this->assertEquals(
            ['/cmf/snippets/workshop_offer/ki-workshop-developer', '8230bfdb-fd87-49e9-9e28-bbd9378f6df4'],
            [$result['path'], $result['uuid']]
        );
        $this->assertTrue($result['published']);
        $this->assertContains('eyebrow', $result['updated']);
        $this->assertStringContainsString('steps (block, 3 items)', implode(', ', $result['updated']));

        $props = $capturedProps[0];
        $this->assertStringContainsString('<sv:value length="11">New Eyebrow</sv:value>', $props);
        $this->assertStringNotContainsString('Old Eyebrow', $props);
        $this->assertStringNotContainsString('Old Step', $props);
        $this->assertStringContainsString('sv:name="i18n:de-steps-length" sv:type="Long" sv:multi-valued="0"><sv:value length="1">3</sv:value>', $props);
        $this->assertStringContainsString('sv:name="i18n:de-steps-title#2" sv:type="String" sv:multi-valued="0"><sv:value length="1">C</sv:value>', $props);
        // untouched properties survive
        $this->assertStringContainsString('<sv:value>Old Title</sv:value>', $props);
        // publish state applied in both workspaces
        foreach ($capturedProps as $workspaceProps) {
            $this->assertStringContainsString('sv:name="i18n:de-state" sv:type="Long" sv:multi-valued="0"><sv:value length="1">2</sv:value>', $workspaceProps);
        }
    }

    public function testAssignSnippetAreaWritesReferenceToBothWorkspaces(): void
    {
        $connection = $this->createMock(Connection::class);

        $connection->method('fetchAssociative')->willReturnCallback(
            function ($sql, $params = []) {
                if (str_contains($sql, 'SELECT path, identifier, props')) {
                    return [
                        'path' => '/cmf/snippets/workshop_facts/workshop-fakten',
                        'identifier' => '25d798a1-4603-4d5d-800b-fc0fe72236cf',
                        'props' => self::FACTS_PROPS,
                    ];
                }
                if (str_contains($sql, "path = ? AND workspace_name = ?") && ($params[0] ?? '') === '/cmf/example') {
                    return ['props' => '<?xml version="1.0"?><sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0"><sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0"><sv:value>135f2839-a1e2-4a4e-9c5a-7f5fc633a7a8</sv:value></sv:property></sv:node>'];
                }

                return null;
            }
        );

        $capturedProps = [];
        $connection->expects($this->exactly(2))
            ->method('executeStatement')
            ->willReturnCallback(function ($sql, $params = []) use (&$capturedProps) {
                $capturedProps[] = $params[0];

                return 1;
            });

        $service = new SnippetService($connection, $this->projectDir);

        $result = $service->assignSnippetArea('workshop_facts', '25d798a1-4603-4d5d-800b-fc0fe72236cf');

        $this->assertTrue($result['success'], $result['message']);
        $this->assertEquals('workshop_facts', $result['area']);
        $this->assertEquals('workshop_facts', $result['template']);

        foreach ($capturedProps as $props) {
            $this->assertStringContainsString(
                'sv:name="settings:snippets-workshop_facts" sv:type="Reference" sv:multi-valued="0"><sv:value length="36">25d798a1-4603-4d5d-800b-fc0fe72236cf</sv:value>',
                $props
            );
        }
    }

    public function testAssignSnippetAreaRejectsTemplateMismatch(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')->willReturnCallback(
            function ($sql) {
                if (str_contains($sql, 'SELECT path, identifier, props')) {
                    return [
                        'path' => '/cmf/snippets/workshop_offer/ki-workshop-developer',
                        'identifier' => '8230bfdb-fd87-49e9-9e28-bbd9378f6df4',
                        'props' => self::EXISTING_OFFER_PROPS,
                    ];
                }

                return null;
            }
        );

        $service = new SnippetService($connection, $this->projectDir);

        $result = $service->assignSnippetArea('workshop_facts', '8230bfdb-fd87-49e9-9e28-bbd9378f6df4');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('does not match area', $result['message']);
    }

    public function testGetSnippetExtractsContentWithBlocksAndTypes(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')->willReturn([
            'path' => '/cmf/snippets/workshop_facts/workshop-fakten',
            'identifier' => '25d798a1-4603-4d5d-800b-fc0fe72236cf',
            'props' => self::FACTS_PROPS,
        ]);

        $service = new SnippetService($connection, $this->projectDir);

        $snippet = $service->getSnippet('25d798a1-4603-4d5d-800b-fc0fe72236cf', 'de');

        $this->assertNotNull($snippet);
        $this->assertEquals('workshop_facts', $snippet['template']);
        $this->assertEquals('Fakten', $snippet['content']['headline']);
        $this->assertSame('11111111-1111-1111-1111-111111111111', $snippet['content']['variants'][0] ?? null);
        $this->assertIsArray($snippet['content']['facts']);
        $this->assertSame(['type' => 'fact', 'icon' => 'groups', 'text' => 'Maximal 25 Teilnehmer'], $snippet['content']['facts'][0]);
    }
}
