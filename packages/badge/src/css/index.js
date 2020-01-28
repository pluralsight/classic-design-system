import {
  colorsBackgroundUtility,
  colorsTextIcon,
  layout,
  type,
  colorsGreen,
  colorsYellow,
  colorsBlue,
  colorsRed,
  colorsBorder
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import { defaultWithColor, subtleThemeWithColor } from '../js/index.js'
import { colors } from '../vars/index.js'

export default {
  '.psds-badge': {
    border: `1px solid transparent`,
    borderRadius: '2px',
    display: 'inline-block',
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightMedium,
    lineHeight: type.lineHeightStandard,
    padding: `0 ${layout.spacingXSmall}`,
    textTransform: 'uppercase'
  },

  [defaultWithColor(themeNames.dark, colors.gray)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBackgroundUtility[25],
    borderColor: colorsBackgroundUtility[25]
  },
  [defaultWithColor(themeNames.dark, colors.green)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsGreen.base,
    borderColor: colorsGreen.base
  },
  [defaultWithColor(themeNames.dark, colors.yellow)]: {
    color: '#181818',
    backgroundColor: colorsYellow.base,
    borderColor: colorsYellow.base
  },
  [defaultWithColor(themeNames.dark, colors.red)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsRed.base,
    borderColor: colorsRed.base
  },
  [defaultWithColor(themeNames.dark, colors.blue)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBlue.base,
    borderColor: colorsBlue.base
  },

  [defaultWithColor(themeNames.light, colors.gray)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsBackgroundUtility[25],
    borderColor: colorsBackgroundUtility[25]
  },
  [defaultWithColor(themeNames.light, colors.green)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsGreen.base,
    borderColor: colorsGreen.base
  },
  [defaultWithColor(themeNames.light, colors.yellow)]: {
    color: '#181818',
    backgroundColor: colorsYellow.base,
    borderColor: colorsYellow.base
  },
  [defaultWithColor(themeNames.light, colors.red)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsRed.base,
    borderColor: colorsRed.base
  },
  [defaultWithColor(themeNames.light, colors.blue)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBlue.base,
    borderColor: colorsBlue.base
  },

  [subtleThemeWithColor(themeNames.dark, colors.gray)]: {
    color: colorsTextIcon.lowOnDark,
    borderColor: colorsBorder.highOnDark
  },

  [subtleThemeWithColor(themeNames.dark, colors.green)]: {
    color: colorsGreen.base,
    borderColor: colorsGreen.base
  },

  [subtleThemeWithColor(themeNames.dark, colors.yellow)]: {
    color: colorsYellow.base,
    borderColor: colorsYellow.base
  },

  [subtleThemeWithColor(themeNames.dark, colors.red)]: {
    color: colorsRed.base,
    borderColor: colorsRed.base
  },

  [subtleThemeWithColor(themeNames.dark, colors.blue)]: {
    color: colorsBlue.base,
    borderColor: colorsBlue.base
  },

  [subtleThemeWithColor(themeNames.light, colors.gray)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsBackgroundUtility[25],
    borderColor: colorsBackgroundUtility[25]
  },
  [subtleThemeWithColor(themeNames.light, colors.green)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsGreen[1],
    borderColor: colorsGreen[1]
  },
  [subtleThemeWithColor(themeNames.light, colors.yellow)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsYellow[1],
    borderColor: colorsYellow[1]
  },
  [subtleThemeWithColor(themeNames.light, colors.red)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsRed[1],
    borderColor: colorsRed[1]
  },
  [subtleThemeWithColor(themeNames.light, colors.blue)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsBlue[3],
    borderColor: colorsBlue[3]
  }
}
