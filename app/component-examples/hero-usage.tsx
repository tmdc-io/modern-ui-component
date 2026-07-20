"use client"

import * as React from "react"
import {
  AppWindowIcon,
  BarChart3Icon,
  BoxIcon,
  FileTextIcon,
  GaugeIcon,
  LayersIcon,
  LinkIcon,
  PlayCircleIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react"

import {
  Hero,
  HeroMemberStack,
  type HeroMember,
  type HeroProps,
} from "@/registry/default/blocks/hero/hero"
import { DropdownMenuItem } from "@/registry/default/ui/dropdown-menu"
import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"

function SnowflakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <path
        fill="#29B5E8"
        d="M8 1.2 9.1 3.5l2.5-.4-.6 2.5 2.3 1.1-1.8 1.8 1.8 1.8-2.3 1.1.6 2.5-2.5-.4L8 14.8 6.9 12.5l-2.5.4.6-2.5-2.3-1.1 1.8-1.8-1.8-1.8 2.3-1.1-.6-2.5 2.5.4L8 1.2Z"
      />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M8 1.2a6.8 6.8 0 0 0-2.15 13.26c.34.06.47-.15.47-.33v-1.16c-1.92.42-2.32-.93-2.32-.93-.31-.8-.76-1.01-.76-1.01-.62-.43.05-.42.05-.42.69.05 1.05.71 1.05.71.61 1.05 1.6.75 1.99.57.06-.44.24-.75.44-.92-1.54-.18-3.16-.77-3.16-3.43 0-.76.27-1.38.71-1.87-.07-.18-.31-.9.07-1.87 0 0 .58-.19 1.9.71a6.5 6.5 0 0 1 3.5 0c1.32-.9 1.9-.71 1.9-.71.38.97.14 1.69.07 1.87.44.49.71 1.1.71 1.87 0 2.67-1.63 3.25-3.18 3.42.25.22.47.64.47 1.29v1.91c0 .18.13.39.47.33A6.8 6.8 0 0 0 8 1.2Z"
      />
    </svg>
  )
}

function JiraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <path fill="#2684FF" d="M8.1 1.2 1.2 8.1a.55.55 0 0 0 0 .78l6.9 6.9a.55.55 0 0 0 .78 0l6.9-6.9a.55.55 0 0 0 0-.78L8.88 1.2a.55.55 0 0 0-.78 0Z" />
      <path fill="#0052CC" d="M8.1 4.7 4.7 8.1l3.4 3.4 3.4-3.4L8.1 4.7Z" />
    </svg>
  )
}

