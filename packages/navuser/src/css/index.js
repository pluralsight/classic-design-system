import {
  colorsBackgroundUtility,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
import { transparentize } from '@pluralsight/ps-design-system-util'

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
      background: transparentize(0.85, colorsBackgroundUtility.base)
    },
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      background: transparentize(0.75, colorsBackgroundUtility.base)
    }
  },
  '.psds-navuser__plan-name': {
    color: colorsTextIcon.lowOnDark,
    fontSize: '11px',
    fontWeight: type.fontWeightBook,
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
    fontWeight: type.fontWeightMedium,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    maxWidth: '120px'
  }
}
