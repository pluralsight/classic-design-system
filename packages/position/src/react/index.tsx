import PropTypes from 'prop-types'
import React from 'react'
import { canUseDOM } from 'exenv'
import {
  cloneElementWithRef,
  createUniversalPortal
} from '@pluralsight/ps-design-system-util'

import * as positionFns from '../js'

import useOnWindowResize from './use-on-window-resize'
import useOnWindowScroll from './use-on-window-scroll'

export const Above = React.forwardRef((props, ref) => {
  return <Position position={positionFns.above} ref={ref} {...props} />
})
Above.displayName = 'Above'

export const AboveLeft = React.forwardRef((props, ref) => {
  return <Position position={positionFns.aboveLeft} ref={ref} {...props} />
})
AboveLeft.displayName = 'AboveLeft'

export const AboveRight = React.forwardRef((props, ref) => {
  return <Position position={positionFns.aboveRight} ref={ref} {...props} />
})
AboveRight.displayName = 'AboveRight'

export const Below = React.forwardRef((props, ref) => {
  return <Position position={positionFns.below} ref={ref} {...props} />
})
Below.displayName = 'Below'

export const BelowLeft = React.forwardRef((props, ref) => {
  return <Position position={positionFns.belowLeft} ref={ref} {...props} />
})
BelowLeft.displayName = 'BelowLeft'

export const BelowRight = React.forwardRef((props, ref) => {
  return <Position position={positionFns.belowRight} ref={ref} {...props} />
})
BelowRight.displayName = 'BelowRight'

export const RightOf = React.forwardRef((props, ref) => {
  return <Position position={positionFns.rightOf} ref={ref} {...props} />
})
RightOf.displayName = 'RightOf'

export const LeftOf = React.forwardRef((props, ref) => {
  return <Position position={positionFns.leftOf} ref={ref} {...props} />
})
LeftOf.displayName = 'LeftOf'

const Position = React.forwardRef((props, forwardedRef) => {
  const { target, position: positionFn, when } = props
  const [shownOnce, setShownOnce] = React.useState(false)
  const [style, setStyle] = React.useState({ position: 'absolute' })

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const child = React.Children.only(props.children)
  const innerRef = React.useRef()
  const showRef = props.show.ref || innerRef
  const showEl = React.cloneElement(props.show, {
    ref: showRef,
    style: { ...props.show.props.style, ...style }
  })

  const updateStyle = React.useCallback(() => {
    const targetNode =
      target instanceof HTMLElement
        ? target
        : target !== undefined
        ? target.current
        : ref.current
    if (!showRef.current || !targetNode) return

    const nextStyle = positionFn(targetNode).styleFor(showRef.current)
    setStyle(nextStyle)
    setShownOnce(true)
  }, [positionFn, target, showRef.current])

  useOnWindowResize(evt => updateStyle())
  useOnWindowScroll(evt => {
    const isInner = !showRef.current || showRef.current.contains(evt.target)
    if (isInner) return

    updateStyle()
  })
  React.useEffect(() => {
    if (!when) return
    const timerId = delayUntilNextTick(() => updateStyle())

    return () => clearTimeout(timerId)
  }, [updateStyle, when])

  return (
    <>
      {target ? child : cloneElementWithRef(child, ref, {})}

      {createUniversalPortal(
        <div style={{ visibility: shownOnce ? 'visible' : 'hidden' }}>
          {when && showEl}
        </div>,
        props.inNode
      )}
    </>
  )
})

Position.propTypes = {
  children: PropTypes.element.isRequired,
  inNode: PropTypes.any, // NOTE: really HTML Element, but SSR not happy when mentioned.
  position: PropTypes.func.isRequired,
  show: PropTypes.element,
  target: PropTypes.any, // NOTE: really HTML Element, but SSR not happy when mentioned.
  when: PropTypes.bool
}

Position.defaultProps = {
  inNode: canUseDOM ? document.body : null,
  when: true
}

function delayUntilNextTick(fn) {
  // eslint-disable-next-line
  return setTimeout(fn, 1)
}
