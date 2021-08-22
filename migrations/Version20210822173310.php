<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210822173310 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE fo_form_field_translations DROP FOREIGN KEY FK_D3E6716F2C2B00B');
        $this->addSql('ALTER TABLE fo_form_translation_receivers DROP FOREIGN KEY FK_E57BDF29F4EA7C89');
        $this->addSql('ALTER TABLE fo_dynamics DROP FOREIGN KEY FK_EC8AF0309E50CC11');
        $this->addSql('ALTER TABLE fo_form_fields DROP FOREIGN KEY FK_D544F184EAFB58EA');
        $this->addSql('ALTER TABLE fo_form_translations DROP FOREIGN KEY FK_8BAF12FFEAFB58EA');
        $this->addSql('CREATE TABLE ac_activities (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(191) NOT NULL, context LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', timestamp DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', batch VARCHAR(191) DEFAULT NULL, payload LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', resourceKey VARCHAR(191) NOT NULL, resourceId VARCHAR(191) NOT NULL, resourceLocale VARCHAR(191) DEFAULT NULL, resourceWebspaceKey VARCHAR(191) DEFAULT NULL, resourceTitle VARCHAR(191) DEFAULT NULL, resourceTitleLocale VARCHAR(191) DEFAULT NULL, resourceSecurityContext VARCHAR(191) DEFAULT NULL, resourceSecurityObjectType VARCHAR(191) DEFAULT NULL, resourceSecurityObjectId VARCHAR(191) DEFAULT NULL, userId INT DEFAULT NULL, INDEX IDX_3EE015D064B64DCC (userId), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ac_activities ADD CONSTRAINT FK_3EE015D064B64DCC FOREIGN KEY (userId) REFERENCES se_users (id) ON DELETE SET NULL');
        $this->addSql('DROP TABLE ext_translations');
        $this->addSql('DROP TABLE fo_dynamics');
        $this->addSql('DROP TABLE fo_form_field_translations');
        $this->addSql('DROP TABLE fo_form_fields');
        $this->addSql('DROP TABLE fo_form_translation_receivers');
        $this->addSql('DROP TABLE fo_form_translations');
        $this->addSql('DROP TABLE fo_forms');
        $this->addSql('DROP TABLE message');
        $this->addSql('ALTER TABLE co_positions CHANGE position position VARCHAR(191) NOT NULL');
        $this->addSql('ALTER TABLE se_access_controls CHANGE entityId entityId VARCHAR(36) NOT NULL');
        $this->addSql('ALTER TABLE se_users ADD created DATETIME NOT NULL, ADD changed DATETIME NOT NULL, ADD idUsersCreator INT DEFAULT NULL, ADD idUsersChanger INT DEFAULT NULL');
        $this->addSql('ALTER TABLE se_users ADD CONSTRAINT FK_B10AC28EDBF11E1D FOREIGN KEY (idUsersCreator) REFERENCES se_users (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE se_users ADD CONSTRAINT FK_B10AC28E30D07CD5 FOREIGN KEY (idUsersChanger) REFERENCES se_users (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_B10AC28EDBF11E1D ON se_users (idUsersCreator)');
        $this->addSql('CREATE INDEX IDX_B10AC28E30D07CD5 ON se_users (idUsersChanger)');
        $this->addSql('ALTER TABLE phpcr_type_childs ADD id INT AUTO_INCREMENT NOT NULL, ADD PRIMARY KEY (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ext_translations (id INT AUTO_INCREMENT NOT NULL, locale VARCHAR(8) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, object_class VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, field VARCHAR(32) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, foreign_key VARCHAR(64) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX translations_lookup_idx (locale, object_class, foreign_key), UNIQUE INDEX lookup_unique_idx (locale, object_class, field, foreign_key), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE fo_dynamics (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, typeId VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, locale VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, webspaceKey VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, typeName VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, salutation VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, title VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, firstName VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, lastName VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, email VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, phone VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, fax VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, street VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, zip VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, city VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, state VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, country VARCHAR(2) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, function VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, company LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, text VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, textarea LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, date VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, attachment VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, checkbox VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, checkboxMultiple LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, dropdown VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, dropdownMultiple LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, radioButtons VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, data LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, created DATETIME NOT NULL, changed DATETIME NOT NULL, formId INT DEFAULT NULL, idUsersCreator INT DEFAULT NULL, idUsersChanger INT DEFAULT NULL, INDEX IDX_EC8AF0309E50CC11 (formId), INDEX IDX_EC8AF030DBF11E1D (idUsersCreator), INDEX IDX_EC8AF03030D07CD5 (idUsersChanger), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE fo_form_field_translations (id INT AUTO_INCREMENT NOT NULL, title LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, placeholder VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, defaultValue LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, shortTitle VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, locale VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, options LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, idFormFields INT NOT NULL, INDEX IDX_D3E6716F2C2B00B (idFormFields), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE fo_form_fields (id INT AUTO_INCREMENT NOT NULL, keyName VARCHAR(128) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, orderNumber INT NOT NULL, type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, width VARCHAR(16) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, required TINYINT(1) NOT NULL, defaultLocale VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, idForms INT NOT NULL, UNIQUE INDEX UNIQ_D544F184EAFB58EA6773D512 (idForms, keyName), INDEX IDX_D544F184EAFB58EA (idForms), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE fo_form_translation_receivers (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(16) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, idFormTranslations INT NOT NULL, INDEX IDX_E57BDF29F4EA7C89 (idFormTranslations), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE fo_form_translations (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, subject VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, fromEmail VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, fromName VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, toEmail VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, toName VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, mailText LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, submitLabel VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, successText LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, sendAttachments TINYINT(1) DEFAULT \'0\' NOT NULL, deactivateNotifyMails TINYINT(1) DEFAULT \'0\' NOT NULL, deactivateCustomerMails TINYINT(1) DEFAULT \'0\' NOT NULL, replyTo TINYINT(1) DEFAULT \'0\' NOT NULL, locale VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created DATETIME NOT NULL, changed DATETIME NOT NULL, idForms INT NOT NULL, idUsersCreator INT DEFAULT NULL, idUsersChanger INT DEFAULT NULL, INDEX IDX_8BAF12FFEAFB58EA (idForms), INDEX IDX_8BAF12FFDBF11E1D (idUsersCreator), INDEX IDX_8BAF12FF30D07CD5 (idUsersChanger), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE fo_forms (id INT AUTO_INCREMENT NOT NULL, defaultLocale VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, email VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, message VARCHAR(500) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created DATETIME NOT NULL, ip VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE fo_dynamics ADD CONSTRAINT FK_EC8AF03030D07CD5 FOREIGN KEY (idUsersChanger) REFERENCES se_users (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE fo_dynamics ADD CONSTRAINT FK_EC8AF0309E50CC11 FOREIGN KEY (formId) REFERENCES fo_forms (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE fo_dynamics ADD CONSTRAINT FK_EC8AF030DBF11E1D FOREIGN KEY (idUsersCreator) REFERENCES se_users (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE fo_form_field_translations ADD CONSTRAINT FK_D3E6716F2C2B00B FOREIGN KEY (idFormFields) REFERENCES fo_form_fields (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fo_form_fields ADD CONSTRAINT FK_D544F184EAFB58EA FOREIGN KEY (idForms) REFERENCES fo_forms (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fo_form_translation_receivers ADD CONSTRAINT FK_E57BDF29F4EA7C89 FOREIGN KEY (idFormTranslations) REFERENCES fo_form_translations (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fo_form_translations ADD CONSTRAINT FK_8BAF12FF30D07CD5 FOREIGN KEY (idUsersChanger) REFERENCES se_users (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE fo_form_translations ADD CONSTRAINT FK_8BAF12FFDBF11E1D FOREIGN KEY (idUsersCreator) REFERENCES se_users (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE fo_form_translations ADD CONSTRAINT FK_8BAF12FFEAFB58EA FOREIGN KEY (idForms) REFERENCES fo_forms (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE ac_activities');
        $this->addSql('ALTER TABLE co_positions CHANGE position position VARCHAR(60) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE phpcr_type_childs MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE phpcr_type_childs DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE phpcr_type_childs DROP id');
        $this->addSql('ALTER TABLE se_access_controls CHANGE entityId entityId INT NOT NULL');
        $this->addSql('ALTER TABLE se_users DROP FOREIGN KEY FK_B10AC28EDBF11E1D');
        $this->addSql('ALTER TABLE se_users DROP FOREIGN KEY FK_B10AC28E30D07CD5');
        $this->addSql('DROP INDEX IDX_B10AC28EDBF11E1D ON se_users');
        $this->addSql('DROP INDEX IDX_B10AC28E30D07CD5 ON se_users');
        $this->addSql('ALTER TABLE se_users DROP created, DROP changed, DROP idUsersCreator, DROP idUsersChanger');
    }
}
