<?php

declare(strict_types=1);

namespace App\Security;

use Symfony\Component\Security\Core\User\UserInterface;

class Auth0User implements UserInterface
{
    public function __construct(
        private string $email,
        private object $claims
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
        return $this->email;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getName(): ?string
    {
        return $this->claims->name ?? null;
    }
}
