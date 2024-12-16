<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpFoundation\Response;

class WordpressService
{
  private HttpClientInterface $httpClient;

  public function __construct(HttpClientInterface $httpClient)
  {
    $this->httpClient = $httpClient;
  }

  /**
   * @throws TransportExceptionInterface
   * @throws ServerExceptionInterface
   * @throws RedirectionExceptionInterface
   * @throws DecodingExceptionInterface
   * @throws ClientExceptionInterface
   */
  public function getItemsFromBlog(): array
  {
    $response = $this->httpClient->request('GET', 'https://blog.nevercodealone.de/wp-json/wp/v2/posts', [
      'headers' => [
        'Accept' => 'application/json',
      ],
      'query' => [
        'per_page' => 10,
        '_embed' => '',
      ],
    ]);

    if ($response->getStatusCode() !== Response::HTTP_OK) {
      throw new \RuntimeException('Failed to fetch blog posts');
    }

    return $response->toArray(throw: true);
  }
}
