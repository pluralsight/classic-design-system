import React from 'react'

import { isCallbackRef, isRef } from './is-ref'

export const cloneElementWithRef = <
  P extends React.HTMLAttributes<T>,
  T extends HTMLElement
>(
  el: React.ReactHTMLElement<T>,
  outerRef: React.MutableRefObject<T | undefined>,
  props: P
) => {
  const { ref: innerRef } = el

  const combine: React.RefCallback<T> = node => {
    if (!node) return

    if (isRef<T>(outerRef)) outerRef.current = node

    if (isCallbackRef<T>(innerRef)) innerRef(node)
    else if (isRef<T>(innerRef)) innerRef.current = node
  }

  return React.cloneElement<P, T>(el, { ...props, ref: combine })
}
