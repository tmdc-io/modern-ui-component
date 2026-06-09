"use client"

import Link from "next/link"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import {
  MODERNUI_VERSION,
  MODERNUI_VERSIONS,
  getModernUiVersionLabel,
} from "@/app/modernui-version"
import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export function VersionDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground h-8 gap-1 px-2 text-sm font-normal"
        >
          {getModernUiVersionLabel(MODERNUI_VERSION)}
          <ChevronDownIcon className="size-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-40">
        <DropdownMenuLabel>Versions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {MODERNUI_VERSIONS.map((entry) => (
          <DropdownMenuItem key={entry.version} asChild>
            <Link href={entry.href} className="flex items-center justify-between">
              <span>{entry.label}</span>
              {entry.current ? (
                <CheckIcon className="text-foreground size-4" />
              ) : null}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
