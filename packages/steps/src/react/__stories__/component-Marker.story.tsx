import { ValueOf } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
import { css } from 'glamor'
import React from 'react'

import Context, { initialContext } from '../context'
import Steps from '../index'
import * as vars from '../../vars/index'

const { Marker } = Steps

export default {
  title: 'Components/Steps/Marker',
  component: Marker,
  decorators: [
    StoryFn => (
      <div {...css({ counterReset: 'line-number 2' })}>
        <StoryFn />
      </div>
    )
  ]
} as Meta

export const CompletedLarge: Story = () => {
  return (
    <Context.Provider value={{ ...initialContext, size: 'large' }}>
      <Marker status="completed" />
    </Context.Provider>
  )
}

export const CompletedMedium: Story = () => {
  return (
    <Context.Provider value={{ ...initialContext, size: 'medium' }}>
      <Marker status="completed" />
    </Context.Provider>
  )
}

export const CurrentLarge: Story = () => {
  return (
    <Context.Provider value={{ ...initialContext, size: 'large' }}>
      <Marker status="current" />
    </Context.Provider>
  )
}

export const CurrentMedium: Story = () => {
  return (
    <Context.Provider value={{ ...initialContext, size: 'medium' }}>
      <Marker status="current" />
    </Context.Provider>
  )
}

export const IncompleteLarge: Story = () => {
  return (
    <Context.Provider value={{ ...initialContext, size: 'large' }}>
      <Marker status="incomplete" />
    </Context.Provider>
  )
}

export const IncompleteMedium: Story = () => {
  return (
    <Context.Provider value={{ ...initialContext, size: 'medium' }}>
      <Marker status="incomplete" />
    </Context.Provider>
  )
}

export const Animations: Story = () => {
  const [status, setStatus] = React.useState<ValueOf<typeof vars.statuses>>(
    'completed'
  )

  const advanceStatus = () => {
    const arr = Object.values(vars.statuses)
    const index = arr.indexOf(status)
    const nextIndex = index + 1 === arr.length ? 0 : index + 1
    setStatus(arr[nextIndex])
  }

  useInterval(advanceStatus, 1000)

  return (
    <Context.Provider value={{ ...initialContext }}>
      <Marker status={status} />
    </Context.Provider>
  )
}

type IntervalCallback = (...args: unknown[]) => void

function useInterval(callback: IntervalCallback, ms: number) {
  const callbackRef = React.useRef<IntervalCallback>()

  React.useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  React.useEffect(() => {
    const handler = (...args: unknown[]) => {
      if (!callbackRef.current) return
      callbackRef.current(...args)
    }

    if (ms !== null) {
      const intervalId = setInterval(handler, ms)
      return () => clearInterval(intervalId)
    }
  }, [ms])
}
