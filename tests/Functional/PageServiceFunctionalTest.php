<?php

declare(strict_types=1);

namespace App\Tests\Functional;

use App\Sulu\Service\PageService;
use Doctrine\DBAL\Connection;
use Sulu\Component\DocumentManager\DocumentManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * Functional test for PageService operations.
 *
 * This test requires a running database with Sulu content.
 * It creates, modifies, and deletes a test page.
 *
 * NOT included in CI pipeline - run manually:
 *   ddev exec vendor/bin/phpunit tests/Functional/PageServiceFunctionalTest.php --group functional-manual
 *
 * @group functional-manual
 */
class PageServiceFunctionalTest extends KernelTestCase
{
    private PageService $pageService;
    private Connection $connection;
    private ?DocumentManagerInterface $documentManager = null;
    private string $testPagePath = '';
    private string $testLocale = 'de';

    protected function setUp(): void
    {
        self::bootKernel();
        $container = static::getContainer();

        $this->pageService = $container->get(PageService::class);
        $this->connection = $container->get(Connection::class);

        try {
            $this->documentManager = $container->get('sulu_document_manager.document_manager');
        } catch (\Exception $e) {
            // DocumentManager may not be available in test environment
        }
    }

    protected function tearDown(): void
    {
        // Clean up test page if it exists
        if ($this->testPagePath !== '') {
            $this->cleanupTestPage();
        }
        parent::tearDown();
    }

    /**
     * Full lifecycle test: create page, add all block types, edit, move, remove, delete.
     */
    public function testFullPageLifecycle(): void
    {
        echo "\n=== Starting Full Page Lifecycle Test ===\n\n";

        // Step 1: Create a test page
        $this->createTestPage();

        // Step 2: Add various block types
        $this->addAllBlockTypes();

        // Step 3: Edit blocks
        $this->editBlocks();

        // Step 4: Move blocks
        $this->moveBlocks();

        // Step 5: Remove blocks
        $this->removeBlocks();

        // Step 6: Delete the page
        $this->deleteTestPage();

        echo "\n=== Full Page Lifecycle Test Complete ===\n";
    }

    private function createTestPage(): void
    {
        echo "--- Step 1: Creating test page ---\n";

        // Find a parent page to create under
        $pages = $this->pageService->listPages($this->testLocale);
        $this->assertNotEmpty($pages, 'Need at least one existing page as parent');

        $parentPath = $pages[0]['path'];
        echo "Parent page: {$parentPath}\n";

        $timestamp = date('YmdHis');
        $resourceSegment = '/test-functional-' . $timestamp;

        $result = $this->pageService->createPage([
            'parentPath' => $parentPath,
            'title' => 'Functional Test Page ' . $timestamp,
            'resourceSegment' => $resourceSegment,
            'seoTitle' => 'Functional Test SEO Title',
            'seoDescription' => 'Functional test page for PageService operations',
            'publish' => false,
        ], $this->testLocale);

        $this->assertTrue($result['success'], 'Create page failed: ' . ($result['message'] ?? 'unknown error'));
        $this->testPagePath = $result['path'];

        echo "Created page at: {$this->testPagePath}\n";
        echo "UUID: {$result['uuid']}\n";
        echo "URL: {$result['url']}\n\n";

        // Verify page exists
        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $this->assertNotNull($page);
        $this->assertSame(0, count($page['blocks']));
    }

    private function addAllBlockTypes(): void
    {
        echo "--- Step 2: Adding all block types ---\n";

        $blocksToAdd = $this->getTestBlocks();
        $addedCount = 0;

        foreach ($blocksToAdd as $index => $block) {
            $result = $this->pageService->addBlock(
                $this->testPagePath,
                $block,
                -1, // Append at end
                $this->testLocale
            );

            if ($result['success']) {
                $addedCount++;
                echo "  ✓ Added block {$index}: {$block['type']}\n";
            } else {
                echo "  ✗ Failed to add block {$index} ({$block['type']}): {$result['message']}\n";
            }
        }

        echo "Added {$addedCount}/" . count($blocksToAdd) . " blocks\n\n";

        // Verify blocks were added
        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $this->assertGreaterThan(0, count($page['blocks']), 'No blocks were added');
        echo "Page now has " . count($page['blocks']) . " blocks\n\n";
    }

