import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'

const listItemTextLightHover = {
  color: core.colors.gray06
}
const listItemTextDefaultHover = {
  color: core.colors.white
}

const listItemText = {
  fontWeight: core.type.fontWeightMedium
}
const listItemTextLightActive = {
  ...listItemText,
  color: core.colors.gray06
}
const listItemTextDefaultActive = {
  ...listItemText,
  color: core.colors.white
}

const listItemBarHover = {
  backgroundColor: core.colors.gray02,
  height: core.layout.spacingXXSmall,
  opacity: 1
}

const listItemBarActive = {
  backgroundColor: core.colors.orange
}
const listItemBarActiveActive = {
  ...listItemBarActive,
  opacity: 1,
  height: core.layout.spacingXXSmall
}

export default {
  '.psds-tab__list': {
    position: 'relative',
    width: '100%',
    height: '64px',
    overflow: 'hidden',
    '&:focus': {
      outline: 'none',
      borderBottomWidth: '4px',
      // __text
      '& div': {
        height: 'calc(100% + 4px)',
        marginBottom: '-4px'
      }
    }
  },
  [`.psds-tab__list.psds-theme--${themeNames.light}`]: {
    borderBottom: `1px solid ${core.colors.gray02}`
  },
  [`.psds-tab__list.psds-theme--${themeDefaultName}`]: {
    borderBottom: `1px solid ${core.colors.gray04}`
  },

  '.psds-tab__slider': {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    height: '64px',
    transform: 'translateX(0)'
    // transition: `transform ${core.motion.speedSlow} ease-in-out`
  },

  '.psds-tab__overflow-button': {
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100% + 1px)',
    width: '64px',
    color: core.colors.white,
    border: 0,
    zIndex: 1
  },
  '.psds-tab__overflow-button--left': {
    left: 0,
    justifyContent: 'flex-start',
    background: `linear-gradient(to left, transparent, ${
      core.colors.gray06
    } 50%)`,
    paddingLeft: core.layout.spacingMedium
  },
  '.psds-tab__overflow-button--right': {
    right: 0,
    justifyContent: 'flex-end',
    background: `linear-gradient(to right, transparent, ${
      core.colors.gray06
    } 50%)`,
    paddingRight: core.layout.spacingMedium
  },
  [`.psds-tab__overflow-button.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },
  [`.psds-tab__overflow-button--left.psds-theme--${themeNames.light}`]: {
    background: `linear-gradient(to left, transparent, ${core.colors.bone} 50%)`
  },
  [`.psds-tab__overflow-button--right.psds-theme--${themeNames.light}`]: {
    background: `linear-gradient(to right, transparent, ${
      core.colors.bone
    } 50%)`
  },

  // __list-item
  '.psds-tab__list-item': {
    height: '100%',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    padding: `0 calc(${core.layout.spacingXLarge} / 2)`,
    textDecoration: 'none',
    maxWidth: '300px',
    '&:focus': {
      outline: 'none'
    },
    '&:first-child': {
      paddingLeft: 0
    },
    // __bar
    '&:hover span, &:focus span': listItemBarHover,
    '&:active span': listItemBarActive
  },
  [`.psds-tab__list-item.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03,
    // __text
    '&:hover div, &:focus div': listItemTextLightHover,
    '&:active': listItemTextLightActive
  },
  [`.psds-tab__list-item.psds-theme--${themeDefaultName}`]: {
    color: core.colors.gray02,
    // __text
    '&:hover div, &:focus div': listItemTextDefaultHover,
    '&:active': listItemTextDefaultActive
  },
  [`.psds-tab__list-item.psds-tab__list-item--active`]: {
    // __span
    '&:active span, &:hover span, &:focus span, & span': listItemBarActiveActive
  },
  [`.psds-tab__list-item.psds-tab__list-item--active.psds-theme--${
    themeNames.light
  }`]: {
    // __text
    '&:hover div, &:focus div, & div': listItemTextLightActive
  },
  [`.psds-tab__list-item.psds-tab__list-item--active.psds-theme--${themeDefaultName}`]: {
    // __text
    '&:hover div, &:focus div, & div': listItemTextDefaultActive
  },

  // __list-item__text
  '.psds-tab__list-item__text': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100% + 1px)',
    marginBottom: '-1px',
    fontWeight: core.type.fontWeightBook,
    padding: `0 0 ${core.layout.spacingXXSmall} 0`,
    transition: `color ${core.motion.speedXFast} linear`,
    '&:focus': {
      outline: 'none'
    }
  },

  // __list-item__bar
  '.psds-tab__list-item__bar': {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    display: 'block',
    height: 0,
    opacity: 0,
    transition: `height ${core.motion.speedNormal} ease-in-out, opacity ${
      core.motion.speedNormal
    } ease-in-out`
  }
}
