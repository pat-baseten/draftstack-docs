# Teams and Super-Admin System

## Overview

This feature introduces a new hierarchy for organizing work and managing access within DraftStack. It adds Teams, team-scoped authorization, and a Super-Admin system to control organizations and users at a global level.

### Key Concepts

- **Teams**: Projects now belong to teams. Suggestions, activity, and settings inherit scope through the project.
- **Team-Scoped Authorization**: Access to projects and data is filtered based on team membership.
- **Super-Admin**: A specialized role with access to the `/admin` route tree for system-wide management.

## Hierarchy

The new structure follows this flow:

```
Organization → Team → Project
```

## Admin System

The Admin system allows Super-Admins to manage organizations, users, and plans.

### Accessing the Admin Panel

Access to the `/admin` routes is restricted to users with the `isSuperAdmin` flag. If a non-super-admin attempts to access these routes, they are redirected to the dashboard.

### Admin Layout

The admin panel features a dedicated layout with a sidebar for navigation:

- **Overview**: General system statistics.
- **Organizations**: Management of organization accounts.
- **Users**: Management of user accounts.

### Organization Management

Super-Admins can view detailed information about each organization via `/admin/organizations/[id]`.

#### Features

- **Plan Management**: Change the plan for an organization (FREE, TEAM, ENTERPRISE).
- **Enable/Disable Organizations**:
  - **Disable**: Deactivates all projects within the organization.
  - **Enable**: Reactivates all projects within the organization.
- **View Members**: List of users belonging to the organization, their roles, and join dates.
- **View Teams**: List of teams within the organization, including member counts and project counts.

#### Organization Detail UI

The detail page displays:
- **Header**: Organization name (GitHub slug), Plan badge, ID, and creation date.
- **Actions**: Plan dropdown selector and Enable/Disable toggle button.
- **Members Table**:
  - User name and avatar.
  - Email address.
  - Role (e.g., ADMIN, MEMBER).
  - Super-Admin indicator (purple shield icon).
- **Teams Table**:
  - Team name.
  - Default team badge.
  - Member count.
  - Project count.

## Authorization Logic

The system enforces strict checks for administrative actions:

- **Role Verification**: Actions are restricted based on user roles (e.g., `ADMIN` vs `REVIEWER`).
- **Self-Modification Prevention**: Users cannot change their own role or remove themselves from an organization.

## Migration and Setup

To enable this feature, a database migration is required to update the schema with the new team and authorization fields. Following the migration, seed data should be populated to initialize the Super-Admin account and default team structures.