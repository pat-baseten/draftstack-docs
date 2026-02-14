# Direct Push Detection

The system now detects direct pushes to the default branch (e.g., `main`) on monitored repositories and triggers the LLM pipeline for analysis. This allows the system to track and analyze code changes that are committed directly, rather than exclusively through pull requests.

## Behavior

When a `push` event is received from a monitored repository:

1.  **Detection**: The system checks if the push targets the repository's default branch.
2.  **Filtering**:
    *   Skips new branch creation events (where `before` SHA is all zeros).
    *   Skips pushes from bots (e.g., users ending in `[bot]` or `github-actions`) to prevent feedback loops.
3.  **Deduplication**: Checks if a suggestion already exists for the specific commit SHA to avoid duplicate processing.
4.  **Queueing**: If valid, a job is added to the LLM pipeline queue with the source type `push`.

## Queue Schema

The `process-push` job uses the following schema:

```typescript
{
  sourceType: "push",
  beforeSha: string;        // The SHA before the push
  afterSha: string;         // The SHA after the push
  commitMessages: string[]; // List of commit messages in the push
  pusher?: string;          // The username of the pusher
  repo: string;             // The repository name
  installationId: number;   // GitHub App installation ID
  projectId: string;        // The project ID
}
```

## Backfill

The backfill utility has been updated to include direct commits. When running a backfill, the system:

1.  Fetches merged PRs within the specified time window.
2.  Fetches direct commits to the default branch using `listDirectCommits`.
3.  Filters out commits that originated from merged PRs.
4.  Queues individual direct commits for analysis.

## API Reference

### `listDirectCommits`

Lists commits pushed directly to a branch (excluding merge commits) since a given date.

```typescript
await listDirectCommits(
  owner: string,
  repo: string,
  branch: string,
  since: Date,
  installationId: number
)
```

Returns an array of objects containing `sha`, `parentSha`, `message`, and `date`.

### `fetchPushDiff`

Retrieves the diff and context for a specific push range.

```typescript
await fetchPushDiff(
  owner: string,
  repo: string,
  beforeSha: string,
  afterSha: string,
  commitMessages: string[],
  installationId: number
)
```

Returns an object with:
*   `diff`: The unified diff string.
*   `context`: An object containing `title`, `body`, `comments`, and `reviews`.
*   `fileCount`: The number of files changed.

### `pushToSentinelPrNumber`

Generates a unique sentinel PR number for a push based on the commit SHA, used for deduplication.

```typescript
pushToSentinelPrNumber(afterSha: string): number
```