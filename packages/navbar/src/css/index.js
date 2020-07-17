import {
  colorsBackgroundDark,
  layout
} from '@pluralsight/ps-design-system-core'

export default {
  '.psds-navbar': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '56px',
    padding: layout.spacingXSmall,
    background: colorsBackgroundDark[2],
    borderBottom: `1px solid ${colorsBackgroundDark[3]}`,
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0 8px 0px'
  },
  '.psds-navbar__brand': {
    marginRight: layout.spacingMedium
  },
  '.psds-navbar__items': {
    flex: 1,
    marginRight: layout.spacingLarge
  },
  '.psds-navbar__mobile-menu': {
    marginRight: layout.spacingXXSmall
  },
  '.psds-navbar__utility': {
    marginLeft: 'auto',
    marginRight: layout.spacingXXSmall
  },
  '.psds-navbar__user': {}
}
