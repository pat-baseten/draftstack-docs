---
title: Suggestions and inbox
description: Review, edit, and approve AI-generated knowledge updates.
---

Every update DraftStack generates becomes a **suggestion**. Suggestions are delivered to your inbox, where reviewers can inspect, edit, and approve them before anything is published.

## Anatomy of a suggestion

Each suggestion contains:

- **Source** — the merged PR that triggered the pipeline
- **Target** — the knowledge source being updated (e.g., a docs page, a Notion page, a Linear ticket)
- **Reasoning** — why DraftStack thinks this change is needed
- **Diff** — a side-by-side preview showing the proposed edit against the current content
- **Confidence** — how certain the model is that this update is correct

## Inbox workflow

The inbox is the central place for reviewing suggestions. Filter by:

- Project
- Knowledge source type (GitHub, Notion, Linear)
- Status (pending, approved, dismissed, edited)
- Date range

### Approve

Click **Approve** to push the update directly to the target:

- GitHub docs: opens a draft PR in the documentation repository
- Notion: applies block-level edits to the target page
- Linear: updates the ticket description or adds a comment

### Edit

Click **Edit** to modify the suggestion before approving. The editor shows the proposed content alongside the original. You can also send the suggestion back to the AI with feedback — DraftStack will regenerate based on your notes.

### Dismiss

Click **Dismiss** if the suggestion is not needed. Dismissed suggestions are archived with an optional reason, which helps the model learn over time.

## Batch actions

Select multiple suggestions to approve or dismiss in bulk. Useful after large releases that touch many knowledge sources at once.

## Notifications

When new suggestions are ready, DraftStack can notify your team via [Slack](/integrations/slack/). Configure notification channels per project in your team settings.
