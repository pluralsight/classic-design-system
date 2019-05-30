import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'

import CircularProgress from '../'

const valueStory = storiesOf('value', module)
;[0, 25, 50, 75, 100, 33, 66].forEach(value =>
  valueStory.add(`value ${value}`, _ => <CircularProgress value={value} />)
)

const sizeStory = storiesOf('size', module)
Object.keys(CircularProgress.sizes).forEach(size =>
  sizeStory.add(size, _ => <CircularProgress size={size} value={75} />)
)

const indeterminateStory = storiesOf('indeterminate', module)
Object.keys(CircularProgress.sizes).forEach(size =>
  indeterminateStory.add(size, _ => <CircularProgress size={size} />)
)

class AnimationDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const rando = Math.random() * 115
      this.setState({ value: rando > 100 ? 100 : rando })
    }, 1500)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <CircularProgress value={this.state.value} />
        <div style={{ color: core.colors.gray02 }}>
          Value: {this.state.value}
        </div>
      </div>
    )
  }
}

storiesOf('animation', module).add('animates to new values', _ => (
  <AnimationDemo />
))

storiesOf('style overrides', module)
  .add('style', _ => <CircularProgress style={{ outline: '1px solid red' }} />)
  .add('className (no viz change)', _ => (
    <CircularProgress className="someString" />
  ))
