import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import useFocusManager from './use-focus-manager.js'

const FocusManager = React.forwardRef((props, _ref) => {
  const ref = React.useRef()
  React.useImperativeHandle(_ref, () => ref.current)

  useFocusManager(ref, {
    autofocus: props.autofocus,
    returnFocus: props.returnFocus,
    trapped: props.trapped
  })

  return <div ref={ref} {...filterReactProps(props)} />
})

FocusManager.propTypes = {
  autofocus: PropTypes.bool,
  children: PropTypes.node,
  returnFocus: PropTypes.bool,
  trapped: PropTypes.bool
}

FocusManager.defaultProps = {
  autofocus: true,
  returnFocus: true,
  trapped: true
}

export default FocusManager
