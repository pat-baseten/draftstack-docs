# Getting Started

## Setup Wizard

The application now uses a dashboard-based setup wizard to guide you through the initial configuration process. This replaces the previous onboarding flow.

### GitHub App Installation

When you install the GitHub App, you are redirected to the dashboard. If the installation is cancelled or fails, specific error parameters are returned.

**Error States**

The following query parameters may be present in the redirect URL:

| Parameter | Description |
|-----------|-------------|
| `setup_error` | Indicates the type of installation error. |

**Possible Error Values**

- `no_installation`: The installation was cancelled or no installation was detected.
- `installation_failed`: The GitHub App installation failed.

### Setup Components

The dashboard includes new components to assist with setup:

- **SetupBanner**: Displays at the top of the dashboard to indicate setup status.
- **SetupCard**: Provides the main interface for completing the setup steps.

### Empty States

If no project is configured, the following pages display a prompt to visit the setup flow:

- **Activity Page**: "No activity yet. Set up a project to start monitoring repositories."
- **Settings Page**: "No project configured yet. Set up a project to manage settings."