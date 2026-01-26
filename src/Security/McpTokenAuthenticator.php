<?php

declare(strict_types=1);

namespace App\Security;

use App\Service\McpOAuthService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class McpTokenAuthenticator extends AbstractAuthenticator
{
    public function __construct(
        private McpOAuthService $oauthService
    ) {
    }

    public function supports(Request $request): ?bool
    {
        // Skip OPTIONS requests (CORS preflight)
        if ($request->isMethod('OPTIONS')) {
            return false;
        }

        $path = $request->getPathInfo();

        // Skip well-known endpoints
        if (str_starts_with($path, '/.well-known/')) {
            return false;
        }

        // Skip OAuth endpoints (canonical and fallback paths)
        if (str_starts_with($path, '/oauth/')) {
            return false;
        }
        if ($path === '/authorize' || $path === '/token') {
            return false;
        }

        // Only handle /mcp routes
        return str_starts_with($path, '/mcp');
    }

    public function authenticate(Request $request): Passport
    {
        $authHeader = $request->headers->get('Authorization');

        if (!$authHeader || !str_starts_with($authHeader, 'Bearer ')) {
            throw new AuthenticationException('No bearer token provided');
        }

        $token = substr($authHeader, 7);

        $accessToken = $this->oauthService->validateToken($token);

        if (!$accessToken) {
            throw new AuthenticationException('Invalid or expired token');
        }

        // Update usage tracking
        $this->oauthService->updateTokenUsage($accessToken, $request->getClientIp());

        $userIdentifier = 'mcp:' . ($accessToken->getClientName() ?? 'anonymous');

        return new SelfValidatingPassport(
            new UserBadge($userIdentifier, fn () => new McpUser($userIdentifier, $accessToken->getClientName()))
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        // Let the request continue
        return null;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        return new JsonResponse([
            'error' => 'unauthorized',
            'message' => $exception->getMessage(),
        ], Response::HTTP_UNAUTHORIZED);
    }
}
