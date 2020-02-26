import { canUseDOM } from 'exenv'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

export const MODAL_OVERLAY_ID = 'psds-actionmenu__overlay'

const styles = {
  overlay: () => css(stylesheet['.psds-actionmenu__overlay'])
}

function Overlay(props) {
  if (!canUseDOM) return null

  function handleClick(evt) {
    if (evt.target.id !== MODAL_OVERLAY_ID) return

    if (typeof props.onClose === 'function') props.onClose(evt)
    if (typeof props.onClick === 'function') props.onClick(evt)
  }

  return createUniversalPortal(
    <div
      {...filterReactProps(props)}
      {...styles.overlay(props)}
      id={MODAL_OVERLAY_ID}
      onClick={handleClick}
    />,
    props.inNode
  )
}

Overlay.defaultProps = {
  inNode: canUseDOM ? document.body : null
}

Overlay.propTypes = {
  inNode: PropTypes.any,
  onClick: PropTypes.func,
  onClose: PropTypes.func
}

export default Overlay

function createUniversalPortal() {
  if (!canUseDOM) return null
  return ReactDOM.createPortal(...arguments)
}
