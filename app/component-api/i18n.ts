import type { ComponentApiDoc } from "@/app/component-variants/types"

export const i18nApi: ComponentApiDoc = {
  features: [
    "LanguageProvider holds the active language for the tree.",
    "useTranslation(messages, locale?) resolves dir + string values for the active language.",
    "LanguageSelector switches language via context or controlled value/onValueChange.",
    "LanguageSelector defaults to English and Español — add locales later without changing call sites.",
    "Zero extra npm dependencies beyond select (registry dependency).",
  ],
  usage: {
    import: `import {
  LanguageProvider,
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { LanguageSelector } from "@/components/ui/language-selector"`,
    example: `<LanguageProvider defaultLanguage="en">
  <LanguageSelector />
</LanguageProvider>`,
  },
  apiReference: {
    title: "LanguageProvider / useTranslation / LanguageSelector",
    props: [
      {
        prop: "defaultLanguage",
        type: "string",
        default: '"en"',
        description: "LanguageProvider — initial language key.",
      },
      {
        prop: "translations",
        type: "Translations",
        description:
          "useTranslation — map of language key → { dir, values, locale? }. Prefer en (and es) entries.",
      },
      {
        prop: "locale",
        type: "string",
        description:
          "useTranslation — optional seed/fallback. Inside LanguageProvider, the provider language wins.",
      },
      {
        prop: "languages",
        type: "LanguageOption[]",
        default:
          '[{ value: "en", label: "English" }, { value: "es", label: "Español" }]',
        description: "LanguageSelector — options shown in the select.",
      },
      {
        prop: "value",
        type: "string",
        description: "LanguageSelector — controlled language key.",
      },
      {
        prop: "onValueChange",
        type: "(value: string) => void",
        description: "LanguageSelector — controlled change handler.",
      },
      {
        prop: "className",
        type: "string",
        description: "LanguageSelector — classes for the select trigger.",
      },
    ],
    footnote:
      "useTranslation returns { t, dir, language, locale, setLanguage }. t is the active values record. Consumer guide: docs/I18N.md.",
  },
  enhancements: [
    {
      enhancement: "Copy-paste friendly",
      benefit: "Same install model as utils — no next-intl or i18next lock-in.",
    },
    {
      enhancement: "RTL-ready dir",
      benefit: "Each catalog entry exposes dir for DirectionProvider and layout.",
    },
  ],
}
