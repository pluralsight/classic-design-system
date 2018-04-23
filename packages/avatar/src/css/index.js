import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

export default {
  '.psds-avatar': {
    overflow: 'hidden',
    display: 'inline-block',
    textAlign: 'center',
    position: 'relative',
    borderRadius: '100%'
  },
  // --size
  [`.psds-avatar--size-${vars.sizes.xSmall}`]: {
    width: vars.widths.xSmall,
    height: vars.widths.xSmall,
    fontSize: core.type.fontSizeXSmall
  },
  [`.psds-avatar--size-${vars.sizes.small}`]: {
    width: vars.widths.small,
    height: vars.widths.small,
    fontSize: core.type.fontSizeSmall
  },
  [`.psds-avatar--size-${vars.sizes.medium}`]: {
    width: vars.widths.medium,
    height: vars.widths.medium,
    fontSize: core.type.fontSizeMedium
  },
  [`.psds-avatar--size-${vars.sizes.large}`]: {
    width: vars.widths.large,
    height: vars.widths.large,
    fontSize: core.type.fontSizeLarge
  },
  [`.psds-avatar--size-${vars.sizes.xLarge}`]: {
    width: vars.widths.xLarge,
    height: vars.widths.xLarge,
    fontSize: core.type.fontSizeXLarge
  },
  // __image
  '.psds-avatar__image': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: 'auto',
    height: '100%'
  },
  // __initials
  '.psds-avatar__initials': {
    width: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: core.colors.white,
    fontWeight: core.type.fontWeightBook,
    backgroundColor: core.colors.gray02
  }
}
