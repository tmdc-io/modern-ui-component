# ModernUI — Consumer Setup Guide

Install ModernUI components into any React project that supports shadcn/ui (Next.js, Vite, etc.).

## Prerequisites

Your project must have shadcn/ui initialized:

```bash
npx shadcn@latest init
```

## Option A: GitHub Registry (recommended to start)

```bash
# Install foundation first
npx shadcn@latest add tmdc-io/modern-ui-component/theme
npx shadcn@latest add tmdc-io/modern-ui-component/utils
npx shadcn@latest add tmdc-io/modern-ui-component/i18n   # LanguageProvider + useTranslation — see docs/I18N.md

# Install primitives
npx shadcn@latest add tmdc-io/modern-ui-component/button
npx shadcn@latest add tmdc-io/modern-ui-component/input
npx shadcn@latest add tmdc-io/modern-ui-component/card
npx shadcn@latest add tmdc-io/modern-ui-component/dialog

# Install composite blocks
npx shadcn@latest add tmdc-io/modern-ui-component/login-form

# Optional: project conventions
npx shadcn@latest add tmdc-io/modern-ui-component/project-setup
```

### Discover available components

```bash
npx shadcn@latest list tmdc-io/modern-ui-component
npx shadcn@latest view tmdc-io/modern-ui-component/button
```

### Pin a version

```bash
npx shadcn@latest add tmdc-io/modern-ui-component/button#v1.0.0
```

## Option B: Hosted namespace

After the registry is deployed, register the namespace once per project:

```bash
npx shadcn@latest registry add @modernui=https://your-registry-url.com/r/{name}.json
```

Then install components:

```bash
npx shadcn@latest add @modernui/theme
npx shadcn@latest add @modernui/button
npx shadcn@latest add @modernui/login-form
```

## Install order

Always install in this order for new projects:

1. `theme` — CSS variables and base styles
2. `utils` — `cn()` helper
3. `i18n` — `LanguageProvider` + `useTranslation` (needed for login-form, hero, models-table, …). Full guide: [I18N.md](./I18N.md)
4. Primitives (`button`, `input`, `card`, `dialog`, etc.)
5. Blocks (`login-form`, etc.)

## Monorepo (pnpm / turbo / npm workspaces)

Use a shared UI package for primitives and theme. Keep app-only blocks in the app workspace.

### Typical layout

```txt
my-monorepo/
├── apps/
│   └── web/                 # Next.js app
│       ├── app/
│       ├── components/      # app-only blocks
│       └── components.json
├── packages/
│   └── ui/                  # shared ModernUI primitives
│       ├── src/
│       │   ├── components/ui/
│       │   ├── lib/utils.ts
│       │   └── styles/globals.css
│       ├── components.json
│       └── package.json     # exports for @workspace/ui
└── package.json
```

### Process

1. **Scaffold** — `npx shadcn@latest init --monorepo` creates `apps/web` and `packages/ui`.
2. **Init each workspace** — every folder that receives components needs its own `components.json`:
   ```bash
   npx shadcn@latest init -c packages/ui
   npx shadcn@latest init -c apps/web
   ```
3. **Install foundation in `packages/ui`** — theme and utils must live in the shared package:
   ```bash
   npx shadcn@latest add tmdc-io/modern-ui-component/theme -c packages/ui
   npx shadcn@latest add tmdc-io/modern-ui-component/utils -c packages/ui
   npx shadcn@latest add tmdc-io/modern-ui-component/i18n -c packages/ui   # optional
   ```
4. **Add primitives to `packages/ui`**:
   ```bash
   npx shadcn@latest add tmdc-io/modern-ui-component/button -c packages/ui
   npx shadcn@latest add tmdc-io/modern-ui-component/input -c packages/ui
   ```
5. **Add app blocks to `apps/web`** (optional):
   ```bash
   npx shadcn@latest add tmdc-io/modern-ui-component/login-form -c apps/web
   ```

### Rules

- Use the **same** `style`, `baseColor`, and `iconLibrary` in every `components.json`.
- Point the app `utils` alias to `@workspace/ui/lib/utils` — do not install utils twice.
- Import theme CSS once in the app: `import "@workspace/ui/globals.css"` in `app/layout.tsx`.
- Expose `packages/ui` through `package.json` `exports` so apps can import `@workspace/ui/components/ui/button`.
- Always pass **`-c <workspace>`** when running `add` from the monorepo root.

### Example `packages/ui/package.json` exports

```json
{
  "name": "@workspace/ui",
  "exports": {
    "./globals.css": "./src/styles/globals.css",
    "./components/*": "./src/components/*.tsx",
    "./lib/*": "./src/lib/*.ts",
    "./hooks/*": "./src/hooks/*.ts"
  }
}
```

### Example app import

```tsx
// apps/web/app/layout.tsx
import "@workspace/ui/globals.css"

// apps/web/components/login-page.tsx
import { Button } from "@workspace/ui/components/ui/button"
```

### Discover components from a workspace

```bash
npx shadcn@latest list tmdc-io/modern-ui-component -c packages/ui
```

See the [shadcn monorepo docs](https://ui.shadcn.com/docs/monorepo) for package-import aliases and Tailwind v4 notes.

## What you get

Files are copied directly into your project. You own and can edit every file — there is no opaque npm dependency for components.

## Guides

| Doc | Topic |
|-----|--------|
| [I18N.md](./I18N.md) | LanguageProvider, block messages, Español, next-intl bridge |
| [GITHUB.md](./GITHUB.md) | GitHub Registry install |
| [HOSTED.md](./HOSTED.md) | Hosted `@modernui` namespace |
