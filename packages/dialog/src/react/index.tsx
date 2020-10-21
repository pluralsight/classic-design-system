import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import FocusManager from '@pluralsight/ps-design-system-focusmanager'
import Theme from '@pluralsight/ps-design-system-theme'
import { stylesFor } from '@pluralsight/ps-design-system-util'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const MODAL_OVERLAY_ID = 'psds-dialog__overlay'

const fade = css.keyframes(
  stylesheet['@keyframes psds-dialog__keyframes__fade']
)

const styles = {
  dialog: ({ modal, onClose, tailPosition }) =>
    compose(
      css(stylesheet['.psds-dialog']({ fade })),
      modal && css(stylesheet['.psds-dialog--modal']),
      tailPosition &&
        compose(
          stylesheet['.psds-dialog--w-tail'],
          stylesheet[`.psds-dialog--tailPosition-${tailPosition}`]
        )
    ),
  content: props =>
    css(
      stylesheet['.psds-dialog__content'],
      stylesFor('dialog__content', props)
    ),
  close: _ => css(stylesheet['.psds-dialog__close']),
  overlay: _ => css(stylesheet['.psds-dialog__overlay'])
}

const Dialog = React.forwardRef((props, ref) => {
  const autofocus = !props.disableFocusOnMount
  const trapped = !!props.modal || !!props.onClose
  const closeOnEscape = isFunction(props.onClose) && !props.disableCloseOnEscape
  const returnFocus = props.returnFocus

  // TODO: combine fns
  function handleKeyUp(evt) {
    if (!isEscape(evt)) return
    props.onClose(evt)
  }

  const content = (
    <FocusManager
      {...styles.dialog(props)}
      {...filterReactProps(props)}
      {...(closeOnEscape && { onKeyUp: handleKeyUp })}
      {...(props.modal && { 'aria-label': undefined })}
      autofocus={autofocus}
      trapped={trapped}
      returnFocus={returnFocus}
      ref={ref}
    >
      <Theme name={Theme.names.light}>
        <div {...styles.content(props)}>
          {!props.disableCloseButton && isFunction(props.onClose) && (
            <CloseButton onClick={props.onClose} />
          )}

          {props.children}
        </div>
      </Theme>
    </FocusManager>
  )

  return props.modal ? (
    <Overlay
      aria-label={props['aria-label']}
      disableCloseOnOverlayClick={props.disableCloseOnOverlayClick}
      onClose={props.onClose}
    >
      {content}
    </Overlay>
  ) : (
    content
  )
})

Dialog.displayName = 'Dialog'

Dialog.tailPositions = vars.tailPositions
export const tailPositions = Dialog.tailPositions

Dialog.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  disableCloseButton: PropTypes.bool,
  disableCloseOnEscape: PropTypes.bool,
  disableCloseOnOverlayClick: PropTypes.bool,
  disableFocusOnMount: PropTypes.bool,
  modal: PropTypes.bool,
  onClose: PropTypes.func,
  tailPosition: PropTypes.oneOf(Object.values(Dialog.tailPositions)),
  returnFocus: PropTypes.bool,
  UNSAFE_stylesFor: PropTypes.object
}

Dialog.defaultProps = {
  disableCloseButton: false,
  disableCloseOnEscape: false,
  disableCloseOnOverlayClick: false,
  disableFocusOnMount: false,
  modal: false,
  returnFocus: true
}

export default Dialog

function CloseButton(props) {
  return (
    <button
      {...styles.close(props)}
      {...filterReactProps(props, { tagName: 'button' })}
      aria-label="Close dialog"
    >
      <svg
        aria-label="close icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12" />
      </svg>
    </button>
  )
}

function Overlay(props) {
  function handleOverlayClick(evt) {
    if (props.disableCloseOnOverlayClick) return
    if (evt.target.id === MODAL_OVERLAY_ID) props.onClose(evt)
  }

  return (
    <div
      {...styles.overlay(props)}
      {...filterReactProps(props)}
      id={MODAL_OVERLAY_ID}
      onClick={handleOverlayClick}
      role="region"
    />
  )
}

Overlay.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  disableCloseOnOverlayClick: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

function isEscape(evt) {
  return evt.key === 'Escape'
}

function isFunction(fn) {
  return typeof fn === 'function'
}
