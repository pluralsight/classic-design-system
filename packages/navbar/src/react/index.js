import { css } from 'glamor'
import { MenuIcon } from '@pluralsight/ps-design-system-icon'
import NavItem from '@pluralsight/ps-design-system-navitem'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  brand: () => css(stylesheet['.psds-navbar__brand']),
  mobileMenu: () => css(stylesheet['.psds-navbar__mobile-menu']),
  navbar: () => css(stylesheet['.psds-navbar']),
  items: () => css(stylesheet['.psds-navbar__items']),
  user: () => css(stylesheet['.psds-navbar__user']),
  utility: () => css(stylesheet['.psds-navbar__utility'])
}

const NavBar = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <div ref={ref} {...styles.navbar()} {...filterReactProps(props)}>
      {props.onMobileMenuClick && (
        <div {...styles.mobileMenu()}>
          <NavItem onClick={props.onMobileMenuClick} icon={<MenuIcon />} />
        </div>
      )}
      <div {...styles.brand()}>{props.brand}</div>
      <div {...styles.items()}>{props.items}</div>
      <div {...styles.utility()}>{props.utility}</div>
      <div {...styles.user()}>{props.user}</div>
    </div>
  )
})
NavBar.displayName = 'NavBar'
NavBar.propTypes = {
  brand: PropTypes.node,
  items: PropTypes.node,
  onMobileMenuClick: PropTypes.func,
  utility: PropTypes.node,
  user: PropTypes.node
}

export default NavBar
