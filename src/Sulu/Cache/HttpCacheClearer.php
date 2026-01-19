<?php

declare(strict_types=1);

namespace App\Sulu\Cache;

use Symfony\Component\Filesystem\Filesystem;

/**
 * Clears the Symfony HTTP cache used by Sulu.
 *
 * This is needed because FOS HttpCache with `use_kernel_dispatcher: true`
 * only works within HTTP requests, not from CLI processes like MCP server.
 */
class HttpCacheClearer
{
    private string $cacheDir;
    private Filesystem $filesystem;

    public function __construct(string $projectDir, string $environment)
    {
        // Same path as SuluHttpCache uses
        $this->cacheDir = $projectDir . '/var/cache/common/' . $environment . '/http_cache';
        $this->filesystem = new Filesystem();
    }

    /**
     * Clears the entire HTTP cache directory.
     */
    public function clear(): void
    {
        if ($this->filesystem->exists($this->cacheDir)) {
            $this->filesystem->remove($this->cacheDir);
        }
    }
}
