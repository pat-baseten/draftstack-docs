---
title: Organizations and teams
description: Multi-tenant structure for managing access and projects at scale.
---

DraftStack is built for organizations of any size, from small startups to large enterprises with multiple teams and dozens of repositories.

## Organizations

An organization is the top-level container. It owns:

- Projects (code repo + knowledge source mappings)
- Team memberships and roles
- Integrations (GitHub App, Notion, Linear, Slack)
- Billing and plan settings

## Teams

Large organizations can split into teams to scope access and configuration. Common team structures:

| Team | Monitored repos | Knowledge sources |
|---|---|---|
| Frontend | `web-app`, `design-system` | Docs repo, Notion component library |
| Platform | `infra`, `deploy-service` | Docs repo, Notion runbooks, Linear platform project |
| API | `api-gateway`, `auth-service` | Docs repo, Notion API reference |

Each team manages its own projects, style guides, and review workflows independently.

## Roles

| Role | Capabilities |
|---|---|
| **Admin** | Full access. Manage team members, configure integrations, create projects, approve suggestions. |
| **Reviewer** | Review and approve suggestions. Edit AI drafts. Cannot modify project configuration or team membership. |

Organization-level admins can manage all teams. Team-level admins only manage their own team.

## Plans

Feature access is controlled by plan tier:

| Feature | Starter | Team | Enterprise |
|---|---|---|---|
| Monitored repositories | 3 | 20 | Unlimited |
| Knowledge sources | GitHub only | GitHub + Notion | All sources |
| Teams | 1 | 5 | Unlimited |
| Custom style guides | — | 1 per team | Unlimited |
| SSO / SAML | — | — | Included |
| Audit logs | — | — | Included |
