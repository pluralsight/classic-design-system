import {colors, layout, type, motion} from '@pluralsight/ps-design-system-core'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'
import { transparentize } from '@pluralsight/ps-design-system-util'

import * as vars from '../vars/index.js'

const dayDimensions = {
  height: '32px',
  width: '32px',
  margin: `0 2px ${layout.spacingXSmall} 0`,
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
    color: colors.gray05,

    '&:focus': { outline: 'none' }
  },
  [`.psds-date-picker__sub-field--appearance-${vars.appearances.subtle}`]: {
    color: colors.gray01
  },

  // __sub-field-divider
  '.psds-date-picker__sub-field-divider': {
    border: 'none',
    color: colors.gray05
  },
  [`.psds-date-picker__sub-field-divider--appearance-${vars.appearances.subtle}`]: {
    color: colors.gray01
  },

  // __field-container
  '.psds-date-picker__field-container': {
    position: 'relative',
    display: 'flex',
    borderRadius: '2px',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    minWidth: `calc(192px + ${iconWidths.medium} + ${layout.spacingXSmall})`,
    padding: `0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall}) 0 ${layout.spacingMedium}`,
    background: colors.bone
  },
  [`.psds-date-picker__field-container.psds-theme--${themeNames.light}`]: {
    background: colors.white,
    border: `1px solid ${colors.gray02}`
  },
  [`.psds-date-picker__field-container--appearance-${vars.appearances.subtle}`]: {
    color: colors.gray01,
    background: colors.gray06,
    border: `1px solid ${colors.gray03}`
  },

  // __icon
  '.psds-date-picker__icon': {
    position: 'absolute',
    top: '0',
    left: 'auto',
    right: layout.spacingXSmall,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    color: colors.gray03,
    cursor: 'pointer',
    background: 'none',
    border: 'none'
  },
  [`.psds-date-picker__icon.psds-theme--${themeNames.light}`]: {
    color: colors.gray02
  },
  [`.psds-date-picker__icon--appearance-${vars.appearances.subtle}`]: {
    color: colors.gray02
  },

  // __label
  '.psds-date-picker__label': {
    color: colors.bone,
    fontSize: type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: type.fontWeightMedium,
    paddingBottom: layout.spacingXSmall
  },
  [`.psds-date-picker__label.psds-theme--${themeNames.light}`]: {
    color: colors.gray05
  },

  // __sub-label
  '.psds-date-picker__sub-label': {
    color: colors.gray02,
    fontSize: type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: type.fontWeightMedium,
    paddingTop: layout.spacingXSmall
  },
  [`.psds-date-picker__sub-label.psds-theme--${themeNames.light}`]: {
    color: colors.gray03
  },

  // __error
  '.psds-date-picker__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconWidths.medium} + ${layout.spacingXSmall}))`,
    display: 'flex',
    alignItems: 'center',
    color: colors.red,
    marginLeft: layout.spacingXSmall
  },

  // __calendar-container
  '.psds-date-picker__calendar-container': {
    position: 'absolute',
    zIndex: '1',
    marginTop: layout.spacingXXSmall
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
    background: colors.white,
    color: colors.gray03,
    borderRadius: '2px',
    padding: `${layout.spacingMedium} ${layout.spacingLarge}`,
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightMedium,
    boxShadow: `0 2px 4px ${transparentize(0.5, colors.black)}`,
    opacity: 0,
    transform: `translateY(calc(-1 * ${layout.spacingXSmall}))`,
    animation: `${slide || 'psds-date-picker__calendar__keyframes__slide'} ${
      motion.speedNormal
    } forwards`
  }),

  // __calendar__week-heading
  '.psds-date-picker__calendar__week-heading': {
    display: 'flex',
    justifyContent: 'flex-start',
    color: colors.gray02,
    textTransform: 'uppercase',
    marginBottom: layout.spacingSmall
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
    color: colors.gray02,
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
    fontWeight: type.fontWeightMedium,
    background: 'none',
    cursor: 'pointer',

    '&:hover': { border: `3px solid ${colors.blue}` }
  },
  '.psds-date-picker__calendar__day--selected': {
    background: colors.blue,
    color: colors.white,

    '&:hover': { border: '3px solid transparent' }
  },

  // __calendar__skipped-day
  '.psds-date-picker__calendar__skipped-day': dayDimensions,

  // __calendar__switcher
  '.psds-date-picker__calendar__switcher': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: layout.spacingMedium
  },

  // __calendar__switcher__month
  '.psds-date-picker__calendar__switcher__month': {
    fontSize: type.fontSizeSmall
  }
}
