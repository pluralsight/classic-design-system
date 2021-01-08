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
    fontFamily: '"DM Mono", monospace',
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
    fontWeight: type.fontWeightDemiBold
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
    fontSize: type.headingXXXSmallFontSize,
    lineHeight: type.headingXXXSmallLineHeight,
    letterSpacing: type.headingXXXSmallLetterSpacing,
    textTransform: type.headingXXXSmallTextTransform
  },
  [`.psds-text__heading--size-${vars.headingSizes.xXSmall}`]: {
    fontSize: type.headingXXSmallFontSize,
    lineHeight: type.headingXXSmallLineHeight,
    letterSpacing: type.headingXXSmallLetterSpacing,
    textTransform: type.headingXXSmallTextTransform
  },
  [`.psds-text__heading--size-${vars.headingSizes.xSmall}`]: {
    fontSize: type.headingXSmallFontSize,
    lineHeight: type.headingXSmallLineHeight,
    letterSpacing: type.headingXSmallLetterSpacing
  },
  [`.psds-text__heading--size-${vars.headingSizes.small}`]: {
    fontSize: type.headingSmallFontSize,
    lineHeight: type.headingSmallLineHeight,
    letterSpacing: type.headingSmallLetterSpacing
  },
  [`.psds-text__heading--size-${vars.headingSizes.medium}`]: {
    fontSize: type.headingMediumFontSize,
    lineHeight: type.headingMediumLineHeight,
    letterSpacing: type.headingMediumLetterSpacing
  },
  [`.psds-text__heading--size-${vars.headingSizes.large}`]: {
    fontSize: type.headingLargeFontSize,
    lineHeight: type.headingLargeLineHeight,
    letterSpacing: type.headingLargeLetterSpacing
  },
  [`.psds-text__heading--size-${vars.headingSizes.xLarge}`]: {
    fontSize: type.headingXLargeFontSize,
    lineHeight: type.headingXLargeLineHeight,
    letterSpacing: type.headingXLargeLetterSpacing
  },

  [`.psds-text__label`]: {
    fontWeight: type.fontWeightRegular
  },
  [`.psds-text__label--strong`]: {
    fontWeight: type.fontWeightDemiBold
  },
  [`.psds-text__label--caps`]: {
    textTransform: 'uppercase',
    letterSpacing: '.1em'
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
    fontSize: type.labelXSmallFontSize,
    lineHeight: type.labelXSmallLineHeight,
    letterSpacing: type.labelXSmallLetterSpacing
  },
  [`.psds-text__label--size-${vars.labelSizes.small}`]: {
    fontSize: type.labelSmallFontSize,
    lineHeight: type.labelSmallLineHeight,
    letterSpacing: type.labelSmallLetterSpacing
  },
  [`.psds-text__label--size-${vars.labelSizes.medium}`]: {
    fontSize: type.labelMediumFontSize,
    lineHeight: type.labelMediumLineHeight,
    letterSpacing: type.labelMediumLetterSpacing
  },
  [`.psds-text__label--size-${vars.labelSizes.large}`]: {
    fontSize: type.labelLargeFontSize,
    lineHeight: type.labelLargeLineHeight,
    letterSpacing: type.labelLargeLetterSpacing
  },

  [`.psds-text__list`]: {
    listStyle: 'none',
    marginLeft: 0,
    lineHeight: type.lineHeightExtra,
    fontWeight: '400'
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
    fontSize: '14px',
    letterSpacing: '0.015em',
    lineHeight: '24px'
  },
  [`.psds-text__list--size-${vars.listSizes.medium}`]: {
    fontSize: '16px',
    letterSpacing: '0.01em',
    lineHeight: '24px'
  },
  [`.psds-text__list--size-${vars.listSizes.large}`]: {
    fontSize: '18px',
    letterSpacing: '0.005em',
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
    fontWeight: '400'
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
    fontSize: type.paragraphSmallFontSize,
    lineHeight: type.paragraphSmallLineHeight,
    letterSpacing: type.paragraphSmallLetterSpacing
  },
  [`.psds-text__p--size-${vars.pSizes.medium}`]: {
    fontSize: type.paragraphMediumFontSize,
    lineHeight: type.paragraphMediumLineHeight,
    letterSpacing: type.paragraphMediumLetterSpacing
  },
  [`.psds-text__p--size-${vars.pSizes.large}`]: {
    fontSize: type.paragraphLargeFontSize,
    lineHeight: type.paragraphLargeLineHeight,
    letterSpacing: type.paragraphLargeLetterSpacing
  }
}
