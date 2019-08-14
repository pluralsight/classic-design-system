import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  overlay: () => css(stylesheet['.psds-actionmenu__overlay'])
}

const Overlay = props => (
  <div {...styles.overlay(props)} onClick={props.onClick} />
)
Overlay.propTypes = {
  onClick: PropTypes.func
}

export default Overlay
