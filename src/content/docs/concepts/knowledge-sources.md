---
title: Knowledge sources
description: Every destination DraftStack can keep in sync with your code.
---

A knowledge source is any place your team stores information that should stay aligned with your codebase. DraftStack connects to multiple source types and generates targeted updates for each one.

## Supported sources

### GitHub documentation repositories

The most common target. DraftStack generates Markdown diffs and can open draft PRs directly in your docs repo. Supports any Markdown-based docs framework (Astro, Docusaurus, MkDocs, etc.).

**How updates are delivered:** Draft pull request in the target repository.

### Notion workspaces

Connect a Notion workspace to keep runbooks, API references, onboarding guides, and internal wikis in sync. DraftStack reads existing page structure and generates block-level edits.

**How updates are delivered:** Direct page edits or new page drafts, visible in your Notion workspace after approval.

### Linear projects

Link Linear projects so that when code changes affect a feature's spec or description, DraftStack updates the relevant tickets. Useful for keeping roadmap items and project briefs accurate.

**How updates are delivered:** Updated ticket descriptions or new comments with context.

### More sources (coming soon)

DraftStack is designed to be extensible. Future knowledge sources include:

- Confluence
- Google Docs
- Slack bookmarks and canvas
- Custom webhook targets

## Connecting a knowledge source

1. Go to **Settings > Knowledge sources**
2. Click **Add source**
3. Select the source type and authenticate
4. Choose which pages, databases, or projects to include

## Multi-source sync

A single code change can trigger updates across multiple knowledge sources simultaneously. For example, a new API endpoint might produce:

| Target | Update |
|---|---|
| Docs repo | New endpoint reference page |
| Notion API runbook | Updated authentication section |
| Linear API project | Comment on the tracking ticket |

Each target receives a separate suggestion in your inbox, so you can approve them independently.
