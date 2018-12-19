import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'

import * as vars from '../vars'

export const sizeClasses = {
  [vars.sizes.small]: '.psds-infostate--size-small',
  [vars.sizes.large]: '.psds-infostate--size-large'
}

export const themeClasses = {
  [themeDefaultName]: `.psds-theme--dark`,
  [themeNames.light]: `.psds-theme--light`
}

export default {
  '.psds-infostate': {
    margin: '0 auto',
    padding: `${core.layout.spacingXLarge} ${core.layout.spacingLarge}`,
    textAlign: 'center'
  },
  ['.psds-infostate' + sizeClasses.small]: {
    maxWidth: 640
  },
  ['.psds-infostate' + sizeClasses.large]: {
    maxWidth: 1000
  },
  ['.psds-infostate' + themeClasses[themeDefaultName]]: {
    color: core.colors.white
  },
  ['.psds-infostate' + themeClasses[themeNames.light]]: {
    color: core.colors.gray06
  },

  // __actions
  '.psds-infostate__actions': {},

  // __caption
  '.psds-infostate__caption': {
    margin: `${core.layout.spacingLarge} 0`,
    fontSize: core.type.psTypeFontSizeSmall,
    letterSpacing: core.type.psTypeLetterSpacingSmall,
    lineHeight: core.type.psTypeLineHeightStandard
  },
  ['.psds-infostate__caption' + themeClasses[themeDefaultName]]: {
    color: core.colors.gray01
  },
  ['.psds-infostate__caption' + themeClasses[themeNames.light]]: {
    color: core.colors.gray04
  },

  // __heading,
  '.psds-infostate__heading': {
    margin: `${core.layout.spacingLarge} 0`,
    letterSpacing: core.type.letterSpacingLarge,
    fontWeight: core.type.fontWeightBook
  },
  ['.psds-infostate__heading' + sizeClasses.small]: {
    fontSize: core.type.fontSizeMedium
  },
  ['.psds-infostate__heading' + sizeClasses.large]: {
    fontSize: core.type.fontSizeLarge,
    lineHeight: core.type.lineHeightExtra
  },

  // __illustration
  '.psds-infostate__illustration': {},
  ['.psds-infostate__illustration' + sizeClasses.small]: {
    width: 64,
    height: 64
  },
  ['.psds-infostate__illustration' + sizeClasses.large]: {
    width: 128,
    height: 128
  }
}
