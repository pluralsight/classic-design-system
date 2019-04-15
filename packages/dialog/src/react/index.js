import * as glamor from 'glamor'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import FocusManager from '@pluralsight/ps-design-system-focusmanager/react'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Theme from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

import useOnKeyUp from './use-onkeyup.js'

const BACKDROP_ID = 'psds-dialog__overlay'

const isFunction = fn => typeof fn === 'function'

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
  backdrop: _ => glamor.css(css[`.psds-dialog__backdrop`])
}

export default function Dialog(props) {
  const ref = useRef()
  const {
    disableCloseButton,
    disableCloseOnEscape,
    disableCloseOnOverlayClick,
    modal,
    onClose
  } = props

  useOnKeyUp('Escape', evt => {
    if (disableCloseOnEscape || !isFunction(onClose)) return
    onClose(evt)
  })

  const handleBackdropClick = evt => {
    if (disableCloseOnOverlayClick || !isFunction(onClose)) return
    if (evt.target.id === BACKDROP_ID) onClose(evt)
  }

  const conditionallyRenderAsModal = modal
    ? children => <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>
    : children => children

  const showCloseBtn = !disableCloseButton && isFunction(onClose)

  return conditionallyRenderAsModal(
    <FocusManager
      autofocus={!props.disableFocusOnMount}
      trapped={modal || isFunction(onClose)}
      {...styles.dialog(props)}
    >
      <Theme name={Theme.names.light}>
        <div ref={ref} {...filterReactProps(props)}>
          {showCloseBtn && <CloseButton onClick={onClose} />}
          {props.children}
        </div>
      </Theme>
    </FocusManager>
  )
}

Dialog.propTypes = {
  children: PropTypes.node,
  disableCloseButton: PropTypes.bool,
  disableCloseOnEscape: PropTypes.bool,
  disableCloseOnOverlayClick: PropTypes.bool,
  disableFocusOnMount: PropTypes.bool,
  modal: PropTypes.bool,
  onClose: PropTypes.func,
  tailPosition: PropTypes.oneOf(Object.keys(vars.tailPositions))
}

Dialog.defaultProps = {
  disableCloseButton: false,
  disableCloseOnEscape: false,
  disableCloseOnOverlayClick: false,
  disableFocusOnMount: false,
  modal: false
}

Dialog.tailPositions = vars.tailPositions
export const tailPositions = Dialog.tailPositions

const Backdrop = props => (
  <div
    id={BACKDROP_ID}
    role="region"
    {...styles.backdrop(props)}
    {...filterReactProps(props)}
  />
)

const CloseButton = props => (
  <button
    aria-label="Close dialog"
    {...styles.close(props)}
    {...filterReactProps(props)}
  >
    <CloseIcon />
  </button>
)

const CloseIcon = () => (
  <svg
    aria-label="close icon"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12" />
  </svg>
)
