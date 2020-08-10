import { useCallback, useEffect, useState } from 'react'
import { canUseEventListeners, canUseDOM } from 'exenv'

import { usePrevious } from '@pluralsight/ps-design-system-util'

export default function useOnInnerFocus(ref, { onEnter, onLeave }) {
  const refContainsActiveElement = useCallback(() => {
    if (!canUseDOM || !ref.current) return false

    return ref.current.contains(document.activeElement)
  }, [ref])

  const [activeElInRef, setActiveElInRef] = useState(refContainsActiveElement)
  const prevActiveElInRef = usePrevious(activeElInRef)

  const handleFocus = useCallback(() => {
    const nextActive = refContainsActiveElement()
    setActiveElInRef(nextActive)
  }, [refContainsActiveElement, setActiveElInRef])

  useEffect(() => {
    if (!exists(activeElInRef) || !exists(prevActiveElInRef)) return
    if (prevActiveElInRef === activeElInRef) return

    const entering = !prevActiveElInRef && activeElInRef
    const leaving = prevActiveElInRef && !activeElInRef

    if (entering) onEnter()
    else if (leaving) onLeave()
  }, [activeElInRef, prevActiveElInRef, onEnter, onLeave])

  useEffect(() => {
    if (!canUseEventListeners) return

    document.addEventListener('focus', handleFocus, true)

    return () => {
      document.removeEventListener('focus', handleFocus, true)
    }
  }, [handleFocus])
}

const exists = val => typeof val !== 'undefined'
