import core from '@pluralsight/ps-design-system-core'

export const BASE_CLASSNAME = '.psds-halo'

export default {
  [BASE_CLASSNAME]: {
    position: 'relative',
    flex: '0 0 auto',
    lineHeight: 0
  },
  [`${BASE_CLASSNAME}:after`]: {
    content: ' ',
    position: 'absolute',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    pointerEvents: 'none',
    visibility: 'hidden'
  },
  [`${BASE_CLASSNAME}--visible:after`]: {
    visibility: 'visible'
  },
  [`${BASE_CLASSNAME}--visible-on-focus:focus-within:after`]: {
    visibility: 'visible'
  },
  [`${BASE_CLASSNAME}--visible-on-focus[focus-within]:after`]: {
    visibility: 'visible'
  },
  [`${BASE_CLASSNAME}--appearance-default:after`]: {
    borderColor: core.colors.blue
  },
  [`${BASE_CLASSNAME}--appearance-error:after`]: {
    borderColor: core.colors.red
  },
  [`${BASE_CLASSNAME}--gap-size-default${BASE_CLASSNAME}--theme-dark:after`]: {
    top: '-4px',
    bottom: '-4px',
    left: '-4px',
    right: '-4px'
  },
  [`${BASE_CLASSNAME}--gap-size-default${BASE_CLASSNAME}--theme-light:after`]: {
    top: '-5px',
    bottom: '-5px',
    left: '-5px',
    right: '-5px'
  },
  [`${BASE_CLASSNAME}--gap-size-small${BASE_CLASSNAME}--theme-dark:after`]: {
    top: '-4px',
    bottom: '-4px',
    left: '-4px',
    right: '-4px'
  },
  [`${BASE_CLASSNAME}--gap-size-small${BASE_CLASSNAME}--theme-light:after`]: {
    top: '-2px',
    bottom: '-2px',
    left: '-2px',
    right: '-2px'
  },
  [`${BASE_CLASSNAME}--shape-default:after`]: {
    borderRadius: '4px'
  },
  [`${BASE_CLASSNAME}--shape-pill:after`]: {
    borderRadius: '1000px' // use a big number to make a pill shape
  }
}
