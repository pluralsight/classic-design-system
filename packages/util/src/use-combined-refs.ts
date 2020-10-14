import { MutableRefObject, RefCallback, useEffect, useRef } from 'react'

import { isCallbackRef, isRef } from '.'

type RefArg<El extends HTMLElement> = RefCallback<El> | MutableRefObject<El>

export const useCombinedRefs = <El extends HTMLElement>(
  ...refs: RefArg<El>[]
) => {
  const targetRef = useRef<El>()

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return

      if (isCallbackRef<El>(ref)) ref(targetRef.current)
      else if (isRef(ref)) ref.current = targetRef.current
    })
  }, [refs])

  return targetRef
}
