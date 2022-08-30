<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220825203526 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ca_category_translation_keywords DROP FOREIGN KEY FK_D15FBE3717CA14DA');
        $this->addSql('ALTER TABLE ca_category_translation_keywords DROP FOREIGN KEY FK_D15FBE37F9FC9F05');
        $this->addSql('ALTER TABLE ca_category_translation_keywords ADD CONSTRAINT FK_D15FBE3717CA14DA FOREIGN KEY (idCategoryTranslations) REFERENCES ca_category_translations (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE ca_category_translation_keywords ADD CONSTRAINT FK_D15FBE37F9FC9F05 FOREIGN KEY (idKeywords) REFERENCES ca_keywords (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_accounts DROP FOREIGN KEY FK_805CD14AC9171171');
        $this->addSql('ALTER TABLE co_accounts ADD CONSTRAINT FK_805CD14AC9171171 FOREIGN KEY (idAccountsParent) REFERENCES co_accounts (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE co_account_urls DROP FOREIGN KEY FK_ADF183825969693F');
        $this->addSql('ALTER TABLE co_account_urls DROP FOREIGN KEY FK_ADF18382996BB4F7');
        $this->addSql('ALTER TABLE co_account_urls ADD CONSTRAINT FK_ADF183825969693F FOREIGN KEY (idUrls) REFERENCES co_urls (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_urls ADD CONSTRAINT FK_ADF18382996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_phones DROP FOREIGN KEY FK_918DA9648039866F');
        $this->addSql('ALTER TABLE co_account_phones DROP FOREIGN KEY FK_918DA964996BB4F7');
        $this->addSql('ALTER TABLE co_account_phones ADD CONSTRAINT FK_918DA9648039866F FOREIGN KEY (idPhones) REFERENCES co_phones (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_phones ADD CONSTRAINT FK_918DA964996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_emails DROP FOREIGN KEY FK_3E246FC32F9040C8');
        $this->addSql('ALTER TABLE co_account_emails DROP FOREIGN KEY FK_3E246FC3996BB4F7');
        $this->addSql('ALTER TABLE co_account_emails ADD CONSTRAINT FK_3E246FC32F9040C8 FOREIGN KEY (idEmails) REFERENCES co_emails (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_emails ADD CONSTRAINT FK_3E246FC3996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_notes DROP FOREIGN KEY FK_A3FBB24A16DFE591');
        $this->addSql('ALTER TABLE co_account_notes DROP FOREIGN KEY FK_A3FBB24A996BB4F7');
        $this->addSql('ALTER TABLE co_account_notes ADD CONSTRAINT FK_A3FBB24A16DFE591 FOREIGN KEY (idNotes) REFERENCES co_notes (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_notes ADD CONSTRAINT FK_A3FBB24A996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_faxes DROP FOREIGN KEY FK_7A4E77DC996BB4F7');
        $this->addSql('ALTER TABLE co_account_faxes DROP FOREIGN KEY FK_7A4E77DCCF6A2007');
        $this->addSql('ALTER TABLE co_account_faxes ADD CONSTRAINT FK_7A4E77DC996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_faxes ADD CONSTRAINT FK_7A4E77DCCF6A2007 FOREIGN KEY (idFaxes) REFERENCES co_faxes (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_social_media_profiles DROP FOREIGN KEY FK_E06F75F5573F8344');
        $this->addSql('ALTER TABLE co_account_social_media_profiles DROP FOREIGN KEY FK_E06F75F5996BB4F7');
        $this->addSql('ALTER TABLE co_account_social_media_profiles ADD CONSTRAINT FK_E06F75F5573F8344 FOREIGN KEY (idSocialMediaProfiles) REFERENCES co_social_media_profiles (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_social_media_profiles ADD CONSTRAINT FK_E06F75F5996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_bank_accounts DROP FOREIGN KEY FK_C873A53237FCD1D8');
        $this->addSql('ALTER TABLE co_account_bank_accounts DROP FOREIGN KEY FK_C873A532996BB4F7');
        $this->addSql('ALTER TABLE co_account_bank_accounts ADD CONSTRAINT FK_C873A53237FCD1D8 FOREIGN KEY (idBankAccounts) REFERENCES co_bank_account (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_bank_accounts ADD CONSTRAINT FK_C873A532996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_tags DROP FOREIGN KEY FK_E8D920051C41CAB8');
        $this->addSql('ALTER TABLE co_account_tags DROP FOREIGN KEY FK_E8D92005996BB4F7');
        $this->addSql('ALTER TABLE co_account_tags ADD CONSTRAINT FK_E8D920051C41CAB8 FOREIGN KEY (idTags) REFERENCES ta_tags (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_account_tags ADD CONSTRAINT FK_E8D92005996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_urls DROP FOREIGN KEY FK_99D86D75969693F');
        $this->addSql('ALTER TABLE co_contact_urls DROP FOREIGN KEY FK_99D86D760E33F28');
        $this->addSql('ALTER TABLE co_contact_urls ADD CONSTRAINT FK_99D86D75969693F FOREIGN KEY (idUrls) REFERENCES co_urls (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_urls ADD CONSTRAINT FK_99D86D760E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_notes DROP FOREIGN KEY FK_B85E7B3416DFE591');
        $this->addSql('ALTER TABLE co_contact_notes DROP FOREIGN KEY FK_B85E7B3460E33F28');
        $this->addSql('ALTER TABLE co_contact_notes ADD CONSTRAINT FK_B85E7B3416DFE591 FOREIGN KEY (idNotes) REFERENCES co_notes (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_notes ADD CONSTRAINT FK_B85E7B3460E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_emails DROP FOREIGN KEY FK_898296312F9040C8');
        $this->addSql('ALTER TABLE co_contact_emails DROP FOREIGN KEY FK_8982963160E33F28');
        $this->addSql('ALTER TABLE co_contact_emails ADD CONSTRAINT FK_898296312F9040C8 FOREIGN KEY (idEmails) REFERENCES co_emails (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_emails ADD CONSTRAINT FK_8982963160E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_phones DROP FOREIGN KEY FK_262B509660E33F28');
        $this->addSql('ALTER TABLE co_contact_phones DROP FOREIGN KEY FK_262B50968039866F');
        $this->addSql('ALTER TABLE co_contact_phones ADD CONSTRAINT FK_262B509660E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_phones ADD CONSTRAINT FK_262B50968039866F FOREIGN KEY (idPhones) REFERENCES co_phones (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_faxes DROP FOREIGN KEY FK_61EBBEA260E33F28');
        $this->addSql('ALTER TABLE co_contact_faxes DROP FOREIGN KEY FK_61EBBEA2CF6A2007');
        $this->addSql('ALTER TABLE co_contact_faxes ADD CONSTRAINT FK_61EBBEA260E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_faxes ADD CONSTRAINT FK_61EBBEA2CF6A2007 FOREIGN KEY (idFaxes) REFERENCES co_faxes (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_social_media_profiles DROP FOREIGN KEY FK_74FF4CC0573F8344');
        $this->addSql('ALTER TABLE co_contact_social_media_profiles DROP FOREIGN KEY FK_74FF4CC060E33F28');
        $this->addSql('ALTER TABLE co_contact_social_media_profiles ADD CONSTRAINT FK_74FF4CC0573F8344 FOREIGN KEY (idSocialMediaProfiles) REFERENCES co_social_media_profiles (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_social_media_profiles ADD CONSTRAINT FK_74FF4CC060E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_bank_accounts DROP FOREIGN KEY FK_76CDDA0637FCD1D8');
        $this->addSql('ALTER TABLE co_contact_bank_accounts DROP FOREIGN KEY FK_76CDDA0660E33F28');
        $this->addSql('ALTER TABLE co_contact_bank_accounts ADD CONSTRAINT FK_76CDDA0637FCD1D8 FOREIGN KEY (idBankAccounts) REFERENCES co_bank_account (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_bank_accounts ADD CONSTRAINT FK_76CDDA0660E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_tags DROP FOREIGN KEY FK_4CB525501C41CAB8');
        $this->addSql('ALTER TABLE co_contact_tags DROP FOREIGN KEY FK_4CB5255060E33F28');
        $this->addSql('ALTER TABLE co_contact_tags ADD CONSTRAINT FK_4CB525501C41CAB8 FOREIGN KEY (idTags) REFERENCES ta_tags (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE co_contact_tags ADD CONSTRAINT FK_4CB5255060E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE se_access_controls ADD entityIdInteger INT DEFAULT NULL');
        $this->addSql('CREATE INDEX IDX_C526DC524473BB7A ON se_access_controls (entityIdInteger)');
        $this->addSql('ALTER TABLE se_group_roles DROP FOREIGN KEY FK_9713F725937C91EA');
        $this->addSql('ALTER TABLE se_group_roles DROP FOREIGN KEY FK_9713F725A1FA6DDA');
        $this->addSql('ALTER TABLE se_group_roles ADD CONSTRAINT FK_9713F725937C91EA FOREIGN KEY (idGroups) REFERENCES se_groups (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE se_group_roles ADD CONSTRAINT FK_9713F725A1FA6DDA FOREIGN KEY (idRoles) REFERENCES se_roles (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE se_role_settings CHANGE value value LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE we_analytics CHANGE content content LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE we_analytics_domains DROP FOREIGN KEY FK_F9323B6EA7A91E0B');
        $this->addSql('ALTER TABLE we_analytics_domains DROP FOREIGN KEY FK_F9323B6EEAC2E688');
        $this->addSql('ALTER TABLE we_analytics_domains ADD CONSTRAINT FK_F9323B6EA7A91E0B FOREIGN KEY (domain) REFERENCES we_domains (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE we_analytics_domains ADD CONSTRAINT FK_F9323B6EEAC2E688 FOREIGN KEY (analytics) REFERENCES we_analytics (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ca_category_translation_keywords DROP FOREIGN KEY FK_D15FBE37F9FC9F05');
        $this->addSql('ALTER TABLE ca_category_translation_keywords DROP FOREIGN KEY FK_D15FBE3717CA14DA');
        $this->addSql('ALTER TABLE ca_category_translation_keywords ADD CONSTRAINT FK_D15FBE37F9FC9F05 FOREIGN KEY (idKeywords) REFERENCES ca_keywords (id)');
        $this->addSql('ALTER TABLE ca_category_translation_keywords ADD CONSTRAINT FK_D15FBE3717CA14DA FOREIGN KEY (idCategoryTranslations) REFERENCES ca_category_translations (id)');
        $this->addSql('ALTER TABLE co_account_bank_accounts DROP FOREIGN KEY FK_C873A532996BB4F7');
        $this->addSql('ALTER TABLE co_account_bank_accounts DROP FOREIGN KEY FK_C873A53237FCD1D8');
        $this->addSql('ALTER TABLE co_account_bank_accounts ADD CONSTRAINT FK_C873A532996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id)');
        $this->addSql('ALTER TABLE co_account_bank_accounts ADD CONSTRAINT FK_C873A53237FCD1D8 FOREIGN KEY (idBankAccounts) REFERENCES co_bank_account (id)');
        $this->addSql('ALTER TABLE co_account_emails DROP FOREIGN KEY FK_3E246FC3996BB4F7');
        $this->addSql('ALTER TABLE co_account_emails DROP FOREIGN KEY FK_3E246FC32F9040C8');
        $this->addSql('ALTER TABLE co_account_emails ADD CONSTRAINT FK_3E246FC3996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id)');
        $this->addSql('ALTER TABLE co_account_emails ADD CONSTRAINT FK_3E246FC32F9040C8 FOREIGN KEY (idEmails) REFERENCES co_emails (id)');
        $this->addSql('ALTER TABLE co_account_faxes DROP FOREIGN KEY FK_7A4E77DC996BB4F7');
        $this->addSql('ALTER TABLE co_account_faxes DROP FOREIGN KEY FK_7A4E77DCCF6A2007');
        $this->addSql('ALTER TABLE co_account_faxes ADD CONSTRAINT FK_7A4E77DC996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id)');
        $this->addSql('ALTER TABLE co_account_faxes ADD CONSTRAINT FK_7A4E77DCCF6A2007 FOREIGN KEY (idFaxes) REFERENCES co_faxes (id)');
        $this->addSql('ALTER TABLE co_account_notes DROP FOREIGN KEY FK_A3FBB24A996BB4F7');
        $this->addSql('ALTER TABLE co_account_notes DROP FOREIGN KEY FK_A3FBB24A16DFE591');
        $this->addSql('ALTER TABLE co_account_notes ADD CONSTRAINT FK_A3FBB24A996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id)');
        $this->addSql('ALTER TABLE co_account_notes ADD CONSTRAINT FK_A3FBB24A16DFE591 FOREIGN KEY (idNotes) REFERENCES co_notes (id)');
        $this->addSql('ALTER TABLE co_account_phones DROP FOREIGN KEY FK_918DA964996BB4F7');
        $this->addSql('ALTER TABLE co_account_phones DROP FOREIGN KEY FK_918DA9648039866F');
        $this->addSql('ALTER TABLE co_account_phones ADD CONSTRAINT FK_918DA964996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id)');
        $this->addSql('ALTER TABLE co_account_phones ADD CONSTRAINT FK_918DA9648039866F FOREIGN KEY (idPhones) REFERENCES co_phones (id)');
        $this->addSql('ALTER TABLE co_account_social_media_profiles DROP FOREIGN KEY FK_E06F75F5996BB4F7');
        $this->addSql('ALTER TABLE co_account_social_media_profiles DROP FOREIGN KEY FK_E06F75F5573F8344');
        $this->addSql('ALTER TABLE co_account_social_media_profiles ADD CONSTRAINT FK_E06F75F5996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id)');
        $this->addSql('ALTER TABLE co_account_social_media_profiles ADD CONSTRAINT FK_E06F75F5573F8344 FOREIGN KEY (idSocialMediaProfiles) REFERENCES co_social_media_profiles (id)');
        $this->addSql('ALTER TABLE co_account_tags DROP FOREIGN KEY FK_E8D92005996BB4F7');
        $this->addSql('ALTER TABLE co_account_tags DROP FOREIGN KEY FK_E8D920051C41CAB8');
        $this->addSql('ALTER TABLE co_account_tags ADD CONSTRAINT FK_E8D92005996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id)');
        $this->addSql('ALTER TABLE co_account_tags ADD CONSTRAINT FK_E8D920051C41CAB8 FOREIGN KEY (idTags) REFERENCES ta_tags (id)');
        $this->addSql('ALTER TABLE co_account_urls DROP FOREIGN KEY FK_ADF18382996BB4F7');
        $this->addSql('ALTER TABLE co_account_urls DROP FOREIGN KEY FK_ADF183825969693F');
        $this->addSql('ALTER TABLE co_account_urls ADD CONSTRAINT FK_ADF18382996BB4F7 FOREIGN KEY (idAccounts) REFERENCES co_accounts (id)');
        $this->addSql('ALTER TABLE co_account_urls ADD CONSTRAINT FK_ADF183825969693F FOREIGN KEY (idUrls) REFERENCES co_urls (id)');
        $this->addSql('ALTER TABLE co_accounts DROP FOREIGN KEY FK_805CD14AC9171171');
        $this->addSql('ALTER TABLE co_accounts ADD CONSTRAINT FK_805CD14AC9171171 FOREIGN KEY (idAccountsParent) REFERENCES co_accounts (id)');
        $this->addSql('ALTER TABLE co_contact_bank_accounts DROP FOREIGN KEY FK_76CDDA0660E33F28');
        $this->addSql('ALTER TABLE co_contact_bank_accounts DROP FOREIGN KEY FK_76CDDA0637FCD1D8');
        $this->addSql('ALTER TABLE co_contact_bank_accounts ADD CONSTRAINT FK_76CDDA0660E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id)');
        $this->addSql('ALTER TABLE co_contact_bank_accounts ADD CONSTRAINT FK_76CDDA0637FCD1D8 FOREIGN KEY (idBankAccounts) REFERENCES co_bank_account (id)');
        $this->addSql('ALTER TABLE co_contact_emails DROP FOREIGN KEY FK_8982963160E33F28');
        $this->addSql('ALTER TABLE co_contact_emails DROP FOREIGN KEY FK_898296312F9040C8');
        $this->addSql('ALTER TABLE co_contact_emails ADD CONSTRAINT FK_8982963160E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id)');
        $this->addSql('ALTER TABLE co_contact_emails ADD CONSTRAINT FK_898296312F9040C8 FOREIGN KEY (idEmails) REFERENCES co_emails (id)');
        $this->addSql('ALTER TABLE co_contact_faxes DROP FOREIGN KEY FK_61EBBEA260E33F28');
        $this->addSql('ALTER TABLE co_contact_faxes DROP FOREIGN KEY FK_61EBBEA2CF6A2007');
        $this->addSql('ALTER TABLE co_contact_faxes ADD CONSTRAINT FK_61EBBEA260E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id)');
        $this->addSql('ALTER TABLE co_contact_faxes ADD CONSTRAINT FK_61EBBEA2CF6A2007 FOREIGN KEY (idFaxes) REFERENCES co_faxes (id)');
        $this->addSql('ALTER TABLE co_contact_notes DROP FOREIGN KEY FK_B85E7B3460E33F28');
        $this->addSql('ALTER TABLE co_contact_notes DROP FOREIGN KEY FK_B85E7B3416DFE591');
        $this->addSql('ALTER TABLE co_contact_notes ADD CONSTRAINT FK_B85E7B3460E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id)');
        $this->addSql('ALTER TABLE co_contact_notes ADD CONSTRAINT FK_B85E7B3416DFE591 FOREIGN KEY (idNotes) REFERENCES co_notes (id)');
        $this->addSql('ALTER TABLE co_contact_phones DROP FOREIGN KEY FK_262B509660E33F28');
        $this->addSql('ALTER TABLE co_contact_phones DROP FOREIGN KEY FK_262B50968039866F');
        $this->addSql('ALTER TABLE co_contact_phones ADD CONSTRAINT FK_262B509660E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id)');
        $this->addSql('ALTER TABLE co_contact_phones ADD CONSTRAINT FK_262B50968039866F FOREIGN KEY (idPhones) REFERENCES co_phones (id)');
        $this->addSql('ALTER TABLE co_contact_social_media_profiles DROP FOREIGN KEY FK_74FF4CC060E33F28');
        $this->addSql('ALTER TABLE co_contact_social_media_profiles DROP FOREIGN KEY FK_74FF4CC0573F8344');
        $this->addSql('ALTER TABLE co_contact_social_media_profiles ADD CONSTRAINT FK_74FF4CC060E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id)');
        $this->addSql('ALTER TABLE co_contact_social_media_profiles ADD CONSTRAINT FK_74FF4CC0573F8344 FOREIGN KEY (idSocialMediaProfiles) REFERENCES co_social_media_profiles (id)');
        $this->addSql('ALTER TABLE co_contact_tags DROP FOREIGN KEY FK_4CB5255060E33F28');
        $this->addSql('ALTER TABLE co_contact_tags DROP FOREIGN KEY FK_4CB525501C41CAB8');
        $this->addSql('ALTER TABLE co_contact_tags ADD CONSTRAINT FK_4CB5255060E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id)');
        $this->addSql('ALTER TABLE co_contact_tags ADD CONSTRAINT FK_4CB525501C41CAB8 FOREIGN KEY (idTags) REFERENCES ta_tags (id)');
        $this->addSql('ALTER TABLE co_contact_urls DROP FOREIGN KEY FK_99D86D760E33F28');
        $this->addSql('ALTER TABLE co_contact_urls DROP FOREIGN KEY FK_99D86D75969693F');
        $this->addSql('ALTER TABLE co_contact_urls ADD CONSTRAINT FK_99D86D760E33F28 FOREIGN KEY (idContacts) REFERENCES co_contacts (id)');
        $this->addSql('ALTER TABLE co_contact_urls ADD CONSTRAINT FK_99D86D75969693F FOREIGN KEY (idUrls) REFERENCES co_urls (id)');
        $this->addSql('DROP INDEX IDX_C526DC524473BB7A ON se_access_controls');
        $this->addSql('ALTER TABLE se_access_controls DROP entityIdInteger');
        $this->addSql('ALTER TABLE se_group_roles DROP FOREIGN KEY FK_9713F725937C91EA');
        $this->addSql('ALTER TABLE se_group_roles DROP FOREIGN KEY FK_9713F725A1FA6DDA');
        $this->addSql('ALTER TABLE se_group_roles ADD CONSTRAINT FK_9713F725937C91EA FOREIGN KEY (idGroups) REFERENCES se_groups (id)');
        $this->addSql('ALTER TABLE se_group_roles ADD CONSTRAINT FK_9713F725A1FA6DDA FOREIGN KEY (idRoles) REFERENCES se_roles (id)');
        $this->addSql('ALTER TABLE se_role_settings CHANGE value value LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE we_analytics CHANGE content content LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:json_array)\'');
        $this->addSql('ALTER TABLE we_analytics_domains DROP FOREIGN KEY FK_F9323B6EEAC2E688');
        $this->addSql('ALTER TABLE we_analytics_domains DROP FOREIGN KEY FK_F9323B6EA7A91E0B');
        $this->addSql('ALTER TABLE we_analytics_domains ADD CONSTRAINT FK_F9323B6EEAC2E688 FOREIGN KEY (analytics) REFERENCES we_analytics (id)');
        $this->addSql('ALTER TABLE we_analytics_domains ADD CONSTRAINT FK_F9323B6EA7A91E0B FOREIGN KEY (domain) REFERENCES we_domains (id)');
    }
}
