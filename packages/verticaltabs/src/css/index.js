import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import * as core from '@pluralsight/ps-design-system-core'

export const resetButton = {
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
}

export default {
  '.psds-verticaltabs': {
    height: '100%',
    overflowY: 'auto',
    padding: `${core.layout.spacingMedium} 0`,
    listStyle: 'none',
    margin: 0
  },
  [`.psds-verticaltabs.psds-theme--${themeNames.light}`]: {
    backgroundColor: core.colors.bone
  },
  [`.psds-verticaltabs.psds-theme--${themeDefaultName}`]: {
    backgroundColor: core.colors.gray05
  },

  '.psds-verticaltabs__divider': {
    margin: `${core.layout.spacingMedium} 0`,
    borderWidth: '1px 0 0 0',
    borderStyle: 'solid'
  },
  [`.psds-verticaltabs__divider.psds-theme--${themeNames.light}`]: {
    borderColor: core.colors.gray01
  },
  [`.psds-verticaltabs__divider.psds-theme--${themeDefaultName}`]: {
    borderColor: core.colors.gray03
  },

  '.psds-verticaltabs__list': {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },

  '.psds-verticaltabs__item': {
    alignItems: 'center',
    display: 'flex',
    position: 'relative',

    '& > *': {
      ...resetButton,
      color: 'inherit',
      textDecoration: 'none',
      height: '100%',
      width: '100%'
    }
  },
  [`.psds-verticaltabs__item.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03,

    '& > a, & > button': {
      cursor: 'pointer',

      '&:focus, &:hover': {
        backgroundColor: 'rgb(225, 225, 225)',
        color: core.colors.black
      }
    }
  },
  [`.psds-verticaltabs__item.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray02,

    '& > a, & > button': {
      cursor: 'pointer',

      '&:focus, &:hover': {
        backgroundColor: core.colors.gray04,
        color: core.colors.white
      }
    }
  },

  '.psds-verticaltabs__item__icon': { marginRight: core.layout.spacingSmall },

  '.psds-verticaltabs__tier1': {
    fontSize: core.type.fontSizeSmall,
    fontWeight: core.type.fontWeightMedium,
    height: '40px',

    '&:before': {
      content: ' ',
      display: 'block',
      height: 0,
      left: 0,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '4px'
    },

    '& > *': {
      padding: `${core.layout.spacingXSmall} ${core.layout.spacingLarge}`
    },

    '&[data-active]': {
      '&:before': {
        height: `calc(100% - ${core.layout.spacingXSmall})`,
        transition: `height ${core.motion.speedNormal} ease-out`
      }
    }
  },
  [`.psds-verticaltabs__tier1.psds-theme--${themeNames.light}`]: {
    '&:before': { background: core.colors.black },
    '&[data-active]': { color: core.colors.black }
  },
  [`.psds-verticaltabs__tier1.psds-theme--${themeDefaultName}`]: {
    '&:before': { background: core.colors.white },
    '&[data-active]': { color: core.colors.white }
  },

  '.pds-verticaltabs__tier1__header': {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },

  '.psds-verticaltabs__tier2': {
    position: 'relative',

    '&:before': {
      content: ' ',
      display: 'block',
      height: '100%',
      left: '36px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      transition: `height ${core.motion.speedXFast} ease-out`,
      width: '1px'
    },

    '& > *': {
      fontSize: core.type.fontSizeXSmall,
      fontWeight: core.type.fontWeightBook,
      marginLeft: '35px',
      minHeight: '32px',
      padding: `${core.layout.spacingXSmall} ${core.layout.spacingLarge}`,
      textAlign: 'left'
    }
  },
  [`.psds-verticaltabs__tier2.psds-theme--${themeNames.light}`]: {
    '&:before': { background: core.colors.gray01 },
    '&[data-active]': {
      color: core.colors.black,

      '&:before': { background: core.colors.black }
    }
  },
  [`.psds-verticaltabs__tier2.psds-theme--${themeDefaultName}`]: {
    '&:before': { background: core.colors.gray03 },

    '&[data-active]': {
      color: core.colors.white,
      '&:before': { background: core.colors.white }
    }
  },

  '.pds-verticaltabs__tier2__header': {
    display: 'block',
    overflowWrap: 'break-word',
    width: '100%'
  },

  '.psds-verticaltabs__group__header': {
    alignItems: 'center',
    display: 'flex',
    fontSize: '11px',
    fontWeight: core.type.fontWeightBold,
    textTransform: 'uppercase',

    '& > a, & > button, & > span': {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'space-between',
      padding: `${core.layout.spacingSmall} ${core.layout.spacingLarge}`,
      textAlign: 'left',
      textTransform: 'inherit',
      width: '100%'
    }
  },
  [`.psds-verticaltabs__group__header.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },
  [`.psds-verticaltabs__group__header.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray02
  },

  '.psds-verticaltabs__header__label': {
    lineHeight: '1em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  '.psds-verticaltabs__group__button': { ...resetButton, cursor: 'pointer' },

  '.psds-verticaltabs__group__collapsible-list': {
    overflow: 'hidden',
    transition: `height ${core.motion.speedNormal}`,
    visibility: 'hidden'
  },

  [`.psds-verticaltabs__rotatable`]: {
    flexGrow: 0,
    transform: 'translateX(10px)',
    transition: `transform ${core.motion.speedNormal}`
  },

  [`.psds-verticaltabs__rotatable--isOpen`]: {
    transform: 'translateX(10px) rotateZ(180deg)'
  }
}
