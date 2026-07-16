"use client"

/**
 * Docs compatibility shim — re-exports the real i18n registry module.
 * Generated RTL demos import from this path; consumers install `i18n` instead.
 */
export {
  LanguageProvider,
  useLanguage,
  useOptionalLanguage,
  useTranslation,
  type TranslationEntry,
  type Translations,
} from "@/hooks/use-translation"
export {
  LanguageSelector,
  type LanguageOption,
} from "@/registry/default/ui/language-selector"
