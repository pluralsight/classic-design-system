import { compose, css, keyframes } from 'glamor'
import React, { HTMLAttributes } from 'react'

import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import stylesheet from '../css'
import * as vars from '../vars'

const fade = keyframes(stylesheet[`@keyframes psds-tooltip__keyframes__fade`])
const styles = {
  tail: ({
    appearance,
    tailPosition
  }: {
    appearance: ValueOf<typeof vars.appearances>
    tailPosition?: ValueOf<typeof vars.tailPositions>
  }) => {
    const label = 'psds-tooltip__tail'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--appearance-${appearance}`]),
      css(stylesheet[`.${label}--tailPosition-${tailPosition}`])
    )
  },
  tooltip: ({
    appearance,
    onClose
  }: {
    appearance: ValueOf<typeof vars.appearances>
    onClose?: (evt?: React.MouseEvent) => void
  }) => {
    const label = 'psds-tooltip'
    const closeable = typeof onClose === 'function'

    return compose(
      css(stylesheet['.psds-tooltip']({ fade })),
      css(stylesheet[`.${label}--appearance-${appearance}`]),
      closeable && css(stylesheet[`.${label}--closeable`])
    )
  },
  close: (appearance: string) => {
    const label = 'psds-tooltip__close'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--appearance-${appearance}`])
    )
  }
}
interface CloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: (evt?: React.MouseEvent) => void
  appearance: ValueOf<typeof vars.appearances>
}
const CloseButton: React.FC<CloseButtonProps> = props => (
  <button
    {...styles.close(props.appearance)}
    onClick={props.onClick}
    aria-label="Close tooltip"
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

interface TooltipStatics {
  appearances: typeof vars.appearances
  tailPositions: typeof vars.tailPositions
}

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: ValueOf<typeof vars.appearances>
  children: React.ReactNode
  onClose?: (evt?: React.MouseEvent) => void
  tailPosition?: ValueOf<typeof vars.tailPositions>
}

interface TooltipComponent
  extends RefForwardingComponent<
    TooltipProps,
    HTMLDivElement,
    TooltipStatics
  > {}

const Tooltip = React.forwardRef(
  (
    {
      appearance = vars.appearances.basic,
      tailPosition,
      children,
      onClose,
      ...rest
    },
    ref
  ) => {
    return (
      <div {...styles.tooltip({ appearance, onClose })} {...rest} ref={ref}>
        {typeof onClose === 'function' && (
          <CloseButton appearance={appearance} onClick={onClose} />
        )}
        {children}
        {tailPosition && (
          <div {...styles.tail({ appearance, tailPosition })} aria-hidden />
        )}
      </div>
    )
  }
) as TooltipComponent

Tooltip.displayName = 'Tooltip'

Tooltip.appearances = vars.appearances
Tooltip.tailPositions = vars.tailPositions

export const appearances = vars.appearances
export const tailPositions = vars.tailPositions

export default Tooltip
