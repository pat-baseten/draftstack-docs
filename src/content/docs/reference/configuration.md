---
title: Configuration
description: Complete reference for all configuration options.
---

## Site configuration

The site is configured in `astro.config.mjs`. The Starlight integration accepts the following options:

### `title`

**Type:** `string`

The site title displayed in the header and browser tab.

### `sidebar`

**Type:** `SidebarItem[]`

Defines the navigation sidebar. Each item is either a link or a group:

```js
sidebar: [
  {
    label: 'Section Name',
    items: [
      { label: 'Page Title', slug: 'section/page' },
    ],
  },
  {
    label: 'Auto Section',
    autogenerate: { directory: 'auto-section' },
  },
],
```

### `social`

**Type:** `SocialLink[]`

Social links displayed in the site header.

```js
social: [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/...' },
]
```

### `customCss`

**Type:** `string[]`

Paths to custom CSS files to load on every page.

## Page frontmatter

Every `.md` or `.mdx` file supports the following frontmatter fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | Page title |
| `description` | `string` | No | Short description for SEO and search |
| `template` | `"doc" \| "splash"` | No | Page layout template |
| `sidebar` | `object` | No | Override sidebar behavior for this page |
| `tableOfContents` | `boolean \| object` | No | Configure or disable the table of contents |
| `hero` | `object` | No | Hero section (splash pages only) |

## Environment variables

| Variable | Description |
|---|---|
| `SITE_URL` | Base URL for canonical links and sitemap |
| `BASE_PATH` | Subpath if docs are not at the domain root |
