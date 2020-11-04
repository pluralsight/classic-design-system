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
    fontFamily: '"Source Code Pro", monospace',
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


  [`.psds-text__monospace.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__monospace.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__monospace--size-${vars.monospaceSizes.small}`]: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400'
  },
  [`.psds-text__monospace--size-${vars.monospaceSizes.normal}`]: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400'
  },
  [`.psds-text__monospace--size-${vars.monospaceSizes.large}`]: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400'
  },


  '.psds-text__display': {
    margin: `${layout.spacingMedium} 0`
  },
  [`.psds-text__display.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__display.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__display--size-${vars.displaySizes.small}`]: {
    fontSize: '56px',
    lineHeight: '64px',
    fontWeight: '700'
  },
  [`.psds-text__display--size-${vars.displaySizes.medium}`]: {
    fontSize: '64px',
    lineHeight: '72px',
    fontWeight: '700'
  },
  [`.psds-text__display--size-${vars.displaySizes.large}`]: {
    fontSize: '80px',
    lineHeight: '96px',
    fontWeight: '700'
  },
  
  '.psds-text__heading': {
    margin: `${layout.spacingMedium} 0`
  },
  [`.psds-text__heading.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__heading.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__heading--size-${vars.headingSizes.xsmall}`]: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '700'
  },
  [`.psds-text__heading--size-${vars.headingSizes.small}`]: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '700'
  },
  [`.psds-text__heading--size-${vars.headingSizes.medium}`]: {
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: '700'
  },
  [`.psds-text__heading--size-${vars.headingSizes.large}`]: {
    fontSize: '34px',
    lineHeight: '40px',
    fontWeight: '700'
  },
  [`.psds-text__heading--size-${vars.headingSizes.xlarge}`]: {
    fontSize: '40px',
    lineHeight: '52px',
    fontWeight: '700'
  },


  [`.psds-text__smallcaps--size-${vars.smallCapsSizes.medium}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-text__smallcaps--size-${vars.smallCapsSizes.large}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-text__smallcaps--size-${vars.smallCapsSizes.small}`]: {
    textTransform: 'uppercase',
    fontSize: '12px',
    letterSpacing: '0.08em',
    lineHeight: '16px',
    fontWeight: "600"
  },
  [`.psds-text__smallcaps--size-${vars.smallCapsSizes.medium}`]: {
    textTransform: 'uppercase',
    fontSize: '14px',
    letterSpacing: '0.08em',
    lineHeight: '16px',
    fontWeight: "600"
  },
  [`.psds-text__smallcaps--size-${vars.smallCapsSizes.large}`]: {
    textTransform: 'uppercase',
    fontSize: '16px',
    letterSpacing: '0.07em',
    lineHeight: '20px',
    fontWeight: "600"
  },


  [`.psds-text__p.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__p.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__p--size-${vars.pSizes.small}`]: {
    fontSize: '14px',
    letterSpacing: '0.015em',
    lineHeight: '24px',
    fontWeight: '400'
  },
  [`.psds-text__p--size-${vars.pSizes.normal}`]: {
    fontSize: '16px',
    letterSpacing: '0.01em',
    lineHeight: '28px',
    fontWeight: '400'
  },
  [`.psds-text__p--size-${vars.pSizes.large}`]: {
    fontSize: '18px',
    letterSpacing: '0.005em',
    lineHeight: '32px',
    fontWeight: '400'
  },


  [`.psds-text__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__label.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__label--size-${vars.labelSizes.xsmall}`]: {
    fontSize: '12px',
    letterSpacing: '0.02em',
    lineHeight: '16px',
    fontWeight: '400'
  },
  [`.psds-text__label--size-${vars.labelSizes.small}`]: {
    fontSize: '14px',
    letterSpacing: '0.015em',
    lineHeight: '24px',
    fontWeight: '400'
  },
  [`.psds-text__label--size-${vars.labelSizes.normal}`]: {
    fontSize: '16px',
    letterSpacing: '0.01em',
    lineHeight: '28px',
    fontWeight: '400'
  },
  [`.psds-text__label--size-${vars.labelSizes.large}`]: {
    fontSize: '18px',
    letterSpacing: '0.005em',
    lineHeight: '32px',
    fontWeight: '400'
  },


  [`.psds-text__list`]: {
    listStyle: 'none',
    marginLeft: 0,
    fontSize: '16px',
    lineHeight: type.lineHeightExtra
  },
  [`.psds-text__list.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__list.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__list--type-${vars.listTypes.bulleted}`]: {
    listStyle: 'initial',
    listStyleType: 'disc'
  },
  [`.psds-text__list--type-${vars.listTypes.numbered}`]: {
    listStyle: 'initial',
    listStyleType: 'decimal'
  }
}


