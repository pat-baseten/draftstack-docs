---
title: Custom style guides
description: Train DraftStack to write like your team.
---

Upload a style guide so that DraftStack generates suggestions that match your team's voice, terminology, and formatting standards.

## Why use a style guide

Without a style guide, DraftStack produces clear, neutral technical writing. With one, it matches your team's specific conventions:

- Preferred terminology (e.g., "endpoint" vs. "route", "user" vs. "customer")
- Tone and voice (formal, conversational, terse)
- Formatting rules (heading levels, code block conventions, callout usage)
- Structural patterns (how your team writes API references vs. tutorials)

## Creating a style guide

A style guide is a Markdown file that describes your writing standards. Include:

```markdown
# Voice and tone
Write in second person ("you"). Use active voice. Be direct.

# Terminology
- Use "deploy" not "ship" or "push to production"
- Use "endpoint" not "route"
- Use "request" not "call"

# Formatting
- Use sentence case for headings
- Always include a description in page frontmatter
- Code blocks must have a language identifier

# Structure
- Tutorials: prerequisites, numbered steps, verification, next steps
- API reference: description, authentication, parameters table, example request/response
```

## Uploading

1. Go to **Settings > Style guides**
2. Click **Upload style guide**
3. Select the Markdown file
4. Assign it to a team (or make it organization-wide)

Each team can have its own style guide. Team-level guides override the organization default.

## How it's used

The style guide is included as context in the LLM generation step. DraftStack uses it to:

- Match vocabulary and phrasing
- Follow structural templates
- Apply formatting rules
- Maintain consistent tone across all generated suggestions
