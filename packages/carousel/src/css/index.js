import {
  accessibility,
  colorsTextIcon,
  layout,
  motion
} from '@pluralsight/ps-design-system-core'
import { names as themeNames } from '@pluralsight/ps-design-system-theme'

import { controlDirections as directions } from '../vars/index.js'

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
    position: 'relative',
    opacity: 0
  },
  '.psds-carousel--ready': { opacity: 1 },

  '.psds-carousel__controls__control': {
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    transition: `transform ${motion.speedFast} ease-in-out`
  },
  [`.psds-carousel__controls__control--${directions.prev}`]: {
    left: 0,
    transform: 'translate(-50%, -50%)',

    '&[hidden]': { transform: 'translate(-50%, -50%) scale(0)' }
  },
  [`.psds-carousel__controls__control--${directions.next}`]: {
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

  '.psds-carousel__pages': {
    ...resetFocus,
    display: 'flex',
    width: '100%',
    overflow: 'hidden'
  },

  '.psds-carousel__page': {
    ...resetList,
    alignItems: 'flex-start',
    display: 'flex',
    flex: '1 0 100%',
    margin: `0 calc(${layout.spacingSmall}/2)`,
    pointerEvents: 'none',
    transition: `transform ${motion.speedXSlow} ease-in-out`,

    '&:first-child': { marginLeft: 0 },
    '&:last-child': { marginRight: 0 }
  },

  '.psds-carousel__page--active': { pointerEvents: 'auto' },

  '.psds-carousel__item': {
    margin: `0 calc(${layout.spacingSmall}/2)`,
    flex: '1 1 100%',
    width: 0,
    minWidth: 0,

    '&:first-child': { marginLeft: 0 },
    '&:last-child': { marginRight: 0 }
  },

  '.psds-carousel__instructions': {
    ...accessibility.screenReaderOnly
  }
}
