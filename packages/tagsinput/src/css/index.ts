import { layout } from '@pluralsight/ps-design-system-core'

const GUTTER_SIZE = 4

const INPUT_MIN_HEIGHT = 24 // NOTE: this matches the size of the small Tag
const INPUT_MIN_WIDTH = 50

export default {
  '.psds-tagsinput': { label: 'tagsinput' },
  '.psds-tagsinput--disabled': { pointerEvents: 'none' },

  '.psds-tagsinput__prefix': {
    alignItems: 'center',
    display: 'flex'
  },
  '.psds-tagsinput__suffix': {
    alignItems: 'center',
    display: 'flex'
  },

  '.psds-tagsinput__pills': {
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
  '.psds-tagsinput__pill': { margin: `calc(${GUTTER_SIZE}px / 2)` },

  '.psds-tagsinput__input-container': { margin: `calc(${GUTTER_SIZE}px / 2)` },
  '.psds-tagsinput__input': {
    minHeight: INPUT_MIN_HEIGHT,
    minWidth: INPUT_MIN_WIDTH,
    '&:disabled': {
      background: 'transparent'
    }
  }
}
