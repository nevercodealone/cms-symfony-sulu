<?php
namespace App\Controller;

use App\Service\TwitterService;
use App\Service\WordpressService;
use App\Service\YouTubeService;
use Symfony\Component\HttpFoundation\Response;
use Sulu\Bundle\WebsiteBundle\Controller\WebsiteController;
use Sulu\Component\Content\Compat\StructureInterface;

class PageController extends WebsiteController
{
    /**
     * @param StructureInterface $structure
     * @param YouTubeService $youTubeService
     * @param bool $preview
     * @param bool $partial
     * @return Response
     */
    public function employerBranding(
        StructureInterface $structure,
        YouTubeService $youTubeService,
        $preview = false,
        $partial = false
    )
    {
        $response = $this->renderStructure(
            $structure,
            [
                // here you can add some custom data for your template
                'videoList' => $youTubeService->getItemsFromChannel()
            ],
            $preview,
            $partial
        );

        return $response;
    }

    /**
     * @param StructureInterface $structure
     * @param WordpressService $service
     * @param bool $preview
     * @param bool $partial
     * @return Response
     */
    public function wordpress(StructureInterface $structure, WordpressService $service, $preview = false, $partial = false)
    {
        $response = $this->renderStructure(
            $structure,
            [
                // here you can add some custom data for your template
                'blogList' => $service->getItemsFromBlog()
            ],
            $preview,
            $partial
        );

        return $response;
    }

}

