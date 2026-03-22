<?php

declare(strict_types=1);

namespace App\ContactForm;

final class QuestionTree
{
    private const TABS = [
        [
            'key' => 'vibe-coding',
            'label' => 'Vibe Coding Consulting',
            'icon' => 'terminal',
            'assistant' => [
                'name' => 'CodeBot',
                'avatar' => '/build/images/assistant-code.svg',
                'greeting' => 'Hey! Ich bin CodeBot. Lass uns herausfinden, wie wir dein Projekt zum Fliegen bringen.',
            ],
        ],
        [
            'key' => 'php-refactoring',
            'label' => 'PHP Refactoring',
            'icon' => 'refresh',
            'assistant' => [
                'name' => 'RefactorBot',
                'avatar' => '/build/images/assistant-refactor.svg',
                'greeting' => 'Hi! Ich bin RefactorBot. Zeig mir deinen Code-Schmerz, ich finde die Lösung.',
            ],
        ],
        [
            'key' => 'ai-content',
            'label' => 'AI Content Marketing',
            'icon' => 'sparkles',
            'assistant' => [
                'name' => 'ContentBot',
                'avatar' => '/build/images/assistant-content.svg',
                'greeting' => 'Moin! Ich bin ContentBot. Zusammen bringen wir deine Inhalte auf das nächste Level.',
            ],
        ],
    ];

    private const QUESTIONS = [
        'vibe-coding' => [
            [
                'id' => 'target',
                'label' => 'Was soll entstehen?',
                'type' => 'choice',
                'options' => [
                    ['value' => 'internal', 'label' => 'Internes Tool für Unternehmensprozesse'],
                    ['value' => 'website', 'label' => 'Öffentliche Website / Webapplikation'],
                ],
            ],
            [
                'id' => 'tech_stack',
                'label' => 'Welche Technologie soll eingesetzt werden?',
                'type' => 'choice',
                'options' => [
                    ['value' => 'javascript', 'label' => 'JavaScript / TypeScript'],
                    ['value' => 'python', 'label' => 'Python'],
                    ['value' => 'svelte', 'label' => 'Svelte / SvelteKit'],
                    ['value' => 'unsure', 'label' => 'Noch unklar — brauche Beratung'],
                ],
            ],
        ],
        'php-refactoring' => [
            [
                'id' => 'php_version',
                'label' => 'Welche PHP-Version läuft aktuell?',
                'type' => 'choice',
                'options' => [
                    ['value' => 'php5', 'label' => 'PHP 5'],
                    ['value' => 'php7', 'label' => 'PHP 7'],
                    ['value' => 'php8', 'label' => 'PHP 8'],
                ],
            ],
            [
                'id' => 'ci_cd_infra',
                'label' => 'Was ist schon im Einsatz?',
                'type' => 'checkbox',
                'options' => [
                    ['value' => 'docker', 'label' => 'Docker'],
                    ['value' => 'gitlab_ci', 'label' => 'GitLab CI'],
                    ['value' => 'github_actions', 'label' => 'GitHub Actions'],
                    ['value' => 'phpunit', 'label' => 'PHPUnit Tests'],
                    ['value' => 'phpstan', 'label' => 'PHPStan / Psalm'],
                    ['value' => 'nichts', 'label' => 'Noch nichts davon'],
                ],
            ],
            [
                'id' => 'codebase_age',
                'label' => 'Wie alt ist die Codebase?',
                'type' => 'choice',
                'options' => [
                    ['value' => 'old', 'label' => 'Älter als 10 Jahre — einfach hart'],
                    ['value' => 'good', 'label' => 'Läuft gut — soll nur besser werden'],
                ],
            ],
        ],
        'ai-content' => [
            [
                'id' => 'url',
                'label' => 'Wie lautet die URL eurer Website?',
                'type' => 'text',
                'placeholder' => 'https://example.com',
            ],
            [
                'id' => 'seo_target_keyword',
                'label' => 'Was ist euer wichtigstes SEO-Ziel-Keyword?',
                'type' => 'text',
                'placeholder' => 'z.B. "PHP Entwickler Berlin"',
            ],
        ],
    ];

    /** @return array<int, array{key: string, label: string, icon: string, assistant: array<string, string>}> */
    public function getTabs(): array
    {
        return self::TABS;
    }

    /** @return array<int, array<string, mixed>> */
    public function getQuestions(string $tabKey): array
    {
        return self::QUESTIONS[$tabKey] ?? [];
    }

    /** @return array<string, mixed>|null */
    public function getQuestion(string $tabKey, int $index): ?array
    {
        return self::QUESTIONS[$tabKey][$index] ?? null;
    }

    public function isLastQuestion(string $tabKey, int $index): bool
    {
        $questions = $this->getQuestions($tabKey);

        return $index === count($questions) - 1;
    }

    public function getTotalQuestions(string $tabKey): int
    {
        return count($this->getQuestions($tabKey));
    }
}
