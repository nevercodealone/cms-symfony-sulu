# Template Development Guide

## Block Creation Checklist
1. Twig template in `templates/includes/tailwind/blocks/`
2. XML config in `config/templates/includes/tailwind/blocks/`
3. Include in `config/templates/includes/tailwind/blocks.xml`
4. Register in `src/Sulu/Block/BlockTypeRegistry.php` (DESCRIPTIONS, EXAMPLES, SCHEMAS)
5. Add to test data provider in `tests/Unit/Sulu/Block/BlockTypeRegistryTest.php`
6. Build assets: `ddev exec npx encore production`

## Sulu Data Access
- Excerpt: `targetPage.extension.excerpt` (title, description, images)
- SEO: `targetPage.extension.seo` (title, description)
- Content: `targetPage.content.title`
- Load page: `sulu_content_load(content.page)`

## Design Rules
- Brand color: `text-nca` / `bg-nca` / `border-nca` = `#166534` (green-800)
- Cards: `bg-gray-50 rounded-2xl`, hover: `hover:border-nca/30 hover:shadow-lg`
- No animations on load — causes layout shifts on other elements
- Images: constrain width (`md:w-72 lg:w-80`), never full-width for teasers
- Hover-only transitions are fine, entrance animations are not

## Field Types
- Plain text: `headline`, `subline`, `text`, `buttonText` — never use HTML
- Rich text: `description` (text_editor) — use `<p>`, `|raw` in Twig
- See CLAUDE.md for full list

## Commands
- All commands via `ddev exec` except git
- Tests: `ddev exec vendor/bin/phpunit tests/Unit/`
- PHPStan: `ddev exec vendor/bin/phpstan analyse`
- Assets: `ddev exec npx encore production`

## Commit Style
- Single file per commit, no co-author
- Assets (CSS + public/build/) as one commit with message "Build assets"
- Short imperative messages

## PHPStan
- `getSchema()` return type must include all optional keys: `encoding`, `nestedEncoding`, `nestedType`
- Run after every Registry change
