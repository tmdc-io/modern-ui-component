"use client"

import * as React from "react"

import {
  LanguageProvider,
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { LanguageSelector } from "@/registry/default/ui/language-selector"
import { Badge } from "@/registry/default/ui/badge"

const demoMessages = {
  en: {
    dir: "ltr",
    values: {
      title: "Models",
      searchPlaceholder: "Search by keywords",
      hint: "Switch language to see Spanish keys resolve.",
    },
  },
  es: {
    dir: "ltr",
    values: {
      title: "Modelos",
      searchPlaceholder: "Buscar por palabras clave",
      hint: "Cambia el idioma para ver las claves en español.",
    },
  },
} satisfies Translations

function DemoPanel() {
  const { t, language, dir } = useTranslation(demoMessages)

  return (
    <div className="flex w-full max-w-md flex-col gap-4 text-left" dir={dir}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold tracking-wide uppercase">
          {t.title}
        </h3>
        <LanguageSelector />
      </div>
      <input
        readOnly
        value={t.searchPlaceholder}
        className="border-input bg-background h-9 w-full rounded-md border px-3 text-sm"
      />
      <p className="text-muted-foreground text-xs leading-relaxed">{t.hint}</p>
      <Badge variant="secondary" className="w-fit font-mono text-[10px]">
        language: {language}
      </Badge>
    </div>
  )
}

export function I18nOverviewPreview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 text-left text-sm">
      <p className="text-muted-foreground leading-relaxed">
        Installable i18n for ModernUI blocks:{" "}
        <code className="text-foreground text-xs">LanguageProvider</code>,{" "}
        <code className="text-foreground text-xs">useTranslation</code>, and{" "}
        <code className="text-foreground text-xs">LanguageSelector</code>. Ships
        with English and Spanish; add more locales later without changing call
        sites.
      </p>
      <div className="bg-muted/50 flex flex-col gap-2 rounded-md border p-3 font-mono text-xs">
        <span className="text-muted-foreground">{"// Installed to"}</span>
        <span>hooks/use-translation.tsx</span>
        <span>components/ui/language-selector.tsx</span>
      </div>
    </div>
  )
}

export function I18nProviderPreview() {
  return (
    <LanguageProvider defaultLanguage="en" storageKey={null}>
      <DemoPanel />
    </LanguageProvider>
  )
}

export function I18nKeysPreview() {
  return (
    <LanguageProvider defaultLanguage="es" storageKey={null}>
      <I18nKeysPreviewInner />
    </LanguageProvider>
  )
}

function I18nKeysPreviewInner() {
  const { t, language } = useTranslation(demoMessages)

  return (
    <div className="flex w-full max-w-md flex-col gap-3 text-left text-sm">
      <code className="bg-muted/50 block rounded-md border p-3 font-mono text-xs leading-relaxed">
        {`const messages = {\n  en: { dir: "ltr", values: { title: "Models" } },\n  es: { dir: "ltr", values: { title: "Modelos" } },\n}`}
      </code>
      <p>
        Resolved ({language}): <span className="font-medium">{t.title}</span>
      </p>
      <LanguageSelector />
    </div>
  )
}

export function I18nPreview() {
  return (
    <LanguageProvider defaultLanguage="en" storageKey={null}>
      <div className="flex flex-col items-center gap-3">
        <LanguageSelector />
        <span className="text-muted-foreground text-xs">en · es</span>
      </div>
    </LanguageProvider>
  )
}
