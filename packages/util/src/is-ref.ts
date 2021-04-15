import React from 'react'

import { isFunction } from './is-function'

export const isCallbackRef = <El extends HTMLElement>(
  ref: React.LegacyRef<El> | React.Ref<El>
): ref is React.RefCallback<El> => isFunction(ref)

export const isRef = <El extends HTMLElement>(
  ref: unknown
): ref is React.MutableRefObject<El> => {
  return (
    // eslint-disable-next-line no-prototype-builtins
    ref !== null &&
    typeof ref === 'object' &&
    Object.prototype.hasOwnProperty.call(ref, 'current')
  )
}
