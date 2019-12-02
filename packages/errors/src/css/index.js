import {colors, layout, type} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'

export default {
  '.psds-error-page': {
    maxWidth: '500px',
    margin: '0 auto',
    padding: `${layout.spacingXLarge} ${layout.spacingLarge}`,
    textAlign: 'center',
    color: colors.white
  },
  [`.psds-error-page.psds-theme--${themeNames.light}`]: {
    color: colors.gray06
  },

  // __icon
  '.psds-error-page__icon': {
    margin: '0 auto',
    fill: 'currentColor',
    height: '128px',
    width: '128px'
  },
  [`.psds-error-page__icon.psds-theme--${themeNames.light}`]: {
    color: colors.gray04
  },

  // __code
  '.psds-error-page__code': {
    padding: `4px 0 ${layout.spacingSmall} 0`
  },

  // __search
  '.psds-error-page__search': {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    color: colors.gray02
  },
  [`.psds-error-page__search.psds-theme--${themeNames.light}`]: {
    background: colors.white,
    color: colors.gray03
  },
  '.psds-error-page__search__icon': {
    position: 'absolute',
    left: layout.spacingXSmall,
    width: iconWidths.medium,
    height: iconWidths.medium,
    fill: colors.gray02
  },
  '.psds-error-page__search__input': {
    position: 'relative',
    height: '40px',
    padding: `0 ${layout.spacingXSmall} 0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall})`,
    color: colors.gray02,
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightStandard,
    background: 'none',
    border: `1px solid ${colors.gray03}`,
    borderRadius: '2px'
  },
  [`.psds-error-page__search__input.psds-theme--${themeNames.light}`]: {
    color: colors.gray03
  },

  '@media (min-width: 769px)': {
    '.psds-error-page': {
      paddingTop: '92px'
    },

    // __text > h1
    '.psds-error-page__text > h1': {
      fontSize: type.fontSizeLarge,
      lineHeight: type.lineHeightExtra,
      fontWeight: type.fontWeightBook
    }
  }
}
