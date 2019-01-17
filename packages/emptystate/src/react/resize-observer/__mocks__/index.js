import PropTypes from 'prop-types'
import React from 'react'

const MockResizeObserver = ({ children }) => (
  <div data-mock-resize-observer>{children({ width: 600, height: 600 })}</div>
)

MockResizeObserver.propTypes = {
  children: PropTypes.func
}

export default MockResizeObserver
