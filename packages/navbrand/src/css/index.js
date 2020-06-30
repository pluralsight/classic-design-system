import {
  colorsBackgroundUtility,
  layout
} from '@pluralsight/ps-design-system-core'

import { transparentize } from '@pluralsight/ps-design-system-util'

export default {
  '.psds-navbrand': {
    display: 'flex',
    alignItems: 'center',
    padding: layout.spacingXSmall
  },
  // TODO: handle hover and focus
  '.psds-navbrand--clickable': {
    cursor: 'pointer',
    background: 'none',
    border: 'none',

    '&:hover, &:focus': {
      background: transparentize(0.85, colorsBackgroundUtility.base)
    },
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      background: transparentize(0.75, colorsBackgroundUtility.base)
    }
  },
  '.psds-navbrand__logo': {
    height: '24px',
    width: '24px',

    '& svg': {
      height: '100%',
      width: '100%'
    }
  },
  '.psds-navbrand__wordmark': {
    display: 'none',
    lineHeight: 0
  },
  '@media (min-width: 1200px)': {
    '.psds-navbrand__logo--wordmark': {
      marginRight: layout.spacingXSmall
    },
    '.psds-navbrand__wordmark': {
      display: 'block'
    }
  }
}
