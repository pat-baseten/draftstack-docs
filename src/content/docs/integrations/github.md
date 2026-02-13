---
title: GitHub
description: Monitor repositories and push documentation PRs through the DraftStack GitHub App.
---

GitHub is the primary integration for DraftStack. It serves two roles: monitoring code repositories for merged PRs, and delivering documentation updates as draft pull requests.

## Setup

1. Go to **Settings > Integrations > GitHub**
2. Click **Install GitHub App**
3. Select the GitHub organization and repositories to grant access to
4. DraftStack requests read access to code and pull requests, and write access to create PRs in documentation repositories

## Monitored repositories

After installation, add repositories to a project. DraftStack listens for `pull_request.closed` webhooks on monitored repos and triggers the pipeline when a PR merges into the configured branch (default: `main`).

### Branch configuration

By default, DraftStack watches the `main` branch. To monitor a different branch:

1. Open the project settings
2. Under **Trigger branch**, select the branch to watch

## Documentation repositories

When a suggestion targets a GitHub docs repo, approving it opens a draft PR with:

- A descriptive title referencing the source code PR
- The generated Markdown changes as a diff
- A link back to the DraftStack suggestion for context

### Supported docs frameworks

DraftStack generates standard Markdown. It works with any docs framework that uses Markdown or MDX files:

- Astro / Starlight
- Docusaurus
- MkDocs
- GitBook
- VitePress
- Hugo

## Permissions

| Permission | Scope | Purpose |
|---|---|---|
| Repository contents | Read | Fetch diffs and file content |
| Pull requests | Read / Write | Read merged PRs, create draft PRs |
| Webhooks | Read | Receive merge events |
