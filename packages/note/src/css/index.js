import core from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

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
  '.psds-note__list': {
    listStyle: 'none',
    marginLeft: 0
  },
  '.psds-note__list-item': {
    borderTop: `1px solid ${core.colors.gray03}`,

    '&:first-of-type': { borderTop: 'none' }
  },
  [`.psds-note__list-item.psds-theme--${themeNames.light}`]: {
    borderTop: `1px solid ${core.colors.gray01}`
  },

  '.psds-note': {
    alignItems: 'flex-start',
    display: 'flex',
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightStandard,
    padding: `${core.layout.spacingLarge} ${core.layout.spacingMedium}`
  },
  [`.psds-note.psds-theme--${themeNames.light}`]: {
    borderColor: core.colors.gray01
  },

  '.psds-note__action-bar': {
    color: core.colors.gray02,
    display: 'flex',
    marginLeft: 'auto',
    opacity: 0,
    transition: `opacity ${core.motion.speedNormal}`
  },
  [`.psds-note__action-bar.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },
  '.psds-note__action-bar--action-bar-visible': {
    opacity: 1
  },
  '.psds-note__action-bar--meta-sibling': {
    marginLeft: core.layout.spacingMedium
  },

  '.psds-note__action': {
    ...resetButton,
    cursor: 'pointer',
    fontSize: core.type.fontSizeXSmall,
    transition: `all ${core.motion.speedNormal}`,

    '&:hover, &:active': { color: core.colors.white },
    '& + &': { marginLeft: core.layout.spacingSmall }
  },
  [`.psds-note__action.psds-theme--${themeNames.light}`]: {
    '&:hover, &:active': { color: core.colors.gray03 }
  },

  '.psds-note__aside': {
    marginRight: core.layout.spacingMedium
  },

  '.psds-note__contents': {
    flex: 1,
    paddingTop: core.layout.spacingXXSmall,
    maxWidth: '100%',
    minWidth: 0,

    '& :first-child': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 }
  },
  [`.psds-note__contents.psds-theme--${themeNames.dark}`]: {
    color: core.colors.white
  },
  [`.psds-note__contents.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray06
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
    marginRight: 'auto',

    '& > *': {
      fontSize: core.type.fontSizeSmall,
      fontWeight: core.type.fontWeightBold,
      lineHeight: core.type.lineHeightTight
    },
    '& a': {
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',

      '&:hover, &:active': {
        textDecoration: 'underline',
        transition: `all ${core.motion.speedNormal}`
      }
    }
  },
  [`.psds-note__heading.psds-theme--${themeNames.dark}`]: {
    '& a:hover, & a:active': { color: core.colors.white }
  },
  [`.psds-note__heading.psds-theme--${themeNames.light}`]: {
    '& a:hover, & a:active': { color: core.colors.gray03 }
  },

  '.psds-note__footer': {
    alignItems: 'center',
    display: 'flex',
    marginTop: core.layout.spacingSmall,
    maxWidth: '100%'
  },

  '.psds-note__metadata': {
    alignItems: 'center',
    color: core.colors.gray02,
    display: 'flex',
    fontSize: core.type.fontSizeXSmall,
    fontWeight: core.type.fontWeightBook,
    lineHeight: core.type.lineHeightTight,
    marginRight: 'auto',
    maxWidth: '100%',
    minWidth: 0
  },
  [`.psds-note__metadata.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },

  '.psds-note__metadata-datum': {
    flexShrink: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    '&:nth-of-type(1)': {
      flexShrink: 1
    },

    '& a': {
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',

      '&:hover, &:active': {
        textDecoration: 'underline',
        transition: `all ${core.motion.speedNormal}`
      }
    }
  },
  [`.psds-note__metadata-datum.psds-theme--${themeNames.dark}`]: {
    '& a:hover, & a:active': { color: core.colors.white }
  },
  [`.psds-note__metadata-datum.psds-theme--${themeNames.light}`]: {
    '& a:hover, & a:active': { color: core.colors.gray03 }
  },

  '.psds-note__metadata-dot': {
    display: 'inline-block',
    margin: `0 ${core.layout.spacingXSmall}`
  }
}
