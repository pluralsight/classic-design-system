import {
  colorsBackgroundUtility,
  colorsBlue,
  colorsBorder,
  colorsPrimaryAction,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import { transparentize } from '@pluralsight/ps-design-system-util'

import * as vars from '../vars'

export const loading = {
  trackColorOnLight: colorsBorder.lowOnLight,
  trackColorOnDark: colorsBorder.lowOnDark,
  borderTopColorOnLight: colorsTextIcon.highOnLight,
  borderTopColorOnDark: colorsTextIcon.highOnDark,
  borderTopColorOnStroke: colorsPrimaryAction.background
}

export default {
  '@keyframes psds-button__keyframes__spin': {
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  '.psds-button': {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: `${layout.spacingSmall} ${layout.spacingMedium}`,
    border: 0,
    borderRadius: '3px',
    fontSize: type.fontSize300,
    fontWeight: type.fontWeight500,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    transition: `all ${motion.speedXFast}`,
    verticalAlign: 'middle',
    '&:not([disabled]):hover': {
      cursor: 'pointer'
    },
    '&:focus:not(:focus-visible)': {
      outline: 'none',
      boxShadow: 'none'
    },
    '&:not([disabled]):active': {
      transform: 'scale(0.98)'
    }
  },
  [`.psds-button.psds-theme--${themeDefaultName}`]: {
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${colorsBlue[4]}`
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${colorsBlue[4]}`
    }
  },
  [`.psds-button.psds-theme--${themeNames.light}`]: {
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${colorsBlue[8]}`
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${colorsBlue[8]}`
    }
  },
  [`.psds-button--layout-${vars.layouts.fullWidth}`]: {
    display: 'flex',
    width: '100%'
  },
  [`.psds-button--size-${vars.sizes.xSmall}`]: {
    fontSize: type.fontSize100,
    letterSpacing: type.letterSpacingLooser,
    padding: `0 ${layout.spacingXSmall}`,
    height: '24px'
  },
  [`.psds-button--size-${vars.sizes.small}`]: {
    fontSize: type.fontSize200,
    letterSpacing: type.letterSpacingLooser,
    padding: `${layout.spacingXXSmall} ${layout.spacingSmall}`,
    height: '32px'
  },
  [`.psds-button--size-${vars.sizes.medium}`]: {
    fontSize: type.fontSize300,
    letterSpacing: type.letterSpacingLoose,
    padding: `${layout.spacingXXSmall} ${layout.spacingMedium}`,
    height: '40px'
  },
  [`.psds-button--size-${vars.sizes.large}`]: {
    fontSize: type.fontSize400,
    letterSpacing: type.letterSpacingNone,
    padding: `${layout.spacingXXSmall} ${layout.spacingLarge}`,
    height: '48px'
  },
  [`.psds-button--appearance-${vars.appearances.primary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark,
    background: colorsPrimaryAction.background,
    '&:not([disabled]):hover': {
      background: colorsBlue[8],
      cursor: 'pointer'
    },
    '&:not([disabled]):focus': {
      background: colorsBlue[8],
      cursor: 'pointer'
    },
    '&:not([disabled]):active': {
      background: colorsBlue[9]
    }
  },
  [`.psds-button--appearance-${vars.appearances.primary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnDark,
    background: colorsPrimaryAction.background,
    '&:not([disabled]):hover': {
      background: colorsBlue[8],
      cursor: 'pointer'
    },
    '&:not([disabled]):focus': {
      background: colorsBlue[8],
      cursor: 'pointer',
      boxShadow: `0 0 0 2px ${colorsBlue[5]}`
    },
    '&:not([disabled]):focus-visible': {
      boxShadow: `0 0 0 2px ${colorsBlue[5]}`
    },
    '&:not([disabled]):active': {
      background: colorsBlue[9]
    }
  },
  [`.psds-button--appearance-${vars.appearances.secondary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark,
    background: colorsBackgroundUtility[25],

    '&:not([disabled]):hover': {
      background: colorsBackgroundUtility[30]
    },
    '&:not([disabled]):focus': {
      background: colorsBackgroundUtility[30]
    },
    '&:not([disabled]):active': {
      background: colorsBackgroundUtility[20]
    }
  },
  [`.psds-button--appearance-${vars.appearances.secondary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight,
    background: colorsBackgroundUtility[20],

    '&:not([disabled]):hover': {
      background: colorsBackgroundUtility[25]
    },
    '&:not([disabled]):focus': {
      background: colorsBackgroundUtility[25]
    },
    '&:not([disabled]):active': {
      background: colorsBackgroundUtility[30]
    }
  },
  [`.psds-button--appearance-${vars.appearances.stroke}.psds-theme--${themeDefaultName}`]: {
    border: `2px solid ${colorsPrimaryAction.background}`,
    color: colorsPrimaryAction.textDarkTheme,
    background: 'none',

    '&:not([disabled]):hover': {
      border: `2px solid ${colorsBlue[5]}`,
      background: transparentize(0.85, colorsPrimaryAction.textDarkTheme),
      color: colorsBlue[4]
    },
    '&:not([disabled]):focus': {
      border: `2px solid ${colorsBlue[5]}`,
      background: transparentize(0.85, colorsPrimaryAction.textDarkTheme),
      color: colorsBlue[4]
    },
    '&:not([disabled]):active': {
      border: `2px solid ${colorsBlue[7]}`,
      background: transparentize(0.8, colorsPrimaryAction.textDarkTheme)
    }
  },
  [`.psds-button--appearance-${vars.appearances.stroke}.psds-theme--${themeNames.light}`]: {
    border: `2px solid ${colorsPrimaryAction.background}`,
    color: colorsPrimaryAction.textLightTheme,
    background: 'none',

    '&:not([disabled]):hover': {
      border: `2px solid ${colorsBlue[7]}`,
      background: transparentize(0.95, colorsPrimaryAction.textLightTheme),
      color: colorsBlue[8]
    },
    '&:not([disabled]):focus': {
      border: `2px solid ${colorsBlue[7]}`,
      background: transparentize(0.95, colorsPrimaryAction.textLightTheme),
      color: colorsBlue[8]
    },
    '&:not([disabled]):active': {
      border: `2px solid ${colorsBlue[8]}`,
      background: transparentize(0.9, colorsPrimaryAction.textLightTheme)
    }
  },
  [`.psds-button--appearance-${vars.appearances.flat}`]: {
    border: 'none',
    background: 'none'
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark,
    '&:not([disabled]):hover': {
      background: colorsBackgroundUtility[25],
      color: colorsTextIcon.highOnDark
    },
    '&:not([disabled]):focus': {
      background: colorsBackgroundUtility[25],
      color: colorsTextIcon.highOnDark
    },
    '&:not([disabled]):active': {
      background: colorsBackgroundUtility[20],
      color: colorsTextIcon.highOnDark
    }
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight,
    '&:not([disabled]):hover': {
      background: colorsBackgroundUtility[20],
      color: colorsTextIcon.highOnLight
    },
    '&:not([disabled]):focus': {
      background: colorsBackgroundUtility[20],
      color: colorsTextIcon.highOnLight
    },
    '&:not([disabled]):active': {
      background: colorsBackgroundUtility[15],
      color: colorsTextIcon.highOnLight
    }
  },
  [`.psds-button--disabled`]: {
    opacity: '50%',
    cursor: 'not-allowed',
    '&:not([disabled]):hover': {
      color: 'inherit',
      background: 'inherit',
      border: 'inherit'
    }
  },
  [`.psds-button--disabled.psds-theme--${themeNames.light}`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.primary}`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.secondary}`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.stroke}`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.flat}`]: {
    opacity: 0.5
  },
  [`.psds-button--iconAlign-${vars.iconAligns.right}`]: {
    flexDirection: 'row-reverse'
  },
  [`.psds-button--iconAlign-${vars.iconAligns.right}.psds-button--not-iconOnly.psds-button--size-${vars.sizes.xSmall}`]: {
    paddingRight: layout.spacingXXSmall
  },
  [`.psds-button--iconAlign-${vars.iconAligns.left}.psds-button--not-iconOnly.psds-button--size-${vars.sizes.xSmall}`]: {
    paddingLeft: layout.spacingXXSmall
  },
  [`.psds-button--iconAlign-${vars.iconAligns.right}.psds-button--not-iconOnly.psds-button--size-${vars.sizes.small}`]: {
    paddingRight: layout.spacingXXSmall
  },
  [`.psds-button--iconAlign-${vars.iconAligns.left}.psds-button--not-iconOnly.psds-button--size-${vars.sizes.small}`]: {
    paddingLeft: layout.spacingXXSmall
  },
  [`.psds-button--iconAlign-${vars.iconAligns.right}.psds-button--not-iconOnly.psds-button--size-${vars.sizes.medium}`]: {
    paddingRight: layout.spacingXSmall
  },
  [`.psds-button--iconAlign-${vars.iconAligns.left}.psds-button--not-iconOnly.psds-button--size-${vars.sizes.medium}`]: {
    paddingLeft: layout.spacingXSmall
  },
  [`.psds-button--iconAlign-${vars.iconAligns.right}.psds-button--not-iconOnly.psds-button--size-${vars.sizes.large}`]: {
    paddingRight: layout.spacingSmall
  },
  [`.psds-button--iconAlign-${vars.iconAligns.left}.psds-button--not-iconOnly.psds-button--size-${vars.sizes.large}`]: {
    paddingLeft: layout.spacingSmall
  },
  [`.psds-button--iconOnly`]: {
    padding: 0
  },
  [`.psds-button--iconOnly.psds-button--size-${vars.sizes.xSmall}`]: {
    width: '24px'
  },
  [`.psds-button--iconOnly.psds-button--size-${vars.sizes.small}`]: {
    width: '32px'
  },
  [`.psds-button--iconOnly.psds-button--size-${vars.sizes.medium}`]: {
    width: '40px'
  },
  [`.psds-button--iconOnly.psds-button--size-${vars.sizes.large}`]: {
    width: '48px'
  },
  [`.psds-button__icon`]: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100%'
  },
  [`.psds-button__icon--iconAlign-${vars.iconAligns.right}`]: {
    marginLeft: layout.spacingXSmall,
    marginRight: 0
  },
  [`.psds-button__icon--iconAlign-${vars.iconAligns.left}`]: {
    marginLeft: 0,
    marginRight: layout.spacingXSmall
  },
  [`.psds-button__icon--iconOnly`]: {
    justifyContent: 'center',
    width: '100%',
    margin: 0
  },

  [`.psds-button__loading`]: ({ spin }) => ({
    display: 'inline-block',
    height: 'calc(100% - 4px)',
    width: 'calc(100% - 4px)',
    margin: '2px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '100%',
    animation: `${spin || 'psds-button__keyframes__spin'} 1s linear infinite`
  }),
  [`.psds-button__loading--appearance-${vars.appearances.primary}`]: {
    borderColor: loading.trackColorOnDark,
    borderTopColor: loading.borderTopColorOnDark
  },
  [`.psds-button__loading--appearance-${vars.appearances.secondary}.psds-button__loading--theme-${themeNames.light}`]: {
    borderColor: loading.trackColorOnLight,
    borderTopColor: loading.borderTopColorOnLight
  },
  [`.psds-button__loading--appearance-${vars.appearances.secondary}.psds-button__loading--theme-${themeDefaultName}`]: {
    borderColor: loading.trackColorOnDark,
    borderTopColor: loading.borderTopColorOnDark
  },
  [`.psds-button__loading--appearance-${vars.appearances.stroke}.psds-button__loading--theme-${themeNames.light}`]: {
    borderColor: loading.trackColorOnLight,
    borderTopColor: loading.borderTopColorOnStroke
  },
  [`.psds-button__loading--appearance-${vars.appearances.stroke}.psds-button__loading--theme-${themeDefaultName}`]: {
    borderColor: loading.trackColorOnDark,
    borderTopColor: loading.borderTopColorOnStroke
  },
  [`.psds-button__loading--appearance-${vars.appearances.flat}.psds-button__loading--theme-${themeNames.light}`]: {
    borderColor: loading.trackColorOnLight,
    borderTopColor: loading.borderTopColorOnLight
  },
  [`.psds-button__loading--appearance-${vars.appearances.flat}.psds-button__loading--theme-${themeDefaultName}`]: {
    borderColor: loading.trackColorOnDark,
    borderTopColor: loading.borderTopColorOnDark
  },

  [`.psds-button__text`]: {
    alignItems: 'center',
    display: 'inline-flex',
    pointerEvents: 'none'
  }
}
