import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

import * as vars from '../vars'

export default {
  '.psds-switch': {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: '1',
    background: 'none',
    border: 'none',
    padding: 0
  },
  '.psds-switch:focus': {
    outline: 'none'
  },
  '.psds-switch--disabled': {
    opacity: '0.4',
    cursor: 'default'
  },
  [`.psds-switch--labelAlign-${vars.labelAligns.right}`]: {
    flexDirection: 'row'
  },
  [`.psds-switch--labelAlign-${vars.labelAligns.left}`]: {
    flexDirection: 'row-reverse'
  },

  // __track
  [`.psds-switch__track`]: {
    position: 'relative',
    backgroundColor: core.colors.gray03,
    transition: `background-color ${core.motion.speedFast} ease-in-out`
  },
  [`.psds-switch__track.psds-switch__track--size-${vars.sizes.small}`]: {
    height: '12px',
    width: '24px',
    borderRadius: '6px'
  },
  [`.psds-switch__track.psds-switch__track--size-${vars.sizes.large}`]: {
    height: '24px',
    width: '48px',
    borderRadius: '12px',
    padding: '1px'
  },
  [`.psds-switch__track--checked.psds-switch__track--color-${
    vars.colors.green
  }`]: {
    backgroundColor: core.colors.green
  },
  [`.psds-switch__track--checked.psds-switch__track--color-${
    vars.colors.orange
  }`]: {
    backgroundColor: core.colors.orange
  },

  // __thumb
  [`.psds-switch__thumb`]: {
    backgroundColor: core.colors.white,
    borderRadius: '50%',
    boxShadow: `0 0 2px ${transparentize(0.5, core.colors.black)}`,
    transition: `transform ${core.motion.speedFast} ease-in-out`
  },
  [`.psds-switch__thumb--size-${vars.sizes.small}`]: {
    height: '12px',
    width: '12px'
  },
  [`.psds-switch__thumb--size-${vars.sizes.large}`]: {
    height: '22px',
    width: '22px'
  },
  [`.psds-switch__thumb--checked.psds-switch__thumb--size-${
    vars.sizes.small
  }`]: {
    transform: 'translateX(12px)'
  },
  [`.psds-switch__thumb--checked.psds-switch__thumb--size-${
    vars.sizes.large
  }`]: {
    transform: 'translateX(24px)'
  },
  // __label
  [`.psds-switch__label`]: {
    fontWeight: core.type.fontWeightMedium,
    lineHeight: '1em'
  },
  [`.psds-switch__label--size-${vars.sizes.small}`]: {
    fontSize: core.type.fontSizeXSmall
  },
  [`.psds-switch__label--size-${vars.sizes.large}`]: {
    fontSize: core.type.fontSizeSmall
  },
  [`.psds-switch__label--size-${
    vars.sizes.small
  }.psds-switch__label--labelAlign-${vars.labelAligns.left}`]: {
    marginRight: core.layout.spacingXSmall
  },
  [`.psds-switch__label--size-${
    vars.sizes.large
  }.psds-switch__label--labelAlign-${vars.labelAligns.left}`]: {
    marginRight: core.layout.spacingMedium
  },
  [`.psds-switch__label--size-${
    vars.sizes.small
  }.psds-switch__label--labelAlign-${vars.labelAligns.right}`]: {
    marginLeft: core.layout.spacingXSmall
  },
  [`.psds-switch__label--size-${
    vars.sizes.large
  }.psds-switch__label--labelAlign-${vars.labelAligns.right}`]: {
    marginLeft: core.layout.spacingMedium
  },
  [`.psds-switch__label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },
  [`.psds-switch__label.psds-theme--${themeDefaultName}`]: {
    color: core.colors.bone
  },
  // __checkbox
  '.psds-switch__checkbox': core.accessibility.screenReaderOnly
}
