export const i18nCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/i18n`,

  provider: `import {
  LanguageProvider,
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { LanguageSelector } from "@/components/ui/language-selector"

const messages = {
  en: {
    dir: "ltr",
    values: {
      title: "Models",
      searchPlaceholder: "Search by keywords",
    },
  },
  es: {
    dir: "ltr",
    values: {
      title: "Modelos",
      searchPlaceholder: "Buscar por palabras clave",
    },
  },
} satisfies Translations

function Header() {
  const { t } = useTranslation(messages)
  return (
    <header className="flex items-center justify-between gap-4">
      <h3>{t.title}</h3>
      <LanguageSelector />
    </header>
  )
}

export function App() {
  return (
    <LanguageProvider defaultLanguage="en">
      <Header />
    </LanguageProvider>
  )
}`,

  keys: `import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"

const messages = {
  en: {
    dir: "ltr",
    values: {
      title: "Models",
      searchPlaceholder: "Search by keywords",
    },
  },
  es: {
    dir: "ltr",
    values: {
      title: "Modelos",
      searchPlaceholder: "Buscar por palabras clave",
    },
  },
} satisfies Translations

function ModelsTableHeader() {
  const { t } = useTranslation(messages)
  return <h3>{t.title}</h3>
}`,

  selector: `import { LanguageProvider } from "@/hooks/use-translation"
import { LanguageSelector } from "@/components/ui/language-selector"

<LanguageProvider defaultLanguage="en">
  <LanguageSelector
    languages={[
      { value: "en", label: "English" },
      { value: "es", label: "Español" },
    ]}
  />
</LanguageProvider>`,
}
