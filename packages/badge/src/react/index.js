import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '@pluralsight/ps-design-system-theme/react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import css from '../css'
import { buildCompoundClass } from '../js'
import * as vars from '../vars'

import { appearancePropChecker } from './prop-types'

const styles = {
  badge: props => {
    const { appearance, color, themeName } = props

    // NOTE: light theme doesn't support the stroke appearance
    //       so fallback to the dark theme
    const isStroke = appearance === vars.appearances.stroke
    const theme = isStroke ? themeNames.dark : themeName

    const baseClass = '.psds-badge'
    const compoundClass = buildCompoundClass({ appearance, color, theme })

    return glamor.css(css[baseClass], css[compoundClass])
  }
}

const Badge = props => {
  const { appearance, color, themeName, ...filteredProps } = props
  return <div {...styles.badge(props)} {...filteredProps} />
}

Badge.appearances = vars.appearances
Badge.colors = vars.colors

Badge.propTypes = {
  appearance: appearancePropChecker,
  color: PropTypes.oneOf(Object.values(vars.colors))
}

Badge.defaultProps = {
  appearance: vars.appearances.default,
  color: vars.colors.gray
}

export const appearances = vars.appearances
export const colors = vars.colors

export default withTheme(Badge)
