"use client"

import type {
  ComponentApiReference,
  ComponentEnhancementRow,
  CssVariantGroup,
} from "@/app/component-variants/types"
import { docsCopy } from "@/app/docs-copy-es"
import { docsMessages } from "@/app/docs-messages"
import { LinkifyText } from "@/app/linkify-text"
import { useTranslation } from "@/hooks/use-translation"

export function ApiReferenceTable({
  apiReference,
}: {
  apiReference: ComponentApiReference
}) {
  const { t, language } = useTranslation(docsMessages)
  const title = docsCopy(
    apiReference.title ?? "Component Props",
    language
  )

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left font-medium">
                {t["detail.prop"]}
              </th>
              <th className="px-4 py-3 text-left font-medium">
                {t["detail.type"]}
              </th>
              <th className="px-4 py-3 text-left font-medium">
                {t["detail.default"]}
              </th>
              <th className="px-4 py-3 text-left font-medium">
                {t["detail.description"]}
              </th>
            </tr>
          </thead>
          <tbody>
            {apiReference.props.map((row) => (
              <tr key={row.prop} className="border-b last:border-0">
                <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                  {row.prop}
                </td>
                <td className="px-4 py-3 font-mono text-xs">{row.type}</td>
                <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                  {row.default ?? "—"}
                </td>
                <td className="px-4 py-3">
                  <LinkifyText>
                    {docsCopy(row.description, language) ?? row.description}
                  </LinkifyText>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {apiReference.footnote ? (
        <p className="text-muted-foreground text-sm leading-relaxed">
          <LinkifyText>
            {docsCopy(apiReference.footnote, language) ?? apiReference.footnote}
          </LinkifyText>
        </p>
      ) : null}
    </div>
  )
}

export function CssVariantsReference({
  groups,
}: {
  groups: CssVariantGroup[]
}) {
  const { language } = useTranslation(docsMessages)

  return (
    <div className="flex flex-col gap-6">
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-3">
          <h3 className="text-base font-semibold tracking-tight">
            {docsCopy(group.title, language) ?? group.title}
          </h3>
          <ul className="flex flex-col gap-2">
            {group.variants.map((variant) => (
              <li
                key={variant.name}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                <code className="text-foreground text-xs">{variant.name}</code>
                {" — "}
                <LinkifyText>
                  {docsCopy(variant.description, language) ??
                    variant.description}
                </LinkifyText>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function EnhancementsTable({
  rows,
}: {
  rows: ComponentEnhancementRow[]
}) {
  const { t, language } = useTranslation(docsMessages)

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-4 py-3 text-left font-medium">
              {t["detail.enhancement"]}
            </th>
            <th className="px-4 py-3 text-left font-medium">
              {t["detail.benefit"]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.enhancement} className="border-b last:border-0">
              <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                {docsCopy(row.enhancement, language) ?? row.enhancement}
              </td>
              <td className="px-4 py-3">
                <LinkifyText>
                  {docsCopy(row.benefit, language) ?? row.benefit}
                </LinkifyText>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
