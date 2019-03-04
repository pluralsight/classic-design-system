import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import FocusManager from '@pluralsight/ps-design-system-focusmanager/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

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
  overlay: _ => glamor.css(css[`.psds-dialog__overlay`])
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
CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired
}

class ModalOverlay extends React.Component {
  constructor(props) {
    super(props)

    this.handleOverlayClick = this.handleOverlayClick.bind(this)
  }

  handleOverlayClick(evt) {
    if (this.props.disableCloseOnOverlayClick) return
    if (evt.target.id === MODAL_OVERLAY_ID) this.props.onClose(evt)
  }

  render() {
    return (
      <div
        {...styles.overlay(this.props)}
        aria-label={this.props['aria-label']}
        id={MODAL_OVERLAY_ID}
        onClick={this.handleOverlayClick}
        role="region"
      >
        {this.props.children}
      </div>
    )
  }
}
ModalOverlay.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  children: PropTypes.node,
  disableCloseOnOverlayClick: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

class Dialog extends React.Component {
  constructor(props) {
    super(props)

    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(evt) {
    if (evt.keyCode === ESCAPE_KEYCODE) this.props.onClose(evt)
  }

  render() {
    const { props } = this

    const dialogProps = {
      ...styles.dialog(props),
      ...(!props.disableCloseOnEscape && typeof props.onClose === 'function'
        ? { onKeyUp: this.handleKeyUp }
        : null),
      ...(props.style ? { style: props.style } : null),
      ...(props.className ? { className: props.className } : null)
    }
    return (
      <FocusManager
        autofocus={!props.disableFocusOnMount}
        trapped={!!props.modal || !!props.onClose}
        {...dialogProps}
      >
        <Theme name={Theme.names.light}>
          <div>
            {!props.disableCloseButton &&
              typeof props.onClose === 'function' && (
                <CloseButton onClose={props.onClose} />
              )}
            {props.children}
          </div>
        </Theme>
      </FocusManager>
    )
  }
}
Dialog.propTypes = {
  className: PropTypes.string,
  disableCloseButton: PropTypes.bool,
  disableCloseOnEscape: PropTypes.bool,
  disableFocusOnMount: PropTypes.bool,
  modal: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.object,
  tailPosition: PropTypes.oneOf(Object.keys(vars.tailPositions))
}

const DialogWrapper = props =>
  props.modal ? (
    <ModalOverlay {...props}>
      <Dialog {...props} />
    </ModalOverlay>
  ) : (
    <Dialog {...props} />
  )

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
