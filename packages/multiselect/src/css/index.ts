import {
  colorsBackgroundLight,
  layout,
  type
} from '@pluralsight/ps-design-system-core'

const INPUT_MIN_HEIGHT = 24 // NOTE: this matches the size of the small Tag
const INPUT_MIN_WIDTH = 50

const PILL_GUTTER_SIZE = 4

export default {
  '.psds-multi-select': { label: 'multi-select' },
  '.psds-multi-select--disabled': { pointerEvents: 'none' },

  '.psds-multi-select__prefix': {
    alignItems: 'center',
    display: 'flex'
  },
  '.psds-multi-select__caret': {
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer'
  },

  '.psds-multi-select__menu': {
    background: colorsBackgroundLight[3],
    borderRadius: '2px',
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    fontSize: type.fontSize200,
    listStyle: 'none',
    marginLeft: 0,
    maxHeight: 400,
    maxWidth: 320,
    minWidth: 160,
    display: 'none',
    overflowY: 'auto',
    padding: `${layout.spacingXXSmall} 0`
  },
  '.psds-multi-select__menu--open': { display: 'inline-block' },

  '.psds-multi-select__menu__item': {
    background: 'none',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: type.fontWeight500,
    lineHeight: type.lineHeightExtra,
    padding: `0 ${layout.spacingMedium}`,
    width: '100%'
  },
  '.psds-multi-select__menu__item--highlighted': {
    background: colorsBackgroundLight[1]
  },

  '.psds-multi-select__pills': {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    maxHeight: 75,
    overflowY: 'scroll',
    margin: `calc(${PILL_GUTTER_SIZE}px * -2)`,
    padding: `${layout.spacingXSmall}`,
    width: '100%'
  },
  '.psds-multi-select__pill': {
    margin: `calc(${PILL_GUTTER_SIZE}px / 2)`
  },

  '.psds-multi-select__input-container': {
    margin: `calc(${PILL_GUTTER_SIZE}px / 2)`
  },
  '.psds-multi-select__input': {
    minHeight: INPUT_MIN_HEIGHT,
    minWidth: INPUT_MIN_WIDTH
  }
}
