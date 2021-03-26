import React from 'react'
import ReactDom from 'react-dom'

import { canUseDOM } from './can-use-dom'

export function createUniversalPortal(
  children: React.ReactNode,
  container: Element | undefined,
  key?: string
): React.ReactPortal | undefined {
  if (!canUseDOM() || !container) return

  return ReactDom.createPortal(children, container, key)
}
