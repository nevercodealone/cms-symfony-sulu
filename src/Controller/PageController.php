<?php
namespace App\Controller;

use App\Service\MeetupService;
use App\Service\TwitterService;
use App\Service\WordpressService;
use App\Service\YouTubeService;
use Symfony\Component\HttpFoundation\Request;
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
     * @param StructureInterface $structure
     * @param Request $request
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
        MeetupService $meetupService,
        Request $request,
        $preview = false,
        $partial = false
    ) {

        $klaroCookie = $request->cookies->get('klaro');
        $klaroItems = json_decode($klaroCookie, true);

        return $this->renderStructure(
            $structure,
            [
                'blogList' => $wordpressService->getItemsFromBlog(),
                'meetupNextEvents' => $meetupService->getNextEvents(),
                'klaroItems' => $klaroItems
            ],
            $preview,
            $partial
        );
    }

    /**
     * @param Request $request
     * @return string
     */
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
