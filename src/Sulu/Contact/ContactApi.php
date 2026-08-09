<?php

declare(strict_types=1);

namespace App\Sulu\Contact;

use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\SerializedName;
use JMS\Serializer\Annotation\VirtualProperty;
use Sulu\Bundle\ContactBundle\Api\Contact as SuluContactApi;

class ContactApi extends SuluContactApi
{
    #[VirtualProperty]
    #[SerializedName('detailPage')]
    #[Groups(['fullContact', 'partialAccount'])]
    public function getDetailPage(): ?string
    {
        return $this->entity->getDetailPage();
    }
}
