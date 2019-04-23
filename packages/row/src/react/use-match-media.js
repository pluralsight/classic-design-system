import { useEffect, useState } from 'react'

export default function useMatchMedia(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const update = () => {
      const { matches: nextMatches } = window.matchMedia(query)
      setMatches(nextMatches)
    }

    update()

    window.matchMedia(query).addEventListener('change', update)

    return () => {
      window.matchMedia(query).removeEventListener('change', update)
    }
  }, [query])

  return matches
}
