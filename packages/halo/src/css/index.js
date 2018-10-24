import core from '@pluralsight/ps-design-system-core'

export const BASE_CLASSNAME = '.psds-halo'

// TODO: make sure this is building/exported correctly
export default {
  [BASE_CLASSNAME]: {
    position: 'relative',

    '&:after': {
      content: ' ',
      position: 'absolute',
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

  [`${BASE_CLASSNAME}--appearance-default`]: {
    '&:after': {
      borderColor: core.colors.blue
    }
  },
  [`${BASE_CLASSNAME}--appearance-error`]: {
    '&:after': {
      borderColor: core.colors.red
    }
  },

  [`${BASE_CLASSNAME}--gap-size-default${BASE_CLASSNAME}--theme-dark`]: {
    '&:after': {
      top: -4,
      bottom: -4,
      left: -4,
      right: -4
    }
  },
  [`${BASE_CLASSNAME}--gap-size-default${BASE_CLASSNAME}--theme-light`]: {
    '&:after': {
      top: -5,
      bottom: -5,
      left: -5,
      right: -5
    }
  },

  [`${BASE_CLASSNAME}--gap-size-small${BASE_CLASSNAME}--theme-dark`]: {
    '&:after': {
      top: -4,
      bottom: -4,
      left: -4,
      right: -4
    }
  },
  [`${BASE_CLASSNAME}--gap-size-small${BASE_CLASSNAME}--theme-light`]: {
    '&:after': {
      top: -2,
      bottom: -2,
      left: -2,
      right: -2
    }
  },

  [`${BASE_CLASSNAME}--shape-default`]: {
    '&:after': {
      borderRadius: 4
    }
  },
  [`${BASE_CLASSNAME}--shape-pill`]: {
    '&:after': {
      borderRadius: 1000 // use a big number to make a pill shape
    }
  }
}
