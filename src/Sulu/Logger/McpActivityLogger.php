<?php

declare(strict_types=1);

namespace App\Sulu\Logger;

use Doctrine\DBAL\Connection;
use Exception;

/**
 * MCP Activity Logger for Sulu CMS
 *
 * Logs MCP content operations to Sulu's activity table.
 */
class McpActivityLogger
{
    private const DEFAULT_WEBSPACE = 'example';

    public function __construct(
        private readonly Connection $connection,
        private readonly string $webspaceKey = self::DEFAULT_WEBSPACE,
    ) {
    }

    /**
     * Log MCP action to Sulu's activity table.
     *
     * @param array<string, mixed> $context
     */
    public function logMcpAction(
        string $actionType,
        string $pagePath,
        string $locale,
        array $context = []
    ): bool {
        try {
            $pageUuid = $this->getPageUuidFromPath($pagePath);
            if (!$pageUuid) {
                $pageUuid = substr(md5($pagePath), 0, 16);
            }

            $pageTitle = $this->getPageTitle($pagePath, $locale) ?: basename($pagePath);

            $activityContext = array_merge([
                'mcp_action' => true,
                'action_type' => $actionType,
            ], $context);

            $payload = [
                'page_path' => $pagePath,
                'locale' => $locale,
                'timestamp' => date('c'),
            ];

            if (isset($context['blockType'])) {
                $payload['block_type'] = $context['blockType'];
            }
            if (isset($context['headline'])) {
                $payload['headline'] = $context['headline'];
            }
            if (isset($context['position'])) {
                $payload['position'] = $context['position'];
            }

            $userId = $this->getSystemUserId();

            $this->connection->executeStatement("
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
                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
                )
            ", [
                'modified',
                json_encode($activityContext),
                date('Y-m-d H:i:s'),
                uniqid('mcp_', true),
                json_encode($payload),
                'pages',
                $pageUuid,
                $locale,
                $this->webspaceKey,
                sprintf('%s [MCP: %s]', $pageTitle, $actionType),
                $locale,
                'sulu.webspaces.' . $this->webspaceKey,
                'Sulu\Bundle\PageBundle\Document\PageDocument',
                $pageUuid,
                $userId,
            ]);

            return true;
        } catch (Exception $e) {
            error_log("McpActivityLogger: Failed to log activity: " . $e->getMessage());
            return false;
        }
    }

    private function getPageUuidFromPath(string $pagePath): ?string
    {
        try {
            $result = $this->connection->fetchAssociative("
                SELECT identifier
                FROM phpcr_nodes
                WHERE path = ?
                AND workspace_name = 'default'
                LIMIT 1
            ", [$pagePath]);
            return $result ? $result['identifier'] : null;
        } catch (Exception) {
            return null;
        }
    }

    private function getPageTitle(string $pagePath, string $locale): ?string
    {
        try {
            $result = $this->connection->fetchAssociative("
                SELECT props
                FROM phpcr_nodes
                WHERE path = ?
                AND workspace_name = 'default'
                LIMIT 1
            ", [$pagePath]);

            if (!$result) {
                return null;
            }

            $xml = new \DOMDocument();
            $previousValue = libxml_use_internal_errors(true);
            $xml->loadXML($result['props'], LIBXML_NONET | LIBXML_NOENT);
            libxml_use_internal_errors($previousValue);
            $xpath = new \DOMXPath($xml);
            $xpath->registerNamespace('sv', 'http://www.jcp.org/jcr/sv/1.0');

            $titleNodes = $xpath->query("//sv:property[@sv:name='i18n:$locale-title']/sv:value");
            if ($titleNodes !== false && $titleNodes->length > 0 && $titleNodes->item(0)) {
                return $titleNodes->item(0)->nodeValue;
            }

            return null;
        } catch (Exception) {
            return null;
        }
    }

    private function getSystemUserId(): ?int
    {
        try {
            $result = $this->connection->fetchAssociative("
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
            return $result ? (int) $result['id'] : null;
        } catch (Exception) {
            return null;
        }
    }
}
