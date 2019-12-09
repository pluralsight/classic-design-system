import { css } from 'glamor'

import React from 'react'
import PropTypes from 'prop-types'

import { accessibility } from '@pluralsight/ps-design-system-core'

const ScreenReaderOnly = React.forwardRef((props, ref) => {
  const { as: Tag, ...rest } = props

  return <Tag ref={ref} {...css(accessibility.screenReaderOnly)} {...rest} />
})

ScreenReaderOnly.defaultProps = {
  as: 'div'
}

ScreenReaderOnly.propTypes = {
  as: PropTypes.string
}

export default ScreenReaderOnly
