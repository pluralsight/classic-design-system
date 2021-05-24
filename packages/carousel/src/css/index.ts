import {
  accessibility,
  colorsTextIcon,
  layout,
  motion
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import * as vars from '../vars/index'

const resetButton = {
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

const resetFocus = {
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(0, 123, 255, .5)'
  }
}

const resetList = {
  lineHeight: 'initial',
  listStyle: 'none',
  margin: 0,
  padding: 0
}

export default {
  '.psds-carousel': {
    position: 'relative'
  },

  '.psds-carousel__controls__control': {
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    transition: `transform ${motion.speedFast} ease-in-out`
  },
  [`.psds-carousel__controls__control--${vars.controlDirections.prev}`]: {
    left: 0,
    transform: 'translate(-50%, -50%)',

    '&[hidden]': { transform: 'translate(-50%, -50%) scale(0)' }
  },
  [`.psds-carousel__controls__control--${vars.controlDirections.next}`]: {
    right: 0,
    transform: 'translate(50%, -50%)',

    '&[hidden]': { transform: 'translate(50%, -50%) scale(0)' }
  },

  '.psds-carousel__controls__control__button': {
    ...resetButton,
    alignItems: 'center',
    borderRadius: '100%',
    boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    height: '36px',
    justifyContent: 'center',
    width: '36px',
    '&:focus': { outline: 'none' },
    '&:hover': { cursor: 'pointer' }
  },
  [`.psds-carousel__controls__control__button.psds-theme--${themeNames.dark}`]: {
    color: colorsTextIcon.highOnLight,
    background: 'rgba(255, 255, 255, 0.6)',

    '&:hover, &:focus, &:active': { background: 'white' }
  },
  [`.psds-carousel__controls__control__button.psds-theme--${themeNames.light}`]: {
    color: colorsTextIcon.highOnDark,
    background: 'rgba(0, 0, 0, 0.6)',

    '&:hover, &:focus, &:active': { background: 'black' }
  },

  '.psds-carousel__stage': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    overscrollBehaviorX: 'contain',
    scrollPadding: '0',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  '.psds-carousel__stage--ready': {
    '& > ul > li': {
      visibility: 'visible',
      scrollSnapAlign: 'start',
    }
  },
  '.psds-carousel__track': {
    ...resetFocus,
    ...resetList,
    position: 'relative',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'row',
    transition: 'left 400ms'
  },

  '.psds-carousel__item': {
    margin: `0 8px`,
    flexGrow: 0,
    flexShrink: 0,
    visibility: 'hidden',

    '&:first-child': { marginLeft: 0 },
    '&:last-child': { marginRight: 0 }
  },
}
