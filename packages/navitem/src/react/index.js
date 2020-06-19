import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  navItem: (themeName, props) => css(stylesheet['.psds-navitem'])
}
// TODO
// active
// href
// dynamic tag

const NavItem = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <div
      ref={ref}
      {...styles.navItem(themeName, props)}
      {...filterReactProps(props)}
    />
  )
})

NavItem.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.element
}
NavItem.defaultProps = {
  active: false
}

export default NavItem
