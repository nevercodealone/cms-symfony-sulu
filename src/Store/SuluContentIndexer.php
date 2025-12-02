<?php

declare(strict_types=1);

namespace App\Store;

use Psr\Log\LoggerInterface;
use Symfony\AI\Store\Document\Transformer\TextSplitTransformer;
use Symfony\AI\Store\IndexerInterface;
use Symfony\Component\Console\Output\OutputInterface;

final readonly class SuluContentIndexer
{
    public function __construct(
        private SuluContentLoader $loader,
        private TextSplitTransformer $transformer,
        private IndexerInterface $indexer,
        private ?LoggerInterface $logger = null,
    ) {
    }

    public function index(string $locale, int $limit = 1000, ?OutputInterface $output = null, ?string $webspace = 'example'): void
    {
        $documents = [];
        $pageStats = [
            'total_pages' => 0,
            'unique_pages' => [],
            'documents_per_page' => [],
        ];

        $startTime = microtime(true);

        if ($output) {
            $output->writeln('<info>Starting Sulu content indexing process...</info>');
            $output->writeln(sprintf('Loading pages for locale "%s" (limit: %d)...', $locale, $limit));
        }

        // Load and transform documents
        $rawDocuments = $this->loader->load($locale, ['limit' => $limit, 'webspace' => $webspace]);
        $transformedDocuments = $this->transformer->transform($rawDocuments);

        foreach ($transformedDocuments as $document) {
            $metadata = $document->metadata->getArrayCopy();
            $pageId = $metadata['id'] ?? null;

            if ($pageId) {
                if (!isset($pageStats['documents_per_page'][$pageId])) {
                    $pageStats['documents_per_page'][$pageId] = 0;
                    $pageStats['unique_pages'][$pageId] = $metadata['title'] ?? 'Unknown';
                }
                $pageStats['documents_per_page'][$pageId]++;
            }

            $documents[] = $document;
        }

        $pageStats['total_pages'] = count($pageStats['unique_pages']);

        if ($output) {
            $output->writeln('');
            $output->writeln('<comment>═══════════════════════════════════════════════════════</comment>');
            $output->writeln(sprintf('<info>Pages found:</info> %d unique pages', $pageStats['total_pages']));
            $output->writeln(sprintf('<info>Documents to index:</info> %d (avg %.1f per page)',
                count($documents),
                $pageStats['total_pages'] > 0 ? count($documents) / $pageStats['total_pages'] : 0
            ));
            $output->writeln('<comment>═══════════════════════════════════════════════════════</comment>');
            $output->writeln('');

            if (count($documents) === 0) {
                $output->writeln('<comment>No documents to index.</comment>');
                return;
            }
        }

        // Process in batches
        $batchSize = 20;
        $batches = array_chunk($documents, $batchSize);
        $totalBatches = count($batches);
        $successCount = 0;
        $errorCount = 0;

        if ($output) {
            $output->writeln(sprintf('Processing %d documents in %d batches...', count($documents), $totalBatches));
        }

        foreach ($batches as $batchIndex => $batch) {
            try {
                if ($output) {
                    $output->write(sprintf('Batch %d/%d: Indexing %d documents... ',
                        $batchIndex + 1,
                        $totalBatches,
                        count($batch)
                    ));
                }

                $this->indexer->index($batch);
                $successCount += count($batch);

                if ($output) {
                    $output->writeln('✓');
                }

                // Add delay every 5 batches to respect rate limits
                if ($batchIndex < $totalBatches - 1 && ($batchIndex + 1) % 5 === 0) {
                    $delay = 2;
                    if ($output) {
                        $output->writeln(sprintf('  Waiting %d seconds...', $delay));
                    }
                    sleep($delay);
                }
            } catch (\Exception $e) {
                $errorCount += count($batch);

                if ($output) {
                    $output->writeln(sprintf('✗ Failed: %s', $e->getMessage()));
                }

                $this->logger?->warning(sprintf(
                    'Failed to index batch %d/%d: %s',
                    $batchIndex + 1,
                    $totalBatches,
                    $e->getMessage()
                ));

                // Wait longer after an error
                if ($batchIndex < $totalBatches - 1) {
                    sleep(5);
                }
            }
        }

        $endTime = microtime(true);
        $duration = round($endTime - $startTime, 2);

        if ($output) {
            $output->writeln('');
            $output->writeln('<comment>═══════════════════════════════════════════════════════</comment>');
            $output->writeln('<info>Indexing Summary:</info>');
            $output->writeln('<comment>───────────────────────────────────────────────────────</comment>');
            $output->writeln(sprintf('  <info>Pages processed:</info> %d', $pageStats['total_pages']));
            $output->writeln(sprintf('  <info>Documents indexed:</info> %d/%d successful', $successCount, count($documents)));

            if ($errorCount > 0) {
                $output->writeln(sprintf('  <error>Failed documents:</error> %d', $errorCount));
            }

            $output->writeln(sprintf('  <info>Time taken:</info> %s seconds', $duration));
            $output->writeln(sprintf('  <info>Processing speed:</info> %.1f docs/sec',
                $duration > 0 ? $successCount / $duration : 0
            ));

            if ($pageStats['total_pages'] > 0) {
                $output->writeln('');
                $output->writeln('<comment>───────────────────────────────────────────────────────</comment>');
                $output->writeln('<info>Top 5 pages by document count:</info>');

                arsort($pageStats['documents_per_page']);
                $topPages = array_slice($pageStats['documents_per_page'], 0, 5, true);

                foreach ($topPages as $pageId => $docCount) {
                    $title = $pageStats['unique_pages'][$pageId] ?? 'Unknown';
                    $truncatedTitle = mb_strlen($title) > 50 ? mb_substr($title, 0, 47) . '...' : $title;
                    $output->writeln(sprintf('  • %s (%d docs)', $truncatedTitle, $docCount));
                }
            }

            $output->writeln('<comment>═══════════════════════════════════════════════════════</comment>');

            if ($errorCount > 0) {
                $output->writeln(sprintf('<error>⚠ %d documents failed to index</error>', $errorCount));
            } else {
                $output->writeln('<info>✓ All documents indexed successfully!</info>');
            }
        }

        $this->logger?->info(sprintf(
            'Sulu content indexing completed: %d successful, %d failed out of %d total (%.2fs)',
            $successCount,
            $errorCount,
            count($documents),
            $duration
        ));
    }
}
