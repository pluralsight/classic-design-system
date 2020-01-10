import * as core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import { transparentize } from '@pluralsight/ps-design-system-util'

import * as vars from '../vars/index.js'

export default {
  '.psds-text__code': {
    padding: `0 ${core.layout.spacingXXSmall}`,
    borderRadius: '2px',
    lineHeight: core.type.lineHeightStandard,
    whiteSpace: 'pre-wrap',
    fontFamily: '"Source Code Pro", monospace',
    fontWeight: core.type.fontWeightMedium,
    fontSize: core.type.fontSizeSmall,
    wordBreak: 'break-word'
  },
  [`.psds-text__code.psds-theme--${themeNames.light}`]: {
    color: '#0072be',
    background: core.colors.bone,
    border: `1px solid ${core.colors.gray01}`
  },
  [`.psds-text__code.psds-theme--${themeDefaultName}`]: {
    color: core.colors.codeBlue,
    background: transparentize(0.5, core.colors.black),
    border: `1px solid ${core.colors.black}`
  },
  [`.psds-text__code.psds-theme--${themeNames.light}.psds-button--psds2020Colors`]: {
    color: '#0072be',
    background: core.colors.bone,
    border: `1px solid ${core.colors.gray01}`
  },
  [`.psds-text__code.psds-theme--${themeDefaultName}.psds-button--psds2020Colors`]: {
    color: core.colors.codeBlue,
    background: transparentize(0.5, core.colors.black),
    border: `1px solid ${core.colors.black}`
  },
  '.psds-text__heading': {
    margin: `${core.layout.spacingMedium} 0`
  },
  [`.psds-text__heading.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray06
  },
  [`.psds-text__heading.psds-theme--${themeDefaultName}`]: {
    color: core.colors.white
  },
  [`.psds-text__heading.psds-theme--${themeNames.light}.psds-button--psds2020Colors`]: {
    color: core.colorsTextIcon.highOnLight
  },
  [`.psds-text__heading.psds-theme--${themeDefaultName}.psds-button--psds2020Colors`]: {
    color: core.colorsTextIcon.highOnDark
  },
  [`.psds-text__heading--size-${vars.headingSizes.smallCaps}`]: {
    textTransform: 'uppercase',
    fontSize: core.type.fontSizeXSmall,
    letterSpacing: core.type.letterSpacingXSmall,
    lineHeight: core.type.lineHeighTight,
    fontWeight: core.type.fontWeightMedium
  },
  [`.psds-text__heading--size-${vars.headingSizes.smallCaps}.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },
  [`.psds-text__heading--size-${vars.headingSizes.smallCaps}.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray02
  },
  [`.psds-text__heading--size-${vars.headingSizes.smallCaps}.psds-theme--${themeNames.light}.psds-button--psds2020Colors`]: {
    color: core.colors.gray03
  },
  [`.psds-text__heading--size-${vars.headingSizes.smallCaps}.psds-theme--${themeDefaultName}.psds-button--psds2020Colors`]: {
    color: core.colors.gray02
  },
  [`.psds-text__heading--size-${vars.headingSizes.medium}`]: {
    fontSize: core.type.fontSizeMedium,
    letterSpacing: core.type.letterSpacingMedium,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium
  },
  [`.psds-text__heading--size-${vars.headingSizes.large}`]: {
    fontSize: core.type.fontSizeLarge,
    letterSpacing: core.type.letterSpacingLarge,
    lineHeight: core.type.lineHeightExtra,
    fontWeight: core.type.fontWeightBook
  },
  [`.psds-text__heading--size-${vars.headingSizes.xLarge}`]: {
    fontSize: core.type.fontSizeXXLarge,
    letterSpacing: core.type.letterSpacingXXLarge,
    lineHeight: core.type.lineHeightHuge,
    fontWeight: core.type.fontWeightLight
  },

  [`.psds-text__list`]: {
    listStyle: 'none',
    marginLeft: 0,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightExtra
  },
  [`.psds-text__list.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },
  [`.psds-text__list.psds-theme--${themeDefaultName}`]: {
    color: core.colors.bone
  },
  [`.psds-text__list.psds-theme--${themeNames.light}.psds-button--psds2020Colors`]: {
    color: core.colors.gray03
  },
  [`.psds-text__list.psds-theme--${themeDefaultName}.psds-button--psds2020Colors`]: {
    color: core.colors.bone
  },
  [`.psds-text__list--type-${vars.listTypes.bulleted}`]: {
    listStyle: 'inherit'
  },
  [`.psds-text__list--type-${vars.listTypes.numbered}`]: {
    listStyle: 'inherit',
    listStyleType: 'decimal'
  },

  '.psds-text__p': {
    fontSize: core.type.fontSizeSmall,
    margin: `${core.layout.spacingSmall} 0`,
    lineHeight: core.type.lineHeightStandard
  },
  [`.psds-text__p.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray06
  },
  [`.psds-text__p.psds-theme--${themeDefaultName}`]: {
    color: core.colors.bone
  },
  [`.psds-text__p.psds-theme--${themeNames.light}.psds-button--psds2020Colors`]: {
    color: core.colors.gray06
  },
  [`.psds-text__p.psds-theme--${themeDefaultName}.psds-button--psds2020Colors`]: {
    color: core.colors.bone
  }
}
