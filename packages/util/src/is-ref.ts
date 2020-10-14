import { MutableRefObject, Ref, RefCallback } from 'react'

import { isFunction } from '.'

/**
 * @deprecated we should stop supporting legacy refs
 */
export const isCallbackRef = <El extends HTMLElement>(
  ref: Ref<El>
): ref is RefCallback<El> => isFunction(ref)

export const isRef = <El extends HTMLElement>(
  ref: unknown
): ref is MutableRefObject<El> => {
  return (
    // eslint-disable-next-line no-prototype-builtins
    ref !== null &&
    typeof ref === 'object' &&
    Object.prototype.hasOwnProperty.call(ref, 'current')
  )
}
