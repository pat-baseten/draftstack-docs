---
title: API
description: Reference for the DraftStack REST API.
---

The DraftStack API allows programmatic access to projects, suggestions, and pipeline runs.

## Authentication

All API requests require an API key in the `Authorization` header:

```bash
curl -H "Authorization: Bearer ds_your_api_key" \
  https://api.draftstack.io/v1/projects
```

Generate API keys from **Settings > API keys** in the dashboard.

## Endpoints

### Projects

#### List projects

```
GET /v1/projects
```

Returns all projects accessible to the authenticated key.

#### Get project

```
GET /v1/projects/:id
```

Returns a single project with its configuration.

### Suggestions

#### List suggestions

```
GET /v1/suggestions?project_id=:id&status=pending
```

Query parameters:

| Parameter | Type | Description |
|---|---|---|
| `project_id` | string | Filter by project |
| `status` | string | `pending`, `approved`, `dismissed` |
| `target_type` | string | `github`, `notion`, `linear` |
| `limit` | integer | Max results (default: 50, max: 200) |
| `offset` | integer | Pagination offset |

#### Get suggestion

```
GET /v1/suggestions/:id
```

Returns the full suggestion including diff, reasoning, and metadata.

#### Approve suggestion

```
POST /v1/suggestions/:id/approve
```

Pushes the update to the target knowledge source.

#### Dismiss suggestion

```
POST /v1/suggestions/:id/dismiss
```

Optional request body:

```json
{
  "reason": "Already handled manually"
}
```

### Pipeline runs

#### List runs

```
GET /v1/runs?project_id=:id
```

#### Retry a run

```
POST /v1/runs/:id/retry
```

Re-executes the pipeline with the same inputs.

## Rate limits

| Scope | Limit |
|---|---|
| API requests | 100 requests/minute per key |
| Suggestion approvals | 30/minute per key |
| Pipeline retries | 10/minute per key |

Rate limit headers are included in every response:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1700000000
```
