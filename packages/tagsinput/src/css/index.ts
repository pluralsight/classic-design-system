import { layout } from '@pluralsight/ps-design-system-core'

const GUTTER_SIZE = layout.spacingXSmall
const PILL_GUTTER_SIZE = layout.spacingXXSmall

const INPUT_MIN_HEIGHT = 24 // NOTE: this matches the size of the small Tag
const INPUT_MIN_WIDTH = 50

export default {
  '.psds-tagsinput': {
    label: 'tagsinput',

    minHeight: 40
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

  '.psds-tagsinput__pills-container': {
    flexGrow: 1
  },
  '.psds-tagsinput__pills': {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    margin: `0 calc(${PILL_GUTTER_SIZE} * -2)`,
    maxHeight: 75,
    overflowY: 'auto',
    padding: `
      calc(${GUTTER_SIZE} - 1px)
      ${GUTTER_SIZE}
      calc(${GUTTER_SIZE} / 2 - 1px)
      ${GUTTER_SIZE}
    `
  },
  '.psds-tagsinput__pill': {
    margin: `0 ${PILL_GUTTER_SIZE} ${PILL_GUTTER_SIZE} 0`
  },
  '.psds-tagsinput__input': {
    minWidth: INPUT_MIN_WIDTH,
    height: `${INPUT_MIN_HEIGHT}px !important`,
    marginBottom: `calc(${GUTTER_SIZE} / 2)`,

    '&:disabled': { background: 'transparent' }
  }
}
