<?php
namespace App\Tests\Unit\Service;

use App\Service\WordpressService;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpClient\MockHttpClient;
use Symfony\Component\HttpClient\Response\MockResponse;
use Symfony\Component\HttpFoundation\Response;

class WordpressServiceTest extends TestCase
{
  public function testGetItemsFromBlog(): void
  {
    $mockResponse = new MockResponse(json_encode([
      [
        'id' => 1,
        'title' => ['rendered' => 'Test Post'],
        'content' => ['rendered' => 'This is a test post content.'],
      ],
    ]), [
      'http_code' => Response::HTTP_OK,
      'response_headers' => ['Content-Type' => 'application/json'],
    ]);
    $mockHttpClient = new MockHttpClient($mockResponse);
    $service = new WordpressService($mockHttpClient);

    $result = $service->getItemsFromBlog();

    $this->assertIsArray($result);
    $this->assertCount(1, $result);
    $this->assertEquals(1, $result[0]['id']);
    $this->assertEquals('Test Post', $result[0]['title']['rendered']);
    $this->assertEquals('This is a test post content.', $result[0]['content']['rendered']);
  }

  public function testRequestContainsCorrectHeadersAndParameters(): void
  {
    $callback = function (string $method, string $url, array $options = []): MockResponse {
      $this->assertEquals('GET', $method);
      $this->assertEquals('https://blog.nevercodealone.de/wp-json/wp/v2/posts?per_page=6&_embed=', $url);

      // Verify headers structure
      $this->assertArrayHasKey('headers', $options);
      $this->assertCount(1, $options['headers']);
      $this->assertEquals('Accept: application/json', $options['headers'][0]);

      // Verify normalized headers
      $this->assertArrayHasKey('normalized_headers', $options);
      $this->assertArrayHasKey('accept', $options['normalized_headers']);
      $this->assertCount(1, $options['normalized_headers']['accept']);
      $this->assertEquals('Accept: application/json', $options['normalized_headers']['accept'][0]);

      // Verify query parameters
      $this->assertArrayHasKey('query', $options);
      $this->assertCount(2, $options['query']);
      $this->assertArrayHasKey('per_page', $options['query']);
      $this->assertArrayHasKey('_embed', $options['query']);
      $this->assertSame(6, $options['query']['per_page']); // Using assertSame for strict type checking
      $this->assertSame('', $options['query']['_embed']);

      // Optional: Verify other standard options if they're important for your use case
      $this->assertArrayHasKey('timeout', $options);
      $this->assertEquals(60, $options['timeout']);

      return new MockResponse('[]', ['http_code' => Response::HTTP_OK]);
    };

    $mockHttpClient = new MockHttpClient($callback);
    $service = new WordpressService($mockHttpClient);

    $service->getItemsFromBlog();
  }

  public function testGetItemsFromBlogMoreThenSixReturnSix(): void
  {
    $mockResponse = new MockResponse(json_encode(array_fill(0, 6, [
      'id' => 1,
      'title' => ['rendered' => 'Test Post'],
      'content' => ['rendered' => 'Content'],
    ])), [
      'http_code' => Response::HTTP_OK,
      'response_headers' => ['Content-Type' => 'application/json'],
    ]);
    $mockHttpClient = new MockHttpClient($mockResponse);
    $service = new WordpressService($mockHttpClient);

    $result = $service->getItemsFromBlog();

    $this->assertCount(6, $result);
  }

  public function testGetItemsFromBlogThrowsExceptionOnNonOkResponse(): void
  {
    $mockResponse = new MockResponse('', [
      'http_code' => Response::HTTP_INTERNAL_SERVER_ERROR,
    ]);
    $mockHttpClient = new MockHttpClient($mockResponse);
    $service = new WordpressService($mockHttpClient);

    $this->expectException(\RuntimeException::class);
    $this->expectExceptionMessage('Failed to fetch blog posts');
    $service->getItemsFromBlog();
  }

  public function testThrowsExceptionOnInvalidJsonResponse(): void
  {
    $mockResponse = new MockResponse('invalid json', [
      'http_code' => Response::HTTP_OK,
      'response_headers' => ['Content-Type' => 'application/json'],
    ]);
    $mockHttpClient = new MockHttpClient($mockResponse);
    $service = new WordpressService($mockHttpClient);

    $this->expectException(\Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface::class);
    $service->getItemsFromBlog();
  }

  public function testThrowsDecodingExceptionOnInvalidJsonResponse(): void
  {
    $mockResponse = $this->createMock(\Symfony\Contracts\HttpClient\ResponseInterface::class);
    $mockResponse->method('getStatusCode')
      ->willReturn(Response::HTTP_OK);

    $mockResponse->method('toArray')
      ->willThrowException(new class extends \Exception implements \Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface {});

    $mockHttpClient = new MockHttpClient(function() use ($mockResponse) {
      return $mockResponse;
    });

    $service = new WordpressService($mockHttpClient);

    $this->expectException(\Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface::class);
    $service->getItemsFromBlog();
  }

}
