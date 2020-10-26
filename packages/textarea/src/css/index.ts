import {
  colorsBackgroundLight,
  colorsBorder,
  colorsStatus,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'
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
    background: colorsBackgroundLight[3],
    fontSize: type.fontSizeSmall,
    lineHeight: type.lineHeightStandard,
    fontWeight: type.fontWeightBook,
    color: colorsTextIcon.highOnLight,
    padding: `${layout.spacingXSmall} ${layout.spacingMedium}`,
    border: `1px solid ${colorsBorder.lowOnDark}`,

    '&:focus': { outline: 'none' },
    '&::placeholder': { color: colorsTextIcon.lowOnLight }
  },
  [`.psds-text-area__field.psds-theme--${themeNames.light}`]: {
    border: `1px solid ${colorsBorder.highOnLight}`,
    '&:focus': { border: '1px solid transparent' }
  },

  [`.psds-text-area__field--error.psds-theme--${themeNames.light}`]: {
    border: '1px solid transparent'
  },

  '.psds-text-area__field-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },

  '.psds-text-area__label': {
    width: '100%',
    color: colorsTextIcon.highOnDark,
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightMedium,
    marginBottom: layout.spacingXXSmall
  },
  [`.psds-text-area__label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  '.psds-text-area__sub-label': {
    color: colorsTextIcon.lowOnDark,
    fontSize: type.fontSizeXSmall,
    fontWeight: type.fontWeightMedium,
    marginTop: layout.spacingXXSmall
  },
  [`.psds-text-area__sub-label.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },

  '.psds-text-area__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconWidths.medium} + ${layout.spacingXSmall}))`,
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    paddingTop: layout.spacingXSmall,
    marginLeft: layout.spacingXSmall,
    color: colorsStatus.error
  }
}
