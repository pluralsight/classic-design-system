import {
  colorsTextIcon,
  colorsRed,
  colorsBlue,
  colorsGreen,
  colorsYellow
} from '@pluralsight/ps-design-system-core'

import * as vars from '../vars/index.js'

export default {
  [`.psds-icon`]: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& > svg': {
      fill: 'currentColor',
      flex: 1
    }
  },
  [`.psds-icon--size-${vars.sizes.xSmall}`]: {
    height: vars.widths.xSmall,
    width: vars.widths.xSmall
  },
  [`.psds-icon--size-${vars.sizes.small}`]: {
    height: vars.widths.small,
    width: vars.widths.small
  },
  [`.psds-icon--size-${vars.sizes.medium}`]: {
    height: vars.widths.medium,
    width: vars.widths.medium
  },
  [`.psds-icon--size-${vars.sizes.large}`]: {
    height: vars.widths.large,
    width: vars.widths.large
  },
  '.psds-icon--color-textIconHighOnDark': {
    [`& > svg`]: {
      fill: colorsTextIcon.highOnDark
    }
  },
  '.psds-icon--color-textIconLowOnDark': {
    [`& > svg`]: {
      fill: colorsTextIcon.lowOnDark
    }
  },
  '.psds-icon--color-textIconHighOnLight': {
    [`& > svg`]: {
      fill: colorsTextIcon.highOnLight
    }
  },
  '.psds-icon--color-textIconLowOnLight': {
    [`& > svg`]: {
      fill: colorsTextIcon.lowOnLight
    }
  },
  '.psds-icon--color-red': {
    [`& > svg`]: {
      fill: colorsRed.base
    }
  },
  '.psds-icon--color-blue': {
    [`& > svg`]: {
      fill: colorsBlue.base
    }
  },
  '.psds-icon--color-green': {
    [`& > svg`]: {
      fill: colorsGreen.base
    }
  },
  '.psds-icon--color-yellow': {
    [`& > svg`]: {
      fill: colorsYellow.base
    }
  }
}
