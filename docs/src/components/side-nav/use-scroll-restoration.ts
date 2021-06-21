// modified from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-react-router-scroll/src/use-scroll-restoration.ts
import React from 'react'

import { SessionStorage } from './session-storage'

interface ScrollRestorationProps {
  ref: React.MutableRefObject<HTMLElement | undefined>
  onScroll(): void
}

const ScrollContext = React.createContext<SessionStorage>(new SessionStorage())
ScrollContext.displayName = `ScrollContext`

export function useScrollRestoration(
  identifier: string
): ScrollRestorationProps {
  const state = React.useContext(ScrollContext)
  const ref = React.useRef<HTMLElement>()

  React.useLayoutEffect((): void => {
    if (ref.current) {
      const position = state.read(identifier)
      ref.current.scrollTo(0, position || 0)
    }
  }, [])

  return {
    ref,
    onScroll(): void {
      if (ref.current) {
        state.save(identifier, ref.current.scrollTop)
      }
    }
  }
}
