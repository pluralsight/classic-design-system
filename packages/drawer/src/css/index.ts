import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsBackgroundUtility,
  colorsBorder,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

export default {
  [`.psds-drawer__summary.psds-theme--${themeNames.light}`]: {
    borderTop: `1px solid ${colorsBorder.lowOnLight}`,
    color: colorsTextIcon.lowOnLight,
    [`&:hover, &:active`]: {
      color: colorsTextIcon.highOnLight
    }
  },
  [`.psds-drawer__summary.psds-theme--${themeNames.dark}`]: {
    borderTop: `1px solid ${colorsBorder.lowOnDark}`,
    color: colorsTextIcon.lowOnDark,
    [`&:hover, &:active`]: {
      color: colorsTextIcon.highOnDark
    }
  },
  '.psds-drawer__summary': {
    display: 'inline-flex',
    width: '100%',
    overflow: 'hidden',
    fontSize: type.fontSizeXSmall,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    alignItems: 'center',
    transition: `all ${motion.speedNormal}`,
    padding: `${layout.spacingSmall} ${layout.spacingMedium}`,
    [`&:hover`]: {
      background: colorsBackgroundUtility[25]
    }
  },
  '.psds-drawer__summary.psds-drawer--isOpen': {
    background: colorsBackgroundUtility[25],
    [`&:hover`]: {
      background: colorsBackgroundUtility[25]
    }
  },
  '.psds-drawer__details': {
    background: colorsBackgroundDark[2],
    transition: `all ${motion.speedNormal}`
  },
  [`.psds-drawer__details.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundLight[2],
    boxShadow: 'inset 0 1px 3px 0 rgba(0,0,0,0.1)'
  },
  [`.psds-drawer__details.psds-theme--${themeNames.dark}`]: {
    boxShadow: 'inset 0 1px 3px 0 rgba(0,0,0,0.5)'
  },
  '.psds-drawer__icon-slot': {
    display: 'inline-block',
    paddingLeft: layout.spacingSmall,
    marginLeft: 'auto'
  },
  [`.psds-drawer__rotatable`]: {
    transition: `transform ${motion.speedNormal}`
  },
  [`.psds-drawer__rotatable.psds-drawer--isOpen`]: {
    transform: 'rotateZ(180deg)'
  }
}
