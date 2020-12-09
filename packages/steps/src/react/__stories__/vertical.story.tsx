import { Meta, Story } from '@storybook/react/types-6-0'
import * as core from '@pluralsight/ps-design-system-core'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { css } from 'glamor'
import React from 'react'

import Steps from '..'

import { useStoryData } from './shared'

export default {
  title: 'Components/Steps/vertical',
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

export const Interactive: Story = () => {
  const { steps, selectStep } = useStoryData()

  return (
    <Steps>
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

  const isDark = useTheme() === 'dark'
  const backgroundColor = isDark
    ? core.colorsBackgroundDark[3]
    : core.colorsBackgroundLight[1]

  return (
    <div
      {...css({
        backgroundColor,
        borderRadius: 6,
        padding: core.layout.spacingMedium,
        width: 300
      })}
    >
      <Steps>
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
    </div>
  )
}
