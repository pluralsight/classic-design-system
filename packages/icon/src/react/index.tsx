import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const style = {
  icon: ({ color, size }) =>
    css(
      stylesheet['.psds-icon'],
      stylesheet[`.psds-icon--size-${size}`],
      stylesheet[`.psds-icon--color-${color}`]
    )
}

const Icon = React.forwardRef(({ children, ...props }, ref) => (
  <div {...style.icon(props)} {...filterReactProps(props)} ref={ref}>
    {children}
  </div>
))
Icon.displayName = 'Icon'
Icon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(vars.colors)),
  size: PropTypes.oneOf(Object.values(vars.sizes))
}

Icon.defaultProps = {
  size: vars.sizes.medium
}

Icon.colors = vars.colors
Icon.sizes = vars.sizes

export const sizes = vars.sizes
export const colors = vars.colors

export default Icon
