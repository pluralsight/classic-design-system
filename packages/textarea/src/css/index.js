import core from '@pluralsight/ps-design-system-core'
import * as iconVars from '@pluralsight/ps-design-system-icon/vars'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from 'polished'

export default {
  '.psds-text-area': {
    display: 'inline-block',
    width: '100%'
  },
  '.psds-text-area--disabled': {
    opacity: 0.5
  },

  // __field
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
    border: 'none'
  },
  '.psds-text-area__field:focus': {
    outline: 'none'
  },
  [`.psds-text-area__field.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    border: `1px solid ${core.colors.gray02}`
  },

  // __field-container
  '.psds-text-area__field-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minWidth: `calc(192px + ${iconVars.widths.medium} + ${
      core.layout.spacingXSmall
    })`
  },
  '.psds-text-area__field-container:focus:before': {
    content: ' ',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    background: core.colors.black,
    zIndex: '-1',
    borderRadius: '2px'
  },
  [`.psds-text-area__field-container.psds-theme--${
    themeNames.light
  }:focus:before`]: {
    background: core.colors.bone
  },
  '.psds-text-area__field-container:focus:after': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: core.colors.blue,
    zIndex: '-2',
    borderRadius: '4px'
  },
  '.psds-text-area__field-container--error:before': {
    content: ' ',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    background: core.colors.black,
    zIndex: '-1',
    borderRadius: '2px'
  },
  [`.psds-text-area__field-container--error.psds-theme--${
    themeNames.light
  }:before`]: {
    background: core.colors.bone
  },
  '.psds-text-area__field-container--error:after': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: core.colors.red,
    zIndex: '-2',
    borderRadius: '4px'
  },

  // __label
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

  // __sub-label
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

  // __error
  '.psds-text-area__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconVars.widths.medium} + ${
      core.layout.spacingXSmall
    }))`,
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    paddingTop: core.layout.spacingXSmall,
    marginLeft: core.layout.spacingXSmall,
    color: core.colors.red
  },

  '@media (min-width: 433px)': {
    '.psds-text-area': {
      width: 'auto'
    },
    '.psds-text-area__field': {
      minWidth: '433px'
    }
  }
}
