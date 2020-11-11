import {
  RefCallback,
  HTMLAttributes,
  ReactHTMLElement,
  MutableRefObject,
  cloneElement
} from 'react'

import { isCallbackRef, isRef } from './is-ref'

export const cloneElementWithRef = <
  P extends HTMLAttributes<T>,
  T extends HTMLElement
>(
  el: ReactHTMLElement<T>,
  outerRef: MutableRefObject<T | undefined>,
  props: P
) => {
  const { ref: innerRef } = el

  const combine: RefCallback<T> = node => {
    if (!node) return

    if (isRef<T>(outerRef)) outerRef.current = node

    if (isCallbackRef<T>(innerRef)) innerRef(node)
    else if (isRef<T>(innerRef)) innerRef.current = node
  }

  return cloneElement<P, T>(el, { ...props, ref: combine })
}
