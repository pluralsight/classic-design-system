import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

export const MODAL_OVERLAY_ID = 'psds-actionmenu__overlay'

const styles = {
  overlay: () => css(stylesheet['.psds-actionmenu__overlay'])
}

const Overlay = props => {
  function handleOverlayClick(evt) {
    if (evt.target.id === MODAL_OVERLAY_ID) {
      if (typeof props.onClose === 'function') props.onClose(evt)
      if (typeof props.onClick === 'function') props.onClick(evt)
    }
  }
  return (
    <div
      {...filterReactProps(props)}
      id={MODAL_OVERLAY_ID}
      {...styles.overlay(props)}
      onClick={handleOverlayClick}
    />
  )
}
Overlay.propTypes = {
  onClick: PropTypes.func,
  onClose: PropTypes.func
}

export default Overlay
