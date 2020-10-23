import { colorsBorder, layout } from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index.js'

export default {
  '.psds-form-button-row': {
    display: 'flex'
  },
  [`.psds-form-button-row--align-${vars.aligns.right}`]: {
    justifyContent: 'flex-end'
  },
  '.psds-form-button-row__button': {
    marginRight: layout.spacingLarge,

    '&:last-child': { marginRight: 0 }
  },

  '.psds-form-divider': {
    height: '1px',
    width: '100%',
    backgroundColor: colorsBorder.lowOnDark
  },
  [`.psds-form-divider.psds-theme--${themeNames.light}`]: {
    backgroundColor: colorsBorder.lowOnLight
  },

  '.psds-form-vertical-layout': {
    width: '100%'
  },
  '.psds-form-vertical-layout__child': {
    marginBottom: layout.spacingLarge,

    '&:last-child': { marginBottom: 0 }
  }
}
