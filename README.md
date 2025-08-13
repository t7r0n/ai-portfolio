# AI Portfolio (Astro + Tailwind)

Live URL: https://t7r0n.github.io/ai-portfolio/

## Quick start

- Requires Node 18+.
- Install deps: npm ci
- Dev: npm run dev
- Build: npm run build

## Add content (no code)

Drop Markdown/MDX files into:
- src/content/projects/
- src/content/publications/
- src/content/certifications/
- src/content/experience/
- src/content/awards/
- src/content/extras/
- src/content/posts/

Frontmatter examples are in each seeded file. Images go under public/images/... The lists auto-update.

## WebLLM (optional)

Local-only assistant panel. Disabled by default. Flip `enableWebLLM` in `src/site.config.ts` to true.

## GitHub Pages

Pipelines under .github/workflows/pages.yml. Ensure repo settings → Pages → Source: GitHub Actions.

## License

MIT
