import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@pluralsight/ps-design-system-theme'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  navitem: ({ active }) =>
    css(
      stylesheet['.psds-navitem'],
      active && stylesheet['.psds-navitem--active']
    ),
  icon: () => css(stylesheet['.psds-navitem__icon']),
  text: () => css(stylesheet['.psds-navitem__text'])
}
// TODO
// icon
// active
// href
// dynamic tag

const NavItem = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <button
      ref={ref}
      {...styles.navitem(themeName, props)}
      {...filterReactProps(props)}
    >
      <span {...styles.icon()}>{props.icon}</span>
      <span {...styles.text()}>{props.children}</span>
    </button>
  )
})

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  icon: PropTypes.element
}
NavItem.defaultProps = {
  active: false
}

export default NavItem
