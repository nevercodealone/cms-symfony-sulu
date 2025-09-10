<?php

declare(strict_types=1);

namespace App\Controller\Website;

use App\Chat\Chat;
use App\Entity\ChatMessage;
use App\Repository\ChatMessageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ChatApiController extends AbstractController
{
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
            return new JsonResponse([
                'error' => 'Failed to process message',
                'details' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Route('/api/chat/reset', name: 'app_chat_reset', methods: ['POST'])]
    public function resetChat(Chat $chat): JsonResponse
    {
        $chat->reset();
        return new JsonResponse(['success' => true]);
    }
    
    /**
     * Get the user's IP address, considering proxy headers
     */
    private function getUserIp(Request $request): string
    {
        // Check for forwarded IP addresses (when behind a proxy/load balancer)
        $forwardedFor = $request->headers->get('X-Forwarded-For');
        if ($forwardedFor) {
            // X-Forwarded-For can contain multiple IPs, get the first one
            $ips = explode(',', $forwardedFor);
            return trim($ips[0]);
        }
        
        // Check for real IP header (common with nginx)
        $realIp = $request->headers->get('X-Real-Ip');
        if ($realIp) {
            return $realIp;
        }
        
        // Fall back to client IP
        return $request->getClientIp() ?? '0.0.0.0';
    }
}