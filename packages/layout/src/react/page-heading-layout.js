import * as glamor from 'glamor'
import Text from '@pluralsight/ps-design-system-text/react'
import PropTypes from 'prop-types'
import React from 'react'

import { PageHeadingLayout as css } from '../css'

const style = glamor.css(css['.psds-page-heading-layout'])

const PageHeadingLayout = props => (
  <div {...style}>
    <Text.Heading size={Text.Heading.sizes.large}>{props.heading}</Text.Heading>
    {props.children}
  </div>
)

PageHeadingLayout.displayName = 'PageHeadingLayout'

PageHeadingLayout.propTypes = {
  heading: PropTypes.element.isRequired
}

export default PageHeadingLayout
