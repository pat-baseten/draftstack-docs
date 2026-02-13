---
title: Project structure
description: Understand how the Draftstack project is organized.
---

## Directory layout

```
draftstack-docs/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── assets/          # Optimized images (processed by Astro)
│   ├── content/
│   │   └── docs/        # Documentation pages (.md / .mdx)
│   │       ├── getting-started/
│   │       ├── guides/
│   │       └── reference/
│   ├── styles/
│   │   └── custom.css   # Theme customization
│   └── content.config.ts
├── astro.config.mjs     # Site and sidebar configuration
├── package.json
└── tsconfig.json
```

## Key files

### `astro.config.mjs`

The main configuration file. Controls the site title, social links, sidebar navigation, and any Astro integrations.

### `src/content/docs/`

All documentation pages live here. The file path determines the URL:

| File path | URL |
|---|---|
| `src/content/docs/index.mdx` | `/` |
| `src/content/docs/getting-started/quickstart.md` | `/getting-started/quickstart/` |
| `src/content/docs/guides/deploy-your-model.md` | `/guides/deploy-your-model/` |

### `src/styles/custom.css`

Override Starlight's default CSS variables to customize colors, fonts, and spacing. See the [Starlight theming docs](https://starlight.astro.build/guides/css-and-tailwind/) for all available variables.

### `public/`

Files in this directory are served as-is at the site root. Use it for favicons, `robots.txt`, or other static files that don't need processing.
