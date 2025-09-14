<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Common\DoctrineListRepresentationFactory;
use App\Entity\ChatMessage;
use App\Repository\ChatMessageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sulu\Component\Security\SecuredControllerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @phpstan-type ChatMessageData array{
 *     id: int|null,
 *     userIp: string,
 *     sessionId: string|null,
 *     question: string,
 *     answer: string,
 *     createdAt: string,
 *     responseTime: int|null,
 *     locale: string|null,
 *     inputTokens: int|null,
 *     outputTokens: int|null,
 *     totalTokens: int|null,
 * }
 */
class ChatMessageController extends AbstractController implements SecuredControllerInterface
{
    public function __construct(
        private DoctrineListRepresentationFactory $doctrineListRepresentationFactory,
        private EntityManagerInterface $entityManager,
        private ChatMessageRepository $chatMessageRepository
    ) {
    }

    /**
     * @Route("/admin/api/chat-messages/{id}", methods={"GET"}, name="app.get_chat_message")
     */
    public function getAction(int $id): Response
    {
        $chatMessage = $this->chatMessageRepository->find($id);
        if (!$chatMessage) {
            throw new NotFoundHttpException();
        }

        return $this->json($this->getDataForEntity($chatMessage));
    }

    /**
     * @Route("/admin/api/chat-messages/{id}", methods={"DELETE"}, name="app.delete_chat_message")
     */
    public function deleteAction(int $id): Response
    {
        $chatMessage = $this->entityManager->getReference(ChatMessage::class, $id);
        $this->entityManager->remove($chatMessage);
        $this->entityManager->flush();

        return $this->json(null, 204);
    }

    /**
     * @Route("/admin/api/chat-messages", methods={"GET"}, name="app.get_chat_message_list")
     */
    public function getListAction(Request $request): Response
    {
        $listRepresentation = $this->doctrineListRepresentationFactory->createDoctrineListRepresentation(
            ChatMessage::RESOURCE_KEY,
            [],
            ['createdAt' => 'DESC']
        );

        return $this->json($listRepresentation->toArray());
    }

    /**
     * @Route("/admin/api/chat-messages/statistics", methods={"GET"}, name="app.get_chat_message_statistics")
     */
    public function getStatisticsAction(): Response
    {
        $statistics = $this->chatMessageRepository->getStatistics();
        
        return $this->json($statistics);
    }

    /**
     * @return ChatMessageData
     */
    protected function getDataForEntity(ChatMessage $entity): array
    {
        return [
            'id' => $entity->getId(),
            'userIp' => $entity->getUserIp(),
            'sessionId' => $entity->getSessionId(),
            'question' => $entity->getQuestion(),
            'answer' => $entity->getAnswer(),
            'createdAt' => $entity->getCreatedAt()?->format('Y-m-d H:i:s'),
            'responseTime' => $entity->getResponseTime(),
            'locale' => $entity->getLocale(),
            'inputTokens' => $entity->getInputTokens(),
            'outputTokens' => $entity->getOutputTokens(),
            'totalTokens' => $entity->getTotalTokens(),
        ];
    }

    public function getSecurityContext(): string
    {
        return ChatMessage::SECURITY_CONTEXT;
    }

    public function getLocale(Request $request): ?string
    {
        return $request->query->get('locale');
    }
}