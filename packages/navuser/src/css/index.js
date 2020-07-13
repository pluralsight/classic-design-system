import { colorsTextIcon, layout } from '@pluralsight/ps-design-system-core'

export default {
  '.psds-navuser': {
    display: 'inline-flex',
    alignItems: 'center',
    padding: `${layout.spacingXXSmall} ${layout.spacingXSmall}`
  },
  '.psds-navuser__plan-name': {
    color: colorsTextIcon.lowOnDark
  },
  '.psds-navuser__name': {},
  '.psds-navuser__words': {
    display: 'inline-flex',
    justifyContent: 'center',
    flexDirection: 'column',
    color: colorsTextIcon.highOnDark,
    lineHeight: '1em',
    fontSize: '16px',
    marginLeft: layout.spacingXSmall
  }
}
