# Markdownfier for ChatGPT

## What is this plugin

When using ChatGPT with Obsidian, you might find that the output format isn't standard Markdown — such as equations being in LaTeX format — which can affect the readability of your documents. This plugin does exactly what its name suggests: it formats ChatGPT's output into Markdown and removes any empty lines.

## Screenshots

### Original Output of ChatGPT 🤩

![gpt_output](./attachments/gpt_output.png)

### Pasted into Obsidian 🥲

![pasted](./attachments/pasted.png)

### Formatted 💪

![formatted](./attachments/formatted.png)

## How to use

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

