<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\McpAccessToken;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<McpAccessToken>
 *
 * @method McpAccessToken|null find($id, $lockMode = null, $lockVersion = null)
 * @method McpAccessToken|null findOneBy(array $criteria, array $orderBy = null)
 * @method McpAccessToken[]    findAll()
 * @method McpAccessToken[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class McpAccessTokenRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, McpAccessToken::class);
    }

    public function save(McpAccessToken $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(McpAccessToken $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Find a valid (non-expired) access token
     */
    public function findValidToken(string $token): ?McpAccessToken
    {
        return $this->createQueryBuilder('t')
            ->where('t.token = :token')
            ->andWhere('t.expiresAt > :now')
            ->setParameter('token', $token)
            ->setParameter('now', new \DateTimeImmutable())
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Delete all expired access tokens
     */
    public function deleteExpired(): int
    {
        return $this->createQueryBuilder('t')
            ->delete()
            ->where('t.expiresAt < :now')
            ->setParameter('now', new \DateTimeImmutable())
            ->getQuery()
            ->execute();
    }

    /**
     * Find all active tokens for a client
     */
    public function findByClientName(string $clientName): array
    {
        return $this->createQueryBuilder('t')
            ->where('t.clientName = :clientName')
            ->andWhere('t.expiresAt > :now')
            ->setParameter('clientName', $clientName)
            ->setParameter('now', new \DateTimeImmutable())
            ->orderBy('t.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
