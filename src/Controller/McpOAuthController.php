<?php

declare(strict_types=1);

namespace App\Controller;

use App\Service\McpOAuthService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class McpOAuthController extends AbstractController
{
    public function __construct(
        private McpOAuthService $oauthService,
        #[Autowire('%env(MCP_PROJECT_NAME)%')]
        private string $projectName,
        #[Autowire('%env(APP_URL)%')]
        private string $appUrl,
    ) {
    }

    /**
     * OAuth 2.0 Protected Resource Metadata (RFC 9728)
     */
    #[Route('/.well-known/oauth-protected-resource', name: 'mcp_oauth_protected_resource', methods: ['GET'])]
    public function protectedResource(): JsonResponse
    {
        $baseUrl = rtrim($this->appUrl, '/');

        return new JsonResponse([
            'resource' => $baseUrl . '/mcp',
            'authorization_servers' => [
                $baseUrl . '/',
            ],
            'scopes_supported' => ['mcp:access'],
            'bearer_methods_supported' => ['header'],
        ]);
    }

    /**
     * OAuth 2.0 Authorization Server Metadata (RFC 8414)
     */
    #[Route('/.well-known/oauth-authorization-server', name: 'mcp_oauth_auth_server', methods: ['GET'])]
    public function authorizationServerMetadata(): JsonResponse
    {
        $baseUrl = rtrim($this->appUrl, '/');

        return new JsonResponse([
            'issuer' => $baseUrl,
            'authorization_endpoint' => $baseUrl . '/oauth/authorize',
            'token_endpoint' => $baseUrl . '/oauth/token',
            'response_types_supported' => ['code'],
            'grant_types_supported' => ['authorization_code'],
            'code_challenge_methods_supported' => ['S256', 'plain'],
            'token_endpoint_auth_methods_supported' => ['none'],
            'scopes_supported' => ['mcp:access'],
        ]);
    }

    /**
     * Authorization endpoint - shows consent form and issues authorization codes
     */
    #[Route('/oauth/authorize', name: 'mcp_oauth_authorize', methods: ['GET', 'POST'])]
    public function authorize(Request $request): Response
    {
        // Extract OAuth parameters
        $clientId = $request->query->get('client_id', 'claude');
        $redirectUri = $request->query->get('redirect_uri', '');
        $responseType = $request->query->get('response_type', '');
        $codeChallenge = $request->query->get('code_challenge');
        $codeChallengeMethod = $request->query->get('code_challenge_method', 'S256');
        $state = $request->query->get('state');
        $scope = $request->query->get('scope', 'mcp:access');

        // Validate response_type
        if ($responseType !== 'code') {
            return new JsonResponse([
                'error' => 'unsupported_response_type',
                'error_description' => 'Only "code" response type is supported',
            ], Response::HTTP_BAD_REQUEST);
        }

        // Validate redirect_uri
        if (empty($redirectUri)) {
            return new JsonResponse([
                'error' => 'invalid_request',
                'error_description' => 'redirect_uri is required',
            ], Response::HTTP_BAD_REQUEST);
        }

        $error = null;

        if ($request->isMethod('POST')) {
            $password = $request->request->get('password', '');
            $action = $request->request->get('action', '');

            // Handle deny action
            if ($action === 'deny') {
                $params = http_build_query([
                    'error' => 'access_denied',
                    'error_description' => 'User denied access',
                    'state' => $state,
                ]);
                return $this->redirect($redirectUri . '?' . $params);
            }

            // Validate password
            if (!$this->oauthService->validatePassword($password)) {
                $error = 'Invalid project password';
            } else {
                // Create authorization code
                $authCode = $this->oauthService->createAuthorizationCode(
                    $clientId,
                    $redirectUri,
                    $codeChallenge,
                    $codeChallengeMethod,
                    $state
                );

                // Redirect with code
                $params = ['code' => $authCode->getCode()];
                if ($state) {
                    $params['state'] = $state;
                }

                return $this->redirect($redirectUri . '?' . http_build_query($params));
            }
        }

        // Render consent form
        return $this->render('mcp/oauth_consent.html.twig', [
            'project_name' => $this->projectName,
            'client_id' => $clientId,
            'scope' => $scope,
            'redirect_uri' => $redirectUri,
            'code_challenge' => $codeChallenge,
            'code_challenge_method' => $codeChallengeMethod,
            'state' => $state,
            'error' => $error,
        ]);
    }

    /**
     * Token endpoint - exchanges authorization code for access token
     */
    #[Route('/oauth/token', name: 'mcp_oauth_token', methods: ['POST'])]
    public function token(Request $request): JsonResponse
    {
        // Support both form and JSON body
        $contentType = $request->headers->get('Content-Type', '');

        if (str_contains($contentType, 'application/json')) {
            $data = json_decode($request->getContent(), true) ?? [];
            $grantType = $data['grant_type'] ?? '';
            $code = $data['code'] ?? '';
            $codeVerifier = $data['code_verifier'] ?? '';
            $redirectUri = $data['redirect_uri'] ?? '';
        } else {
            $grantType = $request->request->get('grant_type', '');
            $code = $request->request->get('code', '');
            $codeVerifier = $request->request->get('code_verifier', '');
            $redirectUri = $request->request->get('redirect_uri', '');
        }

        // Validate grant type
        if ($grantType !== 'authorization_code') {
            return new JsonResponse([
                'error' => 'unsupported_grant_type',
                'error_description' => 'Only "authorization_code" grant type is supported',
            ], Response::HTTP_BAD_REQUEST);
        }

        // Validate required parameters
        if (empty($code)) {
            return new JsonResponse([
                'error' => 'invalid_request',
                'error_description' => 'code is required',
            ], Response::HTTP_BAD_REQUEST);
        }

        // Exchange code for token
        $accessToken = $this->oauthService->exchangeCodeForToken(
            $code,
            $codeVerifier,
            $redirectUri,
            $request->getClientIp()
        );

        if (!$accessToken) {
            return new JsonResponse([
                'error' => 'invalid_grant',
                'error_description' => 'Invalid or expired authorization code',
            ], Response::HTTP_BAD_REQUEST);
        }

        return new JsonResponse([
            'access_token' => $accessToken->getToken(),
            'token_type' => 'Bearer',
            'expires_in' => $accessToken->getExpiresIn(),
            'scope' => 'mcp:access',
        ]);
    }
}
