import { useEffect, useRef, useState } from 'react'

const noop = (evt: MouseEvent | TouchEvent) => {}

const defaultOpts: Required<UseSwipeOpts> = {
  distanceThreshold: 20, // 20px
  onSwipeDown: noop,
  onSwipeLeft: noop,
  onSwipeRight: noop,
  onSwipeUp: noop,
  supportMouse: false,
  timeThreshold: 500 // 500ms
}

export interface UseSwipeOpts {
  distanceThreshold?: number
  onSwipeDown?: (evt: MouseEvent | TouchEvent) => void
  onSwipeLeft?: (evt: MouseEvent | TouchEvent) => void
  onSwipeRight?: (evt: MouseEvent | TouchEvent) => void
  onSwipeUp?: (evt: MouseEvent | TouchEvent) => void
  supportMouse?: boolean
  timeThreshold?: number
}

interface Point {
  clientX: number
  clientY: number
}
const useSwipe = (ref: React.MutableRefObject<HTMLElement>, opts = {}) => {
  const {
    distanceThreshold,
    onSwipeDown,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    supportMouse,
    timeThreshold
  } = { ...defaultOpts, ...opts }

  const timeout = useRef<NodeJS.Timeout>()

  // TODO: rename typo
  const [swipping, setSwipping] = useState<boolean>(false)
  const [startPosition, setStartPosition] = useState<Point | null>(null)

  const resetCoords = () => setStartPosition(null)

  useEffect(() => {
    document.addEventListener('touchstart', handleStart)
    document.addEventListener('touchend', handleEnd)

    if (supportMouse) {
      document.addEventListener('mousedown', handleStart)
      document.addEventListener('mouseup', handleEnd)
    }

    return () => {
      document.removeEventListener('touchstart', handleStart)
      document.removeEventListener('touchend', handleEnd)

      document.removeEventListener('mousedown', handleStart)
      document.removeEventListener('mouseup', handleEnd)
    }
  }, [handleEnd, handleStart, opts, supportMouse])

  function handleStart(evt: MouseEvent | TouchEvent) {
    if (!ref?.current?.contains(evt.target as Node)) return

    setSwipping(true)

    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => resetCoords(), timeThreshold)

    const { clientX, clientY } = getEventPoint(evt)
    setStartPosition({ clientX, clientY })
  }

  function handleEnd(evt: MouseEvent | TouchEvent) {
    setSwipping(false)
    if (timeout.current) clearTimeout(timeout.current)

    if (!swipping || !startPosition) return

    const { clientX, clientY } = getEventPoint(evt)
    const horzDiff = clientX - startPosition.clientX
    const vertDiff = clientY - startPosition.clientY

    const isHorz = Math.abs(horzDiff) > Math.abs(vertDiff)
    const distance = isHorz ? Math.abs(horzDiff) : Math.abs(vertDiff)

    if (distance < distanceThreshold) return

    if (isHorz) {
      const isLeft = horzDiff < 0

      if (isLeft && onSwipeLeft) onSwipeLeft(evt)
      if (!isLeft && onSwipeRight) onSwipeRight(evt)
    } else {
      const isUp = vertDiff < 0

      if (isUp && onSwipeUp) onSwipeUp(evt)
      if (!isUp && onSwipeDown) onSwipeDown(evt)
    }

    resetCoords()
  }
}
export default useSwipe

const getEventPoint = (evt: MouseEvent | TouchEvent): Touch | MouseEvent => {
  if (isTouchEvent(evt)) {
    return evt.changedTouches[0]
  } else {
    return evt as MouseEvent
  }
}

const isTouchEvent = (evt: MouseEvent | TouchEvent): evt is TouchEvent => {
  return Array.isArray((evt as TouchEvent).changedTouches)
}
