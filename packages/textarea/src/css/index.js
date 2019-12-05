import * as core from '@pluralsight/ps-design-system-core'
import { widths as iconWidths } from '@pluralsight/ps-design-system-icon'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

export default {
  '.psds-text-area': {
    display: 'inline-block',
    width: '100%',
    maxWidth: '496px'
  },
  '.psds-text-area--disabled': {
    opacity: 0.5
  },

  '.psds-text-area__field': {
    position: 'relative',
    minHeight: '104px',
    width: '100%',
    borderRadius: '2px',
    background: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightBook,
    color: core.colors.gray03,
    padding: `${core.layout.spacingXSmall} ${core.layout.spacingMedium}`,
    border: 'none',

    '&:focus': { outline: 'none' }
  },
  [`.psds-text-area__field.psds-theme--${themeNames.light}`]: {
    '&:focus': { border: '1px solid transparent' }
  },

  [`.psds-text-area__field--error.psds-theme--${themeNames.light}`]: {
    border: '1px solid transparent'
  },
  [`.psds-text-area__field.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    border: `1px solid ${core.colors.gray02}`
  },

  '.psds-text-area__field-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },

  '.psds-text-area__label': {
    width: '100%',
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingBottom: core.layout.spacingXSmall
  },
  [`.psds-text-area__label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },

  '.psds-text-area__sub-label': {
    color: core.colors.gray02,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingTop: core.layout.spacingXSmall
  },
  [`.psds-text-area__sub-label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },

  '.psds-text-area__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconWidths.medium} + ${core.layout.spacingXSmall}))`,
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    paddingTop: core.layout.spacingXSmall,
    marginLeft: core.layout.spacingXSmall,
    color: core.colors.red
  }
}
