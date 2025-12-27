<?php

declare(strict_types=1);

namespace App\Security;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

/**
 * @implements UserProviderInterface<Auth0User>
 */
class Auth0UserProvider implements UserProviderInterface
{
    public function refreshUser(UserInterface $user): Auth0User
    {
        if (!$user instanceof Auth0User) {
            throw new \InvalidArgumentException('Invalid user type');
        }

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
