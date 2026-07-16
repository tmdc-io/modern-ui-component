import { i18nCodes } from "@/app/component-examples/i18n-codes"
import {
  I18nKeysPreview,
  I18nOverviewPreview,
  I18nProviderPreview,
} from "@/app/component-examples/i18n-preview"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const i18nVariantPage: ComponentVariantPage = {
  name: "i18n",
  title: "i18n",
  description:
    "LanguageProvider, useTranslation, and LanguageSelector for ModernUI blocks. Defaults to English and Spanish — add more locales later without changing call sites.",
  install: i18nCodes.install,
  intro:
    "Full consumer guide (install, provider wiring, which blocks use messages vs props, next-intl bridge): docs/I18N.md in the repository.",
  usage: {
    import: `import {
  LanguageProvider,
  useTranslation,
} from "@/hooks/use-translation"
import { LanguageSelector } from "@/components/ui/language-selector"`,
    example: i18nCodes.provider,
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      description: "What gets installed and how blocks consume message keys.",
      variants: [
        {
          id: "overview",
          title: "Foundation i18n",
          description:
            "Zero-dep provider + hook + selector. Install after theme and utils.",
          Preview: I18nOverviewPreview,
          code: i18nCodes.install,
          tall: true,
        },
      ],
    },
    {
      id: "usage",
      title: "Usage",
      description: "Wrap the app once, then read keys in components and blocks.",
      variants: [
        {
          id: "provider",
          title: "Provider + selector",
          description:
            "LanguageProvider holds the active language; LanguageSelector switches it.",
          Preview: I18nProviderPreview,
          code: i18nCodes.provider,
          tall: true,
        },
        {
          id: "keys",
          title: "Message keys",
          description:
            "Define en + es catalogs under the same keys; add locales later without changing call sites.",
          Preview: I18nKeysPreview,
          code: i18nCodes.keys,
          tall: true,
        },
        {
          id: "selector",
          title: "Language selector",
          description:
            "Default options are English and Español; pass a custom languages list to extend.",
          code: i18nCodes.selector,
          codeOnly: true,
        },
      ],
    },
    {
      id: "install",
      title: "Install",
      description:
        "Adds hooks/use-translation.tsx and components/ui/language-selector.tsx (pulls select + utils).",
      variants: [
        {
          id: "install",
          title: "CLI",
          description: "Optional foundation step after theme and utils.",
          code: i18nCodes.install,
          codeOnly: true,
        },
      ],
    },
  ],
  variants: [],
}
