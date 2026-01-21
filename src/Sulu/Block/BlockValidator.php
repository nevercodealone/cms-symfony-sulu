<?php

declare(strict_types=1);

namespace App\Sulu\Block;

/**
 * Validates block data before writing to PHPCR.
 *
 * Provides specific error messages for common issues like:
 * - Unknown block types
 * - Missing required fields
 * - Invalid nested item structure
 */
final class BlockValidator
{
    public function __construct(
        private BlockTypeRegistry $registry
    ) {
    }

    /**
     * Validate a block for adding/updating.
     *
     * @param array<string, mixed> $block
     * @return array{valid: bool, errors: array<string>}
     */
    public function validate(array $block): array
    {
        $errors = [];
        $type = $block['type'] ?? null;

        // Check block type is provided
        if ($type === null) {
            $errors[] = "Block type is required";
            return ['valid' => false, 'errors' => $errors];
        }

        // Check block type exists
        if (!$this->registry->hasType($type)) {
            $knownTypes = implode(', ', array_slice($this->registry->getAllTypes(), 0, 10)) . '...';
            $errors[] = "Unknown block type '{$type}'. Known types include: {$knownTypes}";
            return ['valid' => false, 'errors' => $errors];
        }

        $schema = $this->registry->getSchema($type);
        if ($schema === null) {
            return ['valid' => true, 'errors' => []]; // No schema = no validation
        }

        // Validate nested items if block type has them
        if (isset($schema['nested'])) {
            $nestedName = $schema['nested'];
            $nestedProperties = $schema['nestedProperties'] ?? [];

            if (isset($block[$nestedName])) {
                $items = $block[$nestedName];
                if (!is_array($items)) {
                    $errors[] = "Field '{$nestedName}' must be an array for block type '{$type}'";
                } else {
                    foreach ($items as $index => $item) {
                        if (!is_array($item)) {
                            $errors[] = "Item at index {$index} in '{$nestedName}' must be an object";
                            continue;
                        }

                        // Validate nested item has at least one expected property
                        $hasValidProperty = false;
                        foreach ($nestedProperties as $prop) {
                            if (isset($item[$prop])) {
                                $hasValidProperty = true;
                                break;
                            }
                        }

                        // Special case: headline-paragraphs items can have 'type' to indicate item type
                        if ($type === 'headline-paragraphs' && isset($item['type'])) {
                            $hasValidProperty = true;
                        }

                        if (!$hasValidProperty && !empty($nestedProperties)) {
                            $expectedProps = implode(', ', $nestedProperties);
                            $errors[] = "Item at index {$index} in '{$nestedName}' should have at least one of: {$expectedProps}";
                        }
                    }
                }
            }
        }

        return [
            'valid' => empty($errors),
            'errors' => $errors,
        ];
    }

    /**
     * Validate and return a user-friendly error message.
     *
     * @param array<string, mixed> $block
     */
    public function validateWithMessage(array $block): ?string
    {
        $result = $this->validate($block);
        if ($result['valid']) {
            return null;
        }
        return implode('; ', $result['errors']);
    }

    /**
     * Get suggested fields for a block type.
     *
     * @return array{properties: array<string>, nested?: string, nestedProperties?: array<string>}|null
     */
    public function getSuggestedFields(string $type): ?array
    {
        return $this->registry->getSchema($type);
    }

    /**
     * Check if a block type exists.
     */
    public function isValidType(string $type): bool
    {
        return $this->registry->hasType($type);
    }

    /**
     * Get the correct nested key for a block type.
     *
     * Helps avoid common mistakes like using 'items' instead of 'faqs' for FAQ blocks.
     */
    public function getNestedKey(string $type): ?string
    {
        return $this->registry->getNestedName($type);
    }
}
