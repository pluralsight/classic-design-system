import * as core from '@pluralsight/ps-design-system-core'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import { StyleFn } from '..'
import * as vars from '../../vars'

const stylesheet: { [selector: string]: Record<string, unknown> } = {
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

const styles: { [name: string]: StyleFn<FocusableProps> } = {
  focusable: (themeName, { shape }) =>
    css(
      stylesheet['.focusable'],
      stylesheet[`.focusable--theme-${themeName}`],
      stylesheet[`.focusable--shape-${shape}`]
    )
}

interface FocusableProps {
  shape?: ValueOf<typeof vars.shapes>
}
const Focusable: React.FC<FocusableProps> = props => {
  const themeName = useTheme()
  const { shape, children = 'focusable' } = props

  return (
    <div {...styles.focusable(themeName, { shape })} tabIndex={0}>
      {children}
    </div>
  )
}

export default Focusable
