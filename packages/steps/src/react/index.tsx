import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React, { forwardRef } from 'react'

import stylesheet from '../css'

const styles = {
  steps: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-steps']),
      css(stylesheet[`.psds-steps.psds-theme--${themeName}`])
    )
}

interface StepsProps extends HTMLPropsFor<'div'> {
  renderContainer?: (props: unknown) => React.ReactElement
}

interface StepsStatics {
  Step: typeof Step
}

type StepsComponent = React.ForwardRefExoticComponent<StepsProps> & StepsStatics

const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const { ...rest } = props
  const themeName = useTheme()

  return <div ref={ref} {...styles.steps(themeName)} {...rest} />
}) as StepsComponent

Steps.displayName = 'Steps'

interface StepProps extends HTMLPropsFor<'div'> {
  renderContainer?: (props: unknown) => React.ReactElement
}
const Step = forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  return <div ref={ref} {...props} />
})

Step.displayName = 'Steps.Step'

Steps.Step = Step

export default Steps
