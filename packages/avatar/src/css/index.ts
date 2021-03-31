import {
  type,
  colorsTextIcon,
  colorsBackgroundUtilityCsv
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
    fontSize: type.fontSize400,
    fontWeight: type.fontWeightDefault
  },
  [`.psds-avatar--size-${vars.sizes.small}`]: {
    width: vars.widths.small,
    height: vars.widths.small,
    fontSize: type.fontSize600,
    fontWeight: type.fontWeightDefault
  },
  [`.psds-avatar--size-${vars.sizes.medium}`]: {
    width: vars.widths.medium,
    height: vars.widths.medium,
    fontSize: type.fontSizeXXLarge,
    fontWeight: type.fontWeight300
  },
  [`.psds-avatar--size-${vars.sizes.large}`]: {
    width: vars.widths.large,
    height: vars.widths.large,
    fontSize: type.fontSize1000,
    fontWeight: type.fontWeight300
  },
  [`.psds-avatar--size-${vars.sizes.xLarge}`]: {
    width: vars.widths.xLarge,
    height: vars.widths.xLarge,
    fontSize: type.fontSize1200,
    fontWeight: type.fontWeight300
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
    backgroundColor: `rgb(${colorsBackgroundUtilityCsv})`
  }
}
