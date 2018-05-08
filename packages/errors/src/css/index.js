import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'

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
    display: 'inline-flex',
    alignItems: 'center',
    border: `1px solid ${core.colors.gray03}`,
    borderRadius: '2px',
    padding: `0 ${core.layout.spacingXSmall}`,
    color: core.colors.gray02
  },
  '.psds-error-page__search__input': {
    height: '40px',
    color: core.colors.gray02,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    background: 'none',
    border: 'none',
    marginLeft: core.layout.spacingSmall
  },

  '@media (min-width: 769px)': {
    '.psds-error-page': {
      paddingTop: '92px'
    },

    // __text > h1
    '.psds-error-page__text > h1': {
      fontSize: core.type.fontSizeLarge,
      lineHeight: core.type.lineHeightExtra
    }
  }
}
