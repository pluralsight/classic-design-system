import FocusManager from '@pluralsight/ps-design-system-focusmanager'
import Theme from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf,
  createUniversalPortal,
  isFunction,
  stylesFor,
  usePortal
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports
/* eslint-disable-next-line camelcase */
const MODAL_OVERLAY_ID = 'psds-dialog__overlay'

const fade = glamor.keyframes(
  stylesheet['@keyframes psds-dialog__keyframes__fade']
)

const styles = {
  dialog: (modal: boolean, tailPosition?: ValueOf<typeof vars.tailPositions>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-dialog']({ fade })),
      modal && glamor.css(stylesheet['.psds-dialog--modal']),
      Boolean(tailPosition) &&
        glamor.compose(
          stylesheet['.psds-dialog--w-tail'],
          stylesheet[`.psds-dialog--tailPosition-${tailPosition}`]
        )
    ),
  content: (props: DialogProps) =>
    glamor.css(
      stylesheet['.psds-dialog__content'],
      stylesFor('dialog__content', props) as glamorExports.StyleAttribute
    ),
  close: () => glamor.css(stylesheet['.psds-dialog__close']),
  overlay: () => glamor.css(stylesheet['.psds-dialog__overlay'])
}

const CloseButton: React.FC<HTMLPropsFor<'button'>> = props => (
  <button {...styles.close()} {...props} aria-label="Close dialog">
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

interface OverlayProps extends HTMLPropsFor<'div'> {
  'aria-label'?: string
  disableCloseOnOverlayClick?: boolean
  onClose?: (evt: React.MouseEvent) => void
}

const Overlay: React.FC<OverlayProps> = ({
  disableCloseOnOverlayClick,
  onClose,
  ...props
}) => {
  function handleOverlayClick(evt: React.MouseEvent) {
    if (disableCloseOnOverlayClick) return
    if ((evt.target as HTMLDivElement).id === MODAL_OVERLAY_ID)
      onClose && onClose(evt)
  }

  return (
    <div
      {...styles.overlay()}
      {...props}
      id={MODAL_OVERLAY_ID}
      onClick={handleOverlayClick}
      role="region"
    />
  )
}

export interface DialogStatics {
  tailPositions: typeof vars.tailPositions
}
export interface DialogProps extends HTMLPropsFor<'div'> {
  'aria-label'?: string
  disableCloseButton?: boolean
  disableCloseOnEscape?: boolean
  disableCloseOnOverlayClick?: boolean
  disableFocusOnMount?: boolean
  modal?: boolean
  onClose?: (evt: React.KeyboardEvent | React.MouseEvent) => void
  tailPosition?: ValueOf<typeof vars.tailPositions>
  returnFocus?: boolean
  // eslint-disable-next-line camelcase
  UNSAFE_stylesFor?: Record<string, unknown>
}

export interface DialogComponent
  extends RefForwardingComponent<DialogProps, HTMLDivElement, DialogStatics> {}

const Dialog = React.forwardRef((props, ref) => {
  const {
    children,
    disableCloseButton = false,
    disableCloseOnEscape = false,
    disableCloseOnOverlayClick = false,
    disableFocusOnMount = false,
    onClose,
    modal = false,
    returnFocus = true,
    tailPosition,
    /* eslint-disable-next-line camelcase */
    UNSAFE_stylesFor,
    ...rest
  } = props

  const autofocus = !disableFocusOnMount
  const trapped = !!modal || !!onClose
  const closeOnEscape = isFunction(onClose) && !disableCloseOnEscape

  const portal = usePortal() as React.MutableRefObject<HTMLDivElement>

  // TODO: combine fns
  function handleKeyUp(evt: React.KeyboardEvent) {
    if (!isEscape(evt)) return
    onClose && onClose(evt)
  }

  const content = (
    <FocusManager
      {...styles.dialog(modal, tailPosition)}
      {...rest}
      {...(closeOnEscape && { onKeyUp: handleKeyUp })}
      {...(modal && { 'aria-label': undefined })}
      autofocus={autofocus}
      trapped={trapped}
      returnFocus={returnFocus}
      ref={ref}
    >
      <Theme name={Theme.names.light}>
        <div {...styles.content(props)}>
          {!disableCloseButton && isFunction(onClose) && (
            // eslint-disable-next-line react/jsx-handler-names
            <CloseButton onClick={onClose} />
          )}

          {children}
        </div>
      </Theme>
    </FocusManager>
  )

  return (
    <>
      {modal
        ? createUniversalPortal(
            <Overlay
              aria-label={rest['aria-label']}
              disableCloseOnOverlayClick={disableCloseOnOverlayClick}
              onClose={onClose}
            >
              {content}
            </Overlay>,
            portal.current
          )
        : content}
    </>
  )
}) as DialogComponent

Dialog.displayName = 'Dialog'

Dialog.tailPositions = vars.tailPositions
export const tailPositions = Dialog.tailPositions

export default Dialog

function isEscape(evt: React.KeyboardEvent) {
  return evt.key === 'Escape'
}
