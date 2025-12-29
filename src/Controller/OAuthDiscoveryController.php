<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class OAuthDiscoveryController extends AbstractController
{
    #[Route('/.well-known/oauth-protected-resource', name: 'oauth_protected_resource', methods: ['GET'])]
    public function protectedResource(): JsonResponse
    {
        $auth0Domain = $_ENV['AUTH0_DOMAIN'] ?? '';
        $baseUrl = $_ENV['APP_URL'] ?? 'https://nevercodealone.projects.nevercodealone.de';

        return new JsonResponse([
            'resource' => rtrim($baseUrl, '/') . '/mcp',
            'authorization_servers' => [
                "https://{$auth0Domain}/",
            ],
            'scopes_supported' => ['openid', 'profile', 'email'],
            'bearer_methods_supported' => ['header'],
        ]);
    }
}
