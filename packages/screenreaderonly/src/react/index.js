import { css } from 'glamor'

import React from 'react'
import PropTypes from 'prop-types'

import { accessibility } from '@pluralsight/ps-design-system-core'

const ScreenReaderOnly = React.forwardRef((props, forwardedRef) => {
  const { as: Tag, ...rest } = props
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return <Tag ref={ref} {...css(accessibility.screenReaderOnly)} {...rest} />
})

ScreenReaderOnly.defaultProps = {
  as: 'div'
}

ScreenReaderOnly.propTypes = {
  as: PropTypes.string
}

export default ScreenReaderOnly