    private function editBlocks(): void
    {
        echo "--- Step 3: Editing blocks ---\n";

        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $blockCount = count($page['blocks']);

        if ($blockCount === 0) {
            echo "No blocks to edit\n\n";
            return;
        }

        // Edit first block
        $result = $this->pageService->updateBlock(
            $this->testPagePath,
            0,
            ['headline' => 'Updated Headline ' . date('H:i:s')],
            $this->testLocale
        );

        if ($result['success']) {
            echo "  ✓ Updated block 0 headline\n";
        } else {
            echo "  ✗ Failed to update block 0: {$result['message']}\n";
        }

        // Verify update
        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $this->assertStringContains('Updated Headline', $page['blocks'][0]['headline'] ?? '');
        echo "  Verified: Block 0 headline updated\n\n";
    }

    private function moveBlocks(): void
    {
        echo "--- Step 4: Moving blocks ---\n";

        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $blockCount = count($page['blocks']);

        if ($blockCount < 2) {
            echo "Need at least 2 blocks to test moving\n\n";
            return;
        }

        // Remember first block type
        $firstBlockType = $page['blocks'][0]['type'];
        $secondBlockType = $page['blocks'][1]['type'];

        // Move block 0 to position 1
        $result = $this->pageService->moveBlock(
            $this->testPagePath,
            0,
            1,
            $this->testLocale
        );

        if ($result['success']) {
            echo "  ✓ Moved block from position 0 to 1\n";
        } else {
            echo "  ✗ Failed to move block: {$result['message']}\n";
        }

        // Verify move
        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $this->assertSame($secondBlockType, $page['blocks'][0]['type'], 'Block order not changed');
        echo "  Verified: Block order changed\n";
        echo "  Position 0 is now: {$page['blocks'][0]['type']}\n";
        echo "  Position 1 is now: {$page['blocks'][1]['type']}\n\n";
    }

    private function removeBlocks(): void
    {
        echo "--- Step 5: Removing blocks ---\n";

        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $initialCount = count($page['blocks']);

        if ($initialCount === 0) {
            echo "No blocks to remove\n\n";
            return;
        }

        // Remove last block
        $result = $this->pageService->removeBlock(
            $this->testPagePath,
            $initialCount - 1,
            $this->testLocale
        );

        if ($result['success']) {
            echo "  ✓ Removed block at position " . ($initialCount - 1) . "\n";
        } else {
            echo "  ✗ Failed to remove block: {$result['message']}\n";
        }

        // Verify removal
        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $this->assertSame($initialCount - 1, count($page['blocks']));
        echo "  Verified: Block count is now " . count($page['blocks']) . "\n\n";
    }

    private function deleteTestPage(): void
    {
        echo "--- Step 6: Deleting test page ---\n";

        // First verify page exists
        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $this->assertNotNull($page);

        // Delete using direct SQL since DocumentManager may not work in test
        $this->connection->executeStatement(
            "DELETE FROM phpcr_nodes WHERE path = ? OR path LIKE ?",
            [$this->testPagePath, $this->testPagePath . '/%']
        );

        echo "  ✓ Deleted test page\n";

        // Verify deletion
        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $this->assertNull($page);
        echo "  Verified: Page no longer exists\n\n";

        $this->testPagePath = ''; // Clear so tearDown doesn't try to delete again
    }

    private function cleanupTestPage(): void
    {
        try {
            $this->connection->executeStatement(
                "DELETE FROM phpcr_nodes WHERE path = ? OR path LIKE ?",
                [$this->testPagePath, $this->testPagePath . '/%']
            );
        } catch (\Exception $e) {
            // Ignore cleanup errors
        }
    }

