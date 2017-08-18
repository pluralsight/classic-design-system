import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'

const appearances = { stroke: 'stroke' }
const colors = {
  gray: 'gray',
  green: 'green',
  yellow: 'yellow',
  red: 'red',
  blue: 'blue'
}

const colorHexMap = {
  [colors.gray]: { bg: core.colors.gray03, stroke: core.colors.gray02 },
  [colors.green]: { bg: core.colors.green, stroke: core.colors.green },
  [colors.yellow]: { bg: core.colors.yellow, stroke: core.colors.yellow },
  [colors.red]: { bg: core.colors.red, stroke: core.colors.red },
  [colors.blue]: { bg: core.colors.blue, stroke: core.colors.blue }
}

const Badge = glamorous.div(
  {
    display: 'inline-block',
    padding: `0 ${core.layout.spacingXSmall}`,
    fontWeight: core.type.fontWeightMedium,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: core.type.lineHeightStandard,
    borderRadius: '2px',
    textTransform: 'uppercase'
  },
  ({ color, appearance }) =>
    appearance === appearances.stroke
      ? {
          color: colorHexMap[color].stroke,
          border: `1px solid ${colorHexMap[color].stroke}`
        }
      : {
          color: core.colors.white,
          backgroundColor: colorHexMap[color].bg
        }
)

Badge.appearances = appearances
Badge.colors = colors

Badge.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances)),
  color: PropTypes.oneOf(Object.keys(colors))
}
Badge.defaultProps = {
  color: colors.gray
}

export default Badge
