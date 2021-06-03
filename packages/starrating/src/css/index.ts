import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsTextIcon,
  colorsYellow
} from '@pluralsight/ps-design-system-core'
import {
  themeDefaultName,
  themeNames
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
    color: 'rgba(255, 255, 255, 0.15)'
  },
  [`.psds-starrating__star--theme-${themeNames.light}`]: {
    color: 'rgba(0, 0, 0, 0.15)'
  },

  [`.psds-starrating__star__half__secondary--theme-${themeDefaultName}`]: {
    color: colorsBackgroundDark[1],
    fill: colorsBackgroundDark[1] // safari needs this
  },
  [`.psds-starrating__star__half__secondary--theme-${themeNames.light}`]: {
    color: colorsBackgroundLight[3],
    fill: colorsBackgroundLight[3] // safari needs this
  },

  '.psds-starrating__star--active': {
    color: colorsYellow[6]
  },
  [`.psds-starrating__star--bright.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-starrating__star--bright.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  '.psds-starrating__star--interactive': {
    cursor: 'pointer'
  },

  '.psds-starrating__screen-reader-input': hideVisually,
  '.psds-starrating__screen-reader-text': hideVisually
}
