---
title: How it works
description: The architecture behind DraftStack's knowledge sync pipeline.
---

DraftStack runs an automated pipeline every time a pull request merges in a monitored repository. The pipeline identifies what changed, determines which knowledge sources are affected, and generates targeted updates for each one.

## Pipeline overview

```
PR merged in GitHub
       │
       ▼
┌──────────────┐
│   Ingestion  │  Fetch diff, PR description, linked issues
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Analysis   │  LLM determines intent, impact, and scope
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Mapping    │  Match changes to affected knowledge sources
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Generation  │  Draft updates for each target (docs, Notion, Linear)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Delivery   │  Suggestions appear in inbox for review
└──────────────┘
```

## Stage 1: Ingestion

When a PR merges, DraftStack receives a webhook from GitHub. It fetches:

- The full diff of changed files
- The PR title, description, and comments
- Linked Linear tickets (if the Linear integration is connected)
- Commit messages

This gives the pipeline rich context about *what* changed and *why*.

## Stage 2: Analysis

The ingested data is sent to an LLM pipeline hosted on [Baseten](https://baseten.co). The model classifies the change:

- **Documentation-relevant** — API surface changes, config changes, new features, behavior changes, deprecations
- **Skip** — internal refactors, test-only changes, dependency bumps with no user-facing impact

Skipped PRs are logged in the [activity log](/dashboard/activity-log/) with the reasoning.

## Stage 3: Mapping

For relevant changes, DraftStack identifies which knowledge sources are affected. A single code change can trigger updates across multiple targets:

| Code change | Affected sources |
|---|---|
| New API endpoint | Docs repo, Notion API reference, Linear API project |
| Config format change | Docs repo, Notion runbooks |
| Feature deprecation | Docs repo, Notion changelog, Linear roadmap |

## Stage 4: Generation

For each affected knowledge source, DraftStack generates a targeted update:

- **GitHub docs** — a Markdown diff ready to open as a draft PR
- **Notion pages** — block-level edits to existing pages or new page drafts
- **Linear tickets** — updated descriptions or new comments with context

Generation uses your team's [custom style guide](/integrations/style-guides/) if one is configured.

## Stage 5: Delivery

Each generated update becomes a **suggestion** in your [inbox](/dashboard/inbox/). Suggestions include full context: the source PR, the analysis reasoning, and a preview of the proposed change. From there, reviewers can approve, edit, or dismiss.

## Reliability

Every pipeline run is recorded in the [activity log](/dashboard/activity-log/). Failed runs include error details and can be retried. The pipeline is idempotent — rerunning for the same PR produces the same suggestions.
