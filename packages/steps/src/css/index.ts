import {
  colorsBackgroundUtility,
  colorsPrimaryAction,
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
    display: 'flex'
  },

  [`.psds-steps--${vars.orientations.horizontal}`]: {
    flexDirection: 'row',
    marginBottom: layout.spacingMedium
  },
  [`.psds-steps--${vars.orientations.vertical}`]: {
    flexDirection: 'column'
  },

  '.psds-steps__step': {
    label: 'steps__step',

    alignItems: 'flex-start',
    counterIncrement: 'line-number',
    display: 'flex',
    flex: 1,
    padding: layout.spacingXSmall
  },
  '.psds-steps__step--interactive': {
    borderRadius: 4,
    cursor: 'pointer',

    '&:hover': { backgroundColor: colorsBackgroundUtility[25] }
  },

  [`.psds-steps__step${dark}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-steps_step${light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  [`.psds-steps__step--${vars.orientations.horizontal}`]: {
    marginRight: layout.spacingXSmall,

    '&:last-child': { marginRight: 0 }
  },
  [`.psds-steps__step--${vars.orientations.vertical}`]: {
    marginBottom: layout.spacingXSmall,

    '&:last-child': { marginBottom: 0 }
  },

  [`.psds-steps__step--${vars.sizes.medium}`]: {
    fontSize: type.fontSize200
  },
  [`.psds-steps__step--${vars.sizes.large}`]: {
    fontSize: type.fontSize400
  },

  [`.psds-steps__step--${vars.statuses.current}`]: {
    fontWeight: type.fontWeight700
  },

  '.psds-steps__title': {
    '& p:last-child': { marginBottom: 0 }
  },
  [`.psds-steps__title--${vars.sizes.large}`]: {
    paddingTop: 5 // NOTE: align text vertically with marker
  },
  [`.psds-steps__title--${vars.sizes.medium}`]: {
    paddingTop: 1 // NOTE: align text vertically with marker
  },
  [`.psds-steps__title--${vars.statuses.current}${dark}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-steps__title--${vars.statuses.current}${light}`]: {
    color: colorsTextIcon.highOnLight
  },

  '.psds-steps__description': {
    '& p:last-child': { marginBottom: 0 }
  },
  [`.psds-steps__description--${vars.sizes.medium}`]: {
    fontSize: type.fontSize100
  },
  [`.psds-steps__description--${vars.sizes.large}`]: {
    fontSize: type.fontSize200
  },
  [`.psds-steps__description--${vars.statuses.current}`]: {
    fontWeight: type.fontWeightDefault
  },

  '.psds-steps__marker-container': {
    label: 'steps__marker-container',

    flexShrink: 0
  },

  [`.psds-steps__marker-container--${vars.sizes.medium}`]: {
    marginRight: layout.spacingXSmall
  },
  [`.psds-steps__marker-container--${vars.sizes.large}`]: {
    marginRight: layout.spacingSmall
  },

  '.psds-steps__marker': {
    label: 'steps__marker',

    fontSize: type.fontSize100,
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
      transition: `all ${motion.speedFast}`,
      width: '50%'
    }
  },
  '.psds-steps__marker--hide-counter': {
    '&:after': { content: '' }
  },

  [`.psds-steps__marker${dark}`]: {
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-steps__marker${light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  [`.psds-steps__marker--${vars.sizes.medium}`]: {
    fontSize: type.fontSize100
  },
  [`.psds-steps__marker--${vars.sizes.large}`]: {
    fontSize: type.fontSize400
  },

  [`.psds-steps__marker--${vars.statuses.completed}`]: {
    color: colorsGreen.base,

    '&:after': { opacity: 0 }
  },
  [`.psds-steps__marker--${vars.statuses.current}${dark}`]: {
    color: colorsPrimaryAction.textDarkTheme
  },
  [`.psds-steps__marker--${vars.statuses.current}${light}`]: {
    color: colorsPrimaryAction.textLightTheme
  },

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
