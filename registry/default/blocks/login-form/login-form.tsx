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
import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"

export const loginFormMessages = {
  en: {
    dir: "ltr",
    values: {
      title: "Sign in",
      description: "Enter your credentials to access your account.",
      email: "Email",
      emailPlaceholder: "you@company.com",
      password: "Password",
      passwordPlaceholder: "••••••••",
      signIn: "Sign in",
      signingIn: "Signing in...",
      noAccount: "Don't have an account?",
      createOne: "Create one",
      validEmail: "Enter a valid email address",
      passwordMin: "Password must be at least 8 characters",
    },
  },
  es: {
    dir: "ltr",
    values: {
      title: "Iniciar sesion",
      description: "Ingresa tus credenciales para acceder a tu cuenta.",
      email: "Correo electronico",
      emailPlaceholder: "tu@empresa.com",
      password: "Contrasena",
      passwordPlaceholder: "••••••••",
      signIn: "Iniciar sesion",
      signingIn: "Iniciando sesion...",
      noAccount: "No tienes una cuenta?",
      createOne: "Crear una",
      validEmail: "Ingresa una direccion de correo valida",
      passwordMin: "La contrasena debe tener al menos 8 caracteres",
    },
  },
} satisfies Translations

function createLoginFormSchema(validEmail: string, passwordMin: string) {
  return z.object({
    email: z.string().email(validEmail),
    password: z.string().min(8, passwordMin),
  })
}

export function LoginForm() {
  const { t } = useTranslation(loginFormMessages)
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
      const result = createLoginFormSchema(t.validEmail, t.passwordMin).safeParse(
        data
      )

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
    [t]
  )

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>{t.title}</CardTitle>
          <CardDescription>
            {t.description}
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
              {t.email}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t.emailPlaceholder}
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
              {t.password}
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={t.passwordPlaceholder}
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
            {pending ? t.signingIn : t.signIn}
          </Button>
          <p className="text-muted-foreground text-center text-sm">
            {t.noAccount}{" "}
            <button type="button" className="text-primary underline-offset-4 hover:underline">
              {t.createOne}
            </button>
          </p>
        </CardFooter>
      </Card>
    </form>
  )
}
