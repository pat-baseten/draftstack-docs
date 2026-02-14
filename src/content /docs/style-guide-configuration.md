# Style Guide Management

Style guides define how the LLM writes documentation for your projects. You can configure a general guide that applies to all change types, as well as specific guides for individual categories like API changes or bug fixes.

## Accessing the Style Guide

The Style Guide management interface is now available as a dedicated page. To access it, navigate to the **Style Guide** item in the sidebar navigation.

*   **Navigation:** Dashboard > Style Guide
*   **Icon:** PenLine

## Managing Style Guides

The Style Guide page allows you to configure instructions for different change types.

### Selecting a Project

If you have access to multiple projects, use the project selector dropdown at the top of the page to choose which project's style guide you want to edit.

### Configuring Change Types

Style guides are organized by change type. The available categories are:

*   **General:** Applies to all change types and is merged with type-specific guides.
*   **API Change:** Specific instructions for API modifications.
*   **New Feature:** Specific instructions for new functionality.
*   **Deprecation:** Specific instructions for removed features.
*   **Config Change:** Specific instructions for configuration updates.
*   **Bug Fix:** Specific instructions for defect corrections.
*   **UI Change:** Specific instructions for user interface modifications.
*   **Other:** Specific instructions for uncategorized changes.

To configure a guide:

1.  Select the change type from the dropdown menu.
2.  Enter your style instructions in the text area.
3.  Click **Save Changes**.

### Actions

The Style Guide editor provides several actions to manage your configurations:

*   **Save Changes:** Commits the current style guide to the selected project. The button is disabled if there are no unsaved changes.
*   **Reset to Default:** Clears the content for the currently selected change type, reverting it to an empty state.
*   **Copy from Type:** Allows you to copy style instructions from another change type. When clicked, you will be prompted to enter the source change type (e.g., `GENERAL`).