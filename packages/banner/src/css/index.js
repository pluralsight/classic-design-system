import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars/index.js'

export default {
  '.psds-banner': {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    overflow: 'hidden',
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium,
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingSmall}`
  },

  [`.psds-banner--color-${vars.colors.blue}`]: {
    color: core.colors.white,
    backgroundColor: core.colors.blue
  },
  [`.psds-banner--color-${vars.colors.green}`]: {
    color: core.colors.white,
    backgroundColor: core.colors.green
  },
  [`.psds-banner--color-${vars.colors.yellow}`]: {
    color: core.colors.black,
    backgroundColor: core.colors.yellow
  },
  [`.psds-banner--color-${vars.colors.red}`]: {
    color: core.colors.white,
    backgroundColor: core.colors.red
  },

  '.psds-banner__text': {
    flex: '1',
    textAlign: 'center',

    '& a': {
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'underline',

      '&:hover, &:active, &:focus': {
        color: 'inherit',
        transition: `all ${core.motion.speedNormal}`,
        opacity: '0.65'
      }
    }
  },

  '.psds-banner__dismiss': {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    background: 'none',
    border: 'none',
    marginLeft: core.layout.spacingSmall,
    padding: '0',
    color: 'currentColor',
    cursor: 'pointer',

    '&:hover, &:focus, &:active': {
      outline: 'none',
      borderRadius: '2px',
      boxShadow: '0 0 2px currentColor, inset 0 0 2px currentColor'
    }
  }
}
