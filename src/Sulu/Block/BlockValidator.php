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
 * - Block types that do not belong to the page template's schema family
 *
 * This validation runs BEFORE attempting XML writes, providing clear error
 * messages to MCP clients. Validation is done here (not in BlockWriter)
 * because PageService needs to return errors before any DB operations.
 *
 * @see BlockTypeRegistry For block type definitions
 * @see PageService::addBlock() Where validation is called
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
    public function validate(array $block, string $family = BlockTypeRegistry::FAMILY_TAILWIND): array
    {
        $errors = [];
        $type = $block['type'] ?? null;

        // Check block type is provided
        if ($type === null) {
            $errors[] = "Block type is required";
            return ['valid' => false, 'errors' => $errors];
        }

        // Check block type exists
        if (!$this->registry->hasType($type, $family)) {
            $known = $this->registry->getAllTypes($family);
            $knownTypes = implode(', ', array_slice($known, 0, 10))
                . (count($known) > 10 ? '...' : '');

            // A type that exists in the OTHER family is the common mistake: adding a tailwind
            // block (faq, headline-paragraphs, ...) to a training-detail page. There is no
            // templates/includes/training-detail/blocks/<type>.html.twig for those, so a
            // published page carrying one renders a 500.
            if ($this->registry->getSchemaForRead($type, $family) !== null) {
                $errors[] = "Block type '{$type}' is not available on this page's template "
                    . "(schema family '{$family}'). Allowed types: {$knownTypes}";
            } else {
                $errors[] = "Unknown block type '{$type}'. Known types include: {$knownTypes}";
            }

            return ['valid' => false, 'errors' => $errors];
        }

        $schema = $this->registry->getSchema($type, $family);
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
    public function validateWithMessage(array $block, string $family = BlockTypeRegistry::FAMILY_TAILWIND): ?string
    {
        $result = $this->validate($block, $family);
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
    public function getSuggestedFields(string $type, string $family = BlockTypeRegistry::FAMILY_TAILWIND): ?array
    {
        return $this->registry->getSchema($type, $family);
    }

    /**
     * Check if a block type exists.
     */
    public function isValidType(string $type, string $family = BlockTypeRegistry::FAMILY_TAILWIND): bool
    {
        return $this->registry->hasType($type, $family);
    }

    /**
     * Get the correct nested key for a block type.
     *
     * Helps avoid common mistakes like using 'items' instead of 'faqs' for FAQ blocks.
     */
    public function getNestedKey(string $type, string $family = BlockTypeRegistry::FAMILY_TAILWIND): ?string
    {
        return $this->registry->getNestedName($type, $family);
    }
}
