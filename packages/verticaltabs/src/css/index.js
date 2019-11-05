import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import * as core from '@pluralsight/ps-design-system-core'

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
    margin: `${core.layout.spacingXSmall} 0`,
    borderWidth: '1px 0 0 0',
    borderStyle: 'solid'
  },
  [`.psds-verticaltabs__divider.psds-theme--${themeNames.light}`]: {
    borderColor: core.colors.gray01
  },
  [`.psds-verticaltabs__divider.psds-theme--${themeDefaultName}`]: {
    borderColor: core.colors.gray03
  },
  '.psds-verticaltabs__item': {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center'
  },
  '.psds-verticaltabs__tier1': {
    lineHeight: '24px',
    fontSize: core.type.fontSizeSmall,
    fontWeight: core.type.fontWeightMedium,
    paddingLeft: '20px',
    paddingRight: '24px',
    borderLeftWidth: '4px',
    borderLeftStyle: 'solid',
    borderLeftColor: 'transparent',
    height: '40px'
  },
  [`.psds-verticaltabs__tier1.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray04,
    '&[data-active]': {
      color: core.colors.gray06,
      borderLeftColor: core.colors.gray04
    }
  },
  [`.psds-verticaltabs__tier1.psds-theme--${themeDefaultName}`]: {
    color: core.colors.bone,
    '&[data-active]': {
      color: core.colors.white,
      borderLeftColor: core.colors.white
    }
  },
  '.pds-verticaltabs__tier1__header': {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  '.pds-verticaltabs__header__label': {
    lineHeight: 'inherit',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  '.psds-verticaltabs__tier2': {
    lineHeight: '16px',
    marginLeft: '35px',
    paddingLeft: '20px',
    paddingRight: '24px',
    fontSize: core.type.fontSizeXSmall,
    fontWeight: core.type.fontWeightBook,
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    minHeight: '32px'
  },
  [`.psds-verticaltabs__tier2.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03,
    borderLeftColor: core.colors.gray01,
    '&[data-active]': {
      color: core.colors.gray06,
      borderLeftColor: core.colors.gray04
    }
  },
  [`.psds-verticaltabs__tier2.psds-theme--${themeDefaultName}`]: {
    color: core.colors.bone,
    borderLeftColor: core.colors.gray03,
    '&[data-active]': {
      color: core.colors.white,
      borderLeftColor: core.colors.white
    }
  },
  '.pds-verticaltabs__tier2__header': {
    display: 'block',
    overflowWrap: 'break-word',
    width: '100%'
  },
  '.psds-verticaltabs__item__icon': {
    flex: 'none',
    marginRight: core.layout.spacingSmall
  },
  [`.psds-verticaltabs__item__icon.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03,
    '&[data-active]': {
      color: core.colors.gray06
    }
  },
  [`.psds-verticaltabs__item__icon.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray01,
    '&[data-active]': {
      color: core.colors.bone
    }
  },
  '.psds-verticaltabs__item__link': {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'inherit',
    font: 'inherit'
  },
  '.psds-verticaltabs__button': {
    background: 'transparent',
    border: 'none',
    color: 'inherit',
    font: 'inherit',
    margin: 0,
    padding: 0,
    width: 'auto',
    MozOsxFontSmoothing: 'inherit',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'inherit',
    cursor: 'pointer',
    '&::-moz-focus-inner': {
      border: 0,
      padding: 0
    }
  },
  '.psds-verticaltabs__item__span': {
    color: 'inherit',
    font: 'inherit',
    margin: 0
  },
  '.psds-verticaltabs__group__header': {
    textTransform: 'uppercase',
    fontSize: '11px',
    lineHeight: '16px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: core.type.fontWeightBold,
    padding: `0 ${core.layout.spacingLarge}`
  },
  [`.psds-verticaltabs__group__header.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },
  [`.psds-verticaltabs__group__header.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray02
  },
  '.psds-verticaltabs__group__button': {
    width: '100%',
    textTransform: 'inherit'
  },
  '.psds-verticaltabs__button__inner': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  '.psds-verticaltabs__list': {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  '.psds-verticaltabs__group__collapsible-list': {
    overflow: 'hidden',
    visibility: 'hidden',
    transition: `height ${core.motion.speedNormal}`
  },
  [`.psds-verticaltabs__rotatable`]: {
    transition: `transform ${core.motion.speedNormal}`,
    lineHeight: 0
  },
  [`.psds-verticaltabs__rotatable--isOpen`]: {
    transform: 'rotateZ(180deg)'
  }
}
