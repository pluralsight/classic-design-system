import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'

import * as vars from '../vars'

export const sizeClasses = {
  [vars.sizes.small]: '.psds-emptystate--size-small',
  [vars.sizes.large]: '.psds-emptystate--size-large'
}

export const themeClasses = {
  [themeDefaultName]: `.psds-theme--dark`,
  [themeNames.light]: `.psds-theme--light`
}

export default {
  '.psds-emptystate': {
    margin: '0 auto',
    padding: `${core.layout.spacingXLarge} ${core.layout.spacingLarge}`,
    textAlign: 'center'
  },
  ['.psds-emptystate' + sizeClasses.small]: {
    maxWidth: 640
  },
  ['.psds-emptystate' + sizeClasses.large]: {
    maxWidth: 1000
  },
  ['.psds-emptystate' + themeClasses[themeDefaultName]]: {
    color: core.colors.white
  },
  ['.psds-emptystate' + themeClasses[themeNames.light]]: {
    color: core.colors.gray06
  },

  // __actions
  '.psds-emptystate__actions': {},

  // __caption
  '.psds-emptystate__caption': {
    margin: `${core.layout.spacingLarge} 0`,
    fontSize: core.type.psTypeFontSizeSmall,
    letterSpacing: core.type.psTypeLetterSpacingSmall,
    lineHeight: core.type.psTypeLineHeightStandard
  },
  ['.psds-emptystate__caption' + themeClasses[themeDefaultName]]: {
    color: core.colors.gray01
  },
  ['.psds-emptystate__caption' + themeClasses[themeNames.light]]: {
    color: core.colors.gray04
  },

  // __heading,
  '.psds-emptystate__heading': {
    margin: `${core.layout.spacingLarge} 0`,
    letterSpacing: core.type.letterSpacingLarge,
    fontWeight: core.type.fontWeightBook
  },
  ['.psds-emptystate__heading' + sizeClasses.small]: {
    fontSize: core.type.fontSizeMedium
  },
  ['.psds-emptystate__heading' + sizeClasses.large]: {
    fontSize: core.type.fontSizeLarge,
    lineHeight: core.type.lineHeightExtra
  },

  // __illustration
  '.psds-emptystate__illustration': {
    display: 'inline-block'
  },
  ['.psds-emptystate__illustration' + sizeClasses.small]: {
    width: 64,
    height: 64
  },
  ['.psds-emptystate__illustration' + sizeClasses.large]: {
    width: 128,
    height: 128
  }
}
