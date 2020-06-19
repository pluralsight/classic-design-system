import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

// import { useTheme } from '@pluralsight/ps-design-system-theme'
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
// TODO theme

const NavItem = React.forwardRef((props, forwardedRef) => {
  // const themeName = useTheme()
  const tagName = props.href ? 'a' : 'button'

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return React.createElement(
    tagName,
    {
      ...styles.navitem(props),
      ...filterReactProps(props, { tagName }),
      ref
    },
    <span {...styles.icon()}>{props.icon}</span>,
    <span {...styles.text()}>{props.children}</span>
  )
})
NavItem.displayName = 'NavItem'

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
