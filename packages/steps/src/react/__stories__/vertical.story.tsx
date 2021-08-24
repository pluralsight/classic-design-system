import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Steps from '../../index'
import { FixedWidthContainer, useStoryData } from './shared'

export default {
  title: 'Components/Steps/vertical',
  component: Steps
} as Meta

export const Basic: Story = () => {
  const { steps } = useStoryData()

  return (
    <Steps orientation="vertical">
      {steps.map((step, index) => (
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
    <Steps orientation="vertical" size="medium">
      {steps.map((step, index) => (
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
    <Steps orientation="vertical">
      {steps.map((step, index) => (
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

export const InFixedContainer: Story = () => {
  const { steps, selectStep } = useStoryData()

  return (
    <FixedWidthContainer>
      <Steps orientation="vertical">
        {steps.map((step, index) => (
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
    </FixedWidthContainer>
  )
}
