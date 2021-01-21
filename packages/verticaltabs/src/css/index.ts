import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import {
  colorsBorder,
  colorsBackgroundUtility,
  colorsPrimaryAction,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'

const resetButton = {
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

const truncate = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

export default {
  '.psds-verticaltabs': {
    height: '100%',
    overflowY: 'auto',
    padding: `${layout.spacingMedium} 0`,
    listStyle: 'none',
    margin: 0
  },

  '.psds-verticaltabs__divider': {
    margin: `${layout.spacingMedium} 0`,
    borderWidth: '1px 0 0 0',
    borderStyle: 'solid'
  },
  [`.psds-verticaltabs__divider.psds-theme--${themeNames.light}`]: {
    borderColor: colorsBorder.lowOnLight
  },
  [`.psds-verticaltabs__divider.psds-theme--${themeDefaultName}`]: {
    borderColor: colorsBorder.lowOnDark
  },

  '.psds-verticaltabs__list': {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  '.psds-verticaltabs__list--collapsible': {
    overflow: 'hidden',
    transition: `height ${motion.speedNormal}`,
    visibility: 'hidden'
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
    color: colorsTextIcon.lowOnLight,

    '& > a, & > button': {
      cursor: 'pointer',

      '&:focus, &:hover': {
        backgroundColor: colorsBackgroundUtility[25],
        color: colorsTextIcon.highOnLight
      }
    }
  },
  [`.psds-verticaltabs__item.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark,

    '& > a, & > button': {
      cursor: 'pointer',

      '&:focus, &:hover': {
        backgroundColor: colorsBackgroundUtility[25],
        color: colorsTextIcon.highOnDark
      }
    }
  },

  '.psds-verticaltabs__item__icon': {
    flexShrink: 0,
    marginRight: layout.spacingSmall
  },

  '.psds-verticaltabs__tier1': {
    fontSize: type.fontSize200,
    fontWeight: type.fontWeightMedium,
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
      padding: `${layout.spacingXSmall} ${layout.spacingLarge}`
    },

    '&[data-active]': {
      '&:before': {
        height: `calc(100% - ${layout.spacingXSmall})`,
        transition: `height ${motion.speedNormal} ease-out`
      }
    }
  },
  [`.psds-verticaltabs__tier1.psds-theme--${themeNames.light}`]: {
    '&:before': { background: colorsPrimaryAction.background },
    '&[data-active]': { color: colorsTextIcon.highOnLight }
  },
  [`.psds-verticaltabs__tier1.psds-theme--${themeDefaultName}`]: {
    '&:before': { background: colorsPrimaryAction.background },
    '&[data-active]': { color: colorsTextIcon.highOnDark }
  },

  '.psds-verticaltabs__tier1__header': {
    alignItems: 'center',
    display: 'flex',
    transition: `color ${motion.speedXFast} linear`,
    width: '100%',

    '& > span': { ...truncate }
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
      transition: `height ${motion.speedXFast} linear`,
      width: '1px'
    },

    '& > *': {
      ...truncate,
      fontSize: type.fontSize100,
      fontWeight: type.fontWeightBook,
      marginLeft: '37px',
      minHeight: '32px',
      padding: `${layout.spacingXSmall} ${layout.spacingLarge}`,
      textAlign: 'left'
    }
  },
  [`.psds-verticaltabs__tier2.psds-theme--${themeNames.light}`]: {
    '&:before': { background: colorsBorder.lowOnLight },
    '&[data-active]': {
      color: colorsTextIcon.highOnLight,

      '&:before': { background: colorsPrimaryAction.background }
    }
  },
  [`.psds-verticaltabs__tier2.psds-theme--${themeDefaultName}`]: {
    '&:before': { background: colorsBorder.lowOnDark },

    '&[data-active]': {
      color: colorsTextIcon.highOnDark,
      '&:before': { background: colorsPrimaryAction.background }
    }
  },

  '.psds-verticaltabs__tier2__header': {
    transition: `color ${motion.speedXFast} ease-out`
  },

  '.psds-verticaltabs__group__header': {
    alignItems: 'center',
    display: 'flex',
    fontSize: '11px',
    fontWeight: type.fontWeightBold,
    textTransform: 'uppercase',

    '& > a, & > button, & > div': {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'space-between',
      padding: `${layout.spacingSmall} ${layout.spacingLarge}`,
      textAlign: 'left',
      textTransform: 'inherit',
      width: '100%'
    }
  },
  '.psds-verticaltabs__group__header__inner': {},
  [`.psds-verticaltabs__group__header.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  [`.psds-verticaltabs__group__header.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark
  },

  '.psds-verticaltabs__header__label': {
    ...truncate,
    flex: 1,
    textAlign: 'left'
  },

  '.psds-verticaltabs__header__label--hide-labels': {
    color: 'transparent'
  },

  '.psds-verticaltabs__header__label__icon': {
    flexShrink: 0,
    flexGrow: 0,
    transform: 'translateX(10px) rotateZ(180deg)',
    transition: `transform ${motion.speedNormal} linear`
  },

  '.psds-verticaltabs__header__label__icon--collapsed': {
    transform: 'translateX(10px)'
  },

  '.psds-verticaltabs__group__button': { ...resetButton, cursor: 'pointer' },

  '.psds-verticaltabs__group__collapsible-list': {
    overflow: 'hidden',
    transition: `height ${motion.speedNormal}`,
    visibility: 'hidden'
  },

  [`.psds-verticaltabs__rotatable`]: {
    flexShrink: 0,
    flexGrow: 0,
    transform: 'translateX(10px)',
    transition: `transform ${motion.speedNormal}`
  },

  [`.psds-verticaltabs__rotatable--isOpen`]: {
    transform: 'translateX(10px) rotateZ(180deg)'
  }
}
