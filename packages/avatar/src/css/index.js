import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

export default {
  '.psds-avatar': {
    overflow: 'hidden',
    display: 'inline-block',
    textAlign: 'center',
    position: 'relative'
  },
  // --size
  [`.psds-avatar--size-${vars.sizes.xSmall}`]: {
    width: '32px',
    height: '32px',
    borderRadius: '32px',
    fontSize: core.type.fontSizeXSmall
  },
  [`.psds-avatar--size-${vars.sizes.small}`]: {
    width: '48px',
    height: '48px',
    borderRadius: '48px',
    fontSize: core.type.fontSizeSmall
  },
  [`.psds-avatar--size-${vars.sizes.medium}`]: {
    width: '72px',
    height: '72px',
    borderRadius: '72px',
    fontSize: core.type.fontSizeMedium
  },
  [`.psds-avatar--size-${vars.sizes.large}`]: {
    width: '96px',
    height: '96px',
    borderRadius: '96px',
    fontSize: core.type.fontSizeLarge
  },
  [`.psds-avatar--size-${vars.sizes.xLarge}`]: {
    width: '160px',
    height: '160px',
    borderRadius: '160px',
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
    backgroundColor: core.colors.bone
  }
}
