---
title: Notion
description: Sync code changes to Notion pages, databases, and wikis.
---

Connect a Notion workspace so DraftStack can keep internal documentation, runbooks, and wikis in sync with your codebase.

## Setup

1. Go to **Settings > Integrations > Notion**
2. Click **Connect Notion workspace**
3. Authorize DraftStack to access the pages and databases you want to keep in sync
4. In your project settings, add Notion pages as knowledge sources

## How it works

When the pipeline identifies a Notion page that needs updating, DraftStack:

1. Reads the current page content via the Notion API
2. Generates block-level edits targeting only the affected sections
3. Delivers a suggestion to your inbox showing the current vs. proposed content
4. On approval, applies the edits directly to the Notion page

## Supported content types

- **Pages** — standard Notion pages with text, headings, lists, code blocks, and callouts
- **Database entries** — update properties and page content within Notion databases
- **Wiki pages** — pages inside Notion's wiki feature

## Mapping code to Notion pages

In your project settings, map code paths or components to specific Notion pages:

| Code pattern | Notion target |
|---|---|
| `src/api/**` | API Reference (Notion page) |
| `config/**` | Configuration Runbook (Notion page) |
| `src/auth/**` | Authentication Guide (Notion database) |

DraftStack also uses semantic analysis to discover relevant pages even without explicit mappings.

## Limitations

- Notion API rate limits apply (3 requests/second per integration)
- Embedded databases and linked databases are read-only
- Page-level permissions in Notion are respected — DraftStack can only edit pages it has access to
