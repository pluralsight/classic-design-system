import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from 'polished'

const newStackingContextForFocusRingVisibility = {
  position: 'relative',
  zIndex: '0'
}

export default {
  // button-row

  '.psds-form-button-row': {
    display: 'flex'
  },
  '.psds-form-button-row__button': {
    marginRight: core.layout.spacingLarge
  },
  '.psds-form-button-row__button:last-child': {
    marginRight: 0
  },

  // divider

  '.psds-form-divider': {
    height: '1px',
    width: '100%',
    backgroundColor: core.colors.gray04
    // margin: `${core.layout.spacingXXSmall} 0`
  },
  [`.psds-form-divider.psds-theme--${themeNames.light}`]: {
    backgroundColor: core.colors.gray01
  },

  // vertical-layout

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
