"use client"

import Link from "next/link"
import { ExternalLinkIcon } from "lucide-react"

import {
  acknowledgements,
  attributionGeneratedAt,
  attributionStats,
  developmentAttributionGroups,
  runtimeAttributionGroups,
  type Acknowledgement,
  type AttributionGroup,
  type AttributionPackage,
} from "@/app/attributions-data"
import { Badge } from "@/registry/default/ui/badge"
import { cn } from "@/lib/utils"

function PackageHomepage({
  name,
  homepage,
}: {
  name: string
  homepage: string
}) {
  if (!homepage) {
    return <span className="font-mono text-xs">{name}</span>
  }

  return (
    <a
      href={homepage}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary inline-flex items-center gap-1 font-mono text-xs hover:underline"
    >
      {name}
      <ExternalLinkIcon className="size-3 shrink-0 opacity-70" />
    </a>
  )
}

function AttributionPackageTable({
  groups,
  className,
}: {
  groups: AttributionGroup[]
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      {groups.map((group) => (
        <section key={group.title} className="flex flex-col gap-3">
          <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">Package</th>
                  <th className="px-4 py-3 text-left font-medium">Version</th>
                  <th className="px-4 py-3 text-left font-medium">License</th>
                  <th className="hidden px-4 py-3 text-left font-medium md:table-cell">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {group.packages.map((pkg) => (
                  <AttributionPackageRow key={pkg.name} pkg={pkg} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  )
}

function AttributionPackageRow({ pkg }: { pkg: AttributionPackage }) {
  return (
    <tr className="border-b last:border-0">
      <td className="px-4 py-3">
        <PackageHomepage name={pkg.name} homepage={pkg.homepage} />
      </td>
      <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
        {pkg.version}
      </td>
      <td className="px-4 py-3">
        <Badge variant="secondary" className="font-mono text-[10px]">
          {pkg.license}
        </Badge>
      </td>
      <td className="text-muted-foreground hidden px-4 py-3 md:table-cell">
        {pkg.role}
      </td>
    </tr>
  )
}

function AcknowledgementsTable({ items }: { items: Acknowledgement[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-4 py-3 text-left font-medium">Project</th>
            <th className="px-4 py-3 text-left font-medium">License</th>
            <th className="hidden px-4 py-3 text-left font-medium md:table-cell">
              Contribution
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name} className="border-b last:border-0">
              <td className="px-4 py-3">
                <a
                  href={item.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
                >
                  {item.name}
                  <ExternalLinkIcon className="size-3 shrink-0 opacity-70" />
                </a>
              </td>
              <td className="px-4 py-3">
                <Badge variant="secondary" className="font-mono text-[10px]">
                  {item.license}
                </Badge>
              </td>
              <td className="text-muted-foreground hidden px-4 py-3 md:table-cell">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function AttributionsSummaryPreview() {
  const highlights = [
    "Radix UI",
    "TanStack Table",
    "Tailwind CSS",
    "React",
    "shadcn/ui",
  ]

  return (
    <div className="flex w-full max-w-2xl flex-col gap-4 text-left text-sm">
      <p className="text-muted-foreground leading-relaxed">
        ModernUI is built on open-source libraries. This registry ships with{" "}
        <strong className="text-foreground font-medium">
          {attributionStats.runtimeCount} runtime
        </strong>{" "}
        and{" "}
        <strong className="text-foreground font-medium">
          {attributionStats.developmentCount} development
        </strong>{" "}
        npm packages — licenses and links are listed on the full credits page.
      </p>
      <div className="flex flex-wrap gap-2">
        {highlights.map((name) => (
          <Badge key={name} variant="outline">
            {name}
          </Badge>
        ))}
      </div>
      <Link
        href="/components/attributions"
        className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline"
      >
        View full attributions
        <ExternalLinkIcon className="size-3.5" />
      </Link>
    </div>
  )
}

export function AttributionsRuntimePreview() {
  return (
    <AttributionPackageTable
      groups={runtimeAttributionGroups}
      className="w-full text-left"
    />
  )
}

export function AttributionsDevelopmentPreview() {
  return (
    <AttributionPackageTable
      groups={developmentAttributionGroups}
      className="w-full text-left"
    />
  )
}

export function AttributionsAcknowledgementsPreview() {
  return <AcknowledgementsTable items={acknowledgements} />
}

export function AttributionsPageIntro() {
  return (
    <p className="text-muted-foreground text-sm leading-relaxed">
      Package metadata synced from{" "}
      <code className="text-foreground text-xs">package.json</code> on{" "}
      {attributionGeneratedAt}. Run{" "}
      <code className="text-foreground text-xs">pnpm docs:sync-attributions</code>{" "}
      after dependency changes to refresh this page.
    </p>
  )
}
