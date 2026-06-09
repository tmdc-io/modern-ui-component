export const MODERNUI_VERSION = "1.0.0"

export type ModernUiVersionEntry = {
  version: string
  label: string
  href: string
  current?: boolean
}

export const MODERNUI_VERSIONS: ModernUiVersionEntry[] = [
  {
    version: "1.0.0",
    label: "v1.0.0",
    href: "/",
    current: true,
  },
]

export function getModernUiVersionLabel(version = MODERNUI_VERSION) {
  return `v${version}`
}
