import {
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'

import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars'

export const sizeClasses: { [key: string]: string } = {
  [vars.sizes.small]: '.psds-emptystate--size-small',
  [vars.sizes.large]: '.psds-emptystate--size-large'
}

export const themeClasses: { [key: string]: string } = {
  [themeDefaultName]: `.psds-theme--dark`,
  [themeNames.light]: `.psds-theme--light`
}

export default {
  '.psds-emptystate': {
    margin: '0 auto',
    padding: `${layout.spacingXLarge} ${layout.spacingLarge}`,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: `opacity ${motion.speedXFast} ${motion.speedNormal}`
  },
  '.psds-emptystate--hidden': {
    opacity: 0
  },
  ['.psds-emptystate' + themeClasses[themeDefaultName]]: {
    color: colorsTextIcon.highOnDark
  },
  ['.psds-emptystate' + themeClasses[themeNames.light]]: {
    color: colorsTextIcon.highOnLight
  },

  // __actions
  '.psds-emptystate__actions': {
    maxWidth: 500
  },

  // __caption
  '.psds-emptystate__caption': {
    marginBottom: layout.spacingLarge,
    fontSize: type.fontSize200,
    letterSpacing: type.letterSpacingNone,
    lineHeight: type.lineHeightStandard,
    maxWidth: 500
  },
  ['.psds-emptystate__caption' + themeClasses[themeDefaultName]]: {
    color: colorsTextIcon.lowOnDark
  },
  ['.psds-emptystate__caption' + themeClasses[themeNames.light]]: {
    color: colorsTextIcon.lowOnLight
  },

  // __heading,
  '.psds-emptystate__heading': {
    marginBottom: layout.spacingLarge,
    letterSpacing: type.letterSpacingTight,
    fontWeight: type.fontWeightBook,
    maxWidth: 500
  },
  ['.psds-emptystate__heading' + sizeClasses.small]: {
    fontSize: type.fontSize400
  },
  ['.psds-emptystate__heading' + sizeClasses.large]: {
    fontSize: type.fontSize600,
    lineHeight: type.lineHeightExtra
  },

  // __illustration
  '.psds-emptystate__illustration': {
    display: 'inline-block',
    marginBottom: layout.spacingLarge,
    transition: `all ${motion.speedXFast}`
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
