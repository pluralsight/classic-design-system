import * as core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

const option = {
  display: 'inline-block',
  maxWidth: '160px',
  height: vars.style.innerHeight,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  lineHeight: `calc(${vars.style.innerHeight} - 1px)`,
  fontSize: '10px',
  fontWeight: core.type.fontWeightMedium,
  padding: `0 ${core.layout.spacingSmall}`,
  border: 'none',
  borderRadius: `calc(${vars.style.innerHeight} / 2)`,
  cursor: 'pointer',
  transition: `all ${core.motion.speedNormal}`
}

export default {
  '.psds-viewtoggle': {
    position: 'relative',
    display: 'inline-flex',
    margin: 0,
    padding: '2px 3px',
    height: vars.style.outerHeight,
    background: core.colors.gray03,
    borderRadius: `calc(${vars.style.outerHeight} / 2)`,
    overflow: 'hidden'
  },

  // __option
  '.psds-viewtoggle__option': {
    ...option,
    position: 'relative',
    background: 'none',
    color: core.colors.bone
  },
  '.psds-viewtoggle__option--active': {
    color: core.colors.gray05
  },

  // __option-bg
  '.psds-viewtoggle__option-bg': {
    ...option,
    position: 'absolute',
    top: '2px',
    background: core.colors.white,
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'
  },

  // __option-bg__spacer
  '.psds-viewtoggle__option-bg__spacer': {
    opacity: 0
  }
}
