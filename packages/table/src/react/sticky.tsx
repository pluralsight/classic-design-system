import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React from 'react'
import invariant from 'invariant'

import { Sentinel, useIntersectionSentinels } from './sentinel'
import { useOnResize, useOnScroll } from './event-hooks'

export const StickyContainer = React.forwardRef<
  HTMLDivElement,
  HTMLPropsFor<HTMLDivElement>
>((props, ref) => {
  const { children, ...rest } = props
  invariant(ref, 'ref is required')

  const [stuck, setStuck] = React.useState<boolean>(false)

  const start = React.useRef<HTMLDivElement>(null)
  const end = React.useRef<HTMLDivElement>(null)

  const getHeaders = React.useCallback(() => {
    const { current: el } = ref as React.MutableRefObject<HTMLDivElement>
    if (!el) return []

    const selector = 'thead th[role="columnheader"][scope="col"] > div'
    return Array.from(el.querySelectorAll<HTMLDivElement>(selector))
  }, [ref])

  const stickHeaders = React.useCallback(() => {
    const headers = getHeaders()

    for (const el of Array.from(headers)) {
      const th = el.parentNode as HTMLTableHeaderCellElement
      const { left, height, width } = th.getBoundingClientRect()

      th.setAttribute('data-stuck', 'true')
      th.style.height = `${height}px`
      th.style.width = `${width}px`

      el.style.left = `${left}px`
      el.style.width = `${width}px`
    }
  }, [getHeaders])

  const unstickHeaders = React.useCallback(() => {
    const headers = getHeaders()

    for (const el of Array.from(headers)) {
      const th = el.parentNode as HTMLTableHeaderCellElement

      th.removeAttribute('data-stuck')
      th.style.height = 'initial'
      th.style.width = 'initial'

      el.style.left = 'initial'
      el.style.width = 'initial'
    }
  }, [getHeaders])

  React.useEffect(() => {
    if (stuck) stickHeaders()
    else unstickHeaders()
  }, [stickHeaders, unstickHeaders, stuck])

  const stick = React.useCallback(() => {
    setStuck(true)
  }, [])

  const unstick = React.useCallback(() => {
    setStuck(false)
  }, [])

  useIntersectionSentinels(stick, unstick, { start, end })

  const update = React.useCallback(() => {
    if (stuck) stickHeaders()
  }, [stuck, stickHeaders])

  useOnResize(update)
  useOnScroll(update)

  return (
    <div ref={ref} {...rest}>
      <Sentinel ref={start} />
      {children}
      <Sentinel end ref={end} />
    </div>
  )
})
