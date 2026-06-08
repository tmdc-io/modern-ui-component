# ModernUI Component Library

## Overview

This repository is the source registry for **ModernUI** — a shadcn-extended React component library distributed via the official `shadcn` CLI.

## Conventions

- UI primitives live in `registry/default/ui/`
- Composite blocks live in `registry/default/blocks/`
- Design tokens live in `registry/default/theme/globals.css`
- Registry catalog is defined in the root `registry.json`

## Adding a new component

1. Create the source file under `registry/default/ui/` or `registry/default/blocks/`
2. Register it in the root `registry.json`
3. Run `pnpm registry:build` to rebuild hosted JSON
4. Run `npx shadcn@latest registry validate .` before merging

## Import paths

- Registry source files use `@/lib/utils` for utilities
- Blocks import primitives from `@/registry/default/ui/...` during local development
- Consumer projects receive files at `@/components/ui/...` after `shadcn add`
