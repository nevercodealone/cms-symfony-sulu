<?php

declare(strict_types=1);

namespace App\Controller\Website;

use App\Chat\Chat;
use App\Entity\ChatMessage;
use App\Repository\ChatMessageRepository;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ChatApiController extends AbstractController
{
    public function __construct(
        private readonly LoggerInterface $logger,
    ) {
    }

    #[Route('/api/chat/submit', name: 'app_chat_submit', methods: ['POST'])]
    public function submitMessage(
        Request $request, 
        Chat $chat,
        ChatMessageRepository $chatMessageRepository
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);
        $message = $data['message'] ?? '';
        
        if (empty($message)) {
            return new JsonResponse(['error' => 'Message is required'], 400);
        }
        
        // Get user IP address
        $userIp = $this->getUserIp($request);
        $sessionId = $request->getSession()->getId();
        $locale = $request->getLocale();
        
        // Check rate limiting (5 messages per 24 hours)
        $messageCount = $chatMessageRepository->countMessagesFromIpInLast24Hours($userIp);
        if ($messageCount >= 5) {
            return new JsonResponse([
                'success' => true,
                'response' => 'Ich muß jetzt leider etwas schlafen komm morgen wieder. Danke.'
            ]);
        }
        
        // Track response time
        $startTime = microtime(true);
        
        try {
            $chat->submitMessage($message);
            $messages = $chat->loadMessages()->withoutSystemMessage()->getMessages();
            
            // Get the last assistant message
            $lastMessage = end($messages);
            $responseContent = $lastMessage->content;
            
            // Check if response contains a video link
            $hasVideoLink = str_contains($responseContent, 'youtube.com') || 
                           str_contains($responseContent, 'youtu.be') ||
                           str_contains($responseContent, 'Video:') ||
                           str_contains($responseContent, 'video');
            
            // If no video found in response, append message
            if (!$hasVideoLink && !str_contains($responseContent, 'kein Video')) {
                $responseContent .= "\n\nDazu habe ich leider kein Video gefunden.";
            }
            
            // Calculate response time in milliseconds
            $responseTime = (int)((microtime(true) - $startTime) * 1000);
            
            // Save to database
            $chatMessage = new ChatMessage();
            $chatMessage->setUserIp($userIp);
            $chatMessage->setSessionId($sessionId);
            $chatMessage->setQuestion($message);
            $chatMessage->setAnswer($responseContent);
            $chatMessage->setResponseTime($responseTime);
            $chatMessage->setLocale($locale);
            
            $chatMessageRepository->save($chatMessage, true);
            
            return new JsonResponse([
                'success' => true,
                'response' => $responseContent,
            ]);
        } catch (\Exception $e) {
            $errorRef = uniqid('chat_err_');
            $this->logger->error('Chat API error', [
                'reference' => $errorRef,
                'exception' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_ip' => $userIp,
            ]);

            return new JsonResponse([
                'error' => 'Failed to process message',
                'reference' => $errorRef,
            ], 500);
        }
    }
    
    #[Route('/api/chat/reset', name: 'app_chat_reset', methods: ['POST'])]
    public function resetChat(Chat $chat): JsonResponse
    {
        $chat->reset();
        return new JsonResponse(['success' => true]);
    }

    #[Route('/api/chat/history', name: 'app_chat_history', methods: ['GET'])]
    public function getChatHistory(
        Request $request,
        ChatMessageRepository $chatMessageRepository
    ): JsonResponse {
        // Get user IP address
        $userIp = $this->getUserIp($request);

        // Get recent chat history for this IP
        $messages = $chatMessageRepository->getRecentHistoryForIp($userIp);

        // Format messages for frontend
        $formattedMessages = [];
        foreach ($messages as $message) {
            $formattedMessages[] = [
                'question' => $message->getQuestion(),
                'answer' => $message->getAnswer(),
                'timestamp' => $message->getCreatedAt()->format('Y-m-d H:i:s')
            ];
        }

        return new JsonResponse([
            'success' => true,
            'messages' => $formattedMessages,
            'count' => count($formattedMessages)
        ]);
    }
    
    /**
     * Get the user's IP address using Symfony's trusted proxy handling.
     *
     * Note: Configure trusted proxies in config/packages/framework.yaml:
     * framework:
     *     trusted_proxies: '%env(TRUSTED_PROXIES)%'
     *     trusted_headers: ['x-forwarded-for', 'x-forwarded-proto']
     */
    private function getUserIp(Request $request): string
    {
        $ip = $request->getClientIp() ?? '0.0.0.0';

        // Validate IP format to prevent spoofing
        if (!filter_var($ip, FILTER_VALIDATE_IP)) {
            return '0.0.0.0';
        }

        return $ip;
    }
}