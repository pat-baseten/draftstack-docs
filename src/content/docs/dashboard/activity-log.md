---
title: Activity log
description: Audit trail of every pipeline run, suggestion, and action.
---

The activity log records every event in DraftStack, giving you full visibility into what the system is doing and why.

## Events tracked

| Event | Description |
|---|---|
| **Pipeline triggered** | A PR merged and the pipeline started |
| **PR skipped** | The pipeline determined no documentation update was needed, with reasoning |
| **Suggestions generated** | One or more suggestions were created from a pipeline run |
| **Suggestion approved** | A reviewer approved a suggestion |
| **Suggestion dismissed** | A reviewer dismissed a suggestion |
| **Suggestion edited** | A reviewer modified a suggestion before approving |
| **PR created** | A draft PR was opened in a documentation repository |
| **Notion updated** | A Notion page was edited |
| **Linear updated** | A Linear ticket was updated |
| **Pipeline failed** | A pipeline run encountered an error |

## Filtering

Filter the activity log by:

- **Project**
- **Event type**
- **Date range**
- **Team member** (who triggered or acted on the event)

## Pipeline run details

Click any pipeline event to see the full run details:

- Input: the PR that triggered it
- Analysis output: what the model determined
- Generated suggestions: links to each suggestion
- Timing: how long each stage took
- Errors: stack traces and retry information for failed runs

## Retry failed runs

Failed pipeline runs can be retried from the activity log. Click the run, then click **Retry**. The pipeline re-executes with the same inputs.
