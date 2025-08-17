<?php

namespace App\AI\Logger;

use PDO;
use Exception;

/**
 * Direct AI Activity Logger for Sulu CMS
 * 
 * Logs AI content generation activities directly to Sulu's activity table
 * without requiring the full Symfony/Sulu service container.
 */
class AIActivityLogger
{
    private PDO $pdo;
    
    public function __construct()
    {
        try {
            $this->pdo = new PDO("mysql:host=db;dbname=db;charset=utf8mb4", 'db', 'db');
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            // Fail silently if database is not available
            error_log("AIActivityLogger: Could not connect to database: " . $e->getMessage());
        }
    }

    /**
     * Log AI content generation activity directly to Sulu's activity table
     */
    public function logAIContentGeneration(
        string $pagePath,
        string $locale,
        array $content,
        string $sourceUrl,
        string $aiProvider = 'gemini',
        ?string $prompt = null
    ): bool {
        try {
            // Extract page UUID from database using the path
            $pageUuid = $this->getPageUuidFromPath($pagePath);
            if (!$pageUuid) {
                // Use path hash as fallback
                $pageUuid = substr(md5($pagePath), 0, 16);
            }

            // Get page title from database or use headline
            $originalTitle = $this->getPageTitle($pagePath, $locale) ?: ($content['headline'] ?? 'AI Generated Content');
            
            // Create descriptive title with AI context
            $pageTitle = sprintf(
                '%s [AI: %s via %s]',
                $originalTitle,
                ucfirst($aiProvider),
                $this->detectCliTool()
            );

            // Prepare context data
            $context = [
                'source_url' => $sourceUrl,
                'ai_provider' => $aiProvider,
                'cli_tool' => $this->detectCliTool(),
                'blocks_count' => isset($content['items']) ? count($content['items']) : 0,
                'content_type' => $content['type'] ?? 'headline-paragraphs'
            ];

            // Prepare payload data
            $payload = [
                'headline' => $content['headline'] ?? null,
                'prompt' => $prompt ? substr($prompt, 0, 500) : null,
                'position' => $this->extractPosition(),
                'tokens_used' => null, // Could be added if tracked
                'generation_time' => date('c')
            ];

            // Get current user ID (for CLI, we'll use null or a system user)
            $userId = $this->getSystemUserId();

            // Insert activity record
            $stmt = $this->pdo->prepare("
                INSERT INTO ac_activities (
                    type,
                    context,
                    timestamp,
                    batch,
                    payload,
                    resourceKey,
                    resourceId,
                    resourceLocale,
                    resourceWebspaceKey,
                    resourceTitle,
                    resourceTitleLocale,
                    resourceSecurityContext,
                    resourceSecurityObjectType,
                    resourceSecurityObjectId,
                    userId
                ) VALUES (
                    :type,
                    :context,
                    :timestamp,
                    :batch,
                    :payload,
                    :resourceKey,
                    :resourceId,
                    :resourceLocale,
                    :resourceWebspaceKey,
                    :resourceTitle,
                    :resourceTitleLocale,
                    :resourceSecurityContext,
                    :resourceSecurityObjectType,
                    :resourceSecurityObjectId,
                    :userId
                )
            ");

            $stmt->execute([
                ':type' => 'modified',  // Use standard Sulu type
                ':context' => json_encode(array_merge($context, [
                    'ai_generated' => true,  // Add flag to identify AI content
                    'action' => 'AI Content Generated'
                ])),
                ':timestamp' => date('Y-m-d H:i:s'),
                ':batch' => uniqid('ai_', true),
                ':payload' => json_encode($payload),
                ':resourceKey' => 'pages',
                ':resourceId' => $pageUuid,
                ':resourceLocale' => $locale,
                ':resourceWebspaceKey' => 'example',
                ':resourceTitle' => $pageTitle,  // Already has AI marker
                ':resourceTitleLocale' => $locale,
                ':resourceSecurityContext' => 'sulu.webspaces.example',
                ':resourceSecurityObjectType' => 'Sulu\Bundle\PageBundle\Document\PageDocument',
                ':resourceSecurityObjectId' => $pageUuid,
                ':userId' => $userId
            ]);

            return true;
        } catch (Exception $e) {
            error_log("AIActivityLogger: Failed to log activity: " . $e->getMessage());
            return false;
        }
    }

    /**
     * Get page UUID from PHPCR path
     */
    private function getPageUuidFromPath(string $pagePath): ?string
    {
        try {
            $stmt = $this->pdo->prepare("
                SELECT identifier 
                FROM phpcr_nodes 
                WHERE path = :path 
                AND workspace_name = 'default'
                LIMIT 1
            ");
            $stmt->execute([':path' => $pagePath]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result ? $result['identifier'] : null;
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Get page title from database
     */
    private function getPageTitle(string $pagePath, string $locale): ?string
    {
        try {
            $stmt = $this->pdo->prepare("
                SELECT props 
                FROM phpcr_nodes 
                WHERE path = :path 
                AND workspace_name = 'default'
                LIMIT 1
            ");
            $stmt->execute([':path' => $pagePath]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$result) {
                return null;
            }

            // Parse XML to get title
            $xml = new \DOMDocument();
            @$xml->loadXML($result['props']);
            $xpath = new \DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');
            
            $titleNodes = $xpath->query("//sv:property[@sv:name='i18n:$locale-title']");
            if ($titleNodes->length > 0) {
                $valueNode = $titleNodes->item(0)->getElementsByTagName('value')->item(0);
                if ($valueNode) {
                    return $valueNode->nodeValue;
                }
            }
            
            return null;
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Get system user ID or first admin user
     */
    private function getSystemUserId(): ?int
    {
        try {
            // Try to get user "Someone" or first admin user
            $stmt = $this->pdo->prepare("
                SELECT id 
                FROM se_users 
                WHERE username IN ('admin', 'Someone', 'system')
                OR id = 1
                ORDER BY 
                    CASE username 
                        WHEN 'Someone' THEN 1
                        WHEN 'system' THEN 2
                        WHEN 'admin' THEN 3
                        ELSE 4
                    END
                LIMIT 1
            ");
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result ? (int)$result['id'] : null;
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Detect which CLI tool is being used
     */
    private function detectCliTool(): string
    {
        $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 10);
        foreach ($trace as $frame) {
            if (isset($frame['file'])) {
                $filename = basename($frame['file']);
                if (str_contains($filename, 'nca-ai-assistant')) {
                    return 'nca-ai-assistant';
                } elseif (str_contains($filename, 'ai_content_generator_gemini')) {
                    return 'ai_content_generator_gemini';
                } elseif (str_contains($filename, 'nca-quick')) {
                    return 'nca-quick';
                }
            }
        }
        return 'ai-cli';
    }

    /**
     * Extract position from command line arguments
     */
    private function extractPosition(): ?int
    {
        global $argv;
        if (isset($argv)) {
            foreach ($argv as $arg) {
                if (strpos($arg, '--position=') === 0) {
                    return (int) substr($arg, 11);
                }
            }
        }
        return null;
    }
}