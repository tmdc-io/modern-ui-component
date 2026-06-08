# Hosted @modernui Namespace

Deploy this Next.js app to serve built registry JSON from `public/r/`.

## Deploy (Vercel)

1. Connect the repository to Vercel
2. Build command: `pnpm build` (runs `registry:build` automatically)
3. Note your deployment URL, e.g. `https://modernui-registry.vercel.app`

## Update the namespace URL

In consumer projects, register the namespace once:

```bash
npx shadcn@latest registry add @modernui=https://modernui-registry.vercel.app/r/{name}.json
```

Or add to `components.json`:

```json
{
  "registries": {
    "@modernui": "https://modernui-registry.vercel.app/r/{name}.json"
  }
}
```

## Install components

```bash
npx shadcn@latest add @modernui/theme
npx shadcn@latest add @modernui/utils
npx shadcn@latest add @modernui/button
npx shadcn@latest add @modernui/login-form
```

## Local development

The registry dev project uses `http://localhost:3000/r/{name}.json` in [components.json](../components.json). Start the dev server before testing namespace installs:

```bash
pnpm dev
npx shadcn@latest add @modernui/button
```
