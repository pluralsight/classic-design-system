import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

const anchorHover = {
  color: 'inherit',
  textDecoration: 'underline',
  transition: `all ${core.motion.speedNormal}`,
  opacity: '0.65'
}

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

  // --color
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

  // __text
  '.psds-banner__text': {
    flex: '1',
    textAlign: 'center'
  },
  '.psds-banner__text a': {
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  '.psds-banner__text a:hover': anchorHover,
  '.psds-banner__text a:active': anchorHover,
  '.psds-banner__text a:focus': anchorHover,

  // __dismiss
  '.psds-banner__dismiss': {
    display: 'flex',
    alignItems: 'flex-start',
    background: 'none',
    border: 'none',
    marginLeft: 'auto',
    padding: `0 0 0 ${core.layout.spacingSmall}`,
    color: core.colors.white,
    cursor: 'pointer'
  },
  '.psds-banner__dismiss:hover': {
    opacity: '0.65'
  }
}
