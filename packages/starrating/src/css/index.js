import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars.js'

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
  '.psds-starrating__star': {
    ...resetButton,
    lineHeight: 0
  },

  [`.psds-starrating__star--theme-${themeNames.dark}`]: {
    color: core.colors.gray04
  },
  [`.psds-starrating__star--theme-${themeNames.light}`]: {
    color: core.colors.gray01
  },

  [`.psds-starrating__star__half__secondary--theme-${themeNames.dark}`]: {
    color: core.colors.gray04,
    fill: core.colors.gray04 // safari needs this
  },
  [`.psds-starrating__star__half__secondary--theme-${themeNames.light}`]: {
    color: core.colors.gray01,
    fill: core.colors.gray01 // safari needs this
  },

  '.psds-starrating__star--active': {
    color: core.colors.yellow
  },
  '.psds-starrating__star--bright': {
    color: core.colors.gray02
  },
  '.psds-starrating__star--interactive': {
    cursor: 'pointer'
  },

  '.psds-starrating__screen-reader-input': hideVisually,
  '.psds-starrating__screen-reader-text': hideVisually
}
