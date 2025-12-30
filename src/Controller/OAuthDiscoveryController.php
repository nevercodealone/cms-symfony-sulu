<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class OAuthDiscoveryController extends AbstractController
{
    public function __construct(
        #[Autowire('%env(AUTH0_DOMAIN)%')]
        private readonly string $auth0Domain,
        #[Autowire('%env(APP_URL)%')]
        private readonly string $appUrl,
    ) {}

    #[Route('/.well-known/oauth-protected-resource', name: 'oauth_protected_resource', methods: ['GET'])]
    public function protectedResource(): JsonResponse
    {
        return new JsonResponse([
            'resource' => rtrim($this->appUrl, '/') . '/mcp',
            'authorization_servers' => [
                "https://{$this->auth0Domain}/",
            ],
            'scopes_supported' => ['openid', 'profile', 'email'],
            'bearer_methods_supported' => ['header'],
        ]);
    }
}
