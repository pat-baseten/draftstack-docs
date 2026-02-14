# User Interface

## Keyboard Navigation

The dashboard now supports keyboard shortcuts for faster navigation and interaction.

### Shortcuts

| Key | Action |
| --- | ------ |
| `j` / `↓` | Move focus to next suggestion |
| `k` / `↑` | Move focus to previous suggestion |
| `a` | Approve focused suggestion |
| `d` | Dismiss focused suggestion |
| `e` | Open edit panel for focused suggestion |
| `x` | Toggle selection of focused suggestion |
| `?` | Open keyboard shortcuts help |

### Visual Focus

The currently focused suggestion is visually highlighted. When using keyboard navigation, the list automatically scrolls to keep the focused suggestion in view.

## Editing Suggestions

You can now edit the content of a suggestion before approving it.

1. Navigate to a suggestion and press `e` or click the **Edit** button.
2. An **Edit Panel** opens displaying the file changes.
3. Modify the code in the editor.
4. The **Diff View** updates in real-time to show changes between the original content and your edits.
5. Click **Save & Approve** to apply your changes and approve the suggestion.

## Diff View

The **Diff View** displays the specific line changes for each file affected by a suggestion.

* **File Header**: Shows the file path, action type (CREATE or UPDATE), and modification stats (e.g., `+5 -2`).
* **Line Colors**:
    * **Green**: Added lines.
    * **Red**: Removed lines.
    * **Gray**: Unchanged context lines.
* **Line Numbers**: Displays the original line number (left) and the new line number (right) for each line.
* **Edited Badge**: If you modify a suggestion in the Edit Panel, the file header displays an "edited" badge.