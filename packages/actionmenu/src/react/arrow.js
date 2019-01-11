import * as glamor from 'glamor'
import React from 'react'

import css from '../css/index.js'

export default _ => (
  <svg
    width="4"
    height="9"
    viewBox="0 0 4 9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 .33l3.657 4.15L0 8.634V.33"
      {...glamor.css(css['.psds-actionmenu__item__arrow__svg'])}
    />
  </svg>
)
