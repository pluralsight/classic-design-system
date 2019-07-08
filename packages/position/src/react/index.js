import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import * as positionFns from '../js/index.js'

export function Above(props) {
  return <Position position={positionFns.above} {...props} />
}
Above.displayName = 'Above'

export function AboveLeft(props) {
  return <Position position={positionFns.aboveLeft} {...props} />
}
AboveLeft.displayName = 'AboveLeft'

export function AboveRight(props) {
  return <Position position={positionFns.aboveRight} {...props} />
}
AboveRight.displayName = 'AboveRight'

export function Below(props) {
  return <Position position={positionFns.below} {...props} />
}
Below.displayName = 'Below'

export function BelowLeft(props) {
  return <Position position={positionFns.belowLeft} {...props} />
}
BelowLeft.displayName = 'BelowLeft'

export function BelowRight(props) {
  return <Position position={positionFns.belowRight} {...props} />
}
BelowRight.displayName = 'BelowRight'

export function RightOf(props) {
  return <Position position={positionFns.rightOf} {...props} />
}
RightOf.displayName = 'RightOf'

export function LeftOf(props) {
  return <Position position={positionFns.leftOf} {...props} />
}
LeftOf.displayName = 'LeftOf'

function Position(props) {
  const targetRef = React.useRef()
  const elRef = React.useRef()
  const child = React.Children.only(props.children)
  const [style, setStyle] = React.useState({ position: 'absolute' })

  React.useLayoutEffect(() => {
    if (props.when && targetRef.current && elRef.current)
      setStyle(props.position(targetRef.current).styleFor(elRef.current))
  }, [props.when, targetRef, elRef, props])

  const show = React.cloneElement(props.show, {
    ref: elRef,
    style: {
      ...child.props.style,
      ...style
    }
  })

  return (
    <React.Fragment>
      {React.cloneElement(child, {
        ref: targetRef
      })}
      {props.when &&
        (props.inNode ? ReactDOM.createPortal(show, props.inNode) : show)}
    </React.Fragment>
  )
}
Position.propTypes = {
  children: PropTypes.element.isRequired,
  inNode: PropTypes.any, // NOTE: really HTML Element, but SSR not happy when mentioned.
  position: PropTypes.func,
  show: PropTypes.element,
  when: PropTypes.bool
}
Position.defaultProps = {
  when: true
}
