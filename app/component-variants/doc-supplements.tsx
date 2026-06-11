"use client"

import { InputDocFieldPreview } from "@/app/component-examples/generated/input/doc-field"
import { InputDocFieldCode } from "@/app/component-examples/generated/input/doc-field.code"
import { InputDocInvalidPreview } from "@/app/component-examples/generated/input/doc-invalid"
import { InputDocInvalidCode } from "@/app/component-examples/generated/input/doc-invalid.code"
import { TextareaDocFieldPreview } from "@/app/component-examples/generated/textarea/doc-field"
import { TextareaDocFieldCode } from "@/app/component-examples/generated/textarea/doc-field.code"
import { TextareaDocInvalidPreview } from "@/app/component-examples/generated/textarea/doc-invalid"
import { TextareaDocInvalidCode } from "@/app/component-examples/generated/textarea/doc-invalid.code"
import { TextareaDocRtlPreview } from "@/app/component-examples/generated/textarea/doc-rtl"
import { TextareaDocRtlCode } from "@/app/component-examples/generated/textarea/doc-rtl.code"
import { tableVirtualCodes } from "@/app/component-examples/table-virtual-codes"
import { TableVirtualPreview } from "@/app/component-examples/table-virtual"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const docVariantSupplements: Record<string, ComponentVariantPage> = {
  "data-table": {
    name: "data-table",
    title: "Data Table",
    description:
      "Sortable, filterable, paginated tables powered by TanStack Table.",
    install: "npx shadcn@latest add tmdc-io/modern-ui-component/table",
    variants: [
      {
        id: "tanstack-virtual",
        title: "Virtual rows",
        description:
          "Virtualized rows for large datasets with TanStack Virtual.",
        Preview: TableVirtualPreview,
        code: tableVirtualCodes.full,
        tall: true,
        docLinks: [
          {
            href: "https://tanstack.com/table/latest",
            label: "TanStack Table documentation",
          },
          {
            href: "https://tanstack.com/table/v8/docs/guide/virtualization",
            label: "Virtualization guide",
          },
          {
            href: "/components/table#tanstack-virtual",
            label: "Table primitive reference",
          },
        ],
      },
    ],
  },
  "textarea": {
    name: "textarea",
    title: "Textarea",
    description: "ModernUI Textarea component.",
    install: "npx shadcn@latest add tmdc-io/modern-ui-component/textarea",
    variants: [
      {
        id: "field",
        title: "Field",
        description: "Textarea with Field label and description.",
        Preview: TextareaDocFieldPreview,
        code: TextareaDocFieldCode,
      },
      {
        id: "invalid",
        title: "Invalid",
        description: "Invalid textarea state with Field error styling.",
        Preview: TextareaDocInvalidPreview,
        code: TextareaDocInvalidCode,
      },
      {
        id: "rtl",
        title: "RTL",
        description: "Right-to-left textarea with translations.",
        Preview: TextareaDocRtlPreview,
        code: TextareaDocRtlCode,
      },
    ],
  },
  "input": {
    name: "input",
    title: "Input",
    description: "ModernUI Input component.",
    install: "npx shadcn@latest add tmdc-io/modern-ui-component/input",
    variants: [
      {
        id: "field",
        title: "Field",
        description: "Input with Field label and description.",
        Preview: InputDocFieldPreview,
        code: InputDocFieldCode,
      },
      {
        id: "invalid",
        title: "Invalid",
        description: "Invalid input state with Field error styling.",
        Preview: InputDocInvalidPreview,
        code: InputDocInvalidCode,
      },
    ],
  },
}
