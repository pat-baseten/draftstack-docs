---
title: Team management
description: Configure teams, roles, and access control.
---

Manage your organization's teams, members, and permissions from the dashboard.

## Managing teams

### Create a team

1. Go to **Settings > Teams**
2. Click **New team**
3. Enter a team name and optional description
4. Add members and assign roles

### Edit a team

From the team settings page, you can:

- Rename the team
- Add or remove members
- Change member roles
- Assign projects to the team
- Upload a team-specific style guide

## Managing members

### Invite members

1. Go to **Settings > Members**
2. Click **Invite**
3. Enter the email address and select a role
4. The invitee receives an email with a link to join

### Roles

| Role | Scope | Capabilities |
|---|---|---|
| **Org Admin** | Organization | Full access to all teams, projects, integrations, billing, and member management |
| **Team Admin** | Team | Manage team members, configure team projects, approve suggestions for team projects |
| **Reviewer** | Team | Review and approve suggestions, edit AI drafts. Cannot modify settings. |

### Remove a member

From **Settings > Members**, click the member's row and select **Remove**. Removing a member revokes their access immediately. Their past actions remain in the activity log.

## API keys

Generate API keys for programmatic access to DraftStack:

1. Go to **Settings > API keys**
2. Click **Create key**
3. Name the key and select its scope (organization or team)
4. Copy the key — it is only shown once

API keys inherit the permissions of the scope they're created in. Organization-scoped keys have full access. Team-scoped keys can only access that team's projects and suggestions.
