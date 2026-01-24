# Creating New Tailwind Blocks in Sulu

## File Structure

```
config/templates/includes/tailwind/
├── blocks.xml                    # Central registry - add xi:include here
└── blocks/
    └── {block-name}.xml          # Block definition (schema)

templates/includes/tailwind/blocks/
└── {block-name}.html.twig        # Block template (rendering)
```

## Step 1: Create XML Definition

Location: `config/templates/includes/tailwind/blocks/{block-name}.xml`

```xml
<properties xmlns="http://schemas.sulu.io/template/template"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://schemas.sulu.io/template/template http://schemas.sulu.io/template/template-1.0.xsd">
    <block name="blocks" default-type="{block-name}">
        <types>
            <type name="{block-name}">
                <meta>
                    <title>Block Title</title>
                </meta>
                <properties>
                    <!-- Add properties here -->
                </properties>
            </type>
        </types>
    </block>
</properties>
```

### Common Property Types

```xml
<!-- Text input -->
<property name="headline" type="text_line">
    <meta><title>Headline</title></meta>
</property>

<!-- Rich text editor -->
<property name="description" type="text_editor">
    <meta><title>Description</title></meta>
</property>

<!-- Single image -->
<property name="image" type="media_selection" maxOccurs="1">
    <meta><title>Image</title></meta>
    <params><param name="types" value="image"/></params>
</property>

<!-- URL field -->
<property name="url" type="url">
    <meta><title>URL</title></meta>
</property>

<!-- Page link -->
<property name="pageLink" type="single_page_selection">
    <meta><title>Page</title></meta>
</property>

<!-- Nested items (repeatable) -->
<block name="items" default-type="item" minOccurs="0">
    <meta><title>Items</title></meta>
    <types>
        <type name="item">
            <meta><title>Item</title></meta>
            <properties>
                <!-- item properties -->
            </properties>
        </type>
    </types>
</block>
```

## Step 2: Register in blocks.xml

Location: `config/templates/includes/tailwind/blocks.xml`

Add inside `<types>`:

```xml
<xi:include href="blocks/{block-name}.xml"
            xpointer="xmlns(sulu=http://schemas.sulu.io/template/template)xpointer(/sulu:properties/sulu:block/sulu:types/sulu:type)"/>
```

## Step 3: Create Twig Template

Location: `templates/includes/tailwind/blocks/{block-name}.html.twig`

**IMPORTANT:** Filename must match XML type name exactly!

### Template Skeleton

```twig
<!-- {block-name}.html.twig -->
<div class="px-4 mx-auto max-w-7xl">
    {% if content.headline is defined and content.headline is not empty %}
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {{ content.headline }}
        </h2>
    {% endif %}

    {% if content.description is defined and content.description is not empty %}
        <div class="mt-4 text-lg text-gray-800">
            {{ content.description|raw }}
        </div>
    {% endif %}
</div>
<!-- end {block-name}.html.twig -->
```

### Available Context Variables

```twig
content        {# Block data from XML properties #}
loopIndex      {# Position in page (1-based) #}
isFirstHeadline {# Boolean for h1/h2 decision #}
headlines      {# All headline blocks on page #}
extension      {# Page extension data (SEO, etc.) #}
```

## Brand Colors

```
nca: #59d814        {# Primary brand green #}
green-800           {# Dark green for text/accents #}
green-900           {# Darkest green for buttons/emphasis #}
gray-800            {# Primary text #}
gray-900            {# Headings #}
slate-100           {# Light backgrounds #}
white               {# Card backgrounds #}
```

## Best Practices

### 1. Null Checks
```twig
{# Always check before accessing nested properties #}
{% if content.image[0] is defined and content.image[0] is not empty %}
    {% set source = content.image[0].thumbnails['content-full.webp'] %}
{% endif %}
```

### 2. Heading Hierarchy
```twig
{% if loopIndex == 1 and isFirstHeadline %}
    <h1 class="...">{{ content.headline }}</h1>
{% else %}
    <h2 class="...">{{ content.headline }}</h2>
{% endif %}
```

### 3. External Links
```twig
<a href="{{ content.url }}"
   target="_blank"
   rel="noopener noreferrer"
   title="Link to {{ content.buttonText }}">
```

### 4. Button Styling
```twig
class="inline-flex justify-center rounded-md py-2 px-4
       text-base font-semibold tracking-tight shadow-sm
       bg-green-900 text-white
       hover:bg-green-800
       focus:outline-none focus-visible:outline-2
       focus-visible:outline-offset-2 focus-visible:outline-green-800
       active:bg-green-700 active:text-white/80
       disabled:opacity-30"
```

### 5. Responsive Grid
```twig
class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
```

### 6. Image Formats
Available formats (check `config/image-formats.xml`):
- `content-full.webp`
- `hero-newsletter`
- `team`
- `logos`
- `heroslider`
- `400x400`

## Cache Clear

After creating new blocks:

```bash
ddev exec bin/console cache:clear
ddev exec bin/console sulu:document:initialize
```
