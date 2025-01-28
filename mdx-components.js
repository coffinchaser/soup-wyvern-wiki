import { Admonition } from '@/components/ui/admonition'

export function useMDXComponents(components) {
  return {
    ...components,
    Admonition,
  }
}
