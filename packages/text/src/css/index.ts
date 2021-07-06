import {
  colorsBackgroundUtility,
  colorsBlue,
  colorsBorder,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index'

export default {
  '.psds-text__code': {
    padding: `0 ${layout.spacingXXSmall}`,
    borderRadius: '2px',
    lineHeight: type.lineHeightStandard,
    whiteSpace: 'pre-wrap',
    fontFamily: type.fontFamilyCode,
    fontWeight: type.fontWeight500,
    fontSize: type.fontSize200,
    wordBreak: 'break-word'
  },
  [`.psds-text__code.psds-theme--${themeNames.light}`]: {
    color: colorsBlue[8],
    background: colorsBackgroundUtility[25],
    border: `1px solid ${colorsBorder.lowOnLight}`
  },
  [`.psds-text__code.psds-theme--${themeDefaultName}`]: {
    color: colorsBlue[3],
    background: colorsBackgroundUtility[25],
    border: `1px solid ${colorsBorder.lowOnDark}`
  },

  '.psds-text__heading': {
    margin: `${layout.spacingMedium} 0`,
    fontWeight: type.fontWeightStrong
  },
  [`.psds-text__heading--color-${vars.textColors.primary}.psds-theme--${themeNames.light}`]:
    {
      color: colorsTextIcon.highOnLight
    },
  [`.psds-text__heading--color-${vars.textColors.secondary}.psds-theme--${themeNames.light}`]:
    {
      color: colorsTextIcon.lowOnLight
    },
  [`.psds-text__heading--color-${vars.textColors.primary}.psds-theme--${themeDefaultName}`]:
    {
      color: colorsTextIcon.highOnDark
    },
  [`.psds-text__heading--color-${vars.textColors.secondary}.psds-theme--${themeDefaultName}`]:
    {
      color: colorsTextIcon.lowOnDark
    },
  [`.psds-text__heading--size-${vars.headingSizes.xXXSmall}`]: {
    fontSize: type.fontSize200,
    lineHeight: '16px',
    textTransform: 'uppercase',
    letterSpacing: type.letterSpacingAllCaps
  },
  [`.psds-text__heading--size-${vars.headingSizes.xXSmall}`]: {
    fontSize: type.fontSize300,
    lineHeight: '20px',
    textTransform: 'uppercase',
    letterSpacing: type.letterSpacingAllCaps
  },
  [`.psds-text__heading--size-${vars.headingSizes.xSmall}`]: {
    fontSize: type.fontSize500,
    lineHeight: '28px'
  },
  [`.psds-text__heading--size-${vars.headingSizes.small}`]: {
    fontSize: type.fontSize600,
    lineHeight: '32px'
  },
  [`.psds-text__heading--size-${vars.headingSizes.medium}`]: {
    fontSize: type.fontSize700,
    lineHeight: '36px'
  },
  [`.psds-text__heading--size-${vars.headingSizes.large}`]: {
    fontSize: type.fontSize800,
    lineHeight: '40px'
  },
  [`.psds-text__heading--size-${vars.headingSizes.xLarge}`]: {
    fontSize: type.fontSize900,
    lineHeight: '52px'
  },

  [`.psds-text__label`]: {
    fontWeight: type.fontWeightDefault
  },
  [`.psds-text__label--strong`]: {
    fontWeight: type.fontWeightStrong
  },
  [`.psds-text__label--caps`]: {
    textTransform: 'uppercase',
    letterSpacing: type.letterSpacingAllCaps
  },
  [`.psds-text__label--mono`]: {
    fontFamily: type.fontFamilyCode,
    fontFeatureSettings: '"ss05" on'
  },
  [`.psds-text__label--color-${vars.textColors.primary}.psds-theme--${themeNames.light}`]:
    {
      color: colorsTextIcon.highOnLight
    },
  [`.psds-text__label--color-${vars.textColors.secondary}.psds-theme--${themeNames.light}`]:
    {
      color: colorsTextIcon.lowOnLight
    },
  [`.psds-text__label--color-${vars.textColors.primary}.psds-theme--${themeDefaultName}`]:
    {
      color: colorsTextIcon.highOnDark
    },
  [`.psds-text__label--color-${vars.textColors.secondary}.psds-theme--${themeDefaultName}`]:
    {
      color: colorsTextIcon.lowOnDark
    },
  [`.psds-text__label--size-${vars.labelSizes.xSmall}`]: {
    fontSize: type.fontSize100,
    letterSpacing: type.letterSpacingLooser,
    lineHeight: '16px'
  },
  [`.psds-text__label--size-${vars.labelSizes.small}`]: {
    fontSize: type.fontSize200,
    letterSpacing: type.letterSpacingLoose,
    lineHeight: '20px'
  },
  [`.psds-text__label--size-${vars.labelSizes.medium}`]: {
    fontSize: type.fontSize300,
    letterSpacing: type.letterSpacingLoose,
    lineHeight: '20px'
  },
  [`.psds-text__label--size-${vars.labelSizes.large}`]: {
    fontSize: type.fontSize400,
    letterSpacing: type.letterSpacingNone,
    lineHeight: '24px'
  },

  [`.psds-text__list`]: {
    listStyle: 'none',
    marginLeft: 0,
    lineHeight: type.lineHeightExtra,
    fontWeight: type.fontWeightDefault
  },
  [`.psds-text__list--color-${vars.textColors.primary}.psds-theme--${themeNames.light}`]:
    {
      color: colorsTextIcon.highOnLight
    },
  [`.psds-text__list--color-${vars.textColors.secondary}.psds-theme--${themeNames.light}`]:
    {
      color: colorsTextIcon.lowOnLight
    },
  [`.psds-text__list--color-${vars.textColors.primary}.psds-theme--${themeDefaultName}`]:
    {
      color: colorsTextIcon.highOnDark
    },
  [`.psds-text__list--color-${vars.textColors.secondary}.psds-theme--${themeDefaultName}`]:
    {
      color: colorsTextIcon.lowOnDark
    },
  [`.psds-text__list--size-${vars.listSizes.small}`]: {
    fontSize: type.fontSize200,
    letterSpacing: type.letterSpacingLooser,
    lineHeight: '24px'
  },
  [`.psds-text__list--size-${vars.listSizes.medium}`]: {
    fontSize: type.fontSize300,
    letterSpacing: type.letterSpacingLoose,
    lineHeight: '24px'
  },
  [`.psds-text__list--size-${vars.listSizes.large}`]: {
    fontSize: type.fontSize400,
    letterSpacing: type.letterSpacingNone,
    lineHeight: '28px'
  },
  [`.psds-text__list--type-${vars.listTypes.bulleted}`]: {
    listStyle: 'initial',
    listStyleType: 'disc'
  },
  [`.psds-text__list--type-${vars.listTypes.numbered}`]: {
    listStyle: 'initial',
    listStyleType: 'decimal'
  },

  '.psds-text__p': {
    margin: `${layout.spacingMedium} 0`,
    fontWeight: type.fontWeightDefault
  },
  [`.psds-text__p--color-${vars.textColors.primary}.psds-theme--${themeNames.light}`]:
    {
      color: colorsTextIcon.highOnLight
    },
  [`.psds-text__p--color-${vars.textColors.secondary}.psds-theme--${themeNames.light}`]:
    {
      color: colorsTextIcon.lowOnLight
    },
  [`.psds-text__p--color-${vars.textColors.primary}.psds-theme--${themeDefaultName}`]:
    {
      color: colorsTextIcon.highOnDark
    },
  [`.psds-text__p--color-${vars.textColors.secondary}.psds-theme--${themeDefaultName}`]:
    {
      color: colorsTextIcon.lowOnDark
    },
  [`.psds-text__p--size-${vars.pSizes.small}`]: {
    fontSize: type.fontSize200,
    letterSpacing: type.letterSpacingLooser,
    lineHeight: '24px'
  },
  [`.psds-text__p--size-${vars.pSizes.medium}`]: {
    fontSize: type.fontSize300,
    letterSpacing: type.letterSpacingLoose,
    lineHeight: '24px'
  },
  [`.psds-text__p--size-${vars.pSizes.large}`]: {
    fontSize: type.fontSize400,
    letterSpacing: type.letterSpacingNone,
    lineHeight: '28px'
  }
}
