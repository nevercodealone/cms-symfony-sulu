<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;
use Sulu\Bundle\ContactBundle\Entity\Contact as SuluContact;

#[ORM\Entity]
#[ORM\Table(name: 'co_contacts')]
class Contact extends SuluContact
{
    #[ORM\Column(name: 'detail_page', type: 'string', length: 50, nullable: true)]
    #[JMS\Expose]
    #[JMS\Groups(['fullContact'])]
    private ?string $detailPage = null;

    public function getDetailPage(): ?string
    {
        return $this->detailPage;
    }

    public function setDetailPage(?string $detailPage): self
    {
        $this->detailPage = $detailPage;

        return $this;
    }
}
