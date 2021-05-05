import React from 'react'

import { isCallbackRef, isRef } from './is-ref'

type RefArg<El extends HTMLElement> =
  | React.RefCallback<El>
  | React.RefObject<El>
  | React.ForwardedRef<El>

export const useCombinedRefs = <El extends HTMLElement>(
  ...refs: RefArg<El>[]
) => {
  const targetRef = React.useRef<El>(null)

  React.useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return

      if (isCallbackRef<El>(ref)) {
        ref(targetRef.current)
      } else if (isRef<El>(ref) && targetRef.current) {
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}
