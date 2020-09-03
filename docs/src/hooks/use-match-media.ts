import { useCallback, useEffect, useState } from 'react'
import { canUseEventListeners } from 'exenv'

import useHasMounted from './use-has-mounted'

export default function useMatchMedia(query: string): boolean {
  const hasMounted = useHasMounted()

  const matcher = useCallback(() => window.matchMedia(query), [query])
  const [queryList, setQueryList] = useState(matcher)

  const matches = useMatches(queryList)

  useEffect(() => {
    if (!hasMounted) return

    const nextQueryList = matcher()

    setQueryList(nextQueryList)
  }, [hasMounted, matcher])

  return matches
}

function useMatches(queryList: MediaQueryList) {
  const [matches, setMatches] = useState(queryList.matches)

  useEffect(() => {
    const updateMatches = () => {
      setMatches(queryList.matches)
    }

    if (canUseEventListeners) queryList.addListener(updateMatches)
    updateMatches()

    return () => {
      if (canUseEventListeners) queryList.removeListener(updateMatches)
    }
  }, [queryList])

  return matches
}
