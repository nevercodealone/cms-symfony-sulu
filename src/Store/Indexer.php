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
        private ?LoggerInterface $logger = null,
    ) {
    }

    public function index(string $channelHandle, int $limit, ?OutputInterface $output = null): void
    {
        $documents = [];
        $rawDocuments = $this->loader->load($channelHandle, ['limit' => $limit]);
        $transformedDocuments = $this->transformer->transform($rawDocuments);
        
        foreach ($transformedDocuments as $document) {
            $documents[] = $document;
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
        
        if ($output) {
            $output->writeln('');
            $output->writeln(sprintf(
                'Indexing completed: %d/%d documents indexed successfully',
                $successCount,
                count($documents)
            ));
            
            if ($errorCount > 0) {
                $output->writeln(sprintf('<error>%d documents failed to index</error>', $errorCount));
            }
        }
        
        if ($this->logger) {
            $this->logger->info(sprintf(
                'Indexing completed: %d successful, %d failed out of %d total',
                $successCount,
                $errorCount,
                count($documents)
            ));
        }
    }
}
