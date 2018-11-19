import { transparentize } from 'polished'

import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import { buildCompoundClass } from '../js'
import { appearances, colors } from '../vars'

export default {
  '.psds-badge': {
    border: `1px solid transparent`,
    borderRadius: '2px',
    display: 'inline-block',
    fontSize: core.type.fontSizeXSmall,
    fontWeight: core.type.fontWeightMedium,
    lineHeight: core.type.lineHeightStandard,
    padding: `0 ${core.layout.spacingXSmall}`,
    textTransform: 'uppercase'
  },

  // Default Appearance / Dark Theme
  [buildCompoundClass({ color: colors.gray })]: {
    color: core.colors.white,
    backgroundColor: core.colors.gray03,
    borderColor: core.colors.gray03
  },

  [buildCompoundClass({ color: colors.green })]: {
    color: core.colors.white,
    backgroundColor: core.colors.green,
    borderColor: core.colors.green
  },

  [buildCompoundClass({ color: colors.yellow })]: {
    color: core.colors.black,
    backgroundColor: core.colors.yellow,
    borderColor: core.colors.yellow
  },

  [buildCompoundClass({ color: colors.red })]: {
    color: core.colors.white,
    backgroundColor: core.colors.red,
    borderColor: core.colors.red
  },

  [buildCompoundClass({ color: colors.blue })]: {
    color: core.colors.white,
    backgroundColor: core.colors.blue,
    borderColor: core.colors.blue
  },

  // Default Appearance / Light Theme
  [buildCompoundClass({ color: colors.gray, theme: themeNames.light })]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.gray03)
  },

  [buildCompoundClass({ color: colors.green, theme: themeNames.light })]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.green)
  },

  [buildCompoundClass({ color: colors.yellow, theme: themeNames.light })]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.yellow)
  },

  [buildCompoundClass({ color: colors.red, theme: themeNames.light })]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.red)
  },

  [buildCompoundClass({ color: colors.blue, theme: themeNames.light })]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.blue)
  },

  // Stroke Appearance / Dark Theme
  [buildCompoundClass({
    appearance: appearances.stroke,
    color: colors.gray
  })]: {
    color: core.colors.gray02,
    borderColor: core.colors.gray02
  },

  [buildCompoundClass({
    appearance: appearances.stroke,
    color: colors.green
  })]: {
    color: core.colors.green,
    borderColor: core.colors.green
  },

  [buildCompoundClass({
    appearance: appearances.stroke,
    color: colors.yellow
  })]: {
    color: core.colors.yellow,
    borderColor: core.colors.yellow
  },

  [buildCompoundClass({ appearance: appearances.stroke, color: colors.red })]: {
    color: core.colors.red,
    borderColor: core.colors.red
  },

  [buildCompoundClass({
    appearance: appearances.stroke,
    color: colors.blue
  })]: {
    color: core.colors.blue,
    borderColor: core.colors.blue
  }
}
