---
title: Introduction
description: What DraftStack is and the problem it solves.
---

DraftStack is an AI-powered knowledge sync engine. It monitors your codebases for merged pull requests, determines what knowledge needs to change, and generates updates across every connected source of truth — documentation repositories, Notion workspaces, Linear projects, and more.

## The problem

Documentation falls out of date the moment code changes. Teams know this, but keeping docs in sync is manual, tedious, and easy to forget. The gap between what the code does and what the docs say grows wider with every merged PR.

This problem extends beyond docs repos. When an API changes, the Notion runbook is wrong. When a feature ships, the Linear project description is stale. When a config format changes, the onboarding guide in Slack is misleading. Knowledge lives in many places. Code changes happen in one.

## How DraftStack fixes it

DraftStack treats documentation as a downstream artifact of code. When a PR merges:

1. **Detect** — DraftStack analyzes the diff to understand what changed and why
2. **Map** — It identifies which knowledge sources are affected: docs pages, Notion databases, Linear tickets, internal wikis
3. **Draft** — An LLM pipeline generates suggested updates matched to your team's writing style
4. **Review** — Suggestions land in your inbox with full context: the source PR, the reasoning, and a side-by-side diff
5. **Sync** — Approve with one click and DraftStack pushes the changes — a draft PR to GitHub, a page update to Notion, a comment on Linear

## Who it's for

- **Developers** stop worrying about whether they remembered to update docs after merging
- **Technical writers** shift from writing first drafts to editing and curating AI-generated suggestions
- **Org admins** manage teams, configure integrations, and set up style guides
- **Platform admins** monitor system health across organizations

## What's next

- [Quickstart](/getting-started/quickstart/) — connect your first repository in five minutes
- [How it works](/getting-started/how-it-works/) — understand the pipeline architecture
- [Knowledge sources](/concepts/knowledge-sources/) — see every destination DraftStack can sync to
