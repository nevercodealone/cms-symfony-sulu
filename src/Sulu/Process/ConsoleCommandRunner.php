<?php

declare(strict_types=1);

namespace App\Sulu\Process;

use Symfony\Component\Process\Exception\ProcessTimedOutException;
use Symfony\Component\Process\Process;

/**
 * Runs a bin/console command in a fresh process and returns its JSON result.
 *
 * Why: the MCP server is a long-lived process in which Sulu's DocumentManager
 * (PHPCR session, ORM EntityManager of its subscribers) holds stale
 * connections that block indefinitely. Every DocumentManager mutation
 * (delete, create, publish, move, URL change, redirects) therefore runs in a
 * dedicated console command with fresh connections. The command prints one
 * JSON object on stdout; this runner extracts it.
 */
class ConsoleCommandRunner
{
    public const DEFAULT_TIMEOUT = 60;

    public function __construct(
        private readonly string $projectDir,
    ) {
    }

    /**
     * @param list<string> $arguments console command name followed by its arguments and options
     *
     * @return array{exitCode: int|null, output: string, errorOutput: string, timedOut: bool, result: array<string, mixed>|null}
     */
    public function run(array $arguments, int $timeoutSeconds = self::DEFAULT_TIMEOUT): array
    {
        $process = new Process(
            [$this->projectDir . '/bin/console', ...$arguments],
            $this->projectDir
        );
        $process->setTimeout($timeoutSeconds);

        $timedOut = false;
        try {
            $process->run();
        } catch (ProcessTimedOutException) {
            $timedOut = true;
        }

        $output = $process->getOutput();

        return [
            'exitCode' => $process->getExitCode(),
            'output' => $output,
            'errorOutput' => $process->getErrorOutput(),
            'timedOut' => $timedOut,
            'result' => self::parseJsonResult($output),
        ];
    }

    /**
     * Extract the command's JSON from stdout. bin/console may print banners
     * (e.g. the Sulu context warning) before the JSON - decode the last line
     * that parses as a JSON object.
     *
     * @return array<string, mixed>|null
     */
    public static function parseJsonResult(string $output): ?array
    {
        $lines = explode("\n", trim($output));
        for ($i = count($lines) - 1; $i >= 0; $i--) {
            $line = trim($lines[$i]);
            if ($line !== '' && str_starts_with($line, '{')) {
                $decoded = json_decode($line, true);
                if (is_array($decoded)) {
                    return $decoded;
                }
            }
        }

        return null;
    }

    /**
     * Turn a spawn result into the structured MCP response shape used by
     * every DocumentManager-backed mutation: the command's own JSON wins,
     * otherwise a timeout / no-result error is synthesised.
     *
     * @param array{exitCode: int|null, output: string, errorOutput: string, timedOut: bool, result: array<string, mixed>|null} $spawn
     *
     * @return array<string, mixed> always contains success (bool); on failure errorCode + message
     */
    public static function toResult(array $spawn, string $commandName, int $timeoutSeconds, string $failureCode): array
    {
        $result = $spawn['result'];

        if (is_array($result) && array_key_exists('success', $result)) {
            if (!empty($result['success']) && $spawn['exitCode'] !== 0) {
                error_log(sprintf(
                    '%s succeeded but exited with code %s: %s',
                    $commandName,
                    var_export($spawn['exitCode'], true),
                    mb_substr($spawn['errorOutput'], 0, 500)
                ));
            }

            if (empty($result['success'])) {
                $result['success'] = false;
                $result['errorCode'] = isset($result['errorCode']) ? (string) $result['errorCode'] : $failureCode;
                $result['message'] = isset($result['message']) ? (string) $result['message'] : $commandName . ' failed';
            }

            return $result;
        }

        if ($spawn['timedOut']) {
            return [
                'success' => false,
                'errorCode' => $failureCode . '_timeout',
                'message' => $commandName . ' exceeded ' . $timeoutSeconds . 's and was killed; verify the page state before retrying',
            ];
        }

        $stderr = trim($spawn['errorOutput']);

        return [
            'success' => false,
            'errorCode' => $failureCode,
            'message' => $stderr !== ''
                ? $commandName . ' produced no result: ' . mb_substr($stderr, 0, 300)
                : $commandName . ' failed with exit code ' . var_export($spawn['exitCode'], true),
            'details' => ['exitCode' => $spawn['exitCode']],
        ];
    }
}
