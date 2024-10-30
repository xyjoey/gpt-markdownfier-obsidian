import { Plugin, Editor, MarkdownView } from 'obsidian';

export default class MarkdownfierPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'format',
            name: 'Format',
            editorCallback: (editor: Editor, view: MarkdownView) => {
                // Get the selected text from the editor
                let selectedText = editor.getSelection();

                // If no text is selected, get the entire document's content
                if (!selectedText) {
                    const doc = editor.getDoc();
                    selectedText = doc.getValue();
                }

                // Define the list of replacements
                const replacements = [
                    { pattern: /\\\(/g, replacement: '$' },
                    { pattern: /\\\)/g, replacement: '$' },
                    { pattern: /\$\s*([^$]+?)\s*\$/g, replacement: '$$$1$$' }, // Trims spaces inside "$ $"
                    { pattern: /\\\[/g, replacement: '$$$$' },
                    { pattern: /\\\]/g, replacement: '$$$$' },
                    { pattern: /\n\n/g, replacement: '\n' },
                ];

                // Apply the replacements
                let replacedText = selectedText;

                for (const { pattern, replacement } of replacements) {
                    replacedText = replacedText.replace(pattern, replacement);
                }

                // If text was selected, replace the selection; otherwise, replace the entire document's content
                if (editor.somethingSelected()) {
                    editor.replaceSelection(replacedText);
                } else {
                    const doc = editor.getDoc();
                    doc.setValue(replacedText);
                }
            }
        });
    }

    onunload() {
        // Any cleanup operations can be performed here
    }
}
