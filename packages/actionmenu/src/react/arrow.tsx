import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  arrow: () => css(stylesheet['.psds-actionmenu__item__arrow']),
  arrowSvg: () => css(stylesheet['.psds-actionmenu__item__arrow__svg'])
}

export const Arrow: React.FC<HTMLPropsFor<'div'>> = props => (
  <div {...styles.arrow()} {...props} data-submenu-arrow>
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

Arrow.displayName = 'ActionMenu.Arrow'
