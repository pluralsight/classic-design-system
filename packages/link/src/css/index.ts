import { colorsPrimaryAction } from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index'

export default {
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeNames.light}`]:
    {
      color: colorsPrimaryAction.textLightTheme,
      textDecoration: 'none'
    },
  [`.psds-link--appearance-${vars.appearances.default}.psds-theme--${themeDefaultName}`]:
    {
      color: colorsPrimaryAction.textDarkTheme,
      textDecoration: 'none'
    },
  [`.psds-link--appearance-${vars.appearances.subtle}`]: {
    color: 'currentColor',
    textDecoration: 'underline'
  },
  [`.psds-link`]: {
    '&:hover': {
      color: colorsPrimaryAction.background,
      textDecoration: 'underline'
    }
  }
}
