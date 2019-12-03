import { colors, layout, type } from '@pluralsight/ps-design-system-core'
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
    background: colors.bone,
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightStandard,
    fontWeight: type.fontWeightBook,
    color: colors.gray03,
    padding: `${layout.spacingXSmall} ${layout.spacingMedium}`,
    border: 'none'
  },
  '.psds-text-area__field:focus': {
    outline: 'none'
  },
  [`.psds-text-area__field.psds-theme--${themeNames.light}:focus`]: {
    border: '1px solid transparent'
  },
  [`.psds-text-area__field--error.psds-theme--${themeNames.light}`]: {
    border: '1px solid transparent'
  },
  [`.psds-text-area__field.psds-theme--${themeNames.light}`]: {
    background: colors.white,
    border: `1px solid ${colors.gray02}`
  },

  '.psds-text-area__field-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },

  '.psds-text-area__label': {
    width: '100%',
    color: colors.bone,
    fontSize: type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: type.fontWeightMedium,
    paddingBottom: layout.spacingXSmall
  },
  [`.psds-text-area__label.psds-theme--${themeNames.light}`]: {
    color: colors.gray05
  },

  '.psds-text-area__sub-label': {
    color: colors.gray02,
    fontSize: type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: type.fontWeightMedium,
    paddingTop: layout.spacingXSmall
  },
  [`.psds-text-area__sub-label.psds-theme--${themeNames.light}`]: {
    color: colors.gray03
  },

  '.psds-text-area__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconWidths.medium} + ${layout.spacingXSmall}))`,
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    paddingTop: layout.spacingXSmall,
    marginLeft: layout.spacingXSmall,
    color: colors.red
  }
}
