<?php

declare(strict_types=1);

namespace App\Store;

use Psr\Log\LoggerInterface;
use Symfony\AI\Store\Document\Transformer\TextSplitTransformer;
use Symfony\AI\Store\IndexerInterface;
use Symfony\Component\Console\Output\OutputInterface;

final readonly class Indexer
{
    public function __construct(
        private YouTubeChannelLoader $loader,
        private TextSplitTransformer $transformer,
        private IndexerInterface $indexer,
        private ChromaDBUpsertStore $chromaStore,
        private ?LoggerInterface $logger = null,
    ) {
    }

    public function index(string $channelHandle, int $limit, ?OutputInterface $output = null): void
    {
        $documents = [];
        $videoStats = [
            'total_videos' => 0,
            'unique_videos' => [],
            'documents_per_video' => [],
            'skipped_videos' => [],
            'already_indexed' => []
        ];

        $startTime = microtime(true);

        if ($output) {
            $output->writeln('<info>Starting video indexing process...</info>');
            $output->writeln(sprintf('Loading videos from source (limit: %d)...', $limit));
        }

        // Check for already indexed videos
        $existingVideoIds = [];
        try {
            $existingVideoIds = $this->chromaStore->getIndexedVideoIds();
            if ($output && count($existingVideoIds) > 0) {
                $output->writeln(sprintf('<comment>Found %d videos already indexed in database</comment>', count($existingVideoIds)));
            }
        } catch (\Exception $e) {
            if ($output) {
                $output->writeln('<comment>Could not check for existing videos, will index all</comment>');
            }
        }

        $rawDocuments = $this->loader->load($channelHandle, ['limit' => $limit]);
        $transformedDocuments = $this->transformer->transform($rawDocuments);

        $skippedDocuments = 0;
        foreach ($transformedDocuments as $document) {
            // Extract video ID from metadata
            $metadata = $document->metadata->getArrayCopy();
            $videoId = $metadata['video_id'] ?? $metadata['id'] ?? null;

            if ($videoId) {
                // Check if video is already indexed
                if (in_array($videoId, $existingVideoIds)) {
                    if (!in_array($videoId, $videoStats['already_indexed'])) {
                        $videoStats['already_indexed'][] = $videoId;
                        $videoStats['skipped_videos'][$videoId] = $metadata['title'] ?? 'Unknown';
                    }
                    $skippedDocuments++;
                    continue; // Skip this document
                }

                if (!isset($videoStats['documents_per_video'][$videoId])) {
                    $videoStats['documents_per_video'][$videoId] = 0;
                    $videoStats['unique_videos'][$videoId] = $metadata['title'] ?? 'Unknown';
                }
                $videoStats['documents_per_video'][$videoId]++;
            }

            $documents[] = $document;
        }

        $videoStats['total_videos'] = count($videoStats['unique_videos']);

        if ($output) {
            $output->writeln('');
            $output->writeln('<comment>═══════════════════════════════════════════════════════</comment>');
            $output->writeln(sprintf('<info>Videos found:</info> %d unique videos', $videoStats['total_videos']));

            if (count($videoStats['already_indexed']) > 0) {
                $output->writeln(sprintf('<comment>Skipped (already indexed):</comment> %d videos (%d documents)',
                    count($videoStats['already_indexed']),
                    $skippedDocuments
                ));
            }

            $output->writeln(sprintf('<info>Documents to index:</info> %d (avg %.1f per video)',
                count($documents),
                $videoStats['total_videos'] > 0 ? count($documents) / $videoStats['total_videos'] : 0
            ));
            $output->writeln('<comment>═══════════════════════════════════════════════════════</comment>');
            $output->writeln('');

            if (count($documents) === 0) {
                $output->writeln('<comment>No new documents to index. All videos are already indexed.</comment>');
                return;
            }
        }

        // Process in batches to avoid API rate limits
        $batchSize = 20; // Increased batch size for faster processing
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
                
                // Add delay between batches to respect rate limits
                // Only add delay every 5th batch to speed up processing
                if ($batchIndex < $totalBatches - 1 && ($batchIndex + 1) % 5 === 0) {
                    $delay = 3; // 3 seconds pause every 5 batches
                    if ($output) {
                        $output->writeln(sprintf('  Waiting %d seconds before next batch...', $delay));
                    }
                    sleep($delay);
                }
            } catch (\Exception $e) {
                $errorCount += count($batch);
                
                if ($output) {
                    $output->writeln(sprintf('✗ Failed: %s', $e->getMessage()));
                }
                
                if ($this->logger) {
                    $this->logger->warning(sprintf(
                        'Failed to index batch %d/%d: %s',
                        $batchIndex + 1,
                        $totalBatches,
                        $e->getMessage()
                    ));
                }
                
                // Wait longer after an error
                if ($batchIndex < $totalBatches - 1) {
                    $errorDelay = 5;
                    if ($output) {
                        $output->writeln(sprintf('  Waiting %d seconds after error...', $errorDelay));
                    }
                    sleep($errorDelay);
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
            $output->writeln(sprintf('  <info>Videos processed:</info> %d new, %d skipped',
                $videoStats['total_videos'],
                count($videoStats['already_indexed'])
            ));
            $output->writeln(sprintf('  <info>Documents indexed:</info> %d/%d successful', $successCount, count($documents)));

            if ($errorCount > 0) {
                $output->writeln(sprintf('  <error>Failed documents:</error> %d', $errorCount));
            }

            $output->writeln(sprintf('  <info>Time taken:</info> %s seconds', $duration));
            $output->writeln(sprintf('  <info>Processing speed:</info> %.1f docs/sec',
                $duration > 0 ? $successCount / $duration : 0
            ));

            if ($videoStats['total_videos'] > 0) {
                $output->writeln('');
                $output->writeln('<comment>───────────────────────────────────────────────────────</comment>');
                $output->writeln('<info>Top 5 videos by document count:</info>');

                arsort($videoStats['documents_per_video']);
                $topVideos = array_slice($videoStats['documents_per_video'], 0, 5, true);

                foreach ($topVideos as $videoId => $docCount) {
                    $title = $videoStats['unique_videos'][$videoId] ?? 'Unknown';
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

        if ($this->logger) {
            $this->logger->info(sprintf(
                'Indexing completed: %d successful, %d failed out of %d total (%.2fs)',
                $successCount,
                $errorCount,
                count($documents),
                $duration
            ));
        }
    }
}
