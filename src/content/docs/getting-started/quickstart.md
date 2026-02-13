---
title: Quickstart
description: Get Draftstack running locally in under two minutes.
---

## Prerequisites

- [Node.js](https://nodejs.org/) v20.17.0 or higher
- A package manager (npm, pnpm, or yarn)

## Install dependencies

```bash
npm install
```

## Start the dev server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. Changes to any `.md` or `.mdx` file will hot-reload automatically.

## Create a new page

Add a Markdown file to `src/content/docs/`:

```markdown
---
title: "My new page"
description: "A short description for search and SEO."
---

Your content here.
```

Then add it to the sidebar in `astro.config.mjs`:

```js
sidebar: [
  {
    label: 'My Section',
    items: [
      { label: 'My New Page', slug: 'my-section/my-new-page' },
    ],
  },
],
```

## Build for production

```bash
npm run build
```

The static output is written to `./dist/` and can be deployed to any static hosting provider.

## Preview the production build

```bash
npm run preview
```
