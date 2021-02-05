import { layout } from '@pluralsight/ps-design-system-core'

const GUTTER_SIZE = 4

const INPUT_MIN_HEIGHT = 24 // NOTE: this matches the size of the small Tag
const INPUT_MIN_WIDTH = 50

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
    background: 'white',
    height: 200,
    overflowY: 'scroll'
  },
  '.psds-multi-select__menu__item': {},
  '.psds-multi-select__menu__item--highlighted': {
    background: 'red'
  },

  '.psds-multi-select__pills': {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    maxHeight: 75,
    overflowY: 'scroll',
    margin: `calc(${GUTTER_SIZE}px * -2)`,
    padding: `${layout.spacingXSmall}`,
    width: '100%'
  },
  '.psds-multi-select__pill': {
    margin: `calc(${GUTTER_SIZE}px / 2)`
  },

  '.psds-multi-select__input-container': {
    margin: `calc(${GUTTER_SIZE}px / 2)`
  },
  '.psds-multi-select__input': {
    minHeight: INPUT_MIN_HEIGHT,
    minWidth: INPUT_MIN_WIDTH
  }
}
