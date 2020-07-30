import { useCallback, useEffect, useState } from 'react'

import useHasMounted from './use-has-mounted.js'

// TODO: exenv checks

export default function useMatchMedia(query) {
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

function useMatches(queryList) {
  const [matches, setMatches] = useState(queryList.matches)

  useEffect(() => {
    const updateMatches = () => {
      setMatches(queryList.matches)
    }
    queryList.addListener(updateMatches)
    updateMatches()

    return () => {
      queryList.removeListener(updateMatches)
    }
  }, [queryList])

  return matches
}
