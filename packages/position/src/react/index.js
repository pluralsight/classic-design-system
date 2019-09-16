import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import * as positionFns from '../js/index.js'

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
  const [style, setStyle] = React.useState({ position: 'absolute' })

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const child = React.Children.only(props.children)
  const tetheredRef = React.useRef()
  const tetheredEl = React.cloneElement(props.show, {
    ref: tetheredRef,
    style: { ...child.props.style, ...style }
  })

  React.useEffect(() => {
    const targetNode = props.target ? props.target.current : ref.current

    if (props.when && targetNode && tetheredRef.current) {
      const nextStyle = props.position(targetNode).styleFor(tetheredRef.current)
      setStyle(nextStyle)
    }
  }, [props, props.position, props.target, props.when])

  const inPortal = props.inNode

  return (
    <React.Fragment>
      {props.target ? child : <div ref={ref}>{child}</div>}

      {props.when &&
        (inPortal
          ? ReactDOM.createPortal(tetheredEl, props.inNode)
          : tetheredEl)}
    </React.Fragment>
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
  when: true
}
