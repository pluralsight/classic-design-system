import React from 'react'

export default function useMatchMedia(query: string) {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const update = () => {
      const { matches: nextMatches } = window.matchMedia(query)
      setMatches(nextMatches)
    }

    update()

    window.matchMedia(query).addListener(update)

    return () => {
      window.matchMedia(query).removeListener(update)
    }
  }, [query])

  return matches
}
