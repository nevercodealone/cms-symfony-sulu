<?php

declare(strict_types=1);

namespace App\Controller;

use App\MCP\OpenApi\OpenApiGenerator;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class McpOpenApiController
{
    public function __construct(
        private readonly OpenApiGenerator $openApiGenerator,
    ) {
    }

    #[Route('/mcp/openapi.json', name: 'mcp_openapi_json', methods: ['GET'])]
    public function jsonSpec(): JsonResponse
    {
        $spec = $this->openApiGenerator->generate();

        return new JsonResponse(
            $spec,
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/json',
                'Access-Control-Allow-Origin' => '*',
            ]
        );
    }

    #[Route('/mcp/openapi.yaml', name: 'mcp_openapi_yaml', methods: ['GET'])]
    public function yamlSpec(): Response
    {
        $spec = $this->openApiGenerator->generate();
        $yaml = $this->arrayToYaml($spec);

        return new Response(
            $yaml,
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/x-yaml',
                'Access-Control-Allow-Origin' => '*',
            ]
        );
    }

    /**
     * @param array<string, mixed> $data
     */
    private function arrayToYaml(array $data, int $indent = 0): string
    {
        $yaml = '';
        $prefix = str_repeat('  ', $indent);

        foreach ($data as $key => $value) {
            if (is_array($value)) {
                if (array_is_list($value)) {
                    $yaml .= $prefix . $key . ":\n";
                    foreach ($value as $item) {
                        if (is_array($item)) {
                            $yaml .= $prefix . "-\n";
                            foreach ($item as $k => $v) {
                                $yaml .= $this->formatYamlValue($k, $v, $indent + 1);
                            }
                        } else {
                            $yaml .= $prefix . '- ' . $this->yamlValue($item) . "\n";
                        }
                    }
                } else {
                    $yaml .= $prefix . $key . ":\n";
                    $yaml .= $this->arrayToYaml($value, $indent + 1);
                }
            } else {
                $yaml .= $this->formatYamlValue($key, $value, $indent);
            }
        }

        return $yaml;
    }

    private function formatYamlValue(string $key, mixed $value, int $indent): string
    {
        $prefix = str_repeat('  ', $indent);
        $formatted = $prefix . $key . ': ';

        if (is_bool($value)) {
            $formatted .= ($value ? 'true' : 'false');
        } elseif (is_int($value) || is_float($value)) {
            $formatted .= (string) $value;
        } elseif (is_array($value)) {
            if (empty($value)) {
                $formatted .= '[]';
            } else {
                $formatted .= "\n" . $this->arrayToYaml($value, $indent + 1);
                return $formatted;
            }
        } elseif (is_string($value)) {
            if (str_contains($value, "\n") || str_contains($value, ':') || str_contains($value, '#')) {
                $formatted .= '|' . "\n";
                foreach (explode("\n", $value) as $line) {
                    $formatted .= $prefix . '  ' . $line . "\n";
                }
                return $formatted;
            }
            $formatted .= $this->yamlValue($value);
        } else {
            $formatted .= 'null';
        }

        return $formatted . "\n";
    }

    private function yamlValue(mixed $value): string
    {
        if (is_string($value) && preg_match('/^[a-zA-Z0-9_\-\.\/]+$/', $value)) {
            return $value;
        }
        return json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?: 'null';
    }
}
