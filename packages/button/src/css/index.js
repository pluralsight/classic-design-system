import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from 'polished'

import * as vars from '../vars'

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
    padding: `${core.layout.spacingSmall} ${core.layout.spacingMedium}`,
    border: 0,
    borderRadius: '2px',
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium,
    textAlign: 'center',
    color: core.colors.white,
    background: core.colors.orange,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    transition: `all ${core.motion.speedNormal}`,
    verticalAlign: 'middle'
  },
  '.psds-button:hover': {
    background: core.colors.orangeLight
  },
  '.psds-button:focus': {
    outline: 'none'
  },

  // :focus
  [`.psds-button.psds-theme--${themeNames.light}:focus`]: {
    border: '1px solid transparent'
  },
  '.psds-button:focus:before': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    border: `3px solid ${core.colors.blue}`,
    borderRadius: '4px'
  },

  // --size
  [`.psds-button--size-${vars.sizes.xSmall}`]: {
    fontSize: core.type.fontSizeXSmall,
    lineHeight: core.type.lineHeightStandard,
    padding: `0 ${core.layout.spacingXSmall}`,
    height: '24px'
  },
  [`.psds-button--size-${vars.sizes.small}`]: {
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    padding: `${core.layout.spacingXXSmall} ${core.layout.spacingXSmall}`,
    height: '32px'
  },
  [`.psds-button--size-${vars.sizes.medium}`]: {
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    padding: `${core.layout.spacingXXSmall} ${core.layout.spacingMedium}`,
    height: '40px'
  },
  [`.psds-button--size-${vars.sizes.large}`]: {
    fontSize: core.type.fontSizeMedium,
    lineHeight: core.type.lineHeightExtra,
    padding: `${core.layout.spacingXXSmall} ${core.layout.spacingMedium}`,
    height: '48px'
  },
  // --appearance
  [`.psds-button--appearance-${vars.appearances.secondary}`]: {
    color: core.colors.gray01,
    background: transparentize(0.85, core.colors.gray02)
  },
  [`.psds-button--appearance-${vars.appearances.secondary}:hover`]: {
    background: transparentize(0.85, core.colors.bone)
  },
  [`.psds-button--appearance-${vars.appearances.secondary}.psds-theme--${
    themeNames.light
  }`]: {
    color: core.colors.gray03,
    background: transparentize(0.65, core.colors.gray01)
  },
  [`.psds-button--appearance-${vars.appearances.secondary}.psds-theme--${
    themeNames.light
  }:hover`]: {
    background: transparentize(0.65, core.colors.bone)
  },
  [`.psds-button--appearance-${vars.appearances.stroke}`]: {
    border: `1px solid ${core.colors.orange}`,
    color: core.colors.orange,
    background: 'none'
  },
  [`.psds-button--appearance-${vars.appearances.stroke}:hover`]: {
    border: `1px solid ${core.colors.orangeLight}`,
    color: core.colors.orangeLight,
    background: 'none'
  },
  [`.psds-button--appearance-${vars.appearances.flat}`]: {
    border: 'none',
    background: 'none'
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${
    themeNames.light
  }`]: {
    color: core.colors.gray03
  },
  [`.psds-button--appearance-${
    vars.appearances.flat
  }.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray02
  },
  [`.psds-button--appearance-${vars.appearances.flat}.psds-theme--${
    themeNames.light
  }:hover`]: {
    background: transparentize(0.85, core.colors.gray03)
  },
  [`.psds-button--appearance-${
    vars.appearances.flat
  }.psds-theme--${themeDefaultName}:hover`]: {
    color: core.colors.white,
    background: transparentize(0.85, core.colors.white)
  },
  // --disabled
  [`.psds-button--disabled`]: {
    color: core.colors.gray02,
    background: core.colors.gray03,
    cursor: 'default'
  },
  [`.psds-button--disabled:hover`]: {
    color: core.colors.gray02,
    background: core.colors.gray03
  },
  [`.psds-button--disabled.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03,
    background: core.colors.gray01
  },
  [`.psds-button--disabled.psds-theme--${themeNames.light}:hover`]: {
    color: core.colors.gray03,
    background: core.colors.gray01
  },
  [`.psds-button--disabled.psds-button--appearance-${
    vars.appearances.primary
  }`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${
    vars.appearances.secondary
  }`]: {
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${
    vars.appearances.stroke
  }`]: {
    border: 'none',
    opacity: 0.5
  },
  [`.psds-button--disabled.psds-button--appearance-${vars.appearances.flat}`]: {
    opacity: 0.4,
    background: 'none'
  },
  [`.psds-button--disabled.psds-button--appearance-${
    vars.appearances.stroke
  }:hover`]: {
    border: 'none'
  },
  [`.psds-button--disabled.psds-button--appearance-${
    vars.appearances.flat
  }:hover`]: {
    color: core.colors.gray02,
    background: 'none'
  },
  // --iconAlign / iconOnly
  [`.psds-button--iconAlign-${vars.iconAligns.right}`]: {
    flexDirection: 'row-reverse'
  },
  [`.psds-button--iconAlign-${
    vars.iconAligns.right
  }.psds-button--not-iconOnly`]: {
    paddingRight: core.layout.spacingXSmall
  },
  [`.psds-button--iconAlign-${
    vars.iconAligns.left
  }.psds-button--not-iconOnly`]: {
    paddingLeft: core.layout.spacingXSmall
  },
  [`.psds-button--iconAlign-${
    vars.iconAligns.right
  }.psds-button--not-iconOnly.psds-button--size-${vars.sizes.large}`]: {
    paddingRight: core.layout.spacingSmall
  },
  [`.psds-button--iconAlign-${
    vars.iconAligns.left
  }.psds-button--not-iconOnly.psds-button--size-${vars.sizes.large}`]: {
    paddingLeft: core.layout.spacingSmall
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
  // __icon
  [`.psds-button__icon`]: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100%'
  },
  [`.psds-button__icon--iconAlign-${vars.iconAligns.right}`]: {
    marginLeft: core.layout.spacingXSmall,
    marginRight: 0
  },
  [`.psds-button__icon--iconAlign-${vars.iconAligns.left}`]: {
    marginLeft: 0,
    marginRight: core.layout.spacingXSmall
  },
  [`.psds-button__icon--iconOnly`]: {
    justifyContent: 'center',
    width: '100%',
    margin: 0
  },
  // __loading
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
    borderColor: transparentize(0.8, core.colors.gray04),
    borderTopColor: core.colors.white
  },
  [`.psds-button__loading--appearance-${vars.appearances.secondary}`]: {
    borderColor: transparentize(0.8, core.colors.gray01),
    borderTopColor: core.colors.gray01
  },
  [`.psds-button__loading--appearance-${vars.appearances.stroke}`]: {
    borderColor: transparentize(0.8, core.colors.white),
    borderTopColor: core.colors.orange
  },
  [`.psds-button__loading--appearance-${
    vars.appearances.flat
  }.psds-button__loading--theme-${themeNames.light}`]: {
    borderColor: transparentize(0.8, core.colors.gray04),
    borderTopColor: core.colors.gray04
  },
  [`.psds-button__loading--appearance-${
    vars.appearances.flat
  }.psds-button__loading--theme-${themeDefaultName}`]: {
    borderColor: transparentize(0.8, core.colors.white),
    borderTopColor: core.colors.white
  },
  // __text
  [`.psds-button__text`]: {
    alignItems: 'center',
    display: 'inline-flex',
    pointerEvents: 'none'
  }
}
