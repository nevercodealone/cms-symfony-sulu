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

## Sulu Field Types: Rich Text vs Plain Text

### CRITICAL: Most fields are plain text — NEVER use HTML tags in them

**Rich-text fields (HTML required — use `<p>`, `<strong>`, `<a>`):**

| Field | Type | Blocks |
|-------|------|--------|
| `description` | text_editor | 25+ blocks (hero, feature, table, cta-button, etc.) |
| `descriptiontwo` | text_editor | introduction |
| `code` | text_editor | headline-paragraphs nested code items |
| `html` | raw HTML | html-raw (iframes, embeds) |

**Plain-text fields (NEVER use HTML tags):**

ALL other fields: `headline`, `subline`, `text`, `textone`, `texttwo`, `buttonText`,
`buttonTextTwo`, `title`, `linkText`, `badgeText`, `footerText`, `footerButtonText`,
`ctaText`, `ctaButtonText`, `columnheader1/2/3`, `cell1/2/3`, `language`, `playlistid`,
`url`, `urltwo`, `seoTitle`, `seoDescription`, `excerptTitle`, `excerptDescription`

FAQ `subline` is plain text — confirmed: XML type `text_line`, Twig renders without `|raw`.

**Why:** All 33 Twig templates render plain-text fields auto-escaped (no `|raw` filter).
HTML tags in plain-text fields appear literally as `<p>...</p>` on the website.

## copy_page: Media & Excerpt Preservation

`copy_page` preserves ALL content from the source page:
- Block media references (images, image) are copied with their media IDs and displayOption
- Excerpt title, description, and image are inherited from source unless explicitly overridden
- Media IDs are shared references — no media files are duplicated
- Nested items in blocks (faqs, items, rows, cards, flags) are fully preserved