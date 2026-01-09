<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\McpAuthCode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<McpAuthCode>
 *
 * @method McpAuthCode|null find($id, $lockMode = null, $lockVersion = null)
 * @method McpAuthCode|null findOneBy(array $criteria, array $orderBy = null)
 * @method McpAuthCode[]    findAll()
 * @method McpAuthCode[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class McpAuthCodeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, McpAuthCode::class);
    }

    public function save(McpAuthCode $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(McpAuthCode $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Find a valid (non-expired) auth code
     */
    public function findValidCode(string $code): ?McpAuthCode
    {
        return $this->createQueryBuilder('c')
            ->where('c.code = :code')
            ->andWhere('c.expiresAt > :now')
            ->setParameter('code', $code)
            ->setParameter('now', new \DateTimeImmutable())
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Delete all expired authorization codes
     */
    public function deleteExpired(): int
    {
        return $this->createQueryBuilder('c')
            ->delete()
            ->where('c.expiresAt < :now')
            ->setParameter('now', new \DateTimeImmutable())
            ->getQuery()
            ->execute();
    }
}
