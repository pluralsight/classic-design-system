import {
  colorsBackgroundLight,
  colorsBorder,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'

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

  //   '.psds-text-input__error': {
  //     position: 'absolute',
  //     right: `calc(-1 * (${iconWidths.medium} + ${layout.spacingXSmall}))`,
  //     display: 'flex',
  //     alignItems: 'center',
  //     color: colorsStatus.error,
  //     marginLeft: layout.spacingXSmall
  //   }

  '.psds-field': {
    label: 'field',

    alignItems: 'center',
    background: colorsBackgroundLight[3],
    border: `1px solid ${colorsBorder.highOnLight}`,
    borderRadius: '2px',
    color: colorsTextIcon.highOnLight,
    display: 'flex',
    fontWeight: type.fontWeightDefault,
    // minHeight: '40px',
    // minWidth: '192px',
    padding: `${layout.spacingXSmall} ${layout.spacingSmall}`,
    position: 'relative',
    width: '100%'
  },
  [`.psds-field--${sizes.small}`]: {
    // minHeight: '32px',
    padding: layout.spacingXSmall
  },

  '.psds-field__prefix': {
    label: 'input__prefix',

    alignSelf: 'stretch',
    display: 'flex',
    flex: '0 0 auto',
    height: 'auto',
    marginRight: layout.spacingXSmall
  },

  '.psds-field__suffix': {
    label: 'input__suffix',

    alignSelf: 'stretch',
    display: 'flex',
    flex: '0 0 auto',
    height: 'auto',
    marginLeft: layout.spacingXSmall,
    overflow: 'visible'
  }
}
