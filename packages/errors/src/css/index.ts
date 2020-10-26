import {
  colorsBorder,
  colorsTextIcon,
  colorsWhite,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'

export default {
  '.psds-error-page': {
    maxWidth: '500px',
    margin: '0 auto',
    padding: `${layout.spacingXLarge} ${layout.spacingLarge}`,
    textAlign: 'center',
    color: colorsTextIcon.highOnDark
  },
  [`.psds-error-page.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __icon
  '.psds-error-page__icon': {
    margin: '0 auto',
    fill: 'currentColor',
    height: '128px',
    width: '128px'
  },
  [`.psds-error-page__icon.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __code
  '.psds-error-page__code': {
    padding: `4px 0 ${layout.spacingSmall} 0`,
    '& > h2': {
      color: colorsTextIcon.lowOnDark
    }
  },
  [`.psds-error-page__code.psds-theme--${themeNames.light}`]: {
    '& > h2': {
      color: colorsTextIcon.lowOnLight
    }
  },

  // __search
  '.psds-error-page__search': {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center'
  },
  [`.psds-error-page__search.psds-theme--${themeNames.light}`]: {
    background: colorsWhite,
    color: colorsTextIcon.lowOnLight
  },
  '.psds-error-page__search__icon': {
    position: 'absolute',
    left: layout.spacingXSmall,
    width: iconWidths.medium,
    height: iconWidths.medium,
    fill: colorsTextIcon.lowOnDark
  },
  [`.psds-error-page__search__icon.psds-theme--${themeNames.light}`]: {
    fill: colorsTextIcon.lowOnLight
  },
  '.psds-error-page__search__input': {
    position: 'relative',
    height: '40px',
    padding: `0 ${layout.spacingXSmall} 0 calc(${layout.spacingXSmall} + ${iconWidths.medium} + ${layout.spacingXSmall})`,
    color: colorsTextIcon.lowOnDark,
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightStandard,
    background: 'none',
    border: `1px solid ${colorsBorder.highOnDark}`,
    borderRadius: '2px'
  },
  [`.psds-error-page__search__input.psds-theme--${themeNames.light}`]: {
    border: `1px solid ${colorsBorder.highOnLight}`,
    color: colorsTextIcon.lowOnLight
  },

  '@media (min-width: 769px)': {
    '.psds-error-page': {
      paddingTop: '92px'
    },

    '.psds-error-page__text': {
      '& > h1': {
        fontSize: type.fontSizeLarge,
        fontWeight: type.fontWeightBook,
        lineHeight: type.lineHeightExtra
      }
    }
  }
}
