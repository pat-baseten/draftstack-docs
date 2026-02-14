# Trigger Workflow

Manually scan Pull Requests from specific branches and time ranges.

## Overview

The Trigger Workflow feature allows you to queue PRs for processing on-demand. You can filter by repository, target branch, and a custom time range (up to 90 days).

## Prerequisites

* The project must have at least one monitored repository.

## Usage

1. Navigate to the project dashboard.
2. Click the **Trigger Workflow** button in the top-right corner.
3. Select a **Repository** from the dropdown.
4. Optionally, select a **Target Branch**. If left blank, all branches are scanned.
5. Select a **Time Range** (e.g., Last 7 days, Last 30 days).
6. Click **Run**.

## API Reference

### `listBranches`

Retrieves the list of branches for a monitored repository.

**Input:**
```typescript
{
  projectId: string;
  repo: string;
}
```

**Output:**
```typescript
{
  name: string;
  isDefault: boolean;
}[]
```

### `triggerWorkflow`

Initiates a manual scan (backfill) for the specified criteria.

**Input:**
```typescript
{
  projectId: string;
  repo: string;
  branch?: string;
  days: number; // Min: 1, Max: 90, Default: 7
}
```

**Output:**
```typescript
{
  queued: number; // Number of PRs queued for processing
}
```