import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsBorder,
  colorsTextIcon,
  layout,
  motion,
  type
} from '../../core'
import { themeNames } from '../../theme'

import { alignments } from '../vars/index'

const cellPadding = `${layout.spacingXSmall} ${layout.spacingSmall}`

const dark = {
  className: `.psds-theme--${themeNames.dark}`,

  // NOTE: should be using colorsBorder.lowOnDark but border collapse used with
  //       a transparent color causes weird multi-shade borders
  borderColor: '#343434',
  rowHoverColor: colorsBackgroundDark[2],
  rowSelectedColor: colorsBackgroundDark[2],
  stickyBgColor: colorsBackgroundDark[1],
  textColor: colorsTextIcon.highOnDark,
  textHeadingColor: colorsTextIcon.lowOnDark,
  textHeadingColorHover: colorsTextIcon.highOnDark
}

const light = {
  className: `.psds-theme--${themeNames.light}`,

  // NOTE: should be using colorsBorder.lowOnLight but border collapse used with
  //       a transparent color causes weird multi-shade borders
  borderColor: '#D9D9D9',
  rowHoverColor: colorsBackgroundLight[2],
  rowSelectedColor: colorsBackgroundLight[1],
  stickyBgColor: colorsBackgroundLight[3],
  textColor: colorsTextIcon.highOnLight,
  textHeadingColor: colorsTextIcon.lowOnLight,
  textHeadingColorHover: colorsTextIcon.highOnLight
}

export default {
  '.psds-table__container': {
    label: 'table__container',

    maxHeight: '100%',
    maxWidth: '100%',
    marginBottom: layout.spacingMedium
  },

  '.psds-table__container--scrollable': {
    overflow: 'auto',
    position: 'relative'
  },

  '.psds-table': {
    label: 'table',

    borderCollapse: 'collapse',
    borderColor: 'transparent',
    color: 'initial',
    fontSize: type.fontSize200,
    fontWeight: type.fontWeightDefault,
    lineHeight: type.lineHeightTight,
    verticalAlign: 'middle',
    width: '100%',

    '& > tbody': { verticalAlign: 'inherit' },
    '& > thead': { verticalAlign: 'bottom' }
  },
  [`.psds-table${dark.className}`]: {
    borderColor: dark.borderColor,
    color: dark.textColor,
    '& > tbody > tr:first-child': { borderColor: colorsBorder.highOnDark }
  },
  [`.psds-table${light.className}`]: {
    borderColor: light.borderColor,
    color: light.textColor,
    '& > tbody > tr:first-child': { borderColor: colorsBorder.highOnLight }
  },

  '.psds-table__cell': {
    label: 'table__cell',

    padding: cellPadding,
    textAlign: 'left'
  },
  [`.psds-table__cell--align-${alignments.center}`]: { textAlign: 'center' },
  [`.psds-table__cell--align-${alignments.left}`]: { textAlign: 'left' },
  [`.psds-table__cell--align-${alignments.right}`]: { textAlign: 'right' },

  '.psds-table__head': {
    label: 'table__head',

    fontSize: type.fontSize100,
    fontWeight: type.fontWeightDefault,
    textTransform: 'uppercase',

    '& > tr:first-of-type': { borderTop: 'none' }
  },

  [`.psds-table__head${dark.className}`]: { color: dark.textHeadingColor },
  [`.psds-table__head${light.className}`]: { color: light.textHeadingColor },

  '.psds-table__header': {
    label: 'table__header',
    padding: 0,
    textAlign: 'left',

    '& > div': {
      fontWeight: type.fontWeightStrong,
      padding: cellPadding,
      verticalAlign: 'bottom',
      whiteSpace: 'nowrap'
    }
  },
  [`.psds-table__header--align-${alignments.center}`]: { textAlign: 'center' },
  [`.psds-table__header--align-${alignments.left}`]: { textAlign: 'left' },
  [`.psds-table__header--align-${alignments.right}`]: { textAlign: 'right' },

  '.psds-table__header--sortable': {
    cursor: 'pointer'
  },
  [`.psds-table__header--sortable${dark.className}`]: {
    '&:hover': { color: dark.textHeadingColorHover }
  },
  [`.psds-table__header--sortable${light.className}`]: {
    '&:hover': { color: dark.textHeadingColorHover }
  },

  '.psds-table__header__sort-icon': {
    label: 'table__header__sort-icon',

    '&&': {
      display: 'inline-block',
      verticalAlign: 'inherit'
    }
  },

  '.psds-table__header--sticky': {
    '&[scope="col"]': {
      border: 'none',
      top: 0,
      position: 'sticky',
      zIndex: 2,

      '& > div': { padding: cellPadding }
    },

    // NOTE: used by StickyContainer
    '&[scope="col"][data-stuck]': {
      position: 'initial',

      '& > div': {
        position: 'fixed',
        top: 0,
        zIndex: 2
      }
    },

    '&[scope="row"]': {
      left: 0,
      position: 'sticky',
      zIndex: 1
    }
  },

  [`.psds-table__header--sticky${dark.className}`]: {
    '&[scope="col"] > div': {
      backgroundColor: dark.stickyBgColor,
      boxShadow: `0 1px 0 0 ${dark.borderColor}`
    },
    '&[scope="row"]': {
      backgroundColor: dark.stickyBgColor,
      boxShadow: `1px 0 0 0 ${dark.borderColor}`
    }
  },
  [`.psds-table__header--sticky${light.className}`]: {
    '&[scope="col"] > div': {
      backgroundColor: light.stickyBgColor,
      boxShadow: `0 1px 0 0 ${light.borderColor}`
    },
    '&[scope="row"]': {
      backgroundColor: light.stickyBgColor,
      boxShadow: `1px 0 0 0 ${light.borderColor}`
    }
  },

  [`.psds-table__row${dark.className}`]: {
    borderTop: `1px solid ${dark.borderColor}`,

    'tbody &:hover > th, tbody &:hover > td': {
      backgroundColor: dark.rowHoverColor
    }
  },
  [`.psds-table__row${light.className}`]: {
    borderTop: `1px solid ${light.borderColor}`,

    'tbody &:hover > th, tbody &:hover > td': {
      backgroundColor: light.rowHoverColor
    }
  },
  '.psds-table__row--collapsed': {
    borderColor: 'transparent',
    height: 0,
    visibility: 'hidden',

    '& > th, & > td': { paddingBottom: 0, paddingTop: 0 }
  },
  [`.psds-table__row--selected${dark.className}`]: {
    '& > th, & > td': { backgroundColor: dark.rowSelectedColor }
  },
  [`.psds-table__row--selected${light.className}`]: {
    '& > th, & > td': { backgroundColor: light.rowSelectedColor }
  },

  '.psds-table__drawer': {
    borderTopColor: 'transparent',

    'tbody &:hover > th, tbody &:hover > td': { backgroundColor: 'transparent' }
  },
  '.psds-table__drawer__cell': {
    paddingBottom: layout.spacingSmall,
    paddingTop: layout.spacingSmall,
    transition: `padding ${motion.speedNormal}`
  },
  '.psds-table__drawer__inner': {
    transition: `all ${motion.speedNormal}`
  }
}
