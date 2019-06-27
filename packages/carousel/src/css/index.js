import core from '@pluralsight/ps-design-system-core'

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
  '.psds-carousel': {
    position: 'relative',
    outline: '1px solid yellow'
  },

  '.psds-carousel__controls': {},
  '.psds-carousel__controls__control': {
    ...resetButton,
    background: 'white',
    borderRadius: '100%',
    height: '36px',
    position: 'absolute',
    top: '50%',
    width: '36px',

    '&:hover': {
      cursor: 'pointer'
    }
  },
  '.psds-carousel__controls__control--prev': {
    left: 0,
    transform: 'translate(-50%, -50%)'
  },
  '.psds-carousel__controls__control--next': {
    right: 0,
    transform: 'translate(50%, -50%)'
  },

  '.psds-carousel__pages': {
    display: 'flex',
    overflow: 'hidden',
    width: '100%'
  },

  '.psds-carousel__page': {
    alignItems: 'flex-start',
    display: 'flex',
    flex: '1 0 100%',
    margin: `0 calc(${core.layout.spacingSmall}/2)`,
    transition: `transform ${core.motion.speedXSlow} ease-in-out`,

    outline: '3px solid red',

    '&:first-child': { marginLeft: 0 },
    '&:last-child': { marginRight: 0 }
  },

  '.psds-carousel__item': {
    margin: `0 calc(${core.layout.spacingSmall}/2)`,
    flex: 1,

    '&:first-child': { marginLeft: 0 },
    '&:last-child': { marginRight: 0 }
  }
}
