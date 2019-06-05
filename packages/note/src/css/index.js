import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

export const resetButton = {
  background: 'transparent',
  border: 'none',
  color: 'inherit',
  font: 'inherit',
  lineHeight: 'normal',
  margin: 0,
  overflow: 'visible',
  padding: 0,
  width: 'auto',

  MozOsxFontSmoothing: 'inherit',
  WebkitAppearance: 'none',
  WebkitFontSmoothing: 'inherit',

  '&::-moz-focus-inner': {
    border: 0,
    padding: 0
  }
}

export default {
  '.psds-note': {
    alignItems: 'flex-start',
    borderTop: `1px solid ${core.colors.gray03}`,
    display: 'flex',
    fontWeight: core.type.fontWeightMedium,
    lineHeight: core.type.lineHeightStandard,
    padding: `${core.layout.spacingLarge} ${core.layout.spacingMedium}`,

    '&:first-of-type': { borderTop: 'none' }
  },
  [`.psds-note.psds-theme--${themeNames.light}`]: {
    borderColor: core.colors.gray01
  },

  '.psds-note__list': {},

  '.psds-note__action-bar': {
    color: core.colors.gray02,
    display: 'flex',

    'div + &': { marginLeft: core.layout.spacingMedium }
  },
  [`.psds-note__action-bar.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },

  '.psds-note__action': {
    ...resetButton,
    cursor: 'pointer',
    fontSize: core.type.fontSizeXSmall,
    transition: `all ${core.motion.speedNormal}`,

    '&:hover, &:active': { color: core.colors.white },
    '& + &': { marginLeft: core.layout.spacingSmall }
  },

  '.psds-note__aside': {
    marginRight: core.layout.spacingMedium
  },

  '.psds-note__contents': {
    flex: 1,
    paddingTop: core.layout.spacingXXSmall,
    width: '100%',

    '& :first-child': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 }
  },
  [`.psds-note__contents.psds-theme--${themeNames.dark}`]: {
    color: core.colors.white
  },
  [`.psds-note__contents.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray06
  },

  '.psds-note__footer': {
    alignItems: 'center',
    display: 'flex',
    marginTop: core.layout.spacingSmall,
    width: '100%'
  },

  '.psds-note__header': {
    alignItems: 'center',
    display: 'flex',
    marginBottom: core.layout.spacingSmall
  },

  '.psds-note__heading': {
    fontSize: core.type.fontSizeSmall,
    fontWeight: core.type.fontWeightBold,
    lineHeight: core.type.lineHeightTight,
    marginRight: 'auto'
  },

  '.psds-note__metadata': {
    alignItems: 'center',
    color: core.colors.gray02,
    display: 'flex',
    fontSize: core.type.fontSizeXSmall,
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightTight,
    marginRight: 'auto',
    maxWidth: '100%'
  },
  [`.psds-note__metadata.psds-theme--${themeNames.light}`]: {
    color: core.colors.black
  },

  '.psds-note__metadata-datum': {
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  '.psds-note__metadata-dot': {
    display: 'inline-block',
    margin: `0 ${core.layout.spacingXSmall}`
  }
}
