import {
  colorsBorder,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
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
    borderTop: `1px solid ${colorsBorder.lowOnDark}`,

    '&:first-of-type': { borderTop: 'none' }
  },
  [`.psds-note__list-item.psds-theme--${themeNames.light}`]: {
    borderTop: `1px solid ${colorsBorder.lowOnLight}`
  },

  '.psds-note': {
    alignItems: 'flex-start',
    display: 'flex',
    fontWeight: type.fontWeightDefault,
    lineHeight: type.lineHeightStandard,
    padding: `${layout.spacingLarge} ${layout.spacingMedium}`
  },
  [`.psds-note.psds-theme--${themeNames.light}`]: {
    borderColor: colorsBorder.lowOnLight
  },

  '.psds-note__action-bar': {
    color: colorsTextIcon.lowOnDark,
    display: 'flex',
    marginLeft: 'auto',
    opacity: 0,
    transition: `opacity ${motion.speedNormal}`
  },
  [`.psds-note__action-bar.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
  },
  '.psds-note__action-bar--action-bar-visible': {
    opacity: 1
  },
  '.psds-note__action-bar--meta-sibling': {
    marginLeft: layout.spacingMedium
  },

  '.psds-note__action': {
    ...resetButton,
    cursor: 'pointer',
    fontSize: type.fontSize100,
    transition: `all ${motion.speedNormal}`,

    '&:hover, &:active': { color: colorsTextIcon.highOnDark },
    '& + &': { marginLeft: layout.spacingSmall }
  },
  [`.psds-note__action.psds-theme--${themeNames.light}`]: {
    '&:hover, &:active': { color: colorsTextIcon.highOnLight }
  },

  '.psds-note__aside': {
    marginRight: layout.spacingMedium
  },

  '.psds-note__contents': {
    flex: 1,
    paddingTop: layout.spacingXXSmall,
    maxWidth: '100%',
    minWidth: 0,

    '& :first-child': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 }
  },
  [`.psds-note__contents.psds-theme--${themeNames.dark}`]: {
    color: colorsTextIcon.highOnDark
  },
  [`.psds-note__contents.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnLight
  },

  '.psds-note__header': {
    alignItems: 'center',
    display: 'flex',
    marginBottom: layout.spacingSmall
  },

  '.psds-note__heading': {
    fontSize: type.fontSize200,
    fontWeight: type.fontWeight700,
    lineHeight: type.lineHeightTight,
    marginRight: 'auto',

    '& > *': {
      fontSize: type.fontSize200,
      fontWeight: type.fontWeight700,
      lineHeight: type.lineHeightTight
    },
    '& a': {
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',

      '&:hover, &:active': {
        color: 'inherit',
        textDecoration: 'underline',
        transition: `all ${motion.speedNormal}`
      }
    }
  },

  '.psds-note__footer': {
    alignItems: 'center',
    display: 'flex',
    marginTop: layout.spacingSmall,
    maxWidth: '100%'
  },

  '.psds-note__metadata': {
    alignItems: 'center',
    color: colorsTextIcon.lowOnDark,
    display: 'flex',
    fontSize: type.fontSize100,
    fontWeight: type.fontWeightDefault,
    lineHeight: type.lineHeightTight,
    marginRight: 'auto',
    maxWidth: '100%',
    minWidth: 0
  },
  [`.psds-note__metadata.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.lowOnLight
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
        transition: `all ${motion.speedNormal}`
      }
    }
  },
  [`.psds-note__metadata-datum.psds-theme--${themeNames.dark}`]: {
    '& a:hover, & a:active': { color: colorsTextIcon.highOnDark }
  },
  [`.psds-note__metadata-datum.psds-theme--${themeNames.light}`]: {
    '& a:hover, & a:active': { color: colorsTextIcon.highOnLight }
  },

  '.psds-note__metadata-dot': {
    display: 'inline-block',
    margin: `0 ${layout.spacingXSmall}`
  }
}
