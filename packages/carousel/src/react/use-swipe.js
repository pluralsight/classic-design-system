import { useEffect, useRef, useState } from 'react'

const noop = () => {}

const defaultOpts = {
  distanceThreshold: 20, // 20px
  onSwipeDown: noop,
  onSwipeLeft: noop,
  onSwipeRight: noop,
  onSwipeUp: noop,
  supportMouse: false,
  timeThreshold: 500 // 500ms
}

export default function useSwipe(ref, opts = {}) {
  const {
    distanceThreshold,
    onSwipeDown,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    supportMouse,
    timeThreshold
  } = { ...defaultOpts, ...opts }

  const timeout = useRef()

  const [swipping, setSwipping] = useState(false)
  const [startPosition, setStartPosition] = useState(null)

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

  function handleStart(evt) {
    if (!ref.current.contains(evt.target)) return

    setSwipping(true)

    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => resetCoords(), timeThreshold)

    const { clientX, clientY } = getTouch(evt)
    setStartPosition({ clientX, clientY })
  }

  function handleEnd(evt) {
    setSwipping(false)
    clearTimeout(timeout.current)

    if (!swipping || !startPosition) return

    const { clientX, clientY } = getTouch(evt)
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

const getTouch = evt => (evt.changedTouches ? evt.changedTouches[0] : evt)
