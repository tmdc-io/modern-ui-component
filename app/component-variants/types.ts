import type { ComponentType } from "react"

export type ApiPropRow = {
  prop: string
  type: string
  default?: string
  description: string
}

export type ComponentApiReference = {
  title?: string
  props: ApiPropRow[]
  footnote?: string
}

export type CssVariantRow = {
  name: string
  description: string
}

export type CssVariantGroup = {
  title: string
  variants: CssVariantRow[]
}

export type ComponentEnhancementRow = {
  enhancement: string
  benefit: string
}

export type ComponentApiDoc = {
  features?: string[]
  intro?: string
  usage?: { import: string; example: string }
  apiReference?: ComponentApiReference
  cssVariants?: CssVariantGroup[]
  enhancements?: ComponentEnhancementRow[]
}

export type DocLink = {
  href: string
  label: string
}

export type ComponentVariant = {
  id: string
  title: string
  description: string
  Preview?: ComponentType
  code: string
  body?: string
  docLink?: DocLink
  docLinks?: DocLink[]
  tall?: boolean
  codeOnly?: boolean
}

export type ComponentVariantSection = {
  id: string
  title?: string
  description?: string
  body?: string
  docLink?: DocLink
  variants: ComponentVariant[]
}

export type ComponentVariantPage = ComponentApiDoc & {
  name: string
  title: string
  description: string
  install: string
  variants: ComponentVariant[]
  sections?: ComponentVariantSection[]
}
