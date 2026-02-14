# Request AI Changes

This feature allows you to iteratively refine AI-generated suggestions by providing specific feedback. When you request changes, the system regenerates the suggestion based on your input, maintaining a history of all rework iterations.

## Usage

### Requesting Changes

1. Open the **Edit Panel** for a suggestion.
2. Click the **Request AI Changes** section in the header.
3. Enter a description of the changes you want in the text area.
4. Click **Rework**.

The system will process your feedback and update the suggestion files. A badge on the "Request AI Changes" button indicates the number of rework iterations performed.

### Viewing Rework History

After reworking a suggestion, the history is displayed below the feedback input. Each entry shows:

*   **Rework Number:** The sequence number of the iteration.
*   **Feedback:** The user's input (truncated if longer than 60 characters).
*   **Files Changed:** The number of files modified in that iteration.

### Pipeline Reasoning

The **Pipeline Reasoning** section provides detailed metadata about how the suggestion was generated. This section is expandable and includes:

*   **Reasoning Chain:** The high-level logic used to generate the suggestion.
*   **Candidate Rationale:** Specific justifications for candidate changes.
*   **Candidate Verification:** Details on which paths were confirmed or rejected, including relevance and section analysis.
*   **Update Plan:** A structured summary of the changes, including:
    *   **Summary:** Brief description of the update.
    *   **Overall Strategy:** The high-level approach.
    *   **Files:** A list of affected files with specific instructions, edit scope, target sections, and preservation notes.

## Data Structure

The feature introduces the `PipelineMetadata` interface, which tracks the AI's decision-making process and rework history.

```typescript
interface PipelineMetadata {
  reasoningChain: string;
  candidateRationale: Record<string, string>;
  candidateVerification: {
    confirmedPaths: string[];
    rejectedPaths: string[];
    details: Record<string, { relevant: boolean; sections: string[]; reason: string }>;
  } | null;
  updatePlan: {
    summary: string;
    overallStrategy: string;
    files: Array<{
      path: string;
      action: string;
      instructions: string;
      editScope: string;
      targetSections: string[];
      preservationNotes: string;
      crossReferences: string[];
    }>;
  } | null;
  prContext: { title: string; body: string | null };
  reworkHistory: Array<{
    feedback: string;
    timestamp: string;
    filesChanged: string[];
  }>;
}
```