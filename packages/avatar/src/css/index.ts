import {
  type,
  colorsTextIcon,
  colorsBackgroundUtility
} from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

export default {
  '.psds-avatar': {
    overflow: 'hidden',
    display: 'inline-block',
    textAlign: 'center',
    position: 'relative',
    borderRadius: '100%'
  },

  [`.psds-avatar--size-${vars.sizes.xSmall}`]: {
    width: vars.widths.xSmall,
    height: vars.widths.xSmall,
    fontSize: type.fontSizeMedium,
    fontWeight: type.fontWeightBook
  },
  [`.psds-avatar--size-${vars.sizes.small}`]: {
    width: vars.widths.small,
    height: vars.widths.small,
    fontSize: type.fontSizeLarge,
    fontWeight: type.fontWeightBook
  },
  [`.psds-avatar--size-${vars.sizes.medium}`]: {
    width: vars.widths.medium,
    height: vars.widths.medium,
    fontSize: type.fontSizeXXLarge,
    fontWeight: type.fontWeightLight
  },
  [`.psds-avatar--size-${vars.sizes.large}`]: {
    width: vars.widths.large,
    height: vars.widths.large,
    fontSize: type.fontSize1000,
    fontWeight: type.fontWeightLight
  },
  [`.psds-avatar--size-${vars.sizes.xLarge}`]: {
    width: vars.widths.xLarge,
    height: vars.widths.xLarge,
    fontSize: type.fontSize1200,
    fontWeight: type.fontWeightLight
  },

  '.psds-avatar__image': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  '.psds-avatar__initials': {
    width: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBackgroundUtility.base
  }
}
