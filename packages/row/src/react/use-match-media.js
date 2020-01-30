import { useEffect, useState } from 'react'

export default function useMatchMedia(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
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
