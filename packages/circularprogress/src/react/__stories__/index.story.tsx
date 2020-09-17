import * as core from '@pluralsight/ps-design-system-core'
import * as React from 'react'
import { storiesOf } from '@storybook/react'

import CircularProgress from '../../index.js'

const valueStory = storiesOf('value', module)
;[0, 25, 50, 75, 100, 33, 66].forEach(value =>
  valueStory.add(`value ${value}`, _ => <CircularProgress value={value} />)
)

const sizeStory = storiesOf('size', module)
Object.values(CircularProgress.sizes).forEach(size =>
  sizeStory.add(size, _ => <CircularProgress size={size} value={75} />)
)

const indeterminateStory = storiesOf('indeterminate', module)
Object.values(CircularProgress.sizes).forEach(size =>
  indeterminateStory.add(size, _ => <CircularProgress size={size} />)
)

storiesOf('animation', module).add('animates to new values', _ => {
  const AnimationDemo = () => {
    const [value, updateValue] = React.useState(0)

    React.useEffect(function () {
      const interval = setInterval(() => {
        const rando = Math.random() * 115
        updateValue(rando)
      }, 1500)

      return () => clearInterval(interval)
    }, [])

    return (
      <div>
        <CircularProgress value={value} />

        <div style={{ color: core.colorsTextIcon.highOnDark }}>
          Value: {value}
        </div>
      </div>
    )
  }

  return <AnimationDemo />
})

storiesOf('style overrides', module)
  .add('style', _ => <CircularProgress style={{ outline: '1px solid red' }} />)
  .add('className (no viz change)', _ => (
    <CircularProgress className="someString" />
  ))
