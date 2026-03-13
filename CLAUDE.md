# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev          # Start dev server at localhost:4321
bun run build        # Type-check, build, and generate Pagefind search index
bun run preview      # Preview production build
bun run lint         # Format code with Prettier

# Content creation helpers
bun run new-post     # Interactive CLI to scaffold a new blog post
bun run new-project  # Create a new project entry
bun run new-friend   # Add a friend link entry
```

There are no automated tests. `astro check` (run as part of `build`) performs TypeScript type-checking.

## Architecture

**Astro 5** static site with **React 18** for interactive components. Content is managed via Astro content collections. The site is configured entirely through [src/config.json](src/config.json) (site metadata, author info, nav menus, color themes, analytics).

### Content Collections (`src/content/`)

| Collection  | Format                      | Purpose                  |
| ----------- | --------------------------- | ------------------------ |
| `posts/`    | Markdown + YAML frontmatter | Blog posts               |
| `projects/` | YAML data                   | Portfolio projects       |
| `friends/`  | YAML data                   | Friend links             |
| `spec/`     | Markdown                    | Documentation/spec pages |

Frontmatter schema defined in [src/content/config.ts](src/content/config.ts). Draft posts are excluded in production but visible in dev. Post metadata (word count, reading time) is computed via custom remark plugins.

### Routing (`src/pages/`)

- `[...page].astro` — paginated home feed
- `posts/[...slug].astro` — individual post
- `categories/[category].astro`, `tags/[tag].astro` — filtered listings
- `[spec].astro` — spec/documentation pages

### State Management

Global state uses **Jotai** atoms in [src/store/](src/store/): `theme`, `metaInfo`, `modalStack`, `scrollInfo`, `viewport`.

### Theme System

Dark mode uses `data-theme="dark"` on `<html>` (not a CSS class). Colors are CSS custom properties defined in [src/styles/global.css](src/styles/global.css). Theme color definitions (including accent colors) live in `src/config.json`.

### Markdown Processing

Custom plugins in [src/plugins/](src/plugins/) extend the markdown pipeline:

- **remark**: reading time, spoiler syntax (`||text||`), embeds
- **rehype**: code highlighting (Shiki), image/link/heading processing, table styling

Math is supported via remark-math + rehype-katex. Footnote labels use Chinese characters.

### Layout Hierarchy

`Layout.astro` (root: analytics, modals, theme) → `PageLayout.astro` (standard pages) / `MarkdownLayout.astro` (post content)

### Path Alias

`@/*` maps to `src/*` — use this for all internal imports.
