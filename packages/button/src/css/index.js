import {
  colors,
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

import * as vars from '../vars/index.js'

export const colorsSecondaryAction = {
  backgroundDefault: colorsBackgroundUtility[25],
  backgroundHover: colorsBackgroundUtility[30],
  backgroundPressed: colorsBackgroundUtility[40]
}

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
    borderRadius: '2px',
    fontSize: type.fontSizeSmall,
    fontWeight: type.fontWeightMedium,
    textAlign: 'center',
    color: colors.white,
    background: colors.orange,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    transition: `all ${motion.speedNormal}`,
    verticalAlign: 'middle',

    '&:not([disabled]):hover': {
      background: colors.orangeLight,
      cursor: 'pointer'
    },
    '&:focus': {
      outline: 'none',

      '&:before': {
        content: ' ',
        position: 'absolute',
        top: '-4px',
        left: '-4px',
        right: '-4px',
        bottom: '-4px',
        border: `3px solid ${colors.blue}`,
        borderRadius: '4px'
      }
    }
  },
  [`.psds-button--appearance-${vars.appearances.primary}.psds-button--2020-colors`]: {
    color: colorsTextIcon.highOnDark,
    background: colorsPrimaryAction.background,
    '&:not([disabled]):hover': {
      background: colorsBlue[5],
      cursor: 'pointer'
    }
  },
  [`.psds-button--size-${vars.sizes.xSmall}`]: {
    fontSize: type.fontSizeXSmall,
    padding: `0 ${layout.spacingXSmall}`,
    height: '24px'
  },
  [`.psds-button--size-${vars.sizes.small}`]: {
    fontSize: type.fontSizeSmall,
    padding: `${layout.spacingXXSmall} ${layout.spacingXSmall}`,
    height: '32px'
  },
  [`.psds-button--size-${vars.sizes.medium}`]: {
    fontSize: type.fontSizeSmall,
    padding: `${layout.spacingXXSmall} ${layout.spacingMedium}`,
    height: '40px'
  },
  [`.psds-button--size-${vars.sizes.large}`]: {
    fontSize: type.fontSizeMedium,
    padding: `${layout.spacingXXSmall} ${layout.spacingMedium}`,
    height: '48px'
  },

  [`.psds-button--appearance-${vars.appearances.secondary}`]: {
    color: colors.gray01,
    background: transparentize(0.75, colors.gray02),

    '&:not([disabled]):hover': {
      color: colors.white,
      background: transparentize(0.65, colors.gray02)
    }
  },
  [`.psds-button--appearance-${vars.appearances.secondary}.psds-theme--${themeNames.light}`]: {
    color: colors.gray03,
    background: transparentize(0.65, colors.gray01),

    '&:not([disabled]):hover': {
      color: colors.gray06,
      background: transparentize(0.35, colors.gray01)
    }
  },
  [`.psds-button--appearance-${vars.appearances.secondary}.psds-button--2020-colors`]: {
    color: colorsTextIcon.highOnDark,
    background: colorsSecondaryAction.backgroundDefault,

    '&:not([disabled]):hover': {
      background: colorsSecondaryAction.backgroundHover
    },
    '&:not([disabled]):active': {
      background: colorsSecondaryAction.backgroundPressed
    }
  },
  [`.psds-button--appearance-${vars.appearances.secondary}.psds-theme--${themeNames.light}.psds-button--2020-colors`]: {
    color: colorsTextIcon.highOnLight,
    background: colorsSecondaryAction.backgroundDefault,
    '&:not([disabled]):hover': {
      background: colorsSecondaryAction.backgroundHover
    },
    '&:not([disabled]):active': {
      background: colorsSecondaryAction.backgroundPressed
    }
  },
  [`.psds-button--appearance-${vars.appearances.stroke}`]: {
    border: `1px solid ${colors.orange}`,
    color: colors.orange,
    background: 'none',

    '&:not([disabled]):hover': {
      border: `1px solid ${colors.orangeLight}`,
      color: colors.orangeLight,
      background: 'none'
    }
  },
  [`.psds-button--appearance-${vars.appearances.stroke}.psds-button--2020-colors`]: {
    border: `1px solid ${colorsPrimaryAction.background}`,
    color: colorsPrimaryAction.background,
    background: 'none',

    '&:not([disabled]):hover': {
      border: `1px solid ${colorsBlue[5]}`,
      color: colorsBlue[5],
      background: 'none'
    }
  },
  [`.psds-button--appearance-${vars.appearances.flat}`]: {
    border: 'none',
    background: 'none',

    '&:not([disabled]):hover': {
      color: colors.white,
      background: transparentize(0.85, colors.white)
    }
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${themeNames.light}`]: {
    color: colors.gray03,

    '&:not([disabled]):hover': {
      color: 'inherit',
      background: transparentize(0.85, colors.gray03)
    }
  },

  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${themeDefaultName}`]: {
    color: colors.gray02
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-button--2020-colors`]: {
    border: 'none',
    background: 'none',
    '&:not([disabled]):hover': {
      background: colorsSecondaryAction.backgroundHover
    },
    '&:not([disabled]):active': {
      background: colorsSecondaryAction.backgroundPressed
    }
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${themeNames.light}.psds-button--2020-colors`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${themeDefaultName}.psds-button--2020-colors`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-button--disabled`]: {
    color: colors.gray02,
    opacity: '50%',
    cursor: 'default',

    '&:not([disabled]):hover': {
      color: 'inherit',
      background: 'inherit',
      border: 'inherit'
    }
  },
  [`.psds-button--disabled.psds-theme--${themeNames.light}`]: {
    color: colors.gray03,
    background: colors.gray01
  },
  [`.psds-button--disabled.psds-button--2020-colors`]: {
    opacity: '50%',
    cursor: 'not-allowed',
    '&:not([disabled]):hover': {
      color: 'inherit',
      background: 'inherit',
      border: 'inherit'
    }
  },
  [`.psds-button--disabled.psds-theme--${themeNames.light}.psds-button--2020-colors`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.primary}`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.secondary}`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.stroke}`]: {
    border: 'none',
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.flat}`]: {
    opacity: 0.4,
    background: 'none'
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.primary}.psds-button--2020-colors`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.secondary}.psds-button--2020-colors`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.stroke}.psds-button--2020-colors`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.flat}.psds-button--2020-colors`]: {
    opacity: 0.5
  },
  [`.psds-button--iconAlign-${vars.iconAligns.right}`]: {
    flexDirection: 'row-reverse'
  },
  [`.psds-button--iconAlign-${vars.iconAligns.right}.psds-button--not-iconOnly`]: {
    paddingRight: layout.spacingXSmall
  },
  [`.psds-button--iconAlign-${vars.iconAligns.left}.psds-button--not-iconOnly`]: {
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
    borderColor: transparentize(0.8, colors.gray04),
    borderTopColor: colors.white
  },
  [`.psds-button__loading--appearance-${vars.appearances.secondary}`]: {
    borderColor: transparentize(0.8, colors.gray01),
    borderTopColor: colors.gray01
  },
  [`.psds-button__loading--appearance-${vars.appearances.secondary}.psds-button__loading--theme-${themeNames.light}`]: {
    borderColor: transparentize(0.8, colors.gray04),
    borderTopColor: colors.gray04
  },
  [`.psds-button__loading--appearance-${vars.appearances.stroke}`]: {
    borderColor: transparentize(0.8, colors.white),
    borderTopColor: colors.orange
  },
  [`.psds-button__loading--appearance-${vars.appearances.flat}.psds-button__loading--theme-${themeNames.light}`]: {
    borderColor: transparentize(0.8, colors.gray04),
    borderTopColor: colors.gray04
  },
  [`.psds-button__loading--appearance-${vars.appearances.flat}.psds-button__loading--theme-${themeDefaultName}`]: {
    borderColor: transparentize(0.8, colors.white),
    borderTopColor: colors.white
  },
  [`.psds-button__loading--appearance-${vars.appearances.primary}.psds-button--2020-colors`]: {
    borderColor: loading.trackColorOnDark,
    borderTopColor: loading.borderTopColorOnDark
  },
  [`.psds-button__loading--appearance-${vars.appearances.secondary}.psds-button__loading--theme-${themeNames.light}.psds-button--2020-colors`]: {
    borderColor: loading.trackColorOnLight,
    borderTopColor: loading.borderTopColorOnLight
  },
  [`.psds-button__loading--appearance-${vars.appearances.secondary}.psds-button__loading--theme-${themeDefaultName}.psds-button--2020-colors`]: {
    borderColor: loading.trackColorOnDark,
    borderTopColor: loading.borderTopColorOnDark
  },
  [`.psds-button__loading--appearance-${vars.appearances.stroke}.psds-button__loading--theme-${themeNames.light}.psds-button--2020-colors`]: {
    borderColor: loading.trackColorOnLight,
    borderTopColor: loading.borderTopColorOnStroke
  },
  [`.psds-button__loading--appearance-${vars.appearances.stroke}.psds-button__loading--theme-${themeDefaultName}.psds-button--2020-colors`]: {
    borderColor: loading.trackColorOnDark,
    borderTopColor: loading.borderTopColorOnStroke
  },
  [`.psds-button__loading--appearance-${vars.appearances.flat}.psds-button__loading--theme-${themeNames.light}.psds-button--2020-colors`]: {
    borderColor: loading.trackColorOnLight,
    borderTopColor: loading.borderTopColorOnLight
  },
  [`.psds-button__loading--appearance-${vars.appearances.flat}.psds-button__loading--theme-${themeDefaultName}.psds-button--2020-colors`]: {
    borderColor: loading.trackColorOnDark,
    borderTopColor: loading.borderTopColorOnDark
  },

  [`.psds-button__text`]: {
    alignItems: 'center',
    display: 'inline-flex',
    pointerEvents: 'none'
  }
}
