import {
  colorsStatus,
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsTextIcon,
  colorsBorder,
  colorsPrimaryAction,
  layout,
  type,
  motion
} from '@pluralsight/ps-design-system-core'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars'

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
    color: colorsTextIcon.highOnLight,

    '&:focus': { outline: 'none' },
    '&::placeholder': { color: colorsTextIcon.lowOnLight }
  },
  [`.psds-date-picker__sub-field--appearance-${vars.appearances.subtle}`]: {
    color: colorsTextIcon.highOnDark,

    '&::placeholder': { color: colorsTextIcon.lowOnDark }
  },

  // __sub-field-divider
  '.psds-date-picker__sub-field-divider': {
    border: 'none',
    color: colorsTextIcon.highOnLight
  },
  [`.psds-date-picker__sub-field-divider--appearance-${vars.appearances.subtle}`]: {
    color: colorsTextIcon.highOnDark
  },

  // __field-container
  '.psds-date-picker__field-container': {
    position: 'relative',
    display: 'flex',
    border: `1px solid ${colorsBorder.highOnDark}`,
    borderRadius: '2px',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    minWidth: `calc(144px + ${iconWidths.medium} + ${layout.spacingXSmall})`,
    padding: `0 calc(${layout.spacingXSmall} + ${iconWidths.medium}) 0 ${layout.spacingMedium}`,
    background: colorsBackgroundLight[3]
  },
  [`.psds-date-picker__field-container.psds-theme--${themeNames.light}`]: {
    border: `1px solid ${colorsBorder.highOnLight}`
  },
  [`.psds-date-picker__field-container--appearance-${vars.appearances.subtle}`]: {
    color: colorsTextIcon.highOnDark,
    background: colorsBackgroundDark[1],
    border: `1px solid ${colorsBorder.highOnDark}`
  },

  // __icon
  '.psds-date-picker__icon': {
    position: 'absolute',
    top: '0',
    left: 'auto',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    color: colorsTextIcon.lowOnLight,
    cursor: 'pointer',
    background: 'none',
    border: 'none'
  },
  [`.psds-date-picker__icon--appearance-${vars.appearances.subtle}`]: {
    color: colorsTextIcon.lowOnDark
  },

  // __label
  '.psds-date-picker__label': {
    color: colorsTextIcon.highOnDark,
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightMedium,
    marginBottom: layout.spacingXXSmall
  },
  [`.psds-date-picker__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __sub-label
  '.psds-date-picker__sub-label': {
    color: colorsTextIcon.lowOnDark,
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightBook,
    marginTop: layout.spacingXXSmall
  },
  [`.psds-date-picker__sub-label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  // __error
  '.psds-date-picker__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconWidths.medium} + ${layout.spacingXSmall}))`,
    display: 'flex',
    alignItems: 'center',
    color: colorsStatus.error,
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
  '.psds-date-picker__calendar': ({ slide }: { slide: string }) => ({
    position: 'relative',
    zIndex: '0',
    width: '286px',
    maxHeight: '352px',
    background: colorsBackgroundLight[3],
    color: colorsTextIcon.highOnLight,
    borderRadius: '2px',
    padding: `${layout.spacingMedium} ${layout.spacingLarge}`,
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightMedium,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
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
    color: colorsTextIcon.lowOnLight,
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
    color: colorsTextIcon.highOnLight,
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

    '&:hover': { border: `3px solid ${colorsPrimaryAction.background}` }
  },
  '.psds-date-picker__calendar__day--selected': {
    background: colorsPrimaryAction.background,
    color: colorsTextIcon.highOnDark,

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
