<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250517143438 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE re_references (id INT AUTO_INCREMENT NOT NULL, resourceKey VARCHAR(191) NOT NULL, resourceId VARCHAR(191) NOT NULL, referenceResourceKey VARCHAR(191) NOT NULL, referenceResourceId VARCHAR(191) NOT NULL, referenceLocale VARCHAR(5) DEFAULT NULL, referenceRouterAttributes LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', referenceTitle VARCHAR(191) NOT NULL, referenceProperty VARCHAR(191) NOT NULL, referenceContext VARCHAR(16) NOT NULL, created DATETIME NOT NULL, changed DATETIME NOT NULL, INDEX resource_idx (resourceKey, resourceId), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE re_references');
    }
}
