import { Meta, Story } from '@storybook/react/types-6-0'
import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'

import LinearProgress from '../index'

export default {
  title: 'Components/LinearProgress',
  component: LinearProgress
} as Meta

export const MinWidthNoVal: Story = () => <LinearProgress />

export const FillsContainer: Story = () => (
  <div
    style={{
      width: '200px',
      background: 'rgba(0, 100, 255, 0.5)',
      padding: '8px'
    }}
  >
    <LinearProgress value={66} />
  </div>
)

export const ValuesAndSizes: Story = () => (
  <StoryGrid>
    {[0, 25, 33, 50, 66, 75, 100].reduce<(Element | JSX.Element)[]>(
      (acc, value) => [
        ...acc,
        <div key={'val' + value}>{value}</div>,
        <LinearProgress key={'line' + value} value={value} />
      ],
      []
    )}
  </StoryGrid>
)

export const Animation: Story = () => {
  const useRandom = () => {
    const [value, setValue] = React.useState(0)
    React.useEffect(() => {
      const interval = setInterval(() => {
        const rando = Math.floor(Math.random() * 115)
        setValue(rando > 100 ? 100 : rando)
      }, 2500)
      return () => clearInterval(interval)
    })
    return value
  }

  const AnimationDemo = () => {
    const value = useRandom()
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', minWidth: '300px' }}
      >
        <LinearProgress value={value} />
        <div style={{ color: core.colorsTextIcon.highOnDark }}>
          Value: {value}
        </div>
      </div>
    )
  }
  return <AnimationDemo />
}

const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' '),
        alignItems: 'center',
        justifyItems: 'left'
      }}
      {...rest}
    />
  )
}
