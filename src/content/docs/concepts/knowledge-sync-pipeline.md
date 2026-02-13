---
title: Knowledge sync pipeline
description: How DraftStack turns code changes into knowledge updates.
---

The knowledge sync pipeline is the core of DraftStack. It runs automatically on every merged PR and produces suggestions for updating connected knowledge sources.

## Pipeline triggers

The pipeline activates when:

- A pull request merges into a monitored branch (usually `main`)
- A manual re-run is triggered from the activity log

Each pipeline run is scoped to a single PR and a single project.

## Analysis model

DraftStack uses an LLM pipeline hosted on Baseten to analyze code changes. The model considers:

- **Diff content** — what lines changed and in which files
- **PR metadata** — title, description, labels, and review comments
- **Linked issues** — context from Linear tickets if the integration is active
- **Historical patterns** — what types of changes have produced doc updates before

The output is a structured assessment: which knowledge sources need updates, what kind of update (add, modify, deprecate, remove), and a confidence score.

## Filtering

Not every PR needs documentation. The pipeline filters out:

- Test-only changes
- Internal refactors with no user-facing impact
- Dependency version bumps
- CI/CD configuration changes

Filtering decisions are logged with reasoning in the activity log.

## Generation

For each affected knowledge source, a separate generation step produces a draft update. The generator is aware of:

- The target format (Markdown, Notion blocks, Linear descriptions)
- Your team's style guide and voice
- The existing content at the target location

Updates are scoped to the minimum necessary change. DraftStack does not rewrite entire pages — it targets specific sections.

## Delivery and lifecycle

Generated updates become suggestions with the following lifecycle:

```
Generated → Pending review → Approved / Dismissed
                  │
                  ▼
              Edited → Approved / Dismissed
```

Approved suggestions are pushed to their target knowledge source automatically.
