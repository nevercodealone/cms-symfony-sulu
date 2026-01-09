# Never Code Alone (NCA) Backend
A fully functional Sulu skeleton CMS with extended features for running Never Code Alone platform.

## DDEV local Docker setup

```shell
# Setup
ddev start && ddev exec composer install
ddev create-db && ddev php bin/console sulu:build dev --no-interaction

# Admin access
open https://sulu-never-code-alone.ddev.site/admin

# Create new admin
ddev php bin/console sulu:security:user:create --no-interaction

# Frontend
ddev launch

# Remove Setup
ddev delete --omit-snapshot
```

## DB export and Import

```shell
# Export
ddev export-db >backup.sql.gz

# Import 
ddev import-db --file=backup.sql.gz
```

## Prod deploy and requirements
PHP >= 8.2
Mysql >= 8.0
Composer
NPM

```shell
composer install --no-dev --optimize-autoloader --no-scripts
bin/console cache:clear
npm install
npm run build
```

## Local deployment for testing

```shell
bin/console server:run

## or php builtin server
php -S localhost:8000 -t public
```

## YouTube playlist with over 50 german tutorial videos.
Here is a great read on Symfony CMS Sulu:
[Roland Golla - YouTube Playlist](https://www.youtube.com/playlist?list=PLKrKzhBjw2Y_bsIrig7rNLCXgZyYGMRgH)

## AI Chat System

Interactive AI chatbot with two knowledge sources: YouTube videos and Sulu CMS website content.

### Commands

```bash
# Index YouTube videos from playlist
ddev exec php bin/console app:video:index [PLAYLIST_ID] --limit 100

# Index Sulu CMS content into ChromaDB
ddev exec php bin/console app:index:sulu-content

# Index with options
ddev exec php bin/console app:index:sulu-content --locale=en
ddev exec php bin/console app:index:sulu-content --all-locales
ddev exec php bin/console app:index:sulu-content --webspace=example --limit=500

# Clear video index
ddev exec php bin/console app:video:clear-index

# Test video search
ddev exec php bin/console app:video:query
```

### Chatbot Search Tools

The AI chatbot uses two search tools:
- `video_search` - Searches YouTube videos from Never Code Alone
- `content_search` - Searches website content from nevercodealone.de

### Environment Variables

```env
OPENAI_API_KEY=your-api-key-here
CHROMADB_HOST=chromadb
CHROMADB_PORT=8000
CHROMADB_DATABASE=default_database
```

## AI Content Generation System

This project includes an AI-powered content generation system that integrates with Sulu CMS to automatically create and manage content using Google's Gemini AI. The system is built as Symfony console commands for proper integration with the framework.

### Features

- **Three Symfony console commands** for different use cases
- **Automatic URL analysis** to extract relevant information
- **German-optimized content** for PHP/Symfony developers
- **Full Sulu integration** with proper block creation
- **Activity logging** for complete audit trail
- **Support for both URL and CMF path inputs**
- **Proper Symfony dependency injection** and error handling

### Console Commands

#### 1. Quick Content Generation
Fast content generation with minimal configuration.

```bash
# Basic usage
ddev exec bin/console ai:content:quick "<source-url>" "<prompt>"

# With options
ddev exec bin/console ai:content:quick "https://github.com/symfony/symfony" "Symfony News" \
  --page="/cmf/example/contents/blog" \
  --position=2 \
  --format=seo \
  --live

# Dry run (preview only)
ddev exec bin/console ai:content:quick "https://example.com" "Your prompt" --dry-run
```

**Options:**
- `-p, --page=PATH` - Sulu page path (default: /cmf/example/contents/blog/quick-ai)
- `--position=N` - Insert position (default: 2)
- `-f, --format=FORMAT` - Content format: seo|technical|tutorial (default: seo)
- `--headline=TEXT` - Custom headline
- `--dry-run` - Preview only, do not save
- `--live` - Execute immediately without confirmation

#### 2. Advanced Content Generation
Full-featured tool with extensive options and interactive approval workflow.

```bash
# Basic usage
ddev exec bin/console ai:content:generate "<page-path>" "<url>" "<prompt>"

# With URL instead of CMF path
ddev exec bin/console ai:content:generate \
  "https://sulu-never-code-alone.ddev.site/de/blog/my-article" \
  "https://example.com" \
  "Create content about..."

# With all options
ddev exec bin/console ai:content:generate \
  "/cmf/example/contents/tutorials/symfony" \
  "https://symfony.com/doc/current" \
  "Symfony Tutorial für Einsteiger" \
  --position=2 \
  --headline="Symfony 6 Tutorial" \
  --format=tutorial \
  --temperature=0.5
```

**Options:**
- `--position=N` - Insert position (default: 2)
- `-l, --locale=LOCALE` - Target locale (default: de)
- `--headline=TEXT` - Custom headline
- `-t, --temperature=N` - AI creativity level 0.1-1.0 (default: 0.3)
- `-f, --format=FORMAT` - Content format: seo|technical|tutorial (default: seo)
- `--dry-run` - Preview only, do not save

#### 3. Interactive Content Generation
Step-by-step interactive assistant with guided input validation.

```bash
ddev exec bin/console ai:content:interactive
```

**Optional default options:**
- `-p, --page=PATH` - Default Sulu page path
- `--position=N` - Default insert position
- `-l, --locale=LOCALE` - Default locale
- `-f, --format=FORMAT` - Default format
- `-t, --temperature=N` - Default AI temperature
- `--dry-run` - Default to dry run mode

The interactive assistant will guide you through:
1. Target page configuration (path, position, locale)
2. Source URL input with validation
3. Content strategy selection (format, temperature)
4. Custom prompt input
5. Execution mode selection
6. Configuration review and approval

### Activity Logging

All AI-generated content is automatically logged to Sulu's activity system:

- **View in Sulu Admin**: Navigate to Settings → Activities
- **Activity format**: `"Page Title [AI: Gemini via tool-name]"`
- **Metadata tracked**: Source URL, prompt, AI provider, CLI tool, timestamp

Check recent AI activities:
```bash
ddev exec mysql -udb -pdb -Ddb -e \
  "SELECT * FROM ac_activities WHERE resourceTitle LIKE '%AI:%' ORDER BY timestamp DESC LIMIT 5;"
```

### Configuration

Set your Gemini API key in `.env.local`:
```env
GEMINI_API_KEY=your-api-key-here
GEMINI_MODEL=gemini-1.5-flash
```

### Getting Help

View available AI commands:
```bash
ddev exec bin/console list ai
```

Get detailed help for any command:
```bash
ddev exec bin/console ai:content:quick --help
ddev exec bin/console ai:content:generate --help
ddev exec bin/console ai:content:interactive --help
```

### Content Formats

- **SEO**: Optimized for search engines with keywords and structure
- **Technical**: In-depth technical content with code examples
- **Tutorial**: Step-by-step guides with practical examples

### Page Path Formats

Both formats are supported:
- **CMF Path**: `/cmf/example/contents/blog/my-page`
- **Full URL**: `https://sulu-never-code-alone.ddev.site/de/blog/my-page`

### Testing

Test the logging system:
```bash
ddev exec php test-direct-logging.php
```

Test a quick generation (dry run):
```bash
ddev exec bin/console ai:content:quick \
  "https://github.com/symfony/symfony" \
  "Erstelle einen deutschen Artikel über Symfony Features" \
  --dry-run
```

### Architecture

- **Symfony Console Commands**: Three specialized commands for different use cases
- **AI Platform**: Abstraction layer for multiple AI providers with dependency injection
- **GeminiProvider**: Implementation for Google's Gemini AI
- **AIActivityLogger**: Direct database logging to Sulu's activity table
- **Dual storage support**: Handles both serialized and XML property formats
- **Proper error handling**: Symfony console provides robust error handling and user feedback

### Migration Notes

| Old Script | New Command | Notes |
|------------|-------------|-------|
| `nca-quick.php` | `ai:content:quick` | Same functionality, better integration |
| `ai_content_generator_gemini.php` | `ai:content:generate` | Enhanced with proper validation |
| `nca-ai-assistant.php` | `ai:content:interactive` | Improved user experience |

All functionality remains the same, but with better error handling, dependency injection, and Symfony integration.

## MCP Server (Model Context Protocol)

AI-powered Sulu CMS content management via Claude. MCP allows Claude to read, create, update, and publish content blocks directly in Sulu.

### How It Works

1. **Bundle**: Uses `klapaudius/symfony-mcp-server` for MCP protocol handling
2. **Tool**: `SuluPagesTool` exposes page/block operations to Claude
3. **Service**: `PageService` handles PHPCR database operations
4. **OAuth**: Self-hosted OAuth 2.1 with PKCE for remote access (Claude Chat)

### Project Structure

```
src/
├── MCP/Tools/SuluPagesTool.php      # MCP tool interface
├── Sulu/Service/PageService.php      # PHPCR operations
├── Controller/McpOAuthController.php # OAuth endpoints
├── Service/McpOAuthService.php       # Token management
└── Entity/
    ├── McpAuthCode.php               # Auth code storage
    └── McpAccessToken.php            # Access token storage
```

### Available Actions

| Action | Description |
|--------|-------------|
| `list` | List pages under path prefix |
| `get` | Get page with blocks |
| `add_block` | Add content block |
| `update_block` | Update block content |
| `move_block` | Reorder blocks |
| `remove_block` | Delete block |
| `publish` / `unpublish` | Control page visibility |

### Local Development (Claude Code)

`.mcp.json` in project root:
```json
{
  "mcpServers": {
    "sulu-ddev": {
      "command": "ddev",
      "args": ["exec", "php", "bin/console", "mcp:server"]
    }
  }
}
```

### Remote Access (Claude Chat)

Connect to `https://your-domain.com/mcp` - OAuth discovery is automatic.

Required env vars:
```env
MCP_PROJECT_PASSWORD=your-secure-password
MCP_PROJECT_NAME="Project Name"
```

### Testing

Tests use mocked `Doctrine\DBAL\Connection` with sample PHPCR XML:

```bash
# Run MCP-related tests
ddev exec vendor/bin/phpunit tests/Unit/Sulu/Service/PageServiceTest.php
```

See `tests/Unit/Sulu/Service/PageServiceTest.php` for examples of testing block operations.

## Running Tests

Execute PHP unit tests:
```bash
ddev exec vendor/bin/phpunit
```

## Cache and Performance

Clear Symfony cache:
```bash
ddev exec bin/console cache:clear
```

Warm up cache:
```bash
ddev exec bin/console cache:warmup
```

## Documentation

- [Sulu Documentation](https://docs.sulu.io/)
- [Symfony Documentation](https://symfony.com/doc/current/index.html)
- [DDEV Documentation](https://ddev.readthedocs.io/)