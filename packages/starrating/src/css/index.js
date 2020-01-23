import * as core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'

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

  [`.psds-starrating__star--theme-${themeDefaultName}`]: {
    color: core.colorsBorder.lowOnDark
  },
  [`.psds-starrating__star--theme-${themeNames.light}`]: {
    color: core.colorsBorder.lowOnLight
  },

  [`.psds-starrating__star__half__secondary--theme-${themeDefaultName}`]: {
    color: 'red', // core.colorsBackgroundDark[1],
    fill: core.colorsBackgroundDark[1] // safari needs this
  },
  [`.psds-starrating__star__half__secondary--theme-${themeNames.light}`]: {
    color: core.colorsBackgroundLight[3],
    fill: core.colorsBackgroundLight[3] // safari needs this
  },

  '.psds-starrating__star--active': {
    color: core.colorsYellow.base
  },
  [`.psds-starrating__star--bright.psds-theme--${themeDefaultName}`]: {
    color: core.colorsTextIcon.lowOnDark
  },
  [`.psds-starrating__star--bright.psds-theme--${themeNames.light}`]: {
    color: core.colorsTextIcon.lowOnLight
  },
  '.psds-starrating__star--interactive': {
    cursor: 'pointer'
  },

  '.psds-starrating__screen-reader-input': hideVisually,
  '.psds-starrating__screen-reader-text': hideVisually
}
