import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import css from '../css'
import * as vars from '../vars'

const styles = {
  badge: props => {
    const base = '.psds-badge'

    const appearance = `.psds-badge--appearance-${props.appearance}`
    const color = `.psds-badge--color-${props.color}`
    const combined = appearance + color

    return glamor.css(css[base], css[combined])
  }
}

const Badge = props => {
  const { appearance, color, ...filteredProps } = props
  return <div {...styles.badge(props)} {...filteredProps} />
}

Badge.appearances = vars.appearances
Badge.colors = vars.colors

Badge.propTypes = {
  appearance: PropTypes.oneOf(Object.values(vars.appearances)),
  color: PropTypes.oneOf(Object.values(vars.colors))
}

Badge.defaultProps = {
  appearance: vars.appearances.default,
  color: vars.colors.gray
}

export const appearances = vars.appearances
export const colors = vars.colors

export default Badge
