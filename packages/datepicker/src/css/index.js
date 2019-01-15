import core from '@pluralsight/ps-design-system-core'
import * as iconVars from '@pluralsight/ps-design-system-icon/vars'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from '@pluralsight/ps-design-system-util/color'

import * as vars from '../vars/index.js'

const dayDimensions = {
  height: '32px',
  width: '32px',
  margin: `0 2px ${core.layout.spacingXSmall} 0`,
  border: '3px solid transparent'
}

export default {
  '.psds-date-picker': {
    display: 'inline-block'
  },
  '.psds-date-picker--disabled': {
    opacity: 0.5
  },

  // __field
  '.psds-date-picker__field': {
    display: 'none'
  },

  // __sub-field
  '.psds-date-picker__sub-field': {
    border: 'none',
    display: 'inline-block',
    background: 'none',
    color: core.colors.gray05
  },
  '.psds-date-picker__sub-field:focus': {
    outline: 'none'
  },
  [`.psds-date-picker__sub-field--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray01
  },

  // __sub-field-divider
  '.psds-date-picker__sub-field-divider': {
    border: 'none',
    color: core.colors.gray05
  },
  [`.psds-date-picker__sub-field-divider--appearance-${
    vars.appearances.subtle
  }`]: {
    color: core.colors.gray01
  },

  // __field-container
  '.psds-date-picker__field-container': {
    position: 'relative',
    display: 'flex',
    borderRadius: '2px',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    minWidth: `calc(192px + ${iconVars.widths.medium} + ${
      core.layout.spacingXSmall
    })`,
    padding: `0 calc(${core.layout.spacingXSmall} + ${
      iconVars.widths.medium
    } + ${core.layout.spacingXSmall}) 0 ${core.layout.spacingMedium}`,
    background: core.colors.bone
  },
  [`.psds-date-picker__field-container.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    border: `1px solid ${core.colors.gray02}`
  },
  [`.psds-date-picker__field-container--appearance-${
    vars.appearances.subtle
  }`]: {
    color: core.colors.gray01,
    background: core.colors.gray06,
    border: `1px solid ${core.colors.gray03}`
  },

  // __icon
  '.psds-date-picker__icon': {
    position: 'absolute',
    left: 'auto',
    right: core.layout.spacingXSmall,
    display: 'flex',
    height: '100%',
    color: core.colors.gray03,
    cursor: 'pointer',
    background: 'none',
    border: 'none'
  },
  [`.psds-date-picker__icon.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray02
  },
  [`.psds-date-picker__icon--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray02
  },

  // __label
  '.psds-date-picker__label': {
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingBottom: core.layout.spacingXSmall
  },
  [`.psds-date-picker__label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },

  // __sub-label
  '.psds-date-picker__sub-label': {
    color: core.colors.gray02,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingTop: core.layout.spacingXSmall
  },
  [`.psds-date-picker__sub-label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },

  // __error
  '.psds-date-picker__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconVars.widths.medium} + ${
      core.layout.spacingXSmall
    }))`,
    display: 'flex',
    alignItems: 'center',
    color: core.colors.red,
    marginLeft: core.layout.spacingXSmall
  },

  // __calendar-container
  '.psds-date-picker__calendar-container': {
    position: 'absolute',
    zIndex: '1',
    marginTop: core.layout.spacingXXSmall
  },

  '@keyframes psds-date-picker__calendar__keyframes__slide': {
    '100%': {
      transform: 'translateY(0)',
      opacity: 1
    }
  },

  // __calendar
  '.psds-date-picker__calendar': ({ slide }) => ({
    position: 'relative',
    zIndex: '0',
    width: '286px',
    maxHeight: '352px',
    background: core.colors.white,
    color: core.colors.gray03,
    borderRadius: '2px',
    padding: `${core.layout.spacingMedium} ${core.layout.spacingLarge}`,
    fontSize: core.type.fontSizeXSmall,
    fontWeight: core.type.fontWeightMedium,
    boxShadow: `0 2px 4px ${transparentize(0.5, core.colors.black)}`,
    opacity: 0,
    transform: `translateY(calc(-1 * ${core.layout.spacingXSmall}))`,
    animation: `${slide || 'psds-date-picker__calendar__keyframes__slide'} ${
      core.motion.speedNormal
    } forwards`
  }),

  // __calendar__week-heading
  '.psds-date-picker__calendar__week-heading': {
    display: 'flex',
    justifyContent: 'flex-start',
    color: core.colors.gray02,
    textTransform: 'uppercase',
    marginBottom: core.layout.spacingSmall
  },

  // __calendar__week-heading__day
  '.psds-date-picker__calendar__week-heading__day': {
    width: '32px',
    textAlign: 'center',
    marginRight: '2px'
  },

  // __calendar__days
  '.psds-date-picker__calendar__days': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    color: core.colors.gray02,
    textTransform: 'uppercase'
  },

  // __calendar__day
  '.psds-date-picker__calendar__day': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...dayDimensions,
    borderRadius: '50%',
    lineHeight: '1em',
    fontWeight: core.type.fontWeightMedium,
    background: 'none',
    cursor: 'pointer'
  },
  '.psds-date-picker__calendar__day:hover': {
    border: `3px solid ${core.colors.blue}`
  },
  '.psds-date-picker__calendar__day--selected': {
    background: core.colors.blue,
    color: core.colors.white
  },
  '.psds-date-picker__calendar__day--selected:hover': {
    border: '3px solid transparent'
  },

  // __calendar__skipped-day
  '.psds-date-picker__calendar__skipped-day': dayDimensions,

  // __calendar__switcher
  '.psds-date-picker__calendar__switcher': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: core.layout.spacingMedium
  },

  // __calendar__switcher__month
  '.psds-date-picker__calendar__switcher__month': {
    fontSize: core.type.fontSizeSmall
  }
}
