import core from '@pluralsight/ps-design-system-core'

export const BASE_CLASSNAME = '.psds-starrating'

const hideVisually = {
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)',
  height: 1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,

  '&:active, &:focus': {
    clip: 'auto',
    clipPath: 'none',
    height: 'auto',
    overflow: 'visible',
    position: 'static',
    width: 'auto'
  }
}

const resetButton = {
  background: 'transparent',
  border: 'none',
  color: 'inherit',
  font: 'inherit',
  lineHeight: 'normal',
  margin: 0,
  overflow: 'visible',
  padding: 0,
  width: 'auto',
  WebkitAppearance: 'none',

  '&::-moz-focus-inner': {
    border: 0,
    padding: 0
  }
}

export default {
  [BASE_CLASSNAME]: {},

  [`${BASE_CLASSNAME}__star`]: {
    ...resetButton,
    lineHeight: 0
  },
  [`${BASE_CLASSNAME}__star--active`]: {
    color: core.colors.yellow
  },
  [`${BASE_CLASSNAME}__star--interactive`]: {
    cursor: 'pointer'
  },
  [`${BASE_CLASSNAME}__star--theme-dark`]: {
    color: core.colors.gray03
  },
  [`${BASE_CLASSNAME}__star--theme-light`]: {
    color: core.colors.gray01
  },

  [`${BASE_CLASSNAME}__star__half__secondary`]: {},
  [`${BASE_CLASSNAME}__star__half__secondary--theme-dark`]: {
    color: core.colors.gray03
  },
  [`${BASE_CLASSNAME}__star__half__secondary--theme-light`]: {
    color: core.colors.gray01
  },

  [`${BASE_CLASSNAME}__screen-reader-input`]: {
    ...hideVisually
  },

  [`${BASE_CLASSNAME}__screen-reader-text`]: {
    ...hideVisually
  }
}
