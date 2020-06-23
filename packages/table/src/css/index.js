import {
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
import { toggleAreaWidth } from '@pluralsight/ps-design-system-drawer'

import * as vars from '../vars/index.js'

export default {
  '.psds-table': {
    width: '100%',
    fontWeight: type.fontWeightBook,
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightTight
  },
  '.psds-table--in-drawer': {
    paddingLeft: layout.spacingMedium,
    paddingRight: toggleAreaWidth
  },
  [`.psds-table.psds-theme--${themeDefaultName}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-table.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  // __row
  '.psds-table__row': {
    width: '100%',
    display: 'flex',
    borderTop: `1px solid ${colorsBorder.lowOnDark}`,

    '&:first-of-type': { borderTop: 'none' }
  },
  [`.psds-table__row.psds-theme--${themeNames.light}`]: {
    borderTop: `1px solid ${colorsBorder.lowOnLight}`
  },
  '.psds-table__row--drawers': {
    paddingLeft: layout.spacingMedium,
    paddingRight: toggleAreaWidth
  },

  // __cell
  '.psds-table__cell': {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: `${layout.spacingSmall} calc(${layout.spacingMedium} / 2)`,
    overflow: 'hidden',

    '&:first-of-type': { paddingLeft: 0 },
    '&:last-of-type': { paddingRight: 0 },

    '& a': {
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',

      '&:active, &:focus, &:hover': {
        textDecoration: 'underline',
        transition: `all ${motion.speedNormal}`
      }
    }
  },

  '.psds-table__cell--emphasis': {
    fontWeight: type.fontWeightMedium
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
    padding: `${layout.spacingSmall} calc(${layout.spacingMedium} / 2)`,
    fontSize: type.fontSizeXSmall,
    lineHeight: '16px',
    textTransform: 'uppercase',
    border: 'none',
    background: 'none',
    color: colorsTextIcon.lowOnDark,

    '&:first-of-type': { paddingLeft: 0 },
    '&:last-of-type': { paddingRight: 0 }
  },
  '.psds-table__column-header__button': {
    background: 'inherit',
    border: 'none',
    margin: 0,
    padding: 0,
    overflow: 'visible',
    color: 'inherit',
    font: 'inherit',
    lineHeight: 'inherit',
    display: 'block',
    width: '100%',
    textTransform: 'inherit'
  },
  '.psds-table__column-header__button-inner': {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end'
  },
  [`.psds-table__column-header.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
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
    color: colorsTextIcon.highOnDark
  },
  [`.psds-table__column-header--active.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },
  '.psds-table__column-header--onclick': {
    '&:hover': {
      color: colorsTextIcon.highOnDark,
      cursor: 'pointer'
    }
  },
  [`.psds-table__column-header--onclick.psds-theme--${themeNames.light}`]: {
    '&:hover': {
      color: colorsTextIcon.highOnLight,
      cursor: 'pointer'
    }
  },

  '.psds-table__column-header__icon': {
    position: 'relative',
    flexShrink: '0',
    bottom: `calc(-1 * (${layout.spacingSmall} - ${layout.spacingXSmall}))`
  }
}
