import * as core from '@pluralsight/ps-design-system-core'
import { useMatchMedia } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
import glamor from 'glamor'
import React from 'react'

import Steps from '../index'
import { useStoryData } from './shared'

export default {
  title: 'Components/Steps/horizontal',
  component: Steps,
  decorators: [
    StoryFn => (
      <div {...glamor.css({ padding: core.layout.spacingMedium })}>
        <StoryFn />
      </div>
    )
  ]
} as Meta

export const Basic: Story = () => {
  const { steps } = useStoryData()

  return (
    <Steps orientation="horizontal">
      {steps.slice(0, 3).map((step, index) => (
        <Steps.Step
          key={index}
          description={step.status === 'current' && step.description}
          status={step.status}
        >
          {step.title}
        </Steps.Step>
      ))}
    </Steps>
  )
}

export const Medium: Story = () => {
  const { steps } = useStoryData()

  return (
    <Steps orientation="horizontal" size="medium">
      {steps.slice(0, 3).map((step, index) => (
        <Steps.Step
          key={index}
          description={step.status === 'current' && step.description}
          status={step.status}
        >
          {step.title}
        </Steps.Step>
      ))}
    </Steps>
  )
}

export const Interactive: Story = () => {
  const { steps, selectStep } = useStoryData()

  return (
    <Steps orientation="horizontal">
      {steps.slice(0, 3).map((step, index) => (
        <Steps.Step
          key={index}
          description={step.status === 'current' && step.description}
          onClick={() => selectStep(step)}
          status={step.status}
        >
          {step.title}
        </Steps.Step>
      ))}
    </Steps>
  )
}

export const Responsive: Story = () => {
  const { steps } = useStoryData()
  const mobile = !useMatchMedia(`(min-width: ${core.breakpoints.xSmall})`)

  const orientation = React.useMemo(
    () => (mobile ? 'vertical' : 'horizontal'),
    [mobile]
  )
  const size = React.useMemo(() => (mobile ? 'medium' : 'large'), [mobile])

  return (
    <Steps orientation={orientation} size={size}>
      {steps.slice(0, 3).map((step, index) => (
        <Steps.Step
          key={index}
          description={step.status === 'current' && step.description}
          status={step.status}
        >
          {step.title}
        </Steps.Step>
      ))}
    </Steps>
  )
}
