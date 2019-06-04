import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

export default {
  '.psds-note': {
    alignItems: 'flex-start',
    borderTop: `1px solid ${core.colors.gray03}`,
    display: 'flex',
    padding: `${core.layout.spacingLarge} ${core.layout.spacingMedium}`,
    fontWeight: core.type.fontWeightMedium,
    lineHeight: core.type.lineHeightStandard,

    '&:first-of-type': {
      borderTop: 'none'
    }
  },
  [`.psds-note.psds-theme--${themeNames.light}`]: {
    borderColor: core.colors.gray01
  },

  '.psds-note__list': {},

  '.psds-note__aside': {
    marginRight: core.layout.spacingMedium
  },

  '.psds-note__contents': {
    flex: 1,
    paddingTop: core.layout.spacingXXSmall,

    '& :first-child': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 }
  },
  [`.psds-note__contents.psds-theme--${themeNames.dark}`]: {
    color: core.colors.white
  },
  [`.psds-note__contents.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray06
  },

  '.psds-note__heading': {
    fontWeight: core.type.fontWeightBold,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightTight,
    marginBottom: core.layout.spacingSmall
  },

  '.psds-note__metadata': {
    alignItems: 'center',
    color: core.colors.gray02,
    display: 'flex',
    fontWeight: core.type.fontWeightBook,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: core.type.lineHeightTight,
    maxWidth: '100%',
    paddingTop: core.layout.spacingSmall
  },
  [`.psds-note__metadata.psds-theme--${themeNames.light}`]: {
    color: core.colors.black
  },

  '.psds-note__metadata-datum': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  '.psds-note__metadata-dot': {
    display: 'inline-block',
    margin: `0 ${core.layout.spacingXSmall}`
  }
}
