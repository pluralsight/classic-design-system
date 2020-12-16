import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React from 'react'
import invariant from 'invariant'

import { Sentinel, useIntersectionSentinels } from './sentinel'

type StickyContainerProps = Omit<HTMLPropsFor<'div'>, 'ref'>
export const StickyContainer = React.forwardRef<
  HTMLDivElement,
  StickyContainerProps
>((props, ref) => {
  const { children, ...rest } = props

  invariant(ref, 'ref is required')

  const start = React.useRef<HTMLDivElement>(null)
  const end = React.useRef<HTMLDivElement>(null)

  const getHeaders = React.useCallback(() => {
    const { current: el } = ref as React.MutableRefObject<HTMLDivElement>
    if (!el) return []

    const selector = 'thead th[role="columnheader"][scope="col"] > div'
    return Array.from(el.querySelectorAll<HTMLDivElement>(selector))
  }, [ref])

  const stick = React.useCallback(() => {
    const headers = getHeaders()

    for (const el of Array.from(headers)) {
      const th = el.parentNode as HTMLTableHeaderCellElement

      const { height, width } = th.getBoundingClientRect()

      el.style.width = `${width}px`

      th.style.height = `${height}px`
      th.style.width = `${width}px`
      th.setAttribute('data-stuck', 'true')
    }
  }, [getHeaders])

  const unstick = React.useCallback(() => {
    const headers = getHeaders()

    for (const el of Array.from(headers)) {
      const th = el.parentNode as HTMLTableHeaderCellElement

      el.style.width = 'initial'

      th.style.height = 'initial'
      th.style.width = 'initial'
      th.removeAttribute('data-stuck')
    }
  }, [getHeaders])

  useIntersectionSentinels(stick, unstick, { start, end })

  return (
    <div ref={ref} {...rest}>
      <Sentinel ref={start} />
      {children}
      <Sentinel end ref={end} />
    </div>
  )
})
