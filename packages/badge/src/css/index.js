import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

export default {
  ['.badge']: {
    display: 'inline-block',
    padding: `0 ${core.layout.spacingXSmall}`,
    fontWeight: core.type.fontWeightMedium,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: core.type.lineHeightStandard,
    borderRadius: '2px',
    textTransform: 'uppercase'
  },
  // --appearance-stroke
  ['.badge--appearance-stroke.badge--color-gray']: {
    color: core.colors.gray02,
    border: `1px solid ${core.colors.gray02}`
  },
  ['.badge--appearance-stroke.badge--color-green']: {
    color: core.colors.green,
    border: `1px solid ${core.colors.green}`
  },
  ['.badge--appearance-stroke.badge--color-yellow']: {
    color: core.colors.yellow,
    border: `1px solid ${core.colors.yellow}`
  },
  ['.badge--appearance-stroke.badge--color-red']: {
    color: core.colors.red,
    border: `1px solid ${core.colors.red}`
  },
  ['.badge--appearance-stroke.badge--color-blue']: {
    color: core.colors.blue,
    border: `1px solid ${core.colors.blue}`
  },
  // --appearance-default
  ['.badge--appearance-default.badge--color-gray']: {
    color: core.colors.white,
    backgroundColor: core.colors.gray03,
    border: `1px solid ${core.colors.gray03}`
  },
  ['.badge--appearance-default.badge--color-green']: {
    color: core.colors.white,
    backgroundColor: core.colors.green,
    border: `1px solid ${core.colors.green}`
  },
  ['.badge--appearance-default.badge--color-yellow']: {
    color: core.colors.black,
    backgroundColor: core.colors.yellow,
    border: `1px solid ${core.colors.yellow}`
  },
  ['.badge--appearance-default.badge--color-red']: {
    color: core.colors.white,
    backgroundColor: core.colors.red,
    border: `1px solid ${core.colors.red}`
  },
  ['.badge--appearance-default.badge--color-blue']: {
    color: core.colors.white,
    backgroundColor: core.colors.blue,
    border: `1px solid ${core.colors.blue}`
  }
}
