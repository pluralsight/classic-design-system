import * as core from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import React from 'react'

import LinearProgress from '..'

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

const AnimationDemo = props => {
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

storiesOf('LinearProgress', module)
  .add('min width, no val', _ => <LinearProgress />)
  .add('fills container', _ => (
    <div
      style={{
        width: '200px',
        background: 'rgba(0, 100, 255, 0.5)',
        padding: '8px'
      }}
    >
      <LinearProgress value={66} />
    </div>
  ))
  .add('value, 0%', _ => <LinearProgress value={0} />)
  .add('value, 33%', _ => <LinearProgress value={33} />)
  .add('value, 50%', _ => <LinearProgress value={50} />)
  .add('value, 100%', _ => <LinearProgress value={100} />)
  .add('value, 999%', _ => <LinearProgress value={999} />)
  .add('animates to new values', _ => <AnimationDemo />)
