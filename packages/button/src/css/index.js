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
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    transition: `all ${motion.speedNormal}`,
    verticalAlign: 'middle',

    '&:not([disabled]):hover': {
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
        border: `3px solid ${colorsBlue.base}`,
        borderRadius: '4px'
      }
    }
  },
  [`.psds-button--appearance-${vars.appearances.primary}`]: {
    color: colorsTextIcon.highOnDark,
    background: colorsPrimaryAction.background,
    '&:not([disabled]):hover': {
      background: colorsBlue[5]
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
    color: colorsTextIcon.highOnDark,
    background: colorsSecondaryAction.backgroundDefault,

    '&:not([disabled]):hover': {
      background: colorsSecondaryAction.backgroundHover
    },
    '&:not([disabled]):active': {
      background: colorsSecondaryAction.backgroundPressed
    }
  },
  [`.psds-button--appearance-${vars.appearances.secondary}.psds-theme--${themeNames.light}`]: {
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
    border: `1px solid ${colorsPrimaryAction.background}`,
    color: colorsPrimaryAction.textDarkTheme,
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
      background: colorsSecondaryAction.backgroundHover
    },
    '&:not([disabled]):active': {
      background: colorsSecondaryAction.backgroundPressed
    }
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
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
