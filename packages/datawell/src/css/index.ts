import {
  colorsBorder,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

export default {
  '.psds-datawell': {
    borderLeft: `1px solid ${colorsBorder.lowOnDark}`,
    minHeight: '104px',
    padding: `0 ${layout.spacingMedium} ${layout.spacingMedium} ${layout.spacingLarge}`
  },
  [`.psds-datawell.psds-theme--${themeNames.light}`]: {
    borderColor: colorsBorder.lowOnLight
  },
  '.psds-datawell__label': {
    display: 'block',
    margin: 0,
    fontSize: type.fontSize100,
    lineHeight: '16px',

    '& > div': {
      color: colorsTextIcon.lowOnDark
    }
  },
  [`.psds-datawell__label.psds-theme--${themeNames.light}`]: {
    '& > div': {
      color: colorsTextIcon.lowOnLight
    }
  },
  '.psds-datawell__data': {
    fontWeight: type.fontWeight500,
    fontSize: type.fontSize800,
    lineHeight: type.lineHeightHuge,
    color: colorsTextIcon.highOnDark,
    marginBottom: layout.spacingMedium,
    wordWrap: 'break-word'
  },
  [`.psds-datawell__data.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  '.psds-datawell__sublabel': {
    fontSize: type.fontSize100,
    lineHeight: '16px',
    color: colorsTextIcon.lowOnDark
  },
  [`.psds-datawell__sublabel.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  }
}
