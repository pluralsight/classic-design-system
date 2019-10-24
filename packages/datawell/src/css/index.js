import * as core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

export default {
  '.psds-datawell': {
    borderLeft: `1px solid ${core.colors.gray03}`,
    minHeight: '104px',
    padding: `0 ${core.layout.spacingMedium} ${core.layout.spacingMedium} ${core.layout.spacingLarge}`
  },
  [`.psds-datawell.psds-theme--${themeNames.light}`]: {
    borderLeft: `1px solid ${core.colors.gray01}`
  },
  '.psds-datawell__label': {
    margin: 0,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px'
  },
  '.psds-datawell__data': {
    fontWeight: core.type.fontWeightMedium,
    fontSize: core.type.fontSizeXXLarge,
    lineHeight: core.type.lineHeightHuge,
    color: core.colors.white,
    marginBottom: core.layout.spacingMedium,
    wordWrap: 'break-word'
  },
  [`.psds-datawell__data.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray06
  },
  '.psds-datawell__sublabel': {
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    color: core.colors.gray02
  },
  [`.psds-datawell__sublabel.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  }
}
