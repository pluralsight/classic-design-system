import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import { vars as drawerVars } from '@pluralsight/ps-design-system-drawer'

import * as vars from '../vars'

const cellAHover = {
  color: core.colors.white,
  textDecoration: 'underline',
  transition: `all ${core.motion.speedNormal}`
}
const cellAHoverLight = {
  color: core.colors.black
}

export default {
  '.psds-table': {
    width: '100%',
    fontWeight: core.type.fontWeightBook,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard
  },
  [`.psds-table.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray02
  },
  [`.psds-table.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },

  // __row
  '.psds-table__row': {
    display: 'flex',
    borderTop: `1px solid ${core.colors.gray04}`
  },
  '.psds-table__row:first-of-type': {
    borderTop: 'none'
  },
  '.psds-table__row--drawers': {
    paddingLeft: core.layout.spacingMedium,
    paddingRight: drawerVars.toggleAreaWidth
  },

  // __cell
  '.psds-table__cell': {
    flex: 1,
    padding: `${core.layout.spacingSmall} calc(${
      core.layout.spacingMedium
    } / 2)`
  },
  '.psds-table__cell:first-of-type': {
    paddingLeft: 0
  },
  '.psds-table__cell:last-of-type': {
    paddingRight: 0
  },
  '.psds-table__cell--emphasis': {
    color: core.colors.white,
    fontWeight: core.type.fontWeightMedium
  },
  [`.psds-table__cell--emphasis.psds-theme--${themeNames.light}`]: {
    color: core.colors.black
  },
  [`.psds-table__cell--align-${vars.cellAligns.left}`]: {
    textAlign: 'left'
  },
  [`.psds-table__cell--align-${vars.cellAligns.right}`]: {
    textAlign: 'right'
  },
  [`.psds-table__cell--align-${vars.cellAligns.center}`]: {
    textAlign: 'center'
  },
  '.psds-table__cell a': {
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  '.psds-table__cell a:hover': cellAHover,
  '.psds-table__cell a:active': cellAHover,
  [`.psds-table__cell.psds-theme--${
    themeNames.light
  } a:hover`]: cellAHoverLight,
  [`.psds-table__cell.psds-theme--${
    themeNames.light
  } a:active`]: cellAHoverLight,

  // __column-header
  '.psds-table__column-header': {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    padding: `${core.layout.spacingSmall} calc(${
      core.layout.spacingMedium
    } / 2) ${core.layout.spacingXSmall} calc(${core.layout.spacingMedium} / 2)`,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    textTransform: 'uppercase'
  },
  '.psds-table__column-header:first-of-type': {
    paddingLeft: 0
  },
  '.psds-table__column-header:last-of-type': {
    paddingRight: 0
  },
  '.psds-table__column-header--onclick': {
    color: core.colors.white
  },
  [`.psds-table__column-header--onclick.psds-theme--${themeNames.light}`]: {
    color: core.colors.black
  },
  '.psds-table__column-header--onclick:hover': {
    color: core.colors.white,
    cursor: 'pointer'
  },
  [`.psds-table__column-header--onclick.psds-theme--${
    themeNames.light
  }:hover`]: {
    color: core.colors.black,
    cursor: 'pointer'
  },
  ['.psds-table__column-header__text']: {
    paddingBottom: `calc(${core.layout.spacingSmall} - ${
      core.layout.spacingXSmall
    })`
  }
}
