import { notFound } from "next/navigation"

import { ComponentDocDetail } from "@/app/component-doc-detail"
import { getVariantPageNames } from "@/app/component-variants/variant-page-names"

export function generateStaticParams() {
  return getVariantPageNames().map((name) => ({ name }))
}

export default async function ComponentVariantsPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params

  if (!getVariantPageNames().includes(name)) {
    notFound()
  }

  return <ComponentDocDetail name={name} />
}
