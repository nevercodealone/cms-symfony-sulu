<?php

namespace App\Controller;

use App\Entity\Message;
use App\Service\SpamProtection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class ContactController extends AbstractController
{
    /**
     * @Route("/api/contact")
     * @Method("POST")
     */
    public function contactAction(Request $request, SpamProtection $spamProtection)
    {

        $data = json_decode((string) $request->getContent(), true);

        if(!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
            return new JsonResponse(
                'messagesAction has not set values',
                401
            );
        }

        $name = $data['name'];
        $email = $data['email'];
        $message = $data['message'];
        $ip = $data['ip'] = $request->getClientIp();

        if($name === '' || $email === '' || $message === '' || $ip === '') {
            return new JsonResponse(
                'messagesAction has empty values',
                400
            );
        }

        if(!$spamProtection->validateUserInputs($data)) {
            return new JsonResponse(
                'messagesAction detected as spam',
                402
            );
        }

        $messageEntity = new Message();
        $messageEntity->setName($name);
        $messageEntity->setEmail($email);
        $messageEntity->setMessage($message);
        $messageEntity->setIp($ip);

        try {
            $em = $this->getDoctrine()->getManager();
            $em->persist($messageEntity);
            $em->flush();

            mail('rolandgolla@gmail.com', 'Kontakt NCA', $email . ' ' . $message);
            $status = 200;
        } catch (\Exception $exception) {
            $status = 500;
        }

        return new JsonResponse(
            'messagesAction',
            $status
        );
    }
}
