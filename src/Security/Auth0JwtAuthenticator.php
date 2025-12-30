<?php

declare(strict_types=1);

namespace App\Security;

use Auth0\SDK\Auth0;
use Auth0\SDK\Configuration\SdkConfiguration;
use Auth0\SDK\Exception\InvalidTokenException;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class Auth0JwtAuthenticator extends AbstractAuthenticator
{
    /** @var array<string> */
    private array $allowedEmails;

    public function __construct(
        #[Autowire('%env(AUTH0_DOMAIN)%')]
        private readonly string $auth0Domain,
        #[Autowire('%env(AUTH0_AUDIENCE)%')]
        private readonly string $audience,
        #[Autowire('%env(MCP_ALLOWED_EMAILS)%')]
        string $allowedEmailsEnv,
    ) {
        $this->allowedEmails = array_filter(array_map('trim', explode(',', $allowedEmailsEnv)));
    }

    public function supports(Request $request): ?bool
    {
        // OPTIONS requests are for CORS preflight - skip auth
        if ($request->isMethod('OPTIONS')) {
            return false;
        }

        $path = $request->getPathInfo();

        if (str_starts_with($path, '/.well-known/')) {
            return false;
        }

        return str_starts_with($path, '/mcp');
    }

    public function authenticate(Request $request): Passport
    {
        $authHeader = $request->headers->get('Authorization');

        if (!$authHeader || !str_starts_with($authHeader, 'Bearer ')) {
            throw new AuthenticationException('Kein Authorization Header');
        }

        $token = substr($authHeader, 7);

        try {
            $decoded = $this->validateToken($token);

            $email = $decoded['email'] ?? null;

            if (!$email) {
                throw new AuthenticationException('Token enthält keine Email');
            }

            if (!in_array(strtolower($email), array_map('strtolower', $this->allowedEmails))) {
                error_log("MCP Zugriff verweigert für: {$email}");
                throw new AuthenticationException('Zugriff verweigert: User nicht autorisiert');
            }

            return new SelfValidatingPassport(
                new UserBadge($email, fn () => new Auth0User($email, (object) $decoded))
            );
        } catch (AuthenticationException $e) {
            throw $e;
        } catch (\Exception $e) {
            throw new AuthenticationException('Token ungültig: ' . $e->getMessage());
        }
    }

    /**
     * @return array<string, mixed>
     */
    private function validateToken(string $token): array
    {
        $config = new SdkConfiguration(
            strategy: SdkConfiguration::STRATEGY_API,
            domain: $this->auth0Domain,
            audience: [$this->audience]
        );

        $auth0 = new Auth0($config);

        try {
            $decoded = $auth0->decode($token);
            return $decoded->toArray();
        } catch (InvalidTokenException $e) {
            throw new \Exception('Token ungültig: ' . $e->getMessage());
        }
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return null;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        return new JsonResponse([
            'error' => 'Zugriff verweigert',
            'message' => $exception->getMessage(),
        ], Response::HTTP_UNAUTHORIZED);
    }
}
