import {
  colorsBackgroundUtility,
  colorsBlue,
  colorsGreen,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars'

const dark = `.psds-theme--${themeNames.dark}`
const light = `.psds-theme--${themeNames.light}`

export default {
  '.psds-steps': {
    label: 'steps',

    counterReset: 'line-number',
    display: 'flex',
    flexDirection: 'column'
  },

  '.psds-steps__step': {
    label: 'steps__step',

    alignItems: 'flex-start',
    counterIncrement: 'line-number',
    display: 'flex',
    flex: 1,
    marginBottom: layout.spacingXSmall,
    padding: layout.spacingXSmall
  },
  '.psds-steps__step--interactive': {
    borderRadius: 4,
    cursor: 'pointer',

    '&:hover': { backgroundColor: colorsBackgroundUtility[25] }
  },

  '.psds-steps__description': {
    label: 'steps__description',

    fontSize: type.fontSizeXSmall
  },

  '.psds-steps__marker': {
    label: 'steps__marker',

    flexShrink: 0,
    fontSize: type.fontSizeXSmall,
    marginRight: layout.spacingXSmall,
    position: 'relative',
    textAlign: 'center',

    '&:after': {
      content: 'counter(line-number)',
      left: '50%',
      margin: 'auto',
      opacity: 1,
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      transition: `opacity ${motion.speedFast}`,
      width: '50%'
    }
  },

  [`.psds-steps__marker${dark}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-steps__marker${light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  [`.psds-steps__marker--${vars.statuses.completed}`]: {
    color: colorsGreen.base,

    '&:after': { opacity: 0 }
  },
  [`.psds-steps__marker--${vars.statuses.current}`]: {
    color: colorsBlue.base
  },
  [`.psds-steps__marker--${vars.statuses.incomplete}`]: {},

  '.psds-steps__marker__circle': {
    label: 'steps__marker__circle',

    fill: 'transparent',
    stroke: 'currentColor'
  },

  '.psds-steps__marker__check': {
    label: 'steps__marker__check',

    fill: 'transparent',
    stroke: 'currentColor',
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    transition: `stroke-dashoffset 0s linear 0s`
  },
  '.psds-steps__marker__check--completed': {
    strokeDashoffset: 0,
    transition: `stroke-dashoffset 3s linear ${motion.speedNormal}`
  }
}
