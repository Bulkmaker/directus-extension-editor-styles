# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Directus endpoint extension that serves CSS styles for WYSIWYG editors. Provides pre-defined CSS classes for image formatting that can be applied via rich text editor toolbar buttons.

## Build & Deploy

```bash
cd directus-extentions-original/editor-styles
npm install
npm run build
./deploy.sh  # Copies to docker/directus/extensions/ and restarts Directus
```

## How It Works

1. Exposes endpoint: `GET /editor-styles/styles.css`
2. Returns CSS with image formatting classes
3. Cache-Control header set for 24 hours
4. Intended to be loaded by TinyMCE/WYSIWYG editors via `content_css` option

## Available CSS Classes

### Image Classes

| Class | Description |
|-------|-------------|
| `.full-width` | Stretch image to 100% width |
| `.img-responsive` | Max-width 100%, auto height |
| `.shadow` | Box shadow with border-radius |
| `.border` | Border with padding |
| `.float-left` | Float left with margin |
| `.float-right` | Float right with margin |
| `.center` | Center block element |

### Usage in TinyMCE

```javascript
// In Directus WYSIWYG field options
{
  content_css: '/editor-styles/styles.css',
  // ...
}
```

## File Structure

```
editor-styles/
├── src/
│   └── index.ts      # Endpoint definition with embedded CSS
├── dist/             # Build output
├── package.json
├── tsconfig.json
├── deploy.sh         # Build & deploy script
└── CLAUDE.md
```

## Dependencies

- `@directus/extensions-sdk` — Directus extension framework

## Technical Details

- Type: Endpoint extension
- Route: `/editor-styles/styles.css`
- Response: `text/css`
- Caching: `public, max-age=86400` (24h)

## Adding New Styles

Edit `src/index.ts` and add CSS classes to the `editorStyles` template literal. Then rebuild and deploy:

```bash
./deploy.sh
```
