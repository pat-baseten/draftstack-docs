---
title: Inbox
description: Your central feed for reviewing and acting on AI-generated suggestions.
---

The inbox is where all generated suggestions land. It's the primary workspace for technical writers and reviewers.

## Layout

The inbox shows a chronological list of suggestions, newest first. Each entry displays:

- **Status badge** — pending, approved, dismissed, or edited
- **Source PR** — the code change that triggered the suggestion, with a link to GitHub
- **Target** — which knowledge source the suggestion updates (and what type: GitHub, Notion, Linear)
- **Summary** — a one-line description of the proposed change
- **Timestamp** — when the suggestion was generated

Click any suggestion to expand the full detail view.

## Detail view

The detail view shows:

- **Reasoning** — why DraftStack thinks this update is needed
- **Diff** — side-by-side comparison of current content vs. proposed change
- **Confidence score** — the model's certainty that this suggestion is correct
- **Source context** — the PR diff, description, and linked issues

## Actions

### Approve

Pushes the update to the target knowledge source:

- GitHub: creates a draft PR
- Notion: applies edits to the page
- Linear: updates the ticket

### Edit

Opens the suggestion in an editor. Modify the proposed content, then approve the edited version. You can also click **Rework** to send feedback to the AI and regenerate.

### Dismiss

Archives the suggestion. Optionally add a reason (e.g., "not relevant", "already handled manually"). Dismissal reasons are used to improve future suggestions.

## Filters

Filter the inbox by:

- **Project** — show suggestions for a specific code repository
- **Target type** — GitHub, Notion, Linear
- **Status** — pending, approved, dismissed
- **Date range** — focus on recent or historical suggestions
- **Confidence** — show only high-confidence or low-confidence suggestions
