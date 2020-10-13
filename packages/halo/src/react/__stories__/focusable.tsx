import * as core from '@pluralsight/ps-design-system-core'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import * as glamor from 'glamor'
import React from 'react'

const css = {
  '.focusable': {
    background: core.colorsBackgroundLight[1],
    borderRadius: '2px',
    cursor: 'pointer',
    fontSize: core.type.fontSizeSmall,
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightStandard,
    outline: 'none',
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingMedium}`,
    position: 'relative',
    textAlign: 'center',
    width: '100%'
  },
  '.focusable--theme-light': {
    background: core.colorsBackgroundLight[1],
    borderColor: core.colorsBorder.highOnLight,
    color: core.colorsWhite
  },
  '.focusable--shape-pill': {
    borderRadius: '1000px'
  }
}

const styles = {
  focusable: (themeName, { shape }) =>
    glamor.css(
      css['.focusable'],
      css[`.focusable--theme-${themeName}`],
      css[`.focusable--shape-${shape}`]
    )
}

const Focusable = props => {
  const themeName = useTheme()
  const { shape, ...filteredProps } = props

  return <div {...styles.focusable(themeName, { shape })} {...filteredProps} />
}

Focusable.defaultProps = {
  children: 'focusable',
  tabIndex: 0
}

export default Focusable
