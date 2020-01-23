import {
  colorsGreen,
  colorsTextIcon,
  motion
} from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'

export default {
  '.psds-linearprogress__bg': {
    minWidth: '96px',
    width: '100%',
    height: '8px',
    borderRadius: '4px'
  },
  [`.psds-linearprogress__bg.psds-theme--${themeDefaultName}`]: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)'
  },
  [`.psds-linearprogress__bg.psds-theme--${themeNames.light}`]: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  '.psds-linearprogress__fg': {
    height: '8px',
    borderRadius: '4px',
    transition: `width ${motion.speedNormal} linear`
  },
  [`.psds-linearprogress__fg.psds-theme--${themeDefaultName}`]: {
    backgroundColor: colorsTextIcon.highOnDark
  },
  [`.psds-linearprogress__fg.psds-theme--${themeNames.light}`]: {
    backgroundColor: colorsTextIcon.highOnLight
  },
  '.psds-linearprogress__fg--complete': {
    backgroundColor: colorsGreen.base
  }
}
