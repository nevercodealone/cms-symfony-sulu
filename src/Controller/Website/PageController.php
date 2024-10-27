<?php
namespace App\Controller\Website;

use App\Service\WordpressService;
use App\Service\YouTubeService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sulu\Bundle\WebsiteBundle\Controller\WebsiteController;
use Sulu\Component\Content\Compat\StructureInterface;

class PageController extends WebsiteController
{
    /**
     * @param bool $preview
     * @param bool $partial
     * @return Response
     */
    public function trainingOverview(
        StructureInterface $structure,
        YouTubeService $youTubeService,
        $preview = false,
        $partial = false
    ) {
        $response = $this->renderStructure(
            $structure,
            [
                'videoList' => $youTubeService->getItemsFromChannel('PLKrKzhBjw2Y88YH-UCWs6irEQfiGdzD2X')
            ],
            $preview,
            $partial
        );

        return $response;
    }

    /**
     * @param bool $preview
     * @param bool $partial
     * @return Response
     */
    public function employerBranding(
        StructureInterface $structure,
        YouTubeService $youTubeService,
        $preview = false,
        $partial = false
    ) {
        $response = $this->renderStructure(
            $structure,
            [
                'videoList' => $youTubeService->getItemsFromChannel()
            ],
            $preview,
            $partial
        );

        return $response;
    }

    /**
     * @param bool $preview
     * @param bool $partial
     * @return Response
     */
    public function conferencePage(StructureInterface $structure, Request $request, $preview = false, $partial = false)
    {
        $response = $this->renderStructure(
            $structure,
            [
                'sourceParam' => $this->getSourceParam($request)
            ],
            $preview,
            $partial
        );

        return $response;
    }

    public function homepage(
        StructureInterface $structure,
        WordpressService $wordpressService,
        $preview = false,
        $partial = false
    ) {

        return $this->renderStructure(
            $structure,
            [
                'blogList' => $wordpressService->getItemsFromBlog()
            ],
            $preview,
            $partial
        );
    }

    protected function getSourceParam(Request $request): string
    {
        $aff = 'website';

        $queryGet = $request->query->get('aff');
        if ($queryGet !== null && $queryGet !== '') {
            $aff = $queryGet;
        }

        return '?aff=' . $aff;
    }
}
