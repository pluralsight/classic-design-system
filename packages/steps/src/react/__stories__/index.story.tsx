import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Steps from '..'

export default {
  title: 'Components/Steps',
  component: Steps
} as Meta

export const Two: Story = () => {
  return (
    <Steps>
      <Steps.Step>first</Steps.Step>
      <Steps.Step>second</Steps.Step>
    </Steps>
  )
}

export const Three: Story = () => {
  return (
    <Steps>
      <Steps.Step>first</Steps.Step>
      <Steps.Step>second</Steps.Step>
      <Steps.Step>third</Steps.Step>
    </Steps>
  )
}
