---
title: Configuration
description: Reference for all project and pipeline configuration options.
---

## Project configuration

Each DraftStack project links a code repository to one or more knowledge sources.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Human-readable project name |
| `code_repository` | string | Yes | GitHub repository in `owner/repo` format |
| `trigger_branch` | string | No | Branch to watch for merges (default: `main`) |
| `knowledge_sources` | array | Yes | List of connected knowledge sources |
| `style_guide` | string | No | ID of the style guide to use for generation |
| `team` | string | No | Team this project belongs to |

### Knowledge source entry

Each entry in `knowledge_sources` specifies a target:

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | `github`, `notion`, or `linear` |
| `target` | string | Yes | Repository path, Notion page ID, or Linear project ID |
| `mappings` | array | No | Code path to target mappings for more precise suggestions |

### Mapping entry

| Field | Type | Description |
|---|---|---|
| `code_pattern` | string | Glob pattern matching source files (e.g., `src/api/**`) |
| `target_path` | string | Specific page or section in the knowledge source |

## Pipeline configuration

Pipeline behavior can be tuned per project.

| Field | Type | Default | Description |
|---|---|---|---|
| `skip_patterns` | array | `[]` | File glob patterns to always skip (e.g., `*.test.ts`) |
| `confidence_threshold` | number | `0.7` | Minimum confidence to generate a suggestion |
| `auto_approve` | boolean | `false` | Automatically approve high-confidence suggestions |
| `auto_approve_threshold` | number | `0.95` | Confidence required for auto-approval |
