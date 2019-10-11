import core from '@pluralsight/ps-design-system-core'

export default {
  '.psds-typeahead': {},

  '.psds-typeahead__menu': {
    background: core.colors.white,
    borderRadius: '2px',
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    display: 'inline-block',
    fontSize: core.type.fontSizeSmall,
    listStyle: 'none',
    marginLeft: 0,
    maxHeight: '277px',
    maxWidth: '320px',
    minWidth: '160px',
    overflowY: 'auto',
    padding: `${core.layout.spacingXXSmall} 0`
  },
  '.psds-typeahead__menu__item': {
    alignItems: 'center',
    background: 'none',
    border: 'none',
    color: core.colors.gray05,
    cursor: 'pointer',
    display: 'flex',
    fontWeight: core.type.fontWeightMedium,
    lineHeight: core.type.lineHeightExtra,
    overflow: 'hidden',
    paddingBottom: '0',
    paddingLeft: core.layout.spacingSmall,
    paddingRight: core.layout.spacingSmall,
    paddingTop: '0',
    textAlign: 'left',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',

    '&:focus': {
      background: core.colors.bone,
      color: core.colors.gray05,
      outline: 'none'
    },

    '&[disabled]': {
      color: core.colors.gray02,
      cursor: 'auto',
      outline: 'none'
    }
  },
  '.psds-typeahead__menu__item__icon': {
    color: 'transparent',
    marginRight: core.layout.spacingXSmall
  },
  '.psds-typeahead__menu__item__icon--selected': {
    color: core.colors.blue
  }
}
