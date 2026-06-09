export const sidebarModernUiRscCode = `import * as React from "react"
import {
  BookOpen,
  Boxes,
  ChartArea,
  LayoutDashboard,
  Palette,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
} from "@/components/ui/sidebar"

const registryProjects = [
  {
    name: "Component Registry",
    url: "#",
    icon: Boxes,
    badge: "57",
  },
  {
    name: "Design Tokens",
    url: "#",
    icon: Palette,
    badge: "12",
  },
  {
    name: "Blocks",
    url: "#",
    icon: LayoutDashboard,
    badge: "4",
  },
  {
    name: "Charts",
    url: "#",
    icon: ChartArea,
    badge: "6",
  },
  {
    name: "Documentation",
    url: "#",
    icon: BookOpen,
    badge: "8",
  },
]

async function fetchRegistryProjects() {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return registryProjects
}

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>ModernUI</SidebarGroupLabel>
            <SidebarGroupContent>
              <React.Suspense fallback={<NavProjectsSkeleton />}>
                <NavProjects />
              </React.Suspense>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

async function NavProjects() {
  const projects = await fetchRegistryProjects()

  return (
    <SidebarMenu>
      {projects.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
          <SidebarMenuBadge>{project.badge}</SidebarMenuBadge>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
`
