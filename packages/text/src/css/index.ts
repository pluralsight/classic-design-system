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

import * as vars from '../vars'

export default {
  '.psds-text__code': {
    padding: `0 ${layout.spacingXXSmall}`,
    borderRadius: '2px',
    lineHeight: type.lineHeightStandard,
    whiteSpace: 'pre-wrap',
    fontFamily: '"DM Mono", "Source Code Pro", monospace',
    fontWeight: type.fontWeightMedium,
    fontSize: type.fontSizeSmall,
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
    fontWeight: type.fontSize600
  },
  [`.psds-text__heading--color-${vars.textColors.primary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__heading--color-${vars.textColors.secondary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-text__heading--color-${vars.textColors.primary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__heading--color-${vars.textColors.secondary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-text__heading--size-${vars.headingSizes.xXXSmall}`]: {
    fontSize: type.fontSize300,
    lineHeight: '16px',
    textTransform: 'uppercase',
    letterSpacing: type.letterSpacingAllCaps
  },
  [`.psds-text__heading--size-${vars.headingSizes.xXSmall}`]: {
    fontSize: type.fontSize200,
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
    fontWeight: type.fontWeight400
  },
  [`.psds-text__label--strong`]: {
    fontWeight: type.fontWeight500
  },
  [`.psds-text__label--caps`]: {
    textTransform: 'uppercase',
    letterSpacing: type.letterSpacingAllCaps
  },
  [`.psds-text__label--color-${vars.textColors.primary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__label--color-${vars.textColors.secondary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-text__label--color-${vars.textColors.primary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__label--color-${vars.textColors.secondary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-text__label--size-${vars.labelSizes.xSmall}`]: {
    fontSize: type.fontSize100,
    letterSpacing: type.letterSpacingWidest,
    lineHeight: '16px'
  },
  [`.psds-text__label--size-${vars.labelSizes.small}`]: {
    fontSize: type.fontSize200,
    letterSpacing: type.letterSpacingWidest,
    lineHeight: '24px'
  },
  [`.psds-text__label--size-${vars.labelSizes.medium}`]: {
    fontSize: type.fontSize300,
    letterSpacing: type.letterSpacingWider,
    lineHeight: '28px'
  },
  [`.psds-text__label--size-${vars.labelSizes.large}`]: {
    fontSize: type.fontSize400,
    letterSpacing: type.letterSpacingWide,
    lineHeight: '32px'
  },

  [`.psds-text__list`]: {
    listStyle: 'none',
    marginLeft: 0,
    lineHeight: type.lineHeightExtra,
    fontWeight: type.fontWeight400
  },
  [`.psds-text__list--color-${vars.textColors.primary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__list--color-${vars.textColors.secondary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-text__list--color-${vars.textColors.primary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__list--color-${vars.textColors.secondary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-text__list--size-${vars.listSizes.small}`]: {
    fontSize: type.fontSize200,
    letterSpacing: type.letterSpacingWidest,
    lineHeight: '24px'
  },
  [`.psds-text__list--size-${vars.listSizes.medium}`]: {
    fontSize: type.fontSize300,
    letterSpacing: type.letterSpacingWider,
    lineHeight: '24px'
  },
  [`.psds-text__list--size-${vars.listSizes.large}`]: {
    fontSize: type.fontSize400,
    letterSpacing: type.letterSpacingWide,
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
    fontWeight: type.fontWeight400
  },
  [`.psds-text__p--color-${vars.textColors.primary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__p--color-${vars.textColors.secondary}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-text__p--color-${vars.textColors.primary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__p--color-${vars.textColors.secondary}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-text__p--size-${vars.pSizes.small}`]: {
    fontSize: type.fontSize200,
    letterSpacing: type.letterSpacingWidest,
    lineHeight: '24px'
  },
  [`.psds-text__p--size-${vars.pSizes.medium}`]: {
    fontSize: type.fontSize300,
    letterSpacing: type.letterSpacingWider,
    lineHeight: '24px'
  },
  [`.psds-text__p--size-${vars.pSizes.large}`]: {
    fontSize: type.fontSize400,
    letterSpacing: type.letterSpacingWide,
    lineHeight: '28px'
  }
}
