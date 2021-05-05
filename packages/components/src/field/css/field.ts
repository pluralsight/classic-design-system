import {
  colorsBackgroundLight,
  colorsBorder,
  colorsStatus,
  colorsTextIcon,
  layout,
  type
} from '../../core'
import { widths as iconWidths } from '../../icon'

import { sizes } from '../vars/index'

export default {
  '.psds-field__container': {
    label: 'field__container',

    display: 'inline-block'
  },
  '.psds-field__container--disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },
  '.psds-field__container--error': {},

  '.psds-field': {
    label: 'field',

    alignItems: 'center',
    background: colorsBackgroundLight[3],
    border: `1px solid ${colorsBorder.highOnLight}`,
    borderRadius: '2px',
    color: colorsTextIcon.highOnLight,
    display: 'flex',
    fontWeight: type.fontWeightDefault,
    padding: `0 ${layout.spacingMedium}`,
    lineHeight: '20px',
    position: 'relative',
    width: '100%'
  },
  [`.psds-field--${sizes.small}`]: {
    padding: `0 ${layout.spacingXSmall}`
  },
  '.psds-field--prefix': {
    paddingLeft: '11px'
  },
  '.psds-field--suffix': {
    paddingRight: '11px'
  },

  '.psds-field__halo': { width: '100%' },

  '.psds-field__prefix': {
    label: 'field__prefix',

    alignSelf: 'stretch',
    color: colorsTextIcon.lowOnLight,
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto',
    height: 'auto',
    marginRight: layout.spacingXSmall
  },

  '.psds-field__suffix': {
    label: 'field__suffix',

    alignSelf: 'stretch',
    color: colorsTextIcon.lowOnLight,
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto',
    height: 'auto',
    marginLeft: layout.spacingXSmall,
    overflow: 'visible'
  },
  '.psds-field__error-icon': {
    label: 'field__error-icon',

    alignItems: 'center',
    color: colorsStatus.error,
    display: 'flex',
    position: 'absolute',
    right: `calc(-1 * (${iconWidths.medium} + ${layout.spacingXSmall}))`
  }
}
