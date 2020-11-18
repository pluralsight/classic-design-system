import {
  colorsBorder,
  colorsTextIcon,
  type
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import { aligns } from '../vars'

const dark = `.psds-theme--${themeNames.dark}`
const light = `.psds-theme--${themeNames.light}`

export default {
  '.psds-table': {
    label: 'table',
    '--border-color': 'transparent',
    '--text-color': 'initial',

    borderCollapse: 'collapse',
    borderColor: 'var(--border-color)',
    color: 'var(--text-color)',
    fontSize: type.fontSizeSmall,
    fontWeight: type.fontWeightBook,
    lineHeight: type.lineHeightTight,
    verticalAlign: 'top',
    width: '100%',

    '& > tbody': { verticalAlign: 'inherit' },
    '& > thead': { verticalAlign: 'bottom' }
  },
  [`.psds-table${dark}`]: {
    label: 'table--dark',
    '--border-color': colorsBorder.lowOnDark,
    '--text-color': colorsTextIcon.highOnDark
  },
  [`.psds-table${light}`]: {
    label: 'table--light',
    '--text-color': colorsTextIcon.highOnLight,
    '--border-color': colorsBorder.lowOnLight
  },

  '.psds-table__body': { label: 'table__body' },

  '.psds-table__cell': { label: 'table__cell' },
  '.psds-table__cell--emphasis': { fontWeight: type.fontWeightMedium },
  [`.psds-table__cell--align-${aligns.center}`]: { textAlign: 'center' },
  [`.psds-table__cell--align-${aligns.left}`]: { textAlign: 'left' },
  [`.psds-table__cell--align-${aligns.right}`]: { textAlign: 'right' },

  '.psds-table__head': { label: 'table__head' },

  '.psds-table__header': { label: 'table__header' },

  '.psds-table__row': {
    label: 'table__row',
    borderTop: '1px solid var(--border-color)',

    '&:first-of-type': { borderTop: 'none' }
  }
}
