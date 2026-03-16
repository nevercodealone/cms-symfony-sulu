<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260316230740 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add blocked_reason column to app_chat_messages';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE app_chat_messages ADD blocked_reason VARCHAR(50) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE app_chat_messages DROP blocked_reason');
    }
}
