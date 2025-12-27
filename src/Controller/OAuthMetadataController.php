<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class OAuthMetadataController extends AbstractController
{
    #[Route('/.well-known/oauth-authorization-server', name: 'oauth_metadata', methods: ['GET'])]
    public function __invoke(): JsonResponse
    {
        $baseUrl = 'https://nevercodealone.de';

        return new JsonResponse([
            'issuer' => $baseUrl,
            'authorization_endpoint' => $baseUrl . '/oauth/authorize',
            'token_endpoint' => $baseUrl . '/oauth/token',
            'response_types_supported' => ['code'],
            'grant_types_supported' => ['authorization_code', 'client_credentials'],
            'token_endpoint_auth_methods_supported' => ['client_secret_post', 'client_secret_basic'],
            'scopes_supported' => ['mcp:read', 'mcp:write', 'mcp:publish'],
        ]);
    }
}
