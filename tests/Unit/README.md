# Unit Tests for AI Commands

This directory contains unit tests for the AI content generation commands in Sulu CMS.

## Structure

- `AICommandTestCase.php` - Base test class with common mocks and utilities
- `QuickGenerateCommandTest.php` - Unit tests for the quick generation command
- `InteractiveGenerateCommandTest.php` - Unit tests for the interactive generation command  
- `GenerateCommandTest.php` - Unit tests for the advanced generation command

## Running Unit Tests

Run all unit tests:
```bash
vendor/bin/phpunit -c phpunit-unit.xml
```

Run specific test file:
```bash
vendor/bin/phpunit tests/Unit/Command/AI/QuickGenerateCommandTest.php
```

Run with coverage:
```bash
vendor/bin/phpunit -c phpunit-unit.xml --coverage-html coverage/
```

## Test Coverage

The unit tests focus on testing individual methods in isolation:

### Tested Components

1. **Command Configuration**
   - Command names, descriptions, arguments, options
   - Default values and validation

2. **Content Processing Methods**
   - `createAnalysisPrompt()` - Prompt generation for analysis
   - `createContentPrompt()` - Prompt generation for content creation
   - `parseContentToSuluBlocks()` - Content parsing and structuring
   - `generateHeadline()` - Headline extraction and generation
   - `convertToPagePath()` - URL/path conversion

3. **Content Transformation**
   - Structured JSON to Sulu blocks
   - Plain text to Sulu blocks
   - Headline handling (custom vs auto-generated)

4. **Validation Logic**
   - Temperature bounds checking (0.1 - 1.0)
   - Format validation (seo|technical|tutorial)
   - Required argument validation

### What's NOT Tested (Integration/Functional Tests)

- Actual AI API calls
- Database operations
- File I/O operations
- Full command execution workflows
- Sulu CMS integration

## Mock Strategy

Tests use PHPUnit mocks for:
- `AIPlatform` - AI service interface
- `Connection` - Database connection
- `AIResponse` - AI response objects
- `SymfonyStyle` - Console I/O

## Test Data

Common test data is provided by the base class:
- Format variations (seo, technical, tutorial)
- Locale variations (de, en)
- Temperature ranges (0.1 - 0.9)
- URL/path conversion examples