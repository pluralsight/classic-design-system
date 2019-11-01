import { transparentize } from '@pluralsight/ps-design-system-util'

import * as core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars.js'

import { defaultWithColor, subtleThemeWithColor } from '../js/index.js'
import { colors } from '../vars/index.js'

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

  [defaultWithColor(colors.gray)]: {
    color: core.colors.white,
    backgroundColor: core.colors.gray03,
    borderColor: core.colors.gray03
  },
  [defaultWithColor(colors.green)]: {
    color: core.colors.white,
    backgroundColor: core.colors.green,
    borderColor: core.colors.green
  },
  [defaultWithColor(colors.yellow)]: {
    color: core.colors.black,
    backgroundColor: core.colors.yellow,
    borderColor: core.colors.yellow
  },
  [defaultWithColor(colors.red)]: {
    color: core.colors.white,
    backgroundColor: core.colors.red,
    borderColor: core.colors.red
  },
  [defaultWithColor(colors.blue)]: {
    color: core.colors.white,
    backgroundColor: core.colors.blue,
    borderColor: core.colors.blue
  },

  [subtleThemeWithColor(themeNames.dark, colors.gray)]: {
    color: core.colors.gray02,
    borderColor: core.colors.gray02
  },

  [subtleThemeWithColor(themeNames.dark, colors.green)]: {
    color: core.colors.green,
    borderColor: core.colors.green
  },

  [subtleThemeWithColor(themeNames.dark, colors.yellow)]: {
    color: core.colors.yellow,
    borderColor: core.colors.yellow
  },

  [subtleThemeWithColor(themeNames.dark, colors.red)]: {
    color: core.colors.red,
    borderColor: core.colors.red
  },

  [subtleThemeWithColor(themeNames.dark, colors.blue)]: {
    color: core.colors.blue,
    borderColor: core.colors.blue
  },

  [subtleThemeWithColor(themeNames.light, colors.gray)]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.gray03)
  },
  [subtleThemeWithColor(themeNames.light, colors.green)]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.green)
  },
  [subtleThemeWithColor(themeNames.light, colors.yellow)]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.yellow)
  },
  [subtleThemeWithColor(themeNames.light, colors.red)]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.red)
  },
  [subtleThemeWithColor(themeNames.light, colors.blue)]: {
    color: core.colors.gray04,
    backgroundColor: transparentize(0.85, core.colors.blue)
  }
}
