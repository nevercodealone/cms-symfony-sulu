<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Common\DoctrineListRepresentationFactory;
use App\Entity\ContactLead;
use Doctrine\ORM\EntityManagerInterface;
use Sulu\Component\Security\SecuredControllerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Attribute\Route;

class ContactLeadController extends AbstractController implements SecuredControllerInterface
{
    public function __construct(
        private DoctrineListRepresentationFactory $doctrineListRepresentationFactory,
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Route('/admin/api/contact-leads/{id}', methods: ['GET'], name: 'app.get_contact_lead')]
    public function getAction(int $id): Response
    {
        $lead = $this->entityManager->getRepository(ContactLead::class)->find($id);
        if (!$lead) {
            throw new NotFoundHttpException();
        }

        return $this->json($this->getDataForEntity($lead));
    }

    #[Route('/admin/api/contact-leads/{id}', methods: ['DELETE'], name: 'app.delete_contact_lead')]
    public function deleteAction(int $id): Response
    {
        /** @var ContactLead $lead */
        $lead = $this->entityManager->getReference(ContactLead::class, $id);
        $this->entityManager->remove($lead);
        $this->entityManager->flush();

        return $this->json(null, 204);
    }

    #[Route('/admin/api/contact-leads', methods: ['GET'], name: 'app.get_contact_lead_list')]
    public function getListAction(): Response
    {
        $listRepresentation = $this->doctrineListRepresentationFactory->createDoctrineListRepresentation(
            ContactLead::RESOURCE_KEY
        );

        return $this->json($listRepresentation->toArray());
    }

    /**
     * @return array<string, mixed>
     */
    protected function getDataForEntity(ContactLead $entity): array
    {
        return [
            'id' => $entity->getId(),
            'product' => $entity->getProduct(),
            'name' => $entity->getName(),
            'email' => $entity->getEmail(),
            'message' => $entity->getMessage(),
            'answers' => $entity->getAnswers(),
            'userIp' => $entity->getUserIp(),
            'createdAt' => $entity->getCreatedAt()?->format('c'),
        ];
    }

    public function getSecurityContext(): string
    {
        return ContactLead::SECURITY_CONTEXT;
    }

    public function getLocale(Request $request): ?string
    {
        return $request->query->get('locale');
    }
}
