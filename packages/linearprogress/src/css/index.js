import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from 'polished'

export default {
  '.psds-linearprogress__bg': {
    minWidth: '96px',
    width: '100%',
    height: '8px',
    borderRadius: '4px'
  },
  [`.psds-linearprogress__bg.psds-theme--${themeDefaultName}`]: {
    backgroundColor: transparentize(0.8, core.colors.bone)
  },
  [`.psds-linearprogress__bg.psds-theme--${themeNames.light}`]: {
    backgroundColor: core.colors.gray01
  },
  '.psds-linearprogress__fg': {
    height: '8px',
    borderRadius: '4px',
    transition: `width ${core.motion.speedNormal} linear`
  },
  [`.psds-linearprogress__fg.psds-theme--${themeDefaultName}`]: {
    backgroundColor: core.colors.white
  },
  [`.psds-linearprogress__fg.psds-theme--${themeNames.light}`]: {
    backgroundColor: core.colors.gray04
  },
  '.psds-linearprogress__fg--complete': {
    backgroundColor: core.colors.green
  }
}
