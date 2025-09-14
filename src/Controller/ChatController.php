<?php

declare(strict_types=1);

namespace App\Controller;

use Sulu\Bundle\HttpCacheBundle\Cache\SuluHttpCache;
use Sulu\Bundle\WebsiteBundle\Controller\DefaultController;
use Sulu\Component\Content\Compat\StructureInterface;
use Symfony\Component\HttpFoundation\Response;

class ChatController extends DefaultController
{
    public function chatAction(
        StructureInterface $structure,
        bool $preview = false,
        bool $partial = false
    ): Response {
        $response = $this->render('pages/chat.html.twig');

        if (!$preview) {
            $response->headers->set(
                SuluHttpCache::HEADER_REVERSE_PROXY_TTL,
                $response->getMaxAge()
            );
        }

        return $response;
    }
}