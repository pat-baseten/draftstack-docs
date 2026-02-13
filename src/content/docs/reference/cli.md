---
title: CLI commands
description: Reference for all available CLI commands.
---

All commands are run from the project root.

## Development

### `npm run dev`

Start the local development server with hot reload.

```bash
npm run dev
```

The site is available at `http://localhost:4321`. File changes are reflected immediately.

**Options:**

| Flag | Description |
|---|---|
| `--port <number>` | Use a custom port (default: 4321) |
| `--host` | Expose to network (listen on `0.0.0.0`) |

### `npm run build`

Generate a production-ready static build.

```bash
npm run build
```

Output is written to `./dist/`. This directory can be deployed to any static hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

### `npm run preview`

Serve the production build locally for testing.

```bash
npm run preview
```

## Utilities

### `npx astro check`

Run TypeScript and content diagnostics.

```bash
npx astro check
```

### `npx astro add <integration>`

Add an Astro integration (React, Tailwind, etc.).

```bash
npx astro add react
npx astro add tailwind
```
