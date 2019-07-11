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
    display: 'flex',
    alignItems: 'flex-start',
    background: 'none',
    border: 'none',
    marginLeft: 'auto',
    padding: `0 0 0 ${core.layout.spacingSmall}`,
    color: core.colors.white,
    cursor: 'pointer',

    '&:hover': {
      opacity: '0.65'
    }
  }
}
