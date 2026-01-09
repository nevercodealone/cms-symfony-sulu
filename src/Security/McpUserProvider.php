<?php

declare(strict_types=1);

namespace App\Security;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

/**
 * @implements UserProviderInterface<McpUser>
 */
class McpUserProvider implements UserProviderInterface
{
    public function refreshUser(UserInterface $user): McpUser
    {
        if (!$user instanceof McpUser) {
            throw new \InvalidArgumentException('Invalid user type');
        }

        return $user;
    }

    public function supportsClass(string $class): bool
    {
        return McpUser::class === $class;
    }

    public function loadUserByIdentifier(string $identifier): UserInterface
    {
        return new McpUser($identifier);
    }
}
