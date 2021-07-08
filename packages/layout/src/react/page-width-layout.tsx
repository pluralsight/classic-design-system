import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { pageWidthLayoutCSS as stylesheet } from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  layout: () =>
    glamor.compose(
      glamor.css(stylesheet['.psds-page-width-layout']),
      glamor.media(
        '(min-width: 769px)',
        stylesheet['@media (min-width: 769px)']['.psds-page-width-layout']
      )
    )
}

const PageWidthLayout: React.FC<React.HTMLAttributes<HTMLDivElement>> =
  props => {
    return (
      <div {...styles.layout()} {...props}>
        {props.children}
      </div>
    )
  }
PageWidthLayout.displayName = 'PageWidthLayout'

export default PageWidthLayout
