import { Option } from './types'

/* eslint-disable @typescript-eslint/no-empty-function */
export function noop() {}
/* eslint-enable @typescript-eslint/no-empty-function */

export function simpleTextFilter(term = '', options: Option[]) {
  if (term.length === 0) return options

  const needle = term.toLowerCase()

  return options.filter(option => {
    const { label, value } = option

    return (
      label.toLowerCase().includes(term) || value.toLowerCase().includes(needle)
    )
  })
}

/* eslint-disable no-prototype-builtins */
export function switchcase<T = unknown>(
  cases: Record<string, T>,
  defaultCase: T,
  key: string
): T {
  return cases.hasOwnProperty(key) ? cases[key] : defaultCase
}
/* eslint-enable no-prototype-builtins */
