import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Theme from '@pluralsight/ps-design-system-theme/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import CircularProgress from '../react'

const valueStory = storiesOf('value', module).addDecorator(
  themeDecorator(addons)
)
;[0, 25, 50, 75, 100, 33, 66].forEach(value =>
  valueStory.add(`value ${value}`, _ => <CircularProgress value={value} />)
)

const sizeStory = storiesOf('size', module).addDecorator(themeDecorator(addons))
Object.keys(CircularProgress.sizes).forEach(size =>
  sizeStory.add(size, _ => <CircularProgress size={size} value={75} />)
)

const indeterminateStory = storiesOf('indeterminate', module).addDecorator(
  themeDecorator(addons)
)
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

const animationStory = storiesOf('animation', module)
  .addDecorator(themeDecorator(addons))
  .add('animates to new values', _ => <AnimationDemo />)

const styleStory = storiesOf('style overrides', module)
  .addDecorator(themeDecorator(addons))
  .add('style', _ => <CircularProgress style={{ outline: '1px solid red' }} />)
  .add('className (no viz change)', _ => (
    <CircularProgress className="someString" />
  ))
