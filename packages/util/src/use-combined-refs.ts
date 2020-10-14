import { RefObject, RefCallback, useEffect, useRef } from 'react'

import { isCallbackRef, isRef } from '.'

type RefArg<El extends HTMLElement> = RefCallback<El> | RefObject<El>

export const useCombinedRefs = <El extends HTMLElement>(
  ...refs: RefArg<El>[]
) => {
  const targetRef = useRef<El>(null)

  useEffect(() => {
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
