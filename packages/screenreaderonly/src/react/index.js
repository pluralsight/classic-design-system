import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import stylesheet from '../css/index.js'

const styles = {
  screenReaderOnly: () => css(stylesheet['.psds-screen-reader-only'])
}

const ScreenReaderOnly = React.forwardRef((props, forwardedRef) => {
  const { as: Tag, ...rest } = props
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return <Tag ref={ref} {...styles.screenReaderOnly()} {...rest} />
})

ScreenReaderOnly.defaultProps = {
  as: 'div'
}

ScreenReaderOnly.propTypes = {
  as: PropTypes.string
}

export default ScreenReaderOnly
