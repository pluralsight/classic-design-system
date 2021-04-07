import {
  colorsBackgroundUtilityCsv,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'

export default {
  '.psds-navuser': {
    display: 'inline-flex',
    alignItems: 'center',
    padding: `${layout.spacingXXSmall} ${layout.spacingXSmall}`,
    textDecoration: 'none',
    border: 'none',
    background: 'none',
    borderRadius: '2px'
  },
  '.psds-navuser--clickable': {
    cursor: 'pointer',

    '&:hover, &:focus': {
      background: `rgba(${colorsBackgroundUtilityCsv},0.15)`
    },
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      background: `rgba(${colorsBackgroundUtilityCsv},0.25)`
    }
  },
  '.psds-navuser__plan-name': {
    color: colorsTextIcon.lowOnDark,
    fontSize: '11px',
    fontWeight: type.fontWeightDefault,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  '.psds-navuser__name': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '12px'
  },
  '.psds-navuser__words': {
    color: colorsTextIcon.highOnDark,
    lineHeight: '16px',
    marginLeft: layout.spacingXSmall,
    fontWeight: type.fontWeight500,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    maxWidth: '120px'
  }
}
