<?php

declare(strict_types=1);

namespace App\Sulu\Contact;

use App\Entity\Contact;
use Sulu\Bundle\ContactBundle\Contact\ContactManager as SuluContactManager;

class ContactManagerDecorator extends SuluContactManager
{
    protected function getApiObject($contact, $locale)
    {
        $apiObject = new ContactApi($contact, $locale);
        if ($contact->getAvatar()) {
            $apiAvatar = $this->mediaManager->getById($contact->getAvatar()->getId(), $locale);
            $apiObject->setAvatar($apiAvatar);
        }

        return $apiObject;
    }

    /**
     * @param array<string, mixed> $data
     */
    public function save(
        $data,
        $id = null,
        $patch = false,
        $flush = true
    ) {
        $contact = parent::save($data, $id, $patch, $flush);

        if (is_array($data) && array_key_exists('detailPage', $data) && $contact instanceof Contact) {
            $detailPage = $data['detailPage'];
            $contact->setDetailPage(is_string($detailPage) && '' !== $detailPage ? $detailPage : null);

            if ($flush) {
                $this->em->flush();
            }
        }

        return $contact;
    }
}
