<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Common\DoctrineListRepresentationFactory;
use App\Entity\ClientRequestRefactoring;
use Doctrine\ORM\EntityManagerInterface;
use Sulu\Bundle\MediaBundle\Media\Manager\MediaManagerInterface;
use Sulu\Component\Security\SecuredControllerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @phpstan-type EventData array{
 *     id: int|null,
 *     email: string,
 *     name: string,
 *     projectDescription: string,
 *     team: string,
 * }
 */
class ClientRequestRefactoringController extends AbstractController implements SecuredControllerInterface
{
  private DoctrineListRepresentationFactory $doctrineListRepresentationFactory;
  private EntityManagerInterface $entityManager;
  private MediaManagerInterface $mediaManager;

  public function __construct(
    DoctrineListRepresentationFactory $doctrineListRepresentationFactory,
    EntityManagerInterface $entityManager,
    MediaManagerInterface $mediaManager
  ) {
    $this->doctrineListRepresentationFactory = $doctrineListRepresentationFactory;
    $this->entityManager = $entityManager;
    $this->mediaManager = $mediaManager;
  }

  /**
   * @Route("/admin/api/client_request_refactorings/{id}", methods={"GET"}, name="app.get_client_request_refactoring")
   */
  public function getAction(int $id): Response
  {
    $clientRequestRefactoring = $this->entityManager->getRepository(ClientRequestRefactoring::class)->find($id);
    if (!$clientRequestRefactoring) {
      throw new NotFoundHttpException();
    }

    return $this->json($this->getDataForEntity($clientRequestRefactoring));
  }

  /**
   * @Route("/admin/api/client_request_refactorings/{id}", methods={"PUT"}, name="app.put_client_request_refactoring")
   */
  public function putAction(Request $request, int $id): Response
  {
    $clientRequestRefactoring = $this->entityManager->getRepository(ClientRequestRefactoring::class)->find($id);
    if (!$clientRequestRefactoring) {
      throw new NotFoundHttpException();
    }

    /** @var EventData $data */
    $data = $request->toArray();
    $this->mapDataToEntity($data, $clientRequestRefactoring);
    $this->entityManager->flush();

    return $this->json($this->getDataForEntity($clientRequestRefactoring));
  }

  /**
   * @Route("/admin/api/client_request_refactorings", methods={"POST"}, name="app.post_client_request_refactoring")
   */
  public function postAction(Request $request): Response
  {
    $clientRequestRefactoring = new ClientRequestRefactoring();

    /** @var EventData $data */
    $data = $request->toArray();
    $this->mapDataToEntity($data, $clientRequestRefactoring);
    $this->entityManager->persist($clientRequestRefactoring);
    $this->entityManager->flush();

    return $this->json($this->getDataForEntity($clientRequestRefactoring), 201);
  }

  /**
   * @Route("/admin/api/client_request_refactorings/{id}", methods={"DELETE"}, name="app.delete_client_request_refactoring")
   */
  public function deleteAction(int $id): Response
  {
    /** @var ClientRequestRefactoring $clientRequestRefactoring */
    $clientRequestRefactoring = $this->entityManager->getReference(ClientRequestRefactoring::class, $id);
    $this->entityManager->remove($clientRequestRefactoring);
    $this->entityManager->flush();

    return $this->json(null, 204);
  }

  /**
   * @Route("/admin/api/client_request_refactorings", methods={"GET"}, name="app.get_client_request_refactoring_list")
   */
  public function getListAction(): Response
  {
    $listRepresentation = $this->doctrineListRepresentationFactory->createDoctrineListRepresentation(
      ClientRequestRefactoring::RESOURCE_KEY
    );

    return $this->json($listRepresentation->toArray());
  }

  /**
   * @return EventData $data
   */
  protected function getDataForEntity(ClientRequestRefactoring $entity): array
  {
    return [
      'id' => $entity->getId(),
      'email' => $entity->getEmail(),
      'name' => $entity->getName(),
      'projectDescription' => $entity->getProjectDescription(),
      'team' => $entity->getTeam(),
    ];
  }

  /**
   * @param EventData $data
   */
  protected function mapDataToEntity(array $data, ClientRequestRefactoring $entity): void
  {
    $entity->setEmail($data['email']);
    $entity->setName($data['name']);
    $entity->setProjectDescription($data['projectDescription']);
    $entity->setTeam($data['team']);
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
