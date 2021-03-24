import { useCallback, useEffect, useState } from 'react'
import exenv from 'exenv'

import { canUseDOM } from './can-use-dom'
import { useHasMounted } from './use-has-mounted'

const { canUseEventListeners } = exenv

const noopQueryList = {
  matches: false,
  media: ''
} as MediaQueryList

export function useMatchMedia(query: string): boolean {
  const hasMounted = useHasMounted()

  const matcher = useCallback(
    () => (canUseDOM() ? window.matchMedia(query) : noopQueryList),
    [query]
  )
  const [queryList, setQueryList] = useState(matcher)

  const matches = useMatches(queryList)

  useEffect(() => {
    if (!hasMounted) return

    const nextQueryList = matcher()

    setQueryList(nextQueryList)
  }, [hasMounted, matcher])

  return matches
}

export function useMatches(queryList: MediaQueryList) {
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
