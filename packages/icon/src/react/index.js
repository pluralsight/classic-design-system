import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

import icons from './icon-loader.js'

const style = {
  icon: ({ color, size }) =>
    css({
      ...stylesheet['.psds-icon'],
      ...stylesheet[`.psds-icon--size-${size}`],

      '> svg': color
        ? stylesheet[`.psds-icon--color-${color} > svg`]
        : stylesheet['.psds-icon > svg']
    })
}

const IconNotFound = () => null

const Icon = React.forwardRef(
  ({ id, 'aria-label': ariaLabel, ...props }, ref) => {
    const isCustom = !!props.children
    let Comp = icons[id] || IconNotFound

    if (isCustom) Comp = () => props.children

    return (
      <div {...style.icon(props)} {...filterReactProps(props)} ref={ref}>
        <Comp {...(ariaLabel && { 'aria-label': ariaLabel })} />
      </div>
    )
  }
)

Icon.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(vars.colors)),
  id: PropTypes.oneOf(Object.values(vars.ids)),
  size: PropTypes.oneOf(Object.values(vars.sizes))
}

Icon.defaultProps = {
  size: vars.sizes.medium
}

Icon.colors = vars.colors
Icon.ids = vars.ids
Icon.sizes = vars.sizes

export const ids = vars.ids
export const sizes = vars.sizes
export const colors = vars.colors

export default Icon
