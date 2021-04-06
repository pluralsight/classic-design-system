import {
  HTMLPropsFor,
  ValueOf,
  isString
} from '@pluralsight/ps-design-system-util'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

import Context, { ContextValue, initialContext } from './context'

const glamor = glamorDefault || glamorExports

const styles = {
  steps: (
    themeName: ValueOf<typeof themeNames>,
    opts: { orientation: ValueOf<typeof vars.orientations> }
  ) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-steps']),
      glamor.css(stylesheet[`.psds-steps.psds-theme--${themeName}`]),
      glamor.css(stylesheet[`.psds-steps--${opts.orientation}`])
    ),
  step: (
    themeName: ValueOf<typeof themeNames>,
    opts: {
      interactive: boolean
      orientation: ValueOf<typeof vars.orientations>
      size: ValueOf<typeof vars.sizes>
      status: ValueOf<typeof vars.statuses>
    }
  ) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-steps__step']),
      glamor.css(stylesheet[`.psds-steps__step.psds-theme--${themeName}`]),
      glamor.css(stylesheet[`.psds-steps__step--${opts.orientation}`]),
      glamor.css(stylesheet[`.psds-steps__step--${opts.size}`]),
      glamor.css(stylesheet[`.psds-steps__step--${opts.status}`]),
      opts.interactive &&
        glamor.css(stylesheet['.psds-steps__step--interactive'])
    ),

  title: (
    themeName: ValueOf<typeof themeNames>,
    opts: {
      size: ValueOf<typeof vars.sizes>
      status: ValueOf<typeof vars.statuses>
    }
  ) => {
    const theme = `.psds-theme--${themeName}`
    const status = `.psds-steps__title--${opts.status}`

    return glamor.compose(
      glamor.css(stylesheet['.psds-steps__title']),
      glamor.css(stylesheet['.psds-steps__title' + theme]),
      glamor.css(stylesheet[`.psds-steps__title--${opts.size}`]),
      glamor.css(stylesheet[status]),
      glamor.css(stylesheet[status + theme])
    )
  },

  description: (opts: {
    size: ValueOf<typeof vars.sizes>
    status: ValueOf<typeof vars.statuses>
  }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-steps__description']),
      glamor.css(stylesheet[`.psds-steps__description--${opts.size}`]),
      glamor.css(stylesheet[`.psds-steps__description--${opts.status}`])
    ),

  markerContainer: (opts: { size: ValueOf<typeof vars.sizes> }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-steps__marker-container']),
      glamor.css(stylesheet[`.psds-steps__marker-container--${opts.size}`])
    ),

  marker: (
    themeName: ValueOf<typeof themeNames>,
    opts: {
      counter: boolean
      size: ValueOf<typeof vars.sizes>
      status: ValueOf<typeof vars.statuses>
    }
  ) => {
    const theme = `.psds-theme--${themeName}`
    const status = `.psds-steps__marker--${opts.status}`

    return glamor.compose(
      glamor.css(stylesheet['.psds-steps__marker']),
      glamor.css(stylesheet['.psds-steps__marker' + theme]),
      glamor.css(stylesheet[`.psds-steps__marker--${opts.size}`]),
      glamor.css(stylesheet[status]),
      glamor.css(stylesheet[status + theme]),
      !opts.counter &&
        glamor.css(stylesheet['.psds-steps__marker--hide-counter'])
    )
  },
  markerCircle: () => glamor.css(stylesheet['.psds-steps__marker__circle']),
  markerCheck: (opts: { status: ValueOf<typeof vars.statuses> }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-steps__marker__check']),
      glamor.css(stylesheet[`.psds-steps__marker__check--${opts.status}`])
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
  counter?: boolean
  orientation?: ValueOf<typeof Steps.orientations>
  size?: ValueOf<typeof Steps.sizes>
}
const Steps = React.forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const {
    counter = initialContext.counter,
    orientation = initialContext.orientation,
    size = initialContext.size,
    ...rest
  } = props

  const themeName = useTheme()
  const contextValue: ContextValue = { counter, orientation, size }

  return (
    <Context.Provider value={contextValue}>
      <div ref={ref} {...styles.steps(themeName, { orientation })} {...rest} />
    </Context.Provider>
  )
}) as React.ForwardRefExoticComponent<StepsProps> & StepsStatics

Steps.displayName = 'Steps'

interface StepProps extends HTMLPropsFor<'div'> {
  description?: React.ReactNode
  marker?: React.ComponentType<MarkerProps>
  renderMarkerContainer?: (props: HTMLPropsFor<'div'>) => React.ReactElement
  status: ValueOf<typeof Steps.statuses>
}
const defaultMarkerContainer = (props: HTMLPropsFor<'div'>) => (
  <div {...props} />
)

const Step = React.forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const {
    children,
    description,
    marker: StepMarker = Marker,
    renderMarkerContainer = defaultMarkerContainer,
    status,
    ...rest
  } = props

  const MarkerContainer = React.useMemo(() => renderMarkerContainer, [
    renderMarkerContainer
  ])

  const interactive = 'onClick' in props

  const themeName = useTheme()
  const { orientation, size } = React.useContext(Context)

  return (
    <div
      ref={ref}
      {...styles.step(themeName, { interactive, orientation, size, status })}
      {...rest}
    >
      <MarkerContainer {...styles.markerContainer({ size })}>
        <StepMarker status={status} />
      </MarkerContainer>

      <div>
        <div {...styles.title(themeName, { size, status })}>
          {isString(children) ? <p>{children}</p> : children}
        </div>

        {description && (
          <div {...styles.description({ size, status })}>
            {isString(description) ? <p>{description}</p> : description}
          </div>
        )}
      </div>
    </div>
  )
})
Step.displayName = 'Steps.Step'

interface MarkerProps extends Omit<HTMLPropsFor<'div'>, 'ref'> {
  status: ValueOf<typeof Steps.statuses>
}

const Marker = React.forwardRef<HTMLDivElement, MarkerProps>((props, ref) => {
  const { status, ...rest } = props

  const themeName = useTheme()
  const { counter, size } = React.useContext(Context)

  const [diameter, stroke, radius] = React.useMemo(() => {
    const large = size === 'large'
    const _diameter = large ? 36 : 24
    const _stroke = large ? 2 : 2
    const _radius = _diameter / 2 - _stroke / 2

    return [_diameter, _stroke, _radius]
  }, [size])

  return (
    <div
      ref={ref}
      {...styles.marker(themeName, { counter, size, status })}
      {...glamor.css({ width: diameter, height: diameter })}
      {...rest}
    >
      <svg viewBox={`0 0 ${diameter} ${diameter}`}>
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          strokeWidth={stroke}
          {...styles.markerCircle()}
        />

        <polyline
          strokeWidth={stroke}
          points={`
            ${diameter / 3.8} ${diameter / 2},
            ${diameter / 2.3} ${diameter / 1.5},
            ${diameter / 1.4} ${diameter / 3}
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
