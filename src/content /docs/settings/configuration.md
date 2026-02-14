# Per-Change-Type Style Guides

## Overview

Style guides define the writing conventions used when generating documentation. You can now configure separate style instructions for different types of changes (e.g., API changes, bug fixes, new features).

A **General** style guide is available that applies to all change types. This general guide is automatically merged with any type-specific guide you define, allowing you to establish baseline rules while tailoring instructions for specific scenarios.

## Configuration

Style guides are configured per project in the dashboard settings. The `styleGuides` field accepts a JSON object mapping change type keys to instruction strings.

### Supported Change Types

The following keys are supported for configuration:

*   `GENERAL`
*   `API_CHANGE`
*   `NEW_FEATURE`
*   `DEPRECATION`
*   `CONFIG_CHANGE`
*   `BUG_FIX`
*   `UI_CHANGE`
*   `OTHER`

## Usage

### Setting Up Guides

1.  Navigate to your project settings.
2.  Locate the **Style Guide** section.
3.  Select a tab corresponding to the change type you want to configure (e.g., "General", "API Change").
4.  Enter your style instructions in the text area.

### Example Configuration

**General Guide**
Applied to all changes to establish baseline rules.

```text
- Use active voice
- Write in second person (you/your)
- Keep sentences short and clear
- Use code blocks for examples
- Include practical use cases
```

**API Change Guide**
Merged with the General guide specifically for API changes.

```text
- Always specify the HTTP method affected (GET, POST, etc.)
- Include the endpoint path
- List breaking changes at the top of the section
- Provide example requests and responses
```

When generating documentation for an `API_CHANGE`, the system will combine both sets of instructions to ensure the output meets both the general writing standards and the specific requirements for API documentation.