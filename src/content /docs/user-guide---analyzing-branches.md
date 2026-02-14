# Branch Only Preview

## Feature Overview

Branch Only Preview allows you to analyze code changes directly from a specific branch without requiring an associated Pull Request. This feature enables you to generate documentation suggestions and review diffs for branches that are still in progress or may never be merged into a Pull Request.

When analyzing a branch, the system compares the branch against the repository's default branch (e.g., `main`) to identify changes.

## Getting Started

To use Branch Only Preview, you must have a monitored repository configured within your project. The system automatically detects the default branch of the repository when you initiate a branch analysis.

## Usage

### Triggering Branch Analysis

You can trigger an analysis for a specific branch via the workflow trigger. If the system detects that no Pull Requests exist for the specified branch, it will queue a branch analysis job instead.

**Success State:**
- If a branch analysis is queued, the system returns: `Queued branch analysis for processing`
- If standard PRs are found and queued, the system returns: `Queued {count} PRs for processing`

**Warning State:**
- If no new PRs or branch changes are found, the system returns: `No new PRs or changes found`

### Viewing Suggestions

Suggestions generated from branch analysis display the branch title in the source link, rather than a PR number.

**Example Display:**
- **PR Source:** `repo-name #123`
- **Branch Source:** `Branch: feature-branch-name`

### API Integration

When integrating with the API, the `LLMPipelineJobSchema` now supports a discriminated union for `sourceType`.

**Branch Job Schema:**
```typescript
{
  sourceType: "branch",
  branch: string,
  defaultBranch: string,
  repo: string,
  installationId: number,
  projectId: string,
}
```

### Slack Notifications

Slack notifications adapt based on the source type of the suggestion.

**Branch Notification Format:**
- **Source Text:** `*Source:* <url|Branch Title>`
- **Button Label:** `View Source`

**PR Notification Format:**
- **Source Text:** `*Source PR:* <url|#123 - PR Title>`
- **Button Label:** `View Source PR`