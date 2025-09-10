<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Create chat messages table for storing AI chat interactions
 */
final class Version20250910195000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create chat messages table for storing AI chat interactions';
    }

    public function up(Schema $schema): void
    {
        // Create the chat messages table
        $this->addSql('CREATE TABLE app_chat_messages (
            id INT AUTO_INCREMENT NOT NULL,
            user_ip VARCHAR(45) NOT NULL,
            session_id VARCHAR(255) DEFAULT NULL,
            question LONGTEXT NOT NULL,
            answer LONGTEXT NOT NULL,
            created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\',
            response_time INT DEFAULT NULL COMMENT \'Response time in milliseconds\',
            locale VARCHAR(50) DEFAULT NULL,
            input_tokens INT DEFAULT NULL COMMENT \'Number of input tokens\',
            output_tokens INT DEFAULT NULL COMMENT \'Number of output tokens\',
            total_tokens INT DEFAULT NULL COMMENT \'Total tokens used\',
            PRIMARY KEY(id),
            INDEX IDX_USER_IP (user_ip),
            INDEX IDX_SESSION_ID (session_id),
            INDEX IDX_CREATED_AT (created_at)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // Drop the chat messages table
        $this->addSql('DROP TABLE app_chat_messages');
    }
}