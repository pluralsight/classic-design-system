import core from '@pluralsight/ps-design-system-core'

export const BASE_CLASSNAME = '.psds-halo'

// TODO: make sure this is building/exported correctly
export default {
  [BASE_CLASSNAME]: {
    position: 'relative',
    width: '100%',

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
      pointerEvents: 'none',
      visibility: 'hidden'
    }
  },
  [`${BASE_CLASSNAME}--visible`]: {
    '&:after': {
      visibility: 'visible'
    }
  },
  [`${BASE_CLASSNAME}--visible-on-focus`]: {
    '&:focus-within:after': {
      visibility: 'visible'
    },
    '&[focus-within]:after': {
      visibility: 'visible'
    }
  },
  [`${BASE_CLASSNAME}--theme-dark`]: {},
  [`${BASE_CLASSNAME}--theme-light`]: {
    '&:after': {
      top: -2,
      bottom: -2,
      left: -2,
      right: -2
    }
  },
  [`${BASE_CLASSNAME}--appearance-default`]: {
    '&:after': {
      borderColor: core.colors.blue
    }
  },
  [`${BASE_CLASSNAME}--appearance-error`]: {
    '&:after': {
      borderColor: core.colors.red
    }
  }
}
