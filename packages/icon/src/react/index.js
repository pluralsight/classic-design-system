import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'

import icons from '../js/icons'

import css from '../css'
import * as vars from '../vars'

const IconContainer = glamorous.div(
  css['.psds-icon'],
  ({ size }) => css[`.psds-icon--size-${size}`],
  ({ color }) => ({
    '> svg': color
      ? css[`.psds-icon--color-${color} > svg`]
      : css['.psds-icon > svg']
  })
)

const rmNonHtmlProps = props => {
  const { id, ...rest } = props
  return rest
}

const Icon = props => {
  const children =
    props.children && props.children.type !== 'slot' ? props.children : null
  const svgFactory = icons[props.id] || icons[props.icon]
  return (
    <IconContainer {...rmNonHtmlProps(props)}>
      {children || (svgFactory && svgFactory(React))}
    </IconContainer>
  )
}

Icon.propTypes = {
  color: PropTypes.oneOf(Object.keys(vars.colors)),
  icon: PropTypes.oneOf(Object.keys(vars.ids)),
  id: PropTypes.oneOf(Object.keys(vars.ids)),
  size: PropTypes.oneOf(Object.keys(vars.sizes))
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
