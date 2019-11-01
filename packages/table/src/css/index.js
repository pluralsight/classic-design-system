import * as core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import { vars as drawerVars } from '@pluralsight/ps-design-system-drawer'

import * as vars from '../vars'

export default {
  '.psds-table': {
    width: '100%',
    fontWeight: core.type.fontWeightBook,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightTight
  },
  '.psds-table--in-drawer': {
    paddingLeft: core.layout.spacingMedium,
    paddingRight: drawerVars.toggleAreaWidth
  },
  [`.psds-table.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray02
  },
  [`.psds-table.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },

  // __row
  '.psds-table__row': {
    width: '100%',
    display: 'flex',
    borderTop: `1px solid ${core.colors.gray04}`,

    '&:first-of-type': { borderTop: 'none' }
  },
  [`.psds-table__row--${themeNames.light}`]: {
    borderTop: `1px solid ${core.colors.gray01}`
  },
  '.psds-table__row--drawers': {
    paddingLeft: core.layout.spacingMedium,
    paddingRight: drawerVars.toggleAreaWidth
  },

  // __cell
  '.psds-table__cell': {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: `${core.layout.spacingSmall} calc(${core.layout.spacingMedium} / 2)`,
    overflow: 'hidden',

    '&:first-of-type': { paddingLeft: 0 },
    '&:last-of-type': { paddingRight: 0 },

    '& a': {
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',

      '&:active, &:focus, &:hover': {
        color: core.colors.white,
        textDecoration: 'underline',
        transition: `all ${core.motion.speedNormal}`
      }
    }
  },

  [`.psds-table__cell.psds-theme--${themeNames.light}`]: {
    '& a': {
      '&:active, &:focus, &:hover': {
        color: core.colors.black
      }
    }
  },

  '.psds-table__cell--emphasis': {
    color: core.colors.white,
    fontWeight: core.type.fontWeightMedium
  },
  [`.psds-table__cell--emphasis.psds-theme--${themeNames.light}`]: {
    color: core.colors.black
  },
  [`.psds-table__cell--align-${vars.aligns.left}`]: {
    justifyContent: 'left',
    textAlign: 'left'
  },
  [`.psds-table__cell--align-${vars.aligns.right}`]: {
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
  [`.psds-table__cell--align-${vars.aligns.center}`]: {
    justifyContent: 'center',
    textAlign: 'center'
  },

  // __column-header
  '.psds-table__column-header': {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    padding: `${core.layout.spacingSmall} calc(${core.layout.spacingMedium} / 2)`,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    textTransform: 'uppercase',
    border: 'none',
    background: 'none',
    color: core.colors.gray02,

    '&:first-of-type': { paddingLeft: 0 },
    '&:last-of-type': { paddingRight: 0 }
  },
  [`.psds-table__column-header.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },
  [`.psds-table__column-header--align-${vars.aligns.left}`]: {
    justifyContent: 'left',
    textAlign: 'left'
  },
  [`.psds-table__column-header--align-${vars.aligns.right}`]: {
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
  [`.psds-table__column-header--align-${vars.aligns.center}`]: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  '.psds-table__column-header--active': {
    color: core.colors.white
  },
  [`.psds-table__column-header--active.psds-theme--${themeNames.light}`]: {
    color: core.colors.black
  },
  '.psds-table__column-header--onclick': {
    '&:hover': {
      color: core.colors.white,
      cursor: 'pointer'
    }
  },
  [`.psds-table__column-header--onclick.psds-theme--${themeNames.light}`]: {
    '&:hover': {
      color: core.colors.black,
      cursor: 'pointer'
    }
  },

  '.psds-table__column-header__icon': {
    position: 'relative',
    flexShrink: '0',
    bottom: `calc(-1 * (${core.layout.spacingSmall} - ${core.layout.spacingXSmall}))`
  }
}