const demoMessages = {
  en: {
    dir: "ltr",
    values: {
      title: "E-Commerce & Digital Experience Analytics",
      subtitle: "Conversion Rate",
      description:
        "Our B2B e-commerce platform offers comprehensive analytics that track website behaviour, monitor conversion funnels, and analyze cart abandonment. These insights help optimise the digital customer journey and drive significant growth in online revenue. These insights help optimise the journey.",
      source: "Source",
      links: "Links",
      governance: "Governance",
      identifier: "Identifier",
      gateway: "Gateway",
      domain: "Domain",
      version: "Version",
      members: "Members",
      referenceLinks: "4 Reference links",
      dataQuality: "Data Quality",
      accuracy: "Accuracy",
      coverage: "Coverage",
      completeness: "Completeness",
      timeliness: "Timeliness",
      conformity: "Conformity",
      uniqueness: "Uniqueness",
      consistency: "Consistency",
      validity: "Validity",
      assets: "Assets",
      quality: "Quality",
      runs: "Runs",
      metrics: "Metrics",
      perspectives: "Perspectives",
      apps: "Apps",
      usage: "Usage",
      activate: "Activate",
      follow: "Follow",
      explore: "Explore",
      openWorkspace: "Open in workspace",
      queryData: "Query data",
      share: "Share",
    },
  },
  es: {
    dir: "ltr",
    values: {
      title: "Analítica de e-commerce y experiencia digital",
      subtitle: "Tasa de conversión",
      description:
        "Nuestra plataforma B2B de e-commerce ofrece analítica completa que rastrea el comportamiento del sitio, monitorea embudos de conversión y analiza el abandono del carrito. Estos insights ayudan a optimizar el recorrido digital del cliente e impulsar el crecimiento de ingresos en línea.",
      source: "Origen",
      links: "Enlaces",
      governance: "Gobernanza",
      identifier: "Identificador",
      gateway: "Puerta de enlace",
      domain: "Dominio",
      version: "Versión",
      members: "Miembros",
      referenceLinks: "4 enlaces de referencia",
      dataQuality: "Calidad de datos",
      accuracy: "Exactitud",
      coverage: "Cobertura",
      completeness: "Completitud",
      timeliness: "Oportunidad",
      conformity: "Conformidad",
      uniqueness: "Unicidad",
      consistency: "Consistencia",
      validity: "Validez",
      assets: "Activos",
      quality: "Calidad",
      runs: "Ejecuciones",
      metrics: "Métricas",
      perspectives: "Perspectivas",
      apps: "Apps",
      usage: "Uso",
      activate: "Activar",
      follow: "Seguir",
      explore: "Explorar",
      openWorkspace: "Abrir en el espacio de trabajo",
      queryData: "Consultar datos",
      share: "Compartir",
    },
  },
} satisfies Translations

const members: HeroMember[] = [
  { name: "Sara Fox", initials: "SF", className: "bg-rose-200 text-rose-800" },
  { name: "Amit Shah", initials: "AS", className: "bg-amber-200 text-amber-800" },
  { name: "Kris Meyer", initials: "KM", className: "bg-teal-bg-1 text-primary" },
  { name: "Dana Lee", initials: "DL" },
  { name: "Ravi Nair", initials: "RN" },
]

function useFollow() {
  const [following, setFollowing] = React.useState(false)
  return { following, onFollowChange: setFollowing }
}

function useHeroDemoContent() {
  const { t } = useTranslation(demoMessages)

  const exploreMenu = (
    <>
      <DropdownMenuItem>{t.openWorkspace}</DropdownMenuItem>
      <DropdownMenuItem>{t.queryData}</DropdownMenuItem>
      <DropdownMenuItem>{t.share}</DropdownMenuItem>
    </>
  )

  const metaColumns: HeroProps["metaColumns"] = [
    {
      title: t.source,
      items: [
        {
          label: t.identifier,
          value: "digital_experience_analytics",
          mono: true,
        },
        {
          label: t.gateway,
          value: "Snowflake",
          icon: <SnowflakeIcon className="size-4" />,
        },
        { label: t.domain, value: "Marketing" },
      ],
    },
    {
      title: t.links,
      items: [
        {
          value: "ecommerce-dp-repo",
          icon: <GithubIcon className="size-4 text-foreground" />,
        },
        {
          value: t.referenceLinks,
          icon: <LinkIcon className="text-muted-foreground size-3.5" />,
        },
        {
          value: "Jira",
          icon: <JiraIcon className="size-4" />,
        },
      ],
    },
    {
      title: t.governance,
      items: [
        {
          label: t.version,
          value: <span className="text-primary underline">v0.12</span>,
        },
        {
          label: t.members,
          value: <HeroMemberStack members={members} />,
        },
      ],
    },
  ]

  const quality: HeroProps["quality"] = {
    title: t.dataQuality,
    percentage: 85,
    passed: 6,
    failed: 2,
    dimensions: [
      { name: t.accuracy, status: "pass" },
      { name: t.coverage, status: "pass" },
      { name: t.completeness, status: "pass" },
      { name: t.timeliness, status: "warn" },
      { name: t.conformity, status: "pass" },
      { name: t.uniqueness, status: "pass" },
      { name: t.consistency, status: "warn" },
      { name: t.validity, status: "pass" },
    ],
    href: "#quality",
  }

  const jumpItems: HeroProps["jumpItems"] = [
    { label: t.assets, icon: <FileTextIcon className="size-3.5" />, hasDropdown: true },
    { label: t.quality, icon: <GaugeIcon className="size-3.5" /> },
    { label: t.runs, icon: <PlayCircleIcon className="size-3.5" /> },
    { label: t.metrics, icon: <BarChart3Icon className="size-3.5" /> },
    { label: t.perspectives, icon: <LayersIcon className="size-3.5" /> },
    { label: t.apps, icon: <AppWindowIcon className="size-3.5" /> },
    { label: t.usage, icon: <UsersIcon className="size-3.5" /> },
    {
      label: t.activate,
      icon: <SparklesIcon className="size-3.5" />,
      hasDropdown: true,
    },
  ]

  return {
    title: t.title,
    subtitle: t.subtitle,
    subtitleIcon: <BoxIcon className="size-3.5" />,
    icon: <BoxIcon className="size-5" strokeWidth={1.5} />,
    description: t.description,
    metaColumns,
    quality,
    jumpItems,
    followLabel: t.follow,
    exploreLabel: t.explore,
    exploreMenu,
  }
}

