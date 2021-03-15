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
  colorsWhite
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import { appearances, colors } from '../vars/index.js'
import { select } from '../js/index.js'

export default {
  '.psds-badge': {
    borderRadius: '2px',
    display: 'inline-block',
    fontSize: type.fontSize100,
    letterSpacing: type.letterSpacingAllCaps,
    fontWeight: type.fontWeightStrong,
    lineHeight: type.lineHeightStandard,
    padding: `0 ${layout.spacingXSmall}`,
    textTransform: 'uppercase'
  },

  [select(themeNames.dark, appearances.default, colors.neutral)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsWhite
  },
  [select(themeNames.dark, appearances.default, colors.green)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsGreen[8]
  },
  [select(themeNames.dark, appearances.default, colors.yellow)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsYellow[6]
  },
  [select(themeNames.dark, appearances.default, colors.red)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsRed[7]
  },
  [select(themeNames.dark, appearances.default, colors.blue)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBlue[7]
  },

  [select(themeNames.light, appearances.default, colors.neutral)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBackgroundDark[3]
  },
  [select(themeNames.light, appearances.default, colors.green)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsGreen[8]
  },
  [select(themeNames.light, appearances.default, colors.yellow)]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsYellow[6]
  },
  [select(themeNames.light, appearances.default, colors.red)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsRed[7]
  },
  [select(themeNames.light, appearances.default, colors.blue)]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBlue[7]
  },

  [select(themeNames.dark, appearances.subtle, colors.neutral)]: {
    color: colorsTextIcon.lowOnDark,
    backgroundColor: colorsBackgroundUtility[40]
  },
  [select(themeNames.dark, appearances.subtle, colors.green)]: {
    color: colorsGreen[1],
    backgroundColor: 'rgba(0,143,70,0.5)'
  },
  [select(themeNames.dark, appearances.subtle, colors.yellow)]: {
    color: colorsYellow[1],
    backgroundColor: 'rgba(226,181,0,0.5)'
  },
  [select(themeNames.dark, appearances.subtle, colors.red)]: {
    color: colorsRed[1],
    backgroundColor: 'rgba(192,15,0,0.5)'
  },

  [select(themeNames.dark, appearances.subtle, colors.blue)]: {
    color: colorsBlue[1],
    backgroundColor: 'rgba(0,116,171,0.5)'
  },

  [select(themeNames.light, appearances.subtle, colors.neutral)]: {
    color: colorsTextIcon.lowOnLight,
    backgroundColor: colorsBackgroundUtility[20]
  },
  [select(themeNames.light, appearances.subtle, colors.green)]: {
    color: colorsGreen[10],
    backgroundColor: colorsGreen[1]
  },
  [select(themeNames.light, appearances.subtle, colors.yellow)]: {
    color: colorsYellow[10],
    backgroundColor: colorsYellow[1]
  },
  [select(themeNames.light, appearances.subtle, colors.red)]: {
    color: colorsRed[10],
    backgroundColor: colorsRed[1]
  },
  [select(themeNames.light, appearances.subtle, colors.blue)]: {
    color: colorsBlue[10],
    backgroundColor: colorsBlue[1]
  }
}
