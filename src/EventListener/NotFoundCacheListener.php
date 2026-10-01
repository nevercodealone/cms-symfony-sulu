<?php

namespace App\EventListener;

use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

#[AsEventListener(event: KernelEvents::RESPONSE, priority: -50)]
final class NotFoundCacheListener
{
    private const TTL = 60;

    public function __invoke(ResponseEvent $event): void
    {
        $request = $event->getRequest();
        $response = $event->getResponse();

        if (!$event->isMainRequest()
            || !$request->isMethodCacheable()
            || 404 !== $response->getStatusCode()
            || str_starts_with($request->getPathInfo(), '/admin')
            || \count($response->headers->getCookies()) > 0
        ) {
            return;
        }

        $response->setPublic();
        $response->setSharedMaxAge(self::TTL);
        $response->setMaxAge(0);
    }
}
