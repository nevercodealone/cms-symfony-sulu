<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\ChatMessage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ChatMessage>
 *
 * @method ChatMessage|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChatMessage|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChatMessage[]    findAll()
 * @method ChatMessage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChatMessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChatMessage::class);
    }

    public function save(ChatMessage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ChatMessage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Find messages by session ID
     */
    public function findBySessionId(string $sessionId): array
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.sessionId = :sessionId')
            ->setParameter('sessionId', $sessionId)
            ->orderBy('m.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Find messages by IP address
     */
    public function findByUserIp(string $userIp): array
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.userIp = :userIp')
            ->setParameter('userIp', $userIp)
            ->orderBy('m.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Get statistics for admin dashboard
     */
    public function getStatistics(): array
    {
        $qb = $this->createQueryBuilder('m');
        
        return [
            'total_messages' => $qb->select('COUNT(m.id)')
                ->getQuery()
                ->getSingleScalarResult(),
            'unique_users' => $qb->select('COUNT(DISTINCT m.userIp)')
                ->getQuery()
                ->getSingleScalarResult(),
            'avg_response_time' => $qb->select('AVG(m.responseTime)')
                ->where('m.responseTime IS NOT NULL')
                ->getQuery()
                ->getSingleScalarResult(),
        ];
    }
}