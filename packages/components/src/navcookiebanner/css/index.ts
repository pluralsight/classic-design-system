import { colorsBackgroundDark, colorsTextIcon, layout, type } from '../../core'

export default {
  '.psds-navcookiebanner': {
    alignItems: 'center',
    background: colorsBackgroundDark[3],
    borderRadius: 2,
    bottom: layout.spacingSmall,
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.65)',
    color: colorsTextIcon.highOnDark,
    display: 'flex',
    fontSize: type.fontSize100,
    fontWeight: type.fontWeight500,
    justifyContent: 'center',
    left: layout.spacingSmall,
    lineHeight: type.lineHeightTight,
    paddingBottom: layout.spacingXSmall,
    paddingLeft: layout.spacingMedium,
    paddingRight: layout.spacingXSmall,
    paddingTop: layout.spacingXSmall,
    position: 'fixed',
    right: layout.spacingSmall,
    zIndex: 1002,

    '& a': {
      color: 'inherit',
      textDecoration: 'underline',

      '&:visited': { color: 'inherit' }
    }
  },

  '.psds-navcookiebanner__message': {
    flexGrow: 1,
    marginBottom: 0,
    marginRight: layout.spacingSmall
  },
  '.psds-navcookiebanner__dismiss': {
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    color: 'inherit',
    font: 'inherit',
    lineHeight: 'normal',
    margin: 0,
    overflow: 'visible',
    padding: 0,
    width: 'auto',

    MozOsxFontSmoothing: 'inherit',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'inherit',

    '&::-moz-focus-inner': {
      border: 0,
      padding: 0
    }
  },

  '@media (min-width: 769px)': {
    '.psds-navcookiebanner': {
      right: 'auto'
    }
  },
  '@media print': {
    '.psds-navcookiebanner': {
      display: 'none'
    }
  }
}
