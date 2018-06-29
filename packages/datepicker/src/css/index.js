import core from '@pluralsight/ps-design-system-core'
import * as iconVars from '@pluralsight/ps-design-system-icon/vars'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from 'polished'

import * as vars from '../vars'

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

  // TODO: add form focus to outer field
  // __field
  '.psds-date-picker__field': {
    display: 'none'
  },
  '.psds-date-picker__field:focus': {
    outline: 'none'
  },
  [`.psds-date-picker__field.psds-theme--${themeNames.light}:focus`]: {
    border: '1px solid transparent'
  },
  [`.psds-date-picker__field--error.psds-theme--${themeNames.light}`]: {
    border: '1px solid transparent'
  },

  // __sub-field
  '.psds-date-picker__sub-field': {
    border: 'none',
    display: 'inline-block',
    background: 'none'
  },
  '.psds-date-picker__sub-field:focus': {
    outline: 'none'
  },
  [`.psds-date-picker__sub-field--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray01
  },

  // __field-container
  '.psds-date-picker__field-container': {
    position: 'relative',
    display: 'flex',
    borderRadius: '2px',
    alignItems: 'center',
    minWidth: '192px',
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
  '.psds-date-picker__field-container:focus:before': {
    content: ' ',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    background: core.colors.black,
    zIndex: '-1',
    borderRadius: '2px'
  },
  [`.psds-date-picker__field-container.psds-theme--${
    themeNames.light
  }:focus:before`]: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: core.colors.bone
  },
  '.psds-date-picker__field-container:focus:after': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: core.colors.blue,
    zIndex: '-2',
    borderRadius: '4px'
  },
  [`.psds-date-picker__field-container.psds-theme--${
    themeNames.light
  }:focus:after`]: {
    top: '-3px',
    left: '-3px',
    right: '-3px',
    bottom: '-3px'
  },
  '.psds-date-picker__field-container--error:before': {
    content: ' ',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    background: core.colors.black,
    zIndex: '-1',
    borderRadius: '2px'
  },
  [`.psds-date-picker__field-container--error.psds-theme--${
    themeNames.light
  }:before`]: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: core.colors.bone
  },
  '.psds-date-picker__field-container--error:after': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: core.colors.red,
    zIndex: '-2',
    borderRadius: '4px'
  },
  [`.psds-date-picker__field-container--error.psds-theme--${
    themeNames.light
  }:after`]: {
    top: '-3px',
    left: '-3px',
    right: '-3px',
    bottom: '-3px'
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

  // __calendar
  '.psds-date-picker__calendar': {
    position: 'relative',
    zIndex: '0',
    width: '286px',
    maxHeight: '352px',
    background: core.colors.white,
    color: core.colors.gray03,
    borderRadius: '2px',
    padding: `${core.layout.spacingMedium} ${core.layout.spacingLarge}`,
    fontSize: core.type.fontSizeXSmall,
    fontWeight: core.type.fontWeightMedium
  },

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
