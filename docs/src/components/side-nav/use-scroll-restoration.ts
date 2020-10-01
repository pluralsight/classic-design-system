import { ScrollContext } from "./scroll-handler"
import { useRef, useContext, useLayoutEffect } from "react"
import { useLocation } from "@reach/router"

interface IScrollRestorationProps {
  ref: React.MutableRefObject<HTMLElement | undefined>
  onScroll(): void
}

export function useScrollRestoration(
  identifier: string
): IScrollRestorationProps {
  const location = useLocation()
  const state = useContext(ScrollContext)
  const ref = useRef<HTMLElement>()

  useLayoutEffect((): void => {
    if (ref.current) {
      const position = state.read(location, identifier)
      ref.current.scrollTo(0, position || 0)
    }
  }, [])

  return {
    ref,
    onScroll(): void {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop)
      }
    },
  }
}
