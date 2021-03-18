import {
  colorsBackgroundUtility,
  colorsWhite,
  layout
} from '@pluralsight/ps-design-system-core'

export default {
  '.psds-navbrand': {
    display: 'flex',
    alignItems: 'center',
    padding: layout.spacingXSmall,
    borderRadius: '2px',
    height: '40px'
  },
  // TODO: handle hover and focus
  '.psds-navbrand--clickable': {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    textDecoration: 'none',

    '&:hover, &:focus': {
      background: `rgba(${colorsBackgroundUtility.base}, 0.15)`
    },
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      background: `rgba(${colorsBackgroundUtility.base}, 0.25)`
    }
  },
  '.psds-navbrand__logo': {
    height: '24px',
    width: '24px',

    '& svg': {
      height: '100%',
      width: '100%'
    }
  },
  '.psds-navbrand__wordmark': {
    display: 'none',
    lineHeight: 0,
    color: colorsWhite,
    fontWeight: 900,
    fontSize: '20px',
    letterSpacing: '-.03em',
    whiteSpace: 'nowrap'
  },
  '@media (min-width: 1200px)': {
    '.psds-navbrand__logo--wordmark': {
      marginRight: layout.spacingXSmall
    },
    '.psds-navbrand__wordmark': {
      display: 'block'
    }
  }
}
