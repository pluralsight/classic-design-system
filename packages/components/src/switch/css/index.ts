import {
  accessibility,
  colorsBackgroundUtility,
  colorsBlue,
  colorsBorder,
  colorsGreen,
  colorsTextIcon,
  colorsWhite,
  layout,
  motion,
  type
} from '../../core'
import { themeDefaultName, themeNames } from '../../theme'

import * as vars from '../vars/index'

export default {
  '.psds-switch': {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: '1',
    background: 'none',
    border: 'none',
    padding: 0,

    '&:focus': { outline: 'none' }
  },
  '.psds-switch--disabled': {
    opacity: '0.4',
    cursor: 'not-allowed'
  },
  [`.psds-switch--labelAlign-${vars.labelAligns.right}`]: {
    flexDirection: 'row'
  },
  [`.psds-switch--labelAlign-${vars.labelAligns.left}`]: {
    flexDirection: 'row-reverse'
  },

  '.psds-switch__track': {
    position: 'relative',
    backgroundColor: colorsBackgroundUtility[25],
    border: `1px solid ${colorsBorder.lowOnDark}`,
    transition: `background-color ${motion.speedFast} ease-in-out`
  },
  [`.psds-switch__track.psds-theme--${themeNames.light}`]: {
    border: `1px solid ${colorsBorder.lowOnLight}`
  },
  [`.psds-switch__track.psds-switch__track--size-${vars.sizes.small}`]: {
    height: '12px',
    width: '24px',
    borderRadius: '6px'
  },
  [`.psds-switch__track.psds-switch__track--size-${vars.sizes.large}`]: {
    height: '24px',
    width: '48px',
    borderRadius: '12px'
  },
  [`.psds-switch__track--checked.psds-switch__track--color-${vars.colors.blue}`]: {
    backgroundColor: colorsBlue[6],
    borderColor: 'transparent'
  },
  [`.psds-switch__track--checked.psds-switch__track--color-${vars.colors.green}`]: {
    backgroundColor: colorsGreen[6],
    borderColor: 'transparent'
  },
  [`.psds-switch__track--checked.psds-switch__track--color-${vars.colors.orange}`]: {
    // NOTE: temp: make orange blue until we do a breaking change to remove orange
    backgroundColor: colorsBlue[6],
    borderColor: 'transparent'
  },

  [`.psds-switch__thumb`]: {
    backgroundColor: colorsWhite,
    borderRadius: '50%',
    transition: `transform ${motion.speedFast} ease-in-out`
  },
  [`.psds-switch__thumb--size-${vars.sizes.small}`]: {
    height: '10px',
    width: '10px'
  },
  [`.psds-switch__thumb--size-${vars.sizes.large}`]: {
    height: '22px',
    width: '22px'
  },
  [`.psds-switch__thumb--checked.psds-switch__thumb--size-${vars.sizes.small}`]: {
    transform: 'translateX(12px)'
  },
  [`.psds-switch__thumb--checked.psds-switch__thumb--size-${vars.sizes.large}`]: {
    transform: 'translateX(24px)'
  },

  [`.psds-switch__label`]: {
    fontWeight: type.fontWeightDefault,
    lineHeight: '1em'
  },
  [`.psds-switch__label--size-${vars.sizes.small}`]: {
    fontSize: type.fontSize100
  },
  [`.psds-switch__label--size-${vars.sizes.large}`]: {
    fontSize: type.fontSize200
  },
  [`.psds-switch__label--size-${vars.sizes.small}.psds-switch__label--labelAlign-${vars.labelAligns.left}`]: {
    marginRight: layout.spacingXSmall
  },
  [`.psds-switch__label--size-${vars.sizes.large}.psds-switch__label--labelAlign-${vars.labelAligns.left}`]: {
    marginRight: layout.spacingMedium
  },
  [`.psds-switch__label--size-${vars.sizes.small}.psds-switch__label--labelAlign-${vars.labelAligns.right}`]: {
    marginLeft: layout.spacingXSmall
  },
  [`.psds-switch__label--size-${vars.sizes.large}.psds-switch__label--labelAlign-${vars.labelAligns.right}`]: {
    marginLeft: layout.spacingMedium
  },
  [`.psds-switch__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  [`.psds-switch__label.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },

  '.psds-switch__checkbox': accessibility.screenReaderOnly
}
