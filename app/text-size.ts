export const TEXT_SIZE_STORAGE_KEY = "modernui:text-scale"

/** Rem scale steps applied to `html` font-size (Tailwind text utilities follow rem). */
export const TEXT_SIZE_STEPS = [0.875, 1, 1.125, 1.25] as const

export const TEXT_SIZE_LABELS = ["Small", "Default", "Large", "Extra large"] as const

export const DEFAULT_TEXT_SIZE_INDEX = 1

export type TextSizeIndex = 0 | 1 | 2 | 3

export function clampTextSizeIndex(index: number): TextSizeIndex {
  if (index <= 0) return 0
  if (index >= TEXT_SIZE_STEPS.length - 1) return (TEXT_SIZE_STEPS.length - 1) as TextSizeIndex
  return index as TextSizeIndex
}

export function readStoredTextSizeIndex(): TextSizeIndex {
  if (typeof window === "undefined") {
    return DEFAULT_TEXT_SIZE_INDEX
  }

  try {
    const stored = localStorage.getItem(TEXT_SIZE_STORAGE_KEY)
    if (stored === null) return DEFAULT_TEXT_SIZE_INDEX
    return clampTextSizeIndex(Number.parseInt(stored, 10))
  } catch {
    return DEFAULT_TEXT_SIZE_INDEX
  }
}

export function applyTextSizeIndex(index: TextSizeIndex) {
  if (typeof document === "undefined") return

  const scale = TEXT_SIZE_STEPS[index]
  document.documentElement.style.fontSize = `${scale * 100}%`
  document.documentElement.dataset.textScale = String(index)
}

export function persistTextSizeIndex(index: TextSizeIndex) {
  applyTextSizeIndex(index)
  try {
    localStorage.setItem(TEXT_SIZE_STORAGE_KEY, String(index))
  } catch {
    // ignore storage failures (private mode, etc.)
  }
}

export function getTextSizeLabel(index: TextSizeIndex) {
  return TEXT_SIZE_LABELS[index] ?? TEXT_SIZE_LABELS[DEFAULT_TEXT_SIZE_INDEX]
}
