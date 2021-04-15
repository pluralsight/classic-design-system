import { ValueOf } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import * as vars from '../../vars/index'
import Steps from '../index'

import { FixedWidthContainer } from './shared'

const glamor = glamorDefault || glamorExports

export default {
  title: 'Components/Steps/examples',
  component: Steps,
  decorators: [
    StoryFn => (
      <FixedWidthContainer width={1000}>
        <StoryFn />
      </FixedWidthContainer>
    )
  ]
} as Meta

interface StoryStep {
  description: string
  status: ValueOf<typeof vars.statuses>
  title: string
}

export const Wizard: Story = () => {
  const [steps, setSteps] = React.useState<StoryStep[]>([
    {
      description: 'Prow scuttle parrel provost Sail ho shrouds',
      title: 'First step',
      status: vars.statuses.current
    },
    {
      description: 'Deadlights jack lad schooner scallywag dance',
      title: 'Second step',
      status: vars.statuses.incomplete
    },
    {
      description: 'Trysail Sail ho Corsair red ensign hulk smartly boom',
      title: 'Third step',
      status: vars.statuses.incomplete
    }
  ])

  const activeStep = steps.find(s => s.status === 'current')!
  const activeIndex = steps.indexOf(activeStep)

  const hasNext = activeIndex <= 1
  const hasPrev = activeIndex > 0

  const next: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!hasNext) return
    select(steps[activeIndex + 1])
  }

  const prev: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!hasPrev) return
    select(steps[activeIndex - 1])
  }

  const select = (step: StoryStep) => {
    const nextIndex = steps.indexOf(step)
    const nextSteps = steps.map<StoryStep>((step, i) => ({
      ...step,
      status:
        i === nextIndex ? 'current' : i < nextIndex ? 'completed' : 'incomplete'
    }))
    setSteps(nextSteps)
  }

  return (
    <>
      <Steps orientation="horizontal">
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

      <div
        {...glamor.css({
          backgroundColor: 'black',
          color: 'white',
          outline: '1px dashed pink',
          padding: 40
        })}
      >
        <p {...glamor.css({ margin: 20, textAlign: 'center' })}>
          <button disabled={!hasPrev} onClick={prev}>
            Previous
          </button>

          <span> </span>

          <button disabled={!hasNext} onClick={next}>
            Next
          </button>
        </p>

        <pre>{JSON.stringify(steps, null, 2)}</pre>
      </div>
    </>
  )
}
