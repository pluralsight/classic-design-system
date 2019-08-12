import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  arrow: () => css(stylesheet['.psds-actionmenu__item__arrow']),
  arrowSvg: _ => css(stylesheet['.psds-actionmenu__item__arrow__svg'])
}

const Arrow = props => (
  <div {...styles.arrow(props)}>
    <svg
      width="4"
      height="9"
      viewBox="0 0 4 9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 .33l3.657 4.15L0 8.634V.33" {...styles.arrowSvg()} />
    </svg>
  </div>
)

export default Arrow
