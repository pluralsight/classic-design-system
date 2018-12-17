import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'

export default {
  '.psds-infostate': {
    maxWidth: 500,
    margin: '0 auto',
    padding: `${core.layout.spacingXLarge} ${core.layout.spacingLarge}`,
    textAlign: 'center'
  },

  [`.psds-infostate.psds-theme--${themeDefaultName}`]: {
    color: core.colors.white
  },
  [`.psds-infostate.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  }

  // __actions

  // __caption

  // __heading

  // __illustration
}
