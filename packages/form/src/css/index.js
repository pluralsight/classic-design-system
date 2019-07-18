import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import * as vars from '../vars/index.js'

const newStackingContextForFocusRingVisibility = {
  position: 'relative',
  zIndex: '0'
}

export default {
  '.psds-form-button-row': {
    display: 'flex'
  },
  [`.psds-form-button-row--align-${vars.aligns.right}`]: {
    justifyContent: 'flex-end'
  },
  '.psds-form-button-row__button': {
    marginRight: core.layout.spacingLarge
  },
  '.psds-form-button-row__button:last-child': {
    marginRight: 0
  },

  '.psds-form-divider': {
    height: '1px',
    width: '100%',
    backgroundColor: core.colors.gray04
  },
  [`.psds-form-divider.psds-theme--${themeNames.light}`]: {
    backgroundColor: core.colors.gray01
  },

  '.psds-form-vertical-layout': {
    ...newStackingContextForFocusRingVisibility,
    width: '100%'
  },
  '.psds-form-vertical-layout__child': {
    marginBottom: core.layout.spacingLarge
  },
  '.psds-form-vertical-layout__child:last-child': {
    marginBottom: 0
  }
}
