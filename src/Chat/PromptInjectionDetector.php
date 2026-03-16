<?php

declare(strict_types=1);

namespace App\Chat;

final class PromptInjectionDetector
{
    private const MAX_MESSAGE_LENGTH = 1000;

    private const INJECTION_PATTERNS = [
        '/ignore\s+(?:all\s+)?previous\s+instructions/i',
        '/ignorier\w*\s+(?:alle\s+)?vorherige\w*\s+anweisungen/i',
        '/you\s+are\s+now\b/i',
        '/du\s+bist\s+jetzt\b/i',
        '/ab\s+jetzt\s+bist\s+du\b/i',
        '/\bact\s+as\b/i',
        '/verhalte?\s+dich\s+als\b/i',
        '/agiere?\s+als\b/i',
        '/new\s+instructions\b/i',
        '/new\s+rules\b/i',
        '/neue\s+anweisungen\b/i',
        '/neue\s+regeln\b/i',
        '/forget\s+everything/i',
        '/vergiss\s+alles/i',
        '/^SYSTEM:/im',
        '/\bdisregard\b/i',
        '/do\s+not\s+follow/i',
        '/nicht\s+befolgen/i',
        '/\bjailbreak\b/i',
        '/\bDAN\b/',
        '/do\s+anything\s+now/i',
    ];

    private const EXTRACTION_PATTERNS = [
        '/system\s+prompt/i',
        '/system\s+message/i',
        '/repeat\s+your\s+instructions/i',
        '/repeat\s+deine\s+anweisungen/i',
        '/what\s+(?:were\s+you|are\s+you)\s+(?:told|instructed)/i',
        '/was\s+wurde\s+dir\s+gesagt/i',
        '/(?:show|zeig)\w*\s+(?:mir\s+)?(?:your|deine)\s+(?:rules|regeln|prompt)/i',
        '/original\s+prompt/i',
        '/urspr[uü]ngliche?\s+anweisung/i',
    ];

    private const FALLBACK_RESPONSE = 'Bitte nicht. Wir setzen und für Open Source und die Community ein. Schau dir gerne einmal unseren YouTube Kanal an. Danke.';

    /**
     * @return array{safe: bool, reason: string|null}
     */
    public function detect(string $message): array
    {
        $trimmed = trim($message);

        if ($trimmed === '') {
            return ['safe' => false, 'reason' => 'empty'];
        }

        if (mb_strlen($trimmed) > self::MAX_MESSAGE_LENGTH) {
            return ['safe' => false, 'reason' => 'length'];
        }

        foreach (self::INJECTION_PATTERNS as $pattern) {
            if (preg_match($pattern, $trimmed)) {
                return ['safe' => false, 'reason' => 'injection'];
            }
        }

        foreach (self::EXTRACTION_PATTERNS as $pattern) {
            if (preg_match($pattern, $trimmed)) {
                return ['safe' => false, 'reason' => 'extraction'];
            }
        }

        return ['safe' => true, 'reason' => null];
    }

    public static function getFallbackResponse(): string
    {
        return self::FALLBACK_RESPONSE;
    }
}
