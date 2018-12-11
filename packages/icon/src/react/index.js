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
  }),
  ({ css: propsCss }) => propsCss
)

const rmNonHtmlProps = props => {
  const { id, ...rest } = props
  return rest
}

const Icon = props => {
  return (
    <IconContainer {...rmNonHtmlProps(props)}>
      {props.children || icons[props.id](React)}
    </IconContainer>
  )
}

Icon.propTypes = {
  color: PropTypes.oneOf(Object.keys(vars.colors)),
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
