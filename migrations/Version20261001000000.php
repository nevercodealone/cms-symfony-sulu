<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20261001000000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Drop chatbot logging table app_chat_messages';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('DROP TABLE IF EXISTS app_chat_messages');
    }

    public function down(Schema $schema): void
    {
        $this->throwIrreversibleException('The app_chat_messages table with all chat logs cannot be restored.');
    }
}
