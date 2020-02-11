import { colors, colorsPrimaryAction } from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import * as vars from '../vars/index.js'

export default {
  [`.psds-link`]: {
    '&:hover': {
      color: colors.orange,
      textDecoration: 'underline'
    }
  },
  [`.psds-link.psds-link--2020-colors`]: {
    '&:hover': {
      color: colorsPrimaryAction.background,
      textDecoration: 'underline'
    }
  },
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeNames.light}`]: {
    color: colors.orange,
    textDecoration: 'none'
  },
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeDefaultName}`]: {
    color: colors.orange,
    textDecoration: 'none'
  },
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeNames.light}.psds-link--2020-colors`]: {
    color: colorsPrimaryAction.textLightTheme,
    textDecoration: 'none'
  },
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeDefaultName}.psds-link--2020-colors`]: {
    color: colorsPrimaryAction.textDarkTheme,
    textDecoration: 'none'
  },
  [`.psds-link--appearance-${vars.appearances.subtle}`]: {
    color: 'currentColor',
    textDecoration: 'underline'
  }
}
