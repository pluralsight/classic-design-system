import * as core from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import React from 'react'

import LinearProgress from '../index.js'

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
      <div
        style={{ display: 'flex', flexDirection: 'column', minWidth: '300px' }}
      >
        <LinearProgress value={this.state.value} />
        <div style={{ color: core.colorsTextIcon.highOnDark }}>
          Value: {this.state.value}
        </div>
      </div>
    )
  }
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
