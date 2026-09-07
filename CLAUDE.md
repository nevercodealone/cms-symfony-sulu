# Development Environment Instructions

## DDEV Usage
Always use `ddev exec` for all commands when working in this project. Do not run commands directly on the host system.

Example:
- Instead of: `composer remove package`
- Use: `ddev exec composer remove package`

This ensures all commands run within the proper development environment.

## Git Usage
Always use git commands from the local system, NOT from within DDEV container.

Example:
- Instead of: `ddev exec git status`
- Use: `git status`

This ensures proper global gitignore rules and local git configuration are respected.

## Commit Style
- Simple one-liner commit messages, lowercase, no conventional commit prefixes
- No co-author lines
- Group all related files in a single commit

## CSS / Tailwind Conventions
- Use ONLY official Tailwind responsive utilities: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px)
- NEVER define custom `screens` in `tailwind.config.js` — no custom breakpoints
- Use Tailwind mobile-first responsive utilities (e.g., `hidden xl:block`, `xl:hidden`)
- No custom `@media` queries for responsive visibility — always use Tailwind responsive utilities
- Custom CSS is only for animations, transitions, and complex effects that Tailwind cannot express

## Sulu Field Types

All field-type rules are defined in exactly one place:
`App\Sulu\Block\BlockTypeRegistry::FIELD_TYPES_RULE`, served live in the
`sulu_pages` tool description (FIELD TYPES section) and via `list_block_types`.
This file does not restate them — read them there.

## copy_page: Media & Excerpt Preservation

`copy_page` preserves ALL content from the source page:
- Block media references (images, image) are copied with their media IDs and displayOption
- Excerpt title, description, and image are inherited from source unless explicitly overridden
- Media IDs are shared references — no media files are duplicated
- Nested items in blocks (faqs, items, rows, cards, flags) are fully preserved

## Environment Variables

Three-layer flow: GitLab CI/CD vars → `docker-compose.conversis.yml` `webserver.environment:` → `deploy/entrypoint.sh` writes to `/var/www/html/.env`.

Do NOT forward vars in `.gitlab-ci.yml` `variables:` blocks — that causes literal `$VARNAME` strings when CI/CD vars are missing. Let them auto-propagate like `DB_HOST` and `GEMINI_API_KEY`.

See `docs/env-vars.md` for the full checklist, var registry, and a `DB_HOST` trace.