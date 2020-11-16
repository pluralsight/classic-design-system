export type FilterFn = () => boolean

export interface Suggestion {
  index: number
  label: string
  value: string
}

export function filterSuggestions(
  searchTerm: string,
  suggestions: Suggestion[]
) {
  if (!searchTerm || searchTerm.length <= 1) return suggestions

  const term = searchTerm.toLowerCase()
  const matches = ({ label, value }: Suggestion) => {
    return (
      label.toLowerCase().includes(term) || value.toLowerCase().includes(term)
    )
  }

  return suggestions.filter(matches)
}
