export default {
  '.psds-input__container': {
    label: 'input__container',

    flex: '1'
  },

  '.psds-input': {
    label: 'input',

    all: 'unset', // TODO: add a style reset that works in IE11
    width: '100%',

    '&[type=search]::-webkit-search-decoration': { appearance: 'none' },
    '&[type=search]::-webkit-search-cancel-button': { appearance: 'none' },
    '&[type=search]::-webkit-search-results-button': { appearance: 'none' },
    '&[type=search]::-webkit-search-results-decoration': { appearance: 'none' }
  }
}
