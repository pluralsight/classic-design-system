import { layout } from '@pluralsight/ps-design-system-core'

const GUTTER_SIZE = 4

const INPUT_MIN_HEIGHT = 24 // NOTE: this matches the size of the small Tag
const INPUT_MIN_WIDTH = 50

export default {
  '.psds-tagsinput': { label: 'tagsinput' },
  '.psds-tagsinput__render-tag': { padding: 0 },

  '.psds-tagsinput__pills': {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    maxHeight: 75,
    overflowY: 'scroll',
    padding: `${layout.spacingXSmall}`,
    width: '100%'
  },
  '.psds-tagsinput__pill': { margin: `calc(${GUTTER_SIZE}px / 2)` },

  '.psds-tagsinput__input-container': { margin: `calc(${GUTTER_SIZE}px / 2)` },
  '.psds-tagsinput__input': {
    minHeight: INPUT_MIN_HEIGHT,
    minWidth: INPUT_MIN_WIDTH
  }
}
