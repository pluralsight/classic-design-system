import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { compose, css, media } from 'glamor'
import React from 'react'

import { pageWidthLayoutCSS as stylesheet } from '../css'

const styles = {
  layout: () =>
    compose(
      css(stylesheet['.psds-page-width-layout']),
      media(
        '(min-width: 769px)',
        stylesheet['@media (min-width: 769px)']['.psds-page-width-layout']
      )
    )
}

const PageWidthLayout: React.FC<HTMLPropsFor<'div'>> = props => {
  return (
    <div {...styles.layout()} {...props}>
      {props.children}
    </div>
  )
}
PageWidthLayout.displayName = 'PageWidthLayout'

export default PageWidthLayout
