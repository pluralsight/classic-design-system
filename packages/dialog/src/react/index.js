import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

import css from '../css'
import * as vars from '../vars'

const ESCAPE_KEYCODE = 27
const MODAL_OVERLAY_ID = 'psds-dialog__overlay'

const fade = glamor.css.keyframes(
  css[`@keyframes psds-dialog__keyframes__fade`]
)
const styles = {
  dialog: ({ modal, onClose, tailPosition }) =>
    glamor.css({
      ...css[`.psds-dialog`]({ fade }),
      ...(modal ? css[`.psds-dialog--modal`] : null),
      ':after': tailPosition
        ? {
            ...css[`.psds-dialog:after`],
            ...css[`.psds-dialog--tailPosition-${tailPosition}:after`]
          }
        : null
    }),
  close: _ =>
    glamor.css({
      ...css[`.psds-dialog__close`],
      '> svg': css[`.psds-dialog__close > svg`]
    }),
  overlay: _ => glamor.css(css[`.psds-dialog__overlay`]({ fade }))
}

const CloseButton = props => (
  <button
    {...styles.close(props)}
    onClick={props.onClose}
    aria-label="Close dialog"
  >
    <svg
      role="img"
      aria-label="close icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12" />
    </svg>
  </button>
)

function handleKeyUp(props, evt) {
  if (evt.keyCode === ESCAPE_KEYCODE) props.onClose(evt)
}

function handleOverlayClick(props, evt) {
  if (evt.target.id === MODAL_OVERLAY_ID) props.onClose(evt)
}

const ModalOverlay = props => (
  <div
    {...styles.overlay(props)}
    id={MODAL_OVERLAY_ID}
    onClick={
      props.disableCloseOnOverlayClick
        ? null
        : handleOverlayClick.bind(this, props)
    }
  >
    {props.children}
  </div>
)

class Dialog extends React.Component {
  componentDidMount() {
    if (this.el && !this.props.disableFocusOnMount) this.el.focus()
  }
  render() {
    const { props } = this
    const dialogProps = {
      ...styles.dialog(props),
      ...(!this.props.disableCloseOnEscape &&
      typeof this.props.onClose === 'function'
        ? { onKeyUp: handleKeyUp.bind(this, this.props) }
        : null),
      ref: el => {
        this.el = el
        if (typeof props.ref === 'function') props.ref(el)
      },
      tabIndex: -1,
      ...(props.style ? { style: props.style } : null),
      ...(props.className ? { className: props.className } : null)
    }
    return (
      <div {...dialogProps}>
        <Theme name={Theme.names.light}>
          <div>
            {!props.disableCloseButton &&
              typeof props.onClose === 'function' && (
                <CloseButton onClose={props.onClose} />
              )}
            {props.children}
          </div>
        </Theme>
      </div>
    )
  }
}

class DialogWrapper extends React.Component {
  render() {
    const { props } = this
    return props.modal ? (
      <ModalOverlay {...props}>
        <Dialog {...props} />
      </ModalOverlay>
    ) : (
      <Dialog {...props} />
    )
  }
}

DialogWrapper.propTypes = {
  disableCloseButton: PropTypes.bool,
  disableCloseOnEscape: PropTypes.bool,
  disableCloseOnOverlayClick: PropTypes.bool,
  modal: PropTypes.bool,
  disableFocusOnMount: PropTypes.bool,
  tailPosition: PropTypes.oneOf(Object.keys(vars.tailPositions)),
  onClose: PropTypes.func
}
DialogWrapper.defaultProps = {
  disableCloseButton: false,
  disableCloseOnEscape: false,
  disableCloseOnOverlayClick: false,
  disableFocusOnMount: false,
  modal: false
}

DialogWrapper.tailPositions = vars.tailPositions

export const tailPositions = vars.tailPositions

export default DialogWrapper
