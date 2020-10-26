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
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars'

export default {
  [`.psds-drawer.psds-theme--${themeNames.light}`]: {
    borderTop: `1px solid ${colorsBorder.lowOnLight}`
  },
  [`.psds-drawer.psds-theme--${themeDefaultName}`]: {
    borderTop: `1px solid ${colorsBorder.lowOnDark}`
  },

  // __base
  [`.psds-drawer__base`]: {
    position: 'relative',
    paddingRight: vars.toggleAreaWidth,
    cursor: 'pointer',
    transition: `background ${motion.speedNormal}`,

    [`&:hover`]: {
      background: colorsBackgroundUtility[25]
    }
  },
  [`.psds-drawer__base--isOpen`]: {
    background: colorsBackgroundUtility[25],

    [`&:hover`]: {
      background: colorsBackgroundUtility[25]
    }
  },

  // __panel / __panel-content
  [`.psds-drawer__panel`]: {
    background: colorsBackgroundDark[2],
    transition: `box-shadow ${motion.speedNormal}`
  },
  [`.psds-drawer__panel.psds-theme--${themeNames.light}`]: {
    background: colorsBackgroundLight[2],
    boxShadow: 'inset 0 1px 3px 0 rgba(0,0,0,0.1)'
  },
  [`.psds-drawer__panel.psds-theme--${themeDefaultName}`]: {
    boxShadow: 'inset 0 1px 3px 0 rgba(0,0,0,0.5)'
  },
  [`.psds-drawer__panel-content`]: {
    marginRight: `calc(-1 * ${vars.toggleAreaWidth})`,
    paddingLeft: layout.spacingMedium,
    paddingRight: vars.toggleAreaWidth
  },

  // __toggle-button-container / __toggle-button
  [`.psds-drawer__toggle-button-container`]: {
    position: 'absolute',
    top: 0,
    right: layout.spacingMedium,
    bottom: 0,
    display: 'flex',
    alignItems: 'center'
  },
  [`.psds-drawer__toggle-button`]: {
    height: '24px',
    overflow: 'hidden',
    fontSize: type.fontSizeXSmall,
    padding: 0,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    transition: `all ${motion.speedNormal}`
  },
  [`.psds-drawer__toggle-button.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight,

    [`&:hover, &:active`]: {
      color: colorsTextIcon.highOnLight
    }
  },
  [`.psds-drawer__toggle-button.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.lowOnDark,

    [`&:hover, &:active`]: {
      color: colorsTextIcon.highOnDark
    }
  },

  // __rotatable
  [`.psds-drawer__rotatable`]: {
    transition: `transform ${motion.speedNormal}`,
    lineHeight: 0
  },
  [`.psds-drawer__rotatable--isOpen`]: {
    transform: 'rotateZ(180deg)'
  },

  // __collapsible
  [`.psds-drawer__collapsible`]: {
    overflow: 'hidden',
    visibility: 'hidden',
    transition: `height ${motion.speedNormal}`
  }
}
