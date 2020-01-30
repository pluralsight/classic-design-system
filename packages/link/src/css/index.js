import * as core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import * as vars from '../vars/index.js'

export default {
  [`.psds-link`]: {
    '&:hover': {
      color: core.colors.orange,
      textDecoration: 'underline'
    }
  },
  [`.psds-link.psds-button--2020-colors`]: {
    '&:hover': {
      color: core.colorsPrimaryAction.background,
      textDecoration: 'underline'
    }
  },
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeNames.light}`]: {
    color: core.colors.orange,
    textDecoration: 'none'
  },
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeDefaultName}`]: {
    color: core.colors.orange,
    textDecoration: 'none'
  },
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeNames.light}.psds-button--2020-colors`]: {
    color: core.colorsPrimaryAction.textLightTheme,
    textDecoration: 'none'
  },
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeDefaultName}.psds-button--2020-colors`]: {
    color: core.colorsPrimaryAction.textDarkTheme,
    textDecoration: 'none'
  },
  [`.psds-link--appearance-${vars.appearances.subtle}`]: {
    color: 'currentColor',
    textDecoration: 'underline'
  }
}
