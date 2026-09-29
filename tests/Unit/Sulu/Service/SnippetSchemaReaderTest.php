<?php

declare(strict_types=1);

namespace App\Tests\Unit\Sulu\Service;

use App\Sulu\Service\SnippetSchemaReader;
use PHPUnit\Framework\TestCase;

class SnippetSchemaReaderTest extends TestCase
{
    private SnippetSchemaReader $reader;

    protected function setUp(): void
    {
        $this->reader = new SnippetSchemaReader(dirname(__DIR__, 4));
    }

    public function testWorkshopOfferSchema(): void
    {
        $schema = $this->reader->getSchema('workshop_offer');

        $this->assertNotNull($schema);
        $this->assertSame(
            ['title', 'eyebrow', 'headline', 'text', 'contact', 'targetPage', 'buttonText'],
            array_keys($schema['properties'])
        );
        $this->assertSame('text_editor', $schema['properties']['text']['suluType']);
        $this->assertSame('html', $schema['properties']['text']['writeType']);
        $this->assertSame('contact', $schema['properties']['contact']['writeType']);
        $this->assertSame('page', $schema['properties']['targetPage']['writeType']);
        $this->assertTrue($schema['properties']['eyebrow']['required']);

        $steps = $schema['blocks']['steps'];
        $this->assertSame(2, $steps['minOccurs']);
        $this->assertSame(4, $steps['maxOccurs']);
        $this->assertSame('step', $steps['defaultType']);
        $this->assertTrue($steps['writable']);
        $this->assertTrue($steps['types']['step']['properties']['title']['required']);
        $this->assertTrue($steps['types']['step']['properties']['text']['required']);
        $this->assertFalse($steps['types']['step']['properties']['optional']['required']);
        $this->assertSame('boolean', $steps['types']['step']['properties']['optional']['writeType']);
    }

    public function testSelectOptionsAreListed(): void
    {
        $icon = $this->reader->getSchema('workshop_facts')['blocks']['facts']['types']['fact']['properties']['icon'] ?? null;

        $this->assertNotNull($icon);
        $this->assertSame('single_select', $icon['suluType']);
        $this->assertContains('check_circle', $icon['options']);
        $this->assertContains('rocket_launch', $icon['options']);
        $this->assertSame('check_circle', $icon['default']);
        $this->assertSame('pages', $this->reader->getSchema('workshop_facts')['properties']['variants']['writeType']);
    }

    public function testAreasDefaultToTemplateKeys(): void
    {
        $this->assertSame([['key' => 'workshop_facts', 'title' => ['en' => 'Workshop Facts', 'de' => 'Workshop-Fakten']]], $this->reader->getSchema('workshop_facts')['areas']);

        $areas = $this->reader->listAreas();
        $this->assertSame('workshop_facts', $areas['workshop_facts']['template']);
        $this->assertSame(array_keys($areas), $this->reader->listTypes());
    }

    public function testUnsupportedTypesAreNotWritable(): void
    {
        $this->assertFalse($this->reader->getSchema('contact')['properties']['organisation']['writable']);
        // footer columns contain a nested links block
        $this->assertFalse($this->reader->getSchema('footer')['blocks']['columns']['writable']);
    }

    public function testUnknownTypeReturnsNull(): void
    {
        $this->assertNull($this->reader->getSchema('does_not_exist'));
        $this->assertContains('workshop_offer', $this->reader->listTypes());
    }
}
