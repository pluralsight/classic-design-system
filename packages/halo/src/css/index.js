import core from '@pluralsight/ps-design-system-core'

export const BASE_CLASS_NAME = '.psds-halo'

// TODO: make sure this is building/exported correctly
export default {
  [BASE_CLASS_NAME]: {
    position: 'relative',

    '&:after': {
      content: ' ',
      position: 'absolute',
      top: -4,
      bottom: -4,
      left: -4,
      right: -4,
      borderRadius: 4,
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: 'transparent',
      pointerEvents: 'none'
    },

    '& > :focus': {
      outline: 'none'
    },

    // TODO: this doesn't work in ie/edge - polyfill?
    '&:focus-within:after': {
      borderColor: core.colors.blue
    }
  },
  [`${BASE_CLASS_NAME}--dark`]: {},
  [`${BASE_CLASS_NAME}--light`]: {
    '&:after': {
      top: -2,
      bottom: -2,
      left: -2,
      right: -2
    }
  },
  [`${BASE_CLASS_NAME}--error`]: {
    '&:focus-within:after': {
      borderColor: core.colors.red
    }
  }
}
