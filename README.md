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

## AI Content Generation System

This project includes an AI-powered content generation system that integrates with Sulu CMS to automatically create and manage content using Google's Gemini AI.

### Features

- **Three CLI tools** for different use cases
- **Automatic URL analysis** to extract relevant information
- **German-optimized content** for PHP/Symfony developers
- **Full Sulu integration** with proper block creation
- **Activity logging** for complete audit trail
- **Support for both URL and CMF path inputs**

### CLI Tools

#### 1. NCA Quick (Fast One-Liner)
Quick content generation with minimal configuration.

```bash
# Basic usage
ddev exec php nca-quick.php "<source-url>" "<prompt>"

# With options
ddev exec php nca-quick.php "https://github.com/symfony/symfony" "Symfony News" \
  --page="/cmf/example/contents/blog" \
  --position=2 \
  --format=seo \
  --live

# Dry run (preview only)
ddev exec php nca-quick.php "https://example.com" "Your prompt" --dry-run
```

Options:
- `--page=PATH` - Sulu page path (default: /cmf/example/contents/blog/quick-ai)
- `--position=N` - Insert position (default: 2)
- `--format=FORMAT` - Content format: seo|technical|tutorial (default: seo)
- `--headline='TEXT'` - Custom headline
- `--dry-run` - Preview only
- `--live` - Execute immediately (skip confirmations)

#### 2. AI Content Generator (Advanced)
Full-featured tool with extensive options and interactive approval.

```bash
# Basic usage
ddev exec php ai_content_generator_gemini.php "<page-path>" "<url>" "<prompt>"

# With URL instead of CMF path
ddev exec php ai_content_generator_gemini.php \
  "https://sulu-never-code-alone.ddev.site/de/blog/my-article" \
  "https://example.com" \
  "Create content about..."

# With all options
ddev exec php ai_content_generator_gemini.php \
  "/cmf/example/contents/tutorials/symfony" \
  "https://symfony.com/doc/current" \
  "Symfony Tutorial für Einsteiger" \
  --position=2 \
  --headline="Symfony 6 Tutorial" \
  --format=tutorial \
  --temperature=0.5
```

Options:
- `--position=N` - Position to insert content (default: 2)
- `--locale=LOCALE` - Target locale (default: de)
- `--headline='TEXT'` - Custom headline
- `--dry-run` - Preview only
- `--temperature=N` - AI creativity 0.1-1.0 (default: 0.3)
- `--format=FORMAT` - Content format: seo|technical|tutorial

#### 3. NCA AI Assistant (Interactive)
Step-by-step interactive assistant for guided content generation.

```bash
ddev exec php nca-ai-assistant.php
```

The assistant will prompt you for:
1. Page URL or CMF path
2. Source URL to analyze
3. Your content prompt
4. Position (optional)
5. Review and approval

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

### Architecture

- **AI Platform**: Abstraction layer for multiple AI providers
- **GeminiProvider**: Implementation for Google's Gemini AI
- **AIActivityLogger**: Direct database logging to Sulu's activity table
- **Dual storage support**: Handles both serialized and XML property formats


### Offical YouTube content creator for Browser Stack
For End-To-End testing, BrowserStack is utilized. Visit [BrowserStack](https://www.browserstack.com/) for more info.

### Feedback/Contribution
Feel free to give your feedback or to contribute!

### Who is behind this project?
This project is maintained by [nevercodealone.de](https://nevercodealone.de) and [TESTIFy.TEAM](https://www.testify.team/) and [Roland Golla](https://rolandgolla.de/).
