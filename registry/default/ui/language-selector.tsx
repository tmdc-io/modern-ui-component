"use client"

import * as React from "react"

import { useOptionalLanguage } from "@/hooks/use-translation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"
import { cn } from "@/lib/utils"

export type LanguageOption = {
  value: string
  label: string
}

const defaultLanguages: LanguageOption[] = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
]

function LanguageSelector({
  value,
  onValueChange,
  className,
  languages = defaultLanguages,
  ...props
}: Omit<React.ComponentProps<typeof Select>, "value" | "onValueChange"> & {
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  languages?: LanguageOption[]
}) {
  const context = useOptionalLanguage()
  const [uncontrolled, setUncontrolled] = React.useState("en")

  const resolvedValue = value ?? context?.language ?? uncontrolled
  const handleChange =
    onValueChange ?? context?.setLanguage ?? setUncontrolled

  const options = React.useMemo(() => {
    if (languages.some((language) => language.value === resolvedValue)) {
      return languages
    }
    return [
      ...languages,
      { value: resolvedValue, label: resolvedValue.toUpperCase() },
    ]
  }, [languages, resolvedValue])

  return (
    <Select value={resolvedValue} onValueChange={handleChange} {...props}>
      <SelectTrigger
        size="sm"
        className={cn("min-w-[8.5rem]", className)}
        aria-label="Select language"
      >
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {options.map((language) => (
          <SelectItem key={language.value} value={language.value}>
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export { LanguageSelector }
