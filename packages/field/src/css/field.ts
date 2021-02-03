import {
  colorsBackgroundLight,
  colorsBorder,
  colorsStatus,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'

import { sizes } from '../vars'

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
    padding: layout.spacingSmall,
    position: 'relative',
    width: '100%'
  },
  [`.psds-field--${sizes.small}`]: {
    padding: layout.spacingXSmall
  },

  '.psds-field__halo': { width: '100%' },

  '.psds-field__prefix': {
    label: 'field__prefix',

    alignSelf: 'stretch',
    color: colorsTextIcon.lowOnLight,
    display: 'flex',
    flex: '0 0 auto',
    height: 'auto',
    marginRight: layout.spacingXSmall
  },

  '.psds-field__suffix': {
    label: 'field__suffix',

    alignSelf: 'stretch',
    color: colorsTextIcon.lowOnLight,
    display: 'flex',
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
