<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20261007222945 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ai_experts (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, options JSON DEFAULT NULL COMMENT \'(DC2Type:json)\', uuid CHAR(36) NOT NULL COMMENT \'(DC2Type:guid)\', expert_key VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_BF96FAF7D17F50A6 (uuid), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ai_search_feedback (id INT AUTO_INCREMENT NOT NULL, feedback VARCHAR(255) DEFAULT NULL, feedback_comment LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', feedback_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', uuid VARCHAR(36) NOT NULL, question LONGTEXT NOT NULL, answer LONGTEXT NOT NULL, sources JSON NOT NULL COMMENT \'(DC2Type:json)\', locale VARCHAR(10) NOT NULL, request_status VARCHAR(20) NOT NULL, error_message LONGTEXT DEFAULT NULL, error_code INT DEFAULT NULL, UNIQUE INDEX UNIQ_2ECF217BD17F50A6 (uuid), INDEX idx_search_feedback_created (created_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP TABLE client_request_refactoring');
        $this->addSql('DROP INDEX uniq_access_token ON mcp_access_tokens');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_985B5B2D5F37A13B ON mcp_access_tokens (token)');
        $this->addSql('DROP INDEX uniq_auth_code ON mcp_auth_codes');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_5CAC607D77153098 ON mcp_auth_codes (code)');
        $this->addSql('ALTER TABLE me_file_version_meta ADD aiDisclosureText LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE me_file_versions ADD origin VARCHAR(31) DEFAULT \'unknown\' NOT NULL, ADD aiDisclosureDisabled TINYINT(1) DEFAULT 0 NOT NULL, ADD aiDisclosureIconVariant VARCHAR(31) DEFAULT \'auto\' NOT NULL');
        $this->addSql('CREATE INDEX reference_resource_idx ON re_references (referenceResourceKey, referenceResourceId, referenceLocale, referenceContext)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE client_request_refactoring (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, project_url VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, project_description LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, team VARCHAR(20) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, contact_type VARCHAR(20) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, additional_information LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE ai_experts');
        $this->addSql('DROP TABLE ai_search_feedback');
        $this->addSql('DROP INDEX uniq_5cac607d77153098 ON mcp_auth_codes');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_auth_code ON mcp_auth_codes (code)');
        $this->addSql('ALTER TABLE me_file_version_meta DROP aiDisclosureText');
        $this->addSql('DROP INDEX reference_resource_idx ON re_references');
        $this->addSql('DROP INDEX uniq_985b5b2d5f37a13b ON mcp_access_tokens');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_access_token ON mcp_access_tokens (token)');
        $this->addSql('ALTER TABLE me_file_versions DROP origin, DROP aiDisclosureDisabled, DROP aiDisclosureIconVariant');
    }
}
