import { sizes } from '../vars'

export default {
  '.psds-field__input__container': {
    label: 'field__input__container',

    flex: '1'
  },

  '.psds-field__input': {
    label: 'field__input',

    border: 'none',
    outline: 'none',
    padding: 0,
    width: '100%',
    height: '38px',

    '&:focus': { outline: 'none' },

    '&[type=search]::-webkit-search-decoration': { appearance: 'none' },
    '&[type=search]::-webkit-search-cancel-button': { appearance: 'none' },
    '&[type=search]::-webkit-search-results-button': { appearance: 'none' },
    '&[type=search]::-webkit-search-results-decoration': { appearance: 'none' }
  },

  [`.psds-field__input--${sizes.small}`]: {
    height: '30px'
  }
}
