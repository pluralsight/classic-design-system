import { compose, css, media } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { pageWidthLayoutCSS as stylesheet } from '../css/index.js'

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

function PageWidthLayout(props) {
  return (
    <div {...styles.layout()} {...props}>
      {props.children}
    </div>
  )
}
PageWidthLayout.displayName = 'PageWidthLayout'
PageWidthLayout.propTypes = {
  children: PropTypes.any
}

export default PageWidthLayout
