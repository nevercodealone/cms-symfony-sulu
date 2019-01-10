<?php
namespace App\Controller;

use App\Service\YouTubeService;
use Symfony\Component\HttpFoundation\Response;
use Sulu\Bundle\WebsiteBundle\Controller\WebsiteController;
use Sulu\Component\Content\Compat\StructureInterface;

class PageController extends WebsiteController
{
    /**
     * Custom controller.
     *
     * @param StructureInterface $structure
     * @param bool $preview
     * @param bool $partial
     *
     * @return Response
     */
    public function index(StructureInterface $structure, YouTubeService $service, $preview = false, $partial = false)
    {
        $response = $this->renderStructure(
            $structure,
            [
                // here you can add some custom data for your template
                'videoList' => $service->getItemsFromChannel()
            ],
            $preview,
            $partial
        );

        return $response;
    }
}

