<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221116120901 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pr_preview_links (id INT AUTO_INCREMENT NOT NULL, token VARCHAR(12) NOT NULL, resourceKey VARCHAR(255) NOT NULL, resourceId VARCHAR(255) NOT NULL, locale VARCHAR(255) NOT NULL, options LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', visitCount INT NOT NULL, lastVisit DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_EFB5DBF25F37A13B (token), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tr_trash_item_translations (id INT AUTO_INCREMENT NOT NULL, locale VARCHAR(191) DEFAULT NULL, title VARCHAR(191) NOT NULL, trashItemId INT NOT NULL, INDEX IDX_8264DAF45C8D7CA (trashItemId), UNIQUE INDEX UNIQ_8264DAF45C8D7CA4180C698 (trashItemId, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tr_trash_items (id INT AUTO_INCREMENT NOT NULL, resourceKey VARCHAR(191) NOT NULL, resourceId VARCHAR(191) NOT NULL, restoreData LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', restoreType VARCHAR(191) DEFAULT NULL, restoreOptions LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', resourceSecurityContext VARCHAR(191) DEFAULT NULL, resourceSecurityObjectType VARCHAR(191) DEFAULT NULL, resourceSecurityObjectId VARCHAR(191) DEFAULT NULL, storeTimestamp DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', defaultLocale VARCHAR(191) DEFAULT NULL, userId INT DEFAULT NULL, INDEX IDX_102989B64B64DCC (userId), INDEX IDX_102989B5DAEB55C8CF57CB1 (resourceKey, resourceId), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE tr_trash_item_translations ADD CONSTRAINT FK_8264DAF45C8D7CA FOREIGN KEY (trashItemId) REFERENCES tr_trash_items (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tr_trash_items ADD CONSTRAINT FK_102989B64B64DCC FOREIGN KEY (userId) REFERENCES se_users (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX timestamp_idx ON ac_activities (timestamp)');
        $this->addSql('CREATE INDEX resourceKey_idx ON ac_activities (resourceKey)');
        $this->addSql('CREATE INDEX resourceId_idx ON ac_activities (resourceId)');
        $this->addSql('CREATE INDEX resourceSecurityContext_idx ON ac_activities (resourceSecurityContext)');
        $this->addSql('CREATE INDEX resourceSecurityObjectType_idx ON ac_activities (resourceSecurityObjectType)');
        $this->addSql('CREATE INDEX resourceSecurityObjectId_idx ON ac_activities (resourceSecurityObjectId)');
        $this->addSql('CREATE INDEX idx_resource ON ro_routes (entity_id, entity_class)');
        $this->addSql('CREATE INDEX idx_history ON ro_routes (history)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tr_trash_item_translations DROP FOREIGN KEY FK_8264DAF45C8D7CA');
        $this->addSql('DROP TABLE pr_preview_links');
        $this->addSql('DROP TABLE tr_trash_item_translations');
        $this->addSql('DROP TABLE tr_trash_items');
        $this->addSql('DROP INDEX timestamp_idx ON ac_activities');
        $this->addSql('DROP INDEX resourceKey_idx ON ac_activities');
        $this->addSql('DROP INDEX resourceId_idx ON ac_activities');
        $this->addSql('DROP INDEX resourceSecurityContext_idx ON ac_activities');
        $this->addSql('DROP INDEX resourceSecurityObjectType_idx ON ac_activities');
        $this->addSql('DROP INDEX resourceSecurityObjectId_idx ON ac_activities');
        $this->addSql('DROP INDEX idx_resource ON ro_routes');
        $this->addSql('DROP INDEX idx_history ON ro_routes');
    }
}
