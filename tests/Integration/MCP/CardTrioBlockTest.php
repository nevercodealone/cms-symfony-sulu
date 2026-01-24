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

    public function testAddCardTrioBlockWithAllFields(): void
    {
        // Get current block count
        $result = $this->tool->execute([
            'action' => 'get',
            'path' => $this->testPath,
            'locale' => 'de',
        ]);
        $data = json_decode($result->getSanitizedResult()['text'], true);
        $initialBlockCount = count($data['blocks'] ?? []);

        // Add card-trio block
        $result = $this->tool->execute([
            'action' => 'add_block',
            'path' => $this->testPath,
            'locale' => 'de',
            'blockType' => 'card-trio',
            'position' => (string) $initialBlockCount,
            'subline' => 'MCP Test',
            'headline' => 'Card Trio Test via MCP',
            'description' => '<p>This block was added via MCP API</p>',
            'card1Icon' => 'code',
            'card1Title' => 'Development',
            'card1Description' => '<p>Test card 1</p>',
            'card1LinkText' => 'Learn more',
            'card1BadgeType' => 'success',
            'card1BadgeText' => 'New',
            'card2Icon' => 'users',
            'card2Title' => 'Community',
            'card2Description' => '<p>Test card 2</p>',
            'card2LinkText' => 'Join us',
            'card2BadgeType' => 'none',
            'card3Icon' => 'rocket',
            'card3Title' => 'Launch',
            'card3Description' => '<p>Test card 3</p>',
            'card3LinkText' => 'Get started',
            'card3BadgeType' => 'urgent',
            'card3BadgeText' => 'Hot',
            'showFooter' => 'true',
            'footerText' => 'Need help?',
            'footerButtonText' => 'Contact Us',
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
        $this->assertEquals('MCP Test', $lastBlock['subline']);
        $this->assertEquals('Development', $lastBlock['card1Title']);
        $this->assertEquals('Community', $lastBlock['card2Title']);
        $this->assertEquals('Launch', $lastBlock['card3Title']);
        $this->assertEquals('code', $lastBlock['card1Icon']);
        $this->assertEquals('success', $lastBlock['card1BadgeType']);
        $this->assertEquals('New', $lastBlock['card1BadgeText']);

        // Cleanup: remove the test block
        $this->tool->execute([
            'action' => 'remove_block',
            'path' => $this->testPath,
            'locale' => 'de',
            'position' => (string) ($newBlockCount - 1),
        ]);
    }
}
