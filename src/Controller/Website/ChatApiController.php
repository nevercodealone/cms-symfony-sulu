<?php

declare(strict_types=1);

namespace App\Controller\Website;

use App\Chat\Chat;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ChatApiController extends AbstractController
{
    #[Route('/api/chat/submit', name: 'app_chat_submit', methods: ['POST'])]
    public function submitMessage(Request $request, Chat $chat): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $message = $data['message'] ?? '';
        
        if (empty($message)) {
            return new JsonResponse(['error' => 'Message is required'], 400);
        }
        
        try {
            $chat->submitMessage($message);
            $messages = $chat->loadMessages()->withoutSystemMessage()->getMessages();
            
            // Get the last assistant message
            $lastMessage = end($messages);
            
            return new JsonResponse([
                'success' => true,
                'response' => $lastMessage->content,  // Use property, not method
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
}