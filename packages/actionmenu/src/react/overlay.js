import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

export const MODAL_OVERLAY_ID = 'psds-actionmenu__overlay'

const styles = {
  overlay: () => css(stylesheet['.psds-actionmenu__overlay'])
}

const hasComponentRendered = () =>
  !!(
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.body !== 'undefined'
  )

const Overlay = props => {
  function handleOverlayClick(evt) {
    if (evt.target.id === MODAL_OVERLAY_ID) {
      if (typeof props.onClose === 'function') props.onClose(evt)
      if (typeof props.onClick === 'function') props.onClick(evt)
    }
  }
  return hasComponentRendered()
    ? ReactDOM.createPortal(
        <div
          {...filterReactProps(props)}
          id={MODAL_OVERLAY_ID}
          {...styles.overlay(props)}
          onClick={handleOverlayClick}
        />,
        document.body
      )
    : null
}
Overlay.propTypes = {
  onClick: PropTypes.func,
  onClose: PropTypes.func
}

export default Overlay
