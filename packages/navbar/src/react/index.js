import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  brand: () => css(stylesheet['.psds-navbar__brand']),
  navbar: () => css(stylesheet['.psds-navbar']),
  items: () => css(stylesheet['.psds-navbar__items']),
  user: () => css(stylesheet['.psds-navbar__user']),
  utility: () => css(stylesheet['.psds-navbar__utility'])
}

// TODO: support mobile menu

const NavBar = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <div ref={ref} {...styles.navbar()} {...filterReactProps(props)}>
      <div {...styles.brand()}>{props.brand}</div>
      <div {...styles.items()}>{props.items}</div>
      <div {...styles.utility()}>{props.utility}</div>
      <div {...styles.user()}>{props.user}</div>
    </div>
  )
})

NavBar.propTypes = {
  brand: PropTypes.node,
  items: PropTypes.node,
  utility: PropTypes.node,
  user: PropTypes.node
}

export default NavBar
