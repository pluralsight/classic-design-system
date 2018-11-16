import core from '@pluralsight/ps-design-system-core'

export default {
  '.psds-badge': {
    display: 'inline-block',
    padding: `0 ${core.layout.spacingXSmall}`,
    fontWeight: core.type.fontWeightMedium,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: core.type.lineHeightStandard,
    borderRadius: '2px',
    textTransform: 'uppercase'
  },
  // --appearance-stroke
  '.psds-badge--appearance-stroke.psds-badge--color-gray': {
    color: core.colors.gray02,
    border: `1px solid ${core.colors.gray02}`
  },
  '.psds-badge--appearance-stroke.psds-badge--color-green': {
    color: core.colors.green,
    border: `1px solid ${core.colors.green}`
  },
  '.psds-badge--appearance-stroke.psds-badge--color-yellow': {
    color: core.colors.yellow,
    border: `1px solid ${core.colors.yellow}`
  },
  '.psds-badge--appearance-stroke.psds-badge--color-red': {
    color: core.colors.red,
    border: `1px solid ${core.colors.red}`
  },
  '.psds-badge--appearance-stroke.psds-badge--color-blue': {
    color: core.colors.blue,
    border: `1px solid ${core.colors.blue}`
  },
  // --appearance-default
  '.psds-badge--appearance-default.psds-badge--color-gray': {
    color: core.colors.white,
    backgroundColor: core.colors.gray03,
    border: `1px solid ${core.colors.gray03}`
  },
  '.psds-badge--appearance-default.psds-badge--color-green': {
    color: core.colors.white,
    backgroundColor: core.colors.green,
    border: `1px solid ${core.colors.green}`
  },
  '.psds-badge--appearance-default.psds-badge--color-yellow': {
    color: core.colors.black,
    backgroundColor: core.colors.yellow,
    border: `1px solid ${core.colors.yellow}`
  },
  '.psds-badge--appearance-default.psds-badge--color-red': {
    color: core.colors.white,
    backgroundColor: core.colors.red,
    border: `1px solid ${core.colors.red}`
  },
  '.psds-badge--appearance-default.psds-badge--color-blue': {
    color: core.colors.white,
    backgroundColor: core.colors.blue,
    border: `1px solid ${core.colors.blue}`
  }
}
