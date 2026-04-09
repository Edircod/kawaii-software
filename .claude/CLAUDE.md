# kawaii(x,y) — Claude Project Rules

## Project

Next.js 14 App Router site for kawaii(x,y), a boutique software house. TypeScript strict mode, Tailwind CSS v4, daisyUI v5, Framer Motion. Multilingual (en/it/ja) via `src/lib/content.ts`. Locale routing via `src/app/[locale]/`.

## Structure

```
src/
  app/          # Next.js App Router (layout, page, globals.css, sitemap, OG)
    [locale]/   # Locale-specific pages (/en, /it, /ja)
  components/   # React components
    ui/         # Atomic UI primitives (AnimatedText, Card, CustomCursor, SectionReveal)
    providers/  # Context providers (SiteProvider)
  lib/          # Shared logic (content.ts, i18n.ts, request-context.ts)
  middleware.ts # Locale redirect + x-locale header injection
public/         # Static assets (SVG logos)
```

## Tailwind v4 & daisyUI v5

- **No `tailwind.config.ts`** — it is deleted. All config lives in `src/app/globals.css`.
- **Never use `@tailwind base/components/utilities`** — use `@import "tailwindcss"` instead.
- **daisyUI** is loaded via `@plugin "daisyui"` in CSS, not via a JS config file.
- Custom design tokens are defined in `@theme inline { ... }` in `globals.css`.
- PostCSS plugin is `@tailwindcss/postcss` (not the old `tailwindcss` plugin).
- VS Code suppresses unknown at-rule warnings via `css.lint.unknownAtRules: ignore` in `.vscode/settings.json`.

## Theming

- Theme is controlled by `data-theme` attribute on `<html>` (`kawaii-dark` / `kawaii-light`).
- Dark is the default (`:root`); light overrides live in `[data-theme="kawaii-light"]` in `globals.css`.
- `SiteProvider` switches theme via `document.documentElement.setAttribute("data-theme", ...)`.

## i18n / Routing

- Locale URLs: `/en`, `/it`, `/ja` — served from `src/app/[locale]/page.tsx`.
- Middleware (`src/middleware.ts`) redirects `/` to the inferred locale and sets `x-locale` header.
- Root layout reads locale from `x-locale` header to set `<html lang>` server-side.
- Locale switching via `router.push('/[locale]')` in `LanguageSwitcher` (not context state).

## Code Style

- TypeScript strict — no `any`, no type assertions unless necessary
- Named exports everywhere; no default exports except Next.js page/layout
- Tailwind for all styling — no inline styles, no CSS modules
- Framer Motion for animations — keep variants defined outside components
- `@/` alias maps to `src/` — always use it, never relative `../` imports across feature boundaries
- No `console.log` in committed code

## Content & i18n

- All user-facing strings live in `src/lib/content.ts` — never hardcode copy in components
- Locale type: `"en" | "it" | "ja"` (defined in `src/lib/i18n.ts`)

## Do Not

- Do not add `"use client"` unless the component genuinely needs browser APIs or event handlers
- Do not introduce new dependencies without discussing first
- Do not modify color/font tokens in `globals.css` without explicit instruction
- Do not create new files when editing an existing one solves the problem
- Do not use `@tailwind` directives — this is Tailwind v4, use `@import "tailwindcss"`
- Do not create `tailwind.config.ts` — config lives in `globals.css` via `@theme inline`
