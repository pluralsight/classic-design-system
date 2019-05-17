import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import { above, below, leftOf, rightOf } from '../js/index.js'

export function Above(props) {
  return <Position position={above} {...props} />
}
Above.displayName = 'Above'

export function Below(props) {
  return <Position position={below} {...props} />
}
Below.displayName = 'Below'

export function RightOf(props) {
  return <Position position={rightOf} {...props} />
}
RightOf.displayName = 'RightOf'

export function LeftOf(props) {
  return <Position position={leftOf} {...props} />
}
LeftOf.displayName = 'LeftOf'

function Position(props) {
  const targetRef = React.useRef()
  const elRef = React.useRef()
  const child = React.Children.only(props.children)
  const [style, setStyle] = React.useState({ position: 'absolute' })

  React.useLayoutEffect(
    () => {
      if (props.when && targetRef.current && elRef.current)
        setStyle(props.position(targetRef.current).styleFor(elRef.current))
    },
    [props.when, targetRef, elRef, props]
  )

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
  children: PropTypes.element,
  inNode: PropTypes.instanceOf(window.Element),
  position: PropTypes.func,
  show: PropTypes.element,
  when: PropTypes.bool
}
Position.defaultProps = {
  when: true
}
