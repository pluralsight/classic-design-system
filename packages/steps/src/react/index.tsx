import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React, { forwardRef } from 'react'

import stylesheet from '../css'
import * as vars from '../vars'

const styles = {
  steps: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-steps']),
      css(stylesheet[`.psds-steps.psds-theme--${themeName}`])
    ),
  step: (
    themeName: ValueOf<typeof themeNames>,
    opts: { interactive: boolean }
  ) =>
    compose(
      css(stylesheet['.psds-steps__step']),
      css(stylesheet[`.psds-steps__step.psds-theme--${themeName}`]),
      opts.interactive && css(stylesheet['.psds-steps__step--interactive'])
    ),

  description: () => css(stylesheet['.psds-steps__description']),

  marker: (
    themeName: ValueOf<typeof themeNames>,
    opts: { status: ValueOf<typeof vars.statuses> }
  ) =>
    compose(
      css(stylesheet['.psds-steps__marker']),
      css(stylesheet[`.psds-steps__marker.psds-theme--${themeName}`]),
      css(stylesheet[`.psds-steps__marker--${opts.status}`])
    ),
  markerCircle: () => css(stylesheet['.psds-steps__marker__circle']),
  markerCheck: (opts: { status: ValueOf<typeof vars.statuses> }) =>
    compose(
      css(stylesheet['.psds-steps__marker__check']),
      css(stylesheet[`.psds-steps__marker__check--${opts.status}`])
    )
}

interface StepsStatics {
  Step: typeof Step
  Marker: typeof Marker
  orientations: typeof vars.orientations
  sizes: typeof vars.sizes
  statuses: typeof vars.statuses
}

interface StepsProps extends HTMLPropsFor<'div'> {
  orientation?: ValueOf<typeof Steps.orientations>
  size?: ValueOf<typeof Steps.sizes>
}
const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const { ...rest } = props
  const themeName = useTheme()

  return <div ref={ref} {...styles.steps(themeName)} {...rest} />
}) as React.ForwardRefExoticComponent<StepsProps> & StepsStatics

Steps.displayName = 'Steps'

interface StepProps extends HTMLPropsFor<'div'> {
  description?: React.ReactNode
  status: ValueOf<typeof Steps.statuses>
}
const Step = forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const { children, description, status, ...rest } = props
  const themeName = useTheme()
  const interactive = 'onClick' in props

  return (
    <div ref={ref} {...styles.step(themeName, { interactive })} {...rest}>
      <Marker status={status} />

      <div>
        {children}
        {description && <div {...styles.description()}>{description}</div>}
      </div>
    </div>
  )
})
Step.displayName = 'Steps.Step'

interface MarkerProps extends Omit<HTMLPropsFor<'div'>, 'ref'> {
  status: ValueOf<typeof Steps.statuses>
}
const Marker = forwardRef<HTMLDivElement, MarkerProps>((props, ref) => {
  const { status, ...rest } = props
  const themeName = useTheme()

  const size = 24
  const stroke = 2
  const radius = size / 2 - stroke / 2

  return (
    <div
      data-status={status}
      ref={ref}
      {...styles.marker(themeName, { status })}
      {...css({ width: size, height: size })}
      {...rest}
    >
      <svg viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          {...styles.markerCircle()}
        />

        <polyline
          strokeWidth={stroke}
          points={`
            ${size / 3.8} ${size / 2},
            ${size / 2.3} ${size / 1.5},
            ${size / 1.4} ${size / 3}
          `}
          {...styles.markerCheck({ status })}
        />
      </svg>
    </div>
  )
})

Marker.displayName = 'Steps.Marker'

Steps.Marker = Marker
Steps.Step = Step

Steps.orientations = vars.orientations
Steps.sizes = vars.sizes
Steps.statuses = vars.statuses

export default Steps
