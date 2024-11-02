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
}
