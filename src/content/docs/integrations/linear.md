---
title: Linear
description: Pull context from Linear tickets and push updates back when code changes.
---

The Linear integration works in both directions: DraftStack reads Linear tickets for context during analysis, and writes updates back when code changes affect tracked projects.

## Setup

1. Go to **Settings > Integrations > Linear**
2. Click **Connect Linear**
3. Authorize DraftStack and select the workspaces and teams to connect

## Inbound: Context enrichment

When a PR references a Linear ticket (via branch name, commit message, or PR description), DraftStack pulls in:

- Ticket title and description
- Acceptance criteria
- Comments and discussion

This context helps the LLM understand *why* a change was made, producing more accurate suggestions.

## Outbound: Knowledge updates

When a code change affects a Linear project or ticket, DraftStack can:

- **Update ticket descriptions** — modify specs or technical details that are now outdated
- **Add comments** — post a summary of what changed and how it affects the ticket
- **Link to suggestions** — reference the DraftStack suggestion for full context

## Mapping

Link Linear projects to DraftStack projects in your project settings. You can map at the project or team level:

| DraftStack project | Linear target |
|---|---|
| `api-service` | API Team workspace |
| `web-app` | Frontend project |

## Permissions

DraftStack requests:

- Read access to issues, projects, and comments
- Write access to issue descriptions and comments
