# runStats Query

## Overview

The `runStats` query retrieves aggregated statistics for activity runs within a specific project. It calculates metrics such as the total number of runs, the success rate, and the average duration.

## Prerequisites

This endpoint requires authentication. Ensure your client is configured with a valid session or API token.

## Usage

### Input

The query accepts an object containing the following parameter:

- `projectId` (string): The ID of the project to fetch statistics for.

### Response

The query returns an object with the following fields:

- `totalRuns` (number): The total number of activity runs.
- `successRate` (number | null): The ratio of completed runs to total runs. Returns `null` if there are no runs.
- `avgDurationMs` (number | null): The average duration of runs in milliseconds. Returns `null` if no duration data is available.

### Example

```typescript
const stats = await api.activity.runStats.query({
  projectId: "proj_12345"
});

console.log(stats);
// Output:
// {
//   totalRuns: 150,
//   successRate: 0.8,
//   avgDurationMs: 2400
// }
```