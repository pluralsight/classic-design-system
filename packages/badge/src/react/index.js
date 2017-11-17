import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'
import * as vars from '../vars'

const Badge = glamorous.div(
  css['.badge'],
  ({ color, appearance }) =>
    css[`.badge--appearance-${appearance}.badge--color-${color}`]
)

Badge.appearances = vars.appearances
Badge.colors = vars.colors

Badge.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  color: PropTypes.oneOf(Object.keys(vars.colors))
}
Badge.defaultProps = {
  appearance: vars.appearances.default,
  color: vars.colors.gray
}

export const appearances = vars.appearances
export const colors = vars.colors
export default Badge