export function HeroFullPreview() {
  const follow = useFollow()
  const demo = useHeroDemoContent()
  return (
    <div className="border-grey-8 w-full overflow-x-auto rounded-lg border">
      <Hero
        title={demo.title}
        subtitle={demo.subtitle}
        subtitleIcon={demo.subtitleIcon}
        icon={demo.icon}
        {...follow}
        variant="full"
        description={demo.description}
        metaColumns={demo.metaColumns}
        quality={demo.quality}
        jumpItems={demo.jumpItems}
        followLabel={demo.followLabel}
        exploreLabel={demo.exploreLabel}
        exploreMenu={demo.exploreMenu}
      />
    </div>
  )
}

export function HeroStickyPreview() {
  const follow = useFollow()
  const demo = useHeroDemoContent()
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <Hero
        title={demo.title}
        subtitle={demo.subtitle}
        subtitleIcon={demo.subtitleIcon}
        icon={demo.icon}
        {...follow}
        variant="sticky"
        followLabel={demo.followLabel}
        exploreLabel={demo.exploreLabel}
        exploreMenu={demo.exploreMenu}
      />
    </div>
  )
}

export function HeroInternalPreview() {
  const follow = useFollow()
  const demo = useHeroDemoContent()
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <Hero
        title={demo.title}
        subtitle={demo.subtitle}
        subtitleIcon={demo.subtitleIcon}
        icon={demo.icon}
        {...follow}
        variant="internal"
        followLabel={demo.followLabel}
        exploreLabel={demo.exploreLabel}
        exploreMenu={demo.exploreMenu}
      />
    </div>
  )
}

export function HeroInternalJumpPreview() {
  const follow = useFollow()
  const demo = useHeroDemoContent()
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <Hero
        title={demo.title}
        subtitle={demo.subtitle}
        subtitleIcon={demo.subtitleIcon}
        icon={demo.icon}
        {...follow}
        variant="internal"
        jumpItems={demo.jumpItems}
        followLabel={demo.followLabel}
        exploreLabel={demo.exploreLabel}
        exploreMenu={demo.exploreMenu}
      />
    </div>
  )
}

export function HeroInternalDescriptionPreview() {
  const follow = useFollow()
  const demo = useHeroDemoContent()
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <Hero
        title={demo.title}
        subtitle={demo.subtitle}
        subtitleIcon={demo.subtitleIcon}
        icon={demo.icon}
        {...follow}
        variant="internal"
        description={demo.description}
        jumpItems={demo.jumpItems}
        followLabel={demo.followLabel}
        exploreLabel={demo.exploreLabel}
        exploreMenu={demo.exploreMenu}
      />
    </div>
  )
}
