import {
  colorsBackgroundLight,
  colorsTextIcon,
  layout,
  type
} from '@pluralsight/ps-design-system-core'

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

  '&:active': {
    border: 'none',
    outline: 'none'
  },
  '&:focus': { outline: 0 },

  '&::-moz-focus-inner': {
    border: 0,
    padding: 0
  }
}

export default {
  '.psds-select': {
    label: 'select',

    minHeight: 40
  },
  '.psds-select--disabled': { pointerEvents: 'none' },

  '.psds-select__button': {
    ...resetButton,
    cursor: 'pointer',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    width: '100%'
  },

  '.psds-select__value': {
    marginRight: 'auto'
  },

  '.psds-select__prefix': {
    alignItems: 'center',
    display: 'flex'
  },
  '.psds-select__caret': {
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer'
  },

  '.psds-select__menu': {
    background: colorsBackgroundLight[3],
    borderRadius: '2px',
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    color: colorsTextIcon.highOnLight,
    fontSize: type.fontSize200,
    listStyle: 'none',
    marginLeft: 0,
    maxHeight: 400,
    maxWidth: 320,
    minWidth: 160,
    display: 'none',
    overflowY: 'auto',
    padding: `${layout.spacingXXSmall} 0`
  },
  '.psds-select__menu--open': { display: 'inline-block' },

  '.psds-select__menu__item': {
    background: 'none',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-block',
    padding: `${layout.spacingXXSmall} ${layout.spacingMedium}`,
    width: '100%'
  },
  '.psds-select__menu__item--highlighted': {
    background: colorsBackgroundLight[1]
  },

  '.psds-select__menu__item__label': {
    display: 'block',
    fontWeight: type.fontWeight500,
    width: '100%'
  },
  '.psds-select__menu__item__desc': {
    color: colorsTextIcon.lowOnLight,
    display: 'block',
    fontSize: type.fontSize100,
    width: '100%'
  }
}
