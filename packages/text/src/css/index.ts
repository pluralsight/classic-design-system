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
    fontWeight: '600'
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
    fontSize: '12px',
    lineHeight: '16px',
    textTransform: 'uppercase',
    letterSpacing: '.08em'
  },
  [`.psds-text__heading--size-${vars.headingSizes.xXSmall}`]: {
    fontSize: '14px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    letterSpacing: '.08em'
  },
  [`.psds-text__heading--size-${vars.headingSizes.xSmall}`]: {
    fontSize: '20px',
    lineHeight: '28px'
  },
  [`.psds-text__heading--size-${vars.headingSizes.small}`]: {
    fontSize: '24px',
    lineHeight: '32px'
  },
  [`.psds-text__heading--size-${vars.headingSizes.medium}`]: {
    fontSize: '28px',
    lineHeight: '36px'
  },
  [`.psds-text__heading--size-${vars.headingSizes.large}`]: {
    fontSize: '34px',
    lineHeight: '40px'
  },
  [`.psds-text__heading--size-${vars.headingSizes.xLarge}`]: {
    fontSize: '40px',
    lineHeight: '52px'
  },

  [`.psds-text__label`]: {
    fontWeight: '400'
  },
  [`.psds-text__label--strong`]: {
    fontWeight: '500'
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
    fontSize: '12px',
    letterSpacing: '0.02em',
    lineHeight: '16px'
  },
  [`.psds-text__label--size-${vars.labelSizes.small}`]: {
    fontSize: '14px',
    letterSpacing: '0.015em',
    lineHeight: '24px'
  },
  [`.psds-text__label--size-${vars.labelSizes.medium}`]: {
    fontSize: '16px',
    letterSpacing: '0.01em',
    lineHeight: '28px'
  },
  [`.psds-text__label--size-${vars.labelSizes.large}`]: {
    fontSize: '18px',
    letterSpacing: '0.005em',
    lineHeight: '32px'
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
    fontSize: '14px',
    letterSpacing: '0.015em',
    lineHeight: '24px'
  },
  [`.psds-text__p--size-${vars.pSizes.medium}`]: {
    fontSize: '16px',
    letterSpacing: '0.01em',
    lineHeight: '24px'
  },
  [`.psds-text__p--size-${vars.pSizes.large}`]: {
    fontSize: '18px',
    letterSpacing: '0.005em',
    lineHeight: '28px'
  }
}
