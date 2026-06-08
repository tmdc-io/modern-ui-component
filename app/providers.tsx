"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

import { Toaster } from "@/registry/default/ui/sonner"
import { TooltipProvider } from "@/registry/default/ui/tooltip"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        {children}
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  )
}
