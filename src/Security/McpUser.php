<?php

declare(strict_types=1);

namespace App\Security;

use Symfony\Component\Security\Core\User\UserInterface;

class McpUser implements UserInterface
{
    public function __construct(
        private string $identifier,
        private ?string $clientName = null
    ) {
    }

    public function getRoles(): array
    {
        return ['ROLE_USER', 'ROLE_MCP_ACCESS'];
    }

    public function eraseCredentials(): void
    {
    }

    public function getUserIdentifier(): string
    {
        return $this->identifier;
    }

    public function getClientName(): ?string
    {
        return $this->clientName;
    }
}
