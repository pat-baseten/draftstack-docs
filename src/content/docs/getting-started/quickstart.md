---
title: Quickstart
description: Connect your first repository and see DraftStack in action.
---

Get DraftStack watching a repository and generating suggestions in under five minutes.

## Prerequisites

- A GitHub account with access to at least one repository
- A DraftStack account ([sign up here](https://draftstack.io))

## Step 1: Install the GitHub App

From your DraftStack dashboard, go to **Settings > Integrations > GitHub** and click **Install GitHub App**. Select the repositories you want DraftStack to monitor.

## Step 2: Connect a documentation target

Tell DraftStack where your documentation lives. This can be:

- A **GitHub repository** containing Markdown or MDX docs
- A **Notion workspace** with technical documentation pages
- A **Linear project** with specs and runbooks

Go to **Settings > Knowledge sources** and add your first target.

## Step 3: Configure a project

A project links a monitored code repository to one or more knowledge sources. Create one from **Projects > New project**:

| Field | Example |
|---|---|
| Name | `api-service` |
| Code repository | `org/api-service` |
| Knowledge sources | `org/docs`, `Notion: API Runbooks` |

## Step 4: Merge a PR

Merge any pull request in the monitored repository. Within a few minutes, DraftStack will:

1. Analyze the diff
2. Determine if documentation changes are needed
3. Generate suggestions for each affected knowledge source
4. Deliver them to your **inbox**

## Step 5: Review and approve

Open your inbox. Each suggestion includes:

- The source PR that triggered it
- The reasoning behind the suggested change
- A side-by-side diff showing exactly what will change

Click **Approve** to push the update, or **Edit** to refine it first.

## What's next

- [How it works](/getting-started/how-it-works/) — understand the full pipeline
- [Knowledge sources](/concepts/knowledge-sources/) — connect Notion, Linear, and more
- [Custom style guides](/integrations/style-guides/) — make DraftStack write like your team
