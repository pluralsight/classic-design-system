import { layout } from '@pluralsight/ps-design-system-core'

const PILL_GUTTER_SIZE = 4

const INPUT_MIN_HEIGHT = 24 // NOTE: this matches the size of the small Tag
const INPUT_MIN_WIDTH = 50

export default {
  '.psds-tagsinput': {
    label: 'tagsinput',

    minHeight: 40,
    paddingTop: '10px',
    paddingBottom: '10px'
  },
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
    margin: `calc(${PILL_GUTTER_SIZE}px * -2)`,
    maxHeight: 75,
    overflowY: 'auto',
    padding: `${layout.spacingXXSmall} ${layout.spacingXSmall}`,
    width: '100%'
  },
  '.psds-tagsinput__pill': { margin: `calc(${PILL_GUTTER_SIZE}px / 2)` },

  '.psds-tagsinput__input-container': {
    margin: `calc(${PILL_GUTTER_SIZE}px / 2)`
  },
  '.psds-tagsinput__input': {
    minHeight: INPUT_MIN_HEIGHT,
    minWidth: INPUT_MIN_WIDTH,

    '&:disabled': { background: 'transparent' }
  }
}
