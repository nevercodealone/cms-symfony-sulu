<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\McpAccessToken;
use App\Entity\McpAuthCode;
use App\Repository\McpAccessTokenRepository;
use App\Repository\McpAuthCodeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class McpOAuthService
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private McpAuthCodeRepository $authCodeRepository,
        private McpAccessTokenRepository $accessTokenRepository,
        #[Autowire('%env(MCP_PROJECT_PASSWORD)%')]
        private string $projectPassword,
        #[Autowire('%env(int:MCP_TOKEN_LIFETIME)%')]
        private int $tokenLifetime = 2592000,
        #[Autowire('%env(int:MCP_CODE_LIFETIME)%')]
        private int $codeLifetime = 600,
    ) {
    }

    /**
     * Validate the project password
     */
    public function validatePassword(string $password): bool
    {
        return hash_equals($this->projectPassword, $password);
    }

    /**
     * Create an authorization code with PKCE support
     */
    public function createAuthorizationCode(
        string $clientName,
        string $redirectUri,
        ?string $pkceChallenge,
        string $pkceMethod = 'S256',
        ?string $state = null
    ): McpAuthCode {
        $code = new McpAuthCode();
        $code->setCode(bin2hex(random_bytes(32)));
        $code->setClientName($clientName);
        $code->setRedirectUri($redirectUri);
        $code->setPkceChallenge($pkceChallenge);
        $code->setPkceMethod($pkceMethod);
        $code->setState($state);
        $code->setExpiresAt(new \DateTimeImmutable("+{$this->codeLifetime} seconds"));

        $this->entityManager->persist($code);
        $this->entityManager->flush();

        return $code;
    }

    /**
     * Exchange authorization code for access token
     */
    public function exchangeCodeForToken(
        string $code,
        string $codeVerifier,
        string $redirectUri,
        ?string $clientIp = null
    ): ?McpAccessToken {
        $authCode = $this->authCodeRepository->findValidCode($code);

        if (!$authCode) {
            return null;
        }

        // Verify redirect URI matches
        if ($authCode->getRedirectUri() !== $redirectUri) {
            return null;
        }

        // Verify PKCE
        if (!$this->verifyPkce($authCode, $codeVerifier)) {
            return null;
        }

        // Create access token
        $accessToken = new McpAccessToken();
        $accessToken->setToken(bin2hex(random_bytes(32)));
        $accessToken->setClientName($authCode->getClientName());
        $accessToken->setExpiresAt(new \DateTimeImmutable("+{$this->tokenLifetime} seconds"));
        $accessToken->setCreatedIp($clientIp);

        // Delete used auth code
        $this->entityManager->remove($authCode);
        $this->entityManager->persist($accessToken);
        $this->entityManager->flush();

        return $accessToken;
    }

    /**
     * Verify PKCE code challenge
     */
    private function verifyPkce(McpAuthCode $authCode, string $codeVerifier): bool
    {
        $challenge = $authCode->getPkceChallenge();

        // No PKCE required if no challenge was provided
        if ($challenge === null || $challenge === '') {
            return true;
        }

        if ($authCode->getPkceMethod() === 'S256') {
            // S256: BASE64URL(SHA256(code_verifier))
            $computed = rtrim(strtr(base64_encode(hash('sha256', $codeVerifier, true)), '+/', '-_'), '=');
            return hash_equals($challenge, $computed);
        }

        // Plain method (not recommended but supported for compatibility)
        return hash_equals($challenge, $codeVerifier);
    }

    /**
     * Validate an access token
     */
    public function validateToken(string $token): ?McpAccessToken
    {
        return $this->accessTokenRepository->findValidToken($token);
    }

    /**
     * Update token usage tracking
     */
    public function updateTokenUsage(McpAccessToken $token, ?string $clientIp = null): void
    {
        $token->setLastUsedAt(new \DateTimeImmutable());
        $token->setLastUsedIp($clientIp);
        $this->entityManager->flush();
    }

    /**
     * Clean up expired tokens and codes
     */
    public function cleanupExpiredTokens(): int
    {
        $count = 0;
        $count += $this->authCodeRepository->deleteExpired();
        $count += $this->accessTokenRepository->deleteExpired();
        return $count;
    }

    /**
     * Revoke a specific access token
     */
    public function revokeToken(string $token): bool
    {
        $accessToken = $this->accessTokenRepository->findOneBy(['token' => $token]);

        if (!$accessToken) {
            return false;
        }

        $this->entityManager->remove($accessToken);
        $this->entityManager->flush();
        return true;
    }
}
