import { layout } from '@pluralsight/ps-design-system-core'

const GUTTER_SIZE = 2

const INPUT_MIN_HEIGHT = 24 // NOTE: this matches the size of the small Tag
const INPUT_MIN_WIDTH = 50

export default {
  '.psds-multi-select': { label: 'multi-select' },
  '.psds-multi-select__render-tag': { cursor: 'pointer', padding: 0 },
  '.psds-multi-select__caret': {
    alignItems: 'center',
    display: 'flex',
    margin: layout.spacingSmall
  },

  '.psds-multi-select__pills': {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    maxHeight: 75,
    overflowY: 'scroll',
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
