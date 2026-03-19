<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260318221043 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE app_contact_leads (id INT AUTO_INCREMENT NOT NULL, product VARCHAR(50) NOT NULL, answers LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(50) DEFAULT NULL, message LONGTEXT DEFAULT NULL, user_ip VARCHAR(45) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP INDEX IDX_CREATED_AT ON app_chat_messages');
        $this->addSql('DROP INDEX IDX_USER_IP ON app_chat_messages');
        $this->addSql('DROP INDEX IDX_SESSION_ID ON app_chat_messages');
        $this->addSql('ALTER TABLE app_chat_messages CHANGE response_time response_time INT DEFAULT NULL, CHANGE input_tokens input_tokens INT DEFAULT NULL, CHANGE output_tokens output_tokens INT DEFAULT NULL, CHANGE total_tokens total_tokens INT DEFAULT NULL');
        $this->addSql('DROP INDEX uniq_access_token ON mcp_access_tokens');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_985B5B2D5F37A13B ON mcp_access_tokens (token)');
        $this->addSql('DROP INDEX uniq_auth_code ON mcp_auth_codes');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_5CAC607D77153098 ON mcp_auth_codes (code)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE app_contact_leads');
        $this->addSql('ALTER TABLE app_chat_messages CHANGE response_time response_time INT DEFAULT NULL COMMENT \'Response time in milliseconds\', CHANGE input_tokens input_tokens INT DEFAULT NULL COMMENT \'Number of input tokens\', CHANGE output_tokens output_tokens INT DEFAULT NULL COMMENT \'Number of output tokens\', CHANGE total_tokens total_tokens INT DEFAULT NULL COMMENT \'Total tokens used\'');
        $this->addSql('CREATE INDEX IDX_CREATED_AT ON app_chat_messages (created_at)');
        $this->addSql('CREATE INDEX IDX_USER_IP ON app_chat_messages (user_ip)');
        $this->addSql('CREATE INDEX IDX_SESSION_ID ON app_chat_messages (session_id)');
        $this->addSql('DROP INDEX uniq_985b5b2d5f37a13b ON mcp_access_tokens');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_access_token ON mcp_access_tokens (token)');
        $this->addSql('DROP INDEX uniq_5cac607d77153098 ON mcp_auth_codes');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_auth_code ON mcp_auth_codes (code)');
    }
}
