"use client"

import * as React from "react"

import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

type TaskRow = {
  id: string
  title: string
  assignee: string
  priority: string
}

const initialTasks: TaskRow[] = [
  { id: "1", title: "Update docs", assignee: "Sarah", priority: "High" },
  { id: "2", title: "Fix filter bug", assignee: "Marcus", priority: "Medium" },
  { id: "3", title: "Ship release", assignee: "Priya", priority: "High" },
]

export function TableInlineEditPreview() {
  const [tasks, setTasks] = React.useState(initialTasks)
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [draft, setDraft] = React.useState("")

  const startEdit = (task: TaskRow) => {
    setEditingId(task.id)
    setDraft(task.title)
  }

  const saveEdit = (id: string) => {
    const trimmed = draft.trim()
    if (trimmed) {
      setTasks((current) =>
        current.map((task) =>
          task.id === id ? { ...task, title: trimmed } : task
        )
      )
    }
    setEditingId(null)
    setDraft("")
  }

  const cancelEdit = () => {
    setEditingId(null)
    setDraft("")
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <span className="text-muted-foreground text-xs">
        Click a title to edit inline — Enter saves, Escape cancels
      </span>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Assignee</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => {
              const isEditing = editingId === task.id

              return (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">
                    {isEditing ? (
                      <div className="flex items-center gap-2">
                        <Input
                          value={draft}
                          onChange={(event) => setDraft(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") saveEdit(task.id)
                            if (event.key === "Escape") cancelEdit()
                          }}
                          className="h-8 max-w-xs"
                          autoFocus
                        />
                        <Button
                          type="button"
                          size="sm"
                          variant="secondary"
                          onClick={() => saveEdit(task.id)}
                        >
                          Save
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={cancelEdit}
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="hover:text-primary text-left transition-colors"
                        onClick={() => startEdit(task)}
                      >
                        {task.title}
                      </button>
                    )}
                  </TableCell>
                  <TableCell>{task.assignee}</TableCell>
                  <TableCell>{task.priority}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
