import core from '@pluralsight/ps-design-system-core'
import * as iconVars from '@pluralsight/ps-design-system-icon/vars'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from 'polished'

import * as vars from '../vars'

export default {
  '.psds-form-input': {
    display: 'inline-block'
  },

  // __field
  '.psds-form-input__field': {
    position: 'relative',
    height: '40px',
    minWidth: '192px',
    width: '100%',
    borderRadius: '2px',
    background: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightBook,
    color: core.colors.gray03,
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingMedium}`,
    border: 'none'
  },
  '.psds-form-input__field:focus': {
    outline: 'none'
  },
  [`.psds-form-input__field.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    border: `1px solid ${core.colors.gray02}`
  },
  [`.psds-form-input__field--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray01,
    background: core.colors.gray06,
    border: `1px solid ${core.colors.gray03}`
  },
  [`.psds-form-input__field--icon-align-${vars.iconAligns.left}`]: {
    padding: `0 ${core.layout.spacingMedium} 0 calc(${
      core.layout.spacingXSmall
    } + ${iconVars.widths.medium} + ${core.layout.spacingXSmall})`
  },
  [`.psds-form-input__field--icon-align-${vars.iconAligns.right}`]: {
    padding: `0 calc(${core.layout.spacingXSmall} + ${
      iconVars.widths.medium
    } + ${core.layout.spacingXSmall}) 0 ${core.layout.spacingMedium}`
  },

  // __field-container
  '.psds-form-input__field-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minWidth: `calc(192px + ${iconVars.widths.medium} + ${
      core.layout.spacingXSmall
    })`
  },
  '.psds-form-input__field-container:focus:before': {
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
  [`.psds-form-input__field-container.psds-theme--${
    themeNames.light
  }:focus:before`]: {
    background: core.colors.bone
  },
  '.psds-form-input__field-container:focus:after': {
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
  '.psds-form-input__field-container--error:before': {
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
  [`.psds-form-input__field-container--error.psds-theme--${
    themeNames.light
  }:before`]: {
    background: core.colors.bone
  },
  '.psds-form-input__field-container--error:after': {
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

  // __disabled-overlay
  '.psds-form-input__disabled-overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: transparentize(0.5, core.colors.black)
  },
  [`.psds-form-input__disabled-overlay.psds-theme--${themeNames.light}`]: {
    background: transparentize(0.5, core.colors.bone)
  },

  // __icon
  '.psds-form-input__icon': {
    position: 'absolute',
    left: core.layout.spacingXSmall,
    display: 'flex',
    alignItems: 'center',
    color: core.colors.gray03
  },
  [`.psds-form-input__icon.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray02
  },
  [`.psds-form-input__icon--icon-align-${vars.iconAligns.right}`]: {
    left: 'auto',
    right: core.layout.spacingXSmall
  },
  [`.psds-form-input__icon--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray02
  },

  // __label
  '.psds-form-input__label': {
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingBottom: core.layout.spacingXSmall
  },
  [`.psds-form-input__label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },

  // __sub-label
  '.psds-form-input__sub-label': {
    color: core.colors.gray02,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingTop: core.layout.spacingXSmall
  },
  [`.psds-form-input__sub-label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },

  // __error
  '.psds-form-input__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconVars.widths.medium} + ${
      core.layout.spacingXSmall
    }))`,
    display: 'flex',
    alignItems: 'center',
    color: core.colors.red,
    marginLeft: core.layout.spacingXSmall
  }
}
