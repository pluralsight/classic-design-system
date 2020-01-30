import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import { select } from '../js/index.js'
import * as vars from '../vars/index.js'

const styles = {
  badge: props =>
    css(
      stylesheet['.psds-badge'],
      stylesheet[select(props.themeName, props.appearance, props.color)]
    )
}

const Badge = React.forwardRef((props, ref) => {
  const themeName = useTheme()
  const allProps = { themeName, ...props }
  return (
    <div
      {...styles.badge(allProps)}
      {...filterReactProps(allProps)}
      ref={ref}
    />
  )
})

Badge.propTypes = {
  appearance: PropTypes.oneOf(Object.values(vars.appearances)),
  color: PropTypes.oneOf(Object.values(vars.colors))
}

Badge.defaultProps = {
  appearance: vars.appearances.default,
  color: vars.colors.gray
}

Badge.appearances = vars.appearances
Badge.colors = vars.colors

export const appearances = vars.appearances
export const colors = vars.colors

export default Badge