    /**
     * Get test blocks for all supported block types.
     *
     * @return array<array<string, mixed>>
     */
    private function getTestBlocks(): array
    {
        return [
            // Simple blocks
            [
                'type' => 'hl-des',
                'headline' => 'Test Headline Description Block',
                'description' => '<p>This is a test description with <strong>HTML</strong> content.</p>',
            ],
            [
                'type' => 'code',
                'description' => '<?php echo "Hello World"; ?>',
            ],
            [
                'type' => 'introduction',
                'headline' => 'Introduction Headline',
                'description' => '<p>First paragraph</p>',
                'descriptiontwo' => '<p>Second paragraph</p>',
            ],

            // Hero blocks
            [
                'type' => 'hero',
                'headline' => 'Hero Block Headline',
                'description' => '<p>Hero description text</p>',
                'buttonText' => 'Click Here',
                'url' => '/test-url',
            ],
            [
                'type' => 'cta-button',
                'headline' => 'CTA Headline',
                'description' => '<p>CTA description</p>',
                'text' => 'Primary Button',
                'url' => '/primary',
                'texttwo' => 'Secondary Button',
                'urltwo' => '/secondary',
            ],

            // Nested blocks - FAQ
            [
                'type' => 'faq',
                'faqs' => [
                    ['headline' => 'Question 1?', 'subline' => '<p>Answer 1</p>'],
                    ['headline' => 'Question 2?', 'subline' => '<p>Answer 2</p>'],
                    ['headline' => 'Question 3?', 'subline' => '<p>Answer 3</p>'],
                ],
            ],

            // Nested blocks - Table
            [
                'type' => 'table',
                'headline' => 'Test Table',
                'description' => '<p>Table description</p>',
                'columnheader1' => 'Column A',
                'columnheader2' => 'Column B',
                'columnheader3' => 'Column C',
                'rows' => [
                    ['cell1' => 'Row 1 A', 'cell2' => 'Row 1 B', 'cell3' => 'Row 1 C'],
                    ['cell1' => 'Row 2 A', 'cell2' => 'Row 2 B', 'cell3' => 'Row 2 C'],
                ],
            ],

            // Nested blocks - Feature
            [
                'type' => 'feature',
                'subline' => 'Feature Subline',
                'headline' => 'Feature Headline',
                'description' => '<p>Feature description</p>',
                'items' => [
                    ['headline' => 'Feature 1', 'description' => '<p>Feature 1 desc</p>'],
                    ['headline' => 'Feature 2', 'description' => '<p>Feature 2 desc</p>'],
                ],
            ],

            // Nested blocks - Headline Paragraphs
            [
                'type' => 'headline-paragraphs',
                'headline' => 'Headline Paragraphs Block',
                'items' => [
                    ['type' => 'description', 'content' => '<p>First paragraph content</p>'],
                    ['type' => 'code', 'code' => 'console.log("test");', 'language' => 'javascript'],
                    ['type' => 'description', 'content' => '<p>Second paragraph content</p>'],
                ],
            ],

            // Simple navigation blocks
            [
                'type' => 'table-of-contents',
                'headline' => 'Table of Contents',
            ],
            [
                'type' => 'button',
                'buttonText' => 'Simple Button',
                'url' => '/button-url',
            ],

            // Contact blocks
            [
                'type' => 'chat',
                'headline' => 'Chat Headline',
                'description' => '<p>Chat description</p>',
            ],

            // External blocks
            [
                'type' => 'youtube-from-channel',
                'headline' => 'YouTube Videos',
                'subline' => 'Latest from our channel',
                'playlistid' => 'PLtest123',
            ],
            [
                'type' => 'wordpressposts',
                'headline' => 'WordPress Posts',
            ],
        ];
    }

    /**
     * Helper to check if string contains substring.
     */
    private function assertStringContains(string $needle, string $haystack, string $message = ''): void
    {
        $this->assertTrue(
            str_contains($haystack, $needle),
            $message ?: "Failed asserting that '{$haystack}' contains '{$needle}'"
        );
    }

    /**
     * Test DocumentManager cache clearing after operations.
     */
    public function testDocumentManagerCacheClearing(): void
    {
        if ($this->documentManager === null) {
            $this->markTestSkipped('DocumentManager not available');
        }

        echo "\n=== Testing DocumentManager Cache Clearing ===\n\n";

        // Create a test page
        $pages = $this->pageService->listPages($this->testLocale);
        $this->assertNotEmpty($pages);
        $parentPath = $pages[0]['path'];

        $timestamp = date('YmdHis');
        $result = $this->pageService->createPage([
            'parentPath' => $parentPath,
            'title' => 'Cache Test Page ' . $timestamp,
            'resourceSegment' => '/cache-test-' . $timestamp,
            'publish' => false,
        ], $this->testLocale);

        $this->assertTrue($result['success']);
        $this->testPagePath = $result['path'];

        // Add a block
        $addResult = $this->pageService->addBlock(
            $this->testPagePath,
            ['type' => 'hl-des', 'headline' => 'Test', 'description' => '<p>Test</p>'],
            0,
            $this->testLocale
        );
        $this->assertTrue($addResult['success']);

        // Clear DocumentManager cache manually
        $this->documentManager->clear();

        // Try to find the document
        try {
            $document = $this->documentManager->find($this->testPagePath, $this->testLocale);
            if ($document !== null) {
                echo "✓ DocumentManager can find page after cache clear\n";
            } else {
                echo "✗ DocumentManager returned null\n";
            }
        } catch (\Exception $e) {
            echo "✗ DocumentManager error: " . $e->getMessage() . "\n";
        }

        // Cleanup
        $this->connection->executeStatement(
            "DELETE FROM phpcr_nodes WHERE path = ?",
            [$this->testPagePath]
        );
        $this->testPagePath = '';

        echo "\n=== Cache Clearing Test Complete ===\n";
    }

