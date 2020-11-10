import { PropsOf } from '@pluralsight/ps-design-system-util'
import React from 'react'

export type FilterFn = (
  searchTerm: string,
  suggestions: SuggestionOption[]
) => SuggestionOption[]

export interface SuggestionOption {
  index: number
  label: string
  value: string
}

interface SuggestionProps extends PropsOf<'div'> {
  value?: string
}
const Suggestion = React.forwardRef<HTMLDivElement, SuggestionProps>(
  (props, forwardedRef) => {
    return <div ref={forwardedRef} {...props} />
  }
)

export default Suggestion

export const getSuggestionLabel = (sug: React.ReactElement) =>
  sug.props.children

export const getSuggestionValue = (sug: React.ReactElement) =>
  sug.props.value || sug.props.children

export const filterSuggestions: FilterFn = (searchTerm, suggestions) => {
  if (!searchTerm || searchTerm.length <= 1) return suggestions

  const term = searchTerm.toLowerCase()

  return suggestions.filter(({ label, value }) => {
    return (
      label.toLowerCase().includes(term) || value.toLowerCase().includes(term)
    )
  })
}
