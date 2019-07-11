import { useRef, useState } from 'react'

import { combineFns } from '../js/utils.js'

export default function useSwipeEvents(props, opts = {}) {
  const distanceThreshold = 20
  const mouseSupport = opts.mouseSupport || false
  const timeThreshold = 500

  const timeout = useRef()

  const [swipping, setSwipping] = useState(false)
  const [startPosition, setStartPosition] = useState(null)

  const resetCoords = () => setStartPosition(null)

  const handlers = {
    onTouchEnd: combineFns(handleEnd, props.onTouchEnd),
    onTouchStart: combineFns(handleStart, props.onTouchStart),

    ...(mouseSupport && {
      onMouseDown: combineFns(handleStart, props.onMouseDown),
      onMouseUp: combineFns(handleEnd, props.onMouseUp)
    })
  }

  function handleStart(evt) {
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

      if (isLeft && props.onSwipeLeft) props.onSwipeLeft(evt)
      if (!isLeft && props.onSwipeRight) props.onSwipeRight(evt)
    } else {
      const isUp = vertDiff < 0

      if (isUp && props.onSwipeUp) props.onSwipeUp(evt)
      if (!isUp && props.onSwipeDown) props.onSwipeDown(evt)
    }

    resetCoords()
  }

  return [handlers]
}

const getTouch = evt => (evt.changedTouches ? evt.changedTouches[0] : evt)
