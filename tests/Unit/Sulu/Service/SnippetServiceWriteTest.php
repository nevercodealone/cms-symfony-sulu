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

    private const VALID_OFFER_DATA = [
        'eyebrow' => 'Workshop',
        'headline' => 'Headline',
        'text' => '<p>Text</p>',
        'contact' => 41,
        'targetPage' => '3a314bdf-9b3a-45a9-9897-e867fa1099a2',
        'buttonText' => 'Mehr',
        'steps' => [
            ['title' => 'A', 'text' => 'a'],
            ['title' => 'B', 'text' => 'b', 'optional' => true],
        ],
    ];

    private const WEBSPACE_PROPS = '<?xml version="1.0"?><sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0"><sv:property sv:name="jcr:uuid" sv:type="String" sv:multi-valued="0"><sv:value>135f2839-a1e2-4a4e-9c5a-7f5fc633a7a8</sv:value></sv:property><sv:property sv:name="settings:snippets-workshop_facts" sv:type="Reference" sv:multi-valued="0"><sv:value>25d798a1-4603-4d5d-800b-fc0fe72236cf</sv:value></sv:property></sv:node>';

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

        $result = $service->createSnippet('workshop_offer', 'Draft Snippet', self::VALID_OFFER_DATA, 'de', false);

        $this->assertTrue($result['success'], $result['message']);
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

    public function testCreateSnippetValidatesEveryTemplateFromXml(): void
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

        // contact schema comes from config/templates/snippets/contact.xml
        $result = $service->createSnippet('contact', 'Kontakt', ['description' => '<p>Hi</p>'], 'de', true);

        $this->assertTrue($result['success'], $result['message']);
        $this->assertArrayNotHasKey('warning', $result);

        $rejected = $service->createSnippet('contact', 'Kontakt', ['organisation' => ['a1']], 'de', true);
        $this->assertFalse($rejected['success']);
        $this->assertStringContainsString("'organisation' (contact_account_selection) cannot be written", $rejected['message']);
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

    public function testSetDefaultSnippetWritesReferenceToBothWorkspaces(): void
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

        $result = $service->setDefaultSnippet('workshop_facts', '25d798a1-4603-4d5d-800b-fc0fe72236cf');

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

    public function testSetDefaultSnippetRejectsTemplateMismatch(): void
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

        $connection->expects($this->never())->method('executeStatement');

        $service = new SnippetService($connection, $this->projectDir);

        $result = $service->setDefaultSnippet('workshop_facts', '8230bfdb-fd87-49e9-9e28-bbd9378f6df4');

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

    public function testCreateSnippetRejectsMissingRequiredProperty(): void
    {
        $service = new SnippetService($this->createMock(Connection::class), $this->projectDir);

        $data = self::VALID_OFFER_DATA;
        unset($data['eyebrow']);

        $result = $service->createSnippet('workshop_offer', 'X', $data, 'de', true);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Missing required property 'eyebrow'", $result['message']);
        $this->assertStringContainsString('get_snippet_schema', $result['message']);
    }

    public function testCreateSnippetRejectsStepCountOutOfRange(): void
    {
        $service = new SnippetService($this->createMock(Connection::class), $this->projectDir);

        $data = self::VALID_OFFER_DATA;
        $data['steps'] = [['title' => 'Only', 'text' => 'one']];

        $result = $service->createSnippet('workshop_offer', 'X', $data, 'de', true);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Block 'steps' needs 2-4 items, got 1", $result['message']);
    }

    public function testCreateSnippetRejectsMissingRequiredBlockSubProperty(): void
    {
        $service = new SnippetService($this->createMock(Connection::class), $this->projectDir);

        $data = self::VALID_OFFER_DATA;
        $data['steps'][1] = ['title' => 'No text'];

        $result = $service->createSnippet('workshop_offer', 'X', $data, 'de', true);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Missing required property 'text' in block 'steps' item 1", $result['message']);
    }

    public function testCreateSnippetRejectsInvalidSelectValue(): void
    {
        $service = new SnippetService($this->createMock(Connection::class), $this->projectDir);

        $result = $service->createSnippet('workshop_facts', 'X', [
            'facts' => [['icon' => 'unicorn', 'text' => 'nope']],
        ], 'de', true);

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Invalid value 'unicorn' for 'icon'", $result['message']);
        $this->assertStringContainsString('check_circle', $result['message']);
    }

    public function testUpdateSnippetDoesNotRequireUntouchedProperties(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')->willReturn([
            'path' => '/cmf/snippets/workshop_offer/ki-workshop-developer',
            'identifier' => '8230bfdb-fd87-49e9-9e28-bbd9378f6df4',
            'props' => self::EXISTING_OFFER_PROPS,
        ]);
        $connection->expects($this->once())->method('executeStatement')->willReturn(1);

        $service = new SnippetService($connection, $this->projectDir);

        $result = $service->updateSnippet('8230bfdb-fd87-49e9-9e28-bbd9378f6df4', ['headline' => 'Neu'], 'de', false);

        $this->assertTrue($result['success'], $result['message']);
        $this->assertFalse($result['published']);
        $this->assertSame('Neu', $result['content']['headline']);
        $this->assertSame('Old Eyebrow', $result['content']['eyebrow']);
    }

    public function testPublishSnippetCopiesDraftToLive(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')->willReturn([
            'path' => '/cmf/snippets/workshop_offer/ki-workshop-developer',
            'identifier' => '8230bfdb-fd87-49e9-9e28-bbd9378f6df4',
            'props' => self::EXISTING_OFFER_PROPS,
        ]);
        // live row missing, folder exists, MAX(sort_order) = 3
        $connection->method('fetchOne')->willReturnCallback(
            fn ($sql, $params = []) => str_contains($sql, 'MAX(') ? 3 : (($params[0] ?? '') === '/cmf/snippets/workshop_offer' ? 9 : null)
        );

        $statements = [];
        $connection->expects($this->exactly(2))
            ->method('executeStatement')
            ->willReturnCallback(function ($sql, $params = []) use (&$statements) {
                $statements[] = [$sql, $params];

                return 1;
            });

        $service = new SnippetService($connection, $this->projectDir);

        $result = $service->publishSnippet('8230bfdb-fd87-49e9-9e28-bbd9378f6df4');

        $this->assertTrue($result['success'], $result['message']);
        $this->assertStringContainsString('UPDATE phpcr_nodes', $statements[0][0]);
        $this->assertSame('default', $statements[0][1][2]);
        $this->assertStringContainsString('INSERT INTO phpcr_nodes', $statements[1][0]);
        $this->assertSame('default_live', $statements[1][1][3]);
        $this->assertStringContainsString('sv:name="i18n:de-state" sv:type="Long" sv:multi-valued="0"><sv:value length="1">2</sv:value>', $statements[1][1][5]);
    }

    public function testSetDefaultSnippetClearsAreaWithNull(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')->willReturn(['props' => self::WEBSPACE_PROPS]);

        $captured = [];
        $connection->expects($this->exactly(2))
            ->method('executeStatement')
            ->willReturnCallback(function ($sql, $params = []) use (&$captured) {
                $captured[] = $params[0];

                return 1;
            });

        $service = new SnippetService($connection, $this->projectDir);

        $result = $service->setDefaultSnippet('workshop_facts', null);

        $this->assertTrue($result['success'], $result['message']);
        $this->assertNull($result['uuid']);
        foreach ($captured as $props) {
            $this->assertStringNotContainsString('settings:snippets-workshop_facts', $props);
            $this->assertStringContainsString('135f2839-a1e2-4a4e-9c5a-7f5fc633a7a8', $props);
        }
    }

    public function testSetDefaultSnippetRejectsUnknownArea(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->expects($this->never())->method('executeStatement');

        $result = (new SnippetService($connection, $this->projectDir))->setDefaultSnippet('nope', 'abc');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString("Unknown snippet area 'nope'", $result['message']);
    }

    public function testListSnippetAreasResolvesAssignedSnippet(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchOne')->willReturn(self::WEBSPACE_PROPS);
        $connection->method('fetchAssociative')->willReturn([
            'path' => '/cmf/snippets/workshop_facts/workshop-fakten',
            'identifier' => '25d798a1-4603-4d5d-800b-fc0fe72236cf',
            'props' => self::FACTS_PROPS,
        ]);

        $result = (new SnippetService($connection, $this->projectDir))->listSnippetAreas('de');

        $areas = array_column($result['areas'], null, 'key');
        $this->assertSame(
            ['uuid' => '25d798a1-4603-4d5d-800b-fc0fe72236cf', 'title' => 'Workshop Fakten'],
            $areas['workshop_facts']['snippet']
        );
        $this->assertSame('Workshop-Fakten', $areas['workshop_facts']['title']);
        $this->assertSame('workshop_offer', $areas['workshop_offer']['snippetType']);
        $this->assertNull($areas['workshop_offer']['snippet']);
    }

    public function testDeleteSnippetRejectsConfirmMismatch(): void
    {
        $connection = $this->createMock(Connection::class);
        $connection->expects($this->never())->method('executeStatement');

        $result = (new SnippetService($connection, $this->projectDir))->deleteSnippet('abc', 'abd', false);

        $this->assertFalse($result['success']);
        $this->assertSame('confirm_mismatch', $result['errorCode']);
    }

    public function testDeleteSnippetFailsWhileReferenced(): void
    {
        $pageProps = '<?xml version="1.0"?><sv:node xmlns:sv="http://www.jcp.org/jcr/sv/1.0">'
            . '<sv:property sv:name="i18n:de-blocks-type#3" sv:type="String" sv:multi-valued="0"><sv:value>workshop-offer</sv:value></sv:property>'
            . '<sv:property sv:name="i18n:de-blocks-offer#3" sv:type="String" sv:multi-valued="0"><sv:value>8230bfdb-fd87-49e9-9e28-bbd9378f6df4</sv:value></sv:property>'
            . '</sv:node>';

        $connection = $this->offerDeleteConnection([
            ['path' => '/cmf/example/contents/workshop', 'workspace_name' => 'default', 'props' => $pageProps],
        ]);
        $connection->expects($this->never())->method('executeStatement');

        $result = (new SnippetService($connection, $this->projectDir))
            ->deleteSnippet('8230bfdb-fd87-49e9-9e28-bbd9378f6df4', '8230bfdb-fd87-49e9-9e28-bbd9378f6df4', false);

        $this->assertFalse($result['success']);
        $this->assertSame('references_present', $result['errorCode']);
        $this->assertStringContainsString('set_default_snippet', $result['nextAction']);
        $reference = $result['details']['references'][0];
        $this->assertSame('block', $reference['kind']);
        $this->assertSame('/cmf/example/contents/workshop', $reference['path']);
        $this->assertSame('workshop-offer', $reference['blockType']);
        $this->assertSame(3, $reference['position']);
    }

    public function testDeleteSnippetReportsAreaReference(): void
    {
        $connection = $this->offerDeleteConnection([
            ['path' => '/cmf/example', 'workspace_name' => 'default_live', 'props' => str_replace('25d798a1-4603-4d5d-800b-fc0fe72236cf', '8230bfdb-fd87-49e9-9e28-bbd9378f6df4', self::WEBSPACE_PROPS)],
        ]);

        $result = (new SnippetService($connection, $this->projectDir))
            ->deleteSnippet('8230bfdb-fd87-49e9-9e28-bbd9378f6df4', '8230bfdb-fd87-49e9-9e28-bbd9378f6df4', true);

        $this->assertSame('references_present', $result['errorCode']);
        $this->assertSame('area', $result['details']['references'][0]['kind']);
        $this->assertSame('workshop_facts', $result['details']['references'][0]['area']);
    }

    public function testDeleteSnippetDryRunDeletesNothing(): void
    {
        $connection = $this->offerDeleteConnection([]);
        $connection->expects($this->never())->method('executeStatement');
        $connection->expects($this->never())->method('transactional');

        $result = (new SnippetService($connection, $this->projectDir))
            ->deleteSnippet('8230bfdb-fd87-49e9-9e28-bbd9378f6df4', '8230bfdb-fd87-49e9-9e28-bbd9378f6df4', true);

        $this->assertTrue($result['success']);
        $this->assertTrue($result['dryRun']);
        $this->assertSame([], $result['references']);
        $this->assertSame('Old Title', $result['snippet']['title']);
    }

    public function testDeleteSnippetRemovesBothWorkspaces(): void
    {
        $connection = $this->offerDeleteConnection([]);
        $connection->method('transactional')->willReturnCallback(fn (callable $callback) => $callback($connection));
        $connection->method('fetchFirstColumn')->willReturn([11, 12]);

        $statements = [];
        $connection->method('executeStatement')->willReturnCallback(function ($sql, $params = []) use (&$statements) {
            $statements[] = [$sql, $params];

            return 1;
        });

        $result = (new SnippetService($connection, $this->projectDir))
            ->deleteSnippet('8230bfdb-fd87-49e9-9e28-bbd9378f6df4', '8230bfdb-fd87-49e9-9e28-bbd9378f6df4', false);

        $this->assertTrue($result['success'], $result['message']);
        $last = end($statements);
        $this->assertStringContainsString('DELETE FROM phpcr_nodes WHERE path = ?', $last[0]);
        $this->assertSame(['/cmf/snippets/workshop_offer/ki-workshop-developer', 'default', 'default_live'], $last[1]);
    }

    /**
     * @param array<int, array{path: string, workspace_name: string, props: string}> $referencingRows
     */
    private function offerDeleteConnection(array $referencingRows): Connection&\PHPUnit\Framework\MockObject\MockObject
    {
        $connection = $this->createMock(Connection::class);
        $connection->method('fetchAssociative')->willReturn([
            'path' => '/cmf/snippets/workshop_offer/ki-workshop-developer',
            'identifier' => '8230bfdb-fd87-49e9-9e28-bbd9378f6df4',
            'props' => self::EXISTING_OFFER_PROPS,
        ]);
        $connection->method('fetchAllAssociative')->willReturn($referencingRows);

        return $connection;
    }
}
