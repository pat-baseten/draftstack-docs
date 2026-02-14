# Team Management

## Deleting Teams

Organization administrators can delete teams that are no longer needed. When a team is deleted, all projects associated with that team are automatically moved to the organization's default team. All team memberships are also removed.

### Prerequisites

- You must be assigned the `ADMIN` role within the organization.
- You cannot delete the organization's default team.

### Usage

To delete a team, use the `deleteTeam` mutation.

```typescript
const deleteTeamMutation = api.team.deleteTeam.useMutation({
  onSuccess: () => {
    console.log("Team deleted");
  },
  onError: (err) => {
    console.error(err.message);
  },
});

// Trigger the deletion
deleteTeamMutation.mutate({ teamId: "team_123" });
```

### Behavior

- **Project Reassignment:** All projects belonging to the deleted team are reassigned to the default team.
- **Membership Removal:** All users are removed from the deleted team.
- **Irreversible:** This action cannot be undone.

# Authentication

## Session Refresh

User sessions are refreshed from the database on every request. This ensures that changes to user permissions—such as role updates, plan upgrades, or super-admin grants—take effect immediately without requiring the user to log in again.

The `jwt` callback queries the database for the latest `role` and `isSuperAdmin` status on each request, keeping the session token synchronized with the database state.