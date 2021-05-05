import { canUseEventListeners, canUseDOM } from 'exenv'
import React from 'react'

import { usePrevious } from '../../util'

interface EventHandlers {
  onEnter: () => void
  onLeave: () => void
}

export default function useOnInnerFocus<El extends HTMLElement>(
  ref: React.RefObject<El>,
  { onEnter, onLeave }: EventHandlers
) {
  const refContainsActiveElement = React.useCallback(() => {
    if (!canUseDOM || !ref.current) return false

    return ref.current.contains(document.activeElement)
  }, [ref])

  const [activeElInRef, setActiveElInRef] = React.useState(
    refContainsActiveElement
  )
  const prevActiveElInRef = usePrevious(activeElInRef)

  const handleFocus = React.useCallback(() => {
    const nextActive = refContainsActiveElement()
    setActiveElInRef(nextActive)
  }, [refContainsActiveElement, setActiveElInRef])

  React.useEffect(() => {
    if (!exists(activeElInRef) || !exists(prevActiveElInRef)) return
    if (prevActiveElInRef === activeElInRef) return

    const entering = !prevActiveElInRef && activeElInRef
    const leaving = prevActiveElInRef && !activeElInRef

    if (entering) onEnter()
    else if (leaving) onLeave()
  }, [activeElInRef, prevActiveElInRef, onEnter, onLeave])

  React.useEffect(() => {
    if (!canUseEventListeners) return

    document.addEventListener('focus', handleFocus, true)

    return () => {
      document.removeEventListener('focus', handleFocus, true)
    }
  }, [handleFocus])
}

const exists = (val: unknown) => typeof val !== 'undefined'
