import { layout, motion } from '../../core'

export default {
  '.psds-searchinput-clear': {
    margin: `0 0 0 ${layout.spacingXXSmall}`,
    flex: 'none',
    opacity: 0,
    transition: `opacity ${motion.speedNormal}`
  },
  '.psds-searchinput-clear--visible': {
    opacity: 1
  },
  '.psds-searchinput-field': {
    '&::-webkit-search-cancel-button': {
      display: 'none'
    }
  }
}
