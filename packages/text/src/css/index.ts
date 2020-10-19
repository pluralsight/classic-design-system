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
  '.psds-text__heading': {
    margin: `${layout.spacingMedium} 0`
  },
  [`.psds-text__heading.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__heading.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-text__heading--size-${vars.headingSizes.smallCaps}`]: {
    textTransform: 'uppercase',
    fontSize: type.fontSizeXSmall,
    letterSpacing: type.letterSpacingXSmall,
    lineHeight: type.lineHeightTight,
    fontWeight: type.fontWeightMedium
  },
  [`.psds-text__heading--size-${vars.headingSizes.smallCaps}.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-text__heading--size-${vars.headingSizes.smallCaps}.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-text__heading--size-${vars.headingSizes.medium}`]: {
    fontSize: type.fontSizeMedium,
    letterSpacing: type.letterSpacingMedium,
    lineHeight: type.lineHeightStandard,
    fontWeight: type.fontWeightMedium
  },
  [`.psds-text__heading--size-${vars.headingSizes.large}`]: {
    fontSize: type.fontSizeLarge,
    letterSpacing: type.letterSpacingLarge,
    lineHeight: type.lineHeightExtra,
    fontWeight: type.fontWeightBook
  },
  [`.psds-text__heading--size-${vars.headingSizes.xLarge}`]: {
    fontSize: type.fontSizeXXLarge,
    letterSpacing: type.letterSpacingXLarge,
    lineHeight: type.lineHeightHuge,
    fontWeight: type.fontWeightLight
  },

  [`.psds-text__list`]: {
    listStyle: 'none',
    marginLeft: 0,
    fontSize: type.fontSizeSmall,
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
  },

  '.psds-text__p': {
    fontSize: type.fontSizeSmall,
    margin: `${layout.spacingSmall} 0`,
    lineHeight: type.lineHeightStandard
  },
  [`.psds-text__p.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-text__p.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  }
}
