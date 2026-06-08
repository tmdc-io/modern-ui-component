import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { BackToTop } from "@/app/back-to-top"
import { Providers } from "@/app/providers"
import { SiteFooter } from "@/app/site-footer"
import { SiteHeader } from "@/app/site-header"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ModernUI Component Registry",
  description:
    "A shadcn-extended React UI library with 60+ components distributed via the shadcn CLI.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex min-h-svh flex-col">
            <div id="top" className="scroll-mt-0" />
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
            <BackToTop />
          </div>
        </Providers>
      </body>
    </html>
  )
}
