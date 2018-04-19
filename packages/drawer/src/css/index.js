import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

import * as vars from '../vars'

const toggleButtonLightHover = {
  color: core.colors.gray06
}
const toggleButtonDefaultThemeHover = {
  color: core.colors.white
}

export default {
  [`.psds-drawer.psds-theme--${themeNames.light}`]: {
    borderTop: `1px solid ${core.colors.gray01}`
  },
  [`.psds-drawer.psds-theme--${themeDefaultName}`]: {
    borderTop: `1px solid ${core.colors.gray04}`
  },
  // __base
  [`.psds-drawer__base`]: {
    position: 'relative',
    paddingRight: vars.toggleAreaWidth,
    cursor: 'pointer',
    transition: `background ${core.motion.speedNormal}`
  },
  [`.psds-drawer__base:hover`]: {
    background: transparentize(0.9, core.colors.gray02)
  },
  [`.psds-drawer__base--isOpen`]: {
    background: transparentize(0.8, core.colors.gray02)
  },
  [`.psds-drawer__base--isOpen:hover`]: {
    background: transparentize(0.8, core.colors.gray02)
  },
  // __panel / __panel-content
  [`.psds-drawer__panel`]: {
    background: transparentize(0.94, core.colors.gray02),
    transition: `box-shadow ${core.motion.speedNormal}`
  },
  [`.psds-drawer__panel.psds-theme--${themeNames.light}`]: {
    boxShadow: 'inset 0 1px 3px 0 rgba(0,0,0,0.1)'
  },
  [`.psds-drawer__panel.psds-theme--${themeDefaultName}`]: {
    boxShadow: 'inset 0 1px 3px 0 rgba(0,0,0,0.5)'
  },
  [`.psds-drawer__panel-content`]: {
    marginRight: `calc(-1 * ${vars.toggleAreaWidth})`,
    paddingLeft: core.layout.spacingMedium,
    paddingRight: vars.toggleAreaWidth
  },
  // __toggle-button-container / __toggle-button
  [`.psds-drawer__toggle-button-container`]: {
    position: 'absolute',
    top: 0,
    right: core.layout.spacingMedium,
    bottom: 0,
    display: 'flex',
    alignItems: 'center'
  },
  [`.psds-drawer__toggle-button`]: {
    height: '24px',
    overflow: 'hidden',
    fontSize: core.type.fontSizeXSmall,
    padding: 0,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    transition: `all ${core.motion.speedNormal}`
  },
  [`.psds-drawer__toggle-button.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },
  [`.psds-drawer__toggle-button.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray02
  },
  [`.psds-drawer__toggle-button.psds-theme--${
    themeNames.light
  }:hover`]: toggleButtonLightHover,
  [`.psds-drawer__toggle-button.psds-theme--${
    themeNames.light
  }:active`]: toggleButtonLightHover,
  [`.psds-drawer__toggle-button.psds-theme--${themeDefaultName}:hover`]: toggleButtonDefaultThemeHover,
  [`.psds-drawer__toggle-button.psds-theme--${themeDefaultName}:active`]: toggleButtonDefaultThemeHover,
  // __rotatable
  [`.psds-drawer__rotatable`]: {
    transition: `transform ${core.motion.speedNormal}`,
    lineHeight: 0
  },
  [`.psds-drawer__rotatable--isOpen`]: {
    transform: 'rotateZ(180deg)'
  },
  // __collapsible
  [`.psds-drawer__collapsible`]: {
    overflow: 'hidden',
    visibility: 'hidden',
    transition: `height ${core.motion.speedNormal}`
  }
}
