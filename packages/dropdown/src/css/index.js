import core from '@pluralsight/ps-design-system-core'
import * as iconVars from '@pluralsight/ps-design-system-icon/vars'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from 'polished'

import * as vars from '../vars'

export default {
  '.psds-dropdown': {
    display: 'inline-block'
  },
  '.psds-dropdown--disabled': {
    opacity: 0.5
  },

  // __field
  '.psds-dropdown__field': {
    position: 'relative',
    height: '40px',
    width: '100%',
    borderRadius: '2px',
    background: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium,
    color: core.colors.gray03,
    padding: `0 calc(${core.layout.spacingXSmall} + ${
      iconVars.widths.medium
    } + ${core.layout.spacingXSmall}) 0 ${core.layout.spacingMedium}`,
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer'
  },
  '.psds-dropdown__field:focus': {
    outline: 'none'
  },
  [`.psds-dropdown__field.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    border: `1px solid ${core.colors.gray02}`
  },
  [`.psds-dropdown__field--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray01,
    background: core.colors.gray06,
    border: `1px solid ${core.colors.gray03}`
  },

  // __field-container
  '.psds-dropdown__field-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minWidth: `calc(${iconVars.widths.medium} + ${core.layout.spacingXSmall})`
  },
  '.psds-dropdown__field-container:focus:before': {
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
  [`.psds-dropdown__field-container.psds-theme--${
    themeNames.light
  }:focus:before`]: {
    background: core.colors.bone
  },
  '.psds-dropdown__field-container:focus:after': {
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
  '.psds-dropdown__field-container--error:before': {
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
  [`.psds-dropdown__field-container--error.psds-theme--${
    themeNames.light
  }:before`]: {
    background: core.colors.bone
  },
  '.psds-dropdown__field-container--error:after': {
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

  // __icon
  '.psds-dropdown__icon': {
    position: 'absolute',
    left: 'auto',
    right: core.layout.spacingXSmall,
    display: 'flex',
    alignItems: 'center',
    color: core.colors.gray03
  },
  [`.psds-dropdown__icon.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray02
  },
  [`.psds-dropdown__icon--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray02
  },

  // __label
  '.psds-dropdown__label': {
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingBottom: core.layout.spacingXSmall
  },
  [`.psds-dropdown__label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },

  // __sub-label
  '.psds-dropdown__sub-label': {
    color: core.colors.gray02,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingTop: core.layout.spacingXSmall
  },
  [`.psds-dropdown__sub-label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },

  // __error
  '.psds-dropdown__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconVars.widths.medium} + ${
      core.layout.spacingXSmall
    }))`,
    display: 'flex',
    alignItems: 'center',
    color: core.colors.red,
    marginLeft: core.layout.spacingXSmall
  },

  // __placeholder
  '.psds-dropdown__placeholder': {
    position: 'absolute',
    top: core.layout.spacingXSmall,
    left: core.layout.spacingMedium,
    whiteSpace: 'nowrap'
  },

  // __button-sizer
  '.psds-dropdown__button-sizer': {
    visibility: 'hidden',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  },

  // __menu
  '.psds-dropdown__menu': {
    position: 'fixed',
    zIndex: '1',
    marginTop: core.layout.spacingXXSmall
  }
}
