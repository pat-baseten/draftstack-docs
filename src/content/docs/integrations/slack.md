---
title: Slack
description: Get notified when new suggestions are ready or when pipeline runs fail.
---

Connect Slack for real-time notifications about DraftStack activity.

## Setup

1. Go to **Settings > Integrations > Slack**
2. Click **Connect Slack**
3. Select the workspace and default notification channel

## Notification types

| Event | Description |
|---|---|
| **New suggestions** | Sent when the pipeline generates suggestions ready for review |
| **Pipeline failure** | Sent when a pipeline run encounters an error |
| **Suggestion approved** | Sent when a reviewer approves a suggestion |
| **Batch complete** | Sent after a large release when all related suggestions are processed |

## Channel configuration

Configure notification channels per project or per team:

- **Project-level** — route notifications for a specific project to a dedicated channel (e.g., `#api-docs-updates`)
- **Team-level** — send all notifications for a team to one channel (e.g., `#platform-team`)
- **Global** — fallback channel for any notifications not routed elsewhere

## Message format

Slack messages include:

- A summary of what changed
- The number of suggestions generated
- Direct links to the DraftStack inbox for review
- The source PR link for context

## Permissions

DraftStack requests permission to post messages to selected channels. It does not read channel history or access direct messages.
