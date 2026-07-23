export const themeCodes = {
  install: `npx shadcn@latest add @modernui/theme
npx shadcn@latest add tmdc-io/modern-ui-component/theme`,

  import: `// app/globals.css
@import "tailwindcss";
@import "@/app/globals.css"; /* or your theme path after shadcn add */

/* After install, theme variables live in your globals.css */`,

  darkMode: `// Enable class-based dark mode (Tailwind v4 + next-themes)
<html className="dark" lang="en">

// Or toggle with next-themes ThemeProvider
import { ThemeProvider } from "next-themes"

<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>`,

  tokens: `/* Semantic tokens — use in components */
<button className="bg-primary text-primary-foreground">Save</button>
<div className="bg-muted text-muted-foreground">Muted surface</div>

/* Figma foundation */
<span className="text-black-secondary">Secondary ink</span>
<div className="bg-cream-bg-2 border border-grey-8">Cream surface</div>

/* DataOS quality states */
<span className="bg-dataos-success-bg text-dataos-success-fg">Pass</span>`,
}
