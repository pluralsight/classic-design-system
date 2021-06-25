import { canUseDOM } from '@pluralsight/ps-design-system-util'
import React from 'react'

const canUseIntersectionObserver =
  canUseDOM() && 'IntersectionObserver' in window

interface IntersectionObserverInit {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

const defaultOptions: IntersectionObserverInit = { threshold: 0 }

export const useIntersectionSentinels = (
  onEnter: () => void,
  onLeave: () => void,
  refs: {
    start: React.RefObject<HTMLDivElement>
    end: React.RefObject<HTMLDivElement>
  },
  _options?: IntersectionObserverInit
) => {
  const { start, end } = refs
  const options = React.useMemo(() => ({ ...defaultOptions, _options }), [
    _options
  ])

  const observerRef = React.useRef<IntersectionObserver>()

  React.useEffect(() => {
    if (!canUseIntersectionObserver) return
    if (observerRef.current) observerRef.current.disconnect()

    const { current: startEl } = start
    const { current: endEl } = end

    if (!canUseDOM() || !startEl || !endEl) return

    let subscribed = true

    const states = new Map<Element, DOMRect>()

    const onIntersection: IntersectionObserverCallback = entries => {
      if (!subscribed) return

      for (const entry of entries) {
        states.set(entry.target, entry.boundingClientRect)
      }

      const startRect = states.get(startEl)
      const endRect = states.get(endEl)

      const top = startRect ? startRect.top : {}
      const bottom = endRect ? endRect.top : {}

      const entering = top < 0 && bottom > 0

      if (entering) onEnter()
      else onLeave()
    }

    observerRef.current = new IntersectionObserver(onIntersection, options)

    const { current: observer } = observerRef

    observer.observe(startEl)
    observer.observe(endEl)

    return () => {
      subscribed = false

      observer.disconnect()
    }
  }, [start, end, options, onEnter, onLeave])
}

interface SentinelProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  end?: boolean
}

export const Sentinel = React.forwardRef<HTMLDivElement, SentinelProps>(
  (props, ref) => {
    const { end = false, ...rest } = props
    const style: React.CSSProperties = end
      ? { position: 'relative', zIndex: -1 }
      : {}

    return <div ref={ref} style={style} {...rest} />
  }
)
