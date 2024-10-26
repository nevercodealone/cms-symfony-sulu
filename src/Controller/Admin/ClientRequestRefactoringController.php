<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Common\DoctrineListRepresentationFactory;
use App\Entity\ClientRequestRefactoring;
use Doctrine\ORM\EntityManagerInterface;
use Sulu\Component\Security\SecuredControllerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ClientRequestRefactoringController extends AbstractController implements SecuredControllerInterface
{
    public function __construct(private readonly DoctrineListRepresentationFactory $doctrineListRepresentationFactory, private readonly EntityManagerInterface $entityManager)
    {
    }

    #[Route(path: '/admin/api/client-request-refactorings/{id}', methods: ['GET'], name: 'app.get_client_request_refactoring')]
    public function get(int|string $id): Response
    {
        $clientRequestRefactoring = $this->entityManager->getRepository(ClientRequestRefactoring::class)->find($id);
        if (!$clientRequestRefactoring instanceof ClientRequestRefactoring) {
            throw new NotFoundHttpException();
        }

        return $this->json($this->getDataForEntity($clientRequestRefactoring));
    }

    #[Route(path: '/admin/api/client-request-refactorings/{id}', methods: ['PUT'], name: 'app.put_client_request_refactoring')]
    public function put(Request $request, int $id): Response
    {
        $clientRequestRefactoring = $this->entityManager->getRepository(ClientRequestRefactoring::class)->find($id);
        if (!$clientRequestRefactoring instanceof ClientRequestRefactoring) {
            throw new NotFoundHttpException();
        }
        $data = $request->toArray();
        $this->mapDataToEntity($data, $clientRequestRefactoring);
        $this->entityManager->flush();

        return $this->json($this->getDataForEntity($clientRequestRefactoring));
    }

    #[Route(path: '/admin/api/client-request-refactorings', methods: ['POST'], name: 'app.post_client_request_refactoring')]
    public function post(Request $request): Response
    {
        $data = $request->toArray();
        $clientRequestRefactoring = new ClientRequestRefactoring();
        $this->mapDataToEntity($data, $clientRequestRefactoring);
        $this->entityManager->persist($clientRequestRefactoring);
        $this->entityManager->flush();

        return $this->json($this->getDataForEntity($clientRequestRefactoring));
    }

    #[Route(path: '/admin/api/client-request-refactorings/{id}', methods: ['DELETE'], name: 'app.delete_client_request_refactoring')]
    public function delete(int|string $id): Response
    {
        $clientRequestRefactoring = $this->entityManager->getRepository(ClientRequestRefactoring::class)->find($id);
        if (!$clientRequestRefactoring instanceof ClientRequestRefactoring) {
            throw new NotFoundHttpException();
        }
        $this->entityManager->remove($clientRequestRefactoring);
        $this->entityManager->flush();

        return new Response(null, Response::HTTP_NO_CONTENT);
    }

    public function getList(): Response
    {
        $clientRequestRefactorings = $this->entityManager->getRepository(ClientRequestRefactoring::class)->findAll();

        return $this->json(array_map([$this, 'getDataForEntity'], $clientRequestRefactorings));
    }

    private function getDataForEntity(ClientRequestRefactoring $clientRequestRefactoring)
    {
      return [
        'id' => $clientRequestRefactoring->getId(),
        'email' => $clientRequestRefactoring->getEmail(),
        'projectUrl' => $clientRequestRefactoring->getProjectUrl(),
        'projectDescription' => $clientRequestRefactoring->getProjectDescription(),
        'team' => $clientRequestRefactoring->getTeam(),
        'contactType' => $clientRequestRefactoring->getContactType(),
        'additionalInformation' => $clientRequestRefactoring->getAdditionalInformation(),
      ];
    }

    public function getSecurityContext(): string
    {
      return ClientRequestRefactoring::SECURITY_CONTEXT;
    }

    public function getLocale(Request $request): ?string
    {
      return $request->query->get('locale');
    }
}
