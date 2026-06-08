"use client"

import * as React from "react"
import { z } from "zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import { Button } from "@/registry/default/ui/button"

const loginFormSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export function LoginForm() {
  const [pending, setPending] = React.useState(false)
  const [state, setState] = React.useState({
    defaultValues: { email: "", password: "" },
    errors: { email: "", password: "" },
  })

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setPending(true)

      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries())
      const result = loginFormSchema.safeParse(data)

      if (!result.success) {
        setState((prev) => ({
          ...prev,
          errors: Object.fromEntries(
            Object.entries(result.error.flatten().fieldErrors).map(
              ([key, value]) => [key, value?.[0] ?? ""]
            )
          ) as typeof prev.errors,
        }))
        setPending(false)
        return
      }

      setPending(false)
    },
    []
  )

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors.email}
          >
            <Label
              htmlFor="email"
              className="group-data-[invalid=true]/field:text-destructive"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              disabled={pending}
              aria-invalid={!!state.errors.email}
              defaultValue={state.defaultValues.email}
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
            />
            {state.errors.email && (
              <p className="text-destructive text-sm">{state.errors.email}</p>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors.password}
          >
            <Label
              htmlFor="password"
              className="group-data-[invalid=true]/field:text-destructive"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={pending}
              aria-invalid={!!state.errors.password}
              defaultValue={state.defaultValues.password}
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
            />
            {state.errors.password && (
              <p className="text-destructive text-sm">{state.errors.password}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button type="submit" variant="brand" className="w-full" disabled={pending}>
            {pending ? "Signing in..." : "Sign in"}
          </Button>
          <p className="text-muted-foreground text-center text-sm">
            Don&apos;t have an account?{" "}
            <button type="button" className="text-primary underline-offset-4 hover:underline">
              Create one
            </button>
          </p>
        </CardFooter>
      </Card>
    </form>
  )
}
