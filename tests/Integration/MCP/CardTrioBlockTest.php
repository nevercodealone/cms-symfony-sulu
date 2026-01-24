<?php

declare(strict_types=1);

namespace App\Tests\Integration\MCP;

use App\MCP\Tools\SuluPagesTool;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class CardTrioBlockTest extends KernelTestCase
{
    private SuluPagesTool $tool;
    private string $testPath = '/cmf/example/contents/die-websprinter';

    protected function setUp(): void
    {
        self::bootKernel();
        $container = static::getContainer();
        $this->tool = $container->get(SuluPagesTool::class);
    }

    public function testAddCardTrioBlockWithCards(): void
    {
        // Get current block count
        $result = $this->tool->execute([
            'action' => 'get',
            'path' => $this->testPath,
            'locale' => 'de',
        ]);
        $data = json_decode($result->getSanitizedResult()['text'], true);
        $initialBlockCount = count($data['blocks'] ?? []);

        // Add card-trio block with nested cards array
        $cards = json_encode([
            [
                'icon' => 'code',
                'title' => 'Development',
                'description' => '<p>Test card 1</p>',
                'linkText' => 'Learn more',
                'badgeType' => 'success',
                'badgeText' => 'New',
            ],
            [
                'icon' => 'users',
                'title' => 'Community',
                'description' => '<p>Test card 2</p>',
                'linkText' => 'Join us',
                'badgeType' => 'none',
            ],
            [
                'icon' => 'rocket',
                'title' => 'Launch',
                'description' => '<p>Test card 3</p>',
                'linkText' => 'Get started',
                'badgeType' => 'urgent',
                'badgeText' => 'Hot',
            ],
        ]);

        $result = $this->tool->execute([
            'action' => 'add_block',
            'path' => $this->testPath,
            'locale' => 'de',
            'blockType' => 'card-trio',
            'position' => (string) $initialBlockCount,
            'headline' => 'Card Trio Test via MCP',
            'items' => $cards,
        ]);

        $addResult = json_decode($result->getSanitizedResult()['text'], true);
        $this->assertTrue($addResult['success'] ?? false, 'Block should be added successfully');

        // Verify block was added with correct data
        $result = $this->tool->execute([
            'action' => 'get',
            'path' => $this->testPath,
            'locale' => 'de',
        ]);
        $data = json_decode($result->getSanitizedResult()['text'], true);
        $newBlockCount = count($data['blocks'] ?? []);

        $this->assertEquals($initialBlockCount + 1, $newBlockCount, 'Block count should increase by 1');

        $lastBlock = $data['blocks'][$newBlockCount - 1];
        $this->assertEquals('card-trio', $lastBlock['type']);
        $this->assertEquals('Card Trio Test via MCP', $lastBlock['headline']);

        // Verify cards array
        $this->assertArrayHasKey('cards', $lastBlock);
        $this->assertCount(3, $lastBlock['cards']);

        $this->assertEquals('Development', $lastBlock['cards'][0]['title']);
        $this->assertEquals('code', $lastBlock['cards'][0]['icon']);
        $this->assertEquals('success', $lastBlock['cards'][0]['badgeType']);
        $this->assertEquals('New', $lastBlock['cards'][0]['badgeText']);

        $this->assertEquals('Community', $lastBlock['cards'][1]['title']);
        $this->assertEquals('users', $lastBlock['cards'][1]['icon']);

        $this->assertEquals('Launch', $lastBlock['cards'][2]['title']);
        $this->assertEquals('rocket', $lastBlock['cards'][2]['icon']);
        $this->assertEquals('urgent', $lastBlock['cards'][2]['badgeType']);

        // Cleanup: remove the test block
        $this->tool->execute([
            'action' => 'remove_block',
            'path' => $this->testPath,
            'locale' => 'de',
            'position' => (string) ($newBlockCount - 1),
        ]);
    }

    public function testAddCardTrioBlockWithSingleCard(): void
    {
        // Get current block count
        $result = $this->tool->execute([
            'action' => 'get',
            'path' => $this->testPath,
            'locale' => 'de',
        ]);
        $data = json_decode($result->getSanitizedResult()['text'], true);
        $initialBlockCount = count($data['blocks'] ?? []);

        // Add card-trio block with single card
        $cards = json_encode([
            [
                'icon' => 'star',
                'title' => 'Single Card',
                'description' => '<p>Only one card</p>',
                'linkText' => 'Click me',
                'badgeType' => 'info',
                'badgeText' => 'Solo',
            ],
        ]);

        $result = $this->tool->execute([
            'action' => 'add_block',
            'path' => $this->testPath,
            'locale' => 'de',
            'blockType' => 'card-trio',
            'position' => (string) $initialBlockCount,
            'headline' => 'Single Card Test',
            'items' => $cards,
        ]);

        $addResult = json_decode($result->getSanitizedResult()['text'], true);
        $this->assertTrue($addResult['success'] ?? false, 'Block should be added successfully');

        // Verify block was added with single card
        $result = $this->tool->execute([
            'action' => 'get',
            'path' => $this->testPath,
            'locale' => 'de',
        ]);
        $data = json_decode($result->getSanitizedResult()['text'], true);
        $newBlockCount = count($data['blocks'] ?? []);

        $lastBlock = $data['blocks'][$newBlockCount - 1];
        $this->assertEquals('card-trio', $lastBlock['type']);
        $this->assertCount(1, $lastBlock['cards']);
        $this->assertEquals('Single Card', $lastBlock['cards'][0]['title']);

        // Cleanup
        $this->tool->execute([
            'action' => 'remove_block',
            'path' => $this->testPath,
            'locale' => 'de',
            'position' => (string) ($newBlockCount - 1),
        ]);
    }
}
