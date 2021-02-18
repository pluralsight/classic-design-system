import {
  colorsBlack,
  colorsWhite,
  colorsTextIcon,
  type,
  layout,
  motion,
  colorsBlue,
  colorsGreen,
  colorsYellow,
  colorsRed
} from '@pluralsight/ps-design-system-core'
import { transparentize } from '@pluralsight/ps-design-system-util'

import * as vars from '../vars'

export default {
  '.psds-banner': {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    overflow: 'hidden',
    padding: `${layout.spacingXSmall} ${layout.spacingSmall}`
  },

  [`.psds-banner--color-${vars.colors.blue}`]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBlue[7]
  },
  [`.psds-banner--color-${vars.colors.green}`]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsGreen[8]
  },
  [`.psds-banner--color-${vars.colors.yellow}`]: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsYellow[6]
  },
  [`.psds-banner--color-${vars.colors.red}`]: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsRed[7]
  },

  '.psds-banner__button': {
    ':not(#fake-id-to-force-higher-specificity) &': {
      background: 'none',
      borderColor: 'currentColor',
      color: 'currentColor',

      '&:hover, &:active, &:focus': {
        backgroundColor: transparentize(0.9, colorsBlack)
      },
      '&:focus': { boxShadow: `0 0 0 3px ${transparentize(0.5, colorsWhite)}` }
    }
  },

  [`.psds-banner__button--color-${vars.colors.blue}`]: {},
  [`.psds-banner__button--color-${vars.colors.green}`]: {},
  [`.psds-banner__button--color-${vars.colors.yellow}`]: {
    ':not(#fake-id-to-force-higher-specificity)': {
      '&:focus': { boxShadow: `0 0 0 3px ${transparentize(0.5, colorsBlack)}` }
    }
  },
  [`.psds-banner__button--color-${vars.colors.red}`]: {},

  '.psds-banner__text': {
    margin: 0,
    flex: '1',
    textAlign: 'center',
    color: 'currentColor',

    '& a': {
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'underline',

      '&:hover, &:active, &:focus': {
        color: 'inherit',
        transition: `all ${motion.speedNormal}`,
        opacity: '0.85'
      }
    }
  },

  '.psds-banner__dismiss': {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    background: 'none',
    border: 'none',
    marginLeft: layout.spacingSmall,
    padding: '0',
    color: 'currentColor',
    cursor: 'pointer',

    '&:hover, &:focus, &:active': {
      outline: 'none',
      borderRadius: '2px',
      boxShadow: '0 0 0 3px currentColor'
    }
  }
}
