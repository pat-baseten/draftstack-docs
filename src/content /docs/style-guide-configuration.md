# AI-Powered Style Guide Generation

## Overview
The style guide editor now supports AI-powered generation using the Baseten API. This feature automatically creates comprehensive markdown style guides for documenting different types of code changes, tailored to specific categories within your project.

## Prerequisites
Before using the AI generation feature, you must configure your project with Baseten credentials:

1.  **Baseten API Key**: Required to authenticate with the Baseten API. If this key is not configured, the generation request will fail with a `BAD_REQUEST` error.
2.  **Baseten Model**: The specific model identifier to use for generation.

These settings must be applied to your project configuration.

## Usage

### Generating a Style Guide
To generate a style guide for a specific category, use the `generateStyleGuide` mutation.

**Input Parameters:**
- `projectId` (string): The ID of the project.
- `categoryKey` (string): The key of the style guide category to generate content for.

**Example:**

```typescript
const result = await api.project.generateStyleGuide.mutateAsync({
  projectId: "your-project-id",
  categoryKey: "api-changes",
});

// The generated markdown guide is available in result.guide
console.log(result.guide);
```

### Behavior
The generation process analyzes existing style guides in your project to maintain consistency. It then generates a new guide that includes:

1.  **Overview**: What the change type is and when it occurs.
2.  **Tone and Voice**: How to write about the change.
3.  **Structure**: How to organize the documentation.
4.  **Formatting Guidelines**: Markdown formatting best practices.
5.  **Common Patterns**: Typical examples with code blocks.
6.  **Tips**: Best practices and common pitfalls.

The generated content is returned as a markdown string.