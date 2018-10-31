import * as glamor from 'glamor'
import React from 'react'

import core from '@pluralsight/ps-design-system-core'

import withDefaultTheme from '../src/react/with-default-theme'

const css = {
  '.focusable': {
    background: core.colors.bone,
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
    background: core.colors.gray02,
    borderColor: core.colors.gray02,
    color: core.colors.white
  },
  '.focusable--shape-pill': {
    borderRadius: '1000px'
  }
}

const styles = {
  focusable: props =>
    glamor.css(
      css['.focusable'],
      css[`.focusable--theme-${props.themeName}`],
      css[`.focusable--shape-${props.shape}`]
    )
}

const Focusable = props => {
  const { shape, themeName, ...filteredProps } = props

  return <div {...styles.focusable(props)} {...filteredProps} />
}

Focusable.defaultProps = {
  children: 'focusable',
  tabIndex: 0
}

export default withDefaultTheme(Focusable)
