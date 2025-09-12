# Sulu CMS Project

This is the GitHub repository for the [nevercodealone.de](https://nevercodealone.de) project.

The project utilizes the Sulu CMS, a flexible Symfony content management system. Sulu provides a model-view-controller framework and a wide range of features including multilingual support and room for extension.

The project follows the best practices for web accessibility. Web accessibility ensures that the content is accessible on a wide range of devices and requires thoughtful and deliberate action to ensure no visitor is excluded.

## Development Environment
We use DDEV for our local development. DDEV is an open-source tool that uses Docker to build local development environments.

```bash
mkdir my-sulu-site && cd my-sulu-site
ddev config --project-type=php --docroot=public --upload-dirs=uploads --database=mysql:8.0
ddev start
ddev composer create sulu/skeleton
```
[DDEV docs quickstart Sulu section](https://github.com/ddev/ddev/blob/master/docs/content/users/quickstart.md#sulu)

## Building the Project

We employ Webpack for handling all front-end resources. JavaScript, Stylesheets, Images and other files are all managed by Webpack.

## Running The Project

After setting up DDEV and Webpack, follow below steps:

* Clone the project
* Run `ddev start`
* Navigate to the project url provided by DDEV in your web browser

## Running Webpack
Builds the project and watches for changes. This is the recommended way to develop.
```
npm run watch
```

Build the project assets for production.
```
npm run build
```

## Cypress.io website for End-To-End testing
We use custom and base tests made my [TESTIFy.TEAM](https://www.testify.team/). Visit [Cypress.io](https://www.cypress.io/) for more info.

## YouTube playlist with over 50 german tutorial videos.
Here is a great read on Symfony CMS Sulu:
[Roland Golla - YouTube Playlist](https://www.youtube.com/playlist?list=PLKrKzhBjw2Y_bsIrig7rNLCXgZyYGMRgH)

## AI Chat System

Interactive AI chatbot for YouTube video content queries.

### Commands

```bash
# Clear video index
ddev exec php bin/console app:video:clear-index

# Index videos from playlist
ddev exec php bin/console app:video:index [PLAYLIST_ID] --limit 100

# Test video search
ddev exec php bin/console app:video:query
```

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

### Migration from Standalone CLI

The old standalone PHP scripts have been replaced with Symfony console commands:

| Old Script | New Command | Notes |
|------------|-------------|-------|
| `nca-quick.php` | `ai:content:quick` | Same functionality, better integration |
| `ai_content_generator_gemini.php` | `ai:content:generate` | Enhanced with proper validation |
| `nca-ai-assistant.php` | `ai:content:interactive` | Improved user experience |

All functionality remains the same, but with better error handling, dependency injection, and Symfony integration.


### Offical YouTube content creator for Browser Stack
For End-To-End testing, BrowserStack is utilized. Visit [BrowserStack](https://www.browserstack.com/) for more info.

### Feedback/Contribution
Feel free to give your feedback or to contribute!

### Who is behind this project?
This project is maintained by [nevercodealone.de](https://nevercodealone.de) and [TESTIFy.TEAM](https://www.testify.team/) and [Roland Golla](https://rolandgolla.de/).
