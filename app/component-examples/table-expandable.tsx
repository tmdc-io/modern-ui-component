"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "1",
    name: "Router docs",
    status: "Active",
    detail: "Documentation for TanStack Router v1 with migration guides.",
  },
  {
    id: "2",
    name: "Query cache",
    status: "Review",
    detail: "Optimistic updates and stale-time tuning for dashboard queries.",
  },
  {
    id: "3",
    name: "Table filters",
    status: "Shipped",
    detail: "Popover column filters with text, select, and checkbox controls.",
  },
]

export function TableExpandablePreview() {
  const [expanded, setExpanded] = React.useState<Set<string>>(new Set(["1"]))

  const toggleRow = (id: string) => {
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8" />
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => {
          const isExpanded = expanded.has(project.id)

          return (
            <React.Fragment key={project.id}>
              <TableRow>
                <TableCell>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-7"
                    onClick={() => toggleRow(project.id)}
                    aria-expanded={isExpanded}
                    aria-label={`Toggle ${project.name} details`}
                  >
                    <ChevronDownIcon
                      className={cn(
                        "size-4 transition-transform",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </Button>
                </TableCell>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.status}</TableCell>
              </TableRow>
              {isExpanded ? (
                <TableRow>
                  <TableCell colSpan={3} className="bg-muted/30 text-sm">
                    {project.detail}
                  </TableCell>
                </TableRow>
              ) : null}
            </React.Fragment>
          )
        })}
      </TableBody>
    </Table>
  )
}
