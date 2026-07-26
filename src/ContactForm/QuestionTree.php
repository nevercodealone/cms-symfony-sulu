<?php

declare(strict_types=1);

namespace App\ContactForm;

/**
 * Service catalogue and Step-2 question definitions for the qualified-contact wizard.
 *
 * Each service drives one card on Step 1 and one details form on Step 2.
 * Supported question types: "select" (native dropdown) and "checkbox"
 * (optionally grouped via the per-option "group" key).
 */
final class QuestionTree
{
    private const SERVICES = [
        [
            'key' => 'php-refactoring',
            'label' => 'PHP Refactoring',
            'icon' => 'terminal',
            'badge' => 'CORE EXPERTISE',
            'description' => 'Eliminierung technischer Schulden mit PHPStan, Rector PHP und PHPUnit. '
                . 'Über 20 Jahre Praxiserfahrung in skalierbaren Backends.',
        ],
        [
            'key' => 'accessibility',
            'label' => 'Barrierefreies Webdesign',
            'icon' => 'accessibility_new',
            'badge' => 'BFSG COMPLIANT',
            'description' => 'Gesetzliche Konformität & Inklusion. Optimierung von Performance und Conversion '
                . 'durch radikal nutzerzentriertes, universelles Design.',
        ],
        [
            'key' => 'vibe-coding',
            'label' => 'Vibe Coding für Production',
            'icon' => 'rocket_launch',
            'badge' => 'ENTERPRISE READY',
            'description' => 'Skalierbare KI-Systeme mit echtem Code Ownership. CI/CD, Backup-Strategien '
                . 'und Infrastruktur, die mit deinem Team wächst.',
        ],
    ];

    /** @var array<string, array<int, array<string, mixed>>> */
    private const QUESTIONS = [
        'php-refactoring' => [
            [
                'id' => 'php_version',
                'label' => 'Aktuelle PHP-Version',
                'type' => 'select',
                'placeholder' => 'weiß nicht',
                'placeholderValue' => 'unknown',
                'options' => [
                    ['value' => '5.6', 'label' => 'PHP 5.6 oder älter'],
                    ['value' => '7.x', 'label' => 'PHP 7.x (7.0 - 7.4)'],
                    ['value' => '8.0', 'label' => 'PHP 8.0'],
                    ['value' => '8.1', 'label' => 'PHP 8.1'],
                    ['value' => '8.2', 'label' => 'PHP 8.2'],
                    ['value' => '8.3', 'label' => 'PHP 8.3'],
                ],
            ],
            [
                'id' => 'setup',
                'label' => 'Vorhandenes Setup',
                'type' => 'checkbox',
                'options' => [
                    ['value' => 'phpunit', 'label' => 'Automatisierte Tests (PHPUnit)', 'group' => 'Setup'],
                    ['value' => 'static-analysis', 'label' => 'Static Analysis (PHPStan/Psalm)', 'group' => 'Setup'],
                    ['value' => 'cicd', 'label' => 'CI/CD Pipeline', 'group' => 'Setup'],
                    ['value' => 'docker', 'label' => 'Docker / DDEV', 'group' => 'Setup'],
                    ['value' => 'github', 'label' => 'GitHub', 'group' => 'Setup'],
                    ['value' => 'gitlab', 'label' => 'GitLab', 'group' => 'Setup'],
                    ['value' => 'symfony', 'label' => 'Symfony', 'group' => 'Framework'],
                    ['value' => 'laravel', 'label' => 'Laravel', 'group' => 'Framework'],
                    ['value' => 'legacy', 'label' => 'Legacy Code (kein Framework)', 'group' => 'Framework'],
                ],
            ],
        ],
        'accessibility' => [
            [
                'id' => 'wcag_status',
                'label' => 'Aktueller WCAG-Status',
                'type' => 'select',
                'placeholder' => 'weiß nicht',
                'placeholderValue' => 'unknown',
                'options' => [
                    ['value' => 'non-compliant', 'label' => 'Bekannte Barrieren vorhanden'],
                    ['value' => 'partial', 'label' => 'Teilweise konform (WCAG 2.1 AA)'],
                    ['value' => 'compliant', 'label' => 'Konform — Monitoring gewünscht'],
                ],
            ],
            [
                'id' => 'content_types',
                'label' => 'Betroffene Bereiche',
                'type' => 'checkbox',
                'options' => [
                    ['value' => 'marketing', 'label' => 'Marketing-Website', 'group' => 'Bereich'],
                    ['value' => 'shop', 'label' => 'Shop / Checkout', 'group' => 'Bereich'],
                    ['value' => 'portal', 'label' => 'Kundenportal / App', 'group' => 'Bereich'],
                    ['value' => 'forms', 'label' => 'Formulare & Beratung', 'group' => 'Bereich'],
                ],
            ],
        ],
        'vibe-coding' => [
            [
                'id' => 'language',
                'label' => 'Gewünschte Technologie',
                'type' => 'select',
                'placeholder' => 'weiß nicht',
                'placeholderValue' => 'unknown',
                'options' => [
                    ['value' => 'javascript', 'label' => 'JavaScript / TypeScript'],
                    ['value' => 'python', 'label' => 'Python'],
                    ['value' => 'php', 'label' => 'PHP'],
                    ['value' => 'other', 'label' => 'Anderes'],
                ],
            ],
            [
                'id' => 'current_setup',
                'label' => 'Aktuelles Setup',
                'type' => 'checkbox',
                'options' => [
                    ['value' => 'unknown', 'label' => 'weiß nicht'],
                    ['value' => 'claude-code', 'label' => 'Claude Code'],
                    ['value' => 'openai', 'label' => 'OpenAI'],
                    ['value' => 'cursor', 'label' => 'Cursor AI'],
                    ['value' => 'lovable', 'label' => 'Lovable'],
                    ['value' => 'base44', 'label' => 'Base44'],
                    ['value' => 'other', 'label' => 'Anderes'],
                ],
            ],
        ],
    ];

    /** @return array<int, array{key: string, label: string, icon: string, badge: string, description: string}> */
    public function getServices(): array
    {
        return self::SERVICES;
    }

    /** @return array<int, array<string, mixed>> */
    public function getQuestions(string $serviceKey): array
    {
        return self::QUESTIONS[$serviceKey] ?? [];
    }

    /** @return array<string, mixed>|null */
    public function getService(string $serviceKey): ?array
    {
        foreach (self::SERVICES as $service) {
            if ($service['key'] === $serviceKey) {
                return $service;
            }
        }

        return null;
    }

    /**
     * Group checkbox options by their "group" key while preserving order.
     *
     * @param array<int, array<string, mixed>> $options
     *
     * @return array<string, array<int, array<string, mixed>>>
     */
    public function groupOptions(array $options): array
    {
        $grouped = [];
        foreach ($options as $option) {
            $groupName = $option['group'] ?? '';
            if (!isset($grouped[$groupName])) {
                $grouped[$groupName] = [];
            }
            $grouped[$groupName][] = $option;
        }

        return $grouped;
    }
}
