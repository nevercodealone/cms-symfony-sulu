<?php
namespace App\Controller;

use App\Service\YouTubeService;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
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
    public function index(StructureInterface $structure, $preview = false, $partial = false)
    {
        $response = $this->renderStructure(
            $structure,
            [
                // here you can add some custom data for your template
                'videoList' => $this->getService()->getItemsFromChannel()
            ],
            $preview,
            $partial
        );

        return $response;
    }

    private function getService() : YouTubeService
    {
        return $this->get('YouTubeService');
    }
}

