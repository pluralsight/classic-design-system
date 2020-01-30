import { colorsBlue, colorsStatus } from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

export const BASE_CLASSNAME = '.psds-halo'

export const themeClasses = {
  [themeNames.dark]: `.psds-theme--dark`,
  [themeNames.light]: `.psds-theme--light`
}

export default {
  [BASE_CLASSNAME]: {
    position: 'relative',
    display: 'inline-block',
    lineHeight: 0,
    flex: '1 1 100%',

    '&:after': {
      content: ' ',
      position: 'absolute',
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: colorsBlue.base,
      pointerEvents: 'none',
      visibility: 'hidden'
    }
  },

  [`${BASE_CLASSNAME}--inline`]: {
    flexBasis: 0,
    flexGrow: 0
  },

  [`${BASE_CLASSNAME}--error`]: {
    '&:after': {
      visibility: 'visible',
      borderColor: colorsStatus.error
    }
  },

  [`${BASE_CLASSNAME}--visible`]: {
    '&:after': {
      visibility: 'visible',
      borderColor: colorsBlue.base
    }
  },

  [`${BASE_CLASSNAME}--visible-on-focus`]: {
    '&:focus-within:after, &[focus-within]:after': {
      visibility: 'visible',
      borderColor: colorsBlue.base
    }
  },

  [`${BASE_CLASSNAME}--gap-size-default${themeClasses[themeNames.dark]}`]: {
    '&:after': {
      top: '-4px',
      bottom: '-4px',
      left: '-4px',
      right: '-4px'
    }
  },
  [`${BASE_CLASSNAME}--gap-size-default${themeClasses[themeNames.light]}`]: {
    '&:after': {
      top: '-5px',
      bottom: '-5px',
      left: '-5px',
      right: '-5px'
    }
  },
  [`${BASE_CLASSNAME}--gap-size-small${themeClasses[themeNames.dark]}`]: {
    '&:after': {
      top: '-4px',
      bottom: '-4px',
      left: '-4px',
      right: '-4px'
    }
  },
  [`${BASE_CLASSNAME}--gap-size-small${themeClasses[themeNames.light]}`]: {
    '&:after': {
      top: '-2px',
      bottom: '-2px',
      left: '-2px',
      right: '-2px'
    }
  },

  [`${BASE_CLASSNAME}--shape-default`]: {
    '&:after': {
      borderRadius: '4px'
    }
  },

  [`${BASE_CLASSNAME}--shape-pill`]: {
    '&:after': {
      borderRadius: '1000px' // use a big number to make a pill shape
    }
  }
}
