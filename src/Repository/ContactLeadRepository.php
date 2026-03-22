<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\ContactLead;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/** @extends ServiceEntityRepository<ContactLead> */
class ContactLeadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ContactLead::class);
    }

    public function countLeadsFromIpInLastHour(string $userIp): int
    {
        $since = new \DateTimeImmutable('-1 hour');

        return (int) $this->createQueryBuilder('l')
            ->select('COUNT(l.id)')
            ->where('l.userIp = :userIp')
            ->andWhere('l.createdAt >= :since')
            ->setParameter('userIp', $userIp)
            ->setParameter('since', $since)
            ->getQuery()
            ->getSingleScalarResult();
    }
}
