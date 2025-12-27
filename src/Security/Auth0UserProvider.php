<?php

declare(strict_types=1);

namespace App\Security;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

class Auth0UserProvider implements UserProviderInterface
{
    public function refreshUser(UserInterface $user): UserInterface
    {
        return $user;
    }

    public function supportsClass(string $class): bool
    {
        return Auth0User::class === $class;
    }

    public function loadUserByIdentifier(string $identifier): UserInterface
    {
        throw new \Exception('Nicht implementiert');
    }
}
