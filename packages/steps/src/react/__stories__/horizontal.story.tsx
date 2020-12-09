import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Steps from '..'

import { useStoryData } from './shared'

export default {
  title: 'Components/Steps/horizontal',
  component: Steps
} as Meta

export const Basic: Story = () => {
  const { steps } = useStoryData()

  return (
    <Steps>
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
