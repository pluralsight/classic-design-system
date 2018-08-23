import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'
import * as iconVars from '@pluralsight/ps-design-system-icon/vars'

export default {
  '.psds-error-page': {
    maxWidth: '500px',
    margin: '0 auto',
    padding: `${core.layout.spacingXLarge} ${core.layout.spacingLarge}`,
    textAlign: 'center',
    color: core.colors.white
  },
  [`.psds-error-page.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray06
  },

  // __icon
  '.psds-error-page__icon': {
    margin: '0 auto',
    fill: 'currentColor',
    height: '128px',
    width: '128px'
  },
  [`.psds-error-page__icon.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray04
  },

  // __code
  '.psds-error-page__code': {
    padding: `4px 0 ${core.layout.spacingSmall} 0`
  },

  // __search
  '.psds-error-page__search': {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    color: core.colors.gray02
  },
  [`.psds-error-page__search.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    color: core.colors.gray03
  },
  '.psds-error-page__search__icon': {
    position: 'absolute',
    left: core.layout.spacingXSmall,
    width: iconVars.widths.medium,
    height: iconVars.widths.medium,
    fill: core.colors.gray02
  },
  '.psds-error-page__search__input': {
    position: 'relative',
    height: '40px',
    padding: `0 ${core.layout.spacingXSmall} 0 calc(${
      core.layout.spacingXSmall
    } + ${iconVars.widths.medium} + ${core.layout.spacingXSmall})`,
    color: core.colors.gray02,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    background: 'none',
    border: `1px solid ${core.colors.gray03}`,
    borderRadius: '2px'
  },
  [`.psds-error-page__search__input.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },

  '@media (min-width: 769px)': {
    '.psds-error-page': {
      paddingTop: '92px'
    },

    // __text > h1
    '.psds-error-page__text > h1': {
      fontSize: core.type.fontSizeLarge,
      lineHeight: core.type.lineHeightExtra,
      fontWeight: core.type.fontWeightBook
    }
  }
}
