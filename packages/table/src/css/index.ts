import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsBorder,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import { alignments } from '../vars'

const cellPadding = `${layout.spacingXSmall} ${layout.spacingSmall}`

const dark = {
  className: `.psds-theme--${themeNames.dark}`,

  borderColor: colorsBorder.lowOnDark,
  rowHoverColor: colorsBackgroundDark[1],
  rowSelectedColor: colorsBackgroundDark[3],
  stickyBgColor: colorsBackgroundDark[1],
  textColor: colorsTextIcon.highOnDark,
  textHeadingColor: colorsTextIcon.lowOnDark,
  textHeadingColorHover: colorsTextIcon.highOnDark
}

const light = {
  className: `.psds-theme--${themeNames.light}`,

  borderColor: colorsBorder.lowOnLight,
  rowHoverColor: colorsBackgroundLight[3],
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

  [`.psds-table__container--scrollable${dark.className}`]: {
    background: `
      linear-gradient(to right, ${colorsBackgroundDark[2]} 30%, transparent),
      linear-gradient(to right, transparent, ${colorsBackgroundDark[2]} 70%) 0 100%,
      radial-gradient(farthest-side at 0% 50%, rgba(0,0,0,.8), transparent),
      radial-gradient(farthest-side at 100% 50%, rgba(0,0,0,.8), transparent) 0 100%
    `,
    backgroundAttachment: 'local, local, scroll, scroll',
    backgroundPosition: '0 0, 100%, 0 0, 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '4em 100%, 4em 100%, 1.4em 100%, 1.4em 100%'
  },
  [`.psds-table__container--scrollable${light.className}`]: {
    background: `
      linear-gradient(to right, ${colorsBackgroundLight[2]} 30%, transparent),
      linear-gradient(to right, transparent, ${colorsBackgroundLight[2]} 70%) 0 100%,
      radial-gradient(farthest-side at 0% 50%, rgba(0,0,0,.2), transparent),
      radial-gradient(farthest-side at 100% 50%, rgba(0,0,0,.2), transparent) 0 100%
    `,
    backgroundAttachment: 'local, local, scroll, scroll',
    backgroundPosition: '0 0, 100%, 0 0, 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '4em 100%, 4em 100%, 1.4em 100%, 1.4em 100%'
  },

  '.psds-table': {
    label: 'table',

    borderCollapse: 'collapse',
    borderColor: 'transparent',
    color: 'initial',
    fontSize: type.fontSizeSmall,
    fontWeight: type.fontWeightBook,
    lineHeight: type.lineHeightTight,
    verticalAlign: 'middle',
    width: '100%',

    '& > tbody': { verticalAlign: 'inherit' },
    '& > thead': { verticalAlign: 'bottom' }
  },
  [`.psds-table${dark.className}`]: {
    borderColor: dark.borderColor,
    color: dark.textColor
  },
  [`.psds-table${light.className}`]: {
    borderColor: light.borderColor,
    color: light.textColor
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

    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightBook,
    textTransform: 'uppercase',

    '& >:first-of-type': { borderTop: 'none' }
  },

  [`.psds-table__head${dark.className}`]: { color: dark.textHeadingColor },
  [`.psds-table__head${light.className}`]: { color: light.textHeadingColor },

  '.psds-table__header': {
    label: 'table__header',

    fontWeight: type.fontWeightBold,
    padding: cellPadding,
    textAlign: 'left',
    whiteSpace: 'nowrap'
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
      top: 0,
      position: 'sticky',
      zIndex: 2
    },
    '&[scope="row"]': {
      left: 0,
      position: 'sticky',
      zIndex: 1
    }
  },

  [`.psds-table__header--sticky${dark.className}`]: {
    '&[scope="col"]': {
      backgroundColor: dark.stickyBgColor,
      boxShadow: `0 1px 0 0 ${dark.borderColor}`
    },
    '&[scope="row"]': {
      backgroundColor: dark.stickyBgColor,
      boxShadow: `1px 0 0 0 ${dark.borderColor}`
    }
  },
  [`.psds-table__header--sticky${light.className}`]: {
    '&[scope="col"]': {
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
    '&:hover > th, &:hover > td': { backgroundColor: dark.rowHoverColor }
  },
  [`.psds-table__row${light.className}`]: {
    borderTop: `1px solid ${light.borderColor}`,
    '&:hover > th, &:hover > td': { backgroundColor: light.rowHoverColor }
  },
  '.psds-table__row--collapsed': { display: 'none' },
  [`.psds-table__row--selected${dark.className}`]: {
    '& > th, & > td': { backgroundColor: dark.rowSelectedColor }
  },
  [`.psds-table__row--selected${light.className}`]: {
    '& > th, & > td': { backgroundColor: light.rowSelectedColor }
  }
}
