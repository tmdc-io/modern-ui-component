# ModernUI — Consumer Setup Guide

Install ModernUI components into any React project that supports shadcn/ui (Next.js, Vite, etc.).

## Prerequisites

Your project must have shadcn/ui initialized:

```bash
npx shadcn@latest init
```

## Option A: GitHub Registry (recommended to start)

Replace `your-org/ModernUIComponent` with your actual GitHub owner and repo.

```bash
# Install foundation first
npx shadcn@latest add your-org/ModernUIComponent/theme
npx shadcn@latest add your-org/ModernUIComponent/utils

# Install primitives
npx shadcn@latest add your-org/ModernUIComponent/button
npx shadcn@latest add your-org/ModernUIComponent/input
npx shadcn@latest add your-org/ModernUIComponent/card
npx shadcn@latest add your-org/ModernUIComponent/dialog

# Install composite blocks
npx shadcn@latest add your-org/ModernUIComponent/login-form

# Optional: project conventions
npx shadcn@latest add your-org/ModernUIComponent/project-setup
```

### Discover available components

```bash
npx shadcn@latest list your-org/ModernUIComponent
npx shadcn@latest view your-org/ModernUIComponent/button
```

### Pin a version

```bash
npx shadcn@latest add your-org/ModernUIComponent/button#v1.0.0
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
3. Primitives (`button`, `input`, `card`, `dialog`, etc.)
4. Blocks (`login-form`, etc.)

## What you get

Files are copied directly into your project. You own and can edit every file — there is no opaque npm dependency for components.
