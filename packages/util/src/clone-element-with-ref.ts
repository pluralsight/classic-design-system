import { cloneElement } from 'react'

import { isFunction, isRef } from '.'

export function cloneElementWithRef(element, outerRef, props) {
  const { ref } = element

  return cloneElement(element, {
    ...props,
    ref: node => {
      if (isRef(outerRef)) outerRef.current = node

      if (isFunction(ref)) ref(node)
      else if (isRef(ref)) ref.current = node
    }
  })
}
