import {
  colorsBackgroundLight,
  colorsBlue,
  colorsTextIcon,
  layout,
  type,
  layers
} from '@pluralsight/ps-design-system-core'

export default {
  '.psds-typeahead': {},

  '.psds-typeahead__menu': {
    background: colorsBackgroundLight[3],
    borderRadius: '2px',
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    display: 'inline-block',
    fontSize: type.fontSize200,
    listStyle: 'none',
    marginLeft: 0,
    maxHeight: '277px',
    maxWidth: '320px',
    minWidth: '160px',
    overflowY: 'auto',
    padding: `${layout.spacingXXSmall} 0`,
    zIndex: layers.globalDropdown
  },
  '.psds-typeahead__menu__item': {
    alignItems: 'center',
    background: 'none',
    border: 'none',
    color: colorsTextIcon.highOnLight,
    cursor: 'pointer',
    display: 'flex',
    fontWeight: type.fontWeight500,
    lineHeight: type.lineHeightExtra,
    overflow: 'hidden',
    paddingBottom: '0',
    paddingLeft: layout.spacingSmall,
    paddingRight: layout.spacingSmall,
    paddingTop: '0',
    textAlign: 'left',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',

    '&:focus': {
      background: colorsBackgroundLight[1],
      color: colorsTextIcon.highOnLight,
      outline: 'none'
    },

    '&[disabled]': {
      color: colorsTextIcon.lowOnLight,
      cursor: 'auto',
      outline: 'none'
    }
  },
  '.psds-typeahead__menu__item__label': {
    flexGrow: 1,
    marginRight: 'auto'
  },
  '.psds-typeahead__menu__item__icon': {
    color: 'transparent',
    marginLeft: layout.spacingXSmall
  },
  '.psds-typeahead__menu__item__icon--selected': {
    color: colorsBlue.base
  }
}
