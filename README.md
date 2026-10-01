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