    /**
     * Test append to block functionality.
     */
    public function testAppendToBlock(): void
    {
        echo "\n=== Testing Append To Block ===\n\n";

        // Create test page
        $pages = $this->pageService->listPages($this->testLocale);
        $this->assertNotEmpty($pages);

        $timestamp = date('YmdHis');
        $result = $this->pageService->createPage([
            'parentPath' => $pages[0]['path'],
            'title' => 'Append Test Page ' . $timestamp,
            'resourceSegment' => '/append-test-' . $timestamp,
            'publish' => false,
        ], $this->testLocale);

        $this->assertTrue($result['success']);
        $this->testPagePath = $result['path'];

        // Add initial FAQ block
        $addResult = $this->pageService->addBlock(
            $this->testPagePath,
            [
                'type' => 'faq',
                'faqs' => [
                    ['headline' => 'Initial Q1', 'subline' => '<p>Initial A1</p>'],
                ],
            ],
            0,
            $this->testLocale
        );
        $this->assertTrue($addResult['success']);
        echo "✓ Added initial FAQ block with 1 item\n";

        // Append more FAQ items
        $appendResult = $this->pageService->appendToBlock(
            $this->testPagePath,
            0,
            [
                ['headline' => 'Appended Q2', 'subline' => '<p>Appended A2</p>'],
                ['headline' => 'Appended Q3', 'subline' => '<p>Appended A3</p>'],
            ],
            $this->testLocale
        );

        $this->assertTrue($appendResult['success']);
        $this->assertSame(2, $appendResult['items_added']);
        $this->assertSame(3, $appendResult['total_items']);
        echo "✓ Appended 2 items, total now 3\n";

        // Verify
        $page = $this->pageService->getPage($this->testPagePath, $this->testLocale);
        $this->assertSame(3, count($page['blocks'][0]['faqs'] ?? []));
        echo "✓ Verified: FAQ block now has 3 items\n";

        // Cleanup
        $this->connection->executeStatement(
            "DELETE FROM phpcr_nodes WHERE path = ?",
            [$this->testPagePath]
        );
        $this->testPagePath = '';

        echo "\n=== Append To Block Test Complete ===\n";
    }

    /**
     * Test publish and unpublish operations.
     */
    public function testPublishUnpublish(): void
    {
        echo "\n=== Testing Publish/Unpublish ===\n\n";

        // Create test page
        $pages = $this->pageService->listPages($this->testLocale);
        $this->assertNotEmpty($pages);

        $timestamp = date('YmdHis');
        $result = $this->pageService->createPage([
            'parentPath' => $pages[0]['path'],
            'title' => 'Publish Test Page ' . $timestamp,
            'resourceSegment' => '/publish-test-' . $timestamp,
            'publish' => false,
        ], $this->testLocale);

        $this->assertTrue($result['success']);
        $this->testPagePath = $result['path'];
        echo "✓ Created unpublished page\n";

        // Publish
        $publishResult = $this->pageService->publishPage($this->testPagePath, $this->testLocale);
        $this->assertTrue($publishResult['success']);
        echo "✓ Published page\n";

        // Unpublish
        $unpublishResult = $this->pageService->unpublishPage($this->testPagePath, $this->testLocale);
        $this->assertTrue($unpublishResult['success']);
        echo "✓ Unpublished page\n";

        // Cleanup
        $this->connection->executeStatement(
            "DELETE FROM phpcr_nodes WHERE path = ?",
            [$this->testPagePath]
        );
        $this->connection->executeStatement(
            "DELETE FROM phpcr_nodes WHERE path LIKE ?",
            ['%/publish-test-' . $timestamp]
        );
        $this->testPagePath = '';

        echo "\n=== Publish/Unpublish Test Complete ===\n";
    }
}
