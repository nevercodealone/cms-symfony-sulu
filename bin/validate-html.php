#!/usr/bin/env php
<?php

$baseUrl = getenv('BASE_URL') ?: 'https://nevercodealone.projects.nevercodealone.de';
$pages = ['de'];
$nuApi = 'https://validator.w3.org/nu/?out=json';
$totalErrors = 0;

foreach ($pages as $page) {
    $url = rtrim($baseUrl, '/') . '/' . $page;
    echo "Fetching $url ...\n";

    $html = @file_get_contents($url);
    if ($html === false) {
        fwrite(STDERR, "Failed to fetch $url\n");
        exit(1);
    }

    echo "Validating with Nu HTML Checker ...\n";

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: text/html; charset=utf-8\r\nUser-Agent: NCA-HTML-Validator/1.0\r\n",
            'content' => $html,
            'ignore_errors' => true,
        ],
    ]);

    $response = @file_get_contents($nuApi, false, $context);
    if ($response === false) {
        fwrite(STDERR, "Failed to contact Nu validator API\n");
        exit(1);
    }

    $result = json_decode($response, true);
    $messages = $result['messages'] ?? [];

    $errors = array_filter($messages, function ($m) {
        return $m['type'] === 'error' && !preg_match('/Attribute .[x:@-]/u', $m['message']);
    });
    $warnings = count(array_filter($messages, fn($m) => $m['type'] === 'warning'));
    $infos = count(array_filter($messages, fn($m) => $m['type'] === 'info'));

    echo "\n--- $page ---\n";
    echo "  errors:   " . count($errors) . "\n";
    echo "  warnings: $warnings\n";
    echo "  info:     $infos\n";

    if (count($errors) > 0) {
        echo "\n";
        $shown = 0;
        foreach ($errors as $e) {
            if ($shown >= 20) break;
            echo "  line {$e['lastLine']}: {$e['message']}\n";
            $shown++;
        }
    }

    $totalErrors += count($errors);
}

echo "\nTotal errors: $totalErrors\n";
exit($totalErrors > 0 ? 1 : 0);
