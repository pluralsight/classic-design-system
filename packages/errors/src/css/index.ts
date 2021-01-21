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
  [vars.sizes.small]: '.psds-error-page--size-small',
  [vars.sizes.large]: '.psds-error-page--size-large'
}

export const themeClasses: { [key: string]: string } = {
  [themeDefaultName]: `.psds-theme--dark`,
  [themeNames.light]: `.psds-theme--light`
}

export default {
  '.psds-error-page': {
    margin: '0 auto',
    padding: `${layout.spacingXLarge} ${layout.spacingLarge}`,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: `opacity ${motion.speedXFast} ${motion.speedNormal}`
  },
  '.psds-error-page--hidden': {
    opacity: 0
  },
  ['.psds-error-page' + themeClasses[themeDefaultName]]: {
    color: colorsTextIcon.highOnDark
  },
  ['.psds-error-page' + themeClasses[themeNames.light]]: {
    color: colorsTextIcon.highOnLight
  },

  // __actions
  '.psds-error-page__actions': {
    maxWidth: 500
  },

  // __caption
  '.psds-error-page__caption': {
    marginBottom: layout.spacingLarge,
    fontSize: type.fontSize200,
    letterSpacing: type.letterSpacingSmall,
    lineHeight: type.lineHeightStandard,
    maxWidth: 500
  },
  ['.psds-error-page__caption' + themeClasses[themeDefaultName]]: {
    color: colorsTextIcon.highOnDark
  },
  ['.psds-error-page__caption' + themeClasses[themeNames.light]]: {
    color: colorsTextIcon.highOnLight
  },

  // __error-code
  '.psds-error-page__error-code': {
    textTransform: 'uppercase',
    marginBottom: layout.spacingLarge,
    fontSize: type.fontSize100,
    letterSpacing: type.letterSpacingSmall,
    lineHeight: '16px',
    maxWidth: 500
  },
  ['.psds-error-page__error-code' + themeClasses[themeDefaultName]]: {
    color: colorsTextIcon.lowOnDark
  },
  ['.psds-error-page__error-code' + themeClasses[themeNames.light]]: {
    color: colorsTextIcon.lowOnLight
  },

  // __heading,
  '.psds-error-page__heading': {
    marginBottom: layout.spacingLarge,
    letterSpacing: type.letterSpacingLarge,
    fontWeight: type.fontWeightBook,
    maxWidth: 500
  },
  ['.psds-error-page__heading' + sizeClasses.small]: {
    fontSize: type.fontSize400
  },
  ['.psds-error-page__heading' + sizeClasses.large]: {
    fontSize: type.fontSize600,
    lineHeight: type.lineHeightExtra
  },

  // __illustration
  '.psds-error-page__illustration': {
    display: 'inline-block',
    marginBottom: layout.spacingLarge,
    transition: `all ${motion.speedXFast}`
  },
  ['.psds-error-page__illustration' + sizeClasses.small]: {
    width: 64,
    height: 64
  },
  ['.psds-error-page__illustration' + sizeClasses.large]: {
    width: 128,
    height: 128
  }
}
