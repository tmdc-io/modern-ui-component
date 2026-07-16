"use client"

import * as React from "react"

export type TranslationEntry = {
  dir: "ltr" | "rtl"
  values: Record<string, string>
  locale?: string
}

export type Translations = Record<string, TranslationEntry>

type LanguageContextValue = {
  language: string
  setLanguage: (language: string) => void
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

export const LANGUAGE_STORAGE_KEY = "modernui-language"

function readStoredLanguage(storageKey: string, fallback: string) {
  try {
    return window.localStorage.getItem(storageKey) ?? fallback
  } catch {
    return fallback
  }
}

function writeStoredLanguage(storageKey: string, language: string) {
  try {
    window.localStorage.setItem(storageKey, language)
  } catch {
    // ignore storage failures
  }
}

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = LANGUAGE_STORAGE_KEY,
}: {
  children: React.ReactNode
  defaultLanguage?: string
  /** Pass `null` to disable persistence. */
  storageKey?: string | null
}) {
  const [override, setOverride] = React.useState<string | null>(null)
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const subscribe = React.useCallback(
    (onStoreChange: () => void) => {
      if (!storageKey) return () => {}
      const onStorage = (event: StorageEvent) => {
        if (event.key === storageKey) onStoreChange()
      }
      window.addEventListener("storage", onStorage)
      return () => window.removeEventListener("storage", onStorage)
    },
    [storageKey]
  )

  const getSnapshot = React.useCallback(() => {
    if (!storageKey) return defaultLanguage
    return readStoredLanguage(storageKey, defaultLanguage)
  }, [defaultLanguage, storageKey])

  const getServerSnapshot = React.useCallback(
    () => defaultLanguage,
    [defaultLanguage]
  )

  const storedLanguage = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  // Match SSR on first paint, then apply persisted language.
  const language =
    override ?? (hasMounted ? storedLanguage : defaultLanguage)

  const setLanguage = React.useCallback(
    (next: string) => {
      setOverride(next)
      if (storageKey) writeStoredLanguage(storageKey, next)
    },
    [storageKey]
  )

  const value = React.useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function useOptionalLanguage() {
  return React.useContext(LanguageContext)
}

/**
 * Resolve strings for the active language.
 * Pass `locale` to pin a language (e.g. RTL demos under a site-wide provider).
 * Omit `locale` to follow LanguageProvider / LanguageSelector.
 */
export function useTranslation(translations: Translations, locale?: string) {
  const context = useOptionalLanguage()
  const [localLanguage, setLocalLanguage] = React.useState(locale ?? "en")

  // Explicit locale pins the catalog (RTL demos). Otherwise prefer provider.
  const language = locale ?? context?.language ?? localLanguage
  const setLanguage = context?.setLanguage ?? setLocalLanguage

  const entry =
    translations[language] ??
    (locale ? translations[locale] : undefined) ??
    translations.en ??
    Object.values(translations)[0]

  if (!entry) {
    throw new Error("useTranslation requires at least one translation entry")
  }

  return {
    dir: entry.dir,
    language: entry.locale ?? language,
    locale: entry.locale ?? language,
    t: entry.values,
    setLanguage,
  }
}
