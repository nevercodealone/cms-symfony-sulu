<?php

declare(strict_types=1);

use Rector\CodeQuality\Rector\Class_\InlineConstructorDefaultToPropertyRector;
use Rector\Config\RectorConfig;
use Rector\Set\ValueObject\LevelSetList;
use Rector\Set\ValueObject\SetList;

return static function (RectorConfig $rectorConfig): void {
    $rectorConfig->paths([__DIR__ . '/src', __DIR__ . '/tests']);

    // phpstan-ci.neon (no symfony extension section - rector cannot load that)
    $rectorConfig->phpstanConfig(__DIR__ . '/phpstan-ci.neon');

    // basic rules
    $rectorConfig->importNames();
    $rectorConfig->importShortClasses();

    // register a single rule
    $rectorConfig->rule(InlineConstructorDefaultToPropertyRector::class);

    // define sets of rules
    $rectorConfig->sets([
        LevelSetList::UP_TO_PHP_81,
        SetList::CODING_STYLE,
        SetList::EARLY_RETURN,
        // SymfonyLevelSetList::UP_TO_SYMFONY_54 lives in rector/symfony since rector 2.0;
        // re-add it after `composer require --dev rector/symfony:^2.0`
    ]);
};
