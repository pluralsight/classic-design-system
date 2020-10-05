import {
  colorsBackgroundDark,
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

import { appearances, colors } from '../vars'
import { select } from '../js'

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

  [select(themeNames.dark, appearances.default, colors.gray)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBackgroundUtility[25]
  },
  [select(themeNames.dark, appearances.default, colors.green)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsGreen.base,
    borderColor: colorsGreen.base
  },
  [select(themeNames.dark, appearances.default, colors.yellow)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsYellow.base,
    borderColor: colorsYellow.base
  },
  [select(themeNames.dark, appearances.default, colors.red)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsRed.base,
    borderColor: colorsRed.base
  },
  [select(themeNames.dark, appearances.default, colors.blue)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBlue.base,
    borderColor: colorsBlue.base
  },

  [select(themeNames.light, appearances.default, colors.gray)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBackgroundDark[3],
    borderColor: colorsBackgroundDark[3]
  },
  [select(themeNames.light, appearances.default, colors.green)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsGreen.base,
    borderColor: colorsGreen.base
  },
  [select(themeNames.light, appearances.default, colors.yellow)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsYellow.base,
    borderColor: colorsYellow.base
  },
  [select(themeNames.light, appearances.default, colors.red)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsRed.base,
    borderColor: colorsRed.base
  },
  [select(themeNames.light, appearances.default, colors.blue)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBlue.base,
    borderColor: colorsBlue.base
  },

  [select(themeNames.dark, appearances.subtle, colors.gray)]: {
    color: colorsTextIcon.lowOnDark,
    borderColor: colorsBorder.highOnDark
  },
  [select(themeNames.dark, appearances.subtle, colors.green)]: {
    color: colorsGreen.base,
    borderColor: colorsGreen.base
  },
  [select(themeNames.dark, appearances.subtle, colors.yellow)]: {
    color: colorsYellow.base,
    borderColor: colorsYellow.base
  },
  [select(themeNames.dark, appearances.subtle, colors.red)]: {
    color: colorsRed[5],
    borderColor: colorsRed.base
  },

  [select(themeNames.dark, appearances.subtle, colors.blue)]: {
    color: colorsBlue[5],
    borderColor: colorsBlue.base
  },

  [select(themeNames.light, appearances.subtle, colors.gray)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsBackgroundUtility[25],
    borderColor: 'transparent'
  },
  [select(themeNames.light, appearances.subtle, colors.green)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsGreen[1],
    borderColor: colorsGreen[1]
  },
  [select(themeNames.light, appearances.subtle, colors.yellow)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsYellow[1],
    borderColor: colorsYellow[1]
  },
  [select(themeNames.light, appearances.subtle, colors.red)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsRed[1],
    borderColor: colorsRed[1]
  },
  [select(themeNames.light, appearances.subtle, colors.blue)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsBlue[1],
    borderColor: colorsBlue[1]
  }
}
